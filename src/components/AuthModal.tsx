import React, { useState, useEffect } from 'react';
import { Building2, X, UserCheck, UserPlus, Mail, Lock, User } from 'lucide-react';
import './AuthModal.css';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<'signin' | 'signup'>('signin');

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
                    <X size={20} />
                </button>

                {/* Left Navigation */}
                <ul className="card-nav">
                    <li>
                        <div className="mb-4">
                            <Building2 className="w-10 h-10 text-blue-500" />
                        </div>
                        <span className="active-bar" style={{ top: view === 'signin' ? '33.33%' : '66.66%' }}></span>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={`signin ${view === 'signin' ? 'active' : ''}`}
                            onClick={() => setView('signin')}
                        >
                            <UserCheck size={24} strokeWidth={1.5} />
                            <span>Sign In</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={`signup ${view === 'signup' ? 'active' : ''}`}
                            onClick={() => setView('signup')}
                        >
                            <UserPlus size={24} strokeWidth={1.5} />
                            <span>Sign Up</span>
                        </button>
                    </li>
                </ul>

                {/* Middle Hero */}
                <div className="card-hero">
                    <div
                        className="card-hero-inner"
                        style={{ top: view === 'signin' ? '0' : '-100%' }}
                    >
                        <div className="card-hero-content signin">
                            <h2>Welcome Back.</h2>
                            <h3>Please enter your credentials.</h3>
                            <div className="hero-illustration">
                                <UserCheck size={160} strokeWidth={1} />
                            </div>
                        </div>
                        <div className="card-hero-content signup">
                            <h2>Sign Up Now.</h2>
                            <h3>Join the crowd and get started.</h3>
                            <div className="hero-illustration">
                                <UserPlus size={160} strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="card-form">
                    <div
                        className="forms"
                        style={{ top: view === 'signin' ? '0' : '-100%' }}
                    >
                        <form className={`auth-form signin ${view === 'signin' ? 'active' : ''}`} onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input type="email" placeholder="you@example.com" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input type="password" placeholder="••••••••" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-[#4672ff] hover:bg-blue-600 text-white font-medium rounded-lg py-3 transition-colors shadow-lg shadow-blue-500/20 mt-4 flex items-center justify-center gap-2 group">
                                    Sign In
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                                <div className="text-center pt-2">
                                    <button type="button" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Forgot your password?</button>
                                </div>
                            </div>
                        </form>
                        <form className={`auth-form signup ${view === 'signup' ? 'active' : ''}`} onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input type="email" placeholder="you@example.com" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input type="password" placeholder="Create a password" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-[#4672ff] hover:bg-blue-600 text-white font-medium rounded-lg py-3 transition-colors shadow-lg shadow-blue-500/20 mt-2 flex items-center justify-center gap-2 group">
                                    Create Account
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
