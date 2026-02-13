'use client';

import { useLanguage } from '@/context/language-context';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
    const { t } = useLanguage();

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <div className="flex flex-col items-center text-center space-y-6 mb-16">
                <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <ShieldCheck className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t.privacy.title}</h1>
                <p className="text-muted-foreground font-bold">{t.privacy.lastUpdated}</p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-8 leading-relaxed text-lg">
                <p className="font-medium text-zinc-700 dark:text-zinc-300">
                    {t.privacy.content}
                </p>

                <div className="space-y-4 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <h2 className="text-xl font-black">Data Security</h2>
                    <p className="text-muted-foreground text-sm">
                        Since all processing happens locally in your browser, your files never leave your device. We do not use persistent cookies for tracking.
                    </p>
                </div>
            </div>
        </div>
    );
}
