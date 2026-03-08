import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
    {
        type: "experience",
        role: "Data Analytics & ML Intern",
        entity: "Telenor",
        date: "June 2023 - August 2023",
        description: [
            "Data engineering: Authored and optimised SQL scripts to extract, cleanse, and aggregate multi-gigabyte call detail and KPI tables, producing feature-ready datasets for machine learning workflows.",
            "Churn modelling: Built logistic regression and gradient boosting models in Python (pandas, scikit-learn); evaluated results with ROC-AUC and recall.",
            "Model serving microservice: Containerised the churn model with Docker and exposed a RESTful scoring endpoint using FastAPI, enabling real-time integration with marketing and customer care systems.",
            "Automated feature pipeline: Wrote Python jobs to replace manual spreadsheet processing and improving reproducibility."
        ]
    },
    {
        type: "education",
        role: "MSc Applied Computer Science",
        entity: "Vrije Universiteit Brussel (VUB)",
        date: "2024 - 2026",
        description: [
            "VUB Master Scholarship 2025–26",
            "Awarded to the highest ranked non-EEA student in the program."
        ]
    },
    {
        type: "education",
        role: "B.S. Computer Science",
        entity: "National University of Computer and Emerging Sciences",
        date: "2020 - 2024",
        description: [
            "Honours Standing"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-center gap-4 text-center">
                        <span className="w-8 h-[2px] bg-accent rounded-full hidden sm:inline-block"></span>
                        Experience & Education
                        <span className="w-8 h-[2px] bg-accent rounded-full hidden sm:inline-block"></span>
                    </h2>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="mb-12 relative pl-10 md:pl-16"
                            >
                                {/* Timeline Node */}
                                <div className="absolute top-0 left-0 md:left-[-1px] -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-accent flex items-center justify-center shadow-[0_0_10px_rgba(0,191,255,0.3)] z-10">
                                    {item.type === 'experience' ? (
                                        <Briefcase size={18} className="text-accent" />
                                    ) : (
                                        <GraduationCap size={18} className="text-accent" />
                                    )}
                                </div>

                                <div className="glass-card p-6 border-l-4 hover:border-l-accent transition-colors group">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                            {item.role}
                                        </h3>
                                        <span className="text-sm font-medium text-accent/80 bg-accent/10 px-3 py-1 rounded-full w-fit">
                                            {item.date}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-medium text-zinc-300 mb-4">{item.entity}</h4>

                                    <ul className="space-y-2 text-zinc-400">
                                        {item.description.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-accent mt-1.5 opacity-60">•</span>
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
