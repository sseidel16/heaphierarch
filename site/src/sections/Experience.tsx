import React from 'react';

export default function Experience() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Senior Software Development Engineer, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2023 - Present • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Leading a team of 7 engineers tackling some really interesting challenges: secure file infrastructure, AI chat systems, and customer communication platforms</li>
                    <li>Built ring.com's AI chat service from concept to production: designed the React UI, architected the backend, integrated generative AI. Now serving 3M+ messages weekly with 200K+ AI interactions</li>
                    <li>Created a secure file upload system where security isn't an afterthought. End-to-end encryption, isolated containers for each upload, intelligent detection for images/videos/audio</li>
                    <li>Balancing technical roadmap ownership with mentoring, helping engineers grow while keeping multiple products moving forward</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer II, Tech Lead</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2021 - April 2023 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Got promoted to tech lead, suddenly responsible for guiding technical decisions for 4 engineers across full-stack apps</li>
                    <li>Picked up a fascinating side responsibility: Application Security Certifier. Basically, I got to hunt for vulnerabilities in Ring cameras and Alexa devices before they shipped</li>
                    <li>Found some gnarly buffer overflow bugs in Ring Marlin camera firmware during certification. The kind that make you go "oh, that could've been bad"</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Development Engineer</h3>
                <p className="text-gray-400">Amazon (Ring) • February 2020 - April 2021 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Owned Ring's chat platform end-to-end: AWS infrastructure, customer UI, agent control panel. Ring's first in-house chat system</li>
                    <li>Also built the phone callback application. Both were greenfield projects where I got to make all the architectural decisions</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Software Developer</h3>
                <p className="text-gray-400">Prognos Trading LLC • 2019 - 2020 • Contractor</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Solo project building C++ infrastructure for high-frequency crypto trading. No team, just me and the challenge</li>
                    <li>Wrote custom parsers for 12 different cryptocurrency exchanges, each with their own quirks. Websockets, zero-copy parsing, cache-friendly data structures</li>
                    <li>The order book needed to handle millions of messages per second. When you're measuring performance in microseconds, every optimization matters</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Engineer II</h3>
                <p className="text-gray-400">American Express • January 2019 - February 2020 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Built an enterprise data distribution system using Netflix Hollow and gRPC, helping teams cache and version data efficiently</li>
                    <li>Got to present the solution to engineering leadership, which was a great learning experience in technical communication</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • Summer 2018 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Ran performance benchmarks comparing GraphQL implementations: Spring Boot vs Node.js vs Vert.x. The data was eye-opening</li>
                    <li>Led a GraphQL training session for the broader dev team. Public speaking wasn't my strength yet, but it went well</li>
                    <li>Learned how to integrate React into a legacy Angular codebase. Basically negotiating between two different JavaScript philosophies</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Technology Intern</h3>
                <p className="text-gray-400">American Express • Summer 2017 • Phoenix, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Deep dive into testing methodologies: unit tests, BDD with Cucumber, integration tests with Rest Assured, mutation testing with PIT. Built Spring Boot APIs with proper test coverage</li>
                    <li>Implemented Redis caching integrated with Spring Boot, learning about cache invalidation (one of the hard problems in CS)</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Research Aide</h3>
                <p className="text-gray-400">Arizona State University • May 2017 - December 2018 • Tempe, AZ</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Researching wireless network performance using combinatorial algorithms, specifically locating arrays, which are pretty elegant mathematical structures</li>
                    <li>Wrote a C software suite to construct minimal locating arrays and identify which factors actually matter for network performance</li>
                    <li>Published 3 papers as primary author. Academic writing is its own skill, very different from coding or technical docs</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Intern</h3>
                <p className="text-gray-400">Fast Enterprises • May 2016 - August 2016</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Worked with Kansas City government employees on their tax software. Interesting blend of public sector work and software development</li>
                    <li>Redesigned their Business Registration module to make it less painful for both taxpayers and city staff. UX matters, even in tax software</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Intern</h3>
                <p className="text-gray-400">SolutionStart Technologies • May 2015 - August 2015</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Built a system tray app for Windows to streamline customer service requests. My first real desktop application</li>
                    <li>Learned the full PC lifecycle: building them, breaking them down, imaging, recovery. Also got hands-on with server and network hardware</li>
                    <li>Less glamorous than pure software development, but you learn a ton about how systems actually work in the real world</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Math and Technology Tutor</h3>
                <p className="text-gray-400">Central Arizona College • August 2014 - May 2015</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Taught programming (C++, Visual Basic, Java, MATLAB) and math (through Calc III and Differential Equations) to college students</li>
                    <li>Working with students at different skill levels taught me patience and how to explain complex concepts in multiple ways</li>
                    <li>Those communication skills turned out to be surprisingly useful in my career. Explaining code to junior devs isn't that different from tutoring</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">IT Intern</h3>
                <p className="text-gray-400">SXP Analytics • Summer 2011</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>My very first tech internship, at a high-frequency trading company. Worked in IT doing the unglamorous but essential stuff: tracing network cables, building computer hardware, writing scripts to translate internal wikis</li>
                    <li>Never got to touch their trading algorithms (they weren't about to trust an intern with that), but it was fascinating being around that world</li>
                    <li>I was too young to get paid, so they compensated me with a seriously nice laptop: 8GB RAM, 500GB storage, latest-gen i7, good graphics card. Over $2000 value, which felt like winning the lottery</li>
                    <li>That laptop fueled countless personal projects over the next few years. Probably the best "payment" I could have gotten at that age</li>
                    <li>The company went bankrupt the following year due to a lawsuit over their algorithms. Wild industry</li>
                </ul>
            </div>
        </div>
    );
}
