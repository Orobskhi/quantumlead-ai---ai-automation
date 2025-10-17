import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" aria-label="QuantumLead AI Home">
                        <Logo className="h-10 w-auto" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center rounded-lg bg-primary h-10 px-5 text-sm font-bold text-white transition-all hover:glow active:scale-95"
                        >
                            <span className="truncate">Get Started</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;