# Heap Hierarch

A full-stack web application with AWS CDK infrastructure deployment.

## Project Structure

```
.
├── site/          # Frontend React application
└── infra/         # AWS CDK infrastructure as code
```

## Site (Frontend)

React-based website built with modern tooling and UI frameworks.

### Tech Stack
- **React 18.3** - UI framework
- **TypeScript 5.7** - Type safety
- **Parcel 2.16** - Zero-config bundler
- **Ant Design 5.22** - UI component library
- **MUI Joy** - Additional UI components
- **React Router 6.28** - Client-side routing
- **Styled Components & Emotion** - CSS-in-JS styling

### Development

```bash
cd site
npm install
npm run serve    # Start dev server on https://localhost:3000
npm run build    # Production build to dist/
```

## Infra (AWS CDK)

Infrastructure deployment using AWS Cloud Development Kit.

### Tech Stack
- **AWS CDK 2.1100** - Infrastructure as code
- **TypeScript 5.7** - Type safety
- **CloudFront** - CDN distribution
- **S3** - Static hosting and logging
- **Route 53** - DNS management
- **Certificate Manager** - SSL/TLS certificates

### Features
- CloudFront distribution with custom domain
- S3 bucket deployment with versioning
- WAF integration ready
- Security headers and CSP
- Automated bucket deployment from site build

### Development

```bash
cd infra
npm install
npm run build    # Compile TypeScript
npm run watch    # Watch mode
npm test         # Run tests
npm run cdk      # CDK commands
```

### Deployment

```bash
cd infra
npm run cdk deploy -- --profile <aws-profile>
```

## Prerequisites

- Node.js 18+ and npm
- AWS CLI configured (for infra deployment)
- AWS account with appropriate permissions

## Configuration

Infrastructure configuration is managed in [infra/lib/config.ts](infra/lib/config.ts) including:
- Domain settings
- Route 53 hosted zone
- ACM certificate ARN

## License

ISC
