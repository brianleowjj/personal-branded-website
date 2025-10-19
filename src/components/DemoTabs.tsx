// components/DemoTabs.tsx
"use client";

import { useState } from 'react';
import LiveTicker from './LiveTicker';
import JWTAuthDemo from './JWTAuthDemo';
import DataIngestionDemo from './DataIngestionDemo';

interface Tab {
    id: string;
    label: string;
    component: React.ReactNode;
}

export default function DemoTabs() {
    const tabs: Tab[] = [
        { id: 'ticker', label: 'Live Financial Ticker (API & Caching)', component: <LiveTicker /> },
        { id: 'jwt', label: 'Secure JWT Authentication (Security & Middleware)', component: <JWTAuthDemo /> },
        { id: 'data_ingestion', label: 'Data Ingestion & Concurrency', component: <DataIngestionDemo /> },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;

    return (
        <div className="space-y-4">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 text-sm font-medium transition-colors 
                                    ${activeTab === tab.id
                                ? 'text-teal-400 border-b-2 border-teal-400'
                                : 'text-gray-400 hover:text-white'}`
                        }
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-4">
                {activeComponent}
            </div>
        </div>
    );
}