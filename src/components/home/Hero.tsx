import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/search');
    };

    return (
        <div className="relative bg-slate-950 overflow-hidden min-h-[90vh] flex items-center">
            {/* Ambient glowing blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[128px] opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full mix-blend-screen filter blur-[128px] opacity-70 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8 lg:pr-12 bg-slate-950/0">
                    <main className="mx-auto w-full">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-md">
                                <span className="block xl:inline">Find your perfect</span>{' '}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 xl:inline drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">mid-term rental</span>
                            </h1>
                            <p className="mt-4 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                                Skip the hefty deposits and restrictive 11-month lock-ins. Discover flexible, verified homes across India tailored for professionals and students.
                            </p>

                            <div className="mt-10 sm:mt-12">
                                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row glass-card rounded-3xl sm:rounded-full p-2 items-stretch sm:items-center w-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/20 gap-2 sm:gap-0">
                                    <div className="flex-1 flex items-center px-4 py-3 sm:py-3 border-b sm:border-b-0 sm:border-r border-white/10">
                                        <MapPin className="h-5 w-5 text-blue-400 mr-3 animate-bounce" />
                                        <input
                                            type="text"
                                            placeholder="Enter city (e.g. Bengaluru, Mumbai)"
                                            className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-lg"
                                        />
                                    </div>
                                    <div className="sm:ml-2 flex-shrink-0">
                                        <button type="submit" className="w-full flex items-center justify-center px-8 py-3 sm:py-4 border border-transparent text-base font-semibold rounded-2xl sm:rounded-full text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 md:text-lg md:px-10 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transform hover:-translate-y-0.5">
                                            <Search className="h-5 w-5 mr-2" />
                                            Search Homes
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-300 sm:justify-center lg:justify-start">
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                    <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                    Verified Landlords
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                    <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                    Low Deposits
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                    <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></div>
                                    1-6 Months Stay
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%] hidden lg:block">
                <div className="h-full w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 w-1/3"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 h-full"></div>
                    <img
                        className="h-full w-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                        alt="Modern Indian Apartment"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
