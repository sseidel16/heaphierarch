import React from 'react';

export default function Education() {
    return (
        <div className="space-y-4 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Master of Science in Computer Engineering (Computer Systems)</h3>
                <p className="text-gray-400">Arizona State University • December 2018 • GPA: 4.0/4.0</p>
                <p className="mt-2">
                    Focus: Algorithms, networking, wireless systems research, combinatorial optimization
                </p>
                <p className="mt-2">
                    Thesis: "Locating Arrays: Construction, Analysis, and Robustness"
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Bachelor of Science in Engineering, Computer Systems Engineering</h3>
                <p className="text-gray-400">Arizona State University • December 2017 • GPA: 4.0/4.0</p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">Award:</span> The Fall 2017 Outstanding Graduate, Computer Systems Engineering at ASU. Named outstanding graduate by the faculty—one student in each degree program receives this recognition.
                </p>
                <p className="mt-2">
                    Focus: Hardware/software co-design, digital design, FPGAs, robotics, circuits, systems engineering
                </p>
                <p className="mt-2">
                    Rationale: Deliberately chose Systems Engineering over Computer Science to gain hardware knowledge (circuits, digital design, FPGAs, robotics) while already being a proficient programmer
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Associate of Science</h3>
                <p className="text-gray-400">Central Arizona College • May 2015 • GPA: 4.0/4.0</p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">Honors Program:</span> Participated in honors program, earning award for Outstanding Honors Student (2014-2015). Recognition for two-semester honors research project into Computer Malware. Three honors projects: extending PareM interpreter, developing more accurate unemployment calculation method, and demonstrating analog circuits to solve differential equations using oscilloscopes.
                </p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">Tutoring:</span> Worked as tutor for programming (C++, Visual Basic, Java, MATLAB) and mathematics—only tutor for higher-level math classes including Calculus I, II, III and Differential Equations. Provided GED prep tutoring for students who dropped out of high school.
                </p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">Memberships:</span> Phi Theta Kappa International Honor Society
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Self-Taught Foundation (Early Years)</h3>
                <p className="text-gray-400">Started at Age 12</p>
                <p className="mt-2">
                    My foundational education started long before formal schooling. I began programming at age 12 with Yabasic, Java, C, and C++. Built games and circuits with Raspberry Pi, learned oscilloscopes and breadboards. By age 16, I had developed a solid foundation in both software and hardware. This period taught problem-solving and persistence beyond what any classroom could provide.
                </p>
            </div>
        </div>
    );
}
