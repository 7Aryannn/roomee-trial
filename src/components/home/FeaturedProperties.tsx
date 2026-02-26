import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import { mockProperties } from '../../data/mockProperties';

const FeaturedProperties = () => {
    // Show first 3 properties as featured
    const featured = mockProperties.slice(0, 3);

    return (
        <section className="py-16 bg-slate-950 relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white">Featured Properties</h2>
                        <p className="mt-2 text-lg text-slate-400">Handpicked stays for your comfort and convenience.</p>
                    </div>
                    <Link to="/search" className="hidden sm:flex items-center px-4 py-2 rounded-full text-blue-400 font-medium border border-blue-500/30 hover:bg-blue-600/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300">
                        View All <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden px-4">
                    <Link to="/search" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-blue-400 font-medium bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300">
                        View All Properties <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
