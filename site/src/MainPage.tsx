import React, { useState, useRef, useEffect, act, useMemo } from 'react';
import FlipTiles from './FlipTiles';
import { images } from './images';
import HelloWorld from './sections/Introduction';
import Experience from './sections/Experience';
import Education from './sections/Education';
import TechnicalSkills from './sections/TechnicalSkills';
import Security from './sections/Security';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Hobbies from './sections/Hobbies';

const sections = [
    { id: 'Hello World', Component: HelloWorld },
    { id: 'Experience', Component: Experience },
    { id: 'Education', Component: Education },
    { id: 'Technical Skills', Component: TechnicalSkills },
    { id: 'Security', Component: Security },
    { id: 'Projects', Component: Projects },
    { id: 'Publications', Component: Publications },
    { id: 'Hobbies', Component: Hobbies },
];

export default function MainPage() {
    const [activeSections, setActiveSections] = useState<boolean[]>(() => sections.map(() => false));
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

    const headerRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const index = headerRefs.current.indexOf(entry.target as HTMLHeadingElement);
                    if (index !== -1) {
                        setActiveSections(prev => {
                            const newActiveSections = [...prev];
                            newActiveSections[index] = entry.isIntersecting;
                            return newActiveSections;
                        });
                    }
                });
            },
            {
                root: scrollContainer,
                rootMargin: '0px 0px -40% 0px',
                threshold: [0.3],
            }
        );

        headerRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const activeSectionIndex = useMemo(() => {
        const activeIndex = Object.values(activeSections).findIndex(active => active);

        if (activeIndex !== -1) {
            return activeIndex;
        }
        return null;
    }, [activeSections]);

    useEffect(() => {
        if (activeSectionIndex !== null) {
            setCurrentSectionIndex(activeSectionIndex);
        }
    }, [activeSectionIndex]);

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden">
            {/* Fixed Header */}
            <header className="bg-gray-800 text-white py-6 px-8 shadow-lg flex items-center justify-between z-20 relative">
                <div>
                    <h1 className="text-3xl font-bold">Stephen Seidel</h1>
                    <p className="text-gray-300 text-lg mt-1">Software Engineer</p>
                </div>
                <div className="font-mono text-green-500 text-xl">
                    /* Heap Hierarch */
                </div>
            </header>

            {/* Content area - contains both scrollable content and fixed FlipTiles */}
            <div className="flex-1 relative overflow-hidden">
                {/* Scrollable content layer */}
                <div ref={scrollContainerRef} className="absolute inset-0 overflow-y-auto p-8" style={{ backgroundColor: '#1e1e1e' }}>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {sections.map((section, index) => (
                            <section key={section.id}>
                                {/* Anchor for intersection observer */}
                                <div ref={el => headerRefs.current[index] = el} className="h-1" />

                                {/* 350px space */}
                                <div className="h-[350px]" />

                                {/* Header and component with minimum screen height */}
                                <div className="min-h-screen">
                                    <div className="p-8 rounded-lg" style={{ backgroundColor: '#252526' }}>
                                        {/* Section header */}
                                        <h2 className="text-3xl font-bold mb-4 text-gray-100 flex items-end">
                                            {section.id}
                                        </h2>

                                        {/* Section component */}
                                        <section.Component />
                                    </div>

                                    {/* Continue scrolling */}
                                    <div className="flex flex-col items-center mt-8 text-gray-400 relative z-20">
                                        <span className="text-sm mb-2">Continue scrolling</span>
                                        <svg
                                            className="w-6 h-6 animate-bounce"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </section>
                        ))}

                        {/* Contact Section */}
                        <section className="min-h-screen flex flex-col items-center justify-center relative z-20">
                            <h2 className="text-4xl font-bold mb-6 text-gray-100">Let's Connect</h2>
                            <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
                                Interested in working together or have a project in mind?
                                I'd love to hear from you.
                            </p>
                            <div className="space-y-4 text-center text-gray-300">
                                <p className="text-lg">
                                    <span className="font-semibold text-gray-100">Email:</span> stephen.a.seidel@gmail.com
                                </p>
                                <p className="text-lg">
                                    <span className="font-semibold text-gray-100">LinkedIn:</span> linkedin.com/in/stephen-seidel
                                </p>
                                <p className="text-lg">
                                    <span className="font-semibold text-gray-100">GitHub:</span> github.com/sseidel16
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* FlipTiles - fixed overlay covering the content area */}
                <div className="absolute inset-0 z-10 pointer-events-none p-8">
                    <FlipTiles flipped={activeSectionIndex !== null} imageData={images[currentSectionIndex]} />
                </div>

                {/* Active Section Indicator */}
                <div className={`absolute top-16 left-16 z-20 bg-gray-900 rounded-lg px-6 py-4 shadow-lg transition-opacity duration-500 ${activeSectionIndex !== null ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-2xl font-mono font-bold text-blue-400">&lt;{sections[currentSectionIndex].id} /&gt;</div>
                </div>
            </div>
        </div>
    )
}
