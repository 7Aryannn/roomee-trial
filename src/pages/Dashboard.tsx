import { useState } from 'react';
import { Home, Heart, Clock, Settings, Bell, Plus, CalendarCheck, MoreVertical } from 'lucide-react';
import { mockProperties } from '../data/mockProperties';
import PropertyCard from '../components/PropertyCard';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<'seeker' | 'landlord'>('seeker');
    const [seekerSection, setSeekerSection] = useState<'saved' | 'requests'>('saved');
    const [landlordSection, setLandlordSection] = useState<'listings' | 'requests'>('listings');

    // Mock data for seeker
    const savedProperties = mockProperties.slice(0, 2);
    const myRequests = [
        { property: mockProperties[2], status: 'pending', date: '2024-04-01' },
        { property: mockProperties[5], status: 'approved', date: '2024-03-15' },
    ];

    // Mock data for landlord
    const myListings = mockProperties.slice(8, 11);
    const receivedRequests = [
        { id: 101, propertyName: '3BHK Near Gachibowli', tenantName: 'Rahul Verma', status: 'new', date: '2 days ago' },
        { id: 102, propertyName: 'Boutique 1BHK', tenantName: 'Sneha K.', status: 'reviewed', date: '1 week ago' },
    ];

    return (
        <div className="bg-slate-950 min-h-screen pb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Dashboard Header */}
            <div className="bg-slate-900/50 border-b border-white/10 backdrop-blur-md relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-50"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=150&auto=format&fit=crop"
                                    alt="User Profile"
                                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] relative z-10"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Welcome, Aryan</h1>
                                <p className="text-slate-400">aryan.shrivastava@example.com</p>
                            </div>
                        </div>

                        {/* View Toggle */}
                        <div className="glass-card p-1.5 rounded-xl flex self-start md:self-auto border border-white/10 bg-slate-900/50 space-x-1">
                            <button
                                onClick={() => setActiveTab('seeker')}
                                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'seeker' ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                            >
                                Seeker View
                            </button>
                            <button
                                onClick={() => setActiveTab('landlord')}
                                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'landlord' ? 'bg-emerald-600 shadow-[0_0_15px_rgba(5,150,105,0.4)] text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                            >
                                Landlord View
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="w-full md:w-64 flex-shrink-0 space-y-2 glass-card p-4 rounded-xl border border-white/10 h-fit">
                        {activeTab === 'seeker' ? (
                            <>
                                <button
                                    onClick={() => setSeekerSection('saved')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all ${seekerSection === 'saved' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                                >
                                    <Heart className="w-5 h-5 mr-3" /> Saved Homes
                                </button>
                                <button
                                    onClick={() => setSeekerSection('requests')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all ${seekerSection === 'requests' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                                >
                                    <Clock className="w-5 h-5 mr-3" /> My Requests
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => setLandlordSection('listings')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all ${landlordSection === 'listings' ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                                >
                                    <Home className="w-5 h-5 mr-3" /> My Properties
                                </button>
                                <button
                                    onClick={() => setLandlordSection('requests')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all ${landlordSection === 'requests' ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                                >
                                    <Bell className="w-5 h-5 mr-3" />
                                    Tenant Requests
                                    <span className="ml-auto bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]">2</span>
                                </button>
                            </>
                        )}

                        <div className="pt-4 mt-4 border-t border-white/10">
                            <button className="w-full flex items-center px-4 py-3 rounded-lg font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                                <Settings className="w-5 h-5 mr-3" /> Settings
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">

                        {/* Seeker View - Saved Properties */}
                        {activeTab === 'seeker' && seekerSection === 'saved' && (
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Heart className="w-6 h-6 mr-2 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" /> Saved Properties
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {savedProperties.map(p => (
                                        <PropertyCard key={p.id} property={p} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Seeker View - Booking Requests */}
                        {activeTab === 'seeker' && seekerSection === 'requests' && (
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Clock className="w-6 h-6 mr-2 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" /> My Booking Requests
                                </h2>
                                <div className="space-y-4">
                                    {myRequests.map((req, idx) => (
                                        <div key={idx} className="glass-card rounded-xl border border-white/10 p-5 flex flex-col md:flex-row items-center gap-6 hover:border-blue-500/30 transition-colors">
                                            <div className="w-full md:w-32 h-24 relative rounded-lg overflow-hidden border border-white/10">
                                                <img src={req.property.images[0]} alt="Prop" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-white text-lg mb-1">{req.property.title}</h4>
                                                <p className="text-sm text-slate-400 mb-2">Requested Move-in: <span className="text-slate-300">{req.date}</span></p>
                                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full tracking-wide border ${req.status === 'approved' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]'}`}>
                                                    {req.status}
                                                </span>
                                            </div>
                                            <div className="text-right w-full md:w-auto mt-4 md:mt-0">
                                                <button className="w-full md:w-auto px-4 py-2 bg-slate-800/80 border border-white/10 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-white text-slate-300 transition-colors">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Landlord View - My Listings */}
                        {activeTab === 'landlord' && landlordSection === 'listings' && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-white flex items-center">
                                        <Home className="w-6 h-6 mr-2 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" /> Manage Properties
                                    </h2>
                                    <button className="flex items-center space-x-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <Plus className="w-4 h-4" /> <span>Add New</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {myListings.map(p => (
                                        <PropertyCard key={p.id} property={p} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Landlord View - Received Requests */}
                        {activeTab === 'landlord' && landlordSection === 'requests' && (
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <CalendarCheck className="w-6 h-6 mr-2 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" /> Tenant Requests
                                </h2>
                                <div className="glass-card rounded-xl border border-white/10 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-white/10">
                                            <thead className="bg-slate-900/80 border-b border-white/10">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Property</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Applicant</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {receivedRequests.map((req) => (
                                                    <tr key={req.id} className="hover:bg-white/5 transition-colors group">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{req.propertyName}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400 group-hover:text-slate-300">{req.tenantName}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-bold uppercase tracking-wide rounded border ${req.status === 'new' ? 'bg-blue-900/30 text-blue-400 border-blue-500/30' : 'bg-slate-800 text-slate-400 border-slate-600'}`}>
                                                                {req.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{req.date}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end items-center space-x-3">
                                                            <button className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Review</button>
                                                            <button className="text-slate-500 hover:text-slate-300 transition-colors"><MoreVertical className="w-5 h-5" /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
