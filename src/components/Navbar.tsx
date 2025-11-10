"use client";

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

// Define the navigation items and map them to section IDs
const navItems = [
    { name: 'Home', href: '#home', id: 'home', type: 'link' },
    { name: 'Experience', href: '#experience', id: 'experience', type: 'link' },
    { name: 'Projects', href: '#projects', id: 'projects', type: 'link' },
    { name: 'Skills', href: '#skills', id: 'skills', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials', type: 'link' },
    { name: 'Contact & Demo', href: '#contact', id: 'contact', type: 'link' },
    // Resume link must include type: 'button' (NOTE: We'll pull this out of the main map below)
    { name: 'Download Resume', href: '/BrianJiaJunLeow_Resume.pdf', id: 'resume', type: 'button' },
];

// Separate links from the button for distinct rendering
const linkItems = navItems.filter(item => item.type === 'link');
const resumeButton = navItems.find(item => item.type === 'button');


export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -50% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Find all sections by their IDs and observe them
        navItems.forEach(item => {
            // Only observe sections (type: 'link'), not the button
            if (item.type === 'link') {
                const section = document.getElementById(item.id);
                if (section) {
                    observer.observe(section);
                }
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Helper function to render the resume button with its correct style
    const renderResumeButton = (isMobile = false) => {
        if (!resumeButton) return null;

        return (
            <a
                key={resumeButton.name}
                href={resumeButton.href}
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                className={`
                    px-3 py-1.5 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 
                    transition-colors duration-200 font-bold 
                    flex items-center whitespace-nowrap
                    ${isMobile ? 'text-xs md:text-sm' : 'text-sm'} // Smaller text on mobile
                `}
            >
                <Download className={`mr-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {resumeButton.name}
            </a>
        );
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-[#1e293b] shadow-xl py-3 px-4 border-b border-gray-700">
            <nav className="max-w-7xl mx-auto flex justify-between items-center w-full"> {/* Added w-full */}

                <div className="text-teal-400">
                    <p className="text-lg font-bold text-teal-400">Brian J. Leow</p>
                    <p className="text-sm text-blue-400">Software Developer</p>
                </div>

                {/* 🚀 1. NAVIGATION LINKS (Desktop Only) */}
                {/* We use the filtered linkItems array here */}
                <div className="hidden md:flex flex space-x-6 items-center">
                    {linkItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`
                                text-lg transition-colors duration-200 py-1 flex items-center
                                ${activeSection === item.id
                                    ? 'text-white border-b-2 border-teal-400 font-semibold' // Active link style
                                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-teal-400' // Inactive link style
                                }
                            `}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* 🚀 2. BUTTON (Desktop Position) - Rendered next to the links */}
                    <div className="ml-6">
                        {renderResumeButton(false)}
                    </div>
                </div>

                {/* 🚀 3. BUTTON (Mobile Position) - Visible on all screens, but hidden when the full nav is visible */}
                <div className="block md:hidden">
                    {renderResumeButton(true)}
                </div>
            </nav>
        </header>
    );
}
