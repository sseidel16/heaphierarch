import React from 'react';

export default function Security() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Application Security Certifier</h3>
                <p className="text-gray-400">Amazon (Ring) • 2021 - 2023</p>
                <p className="mt-2">
                    Became Ring's Application Security Certifier, responsible for running security certifications across 
                    Ring and Alexa products. This wasn't just paperwork. I dove deep into firmware code, network protocols, 
                    and system architecture to find real vulnerabilities before they reached production.
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Found and eliminated critical buffer overflow vulnerabilities in Ring Marlin camera firmware</li>
                    <li>Certified Alexa Bluetooth firmware libraries running on IoT devices</li>
                    <li>Secured Alexa target determination services that decide which device responds to voice commands</li>
                    <li>Performed security analysis on multiple Ring camera firmware versions</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Secure File Transfer Architecture</h3>
                <p className="text-gray-400">Amazon (Ring) • 2023 - Present</p>
                <p className="mt-2">
                    Designed and built Ring's secure customer file upload system from the ground up with security as 
                    the primary concern. The system handles sensitive customer files, images, videos, audio, with multiple 
                    layers of protection and isolation.
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Implemented end-to-end envelope encryption from customer browser to internal systems</li>
                    <li>Architected isolated container system for file processing, each file gets its own pre-warmed container</li>
                    <li>Built role-based access controls limiting which internal employees can access customer files</li>
                    <li>Designed intelligent file mapping system that safely converts uploads to appropriate formats</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Security Tools & Practices</h3>
                <p className="mt-2">
                    Throughout my career, I've developed a practical security mindset, not just following checklists, 
                    but thinking like an attacker to find real vulnerabilities. I use tools like BurpSuite for web 
                    application testing, Fortify for static analysis, and Wireshark for network protocol analysis.
                </p>
                <p className="mt-2">
                    Security isn't just about tools though. It's about architecture decisions, defense in depth, 
                    least privilege, and building systems that fail safely. Whether it's firmware on IoT devices 
                    or cloud services handling millions of requests, I apply security thinking from the first line of code.
                </p>
            </div>
        </div>
    );
}
