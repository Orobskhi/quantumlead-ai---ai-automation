export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string; // HTML string
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-ai-in-business-automation',
    title: 'The Future of AI in Business Automation',
    author: 'Dr. Evelyn Reed',
    date: 'October 26, 2023',
    excerpt:
      'Exploring how advancements in machine learning and natural language processing are set to redefine business operations in the coming decade.',
    imageUrl:
      'https://images.unsplash.com/photo-1620712943543-2858200f745a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    content: `
      <p>Artificial Intelligence is evolving beyond task automation into strategic enablement. Intelligent automation blends ML, NLP, and decisioning to augment teams and accelerate outcomes.</p>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">From RPA to Intelligent Automation</h2>
      <p>RPA automates rules-based work. Intelligent Automation adds cognition—understanding, predicting, and adapting—to automate workflows end-to-end across systems.</p>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Real-World Impact</h2>
      <p>Customer support, finance, and operations benefit from AI agents that triage, reconcile, and optimize. The goal is augmentation, not replacement—freeing teams for strategy and creativity.</p>
    `,
  },
  {
    slug: 'demystifying-neural-networks',
    title: "Demystifying Neural Networks: A Beginner's Guide",
    author: 'Marcus Chen',
    date: 'October 15, 2023',
    excerpt:
      'A high-level overview of neural networks, the powerhouse behind deep learning, explained in simple terms without the complex math.',
    imageUrl:
      'https://images.unsplash.com/photo-1599440546313-2b3a4a25925b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    content: `
      <p>Neural networks are function approximators made of layers of simple units. Each layer transforms inputs, learns patterns, and passes features onward.</p>
      <p>Activation functions add non-linearity, while backpropagation optimizes weights by measuring errors and nudging parameters in the right direction.</p>
      <p>Start simple: try a small feed-forward network on MNIST and learn the training loop. Then explore CNNs for images and RNNs/Transformers for sequences.</p>
    `,
  },
  {
    slug: 'ethical-considerations-in-ai',
    title: 'Ethical Considerations in AI Development',
    author: 'Isabella Rossi',
    date: 'September 28, 2023',
    excerpt:
      "As AI becomes more integrated into our lives, it's crucial to discuss the ethical frameworks needed to ensure fairness, transparency, and accountability.",
    imageUrl:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    content: `
      <p>Responsible AI hinges on designing for fairness, explainability, and robust governance. Auditable pipelines and bias monitoring are core safeguards.</p>
      <p>Privacy-preserving techniques—like differential privacy and federated learning—help reduce risk while maintaining utility.</p>
      <p>Ethics is a practice, not a checklist. Build cross-functional reviews and stakeholder input into your development lifecycle.</p>
    `,
  },
  {
    slug: 'industries-transformed-by-ai',
    title: 'Top 5 Industries Being Transformed by AI',
    author: "Liam O'Connell",
    date: 'September 12, 2023',
    excerpt:
      'From healthcare to finance, AI is not just a buzzword but a transformative force. We look at the five sectors experiencing the most significant impact.',
    imageUrl:
      'https://images.unsplash.com/photo-1516116216624-53e697320f64?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1280',
    content: `
      <p>Healthcare diagnostics, financial risk, logistics routing, retail personalization, and manufacturing maintenance are accelerating through AI.</p>
      <p>Each sector benefits from pattern recognition on large datasets, enabling prediction, optimization, and personalization at scale.</p>
      <p>Success requires strong data foundations, integrated workflows, and continuous model monitoring.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}