
import React from 'react';

const ServiceDetailPage: React.FC = () => {
    // Placeholder content for a service detail page
    // In a real app, you would fetch service details based on an ID
    const service = {
        title: 'Custom AI Development',
        description: 'We build bespoke AI models and platforms tailored to your unique business needs, from natural language processing to computer vision. Our team works closely with you to understand your specific challenges and opportunities, ensuring the final product is not just technologically advanced but also perfectly aligned with your strategic goals.',
        features: [
            'Natural Language Processing (NLP) Solutions',
            'Computer Vision & Image Recognition',
            'Predictive Analytics & Forecasting Models',
            'Reinforcement Learning Systems',
            'Custom API and Platform Development',
            'Scalable Cloud-based Architecture'
        ]
    };

    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{service.title}</h1>
                </div>
                <div className="max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
                    <p className="text-lg">{service.description}</p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Key Features</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailPage;
