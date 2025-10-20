// components/ContentWrapper.tsx
// test
import React from 'react';

type ContentWrapperProps = {
    children: React.ReactNode;
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
    return (
        // The key fixes are adding/confirming:
        // 1. mx-auto: Centers the div horizontally
        // 2. mt-8 (or higher): Adds space below the fixed Navbar
        // 3. mb-10 (or similar): Adds space at the bottom
        <div className="max-w-4xl mx-auto mt-8 mb-10 p-8 bg-gray-900 shadow-2xl rounded-lg border border-gray-800">
            {children}
        </div>
    );
}