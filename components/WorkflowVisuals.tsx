import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { proxyImage } from '../utils/imageProxy';
import { svgPlaceholder } from '../utils/placeholder';

const WorkflowVisuals: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Work in Action</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                    See how our custom automation solutions come to life, simplifying complex processes and delivering tangible results.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study, index) => (
                    <Link to={`/case-studies/${study.slug}`} key={index} className="group relative overflow-hidden rounded-xl block">
                        <img
                            src={proxyImage(study.imageUrl, { width: 640 })}
                            alt={study.title}
                            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                            crossOrigin="anonymous"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                const img = e.currentTarget as HTMLImageElement;
                                const step = img.dataset.fallbackStep ?? '0';
                                if (step === '0') {
                                    img.dataset.fallbackStep = '1';
                                    img.src = study.imageUrl; // try original URL
                                } else if (step === '1') {
                                    img.dataset.fallbackStep = '2';
                                    img.src = svgPlaceholder(640, 360, study.title); // final local fallback
                                }
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-100 p-6 flex flex-col justify-end">
                            <h3 className="text-xl font-bold text-white">{study.title}</h3>
                            <p className="text-sm text-gray-300 mt-1">{study.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default WorkflowVisuals;