import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te'; // English, Hindi, Telugu

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        'nav.home': 'Find Home',
        'nav.dashboard': 'Dashboard',
        'nav.post': 'Post Property',
        'hero.title': 'Find your perfect',
        'hero.subtitle': 'mid-term rental',
    },
    hi: {
        'nav.home': 'घर खोजें',
        'nav.dashboard': 'डैशबोर्ड',
        'nav.post': 'प्रॉपर्टी पोस्ट करें',
        'hero.title': 'अपना आदर्श खोजें',
        'hero.subtitle': 'मध्य-अवधि किराये का घर',
    },
    te: {
        'nav.home': 'ఇల్లు వెతకండి',
        'nav.dashboard': 'డాష్‌బోర్డ్',
        'nav.post': 'ప్రాపర్టీని పోస్ట్ చేయండి',
        'hero.title': 'మీ పరిపూర్ణతను కనుగొనండి',
        'hero.subtitle': 'మధ్య-కాల అద్దె ఇల్లు',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
