import React, { useState, useEffect } from 'react';
import { Home, Sparkles, ArrowRight } from 'lucide-react';

const IntroModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if user has already seen the intro in this session
        const hasSeenIntro = sessionStorage.getItem('roomee_intro_seen');
        if (!hasSeenIntro) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('roomee_intro_seen', 'true');
            // Adding a class to body to prevent scrolling could be done here as well, 
            // but for a simple modal, keeping it contained is fine.
        }, 500); // match animation out duration
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'animate-fade-in'}`}>
            <div className={`relative w-[90%] max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 ${isClosing ? 'scale-95 opacity-0' : 'animate-slide-up'}`}>
                
                {/* Background decorative elements */}
                <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

                <div className="relative flex flex-col items-center p-8 text-center pt-12 pb-10">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg animate-pulse-glow">
                        <Home className="h-10 w-10 text-white" />
                    </div>

                    <h2 className="mb-3 text-3xl font-bold tracking-tight text-white opacity-0 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                        Welcome to Roomee
                    </h2>
                    
                    <p className="mb-8 text-slate-300 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        Your premium destination for finding the perfect room and the perfect roommates. Discover a new way to live.
                    </p>

                    <div className="flex w-full flex-col gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                        <button 
                            onClick={handleClose}
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:from-indigo-400 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                        >
                            <Sparkles className="h-5 w-5" />
                            Explore Properties
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroModal;
