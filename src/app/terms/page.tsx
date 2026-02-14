'use client';

import { useLanguage } from '@/context/language-context';
import { Scale, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export default function TermsPage() {
    const { t } = useLanguage();

    const icons = [CheckCircle2, FileText, Scale, AlertTriangle];

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-[2.5rem] bg-amber-100 dark:bg-amber-900/10 flex items-center justify-center text-amber-600 shadow-inner">
                    <Scale className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t.terms.title}</h1>
                <p className="text-muted-foreground font-bold">{t.terms.lastUpdated}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {t.terms.sections.map((term, idx) => {
                    const Icon = icons[idx % icons.length];
                    return (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
                            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                                <Icon className="w-6 h-6 text-primary" />
                                {term.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                                {term.content}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="p-10 rounded-[3rem] bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-black text-red-900 dark:text-red-400">Disclaimer of Warranties</h3>
                        <p className="text-red-800/80 dark:text-red-400/80 leading-relaxed italic">
                            UltraUtils provides its services "as is" and disclaims all warranties, express or implied, including the warranties of merchantability and fitness for a particular purpose. We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
