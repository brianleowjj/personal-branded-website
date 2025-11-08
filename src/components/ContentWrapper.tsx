// components/ContentWrapper.tsx

import React from 'react';

type ContentWrapperProps = {
    children: React.ReactNode;
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
    return (
        // 🚀 THE FIX: 
        // 1. Removed mt-8 and mb-10 (which push content out of 100vh boundary)
        // 2. Changed p-8 (all sides) to px-8 (horizontal) and py-0 (zero vertical padding)
        <div className="max-w-4xl mx-auto px-8 py-6 bg-gray-900 shadow-2xl rounded-lg border border-gray-800">
            {children}
        </div>
    );
}