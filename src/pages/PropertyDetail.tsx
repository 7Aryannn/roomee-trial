import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useForm } from 'react-hook-form';
import {
    MapPin, BedDouble, Bath, Square, ShieldCheck,
    CheckCircle2, Share, Heart, ChevronLeft, CalendarClock, CreditCard
} from 'lucide-react';
import { mockProperties } from '../data/mockProperties';
import SplitRentCalculator from '../components/SplitRentCalculator';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon issue in standard react-leaflet setup
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

type BookingFormData = {
    moveInDate: string;
    duration: string;
    message: string;
};

const PropertyDetail = () => {
    const { id } = useParams();
    const property = mockProperties.find(p => p.id === id) || mockProperties[0];
    const [activeImage, setActiveImage] = useState(0);
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

    const onSubmit = (data: BookingFormData) => {
        setBookingStatus('submitting');
        setTimeout(() => {
            setBookingStatus('success');
            console.log('Booking request sent:', data, 'for property:', property.id);
        }, 1500);
    };

    if (!property) return <div className="p-8 text-center text-red-500">Property not found</div>;

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Title & Breadcrumbs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/search" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-4 transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Search
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {property.type}
                                </span>
                                {property.isBachelorFriendly && (
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center">
                                        <CheckCircle2 className="w-3 h-3 mr-1" /> Bachelor Friendly
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{property.title}</h1>
                            <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="w-5 h-5 mr-1 text-gray-400" />
                                <span>{property.location.address}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600 transition-colors">
                                <Share className="w-5 h-5" />
                            </button>
                            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600 transition-colors hover:text-red-500 hover:border-red-200">
                                <Heart className="w-5 h-5" />
                            </button>
                            <div className="text-right ml-4">
                                <p className="text-3xl font-black text-blue-600">₹{property.price.toLocaleString('en-IN')}</p>
                                <p className="text-sm text-gray-500">per month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content (Left, 2 cols) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                            <div className="h-96 relative bg-gray-100">
                                <img
                                    src={property.images[activeImage]}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {property.images.length > 1 && (
                                <div className="p-4 flex gap-4 overflow-x-auto">
                                    {property.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Overview & Features */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-100">
                                <div className="flex items-center text-gray-700">
                                    <BedDouble className="w-6 h-6 mr-3 text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Bedrooms</p>
                                        <p className="font-semibold">{property.bedrooms} Beds</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Bath className="w-6 h-6 mr-3 text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Bathrooms</p>
                                        <p className="font-semibold">{property.bathrooms} Baths</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Square className="w-6 h-6 mr-3 text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Area</p>
                                        <p className="font-semibold">{property.sqft} sqft</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <ShieldCheck className="w-6 h-6 mr-3 text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Furnishing</p>
                                        <p className="font-semibold">{property.furnishing}</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">About this home</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">{property.description}</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                                {property.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                                        <span className="font-medium">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                            <p className="text-gray-600 mb-4">{property.location.address}</p>
                            <div className="h-[400px] rounded-xl overflow-hidden relative z-0 border border-gray-200">
                                <MapContainer
                                    center={property.location.coordinates}
                                    zoom={14}
                                    scrollWheelZoom={false}
                                    style={{ height: '100%', width: '100%' }}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={property.location.coordinates}>
                                        <Popup>
                                            <b>{property.title}</b><br />{property.location.area}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right, 1 col) */}
                    <div className="space-y-6">

                        {/* Split Rent Calculator */}
                        <SplitRentCalculator monthlyRent={property.price} />

                        {/* Booking Form */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Request to Book</h3>

                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600 flex items-center text-sm"><CreditCard className="w-4 h-4 mr-1" /> Deposit</span>
                                    <span className="font-bold text-gray-900">₹{property.deposit.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600 flex items-center"><CalendarClock className="w-4 h-4 mr-1" /> Min Lease</span>
                                    <span className="font-bold text-gray-900">{property.minLeaseMonths} Months</span>
                                </div>
                            </div>

                            {bookingStatus === 'success' ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
                                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-green-900 mb-1">Request Sent!</h4>
                                    <p className="text-sm text-green-700">The landlord will review your request and contact you shortly.</p>
                                    <button
                                        onClick={() => setBookingStatus('idle')}
                                        className="mt-4 text-sm font-medium text-green-800 hover:text-green-900 underline"
                                    >
                                        Send another request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Move-in Date</label>
                                        <input
                                            type="date"
                                            {...register("moveInDate", { required: true })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                        {errors.moveInDate && <span className="text-xs text-red-500 mt-1">Move-in date is required</span>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Months)</label>
                                        <select
                                            {...register("duration", { required: true, min: property.minLeaseMonths })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                                        >
                                            <option value="">Select duration</option>
                                            {[1, 2, 3, 4, 5, 6, 9, 11].map(m => (
                                                <option key={m} value={m} disabled={m < property.minLeaseMonths}>{m} Months</option>
                                            ))}
                                        </select>
                                        {errors.duration && <span className="text-xs text-red-500 mt-1">Select valid duration</span>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message to Landlord (Optional)</label>
                                        <textarea
                                            {...register("message")}
                                            rows={3}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow placeholder-gray-400"
                                            placeholder="Hi, I'm interested in this property..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={bookingStatus === 'submitting'}
                                        className={`w-full py-3 px-4 flex justify-center items-center text-white font-bold rounded-lg transition-colors shadow-md ${bookingStatus === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
                                    >
                                        {bookingStatus === 'submitting' ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : 'Request to Book'}
                                    </button>
                                    <p className="text-center text-xs text-gray-500 mt-3">You won't be charged yet.</p>
                                </form>
                            )}
                        </div>

                        {/* Landlord Info */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                            <img
                                src={property.landlord.avatar}
                                alt={property.landlord.name}
                                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-500 p-0.5"
                            />
                            <h3 className="text-lg font-bold text-gray-900">{property.landlord.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">Member since {property.landlord.memberSince}</p>

                            <div className="w-full grid grid-cols-2 gap-4 text-sm border-t border-gray-100 pt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900">{property.landlord.rating} / 5</span>
                                    <span className="text-gray-500">Rating</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900">{property.landlord.responseTime}</span>
                                    <span className="text-gray-500">Response</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
