import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-white/10 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <Building2 className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            <span className="text-2xl font-bold text-white tracking-tight">ROOM<span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">EE</span></span>
                        </Link>
                        <p className="text-sm text-slate-400">
                            Your trusted partner for finding the perfect mid-term rental in India. Say goodbye to heavy deposits and restrictive leases.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/search" className="hover:text-blue-400 transition-colors">Find a Home</Link></li>
                            <li><Link to="/post-property" className="hover:text-blue-400 transition-colors">List Your Property</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
                            <li><Link to="/calculator" className="hover:text-blue-400 transition-colors">Split-Rent Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Cities */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Top Cities</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/search?city=Bengaluru" className="hover:text-violet-400 transition-colors">Bengaluru</Link></li>
                            <li><Link to="/search?city=Mumbai" className="hover:text-violet-400 transition-colors">Mumbai</Link></li>
                            <li><Link to="/search?city=New+Delhi" className="hover:text-violet-400 transition-colors">New Delhi</Link></li>
                            <li><Link to="/search?city=Pune" className="hover:text-violet-400 transition-colors">Pune</Link></li>
                            <li><Link to="/search?city=Hyderabad" className="hover:text-violet-400 transition-colors">Hyderabad</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500" />
                                <span>123 Startup Avenue, Koramangala<br />Bengaluru, Karnataka 560034</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-emerald-500" />
                                <span>+91 800 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <span>hello@roomee.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} ROOMEE Technologies. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
