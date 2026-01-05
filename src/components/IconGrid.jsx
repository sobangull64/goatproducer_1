import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const IconGrid = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 border-t border-l border-white/10">
            {items.map((item, index) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.Zap;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-12 border-r border-b border-white/10 hover:bg-white/5 transition-colors group relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="mb-6 text-primary">
                            <Icon size={48} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-xl font-bold font-montserrat mb-4 text-white group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-text-muted leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default IconGrid;
