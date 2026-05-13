import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building2, Search, Menu, X, PlusCircle, LogIn, LayoutDashboard, LogOut, ShieldCheck } from 'lucide-react';
import AuthModal from '../components/AuthModal';
import AadharModal from '../components/AadharModal';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { user, signOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isKycOpen, setIsKycOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
            ? 'bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`;

    return (
        <>
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
                                <LayoutDashboard className="w-4 h-4 text-blue-400" /> Dashboard
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
                            
                            {user ? (
                                <div className="ml-2 flex items-center gap-3">
                                    <button 
                                        onClick={() => setIsKycOpen(true)}
                                        className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 rounded-full border border-emerald-500/30 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    >
                                        <ShieldCheck className="w-4 h-4" /> Verify KYC
                                    </button>
                                    <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 rounded-full pl-1.5 pr-4 py-1.5 backdrop-blur-sm">
                                        <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full bg-slate-800" />
                                        <span className="text-sm font-medium text-slate-200">{user.name}</span>
                                    </div>
                                    <button
                                        onClick={signOut}
                                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                        title="Sign Out"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsAuthOpen(true)}
                                    className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95 border border-blue-500/50"
                                >
                                    <LogIn className="w-4 h-4" /> Log In
                                </button>
                            )}
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
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 absolute w-full pb-4 shadow-2xl">
                        <div className="px-4 pt-2 space-y-2">
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
                                <div className="flex items-center gap-3">
                                    <LayoutDashboard className="w-5 h-5 text-blue-400" /> Dashboard
                                </div>
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
                            <div className="pt-2">
                                {user ? (
                                    <>
                                        <button 
                                            onClick={() => { setIsMenuOpen(false); setIsKycOpen(true); }}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-500/30 transition-colors mt-2 mb-2 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                                        >
                                            <ShieldCheck className="w-5 h-5" /> Verify KYC
                                        </button>
                                        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 rounded-lg mt-2">
                                        <div className="flex items-center gap-3">
                                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full bg-slate-700" />
                                            <span className="font-medium text-white">{user.name}</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                signOut();
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-red-400 hover:text-red-300 p-2"
                                        >
                                            <LogOut className="w-5 h-5" />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsAuthOpen(true);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20 mt-2"
                                    >
                                        <LogIn className="w-5 h-5" /> Log In
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <AuthModal
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
            <AadharModal 
                isOpen={isKycOpen} 
                onClose={() => setIsKycOpen(false)} 
                onVerify={() => setIsKycOpen(false)} 
                role="tenant" 
            />
        </>
    );
};

export default Header;
