import React from 'react';

const features = [
    {
        title: 'Pioneering Innovation',
        description: 'We stay at the forefront of AI research, implementing the latest breakthroughs to give you a competitive edge.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,0,1-29.06,44.11A8,8,0,0,1,136,165.48V139.86l-10.34,10.34a8,8,0,0,1-11.32,0L96.51,132.37a8,8,0,0,1,0-11.32L124.34,93.22a8,8,0,0,1,11.32,0L148,105.51,167.5,86a8,8,0,0,1,11.32,11.32L159.16,117l21.49,15.21A47.53,47.53,0,0,1,176,128Z"></path></svg>
        ),
    },
    {
        title: 'Tailored Solutions',
        description: 'Our solutions are not one-size-fits-all. We deeply analyze your business to build bespoke AI systems that deliver results.',
         icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M228.41,83.13,172.87,27.59a16,16,0,0,0-22.62,0L27.59,150.25a16,16,0,0,0,0,22.62l55.54,55.54a16,16,0,0,0,22.62,0L228.41,105.75a16,16,0,0,0,0-22.62ZM161.54,49.71,206.29,94.46l-20,20L141.54,69.71ZM74.54,204.29,40,169.75l16-16,44.75,44.75ZM61.71,148,112,97.75,158.25,144,108,194.25ZM96,32a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H104A8,8,0,0,1,96,32Zm120,184a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H208A8,8,0,0,1,216,216Z"></path></svg>
        ),
    },
    {
        title: 'Collaborative Partnership',
        description: 'We work as an extension of your team, ensuring transparency, communication, and a shared vision for success.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M172,120a44,44,0,1,1,44-44A44.05,44.05,0,0,1,172,120Zm0-72a28,28,0,1,0,28,28A28,28,0,0,0,172,48Zm-88,40a44,44,0,1,1-44-44A44.05,44.05,0,0,1,84,88Zm0-72a28,28,0,1,0,28,28A28,28,0,0,0,84,16Zm115.15,114.3a8,8,0,0,0-10.3,1.69A75.46,75.46,0,0,1,140,152a8,8,0,0,0-16,0,59.5,59.5,0,0,1,3.42,21.52c0,.16,0,.31,0,.47a60,60,0,0,1-103-22.45,8,8,0,0,0-10.3-1.69A75.9,75.9,0,0,0,0,192a8,8,0,0,0,8,8H248a8,8,0,0,0,8-8A75.9,75.9,0,0,0,199.15,130.3Z"></path></svg>
        ),
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Why Partner with QuantumLead AI?</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                    We're more than just a technology provider. We are your strategic partner in AI-driven transformation.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-background-light/40 dark:bg-background-dark/40 border border-transparent hover:border-primary/30 transition-colors">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
