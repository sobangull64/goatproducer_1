import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    const Icon = LucideIcons[service.icon] || LucideIcons.Zap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={100} />
            </div>

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold font-outfit mb-4">{service.title}</h3>
                <p className="text-text-muted mb-6">{service.description}</p>

                <ul className="space-y-2">
                    {service.features?.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
