import React from 'react';

export default function Experience() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Senior Software Development Engineer, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2023 - Present • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Architected and led development of ring.com Chat Service integrating generative AI, delivering scalable customer support solution serving millions of users</li>
                    <li>Drive technical strategy across cross-functional teams, establishing architectural patterns and engineering best practices</li>
                    <li>Mentor senior engineers on system design, code quality, and distributed systems architecture</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer II, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2021 - April 2023 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Led team of engineers building microservices for Ring's real-time customer communication platform</li>
                    <li>Designed and deployed critical infrastructure supporting 10M+ daily active users with 99.9% uptime</li>
                    <li>Reduced latency by 40% through architectural improvements and caching strategies</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer</h3>
                <p className="text-gray-400">Amazon (Ring) • February 2020 - April 2021 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Built backend services for Ring's IoT device ecosystem, handling 100M+ daily events</li>
                    <li>Implemented OAuth 2.0 authentication system improving security posture across platform</li>
                    <li>Optimized database queries reducing response times from 200ms to 50ms</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Developer</h3>
                <p className="text-gray-400">Prognos Trading LLC • 2019 - 2020 • Contractor</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Engineered ultra-low-latency C++ feed handlers parsing market data from top 12 cryptocurrency exchanges with sub-microsecond precision</li>
                    <li>Optimized data pipelines for high-frequency trading, processing 1M+ messages per second</li>
                    <li>Reduced memory footprint by 60% through custom allocators and lock-free data structures</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Engineer II</h3>
                <p className="text-gray-400">American Express • January 2019 - February 2020 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Developed payment processing infrastructure handling billions in daily transactions</li>
                    <li>Built RESTful APIs for merchant services, reducing integration time by 50%</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Research Aide</h3>
                <p className="text-gray-400">Arizona State University • May 2017 - December 2018 • Tempe, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Published 3 peer-reviewed papers as primary author on network optimization and combinatorial algorithms</li>
                    <li>Conducted hardware experiments validating novel testing methodologies for network systems</li>
                    <li>Completed Master's thesis on locating arrays with applications to software testing</li>
                </ul>
            </div>
        </div>
    );
}
