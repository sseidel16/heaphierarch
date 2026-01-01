import React from 'react';

export default function Projects() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Byzantine Ison</h3>
                <p className="text-gray-400">Android App • 2013 - Present</p>
                <p className="mt-2">
                    A liturgical music learning tool for the Orthodox Christian community that I built entirely from scratch. 
                    The app loads and manipulates arrays of sound samples to produce precise frequencies and smooth transitions,
                    all with native C++ code and OpenSL ES to eliminate buffering delays.
                </p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">50,000+ downloads</span> on Google Play with a 4.7/5.0 rating 
                    and only a single crash report. It's one of those projects where I learned mobile development by diving in headfirst, 
                    working directly with users to refine every detail.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">PareM Interpreted Language</h3>
                <p className="text-gray-400">Academic Project • 2014</p>
                <p className="mt-2">
                    Designed my own programming language with Lisp-like syntax and a unique capability: you could store references 
                    to blocks of code, pass them between functions, and execute them on demand. Built three fully working interpreters 
                    for it, one in Java, one in Visual Basic, and a partially complete version in C++.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">FPGA Audio Recorder</h3>
                <p className="text-gray-400">Digital Hardware Course • 2016</p>
                <p className="mt-2">
                    Developed an audio recorder in Verilog on an FPGA that captured sound from the onboard microphone, stored samples 
                    in RAM, and played back at four different speeds. Added a volume meter by measuring the density of 1's in the 
                    audio stream and displaying it with LEDs.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Self-Driving Car</h3>
                <p className="text-gray-400">Robotics Competition • ASU</p>
                <p className="mt-2">
                    Built an autonomous racing car using multiple Arduinos, LIDAR, and custom motor control. Implemented adaptive 
                    speed control with risk analysis, optimized steering algorithms, and fault-tolerant sensor fusion combining 
                    magnetometer and GPS data. Only 3 cars in the entire class finished the race, mine came in first.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Analog Circuit Differential Equation Solver</h3>
                <p className="text-gray-400">Personal Project • 2015</p>
                <p className="mt-2">
                    Used capacitors, resistors, and a breadboard to physically model differential equations, then graphed the 
                    solutions on an oscilloscope. One of the most fascinating projects I've ever done, watching math come alive 
                    through analog circuits.
                </p>
            </div>
        </div>
    );
}
