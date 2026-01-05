import React from 'react';

export default function HelloWorld() {
    return (
        <div className="space-y-4 text-gray-300">
            <p className="text-lg">
                Hey there! I'm Stephen, the <span className="font-semibold text-blue-400">Heap Hierarch</span>,
                a name that reflects my love for data structures and clean code.
            </p>
            <p>
                My journey into tech started young. Really young. At 12, I was teaching myself programming through random 
                languages like <a href="https://en.wikipedia.org/wiki/Yabasic" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Yabasic</a>, then diving into Java, C, and C++. While other kids were playing games, I was building 
                them, and building circuits with Raspberry Pi, learning my way around oscilloscopes and breadboards.
            </p>
            <p>
                By 16, I had a solid foundation in both software and hardware. When I went to college, 
                I deliberately chose Systems Engineering over Computer Science. Why? I was already a proficient programmer. 
                What I craved was the hardware knowledge: circuits, digital design, FPGAs, robotics. I wanted to understand computers 
                from the silicon up, not just from the API down.
            </p>
            <p>
                Some of my best memories from school involve intense competition. Like the autonomous car racing project where only 
                3 out of all the teams even finished the race, and mine crossed first. Multiple Arduinos, LIDAR, adaptive speed 
                control, fault-tolerant sensor fusion. That's the kind of challenge that gets my adrenaline flowing.
            </p>
            <p>
                These days, I'm a Senior Software Engineer and Tech Lead at Amazon Ring, where I architect and build systems that millions of people rely on. 
                Most recently, I led the development of ring.com's AI-powered chat service, bringing generative AI to customer 
                support at scale. I love the blend of cutting-edge tech, team leadership, and solving real problems for real people.
            </p>
            <p>
                Want to learn more? Check out my <a href="https://sseidel16.github.io/resume/output/resume.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">resume</a>.
            </p>
        </div>
    );
}
