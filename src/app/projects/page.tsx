// src/app/projects/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import ContentWrapper from '@/components/ContentWrapper';

export const metadata: Metadata = {
    title: 'Key Projects | Brian Leow',
    description: 'Showcasing FinTech and IoT projects including MARS, 1SEA Super App, and NIOTMS, highlighting API development and payment system integration.',
};

export default function ProjectsPage() {
    return (
        <ContentWrapper>

            <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                Projects
            </h1>

            {/* MARS Project */}
            <section className="mb-10 p-6 bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-400">MARS - Members Allocation and Redemption System (2024)</h2>
                <p className="text-gray-300 mt-2">
                    Backend developer for a system designed for organizations to manage memberships and allow members to redeem items using allocated balances or vouchers.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3 bg-gray-900 p-4 rounded-md border border-gray-700">
                    <li>Integrated multiple allocation methods such as e-wallet top up and voucher allocation.</li>
                    <li>Implemented redemption methods using registered card ID / NFC card or a unique 6-digit code.</li>
                    <li>Key features include customizable campaigns, packages, and real-time transaction monitoring.</li>
                </ul>
            </section>

            {/* 1SEA Project */}
            <section className="mb-10 p-6 bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-400">1SEA - Super App Platform (2024)</h2>
                <p className="text-gray-300 mt-2">
                    A super app platform with Unified Identity and Authentication System, facilitating easy integration of micro-applications.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3 bg-gray-900 p-4 rounded-md border border-gray-700">
                    <li>Led the development of custom APIs for external developers and facilitated seamless integration of their micro-applications.</li>
                    <li>Collaborated with the frontend team to ensure a user-friendly and intuitive application experience.</li>
                </ul>
                <div className="mt-3 space-x-4">
                    <Link href="https://apps.apple.com/us/app/1sea/id1571404170" target="_blank" className="text-blue-500 hover:underline">View on App Store</Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.one.sea" target="_blank" className="text-blue-500 hover:underline">View on Google Play</Link>
                </div>
            </section>

            {/* NIOTMS Project */}
            <section className="p-6 bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-400">NIOTMS - Nebula IoT Management System (2023)</h2>
                <p className="text-gray-300 mt-2">
                    A management system that allows clients to remotely manage and monitor their IoT machines.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3 bg-gray-900 p-4 rounded-md border border-gray-700">
                    <li>Transformed unattended machines into smart devices involving payment and sales tracking features.</li>
                    <li>Coordinated with the IoT team, utilizing the MQTT framework to integrate machine-to-machine communication.</li>
                    <li>Partnered with frontend to design a user-friendly and optimised portal for an optimum user experience.</li>
                </ul>
            </section>
        </ContentWrapper>
    );
}