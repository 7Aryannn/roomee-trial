import React, { useState, useEffect } from 'react';
import { Building2, X, UserCheck, UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<'signin' | 'signup'>('signin');
    const [isAnimating, setIsAnimating] = useState(false);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsAnimating(true);
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => setIsAnimating(false), 300);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    const handleViewChange = (newView: 'signin' | 'signup') => {
        setView(newView);
    };

    return (
        <div
            className={`fixed inset-0 z-[100] flex sm:items-center justify-center items-start pt-10 sm:pt-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto px-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            {/* Outer Wrapper for sizing and positioning the close button */}
            <div
                className={`relative w-full max-w-[360px] sm:max-w-md md:max-w-4xl mx-auto my-auto transition-all duration-300 mt-16 sm:mt-auto ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button wrapper */}
                <div className="absolute top-2 right-2 md:-top-5 md:-right-5 z-50">
                    <button
                        className="p-2.5 text-slate-400 hover:text-white bg-slate-800 border border-slate-700 shadow-xl hover:bg-slate-700 rounded-full transition-all duration-200 group"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* Inner Content Card */}
                <div className="flex w-full h-[550px] sm:h-[500px] md:h-[460px] rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] shadow-blue-500/10 md:flex-row flex-col overflow-hidden">
                    <div className="hidden md:flex flex-col w-[140px] shrink-0 border-r border-white/5 relative bg-slate-900/40">
                        <div className="flex-1 flex flex-col items-center pt-12 pb-8 gap-2 relative z-10">
                            {/* Logo at the top */}
                            <div className="mb-8 group cursor-pointer flex justify-center w-full">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity rounded-full"></div>
                                    <Building2 className="w-10 h-10 text-blue-500 relative transform transition-transform group-hover:scale-110 duration-300" />
                                </div>
                            </div>

                            {/* Navigation container tighter around buttons */}
                            <div className="flex flex-col w-full relative justify-center gap-10 py-4 mt-8">
                                {/* Enlarged Active Marker */}
                                <div
                                    className="absolute left-0 bg-blue-500 rounded-r-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        top: view === 'signin' ? 'calc(50% - 46px)' : 'calc(50% + 46px)',
                                        width: '6px',
                                        height: '42px',
                                        transform: 'translateY(-50%)',
                                        boxShadow: '0 0 16px rgba(59, 130, 246, 0.9)'
                                    }}
                                />

                                <button
                                    type="button"
                                    className={`flex flex-col items-center justify-center gap-2 w-full transition-all duration-300 ${view === 'signin' ? 'text-white scale-110' : 'text-slate-500 hover:text-slate-300'}`}
                                    onClick={() => handleViewChange('signin')}
                                >
                                    <UserCheck size={28} strokeWidth={view === 'signin' ? 2 : 1.5} />
                                    <span className="text-[15px] font-semibold text-center mt-1">Log In</span>
                                </button>

                                <button
                                    type="button"
                                    className={`flex flex-col items-center justify-center gap-2 w-full transition-all duration-300 ${view === 'signup' ? 'text-white scale-110' : 'text-slate-500 hover:text-slate-300'}`}
                                    onClick={() => handleViewChange('signup')}
                                >
                                    <UserPlus size={28} strokeWidth={view === 'signup' ? 2 : 1.5} />
                                    <span className="text-[15px] font-semibold text-center mt-1">Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Top Navigation / Toggle (Mobile only) */}
                    {/* Top Navigation / Toggle (Mobile only) */}
                    <div className="md:hidden flex w-full justify-center shrink-0 bg-transparent p-4 pt-6 z-20">
                        <div className="flex w-[200px] bg-slate-900/80 border border-slate-700/50 rounded-full p-1 relative shadow-lg">
                            {/* Mobile Slider Background Pill */}
                            <div
                                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-600 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md shadow-blue-500/20"
                                style={{ left: view === 'signin' ? '4px' : 'calc(50%)' }}
                            />
                            <button
                                type="button"
                                className={`flex-1 py-1.5 text-xs font-semibold z-10 transition-colors duration-300 rounded-full ${view === 'signin' ? 'text-white' : 'text-slate-400'}`}
                                onClick={() => handleViewChange('signin')}
                            >
                                Log In
                            </button>
                            <button
                                type="button"
                                className={`flex-1 py-1.5 text-xs font-semibold z-10 transition-colors duration-300 rounded-full ${view === 'signup' ? 'text-white' : 'text-slate-400'}`}
                                onClick={() => handleViewChange('signup')}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Middle Hero Section */}
                    <div className="hidden md:flex relative w-[320px] shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] my-[-20px] rounded-xl z-20">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/20 blur-3xl"></div>

                        <div
                            className="absolute inset-x-0 w-full h-[200%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-inner"
                            style={{ transform: `translateY(${view === 'signin' ? '0' : '-50%'})` }}
                        >
                            {/* Sign In Hero */}
                            <div className="flex-1 flex flex-col justify-center px-8 relative h-1/2">
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">Welcome Back.</h2>
                                <h3 className="text-blue-100/90 text-[15px] max-w-[200px] leading-relaxed">
                                    Access your personalized dashboard and saved homes.
                                </h3>
                                <div className="absolute -bottom-10 right-0 opacity-20 transform translate-x-4">
                                    <UserCheck size={200} strokeWidth={0.5} />
                                </div>
                            </div>

                            {/* Sign Up Hero */}
                            <div className="flex-1 flex flex-col justify-center px-8 relative h-1/2">
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">Join ROOMEE.</h2>
                                <h3 className="text-blue-100/90 text-[15px] max-w-[200px] leading-relaxed">
                                    Find the perfect home and ideal flatmates today.
                                </h3>
                                <div className="absolute -bottom-10 right-0 opacity-20 transform translate-x-4">
                                    <UserPlus size={200} strokeWidth={0.5} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Container */}
                    <div className="flex-1 relative overflow-hidden bg-slate-900/20 w-full md:w-[420px]">
                        <div
                            className="absolute w-full h-[200%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col md:translate-y-0 md:flex-row md:w-[200%] md:h-full"
                            style={{ transform: `translate${window.innerWidth < 768 ? 'Y' : 'X'}(${view === 'signin' ? '0' : '-50%'})` }}
                        >
                            {/* Sign In Form */}
                            <div className="flex-1 h-1/2 md:h-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center relative">
                                {/* Mobile Header Title */}
                                <div className="md:hidden text-center mb-6">
                                    <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                                    <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1.5 group">
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 group">
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl pl-11 pr-4 py-3 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="flex justify-end pt-1">
                                            <button type="button" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</button>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-xl py-3.5 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group active:scale-[0.98]"
                                        >
                                            Sign In
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    <div className="mt-6 flex items-center justify-center gap-4 hidden md:flex">
                                        <div className="h-px bg-slate-800 flex-1"></div>
                                        <span className="text-xs text-slate-500 font-medium">OR</span>
                                        <div className="h-px bg-slate-800 flex-1"></div>
                                    </div>
                                    <div className="hidden md:flex justify-center gap-3 mt-4">
                                        {/* Placeholder Social Buttons */}
                                        <button type="button" className="flex-1 py-2.5 bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all flex items-center justify-center gap-2">
                                            Google
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Sign Up Form */}
                            <div className="flex-1 h-1/2 md:h-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center relative">
                                {/* Mobile Header Title */}
                                <div className="md:hidden text-center mb-6">
                                    <h2 className="text-2xl font-bold text-white">Create Account</h2>
                                    <p className="text-slate-400 text-sm mt-1">Join the ROOMEE community</p>
                                </div>

                                <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1 group">
                                        <label className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1 group">
                                        <label className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1 group">
                                        <label className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                type="password"
                                                placeholder="Create a password"
                                                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-2 sm:pt-4">
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl py-3 sm:py-3.5 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group active:scale-[0.98]"
                                        >
                                            Create Account
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-center text-slate-500 mt-4 leading-relaxed px-4">
                                        By creating an account, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> & <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
