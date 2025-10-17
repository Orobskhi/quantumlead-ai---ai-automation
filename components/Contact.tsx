import React from 'react';

const faqs = [
    { 
        q: 'What industries do you specialize in?', 
        a: 'We have experience across a wide range of industries, including logistics, e-commerce, manufacturing, finance, and healthcare. Our solutions are adaptable to the unique challenges of any sector.' 
    },
    { 
        q: 'How long does a typical project take?', 
        a: 'Project timelines vary depending on complexity, but a typical engagement lasts between 3 to 6 months from discovery to deployment. We work with you to establish a clear timeline upfront.' 
    },
    { 
        q: 'Do you offer ongoing support?', 
        a: 'Yes, we offer a range of ongoing support and maintenance packages to ensure your AI systems continue to operate at peak performance and evolve with your business needs.' 
    },
];

const Contact: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Get In Touch</h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    Have a question or a project in mind? We'd love to hear from you.
                </p>
            </div>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                {/* Contact Info */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Fill out the form and our team will get back to you within 24 hours. Or, reach out to us directly through any of the channels below.
                    </p>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span className="text-gray-800 dark:text-gray-200">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <span className="text-gray-800 dark:text-gray-200">hello@quantumlead.ai</span>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span className="text-gray-800 dark:text-gray-200">123 Quantum Drive, Tech City, USA</span>
                        </div>
                    </div>
                     <div className="mt-6 h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">Map Placeholder</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark/50">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                         <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" name="subject" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                        <button type="submit" className="flex items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-white transition-all hover:glow active:scale-95">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
             {/* FAQ Section */}
            <div className="w-full max-w-6xl mx-auto mt-16 sm:mt-24 lg:mt-32">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="mt-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark/50 p-6">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{faq.q}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;