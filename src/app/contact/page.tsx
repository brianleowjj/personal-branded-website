// src/app/contact/page.tsx

import type { Metadata } from 'next';
import HealthCheckButton from '@/components/HealthCheckButton';
import ContentWrapper from '@/components/ContentWrapper';
import LiveTicker from '@/components/LiveTicker';
import DemoTabs from '@/components/DemoTabs';

export const metadata: Metadata = {
    title: 'Contact & API Demo | Brian Leow',
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

                    <p>
                        <strong className="font-medium">LinkedIn:</strong>{' '}
                        <a
                            href="https://www.linkedin.com/in/brian-leow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            /in/brian-leow 🔗
                        </a>
                    </p>

                    <p>
                        <strong className="font-medium">GitHub:</strong>{' '}
                        <a
                            href="https://github.com/brianleowjj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            /brianleowjj 💻
                        </a>
                    </p>

                    {/* <p className="mt-4 text-sm text-gray-500">
                        I am currently pursuing a Masters of Science in Project Management at University College Dublin, expected to graduate in September 2026.
                    </p> */}
                </div>
            </section>

            {/* API Demonstration */}
            {/* <section className="p-6 border rounded-lg shadow-md bg-gray-800 border-blue-400">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Live Backend API Health Check</h2>
                <p className="text-gray-400 mb-4">
                    Click the button below to execute a simulated GET request against a Next.js API Route (`/api/health-check`). This demonstrates my ability to design and implement robust backend service endpoints.
                </p>

                <HealthCheckButton />

            </section> */}
            {/* <section className="p-6 border rounded-lg shadow-md bg-gray-800 border-blue-400">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Live Data Integration</h2>
                <p className="text-gray-400 mb-4">
                    This demo showcases the backend's ability to fetch, format, and serve real-time financial data from an external API, a key requirement in FinTech development. Data updates every 15 seconds.
                </p>
                <LiveTicker />

            </section> */}
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