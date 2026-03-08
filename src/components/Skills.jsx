import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const skillCategories = [
    {
        title: "GenAI & LLM Engineering",
        icon: <Code2 size={24} className="text-accent" />,
        skills: ["LangChain", "LangGraph", "LlamaIndex", "Hugging Face", "RAG", "FAISS", "Sentence-Transformers", "Prompt Engineering"]
    },
    {
        title: "ML & Deep Learning",
        icon: <Database size={24} className="text-accent" />,
        skills: ["PyTorch", "TensorFlow", "scikit-learn", "SHAP", "Explainable AI (XAI)", "OpenCV"]
    },
    {
        title: "MLOps & Cloud",
        icon: <Layout size={24} className="text-accent" />,
        skills: ["Docker", "FastAPI", "GitHub Actions", "CI/CD", "AWS (S3, EC2)"]
    },
    {
        title: "Languages & Tools",
        icon: <Terminal size={24} className="text-accent" />,
        skills: ["Python", "SQL", "NoSQL", "Pandas", "NumPy", "Git"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 justify-center text-center">
                        <span className="w-8 h-[2px] bg-accent rounded-full hidden sm:inline-block"></span>
                        Technical Expertise
                        <span className="w-8 h-[2px] bg-accent rounded-full hidden sm:inline-block"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-accent transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent/10 transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-3 text-sm py-1.5 rounded-md bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white hover:border-accent/40 cursor-default transition-colors flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
