import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, PlayCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-dark">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] z-0 animate-pulse-glow" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex justify-center mb-8">
                        <span className="px-4 py-2 border border-primary/30 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                            Goat Produces — Est. 2024
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
                        WE CREATE <br />
                        <span className="text-stroke-primary text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">VIRAL CONTENT</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto font-light">
                        We help creators and businesses <span className="text-white font-bold">dominate</span> social media with premium video production and data-driven strategy.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="btn btn-primary text-lg px-10 py-4 shadow-lg shadow-primary/20">
                            Let's Talk Business
                        </Link>
                        <Link to="/projects" className="btn btn-outline text-lg px-10 py-4">
                            Explore Our Work
                        </Link>
                    </div>

                    {/* Stats Grid - Replacing Images with Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
                        {[
                            { icon: Users, label: "Subscribers Gained", value: "750k+" },
                            { icon: TrendingUp, label: "Growth Mark", value: "2x" },
                            { icon: PlayCircle, label: "Videos Edited", value: "500+" },
                            { icon: Zap, label: "Turnaround Time", value: "24h" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <stat.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-montserrat">{stat.value}</h3>
                                    <p className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
