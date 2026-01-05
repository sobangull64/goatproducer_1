import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
                            <img src="/logo.jpg" alt="GOAT Produces" className="h-8 w-auto object-contain rounded-sm" />
                            <span className="text-lg font-bold font-montserrat text-white tracking-tight group-hover:text-primary transition-colors">GOAT Produces</span>
                        </Link>
                        <p className="text-text-muted mb-6 max-w-sm">
                            Helping creators and businesses dominate short-form and long-form content with premium video production.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/goatproduces/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-montserrat mb-6 uppercase tracking-wider">Pages</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-montserrat mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:sayyam.goat7@gmail.com" className="hover:text-primary transition-colors">sayyam.goat7@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} GOAT Produces. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
