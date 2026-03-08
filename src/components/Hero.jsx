import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-10 animation-delay-2000"></div>

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Available for Internships & Full-time Roles
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Waleed</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-semibold text-zinc-400 mb-8 h-[40px] md:h-[48px]"
                >
                    I'm a{' '}
                    <span className="text-zinc-100">
                        <Typewriter
                            words={['AI Engineer.', 'CS Master\'s Student.', 'Machine Learning Developer.', 'Problem Solver.']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed"
                >
                    MSc CS candidate at VUB building Generative AI applications, RAG pipelines, and researching explainable AI for deep learning.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group cursor-pointer flex items-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-white/5 text-zinc-100 border border-white/10 px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </motion.div>
            </div>

            {/* Down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex justify-center text-zinc-500 hover:text-white transition-colors"
            >
                <Link to="about" smooth={true} duration={500}>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-current rounded-full"></div>
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
