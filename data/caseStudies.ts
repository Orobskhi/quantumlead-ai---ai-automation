export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  details: string; // HTML string
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-recommendation-engine',
    title: 'E-commerce Recommendation Engine',
    summary:
      'Increased customer engagement by 35% with a personalized product recommendation AI.',
    imageUrl:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>We built a hybrid recommender blending collaborative filtering with content features. Real-time personalization led to higher CTR and AOV.</p>
      <p>Models were served via a low-latency API and retrained nightly on incremental events.</p>
    `,
  },
  {
    slug: 'logistics-route-optimization',
    title: 'Logistics Route Optimization',
    summary:
      'Reduced fuel costs by 22% and delivery times by 15% for a national shipping company.',
    imageUrl:
      'https://images.unsplash.com/photo-1577412643569-58d4153313f9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>Developed a routing optimizer combining graph search and ML ETA predictions. Dynamic re-routing reacted to traffic and weather conditions.</p>
      <p>Integration with dispatch systems enabled real-time visibility across fleets.</p>
    `,
  },
  {
    slug: 'predictive-maintenance-manufacturing',
    title: 'Predictive Maintenance for Manufacturing',
    summary:
      'Minimized equipment downtime by 40% by predicting failures before they occur.',
    imageUrl:
      'https://images.unsplash.com/photo-1581092921462-20f0053d5a00?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>Time-series anomaly detection flagged early signals of wear. Operators received prioritized maintenance tasks with expected impact scores.</p>
    `,
  },
  {
    slug: 'ai-customer-support-chatbot',
    title: 'AI-Powered Customer Support Chatbot',
    summary:
      'Improved customer satisfaction scores by 30% and reduced support ticket volume by half.',
    imageUrl:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>Deployed an NLP-powered assistant for Tier 1 queries with human handoff for complex cases. Continuous learning improved coverage over time.</p>
    `,
  },
  {
    slug: 'financial-fraud-detection',
    title: 'Financial Fraud Detection System',
    summary:
      'Detected and prevented over $10M in fraudulent transactions in the first year of operation.',
    imageUrl:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>Built a graph-based anomaly detector that surfaced suspicious patterns across accounts, devices, and merchants with explainable alerts.</p>
    `,
  },
  {
    slug: 'automated-document-processing',
    title: 'Automated Document Processing',
    summary:
      'Saved over 10,000 man-hours annually by automating the extraction of data from invoices.',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    details: `
      <p>OCR plus layout-aware extraction turned unstructured invoices into clean records. Confidence scoring and human review ensured accuracy.</p>
    `,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}