import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
    {
        title: "Explainable AI for Brain Age Prediction",
        description: "Master Thesis evaluating XAI faithfulness in regression-based deep learning. Applied Guided Backpropagation and SHAP to T1-weighted MRI to benchmark neuroimaging transparency.",
        tags: ["Python", "PyTorch", "Deep Learning", "SHAP", "XAI"],
        githubUrl: "#",
        liveUrl: "https://www.medrxiv.org/content/10.1101/2023.04.22.23288741v2",
        featured: true,
    },
    {
        title: "RAG-Powered Document Q&A Chatbot",
        description: "Engineered an end-to-end RAG pipeline achieving 85% retrieval hit rate. Built an explainability-first Streamlit interface surfacing source chunks, similarity scores, and metadata alongside LangChain memory.",
        tags: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS"],
        githubUrl: "https://github.com/waleedadnan17/RAG-document-QA-chatbot",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "InspectUX — Automated UI/UX Evaluation Tool",
        description: "Chrome extension using ML to evaluate website usability against Nielsen's 10 Heuristics and WCAG 2.0 guidelines.",
        tags: ["Python", "Flask", "Selenium", "ML", "Chrome Extension"],
        githubUrl: "#",
        liveUrl: "https://drive.google.com/file/d/1EvAfWaiWTAUxcQIP10zlIdXFiqDLOjRK/view",
        featured: false,
    },
    {
        title: "Intrusion Detection with Deep Learning",
        description: "Benchmarked 5 neural network architectures on UNSW-NB15 dataset (257K records) for network intrusion detection. Achieved 89.7% accuracy with ANN for binary classification.",
        tags: ["Python", "TensorFlow", "Keras", "Scikit", "Deep Learning"],
        githubUrl: "#",
        liveUrl: "https://drive.google.com/file/d/1XSizWoYI3mePxQiJseddGQPlukPPlzuQ/view",
        featured: false,
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-accent rounded-full inline-block"></span>
                            Selected Works
                        </h2>
                        <a href="https://github.com/waleedadnan17" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 text-zinc-400 hover:text-white group transition-colors">
                            View all on GitHub <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass-card p-8 group flex flex-col h-full relative ${project.featured ? 'ring-1 ring-accent/30' : ''}`}
                            >
                                {project.featured && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-zinc-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(0,191,255,0.4)]">
                                        <Star size={12} className="fill-zinc-950" /> Featured
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a href={project.githubUrl} className="text-zinc-400 hover:text-white transition-colors" aria-label="Github Repo">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.liveUrl && project.liveUrl !== "#" && (
                                            <a href={project.liveUrl} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium" aria-label="Live Demo">
                                                <ExternalLink size={18} /> <span className="hidden sm:inline">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <a href="https://github.com/waleedadnan17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            View all on GitHub <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
