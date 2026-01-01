import React from 'react';

export default function Education() {
    return (
        <div className="space-y-4 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Master of Science in Computer Engineering</h3>
                <p className="text-gray-400">Arizona State University • December 2018 • GPA: 4.0/4.0</p>
                <p className="mt-2">
                    Concentration: Computer Systems. Thesis: "Locating Arrays: Construction, Analysis and Robustness"
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Bachelor of Science in Computer Systems Engineering</h3>
                <p className="text-gray-400">Arizona State University • December 2017 • GPA: 4.0/4.0, Summa Cum Laude</p>
                <p className="mt-2">
                    Outstanding Graduate Award - Top graduating student in Computer Systems Engineering. Published 3 research papers during undergraduate studies.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Associate of Science</h3>
                <p className="text-gray-400">Central Arizona College • May 2015 • GPA: 4.0/4.0</p>
                <p className="mt-2">
                    Phi Theta Kappa International Honor Society. Outstanding Honors Student Award.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Self-Taught Foundation</h3>
                <p className="text-gray-400">Early Years</p>
                <p className="mt-2">
                    My real education started long before college. I taught myself programming starting with Yabasic, then progressing 
                    through Java, C, and C++. Built electronics projects with Raspberry Pi, learned oscilloscopes and circuit design. 
                    Developed and shipped Android applications. This self-directed learning gave me a practical foundation that formal 
                    education built upon. Honestly, this period taught me more about problem-solving, persistence, and ownership than any classroom ever could.
                </p>
            </div>
        </div>
    );
}
