import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-base font-semibold text-accent tracking-widest uppercase mb-3">What's Next?</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something together</h3>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 text-left">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-5 flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-6">Connect with me</h4>

                            <div className="space-y-6">
                                <a href="mailto:waleedadnan469@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-accent transition-colors group">
                                    <div className="p-3 glass-card rounded-full group-hover:border-accent">
                                        <Mail size={22} className="text-white group-hover:text-accent transition-colors" />
                                    </div>
                                    <span className="text-lg font-medium">waleedadnan469@gmail.com</span>
                                </a>

                                <a href="https://github.com/waleedadnan17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                                    <div className="p-3 glass-card rounded-full group-hover:border-white">
                                        <Github size={22} className="text-white" />
                                    </div>
                                    <span className="text-lg font-medium">github.com/waleedadnan17</span>
                                </a>

                                <a href="https://linkedin.com/in/waleedadnan469" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-[#0A66C2] transition-colors group">
                                    <div className="p-3 glass-card rounded-full group-hover:border-[#0A66C2]">
                                        <Linkedin size={22} className="text-white group-hover:text-[#0A66C2] transition-colors" />
                                    </div>
                                    <span className="text-lg font-medium">linkedin.com/in/waleedadnan469</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-7"
                    >
                        <form action="https://formspree.io/f/xykdqbpy" method="POST" className="glass-card p-8 flex flex-col gap-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder="Internship Opportunity"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                                    placeholder="Hello, I would like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 bg-accent text-zinc-950 font-bold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-all hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,191,255,0.4)]"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
