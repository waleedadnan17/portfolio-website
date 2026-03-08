import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 group"
                >
                    <div className="w-10 h-10 bg-accent/20 text-accent font-bold text-xl flex items-center justify-center rounded-lg border border-accent/30 group-hover:bg-accent group-hover:text-zinc-950 transition-colors">
                        W
                    </div>
                    <span className="font-semibold text-lg tracking-tight hidden sm:block">
                        Portfolio
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-accent"
                            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open to Work
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-zinc-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-zinc-400 hover:text-white cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-2 flex items-center gap-2 px-4 py-2 w-max rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Open to Work
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
