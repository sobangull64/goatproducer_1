import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookCall = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://wa.me/923037852007";
        }, 1500); // 1.5s delay to read the message
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-bg-dark text-white selection:bg-primary selection:text-black">
            <Navbar />
            <main className="flex-grow pt-[90px] flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-3xl font-bold font-montserrat mb-4 text-white">Redirecting to <span className="text-primary">WhatsApp</span>...</h1>
                    <p className="text-text-muted mb-8 text-lg">We're taking you directly to our direct line to book your call.</p>
                    <a href="https://wa.me/923037852007" className="btn btn-primary text-xl px-8 py-4 uppercase tracking-wider font-bold">
                        Click here if not redirected
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BookCall;
