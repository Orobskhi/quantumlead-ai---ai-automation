import React from 'react';

const testimonials = [
    { 
        quote: "QuantumLead's AI solution revolutionized our workflow. We're more efficient and profitable than ever. Their team is simply best-in-class.", 
        name: "Sarah Jones", 
        title: "COO, Innovate Corp" 
    },
    { 
        quote: "The expertise and dedication shown by the QuantumLead team were unmatched. They delivered a custom solution that exceeded all our expectations.", 
        name: "Michael Chen", 
        title: "CTO, Future Systems" 
    },
    { 
        quote: "Working with QuantumLead felt like a true partnership. Their insights were invaluable to our success and they guided us at every step of the process.", 
        name: "Emily Rodriguez", 
        title: "CEO, NextGen Logistics" 
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">What Our Clients Say</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                    We're proud to have partnered with innovative companies to drive their success.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col justify-between gap-6 p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark/50">
                        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                            "{testimonial.quote}"
                        </blockquote>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                            <p className="text-sm text-primary">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
