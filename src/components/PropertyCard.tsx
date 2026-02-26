import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="glass-card rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 group relative border border-white/10 hover:border-blue-500/30">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity hover:mix-blend-normal"
                />
                <button className="absolute top-3 right-3 p-2 bg-slate-900/50 hover:bg-slate-900/80 rounded-full text-slate-300 hover:text-red-400 transition-colors backdrop-blur-md border border-white/10">
                    <Heart className="w-5 h-5" />
                </button>
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                        {property.type}
                    </span>
                    {property.isBachelorFriendly && (
                        <span className="bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.3)] w-max">
                            Bachelor Friendly
                        </span>
                    )}
                </div>
                <div className="absolute bottom-3 left-3">
                    <span className="bg-slate-950/80 border border-white/10 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm">
                        {property.furnishing}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white line-clamp-1 flex-1 mr-2">{property.title}</h3>
                    <div className="text-right">
                        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">₹{property.price.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-slate-400">/ month</p>
                    </div>
                </div>

                <div className="flex items-center text-sm text-slate-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                    <span className="line-clamp-1">{property.location.area}, {property.location.city}</span>
                </div>

                {/* Features Row */}
                <div className="flex items-center justify-between py-3 border-t border-b border-white/5 mb-4">
                    <div className="flex items-center text-slate-300">
                        <BedDouble className="w-4 h-4 mr-1.5 text-blue-400" />
                        <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                        <Bath className="w-4 h-4 mr-1.5 text-blue-400" />
                        <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                        <Square className="w-4 h-4 mr-1.5 text-blue-400" />
                        <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                </div>

                {/* Footer info */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-1 items-center space-x-3 mr-2 overflow-hidden">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                            <img src={property.landlord.avatar} alt="Landlord" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-sm font-medium text-slate-300 truncate">{property.landlord.name}</span>
                    </div>
                    <Link to={`/property/${property.id}`} className="flex-shrink-0 text-sm font-semibold text-white bg-blue-600/80 hover:bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 whitespace-nowrap">
                        View Details &nbsp;&rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
