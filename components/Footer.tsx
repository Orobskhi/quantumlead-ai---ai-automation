import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-background-dark border-t border-primary/20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link to="/" aria-label="QuantumLead AI Home">
                           <Logo className="h-10 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm">AI Automation &amp; Tech Consultancy</p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    className="text-sm text-gray-400 hover:text-primary transition-colors" 
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-gray-500">
                    <p>© 2024 QuantumLead AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;