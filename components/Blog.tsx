
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { proxyImage } from '../utils/imageProxy';
import { svgPlaceholder } from '../utils/placeholder';

const Blog: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">QuantumLead AI Blog</h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    Insights, trends, and discussions on the world of Artificial Intelligence from our team of experts.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark/50 transition-all hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                        <div className="overflow-hidden">
                            <img
                                src={proxyImage(post.imageUrl, { width: 1024 })}
                                alt={post.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                                crossOrigin="anonymous"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    const step = img.dataset.fallbackStep ?? '0';
                                    if (step === '0') {
                                        img.dataset.fallbackStep = '1';
                                        img.src = post.imageUrl; // try original URL
                                    } else if (step === '1') {
                                        img.dataset.fallbackStep = '2';
                                        img.src = svgPlaceholder(640, 360, post.title); // final local fallback
                                    }
                                }}
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{post.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">By {post.author} on {post.date}</p>
                            <p className="text-gray-600 dark:text-gray-400 mt-4 flex-grow">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="mt-6 text-sm font-bold text-primary hover:underline">Read More &rarr;</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
