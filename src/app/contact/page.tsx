// src/app/contact/page.tsx

import type { Metadata } from 'next';
import ContentWrapper from '@/components/ContentWrapper';
import DemoTabs from '@/components/DemoTabs';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact & API Demo | Brian J. Leow',
    description: 'Get in touch or test a live demonstration of my Next.js API route handling and backend health check logic.',
};

export default function ContactPage() {
    return (
        <ContentWrapper>
            <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                Contact & Demo
            </h1>

            {/* Contact Information */}
            <section className="mb-10 p-6 border-l-4 border-blue-400 bg-gray-800 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Get In Touch</h2>
                <div className="space-y-2 text-lg text-gray-300">
                    <p>
                        <strong className="font-medium">Email:</strong>{' '}
                        <a href="mailto:brianleowjj@live.com" className="text-blue-500 hover:underline">brianleowjj@live.com</a>
                    </p>
                    <p>
                        <strong className="font-medium">Phone:</strong>{' '}
                        <a href="tel:+353873794639" className="text-blue-500 hover:underline">+353 (087) 379 4639</a>
                    </p>

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

                    <Link
                        href="https://wa.me/353873794639"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-1 -ml-1 rounded-md text-green-500 hover:text-teal-400 hover:bg-gray-700/50 transition-colors"
                    >
                        {/* Use FaWhatsapp here */}
                        <FaWhatsapp className="w-5 h-5 mr-3 text-green-500" />
                        <strong className="font-medium text-gray-300 mr-1">WhatsApp:</strong>
                        <span className="ml-1">Start Chat</span>
                    </Link>
                </div>
            </section>

            {/* API Demonstration */}
            <section className="p-6 border rounded-lg shadow-md bg-gray-800 border-blue-400">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Backend Demo Showcase</h2>
                <p className="text-gray-400 mb-4">
                    Explore different aspects of my backend expertise, from real-time data integration and caching to fundamental security implementation.
                </p>

                <DemoTabs />

            </section>
        </ContentWrapper>
    );
}