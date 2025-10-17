import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-8 rounded-xl bg-primary/10 dark:bg-primary/20 p-8 text-center md:p-16">
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Ready to Automate Your Success with QuantumLead AI?
                    </h1>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                        Contact us today to discuss your AI automation needs and explore how we can help you achieve your business objectives.
                    </p>
                </div>
                <button 
                    className="flex items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-white transition-all hover:glow active:scale-95"
                    onClick={() => navigate('/contact')}
                >
                    <span className="truncate">Contact Us</span>
                </button>
            </div>
        </section>
    );
};

export default CTA;