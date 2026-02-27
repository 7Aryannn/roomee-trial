import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building2, Search, Menu, X, PlusCircle } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
            ? 'bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`;

    return (
        <header className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
                            <Building2 className="relative h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">ROOM<span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">EE</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink to="/search" className={navLinkClass}>
                            <Search className="w-4 h-4 text-blue-400" /> Find Home
                        </NavLink>
                        <NavLink to="/dashboard" className={navLinkClass}>
                            Dashboard
                        </NavLink>

                        <div className="h-6 w-px bg-white/10 mx-2"></div>

                        <NavLink to="/post-property" className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                : 'text-blue-400 hover:bg-blue-600/10 hover:text-blue-300 border border-transparent'
                            }`
                        }>
                            <PlusCircle className="w-4 h-4" /> Post Property
                        </NavLink>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-all"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <NavLink
                            to="/search"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-blue-400" /> Find Home
                            </div>
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/post-property"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : 'text-blue-400 hover:bg-blue-600/10 border border-transparent'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <PlusCircle className="w-5 h-5" /> Post Property
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
