import React from 'react';

const steps = [
    { 
        number: '01', 
        title: 'Discovery & Strategy', 
        description: 'We start by deeply understanding your business goals, challenges, and opportunities to draft a comprehensive AI strategy and roadmap.' 
    },
    { 
        number: '02', 
        title: 'Design & Prototyping', 
        description: 'Our team designs the AI workflow architecture and builds a functional prototype to validate our approach and give you a tangible feel for the solution.' 
    },
    { 
        number: '03', 
        title: 'Development & Integration', 
        description: 'Our expert engineers build the full-scale AI solution and integrate it seamlessly into your existing systems with minimal disruption.' 
    },
    { 
        number: '04', 
        title: 'Deployment & Optimization', 
        description: 'We deploy the solution and continuously monitor its performance, making data-driven optimizations to ensure maximum return on your investment.' 
    },
];

const ProcessSteps: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Proven Process</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                    We follow a structured and transparent process to ensure your project's success from start to finish.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                    <div key={step.number} className="relative flex flex-col items-start gap-4 p-6 rounded-xl bg-background-light/40 dark:bg-background-dark/40">
                        <span className="absolute top-6 right-6 text-6xl font-bold text-gray-200 dark:text-gray-800 -z-10">{step.number}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSteps;
