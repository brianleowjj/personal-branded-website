// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react'; // 🚀 IMPORT ICON HERE!

// Define the navigation items and map them to section IDs
const navItems = [
    { name: 'Home', href: '#home', id: 'home', type: 'link' },
    { name: 'Experience', href: '#experience', id: 'experience', type: 'link' },
    { name: 'Projects', href: '#projects', id: 'projects', type: 'link' },
    { name: 'Skills', href: '#skills', id: 'skills', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials', type: 'link' },
    { name: 'Contact & Demo', href: '#contact', id: 'contact', type: 'link' },
    // Resume link must include type: 'button'
    { name: 'Download Resume', href: '/BrianJiaJunLeow_Resume.pdf', id: 'resume', type: 'button' },
];

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
            // 🚀 FIX 1: Only observe sections (type: 'link'), not the button
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

    return (
        <header className="fixed top-0 z-50 w-full bg-[#1e293b] shadow-xl py-3 px-4 border-b border-gray-700">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="text-teal-400">
                    <p className="text-lg font-bold text-teal-400">Brian J. Leow</p>
                    <p className="text-sm text-blue-400">Software Developer</p>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            // Set target/download attributes only for the button
                            target={item.type === 'button' ? '_blank' : '_self'}
                            rel={item.type === 'button' ? 'noopener noreferrer' : undefined}
                            download={item.type === 'button' ? true : false}
                            className={`
                                text-lg transition-colors duration-200 py-1 flex items-center
                                ${item.type === 'button'
                                    ?
                                    'ml-6 px-3 py-1.5 bg-red-700 text-white rounded-md shadow-md hover:bg-red-800 transition-colors duration-200 font-bold text-sm border-none'
                                    : activeSection === item.id
                                        ? 'text-white border-b-2 border-teal-400 font-semibold' // Active link style
                                        : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-teal-400' // Inactive link style
                                }
                            `}
                        >
                            {item.type === 'button' && <Download className="w-4 h-4 mr-2" />}
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}