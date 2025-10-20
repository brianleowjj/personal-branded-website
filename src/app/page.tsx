// src/app/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Brian J. Leow Portfolio | Software Developer',
  description: 'Experienced software developer specializing in banking and payment solutions. Expertise in Node.js, API development, and system optimization.',
};

const keyTechnologies = ['Nodejs', 'Express', 'MongoDB', 'Java', 'PostgreSQL', 'Kubernetes', 'Docker'];

export default function HomePage() {
  return (
    // Use min-h-[90vh] to ensure the content fills the screen below the Navbar
    <div className="flex min-h-[90vh] items-center justify-center p-6 sm:p-12">
      <section className="text-center max-w-4xl pt-16 pb-20">
        {/* 🚀 START OF PROFILE PICTURE CODE */}
        <div className="flex justify-center mb-8"> {/* mb-8 adds space below the image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/profile.png" // ⬅️ **ENSURE THIS PATH MATCHES YOUR FILE IN public/**
              alt="Brian J. Leow Professional Headshot"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-teal-500 shadow-2xl"
            // Set quality or unoptimized if necessary, but keep layout="fill" for sizing
            />
          </div>
        </div>
        {/* 🛑 END OF PROFILE PICTURE CODE */}
        {/* Your Name and Core Title */}
        <p className="text-lg text-blue-400 font-semibold mb-2 tracking-widest uppercase">
          Software Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Brian Jia Jun Leow
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light italic max-w-3xl mx-auto">
          Expert in API development and database management, delivering high-quality, efficient software solutions.
        </p>

        {/* The Elevator Pitch Summary */}
        <p className="text-base text-gray-300 mb-10 max-w-2xl mx-auto">
          Adept at solving complex challenges and optimising system performance. Proven track record in leading teams and integrating with external partners in the banking and payment sectors.
        </p>

        {/* Key Technologies Highlight */}
        <div className="my-10 p-4 border-t border-b border-gray-700">
          <h2 className="text-md font-medium text-gray-400 mb-4 uppercase tracking-wider">
            Core Technology Focus
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {keyTechnologies.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-teal-400 font-bold text-sm rounded-full shadow-lg border border-teal-500/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Call to Action Links - Professional Color Palette */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 my-12">

          <a
            href="/BrianJiaJunLeow_Resume.pdf" // Ensure this path is correct
            download // Forces the browser to download the file
            className="px-8 py-4 bg-red-700 text-white text-xl font-bold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-xl shadow-red-900/50 flex items-center justify-center space-x-2"
          >
            Download Resume
          </a>

          {/* Projects Button - Primary Action */}
          <Link
            href="/projects"
            className="px-8 py-4 bg-teal-600 text-white text-xl font-bold rounded-lg hover:bg-teal-500 transition-all duration-300 shadow-xl shadow-teal-700/50"
          >
            View Key Projects
          </Link>

          {/* Experience Button - Secondary Action */}
          <Link
            href="/experience"
            className="px-8 py-4 bg-gray-700 text-gray-200 text-xl font-bold rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-xl shadow-gray-900/50"
          >
            Professional Experience
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-700 text-gray-200 text-xl font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-gray-900/50"
          >
            Live Demo Showcase
          </Link>
        </div>
      </section>
    </div>
  );
}