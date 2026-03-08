import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "VUB Master Scholarship for Excellent Non-EEA Students",
        organization: "Vrije Universiteit Brussel (VUB)",
        date: "September 2024",
        description: "Awarded a €5000 scholarship by the FACIR committee based on academic excellence, achieving a high weighted average, and credit completion in the Faculty of Engineering.",
        link: "https://drive.google.com/file/d/1wyR5NJr5fvX0RKvWFureUIDIpbQ8C4fX/view",
        icon: <Award className="text-white" size={24} />
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
                            <span className="w-8 h-[2px] bg-accent rounded-full inline-block"></span>
                            Honors & Awards
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 group flex flex-col h-full hover:border-accent/50 transition-colors"
                            >
                                <div className="p-4 bg-accent/20 rounded-xl w-fit mb-6 shadow-[0_0_15px_rgba(0,191,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,191,255,0.4)] transition-shadow">
                                    {achievement.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {achievement.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className="text-accent font-medium text-sm">{achievement.organization}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                                    <span className="text-zinc-500 text-sm">{achievement.date}</span>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {achievement.description}
                                </p>

                                {achievement.link && (
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors w-fit group/link"
                                    >
                                        View Certificate <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
