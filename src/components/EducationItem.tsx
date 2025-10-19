// src/components/EducationItem.tsx (Example Structure)

import Image from 'next/image';

interface EducationProps {
    institution: string;
    degree: string;
    duration: string;
    logoPath: string; // New prop for the logo path
}

export default function EducationItem({
    institution,
    degree,
    duration,
    logoPath
}: EducationProps) {
    return (
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">

            {/* 🚀 Logo Container (Fixed Size for Uniformity) */}
            <div className="flex-shrink-0 w-16 h-16 relative p-1 bg-white rounded-full">
                <Image
                    src={logoPath}
                    alt={`${institution} Logo`}
                    layout="fill"
                    objectFit="contain" // Ensures the logo scales correctly within the circular container
                    className="rounded-full"
                />
            </div>

            {/* Text Content */}
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">
                    {institution}
                </h3>
                <p className="text-teal-400 font-semibold">{degree}</p>
                <p className="text-gray-400 text-sm">{duration}</p>
            </div>
        </div>
    );
}