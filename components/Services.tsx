
import React from 'react';

const servicesData = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>,
        title: 'Custom AI Development',
        description: 'We build bespoke AI models and platforms tailored to your unique business needs, from natural language processing to computer vision.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M240,112c-2.26,0-4.44.19-6.58.55a52,52,0,0,0-98.84,0c-2.14-.36-4.32-.55-6.58-.55a64,64,0,0,0-58.37,92.83A48,48,0,0,0,88,240H224a48,48,0,0,0,16-93.17C240,145.6,240,112,240,112Zm-16,112H88a32,32,0,0,1-1.3-63.95A8,8,0,0,0,88,152a8,8,0,0,0,6.71-3.79,68.08,68.08,0,0,1,126.58,0A8,8,0,0,0,228,152a8,8,0,0,0,1.3,7.95A32,32,0,0,1,224,224Z"></path></svg>,
        title: 'Cloud AI Integration',
        description: 'Leverage the power of Google Cloud, AWS, and Azure with our expert integration services, ensuring scalable and robust AI infrastructure.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-88a8,8,0,0,1,8-8,56,56,0,0,1,56,56,8,8,0,0,1-16,0,40,40,0,0,0-40-40A8,8,0,0,1,120,128Zm8,56a28,28,0,1,0-28-28A28,28,0,0,0,128,184Z"></path></svg>,
        title: 'Data & Analytics Strategy',
        description: 'Transform your data into a strategic asset. We help you build data pipelines, implement analytics, and generate actionable insights.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM40,184V96H96v88Zm72,0V96h48v88Zm64,0V96h56v88Zm-8-128a8,8,0,1,1-8-8A8,8,0,0,1,168,56Zm24,0a8,8,0,1,1-8-8A8,8,0,0,1,192,56Zm24,0a8,8,0,1,1-8-8A8,8,0,0,1,216,56Z"></path></svg>,
        title: 'Process Automation (RPA)',
        description: 'Automate repetitive tasks, streamline workflows, and free up your human workforce for more strategic initiatives with our RPA solutions.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path></svg>,
        title: 'AI Security & Ethics',
        description: 'Implement AI with confidence. We provide robust security protocols and ethical frameworks to ensure your AI is responsible and secure.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,168a8,8,0,0,1-16,0V141.72l-18.3,18.3a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L124,141.72V192Zm59.6-118.06a8,8,0,0,1-8.54,3.58,80.32,80.32,0,0,0-102.12,0,8,8,0,1,1-12.12-7.08,96.39,96.39,0,0,1,122.78,0A8,8,0,0,1,183.6,73.94Z"></path></svg>,
        title: 'AI Strategy Consulting',
        description: 'Not sure where to start? Our experts can help you identify opportunities for AI, build a business case, and create a roadmap for success.',
    },
];

const Services: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our AI Services</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                    We offer a comprehensive suite of services to help you harness the power of AI, from strategy to implementation and beyond.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {servicesData.map((service, index) => (
                    <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-xl bg-background-light/40 dark:bg-background-dark/40 border border-transparent hover:border-primary/30 transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
