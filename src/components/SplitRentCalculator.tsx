import React, { useState } from 'react';
import { Users, IndianRupee, PieChart } from 'lucide-react';

interface SplitRentCalculatorProps {
    monthlyRent: number;
}

const SplitRentCalculator: React.FC<SplitRentCalculatorProps> = ({ monthlyRent }) => {
    const [roommates, setRoommates] = useState<number>(2);
    const [utilitiesEstimate] = useState<number>(2000); // Fixed estimate for simplicity

    const totalMonthlyCost = monthlyRent + utilitiesEstimate;
    const costPerPerson = totalMonthlyCost / roommates;
    const rentPerPerson = monthlyRent / roommates;
    const utilitiesPerPerson = utilitiesEstimate / roommates;

    return (
        <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="flex items-center space-x-2 mb-6 relative z-10">
                <PieChart className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Split-Rent Calculator</h3>
            </div>

            <div className="space-y-6 relative z-10">
                {/* Roommate Slider */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-slate-300 flex items-center">
                            <Users className="w-4 h-4 mr-2 text-violet-400" />
                            Number of Roommates
                        </label>
                        <span className="text-lg font-bold text-blue-400">{roommates}</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={roommates}
                        onChange={(e) => setRoommates(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
                        <span>Solo (1)</span>
                        <span>4 people</span>
                    </div>
                </div>

                {/* Breakdown */}
                <div className="bg-white/5 rounded-lg p-4 space-y-3 border border-white/10 backdrop-blur-sm">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Base Rent</span>
                        <span className="font-medium text-slate-200">₹{monthlyRent.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Avg. Utilities (Est.)</span>
                        <span className="font-medium text-slate-200">₹{utilitiesEstimate.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between">
                        <span className="font-semibold text-slate-300">Total Monthly</span>
                        <span className="font-bold text-white">₹{totalMonthlyCost.toLocaleString('en-IN')}</span>
                    </div>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-r from-blue-900/40 to-violet-900/40 rounded-lg p-5 border border-blue-500/30 flex items-center justify-between shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <div>
                        <p className="text-sm font-medium text-blue-300 mb-1">Your Share</p>
                        <p className="text-xs text-blue-400/80">Rent + Utilities</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                            <IndianRupee className="w-5 h-5 mr-1 text-blue-400" />
                            {Math.round(costPerPerson).toLocaleString('en-IN')}
                        </div>
                        <p className="text-xs text-blue-400 font-medium">/ person / month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplitRentCalculator;
