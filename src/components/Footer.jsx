import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                <div className="flex flex-col items-center md:items-start max-w-sm">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer flex items-center gap-2 mb-4"
                    >
                        <div className="w-8 h-8 bg-accent/20 text-accent font-bold text-lg flex items-center justify-center rounded-lg border border-accent/20">
                            W
                        </div>
                        <span className="font-semibold text-lg tracking-tight text-white">
                            Waleed
                        </span>
                    </Link>
                    <p className="text-sm text-zinc-400 text-center md:text-left leading-relaxed">
                        Building digital experiences with modern web technologies. Open for software engineering internships and junior roles.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/waleedadnan17" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/waleedadnan469" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 flex items-center justify-center rounded-lg hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors">
                        <Linkedin size={20} />
                    </a>

                    <a href="mailto:waleedadnan469@gmail.com" className="p-2 text-zinc-400 flex items-center justify-center rounded-lg hover:bg-accent/10 hover:text-accent transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Waleed. All rights reserved.
                </p>
                <p className="text-zinc-500 text-sm">
                    Built with React & Tailwind CSS. Designed by Waleed.
                </p>
            </div>
        </footer>
    );
}
