import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Aditi M.',
            role: 'IT Professional in Bengaluru',
            content: 'ROOMEE was a lifesaver! I moved to BGLR for a 3-month project and finding a place without a huge 10-month deposit was impossible until I found this platform.',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 2,
            name: 'Rohan K.',
            role: 'Student in Pune',
            content: 'The "Bachelor Friendly" filter actually works. Rented a great 2BHK with my friends. The digital agreement saved us so much time and broker fees.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
        },
        {
            id: 3,
            name: 'Vikram Singh',
            role: 'Verified Landlord',
            content: 'Listing my property for mid-term rentals increased my occupancy rate. The tenants are verified and the rent payments are completely hassle-free.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
        }
    ];

    return (
        <section className="py-20 bg-slate-950 relative border-t border-white/5">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white">What Our Community Says</h2>
                    <p className="mt-4 text-lg text-slate-400">Join thousands of happy tenants and landlords.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex text-blue-400 mb-4 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-300 mb-6 flex-grow italic font-light">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-500/30"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-400/80">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
