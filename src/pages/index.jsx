import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import IconGrid from '../components/IconGrid';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, Video, Target, Image as ImageIcon, Cpu, Mic, BarChart, Layers, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, services, testimonials } from '../data/content';

// Shared Layout Component
const PageLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col font-sans bg-bg-dark text-white selection:bg-primary selection:text-black">
        <Navbar />
        <main className="flex-grow pt-[90px]">
            {children}
        </main>
    </div>
);


// Home Page Implementation
export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-bg-dark text-white selection:bg-primary selection:text-black">
            <Navbar />
            <main className="flex-grow pt-[90px]">
                <Hero />

                {/* Services Grid Section */}
                <section className="border-t border-white/10">
                    <div className="container py-24">
                        <div className="md:flex justify-between items-end mb-16 px-6 md:px-0">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 font-montserrat uppercase tracking-tight">
                                    Impact Across <span className="text-primary">Niches</span>
                                </h2>
                                <p className="text-text-muted text-lg">
                                    We deliver comprehensive production services tailored to your specific growth goals.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <a href="/services" className="btn btn-outline">View All Services</a>
                            </div>
                        </div>
                        <IconGrid items={services.slice(0, 3)} />
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="bg-bg-card border-t border-b border-white/10 py-24">
                    <div className="container">
                        <div className="flex justify-between items-end mb-16 px-6 md:px-0">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 font-montserrat uppercase tracking-tight">
                                    Selected <span className="text-primary">Works</span>
                                </h2>
                                <p className="text-text-muted text-lg">Results that speak louder than pixels.</p>
                            </div>
                            <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-white transition-colors uppercase tracking-widest text-sm">
                                View All Projects <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark to-bg-card" />
                    <div className="container relative z-10 text-center">
                        <h2 className="text-5xl md:text-7xl font-black mb-12 font-montserrat tracking-tight uppercase">
                            Ready to <span className="text-primary">Dominate?</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <a href="/contact" className="btn btn-primary text-xl px-12 py-5">
                                Let's Talk Business
                            </a>
                            <a href="https://calendly.com/sayyam-goat7/30min" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-xl px-12 py-5">
                                Book a Call
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

// Pages
export const About = () => (
    <PageLayout>
        <div className="container py-20">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-black mb-8 font-montserrat uppercase tracking-tight">
                    The Agency Behind <br /><span className="text-primary">Viral Growth</span>
                </h1>
                <p className="text-xl text-text-muted leading-relaxed">
                    GOAT Produces is a results-obsessed agency. We believe that great content isn't just about fancy editing—it's about storytelling, strategy, and understanding the psychology of the viewer.
                </p>
            </div>

            <div className="grid md:grid-cols-2 border-t border-l border-white/10">
                <div className="p-12 border-r border-b border-white/10 hover:bg-white/5 transition-colors group">
                    <h3 className="text-2xl font-bold font-montserrat mb-4 group-hover:text-primary transition-colors">Who We Are</h3>
                    <p className="text-text-muted">Founded by Sayyam, we are a team of editors, strategists, and designers who live and breathe social media.</p>
                </div>
                <div className="p-12 border-r border-b border-white/10 hover:bg-white/5 transition-colors group">
                    <h3 className="text-2xl font-bold font-montserrat mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                    <p className="text-text-muted">To empower creators and businesses with the tools and content they need to dominate their niche.</p>
                </div>
            </div>
        </div>
    </PageLayout>
);

export const Projects = () => (
    <PageLayout>
        <section className="py-20 border-b border-white/10">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-6 font-montserrat uppercase tracking-tight">
                    Our <span className="text-primary">Best Work</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Deep dive into our successful campaigns and the results we've achieved.
                </p>
            </div>
        </section>

        <section className="py-20 bg-bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    </PageLayout>
);

export const Services = () => (
    <PageLayout>
        <section className="py-20 border-b border-white/10">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-6 font-montserrat uppercase tracking-tight">
                    What We <span className="text-primary">Do</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Comprehensive production services tailored to your growth goals.
                </p>
            </div>
        </section>

        <section className="py-20">
            <div className="container">
                <IconGrid items={services} />
            </div>
        </section>
    </PageLayout>
);

export const Testimonials = () => (
    <PageLayout>
        <section className="py-20 border-b border-white/10">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-6 font-montserrat uppercase tracking-tight">
                    Client <span className="text-primary">Love</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Here's what our partners have to say about working with us.
                </p>
            </div>
        </section>

        <section className="py-24 bg-bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    </PageLayout>
);

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Submit directly to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '2c59c9e7-d169-4963-9123-7e5f362eb1c4',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: 'New Message from GOAT Produces',
                    from_name: 'GOAT Produces Contact Form'
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent! We’ll be in touch.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout>
            <div className="container py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-32">
                        <h1 className="text-6xl font-black mb-8 font-montserrat uppercase tracking-tight">
                            Let's Create <br /><span className="text-primary">Magic</span>
                        </h1>
                        <p className="text-text-muted text-lg mb-12">
                            Ready to take your content to the next level? Reach out for a tailored portfolio reel based on your niche.
                        </p>

                        <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5 rounded-lg">
                            <div className="p-4 bg-primary/20 text-primary rounded-full">
                                <Mail size={32} />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted uppercase tracking-wider mb-1">Book a Strategy Session</p>
                                <a href="https://calendly.com/sayyam-goat7/30min" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold font-montserrat hover:text-primary transition-colors">Book a Call</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-bg-card p-10 border border-white/10 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-text-muted">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-black border border-white/10 focus:border-primary focus:outline-none transition-colors text-white font-montserrat"
                                    placeholder="YOUR NAME"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-text-muted">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-black border border-white/10 focus:border-primary focus:outline-none transition-colors text-white font-montserrat"
                                    placeholder="YOUR@EMAIL.COM"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-text-muted">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-black border border-white/10 focus:border-primary focus:outline-none transition-colors text-white font-montserrat"
                                    placeholder="TELL US ABOUT YOUR PROJECT..."
                                    required
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg text-center font-bold ${status.type === 'success' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
