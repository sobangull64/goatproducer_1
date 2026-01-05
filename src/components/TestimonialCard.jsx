import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 border border-white/10 bg-bg-card relative group hover:border-primary/30 transition-colors"
        >
            <div className="mb-8 text-primary opacity-50">
                <Quote size={40} />
            </div>

            <p className="text-xl md:text-2xl text-white font-light mb-8 leading-relaxed">
                "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl font-bold font-montserrat text-primary">
                    {testimonial.name[0]}
                </div>
                <div>
                    <h4 className="font-bold text-white font-montserrat">{testimonial.name}</h4>
                    <p className="text-sm text-text-muted uppercase tracking-wider">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={`${i < testimonial.rating ? "text-primary fill-primary" : "text-gray-700"} `} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
