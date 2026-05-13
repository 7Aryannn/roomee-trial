import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Building2, MapPin, BedDouble, Bath, Square, IndianRupee,
    Image, Tag, CalendarDays, ChevronRight, ChevronLeft,
    Check, Sparkles, Upload, X, Plus
} from 'lucide-react';
import AadharModal from '../components/AadharModal';

const PROPERTY_TYPES = ['Apartment', 'Independent House', 'PG/Hostel', 'Studio'] as const;
const FURNISHING_OPTIONS = ['Fully Furnished', 'Semi-Furnished', 'Unfurnished'] as const;
const AMENITY_OPTIONS = [
    'Power Backup', 'Gym', 'Swimming Pool', 'Security', 'Wi-Fi Setup',
    'Air Conditioning', 'Lift', 'Modular Kitchen', 'Balcony', 'Parking',
    'CCTV', 'Clubhouse', 'Pet Friendly', 'Housekeeping', 'Smart TV',
    'Water Supply', 'Play Area', 'Food Included'
];
const CITIES = ['Bengaluru', 'Mumbai', 'New Delhi', 'Hyderabad', 'Pune', 'Chennai'];

const STEPS = [
    { label: 'Basics', icon: Building2 },
    { label: 'Location', icon: MapPin },
    { label: 'Details', icon: BedDouble },
    { label: 'Amenities', icon: Tag },
    { label: 'Images', icon: Image },
    { label: 'Review', icon: Check },
];

