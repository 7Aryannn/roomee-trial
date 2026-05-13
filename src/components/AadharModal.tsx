import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Fingerprint, CheckCircle2, ArrowRight } from 'lucide-react';

interface AadharModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: () => void;
    role: 'landlord' | 'tenant';
}

const AadharModal: React.FC<AadharModalProps> = ({ isOpen, onClose, onVerify, role }) => {
    const [step, setStep] = useState<1 | 2>(1); // 1: Details, 2: OTP
    const [aadharNumber, setAadharNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [otp, setOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            // Reset state when closed
            setTimeout(() => {
                setStep(1);
                setAadharNumber('');
                setFullName('');
                setOtp('');
                setIsVerifying(false);
                setIsSuccess(false);
            }, 300);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const formatAadhar = (val: string) => {
        const cleaned = val.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
        if (match) {
            return [match[1], match[2], match[3]].filter(Boolean).join(' ');
        }
        return val;
    };

    const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatAadhar(e.target.value);
        if (formatted.length <= 14) { // 12 digits + 2 spaces
            setAadharNumber(formatted);
        }
    };

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        if (aadharNumber.length === 14 && fullName.trim()) {
            setIsVerifying(true);
            setTimeout(() => {
                setIsVerifying(false);
                setStep(2);
            }, 1000);
        }
    };

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length === 6) {
            setIsVerifying(true);
            setTimeout(() => {
                setIsVerifying(false);
                setIsSuccess(true);
                setTimeout(() => {
                    onVerify();
                }, 1500);
            }, 1500);
        }
    };

    const isStep1Valid = aadharNumber.length === 14 && fullName.trim().length > 2;
    const isStep2Valid = otp.length === 6;

    const inputClass = "w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all font-mono tracking-wider";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative z-10 w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-fade-in scale-100">
                {/* Glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Header */}
                <div className="relative p-6 border-b border-white/5 flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                            Identity Verification
                        </h2>
                        <p className="text-sm text-slate-400 mt-1">
                            {role === 'landlord' 
                                ? 'Verify your identity to publish listings.'
                                : 'Verify your identity to request bookings.'}
                        </p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors border border-white/5"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Body */}
                <div className="relative p-6">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-4">
                                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Verified Successfully</h3>
                            <p className="text-slate-400">Your Aadhaar has been securely verified.</p>
                        </div>
                    ) : step === 1 ? (
                        <form onSubmit={handleSendOTP} className="space-y-5 animate-fade-in">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Aadhaar Number</label>
                                <div className="relative">
                                    <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input 
                                        type="text" 
                                        className={`${inputClass} pl-12 text-lg text-center`}
                                        placeholder="0000 0000 0000"
                                        value={aadharNumber}
                                        onChange={handleAadharChange}
                                        maxLength={14}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name (as per Aadhaar)</label>
                                <input 
                                    type="text" 
                                    className={`${inputClass} font-sans tracking-normal`}
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={!isStep1Valid || isVerifying}
                                    className={`w-full py-3.5 px-4 flex justify-center items-center gap-2 text-white font-medium rounded-xl transition-all ${
                                        isStep1Valid && !isVerifying
                                        ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                                        : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
                                    }`}
                                >
                                    {isVerifying ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Processing...
                                        </span>
                                    ) : (
                                        <>Send OTP <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1">
                                <ShieldCheck className="w-3 h-3" /> UIDAI Secure Verification
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-5 animate-fade-in">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-500/30 mb-3">
                                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Enter OTP</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    A 6-digit OTP has been sent to the mobile number registered with Aadhaar ending in <span className="text-white font-mono">{aadharNumber.slice(-4)}</span>
                                </p>
                            </div>

                            <div>
                                <input 
                                    type="text" 
                                    className={`${inputClass} text-center text-2xl tracking-[0.5em]`}
                                    placeholder="••••••"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    maxLength={6}
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={!isStep2Valid || isVerifying}
                                    className={`w-full py-3.5 px-4 flex justify-center items-center gap-2 text-white font-medium rounded-xl transition-all ${
                                        isStep2Valid && !isVerifying
                                        ? 'bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                                        : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
                                    }`}
                                >
                                    {isVerifying ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Verifying...
                                        </span>
                                    ) : (
                                        <>Verify & Proceed</>
                                    )}
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <button 
                                    type="button" 
                                    onClick={() => setStep(1)}
                                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Change Aadhaar Number
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AadharModal;
