'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationSchema } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to 'en' for global first experience
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // 1. Check saved language
        const savedLang = localStorage.getItem('app-language') as Language;
        const validLangs: Language[] = ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl'];
        if (savedLang && validLangs.includes(savedLang)) {
            setLanguageState(savedLang);
            return;
        }

        // 2. Auto-detect from browser if no saved preference
        if (typeof window !== 'undefined' && window.navigator) {
            const browserLang = window.navigator.language.split('-')[0];
            if (browserLang === 'ko') {
                setLanguageState('ko');
            } else if (browserLang === 'zh') {
                setLanguageState('zh');
            } else if (browserLang === 'ja') {
                setLanguageState('ja');
            } else if (browserLang === 'es') {
                setLanguageState('es');
            } else if (browserLang === 'de') {
                setLanguageState('de');
            } else if (browserLang === 'pl') {
                setLanguageState('pl');
            } else {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app-language', lang);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
