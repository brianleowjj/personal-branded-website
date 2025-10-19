// src/app/skills/page.tsx

import type { Metadata } from 'next';
import ContentWrapper from '@/components/ContentWrapper';
import EducationItem from '@/components/EducationItem';

export const metadata: Metadata = {
    title: 'Technical Skills & Tools | Brian Leow',
    description: 'Comprehensive list of technical competencies including Nodejs, Express, PostgreSQL, MongoDB, Docker, Kubernetes, and MQTT.',
};

const languages = ['HTML', 'CSS', 'SQL', 'C#', 'C++', 'X86 Assembly (basic)', 'PHP (basic)', 'Java', 'JavaScript', 'jQuery', 'Nodejs', 'AngularJS (basic)', 'Processing', 'Swift 2.0', 'Express', 'React (basic)', 'React-native (basic)', 'MQTT'];
const databases = ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLDeveloper', 'Robo 3T'];
const devOpsTools = ['Docker', 'Kubernetes', 'Git', 'Gitlab', 'Postman', 'Jira', 'MobaXterm', 'TeamGantt', 'Basecamp'];
const frameworks = ['.NET Framework', 'MVC Framework', 'Spring Boot Framework (basic)'];
const developmentTools = ['Microsoft Visual Studio', 'NetBeans', 'Eclipse', 'Xcode', 'Arduino', 'XCTU', 'IntelliJ', 'Apache Maven', 'Odoo', 'Visual Studio Code'];
const operatingSystems = ['Windows 10/11', 'macOS'];
const speakingLanguages = ['Native English', 'Mandarin Chinese', 'Malay'];

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-gray-800 text-teal-300 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full border border-teal-500/50 shadow-md">
        {skill}
    </span>
);

export default function SkillsPage() {
    return (
        <ContentWrapper>
            <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                Technical Skills & Competencies
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Core Backend & Programming Languages</h2>
                <div className="flex flex-wrap">
                    {languages.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Database Systems</h2>
                <div className="flex flex-wrap">
                    {databases.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">DevOps, Monitoring & Collaboration</h2>
                <div className="flex flex-wrap">
                    {devOpsTools.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Frameworks & Tools</h2>
                <div className="flex flex-wrap">
                    {frameworks.sort().map(s => <SkillBadge key={s} skill={s} />)}
                    {developmentTools.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Operating Systems</h2>
                <div className="flex flex-wrap mb-4">
                    {operatingSystems.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Spoken Languages</h2>
                <div className="flex flex-wrap mb-4">
                    {speakingLanguages.sort().map(s => <SkillBadge key={s} skill={s} />)}
                </div>
            </section>

            {/* Formal Education */}
            <section className="mb-8 mt-10 border-t border-gray-700 pt-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Education
                </h2>

                <div className="space-y-6">

                    <EducationItem
                        institution="University College Dublin"
                        degree="Masters of Science in Project Management"
                        duration="Expected to Graduate: September 2026"
                        // location="Dublin, Ireland"
                        // Ensure you have this logo in public/images/logos/
                        logoPath="/images/logos/ucd-logo.png"
                    />

                    <EducationItem
                        institution="Sheffield Hallam University"
                        degree="Bachelor of Engineering with Honours in Software Engineering"
                        duration="Second Class Honours (1st Division) (2018)"
                        // location="Sheffield, UK"
                        // Ensure you have this logo in public/images/logos/
                        logoPath="/images/logos/shu-logo.png"
                    />

                </div>
            </section>
        </ContentWrapper>
    );
}