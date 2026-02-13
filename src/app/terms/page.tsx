'use client';

import { useLanguage } from '@/context/language-context';
import { FileText } from 'lucide-react';

export default function TermsPage() {
    const { t } = useLanguage();

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <div className="flex flex-col items-center text-center space-y-6 mb-16">
                <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <FileText className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t.terms.title}</h1>
                <p className="text-muted-foreground font-bold">{t.terms.lastUpdated}</p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-8 leading-relaxed text-lg">
                <p className="font-medium text-zinc-700 dark:text-zinc-300">
                    {t.terms.content}
                </p>

                <div className="space-y-4 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <h2 className="text-xl font-black">User Responsibility</h2>
                    <p className="text-muted-foreground text-sm">
                        Users are responsible for the content they process. UltraUtils does not claim ownership of uploaded files or processed results. Commercial use is governed by local laws of the user's jurisdiction.
                    </p>
                </div>
            </div>
        </div>
    );
}
