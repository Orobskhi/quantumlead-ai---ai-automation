
import React from 'react';
import Services from './Services';
import ProcessSteps from './ProcessSteps';
import CTA from './CTA';

const ServicesPage: React.FC = () => {
    return (
        <>
            <section className="w-full pt-16 sm:pt-24 lg:pt-32">
                <div className="flex flex-col items-center gap-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Our Services</h1>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                       Driving business transformation through intelligent automation and bespoke AI solutions.
                    </p>
                </div>
            </section>
            <Services />
            <ProcessSteps />
            <CTA />
        </>
    );
};

export default ServicesPage;
