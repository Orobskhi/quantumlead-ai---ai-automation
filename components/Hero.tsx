import React from 'react';

const Hero: React.FC = () => {
    const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfIxznb3VlWX-QkkHCfUVklHoEABi3LKcI-VWHQSb2zbILcjUvttdx8LjXTqjcgvEY5GIf18qF-dZtgDtiZ7W17alGssfW0w8MYFO288V7kcXcLPsvQ5eP-xChh92yGXyPZjd1hj_C2MY8dy4_pT1fP5LNEds1zzI3ZJ_pw5CGXhvxkc4gfoeh_aLkvNCgldLJOSEWyu-rUUMxVeS3CZV-kp4Ti1V2IFeaN2s-U5v-s3Q52qGRdhs1ORg7y1gd5Mjtb25c-U6Hcos";

    return (
         <section className="w-full pt-16 sm:pt-24 lg:pt-32">
            <div
                className="relative flex min-h-[480px] w-full flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center p-8 md:p-16"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%), url("${heroImageUrl}")` }}
            >
                <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
                        Transform Your Business with <span className="text-primary">QuantumLead AI</span>
                    </h1>
                    <h2 className="text-base font-normal text-gray-300 sm:text-lg">
                        We specialize in crafting bespoke AI solutions that streamline operations, enhance decision-making, and drive unprecedented growth. Our team of experts at QuantumLead AI combines cutting-edge technology with deep industry insights to deliver transformative results.
                    </h2>
                </div>
                <button className="flex items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-white transition-all hover:glow active:scale-95">
                    <span className="truncate">Schedule a Demo</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;