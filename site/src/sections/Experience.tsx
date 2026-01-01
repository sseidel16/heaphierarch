import React from 'react';

export default function Experience() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Senior Software Development Engineer, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2023 - Present • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Lead a team of 7 engineers building Ring's customer-facing communication platform and secure file infrastructure</li>
                    <li>Architected ring.com's generative AI chat service from the ground up (React UI, backend services, AI integration) handling 3M+ messages weekly with 200K+ AI queries</li>
                    <li>Built secure file upload system with end-to-end encryption, pre-warmed container isolation, and intelligent file mapping (images, videos, audio)</li>
                    <li>Own the technical roadmap for multiple products while mentoring engineers on architecture, security, and best practices</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer II, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2021 - April 2023 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Promoted to tech lead for 4-person development team, guiding technical decisions across full-stack applications</li>
                    <li>Became Application Security Certifier, running security certifications for Ring camera firmware, Alexa services, and IoT devices</li>
                    <li>Found and eliminated critical buffer overflow vulnerabilities in Ring Marlin camera firmware during certification process</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer</h3>
                <p className="text-gray-400">Amazon (Ring) • February 2020 - April 2021 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Primary developer for Ring's chat platform and phone callback application—built the full AWS stack and designed Ring's first in-house chat UI</li>
                    <li>Created both customer-facing interface and internal agent control panel from scratch</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Developer</h3>
                <p className="text-gray-400">Prognos Trading LLC • 2019 - 2020 • Contractor</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Solo implementation of ultra-low-latency C++ market data infrastructure for high-frequency cryptocurrency trading</li>
                    <li>Built custom parsers for 12 major exchanges from scratch—websocket connections, zero-copy JSON parsing, cache-optimized storage</li>
                    <li>Engineered order book builder handling millions of messages per second with microsecond-level precision</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Engineer II</h3>
                <p className="text-gray-400">American Express • January 2019 - February 2020 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Built enterprise data distribution framework for in-memory caching and versioning using Netflix Hollow and gRPC</li>
                    <li>Designed and presented data versioning solution to engineering leadership</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • Summer 2018 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Performance benchmarking across GraphQL server implementations (Spring Boot, Node.js, Vert.x)</li>
                    <li>Led GraphQL training session for development teams across the company</li>
                    <li>Integrated React components into existing Angular codebase</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • Summer 2017 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Developed Spring Boot APIs with comprehensive testing suite—unit tests, BDD with Cucumber, integration tests with Rest Assured, mutation testing with PIT</li>
                    <li>Built Redis caching solution integrated with Spring Boot</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Research Aide</h3>
                <p className="text-gray-400">Arizona State University • May 2017 - December 2018 • Tempe, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Researched wireless network performance optimization using novel combinatorial algorithms (locating arrays)</li>
                    <li>Developed C software suite to construct minimal locating arrays and identify critical factors affecting network performance</li>
                    <li>Published 3 peer-reviewed papers as primary author on network optimization and combinatorial testing methodologies</li>
                </ul>
            </div>
        </div>
    );
}
