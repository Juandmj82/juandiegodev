'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/#sobre-mi", text: "Sobre Mí" },
    { href: "/#habilidades", text: "Habilidades" },
    { href: "/#portafolio-backend", text: "Portafolio" },
    { href: "/#contacto", text: "Hablemos" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
            <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="font-bold text-lg text-primary">
                    JuanDiDev
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="relative text-secondary hover:text-primary transition-colors duration-300 py-2 group"
                        >
                            {link.text}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 py-4 bg-surface/95 backdrop-blur-sm border-b border-border/50">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-secondary hover:text-primary transition-colors border-b border-border/30 last:border-0"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
