import React from 'react';

export default function Projects() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Byzantine Ison</h3>
                <p className="text-gray-400">Android App • 2013 - Present</p>
                <p className="mt-2">
                    Self-taught mobile development project serving the Orthodox Christian community worldwide. 
                    Liturgical music learning tool with 50,000+ downloads and 4.7/5.0 rating on Google Play Store. 
                    Built with native Android development, demonstrating early passion for software engineering 
                    and ability to ship production applications.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Custom Compiler & Interpreted Languages</h3>
                <p className="text-gray-400">Academic Honors Project</p>
                <p className="mt-2">
                    Designed and implemented compilers and interpreted programming languages from scratch as honors 
                    projects. Gained deep understanding of language design, parsing, lexical analysis, and code generation.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Raspberry Pi Electronics</h3>
                <p className="text-gray-400">Hardware Projects • Early Teens</p>
                <p className="mt-2">
                    Built various electronics projects using Raspberry Pi, combining hardware tinkering with software 
                    development. Early hands-on experience with embedded systems and physical computing that informed 
                    later decision to pursue Systems Engineering over Computer Science.
                </p>
            </div>
        </div>
    );
}
