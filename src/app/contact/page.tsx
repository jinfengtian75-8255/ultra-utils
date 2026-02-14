'use client'

import { useLanguage } from '@/context/language-context'
import { Mail, MessageSquare, Bug, Lightbulb, MapPin, ExternalLink } from 'lucide-react'

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
                    {t.contact.title.split(' ')[0]} <span className="text-gradient">{t.contact.title.split(' ')[1] || ''}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium italic">
                    {t.contact.subtitle}
                </p>
                <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full mt-6" />
            </div>

            {/* Contact Method */}
            <div className="glass-card p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary">
                        <Mail className="w-10 h-10" />
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">{t.contact.infoTitle}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.contact.desc}
                        </p>
                        <div className="pt-4 flex flex-col items-center md:items-start gap-2">
                            <a href={`mailto:${t.contact.infoEmail}`} className="text-2xl font-black text-primary hover:scale-105 transition-transform inline-block">
                                {t.contact.infoEmail}
                            </a>
                            <p className="text-sm text-muted-foreground font-bold">
                                {t.contact.infoResponse}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { icon: Bug, title: 'Bug Report', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/20' },
                    { icon: Lightbulb, title: 'Feature Request', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20' },
                    { icon: ExternalLink, title: 'Partnerships', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' },
                    { icon: MessageSquare, title: 'General Inquiries', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
                ].map((item, idx) => (
                    <div key={idx} className={`p-8 rounded-[2.5rem] ${item.bg} border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all flex items-center gap-6`}>
                        <div className={`${item.color} p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                ))}
            </div>

            {/* Back to Home */}
            <div className="text-center pt-10">
                <a href="/" className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-2xl font-black hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <span>{t.navbar.home}</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}

import { cn } from '@/lib/utils'
