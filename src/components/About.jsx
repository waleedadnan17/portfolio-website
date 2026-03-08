import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    "Python", "PyTorch", "FastAPI", "Docker", "LangChain",
    "OpenAI", "React", "SQL", "Git", "AWS"
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-16"
                >
                    {/* Left Text Column */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-accent rounded-full inline-block"></span>
                            About Me
                        </h2>

                        <div className="text-zinc-400 space-y-4 text-base md:text-lg leading-relaxed">
                            <p>
                                I'm an Aspiring AI Engineer with hands-on experience building and deploying production ML systems and LLM applications. I love bridging the gap between models and real-world deployment.
                            </p>
                            <p>
                                I am currently pursuing my MSc in Computer Science at Vrije Universiteit Brussel (VUB), where I was awarded the highest-ranked non-EEA scholarship. My expertise includes the GenAI stack, RAG pipelines, and model-serving microservices.
                            </p>
                            <p>
                                When I'm not coding or training models, I'm actively researching Explainable AI for regression models to make deep learning more transparent in healthcare and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Right Info Cards */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6 w-full">
                        <div className="glass-card p-6 border-l-4 border-l-accent">
                            <h3 className="text-xl font-semibold mb-2 text-white">Current Status</h3>
                            <p className="text-zinc-400">
                                MSc Computer Science Student at <span className="text-zinc-200 font-medium my-1">Vrije Universiteit Brussel</span>. <br />
                                Expected Graduation: <span className="text-accent font-medium mt-1 inline-block">2026</span>
                            </p>
                        </div>

                        <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-4 text-white">Core Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-accent transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
