import { Search, CalendarCheck, Home as HomeIcon } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Find Your Match',
            description: 'Search through our curated list of bachelor-friendly spaces, verified PGs, and premium apartments.',
            icon: <Search className="w-8 h-8 text-blue-400" />,
        },
        {
            id: 2,
            title: 'Book Online',
            description: 'Choose your dates, duration (1-6 months), and pay a minimal token to lock the property.',
            icon: <CalendarCheck className="w-8 h-8 text-violet-400" />,
        },
        {
            id: 3,
            title: 'Move In Smoothly',
            description: 'Sign digital agreements, pay the deposit, and move in effortlessly without broker negotiations.',
            icon: <HomeIcon className="w-8 h-8 text-emerald-400" />,
        },
    ];

    return (
        <section className="py-20 bg-slate-900 relative border-t border-white/5 overflow-hidden">
            <div className="absolute -left-40 top-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How ROOMEE Works</h2>
                    <p className="mt-4 text-xl text-slate-400">
                        Renting made simple, transparent, and hassle-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-500/20 via-violet-500/50 to-emerald-500/20 z-0"></div>
                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-slate-950 border border-white/10 shadow-[0_0_25px_rgba(96,165,250,0.15)] flex items-center justify-center mb-6 group hover:border-blue-500/50 transition-colors">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-200 mb-2">{step.title}</h3>
                            <p className="text-slate-400 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