const PostProperty = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showAadharModal, setShowAadharModal] = useState(false);

    const [form, setForm] = useState({
        title: '',
        description: '',
        type: '' as string,
        price: '',
        deposit: '',
        city: '',
        area: '',
        address: '',
        bedrooms: '1',
        bathrooms: '1',
        sqft: '',
        furnishing: '' as string,
        amenities: [] as string[],
        images: [] as string[],
        imageUrl: '',
        availableFrom: '',
        isBachelorFriendly: false,
        nearMetro: false,
        minLeaseMonths: '1',
    });

    const set = (key: string, val: any) => setForm(f => ({ ...f, [key]: val }));

    const toggleAmenity = (a: string) => {
        setForm(f => ({
            ...f,
            amenities: f.amenities.includes(a)
                ? f.amenities.filter(x => x !== a)
                : [...f.amenities, a]
        }));
    };

    const addImageUrl = () => {
        if (form.imageUrl.trim()) {
            set('images', [...form.images, form.imageUrl.trim()]);
            set('imageUrl', '');
        }
    };

    const removeImage = (i: number) => {
        set('images', form.images.filter((_, idx) => idx !== i));
    };

    const canNext = () => {
        switch (step) {
            case 0: return form.title && form.type && form.price && form.deposit;
            case 1: return form.city && form.area && form.address;
            case 2: return form.sqft && form.furnishing;
            case 3: return form.amenities.length > 0;
            case 4: return form.images.length > 0;
            default: return true;
        }
    };

    const initiateSubmit = () => {
        setShowAadharModal(true);
    };

    const handleAadharVerify = () => {
        setShowAadharModal(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-slate-950 min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="glass-card rounded-2xl border border-white/10 p-10 text-center max-w-lg mx-4 relative z-10 animate-fade-in">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        <Check className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Property Listed!</h2>
                    <p className="text-slate-400 mb-8">Your property has been successfully submitted and is now live for seekers to discover.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button onClick={() => navigate('/dashboard')} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                            Go to Dashboard
                        </button>
                        <button onClick={() => { setSubmitted(false); setStep(0); setForm({ title: '', description: '', type: '', price: '', deposit: '', city: '', area: '', address: '', bedrooms: '1', bathrooms: '1', sqft: '', furnishing: '', amenities: [], images: [], imageUrl: '', availableFrom: '', isBachelorFriendly: false, nearMetro: false, minLeaseMonths: '1' }); }} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium transition-all border border-white/10">
                            Post Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const inputClass = "w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all";
    const labelClass = "block text-sm font-medium text-slate-300 mb-2";

    return (
        <div className="bg-slate-950 min-h-screen pb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Header */}
            <div className="bg-slate-900/50 border-b border-white/10 backdrop-blur-md relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur opacity-50 rounded-full"></div>
                            <Sparkles className="relative w-7 h-7 text-blue-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">Post Your Property</h1>
                    </div>
                    <p className="text-slate-400 ml-10">Fill in the details to list your property on ROOMEE</p>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
                    {STEPS.map((s, i) => {
                        const Icon = s.icon;
                        const done = i < step;
                        const active = i === step;
                        return (
                            <div key={i} className="flex items-center flex-shrink-0">
                                <button
                                    onClick={() => i < step && setStep(i)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        active ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                        : done ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 cursor-pointer hover:bg-emerald-600/20'
                                        : 'text-slate-500 border border-transparent'
                                    }`}
                                >
                                    {done ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                                    <span className="hidden sm:inline">{s.label}</span>
                                </button>
                                {i < STEPS.length - 1 && (
                                    <div className={`w-6 sm:w-10 h-px mx-1 ${done ? 'bg-emerald-500/40' : 'bg-white/10'}`}></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Form Card */}
                <div className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 animate-fade-in">

                    {/* Step 0: Basics */}
                    {step === 0 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Building2 className="w-5 h-5 text-blue-400" /> Basic Information</h2>
                            <div>
                                <label className={labelClass}>Property Title *</label>
                                <input className={inputClass} placeholder="e.g. Modern 2BHK Near Tech Park" value={form.title} onChange={e => set('title', e.target.value)} />
                            </div>
                            <div>
                                <label className={labelClass}>Description</label>
                                <textarea className={inputClass + " min-h-[100px] resize-none"} placeholder="Describe your property..." value={form.description} onChange={e => set('description', e.target.value)} />
                            </div>
                            <div>
                                <label className={labelClass}>Property Type *</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {PROPERTY_TYPES.map(t => (
                                        <button key={t} onClick={() => set('type', t)} className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${form.type === t ? 'bg-blue-600/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-slate-900/50 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'}`}>
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Monthly Rent (₹) *</label>
                                    <div className="relative">
                                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input type="number" className={inputClass + " pl-9"} placeholder="25000" value={form.price} onChange={e => set('price', e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Security Deposit (₹) *</label>
                                    <div className="relative">
                                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input type="number" className={inputClass + " pl-9"} placeholder="75000" value={form.deposit} onChange={e => set('deposit', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 1: Location */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-400" /> Location Details</h2>
                            <div>
                                <label className={labelClass}>City *</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {CITIES.map(c => (
                                        <button key={c} onClick={() => set('city', c)} className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${form.city === c ? 'bg-blue-600/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-slate-900/50 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'}`}>
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Area / Locality *</label>
                                <input className={inputClass} placeholder="e.g. Koramangala, Bandra West" value={form.area} onChange={e => set('area', e.target.value)} />
                            </div>
                            <div>
                                <label className={labelClass}>Full Address *</label>
                                <textarea className={inputClass + " min-h-[80px] resize-none"} placeholder="Complete address with landmark" value={form.address} onChange={e => set('address', e.target.value)} />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Property Details */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><BedDouble className="w-5 h-5 text-blue-400" /> Property Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className={labelClass}><BedDouble className="inline w-4 h-4 mr-1" />Bedrooms</label>
                                    <select className={inputClass} value={form.bedrooms} onChange={e => set('bedrooms', e.target.value)}>
                                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}><Bath className="inline w-4 h-4 mr-1" />Bathrooms</label>
                                    <select className={inputClass} value={form.bathrooms} onChange={e => set('bathrooms', e.target.value)}>
                                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}><Square className="inline w-4 h-4 mr-1" />Area (sqft) *</label>
                                    <input type="number" className={inputClass} placeholder="1200" value={form.sqft} onChange={e => set('sqft', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Furnishing Status *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {FURNISHING_OPTIONS.map(f => (
                                        <button key={f} onClick={() => set('furnishing', f)} className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${form.furnishing === f ? 'bg-blue-600/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-slate-900/50 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'}`}>
                                            {f}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}><CalendarDays className="inline w-4 h-4 mr-1" />Available From</label>
                                    <input type="date" className={inputClass} value={form.availableFrom} onChange={e => set('availableFrom', e.target.value)} />
                                </div>
                                <div>
                                    <label className={labelClass}>Min Lease (months)</label>
                                    <select className={inputClass} value={form.minLeaseMonths} onChange={e => set('minLeaseMonths', e.target.value)}>
                                        {[1,2,3,6,11,12].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked={form.isBachelorFriendly} onChange={e => set('isBachelorFriendly', e.target.checked)} className="sr-only peer" />
                                    <div className="w-5 h-5 rounded-md border border-white/20 bg-slate-900/80 peer-checked:bg-blue-600 peer-checked:border-blue-500 flex items-center justify-center transition-all">
                                        {form.isBachelorFriendly && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Bachelor Friendly</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked={form.nearMetro} onChange={e => set('nearMetro', e.target.checked)} className="sr-only peer" />
                                    <div className="w-5 h-5 rounded-md border border-white/20 bg-slate-900/80 peer-checked:bg-blue-600 peer-checked:border-blue-500 flex items-center justify-center transition-all">
                                        {form.nearMetro && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Near Metro</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Amenities */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Tag className="w-5 h-5 text-blue-400" /> Amenities</h2>
                            <p className="text-slate-400 text-sm">Select all amenities your property offers</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {AMENITY_OPTIONS.map(a => (
                                    <button key={a} onClick={() => toggleAmenity(a)} className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left ${form.amenities.includes(a) ? 'bg-emerald-600/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]' : 'bg-slate-900/50 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'}`}>
                                        {form.amenities.includes(a) && <Check className="inline w-3.5 h-3.5 mr-1.5" />}{a}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Images */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Image className="w-5 h-5 text-blue-400" /> Property Images</h2>
                            <p className="text-slate-400 text-sm">Add image URLs for your property photos</p>
                            <div className="flex gap-2">
                                <input className={inputClass + " flex-1"} placeholder="Paste image URL here..." value={form.imageUrl} onChange={e => set('imageUrl', e.target.value)} onKeyDown={e => e.key === 'Enter' && addImageUrl()} />
                                <button onClick={addImageUrl} className="px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all flex items-center gap-1 flex-shrink-0">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                            {form.images.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {form.images.map((url, i) => (
                                        <div key={i} className="relative group rounded-xl overflow-hidden border border-white/10 aspect-video">
                                            <img src={url} alt={`Property ${i + 1}`} className="w-full h-full object-cover" />
                                            <button onClick={() => removeImage(i)} className="absolute top-2 right-2 p-1.5 bg-red-600/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {form.images.length === 0 && (
                                <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center">
                                    <Upload className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                                    <p className="text-slate-500 text-sm">No images added yet. Paste a URL above.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 5: Review */}
                    {step === 5 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Check className="w-5 h-5 text-blue-400" /> Review Your Listing</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    ['Title', form.title],
                                    ['Type', form.type],
                                    ['Rent', `₹${Number(form.price).toLocaleString('en-IN')}/mo`],
                                    ['Deposit', `₹${Number(form.deposit).toLocaleString('en-IN')}`],
                                    ['Location', `${form.area}, ${form.city}`],
                                    ['Config', `${form.bedrooms} Bed · ${form.bathrooms} Bath · ${form.sqft} sqft`],
                                    ['Furnishing', form.furnishing],
                                    ['Available', form.availableFrom || 'Immediately'],
                                    ['Lease', `${form.minLeaseMonths} month(s) min`],
                                ].map(([label, val]) => (
                                    <div key={label as string} className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                                        <p className="text-white font-medium">{val}</p>
                                    </div>
                                ))}
                            </div>
                            {form.amenities.length > 0 && (
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Amenities</p>
                                    <div className="flex flex-wrap gap-2">
                                        {form.amenities.map(a => (
                                            <span key={a} className="px-3 py-1 bg-emerald-600/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">{a}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {form.images.length > 0 && (
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Images ({form.images.length})</p>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                        {form.images.map((url, i) => (
                                            <div key={i} className="rounded-lg overflow-hidden border border-white/10 aspect-video">
                                                <img src={url} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-wrap gap-3">
                                {form.isBachelorFriendly && <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">Bachelor Friendly</span>}
                                {form.nearMetro && <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">Near Metro</span>}
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                        <button
                            onClick={() => setStep(s => s - 1)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${step === 0 ? 'invisible' : 'text-slate-300 bg-slate-800/80 border border-white/10 hover:bg-slate-700 hover:text-white'}`}
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        <span className="text-sm text-slate-500">Step {step + 1} of {STEPS.length}</span>
                        {step < STEPS.length - 1 ? (
                            <button
                                onClick={() => canNext() && setStep(s => s + 1)}
                                disabled={!canNext()}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${canNext() ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'}`}
                            >
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={initiateSubmit}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                            >
                                <Sparkles className="w-4 h-4" /> Publish Listing
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AadharModal 
                isOpen={showAadharModal} 
                onClose={() => setShowAadharModal(false)} 
                onVerify={handleAadharVerify} 
                role="landlord"
            />
        </div>
    );
};

export default PostProperty;
