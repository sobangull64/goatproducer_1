import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Instagram, Smartphone } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    // Map platform to icon
    const getIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case 'youtube': return <Youtube size={48} />;
            case 'tiktok': return <Smartphone size={48} />;
            case 'instagram': return <Instagram size={48} />;
            default: return <ExternalLink size={48} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-bg-card border border-white/10 overflow-hidden rounded-xl hover:border-primary/50 transition-colors duration-300"
        >
            <div className="p-8 h-full flex flex-col">
                <div className="mb-6 text-text-muted group-hover:text-primary transition-colors duration-300">
                    {getIcon(project.platform)}
                </div>

                <h3 className="text-2xl font-bold font-montserrat mb-2 text-white group-hover:text-primary transition-colors">
                    {project.client}
                </h3>

                <p className="text-primary font-medium mb-4 font-mono text-sm tracking-wide">
                    {project.result}
                </p>

                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.map((tag, i) => (
                        <span key={i} className="text-xs text-text-muted bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Line Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
    );
};

export default ProjectCard;
