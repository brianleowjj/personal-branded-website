// src/components/ProjectsSection.tsx
'use client';

import Link from 'next/link';
import ContentWrapper from '@/components/ContentWrapper';
import React, { useState, useEffect } from 'react'; // 🚀 Added import

// --- 1. EXTERNALIZE PROJECT DATA ---
const projectsData = [
    {
        title: 'MARS - Members Allocation and Redemption System (2024)',
        description: 'Backend developer for a system designed for organizations to manage memberships and allow members to redeem items using allocated balances or vouchers.',
        features: [
            'Integrated multiple allocation methods such as e-wallet top up and voucher allocation.',
            'Implemented redemption methods using registered card ID / NFC card or a unique 6-digit code.',
            'Key features include customisable campaigns, packages, and real-time transaction monitoring.',
        ],
        links: [],
    },
    {
        title: '1SEA - Super App Platform (2024)',
        description: 'A super app platform with Unified Identity and Authentication System, facilitating easy integration of micro-applications.',
        features: [
            'Led the development of custom APIs for external developers and facilitated seamless integration of their micro-applications.',
            'Collaborated with the frontend team to ensure a user-friendly and intuitive application experience.',
        ],
        links: [
            // { name: 'View on App Store', href: 'https://apps.apple.com/us/app/1sea/id1571404170' },
            // { name: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.one.sea' },
        ],
    },
    {
        title: 'NIOTMS - Nebula IoT Management System (2023)',
        description: 'A management system that allows clients to remotely manage and monitor their IoT machines.',
        features: [
            'Transformed unattended machines into smart devices involving payment and sales tracking features.',
            'Coordinated with the IoT team, utilising the MQTT framework to integrate machine-to-machine communication.',
            'Partnered with frontend to design a user-friendly and optimised portal for an optimum user experience.',
        ],
        links: [],
    },
];

// --- 2. DYNAMIC PROJECT LIST COMPONENT ---
// This component ensures the dynamic mapping runs only after the client mounts
function ProjectList() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This runs only on the client side after the component mounts
        setIsClient(true);
    }, []);

    // Render the dynamic content only if the client is ready
    if (!isClient) {
        // Return null or a simple placeholder during the initial render phase
        return <div className="space-y-8 min-h-[400px]"></div>;
    }

    return (
        <div className="space-y-8">
            {projectsData.map((project, index) => (
                <section
                    key={index}
                    className="
                        p-6 bg-gray-800 rounded-lg 
                        transition-all duration-300 
                        hover:-translate-y-1 
                        hover:shadow-2xl 
                        hover:shadow-teal-400/20
                    "
                >
                    <h2 className="text-2xl font-bold text-blue-400">{project.title}</h2>
                    <p className="text-gray-300 mt-2">{project.description}</p>

                    {/* Features List */}
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3 bg-gray-900 p-4 rounded-md border border-gray-700">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>

                    {/* Links */}
                    {/* {project.links.length > 0 && (
                        <div className="mt-3 space-x-4">
                            {project.links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    target="_blank"
                                    className="text-blue-500 hover:underline"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )} */}
                </section>
            ))}
        </div>
    );
}

// --- 3. MAIN COMPONENT (Using ProjectList) ---

export default function ProjectsSection() {
    return (
        <section id="projects">
            <ContentWrapper>
                <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                    Projects
                </h1>

                {/* 🚀 Use the client-safe wrapper component */}
                <ProjectList />
            </ContentWrapper>
        </section>
    );
}
