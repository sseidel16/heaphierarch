import React from 'react';

export default function Projects() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Byzantine Ison</h3>
                <p className="text-gray-400">Android App • 2013 - Present</p>
                <p className="mt-2">
                    Mobile application for Byzantine chanting, a liturgical music learning tool for the Orthodox Christian community. 
                    The app loads and manipulates arrays of sound samples to produce precise frequencies and smooth transitions. 
                    Latest version uses native C++ code and OpenSL ES to eliminate buffering delays.
                </p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">50,000+ downloads</span> on Google Play with a 4.7/5.0 rating 
                    and only a single crash report across its entire lifetime. Personal passion project combining technology with cultural preservation.
                </p>
                <p className="mt-2">
                    <a href="https://github.com/sseidel16/ByzantineIson" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">View on GitHub</a>
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Autonomous Racing Vehicle</h3>
                <p className="text-gray-400">Robotics Competition • ASU</p>
                <p className="mt-2">
                    Competitive autonomous car racing project where only 3 teams out of the entire cohort successfully completed the race—my vehicle placed first. 
                    Featured multiple Arduinos, LIDAR sensor integration, adaptive speed control, and fault-tolerant sensor fusion. 
                    Demonstrated expertise in robotics, real-time systems, and sensor integration under competitive conditions.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">PareM Interpreted Language</h3>
                <p className="text-gray-400">Academic Project • Fall 2014</p>
                <p className="mt-2">
                    Custom interpreted programming language similar to Lisp in syntax with a unique capability: store references 
                    to blocks of code, pass these references between functions, and execute the blocks when needed. 
                    Designed and implemented from scratch with two fully working interpreters (one in Java, one in Visual Basic) 
                    and a partially working interpreter in C++. Demonstrates deep understanding of language design and interpreter construction.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">FPGA Audio Recorder</h3>
                <p className="text-gray-400">Digital Hardware Course • Fall 2016</p>
                <p className="mt-2">
                    Hardware/software co-design project developed using Verilog on FPGA. 
                    Audio recorder stored sound samples into RAM from microphone on FPGA and allowed playback at four different speeds. 
                    Calculated playback volume by measuring density of 1's in audio stream, displayed using LED as additional feature. 
                    Utilized Verilog and Vivado Design Suite.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Analog Circuit Differential Equation Solver</h3>
                <p className="text-gray-400">Personal Project • Spring 2015</p>
                <p className="mt-2">
                    Hardware solution to mathematical problem using electrical components: capacitors, resistors, breadboard to model differential equations. 
                    Used an oscilloscope to graph the equations using the circuit. Successfully obtained correct graphs for multiple differential equations. 
                    Completed as honors project and demonstrated at Central Arizona College. Done in collaboration with my father, described as "easily the most fascinating project I have ever done with an oscilloscope." 
                    Showcases unique approach to problem-solving combining electrical engineering and mathematics.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Sockets Programming Project</h3>
                <p className="text-gray-400">Networking Course • Spring 2017</p>
                <p className="mt-2">
                    Developed a multithreaded peer-to-peer instant messaging application in C using UDP sockets. 
                    Implemented a reliability protocol on top of UDP using acknowledgements and automatic retries when packets were lost. 
                    Users could join and leave messaging groups, view all members, and send instant messages. 
                    Demonstrated low-level networking knowledge and protocol design.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Future of Orthodoxy Website</h3>
                <p className="text-gray-400">Web Development • 2020</p>
                <p className="mt-2">
                    Developed a React website integrating with Google Firebase Authentication, Functions, and Hosting. 
                    Created for a religious youth organization to post events and news, facilitate donations, and allow visitors 
                    to contact the organization or subscribe. Full-stack web development with modern technologies.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Arduino Based Chemical Titration</h3>
                <p className="text-gray-400">Engineering Project • Spring 2015</p>
                <p className="mt-2">
                    Worked with 3 friends to design and create a machine to automatically find the pH of a solution through titration. 
                    Used Arduino board, light sensor, and PC. Fully coded the Arduino board and the user interface on the PC. 
                    Arduino pumped acid at varying rates, measured color of solution, calculated pH, and sent information to UI. 
                    Hardware/software integration project.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Space Travel II & Ms Pac-Man Clone</h3>
                <p className="text-gray-400">Early Personal Projects • 2012-2014</p>
                <p className="mt-2">
                    Space Travel II (2014): Designed and programmed an Android game using Java without any game engines. 
                    Used physics equations to determine gravitational pull from planets on a flying object, creating a realistic environment.
                </p>
                <p className="mt-2">
                    Ms Pac-Man Clone (2012): Developed a Ms Pac-Man clone as close to the original as possible. 
                    <a href="https://github.com/sseidel16/ms-pac-man" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline ml-1">View on GitHub</a>
                </p>
            </div>
        </div>
    );
}
