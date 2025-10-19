// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // You'll need to install 'lucide-react' for icons

// If you haven't installed lucide-react yet:
// npm install lucide-react

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact & Demo', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-lg">
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Brand/Logo Section (Always Visible) */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-extrabold text-white leading-none">
                            <span className="block text-teal-400">Brian J. Leow</span>
                            <span className="block text-sm font-medium text-gray-400">Software Developer</span>
                        </Link>
                    </div>

                    {/* 1. Desktop Menu (Hidden on Small Screens) */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 2. Mobile Menu Button (Visible on Small Screens) */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Toggle between Menu (Hamburger) and X (Close) icon */}
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3. Mobile Menu Panel (Conditional Rendering) */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                // Close the menu when an item is clicked
                                onClick={toggleMenu}
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}