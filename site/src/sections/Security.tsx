import React from 'react';

export default function Security() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Application Security Certifier</h3>
                <p className="text-gray-400">Amazon (Ring) • April 2021 - April 2023</p>
                <p className="mt-2">
                    Served as Ring's Application Security Certifier, responsible for running security certifications across 
                    Ring and Alexa products. This role involved comprehensive security analysis of firmware code, network protocols, 
                    and system architecture to identify vulnerabilities before production deployment.
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li><span className="font-semibold text-gray-100">Ring Marlin Camera Firmware:</span> Discovered and eliminated multiple buffer overflow vulnerabilities that could have had severe security consequences</li>
                    <li><span className="font-semibold text-gray-100">Alexa Bluetooth Firmware Libraries:</span> Certified security of Bluetooth firmware running on IoT devices</li>
                    <li><span className="font-semibold text-gray-100">Alexa Target Determination Services:</span> Secured services responsible for determining which Alexa device responds to voice commands</li>
                    <li><span className="font-semibold text-gray-100">Ring Camera Firmwares:</span> Performed security analysis on multiple Ring camera firmware versions</li>
                </ul>
                <p className="mt-2">
                    Used BurpSuite, Fortify, and Wireshark for comprehensive security analysis. Worked closely with development teams to remediate identified issues before they reached production.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Secure File Transfer Architecture</h3>
                <p className="text-gray-400">Amazon (Ring) • 2023 - Present</p>
                <p className="mt-2">
                    Architected and built Ring's secure customer file upload system from the ground up with security as 
                    a first-class concern, not an afterthought. The system handles sensitive customer files including images, videos, and audio 
                    with multiple layers of protection and isolation.
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li><span className="font-semibold text-gray-100">End-to-End Envelope Encryption:</span> Implemented encryption from customer browser through internal systems, ensuring data security at every stage</li>
                    <li><span className="font-semibold text-gray-100">Isolated Container Architecture:</span> Each file upload is processed in its own isolated container with pre-warmed pools for latency optimization</li>
                    <li><span className="font-semibold text-gray-100">Role-Based Access Controls:</span> Strict controls limiting which internal employees can access customer files</li>
                    <li><span className="font-semibold text-gray-100">Intelligent File Mapping:</span> Secure detection and mapping system using separate algorithm-controlled warming for different media types</li>
                </ul>
                <p className="mt-2">
                    Security principles were embedded from the first line of code, demonstrating that robust security and high performance can coexist.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Security Mindset & Practices</h3>
                <p className="mt-2">
                    Throughout my career, I've developed a comprehensive security approach that goes beyond tools and checklists. 
                    Security thinking is integrated into architecture decisions from the beginning—defense in depth, 
                    least privilege, and building systems that fail safely. Whether working on firmware for IoT devices 
                    or cloud services handling millions of requests, security considerations are paramount from the first design decision.
                </p>
            </div>
        </div>
    );
}
