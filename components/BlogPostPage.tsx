
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/blogPosts';
import { proxyImage } from '../utils/imageProxy';
import { svgPlaceholder } from '../utils/placeholder';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <section className="w-full py-16 sm:py-24 lg:py-32">
                <article className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Post Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">We couldn\'t find the blog post you\'re looking for.</p>
                    <Link to="/blog" className="mt-6 inline-block text-primary font-bold">Back to Blog</Link>
                </article>
            </section>
        );
    }

    return (
        <section className="w-full py-16 sm:py-24 lg:py-32">
            <article className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{post.title}</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">By {post.author} on {post.date}</p>
                </div>
                <img
                    src={proxyImage(post.imageUrl, { width: 1280 })}
                    alt={post.title}
                    className="w-full rounded-xl object-cover mb-12"
                    style={{aspectRatio: '16/9'}}
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
                            img.src = svgPlaceholder(1280, 720, post.title); // final local fallback
                        }
                    }}
                />
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                     dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
            </article>
        </section>
    );
};

export default BlogPostPage;
