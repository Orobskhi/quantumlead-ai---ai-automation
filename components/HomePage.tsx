import React from 'react';
import Hero from './Hero';
import Services from './Services';
import WorkflowVisuals from './WorkflowVisuals';
import CTA from './CTA';
import WhyChooseUs from './WhyChooseUs';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <WorkflowVisuals />
            <CTA />
        </>
    );
};

export default HomePage;