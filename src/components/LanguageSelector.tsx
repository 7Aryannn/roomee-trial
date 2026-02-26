import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2 text-gray-600">
            <Globe className="w-4 h-4" />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="te">తెలుగు (Telugu)</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
