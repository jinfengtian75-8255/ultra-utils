'use client';

import { useLanguage } from '@/context/language-context';
import { ShieldCheck, Lock, EyeOff, Database } from 'lucide-react';

export default function PrivacyPage() {
    const { t } = useLanguage();

    const icons = [Lock, EyeOff, Database, ShieldCheck];

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <ShieldCheck className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t.privacy.title}</h1>
                <p className="text-muted-foreground font-bold">{t.privacy.lastUpdated}</p>
            </div>

            <div className="space-y-8">
                {t.privacy.sections.map((section, idx) => {
                    const Icon = icons[idx % icons.length];
                    return (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-primary">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                                {section.content}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none bg-zinc-50 dark:bg-zinc-900/50 p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-black text-2xl">Global Privacy Standards</h3>
                <p>
                    UltraUtils complies with global privacy standards, including GDPR and CCPA. Since we do not store personal data on our servers, many traditional data protection concerns are inherently mitigated.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold mb-2">Right to Erasure</h4>
                        <p className="text-sm text-muted-foreground font-medium">Since we don't store your data, there is nothing to erase. Your privacy is absolute.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold mb-2">Data Portability</h4>
                        <p className="text-sm text-muted-foreground font-medium">Processed files are available for immediate download. We never hold your content hostage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
