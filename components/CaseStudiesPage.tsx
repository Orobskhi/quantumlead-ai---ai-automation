import React from 'react';
import WorkflowVisuals from './WorkflowVisuals';
import Testimonials from './Testimonials';

const CaseStudiesPage: React.FC = () => {
    return (
        <>
            <section className="w-full pt-16 sm:pt-24 lg:pt-32">
                <div className="flex flex-col items-center gap-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Case Studies</h1>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Explore how we've helped businesses like yours achieve remarkable results through intelligent automation and bespoke AI solutions.
                    </p>
                </div>
                {/* Re-using the WorkflowVisuals component which has been updated to be case studies */}
                <WorkflowVisuals />
            </section>
            <Testimonials />
        </>
    );
};

export default CaseStudiesPage;