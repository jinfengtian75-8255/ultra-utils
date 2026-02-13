'use client';

import { useLanguage } from '@/context/language-context';
import { Language } from '@/lib/translations';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function LanguagePicker() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'ko', label: '한국어', flag: '🇰🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200 dark:border-zinc-700 shadow-sm"
            >
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold uppercase tracking-wider">
                    {languages.find(l => l.code === language)?.code}
                </span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-32 py-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 z-50 animate-in fade-in zoom-in-95 duration-200">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800",
                                    language === lang.code ? "bg-primary/5 text-primary" : "text-zinc-600 dark:text-zinc-400"
                                )}
                            >
                                <span className="text-lg leading-none">{lang.flag}</span>
                                <span className="text-sm font-bold">{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
