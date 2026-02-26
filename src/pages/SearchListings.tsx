import { useState } from 'react';
import { Filter, Map as MapIcon, List as ListIcon, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../data/mockProperties';

const SearchListings = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Filter States
    const [cityFilter, setCityFilter] = useState('All');
    const [bachelorFriendlyOnly, setBachelorFriendlyOnly] = useState(false);
    const [nearMetroOnly, setNearMetroOnly] = useState(false);
    const [furnishedOnly, setFurnishedOnly] = useState(false);
    const [verifiedOnly, setVerifiedOnly] = useState(false);

    // Derived state
    const filteredProperties = mockProperties.filter(p => {
        if (cityFilter !== 'All' && p.location.city !== cityFilter) return false;
        if (bachelorFriendlyOnly && !p.isBachelorFriendly) return false;
        if (nearMetroOnly && !p.nearMetro) return false;
        if (furnishedOnly && p.furnishing === 'Unfurnished') return false;
        if (verifiedOnly && (!p.landlord.rating || p.landlord.rating < 4.8)) return false;
        return true;
    });

    return (
        <div className="bg-slate-950 min-h-screen pt-4 pb-12 relative">
            {/* Background Blob Container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 mb-4 border-b border-white/10">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Properties for Rent</h1>
                        <p className="text-slate-400 text-sm mt-1">{filteredProperties.length} homes available</p>
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <button
                            className="md:hidden flex items-center text-slate-300 border border-white/10 rounded-md px-3 py-1.5 hover:bg-white/5 transition-colors"
                            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                        >
                            <Filter className="w-4 h-4 mr-2" /> Filters
                        </button>
                        <div className="hidden md:flex bg-slate-900/50 rounded-xl shadow-sm border border-white/10 p-1.5 backdrop-blur-md space-x-1 glass-card">
                            <button
                                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === 'grid' ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <ListIcon className="w-4 h-4 mr-2" /> List
                            </button>
                            <button
                                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === 'map' ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                                onClick={() => setViewMode('map')}
                            >
                                <MapIcon className="w-4 h-4 mr-2" /> Map
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Top Filters (Sticky) */}
                    <div className={`w-full ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block glass-card p-4 rounded-xl border border-white/10 sticky top-[80px] z-40 bg-slate-950/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]`}>
                        <div className="flex flex-col md:flex-row md:items-end gap-4 lg:gap-6">
                            {/* City Filter */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">City</label>
                                <div className="relative group">
                                    <select
                                        className="w-full bg-slate-900/80 border border-white/10 text-slate-300 rounded-lg pl-4 pr-10 py-2.5 appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 hover:border-blue-400/50 hover:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm"
                                        value={cityFilter}
                                        onChange={(e) => setCityFilter(e.target.value)}
                                    >
                                        <option value="All">All Cities</option>
                                        <option value="Bengaluru">Bengaluru</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="New Delhi">New Delhi</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Chennai">Chennai</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Price Range placeholder */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Max Price</label>
                                <input type="range" className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" min="10000" max="150000" step="5000" />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>₹10k</span>
                                    <span>₹1.5L+</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1 pb-2 sm:pb-1">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                                        checked={bachelorFriendlyOnly}
                                        onChange={(e) => setBachelorFriendlyOnly(e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors whitespace-nowrap">Bachelor Friendly</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                                        checked={nearMetroOnly}
                                        onChange={(e) => setNearMetroOnly(e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors whitespace-nowrap">Near Metro</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                                        checked={furnishedOnly}
                                        onChange={(e) => setFurnishedOnly(e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors whitespace-nowrap">Furnished</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                                        checked={verifiedOnly}
                                        onChange={(e) => setVerifiedOnly(e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors whitespace-nowrap">Verified</span>
                                </label>
                            </div>

                            <button
                                className="bg-slate-800/80 text-blue-400 border border-white/10 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 whitespace-nowrap h-[44px]"
                                onClick={() => {
                                    setCityFilter('All');
                                    setBachelorFriendlyOnly(false);
                                    setNearMetroOnly(false);
                                    setFurnishedOnly(false);
                                    setVerifiedOnly(false);
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    {/* Listings Grid */}
                    <div className="flex-1">
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProperties.length > 0 ? (
                                    filteredProperties.map((property) => (
                                        <PropertyCard key={property.id} property={property} />
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center glass-card rounded-xl border border-white/10">
                                        <p className="text-slate-400 text-lg">No properties match your exact filters.</p>
                                        <button
                                            onClick={() => {
                                                setCityFilter('All');
                                                setBachelorFriendlyOnly(false);
                                                setNearMetroOnly(false);
                                            }}
                                            className="mt-4 text-blue-400 font-medium hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-slate-900/50 h-[600px] rounded-xl flex items-center justify-center border border-white/10 glass-card">
                                {/* Map Placeholder before Leaflet integration */}
                                <p className="text-slate-500 font-medium animate-pulse">Interactive Map View Loading...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchListings;
