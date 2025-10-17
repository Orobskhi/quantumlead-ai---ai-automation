import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCaseStudyBySlug } from '../data/caseStudies';
import { proxyImage } from '../utils/imageProxy';
import { svgPlaceholder } from '../utils/placeholder';

const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return (
      <section className="w-full py-16 sm:py-24 lg:py-32">
        <article className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Case Study Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">We couldn\'t find the project page you\'re looking for.</p>
          <Link to="/case-studies" className="mt-6 inline-block text-primary font-bold">Back to Case Studies</Link>
        </article>
      </section>
    );
  }

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32">
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{study.title}</h1>
        </div>
        <img
          src={proxyImage(study.imageUrl, { width: 1280 })}
          alt={study.title}
          className="w-full rounded-xl object-cover mb-12"
          style={{ aspectRatio: '16/9' }}
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
              img.src = svgPlaceholder(1280, 720, study.title); // final local fallback
            }
          }}
        />
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
          <p className="text-lg mb-6">{study.summary}</p>
          <div dangerouslySetInnerHTML={{ __html: study.details }} />
        </div>
      </article>
    </section>
  );
};

export default CaseStudyDetailPage;