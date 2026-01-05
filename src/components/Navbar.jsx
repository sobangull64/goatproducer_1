import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'What We Do', path: '/services' },
        { name: 'Our Work', path: '/projects' },
        { name: 'Who We Are', path: '/about' },
        { name: 'Clients', path: '/testimonials' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container flex items-center justify-between h-full">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src="/logo.jpg" alt="GOAT Produces" className="h-10 w-auto object-contain rounded-sm" />
                    <span className="text-xl font-bold font-montserrat text-white tracking-tighter uppercase group-hover:text-primary transition-colors">
                        GOAT Produces
                    </span>
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/book" className="btn btn-primary text-sm px-6 py-2 ml-4">
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-[90px] left-0 w-full bg-bg-dark border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-bold uppercase py-4 border-b border-white/5 ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link to="/book" onClick={() => setIsOpen(false)} className="btn btn-primary w-full justify-center mt-4">
                                    Book a Call
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
