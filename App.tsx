
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import BlogPostPage from './components/BlogPostPage';
import CaseStudyDetailPage from './components/CaseStudyDetailPage';

const App: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans">
            <Header />
            <main className="container mx-auto px-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
