// src/components/ContactSection.tsx

// ⚠️ Note: This must be a client component because it uses Link, FaWhatsapp, and DemoTabs
'use client';

import Link from 'next/link';
// Import the necessary icons and components
import DemoTabs from '@/components/DemoTabs';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// NOTE: I am assuming you will REMOVE the ContentWrapper import, as we are replacing its functionality.
// import ContentWrapper from '@/components/ContentWrapper'; // <-- REMOVED

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen snap-start flex items-center justify-center w-full">

            {/* 🚀 FIX APPLIED HERE: Direct mobile padding (px-4) and max width (max-w-7xl mx-auto) 
                to contain the content properly within the viewport. */}
            <div className="max-w-6xl mx-auto w-full px-4 md:px-8 py-6 
                bg-gray-900 shadow-2xl rounded-lg border border-gray-800">

                <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                    Contact & Demo
                </h1>

                {/* Contact Information */}
                <section className="mb-10 p-6 border-l-4 border-blue-400 bg-gray-800 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Get In Touch</h2>
                    <div className="space-y-2 text-lg text-gray-300">

                        {/* Email */}
                        <p className="flex items-center">
                            <Mail className="w-5 h-5 mr-3 text-teal-400" />
                            <strong className="font-medium">Email:</strong>{' '}
                            <a href="mailto:brianleowjj@live.com" className="text-blue-500 hover:underline ml-1">brianleowjj@live.com</a>
                        </p>

                        {/* Phone */}
                        <p className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 text-teal-400" />
                            <strong className="font-medium">Phone:</strong>{' '}
                            <a href="tel:+353873794639" className="text-blue-500 hover:underline ml-1">+353 (087) 379 4639</a>
                        </p>

                        {/* LinkedIn Link */}
                        <Link
                            href="https://www.linkedin.com/in/brian-leow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-1 -ml-1 rounded-md text-blue-500 hover:text-teal-400 hover:bg-gray-700/50 transition-colors"
                        >
                            <Linkedin className="w-5 h-5 mr-3 text-teal-400" />
                            <strong className="font-medium text-gray-300 mr-1">LinkedIn:</strong>
                            <span className="ml-1">/in/brian-leow</span>
                        </Link>

                        {/* GitHub Link */}
                        <Link
                            href="https://github.com/brianleowjj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-1 -ml-1 rounded-md text-blue-500 hover:text-teal-400 hover:bg-gray-700/50 transition-colors"
                        >
                            <Github className="w-5 h-5 mr-3 text-teal-400" />
                            <strong className="font-medium text-gray-300 mr-1">GitHub:</strong>
                            <span className="ml-1">/brianleowjj</span>
                        </Link>

                        {/* WhatsApp Link */}
                        <Link
                            href="https://wa.me/353873794639"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-1 -ml-1 rounded-md text-blue-500 hover:text-teal-400 hover:bg-gray-700/50 transition-colors"
                        >
                            <FaWhatsapp className="w-5 h-5 mr-3 text-teal-400" />
                            <strong className="font-medium text-gray-300 mr-1">WhatsApp:</strong>
                            <span className="ml-1">Start Chat</span>
                        </Link>
                    </div>
                </section>

                {/* API Demonstration */}
                {/* This section contains DemoTabs, which might be inherently wide. 
                   By wrapping it, we ensure it respects the max-width and padding. */}
                <section className="p-6 border rounded-lg shadow-md bg-gray-800 border-blue-400">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Backend Demo Showcase</h2>
                    <p className="text-gray-400 mb-4">
                        Explore different aspects of my backend expertise, from real-time data integration and caching to fundamental security implementation.
                    </p>

                    <DemoTabs />

                </section>
            </div>
        </section>
    );
}
