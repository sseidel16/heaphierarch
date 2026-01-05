import React from 'react';

export default function Experience() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Senior Software and Systems Engineer, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2023 - Present • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Lead team of 7 engineers across secure file upload infrastructure, AI chat systems, and customer communication platforms</li>
                    <li>Architected and built ring.com's AI-powered chat service from concept to production: designed React UI, backend architecture, and integrated generative AI with Claude models and AWS Bedrock (Knowledge Bases, Agents). Implemented guardrails and streamed responses. Now serving 3M+ messages weekly with 200K+ AI interactions</li>
                    <li>Created secure file upload system with end-to-end encryption. Isolated containers for each upload with pre-warmed pools for latency optimization. Intelligent detection and mapping for images/videos/audio using separate algorithm-controlled warming. Controls role access by internal employees to download final mapped customer files</li>
                    <li>Own multiple internal full-stack tools including the chat service, secure file upload, metrics dashboards, IVR microservices, and employee performance suite</li>
                    <li>Balance technical roadmap ownership with mentoring engineers, leading multiple product initiatives simultaneously</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • February 2020 - April 2023 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Owned Ring's first in-house chat platform end-to-end: designed and built customer-facing chat UI using React, architected AWS backend infrastructure including Lambda, API Gateway, and DynamoDB, developed agent control panel and concurrent chat UI for customer support representatives. Head developer responsible for all architectural decisions on greenfield project</li>
                    <li>Tech lead starting April 2021, guiding technical decisions for team of 4 engineers across full-stack applications</li>
                    <li>Application Security Certifier (April 2021 - April 2023) - Ran security certifications for critical Ring and Alexa systems: Ring Marlin camera firmware (discovered and eliminated multiple buffer overflow vulnerabilities), Alexa Bluetooth firmware libraries on IoT devices, and Alexa target determination services</li>
                    <li>Built phone callback application enabling customers to receive calls from Ring support</li>
                    <li>Established team technical standards and best practices for full-stack development, mentored engineers on system design, AWS architecture, and React best practices</li>
                    <li>Developed microservices for Ring ecosystem using Node.js, TypeScript, and AWS CDK. Implemented REST APIs and GraphQL services for customer communication platforms</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Developer</h3>
                <p className="text-gray-400">Prognos Trading LLC • March 2019 - August 2019 • Contractor</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Singly implemented initial hyper-efficient C++ parsers and book builder for 12 cryptocurrency exchanges</li>
                    <li>Connected to websockets for real-time market data feeds, implemented zero-copy JSON parsing for minimal latency</li>
                    <li>Developed cache-optimized storage structures and built lock-free data structures for high-frequency trading infrastructure</li>
                    <li>Focused on extreme low-latency requirements enabling microsecond-level decision making</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Engineer II</h3>
                <p className="text-gray-400">American Express • January 2019 - February 2020 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Head developer for enterprise data distribution framework supporting new microservices network. Lightweight software library ran on microservice containers, loaded versioned financial metadata updates</li>
                    <li>Implemented differential loading (only diffs on updates) for efficiency. Built ultra-efficient in-memory cache providing microsecond-level access to financial metadata</li>
                    <li>Containers accessed metadata through library cache without managing updates themselves. Strict versioning ensured requests for specific versions would fail rather than use stale data</li>
                    <li>Presented data versioning software using Netflix Hollow and gRPC to engineering leadership, who subsequently adopted the framework for deployment at scale across their new microservices network</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • June 2018 - August 2018 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Worked on architecture team during company-wide rollout of standardized React framework for UI design</li>
                    <li>Solved critical migration challenge for commercial division's legacy Angular UIs: developed unique approach to incrementally replace individual Angular components with company's React framework components. Rebuilt portions of company React framework to function within partial Angular environment, enabling gradual migration one component at a time</li>
                    <li>Converted multiple APIs from REST to GraphQL where appropriate, compared performance across Spring Boot, Node.js, and Vert.x implementations</li>
                    <li>Developed GraphQL implementations and trained company developers through training sessions. Presented improvements and migration strategy to engineering leadership</li>
                    <li>Externalized business rules using Drools and decision tables as proof-of-concept. Work received extremely well, leading to return offer</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Research Aide</h3>
                <p className="text-gray-400">Arizona State University • May 2017 - December 2018 • Tempe, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Conducted wireless network performance research and modeling using locating arrays</li>
                    <li>Developed, tested, and optimized a software suite (C code) to build minimal locating arrays. Expanded software suite to find relevant factors and interactions between factors relating to network performance</li>
                    <li>Published 3 papers as primary author at IEEE INFOCOM, IWOCA, and SpringSim conferences</li>
                    <li>Research directly contributed to Master's thesis on locating arrays construction, analysis, and robustness</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • June 2017 - August 2017 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Worked in commercial/business cards division as part of architecture team, modernizing legacy Spring codebase with outdated testing principles</li>
                    <li>Rewrote multiple APIs in Spring Boot, demonstrating how much existing boilerplate Java code could be eliminated with Spring Boot and modern frameworks</li>
                    <li>Implemented state-of-the-art testing capabilities: unit testing using Spring Test, BDD with Cucumber scripting, integration testing using Rest Assured, mutation testing using PIT, performance testing using JMeter, and API documentation using Swagger</li>
                    <li>Created Redis caching solution integrated with Spring Boot, addressing cache invalidation challenges</li>
                    <li>Work received positively by division leadership, leading to return offer which I declined to pursue a Master's degree</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Intern</h3>
                <p className="text-gray-400">Fast Enterprises • May 2016 - August 2016</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Met with employees at Kansas City, MO City Hall to understand pain points in their tax software system workflow</li>
                    <li>Completely redesigned enterprise software pages for city business registration: replaced old UI with step-by-step wizard guide, implemented intelligent auto-pull of data based on previous answers to eliminate tedious manual entry</li>
                    <li>Improved experience for both online taxpayers and city staff. Work received well, leading to return offer</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Intern</h3>
                <p className="text-gray-400">SolutionStart Technologies • May 2015 - August 2015</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Worked for IT solutions provider managing software and systems for dental offices</li>
                    <li>Developed desktop tray application using C#, .NET, and Visual Studio: enabled dental offices to open support cases directly from system tray with automatic diagnostic information, eliminating need for phone calls and speeding up issue resolution</li>
                    <li>Constructed, deconstructed, recovered, imaged and reimaged PCs for dental office deployments. Routinely configured and deployed servers, routers, and Fortinet firewalls for client sites</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Math and Technology Tutor</h3>
                <p className="text-gray-400">Central Arizona College • August 2014 - May 2015</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Worked daily with many different students with varying degrees of technological ability</li>
                    <li>Taught programming techniques and languages including C++, Visual Basic, Java and MATLAB</li>
                    <li>Tutored mathematics courses through Calculus III and Differential Equations. Only tutor for higher-level math classes</li>
                    <li>Provided GED prep tutoring for students who dropped out of high school</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">IT Intern</h3>
                <p className="text-gray-400">SXP Analytics • Summer 2011</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>First tech internship at a high-frequency trading company. IT responsibilities included tracing network cables and building computer hardware</li>
                    <li>Wrote Linux scripts to translate company wikis from legacy format to newer web-browsable format</li>
                    <li>Too young to receive monetary payment, compensated with first personal laptop: high-end machine with 8GB RAM, 500GB storage, latest-gen i7, good graphics card (valued over $2000). Laptop fueled countless personal programming projects over subsequent years</li>
                    <li>Never accessed trading algorithms (not trusted to intern), but gained exposure to high-frequency trading environment</li>
                </ul>
            </div>
        </div>
    );
}
