// src/app/page.tsx

'use client';
// ⚠️ MUST be a client component for ReactFullpage to work

// --- IMPORTS ---
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// import ReactFullpage from '@fullpage/react-fullpage';

// 🚀 IMPORT ALL SECTION COMPONENTS YOU CREATED
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';


// --- DATA (Keep this data local) ---
const keyTechnologies = ['Nodejs', 'Express', 'MongoDB', 'Java', 'PostgreSQL', 'Kubernetes', 'Docker'];

export default function HomePage() {

  // Define the order and labels for the navigation dots
  const sectionLabels = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  // ------------------------------------------------------------------
  // 1. EXTRACT YOUR ENTIRE HOME PAGE CONTENT INTO A VARIABLE
  // ------------------------------------------------------------------
  const HomeContent = (
    // Your existing Home Page JSX goes here (remove the outer <div> and <section> tags)
    <div className="text-center max-w-4xl pt-16 pb-20">

      {/* START OF PROFILE PICTURE CODE */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/profile.png"
            alt="Brian J. Leow Professional Headshot"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-teal-500 shadow-2xl"
          />
        </div>
      </div>
      {/* END OF PROFILE PICTURE CODE */}

      {/* Your Name and Core Title */}
      <p className="text-lg text-blue-400 font-semibold mb-2 tracking-widest uppercase">
        Software Developer
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
        Brian Jia Jun Leow
      </h1>
      <p className="text-2xl font-light text-teal-400 italic mx-auto max-w-2xl mt-4 mb-8">
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
              className="px-4 py-2 bg-gray-800 text-teal-400 font-bold text-sm rounded-full shadow-lg border border-teal-500/50
                transition-all duration-300 
                hover:-translate-y-1 
                hover:shadow-xl 
                hover:shadow-teal-400/30
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  // ------------------------------------------------------------------

  return (
    // ⚠️ We use a standard container now, NOT ReactFullpage
    <div className='scroll-snapp-container'>
      {/* 1. HOME SECTION */}
      {/* 🚀 Apply the new class */}
      <section id="home" className="scroll-snap-section">
        {HomeContent}
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="experience" className="scroll-snap-section">
        <ExperienceSection />
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="scroll-snap-section">
        <ProjectsSection />
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="scroll-snap-section">
        <SkillsSection />
      </section>

      <section id="testimonials" className="scroll-snap-section">
        <TestimonialsSection />
      </section>

      {/* 5. CONTACT/DEMO SECTION */}
      <section id="contact" className="scroll-snap-section">
        <ContactSection />
      </section>
    </div>
  );
}