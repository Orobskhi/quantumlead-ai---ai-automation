import React from 'react';

const teamMembers = [
    {
        name: 'Dr. Evelyn Reed',
        role: 'Founder & CEO',
        bio: 'A visionary in AI with two decades of experience driving technological innovation.',
    },
    {
        name: 'Marcus Chen',
        role: 'Chief Technology Officer',
        bio: 'The architectural mastermind behind our cutting-edge AI platforms.',
    },
    {
        name: 'Isabella Rossi',
        role: 'Head of AI Strategy',
        bio: 'Expert in aligning AI capabilities with strategic business objectives for maximum impact.',
    },
     {
        name: 'Liam O\'Connell',
        role: 'Lead Data Scientist',
        bio: 'Transforms complex datasets into actionable insights that power our solutions.',
    },
    {
        name: 'David Lee',
        role: 'Head of Operations',
        bio: 'Ensures our projects are delivered on time and on budget with seamless execution.',
    },
    {
        name: 'Aisha Khan',
        role: 'Senior AI Engineer',
        bio: 'Specializes in natural language processing and builds the core of our language models.',
    },
];

const values = [
    { 
        title: "Innovation", 
        description: "We constantly push the boundaries of what's possible with AI.",
        icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M17.663 17l.707.707M12 21v-1m-6.364-1.636l.707-.707M6.343 6.343l-.707-.707"></path></svg> 
    },
    { 
        title: "Integrity", 
        description: "We build trust through transparency, ethical practices, and honest communication.",
        icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-5.382-4.016z"></path></svg> 
    },
    { 
        title: "Impact", 
        description: "We are committed to delivering measurable results that drive real business value.",
        icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> 
    },
];

const About: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-16 md:gap-24">
                {/* Intro Section */}
                <div className="flex flex-col items-center gap-4 text-center max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">About QuantumLead AI</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        We are a passionate team of technologists, strategists, and innovators dedicated to harnessing the power of artificial intelligence to solve the most complex business challenges.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="text-center p-8 rounded-xl bg-primary/10 dark:bg-primary/20 max-w-4xl">
                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                     <p className="text-xl text-primary dark:text-primary/90 italic">
                        "To empower organizations with intelligent automation, transforming their potential into performance and leading the charge into a new era of efficiency and growth."
                    </p>
                </div>

                 {/* Our Story */}
                <div className="w-full max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Story</h2>
                    <p className="text-gray-600 dark:text-gray-400 space-y-4">
                        <span>Founded in 2021 by a team of AI pioneers, QuantumLead AI was born from a shared belief that intelligent technology could solve real-world problems on a massive scale.</span>
                        <span>We started in a small lab, fueled by coffee and a passion for machine learning, and have since grown into a leading consultancy that has deployed transformative AI solutions for clients across the globe. Our journey is a testament to our commitment to innovation and excellence.</span>
                    </p>
                </div>

                {/* Our Values Section */}
                <div className="w-full max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {values.map((value, index) => (
                             <div key={index} className="flex flex-col items-center gap-4 p-6">
                                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                                    {value.icon}
                                 </div>
                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                                 <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="w-full max-w-7xl">
                    <div className="flex flex-col items-center gap-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Meet the Team</h2>
                        <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                            The brilliant minds behind our success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark/50 p-6 transition-all hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                                     <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-sm font-medium text-primary">{member.role}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;