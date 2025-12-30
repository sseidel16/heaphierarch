import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import { BlockPublicAccess, Bucket, ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { CfnWebACL } from 'aws-cdk-lib/aws-wafv2';
import { AllowedMethods, BehaviorOptions, CacheCookieBehavior, CacheHeaderBehavior, CachePolicy, CacheQueryStringBehavior, Distribution, HeadersReferrerPolicy, OriginAccessIdentity, ResponseHeadersPolicy, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { HttpOrigin, S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export type InfraStackConfig = {
    dns: {
        domain: string;
        hostedZoneId: string;
        certificateArn: string;
    }
};

export class InfraStack extends Stack {
    constructor (scope: Construct, id: string, props: StackProps, config: InfraStackConfig) {
        super(scope, id, props);

        const loggingBucket = this.createLoggingBucket();
        const websiteBucket = this.createWebsiteBucket();

        const csp = this.createCsp();

        const cloudfront = this.createCloudfrontDistribution(
            websiteBucket,
            loggingBucket,
            {
                // no APIs yet
            },
            {
                '/*': [websiteBucket, '/static'],
            },
            undefined, // no waffles yet
            csp,
            {
                domain: config.dns.domain,
                certificateArn: config.dns.certificateArn,
                hostedZoneId: config.dns.hostedZoneId,
            },
        );

        new BucketDeployment(this, 'BucketDeployment', {
            sources: [Source.asset('../site/dist')],
            destinationBucket: websiteBucket,
            destinationKeyPrefix: 'static',
            retainOnDelete: false,
            distribution: cloudfront,
            distributionPaths: ['/*'],
        });

    }

    /**
     * Generates a content security policy. Keep this strict!
     * @returns 
     */
    createCsp = () => {
        return [
            `default-src 'self';`,
            `font-src https://fonts.gstatic.com;`,
            `img-src 'self';`,
            `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`,
        ].join(' ');
    };

    createWebsiteBucket = () => {
        const websiteBucket = new Bucket(this, 'WebsiteBucket', {
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            enforceSSL: true,
            metrics: [{
                id: 'WebsiteMetric',
            }]
        });

        return websiteBucket;
    };

    createLoggingBucket = () => {
        const loggingBucket = new Bucket(this, 'LoggingBucket', {
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            objectOwnership: ObjectOwnership.BUCKET_OWNER_PREFERRED,
            enforceSSL: true,
        });

        return loggingBucket;
    };

    createCloudfrontDistribution = (
        websiteBucket: Bucket,
        logBucket: Bucket,
        apiMapping: { [pathPattern: string]: IRestApi },
        s3Mapping: { [pathPattern: string]: [Bucket, string] },
        wafWebAcl: CfnWebACL | undefined,
        contentSecurityPolicy: string,
        customDomain: {
            domain: string,
            certificateArn: string,
            hostedZoneId: string,
        },
    ) => {
        const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity', {
            comment: 'CloudFront OAI for S3 UI files',
        });

        websiteBucket.grantRead(originAccessIdentity);

        const certificate = Certificate.fromCertificateArn(
            this, 'Certificate', customDomain.certificateArn
        );

        const domainName = customDomain.domain;

        // similar to amplify
        const apiCachePolicy = new CachePolicy(this, 'ApiCachePolicy', {
            minTtl: Duration.seconds(0),
            defaultTtl: Duration.seconds(0),
            maxTtl: Duration.seconds(1),
            headerBehavior: CacheHeaderBehavior.allowList(
                'Authorization',
                'Accept-Language',
                'User-Agent',
            ),
            cookieBehavior: CacheCookieBehavior.all(),
            queryStringBehavior: CacheQueryStringBehavior.all(),
        });

        const responseHeadersPolicy = new ResponseHeadersPolicy(this, 'SecurityHeadersPolicy', {
            responseHeadersPolicyName: 'HeapHierarchSecurityHeadersPolicy',
            securityHeadersBehavior: {
                contentTypeOptions: {
                    override: true,
                },
                strictTransportSecurity: {
                    accessControlMaxAge: Duration.days(365),
                    override: true,
                },
                referrerPolicy: {
                    referrerPolicy: HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
                    override: true,
                },
                contentSecurityPolicy: {
                    contentSecurityPolicy,
                    override: true,
                },
            },
        });

        const cloudfront = new Distribution(this, 'CloudFront', {
            comment: 'CloudFront for UI',
            defaultBehavior: {
                origin: S3BucketOrigin.withOriginAccessIdentity(s3Mapping['/*'][0], {
                    originPath: s3Mapping['/*'][1],
                    originAccessIdentity,
                }),
                responseHeadersPolicy,
                allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            additionalBehaviors: {
                ...Object.entries(s3Mapping)
                    .filter(([pathPattern]) => pathPattern !== '/*')
                    .map(([pathPattern, [bucket, path]]) => ({
                        [pathPattern]: {
                            origin: S3BucketOrigin.withOriginAccessIdentity(bucket, {
                                originPath: path,
                                originAccessIdentity,
                            }),
                            allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
                            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                        },
                    })).reduce((o1, o2) => ({ ...o1, ...o2 }), {}),
                ...Object.keys(apiMapping)
                    .map(pathPattern => ({
                        [pathPattern]: {
                            origin: new HttpOrigin(`${apiMapping[pathPattern].restApiId}.execute-api.${this.region}.${this.urlSuffix}`),
                            allowedMethods: AllowedMethods.ALLOW_ALL,
                            cachePolicy: apiCachePolicy,
                            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                        } as BehaviorOptions,
                    })).reduce((o1, o2) => ({ ...o1, ...o2 }), {}),
            },
            errorResponses: [
                {
                    ttl: Duration.minutes(5),
                    httpStatus: 404,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                },
            ],
            defaultRootObject: 'index.html',
            logBucket,
            logIncludesCookies: true,
            logFilePrefix: 'logs/',
            certificate,
            domainNames: [domainName],
            webAclId: wafWebAcl?.attrArn,
        });

        new ARecord(this, 'CloudfrontRecord', {
            recordName: domainName,
            target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfront)),
            zone: HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
                hostedZoneId: customDomain.hostedZoneId,
                zoneName: domainName,
            }),
        });

        return cloudfront;
    };

}
