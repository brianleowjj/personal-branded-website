// components/Navbar.tsx

import Link from 'next/link';

// Define the structure for your navigation links
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact / API Demo", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* 1. Brand / Logo (Your Name) */}
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    Brian J. Leow | Software Developer
                </Link>

                {/* 2. Navigation Links */}
                <div className="space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}