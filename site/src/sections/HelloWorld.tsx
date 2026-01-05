import React from 'react';

export default function HelloWorld() {
    return (
        <div className="space-y-4 text-gray-300">
            <p className="text-lg">
                Hey there! I'm Stephen, also known as the <span className="font-semibold text-blue-400">Heap Hierarch</span>,
                a name that reflects my passion for data structures and clean code.
            </p>
            <p>
                My journey into technology started early—at 12, I began teaching myself programming through languages like <a href="https://en.wikipedia.org/wiki/Yabasic" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Yabasic</a>, Java, C, and C++. While other kids were playing games, I was building 
                them, and constructing circuits with Raspberry Pi, learning my way around oscilloscopes and breadboards.
            </p>
            <p>
                By 16, I had developed a strong foundation in both software and hardware. When I went to college, 
                I deliberately chose Systems Engineering over Computer Science. Why? I was already a proficient programmer. 
                What I wanted was the hardware knowledge: circuits, digital design, FPGAs, robotics. I wanted to understand computers 
                from the silicon up, not just from the API down.
            </p>
            <p>
                Some of my most memorable achievements from school involve hands-on competition. In an autonomous car racing project, 
                only 3 teams out of the entire cohort successfully completed the race—and my vehicle crossed the finish line first. 
                The project integrated multiple Arduinos, LIDAR sensors, adaptive speed control, and fault-tolerant sensor fusion. 
                That's the kind of challenge I thrive on.
            </p>
            <p>
                Today, I'm a Senior Software and Systems Engineer and Tech Lead at Amazon Ring, where I architect and build systems that millions of people rely on. 
                I led the development of ring.com's AI-powered chat service, bringing generative AI to customer 
                support at scale, now serving over 3 million messages weekly with 200,000+ AI interactions. I enjoy the blend of cutting-edge technology, team leadership, and solving real problems for real people.
            </p>
            <p>
                Want to learn more? Check out my <a href="https://sseidel16.github.io/resume/output/resume.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">resume</a>.
            </p>
        </div>
    );
}
