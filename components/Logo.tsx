
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 200 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06a8f9" />
                </linearGradient>
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
            <g transform="translate(20, 20)">
                <circle cx="0" cy="0" r="14" stroke="url(#logoGradient)" strokeWidth="2.5" fill="none" />
                <text x="-8" y="7" fontFamily="'Space Grotesk', sans-serif" fontSize="20" fontWeight="bold" fill="white">Q</text>
                {[...Array(10)].map((_, i) => {
                     const angle = (2 * Math.PI / 10) * i + Math.PI/10;
                     return <circle key={i} cx={18 * Math.cos(angle)} cy={18 * Math.sin(angle)} r="1.5" fill="url(#logoGradient)"/>
                })}
                 <path d="M 8 -11 L 11 -14" stroke="url(#logoGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </g>
            <g transform="translate(45, 0)">
                <path d="M 0 20 L 15 20 L 20 15 L 75 15 L 80 20 L 140 20" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" />
                <path d="M 15 20 L 20 25 L 75 25 L 80 20" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" />
                 <text x="5" y="27" fontFamily="'Space Grotesk', sans-serif" fontSize="16" fontWeight="bold" fill="white" letterSpacing="1">QUANTUMLEAD</text>
                <g transform="translate(125, 10)">
                    <rect x="0" y="0" width="28" height="20" rx="2" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" />
                    <text x="4" y="15" fontFamily="'Space Grotesk', sans-serif" fontSize="14" fontWeight="bold" fill="white">AI</text>
                </g>
            </g>
        </svg>
    );
};

export default Logo;
