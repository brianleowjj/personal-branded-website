// src/app/experience/page.tsx

import type { Metadata } from 'next';
import ContentWrapper from '@/components/ContentWrapper';

export const metadata: Metadata = {
    title: 'Professional Experience | Brian Leow',
    description: 'Detailed career history in FinTech, focusing on backend development, team leadership, and database performance optimization.',
};

export default function ExperiencePage() {
    return (
        <ContentWrapper>

            {/* H1 - Primary Focus (White) */}
            <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
                Professional Experience
            </h1>

            {/* T05 Technologies - SECTION */}
            <section className="mb-10 pt-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        {/* H2 - Secondary Focus (Accent Color) */}
                        <h2 className="text-2xl font-bold text-blue-400 mb-1">T05 Technologies Sdn Bhd</h2>
                        {/* Descriptive Text - Tertiary Focus (Medium Gray) */}
                        <p className="text-lg font-semibold text-gray-400">Software Developer, Backend Development</p>
                    </div>
                    {/* Dates - Tertiary Focus (Medium Gray) */}
                    <p className="text-md text-gray-500 text-right">Jan 2023 - July 2025</p>
                </div>
                {/* List Items - Readable Content (Global CSS should make this brighter) */}
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Defined comprehensive project scopes through detailed database structure designs, then planned and allocated work based on the project timelines.</li>
                    <li>Led and facilitated project meetings to address issues, monitor progress, and ensure timely completion.</li>
                    <li>Acted as the team liaison during discussions with external developers, ensuring seamless system integration and requirement finalisation.</li>
                    <li>Evaluated team performance and code quality throughout the project lifecycles.</li>
                </ul>
            </section>

            <hr className="my-8 border-gray-700" />

            {/* Hitachi Ebworx Sdn Bhd - SECTION */}
            <section className="mb-10 pt-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        {/* H2 - Secondary Focus (Accent Color) */}
                        <h2 className="text-2xl font-bold text-blue-400 mb-1">Hitachi Ebworx Sdn Bhd</h2>
                        {/* Descriptive Text - Tertiary Focus (Medium Gray) */}
                        <p className="text-lg font-semibold text-gray-400">Associate Technical Service Engineer, Database Department</p>
                    </div>
                    {/* Dates - Tertiary Focus (Medium Gray) */}
                    <p className="text-md text-gray-500 text-right">Aug 2020 - Dec 2022</p>
                </div>
                {/* List Items - Readable Content */}
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analysed system performance by identifying processes with high resource consumption and implemented solutions to improve efficiency.</li>
                    <li>Identified performance bottlenecks in database activities by analysing reports and implementing solutions to optimise processing times.</li>
                    <li>Developed tools to track and measure database performance across various versions, ensuring system optimisation.</li>
                </ul>
            </section>

            {/* Hitachi Ebworx (Applications) - SECTION */}
            <section className="pt-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        {/* H2 (Implicit) - Tertiary Focus (Medium Gray) */}
                        <p className="text-lg font-semibold text-gray-400">Application Engineer, Credit Management Banking Applications</p>
                    </div>
                    {/* Dates - Tertiary Focus (Medium Gray) */}
                    <p className="text-md text-gray-500 text-right">Mar 2019 - Aug 2020</p>
                </div>
                {/* List Items - Readable Content */}
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contributed to the improvement of banking application functionalities by designing and developing software enhancements.</li>
                    <li>Successfully managed project transitions from testing phases to production environments, ensuring smooth implementation both onsite and remotely.</li>
                    <li>Played a key role in identifying and resolving client and developer issues related to APIs and system configurations, ensuring project quality and user satisfaction.</li>
                </ul>
            </section>
        </ContentWrapper>
    );
}