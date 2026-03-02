'use client'

import { useLanguage } from '@/context/language-context'
import { Sparkles, ShieldCheck, Zap, Globe2, Users2, Mail } from 'lucide-react'

export default function AboutPage() {
    const { t } = useLanguage()

    const icons = [Sparkles, ShieldCheck, Zap, Globe2, Users2];

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Hero Section */}
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                    {t.about.title} <span className="text-gradient">UltraUtils</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                    {t.about.subtitle}
                </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
                {t.about.sections.map((section, idx) => {
                    const Icon = icons[idx % icons.length];
                    const isEven = idx % 2 === 0;

                    return (
                        <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {section.content}
                                </p>
                            </div>
                            <div className="flex-1 w-full aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:opacity-100 transition-opacity" />
                                <Icon className="w-20 h-20 text-zinc-300 dark:text-zinc-700 animate-pulse" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Stats / Global impact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-zinc-100 dark:border-zinc-800 py-16">
                <div className="space-y-2">
                    <div className="text-4xl font-black text-primary">100%</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Free</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-primary">0</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Server Logs</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-primary">3+</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Languages</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-black text-primary">PRO</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Utilities</div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="glass-card p-12 rounded-[3.5rem] bg-zinc-900 text-white overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <Mail className="w-12 h-12 text-primary animate-bounce" />
                    <h2 className="text-3xl font-bold">{t.contact.title}</h2>
                    <p className="text-zinc-400 max-w-md italic">
                        {t.contact.desc}
                    </p>
                    <a href={`mailto:${t.contact.infoEmail}`} className="px-8 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 transition-transform">
                        {t.contact.infoEmail}
                    </a>
                </div>
            </div>
        </div>
    )
}
