'use client'

import Link from 'next/link'
import { ArrowRight, Wand2, Youtube, Sliders, ImageIcon, AlignLeft, Sparkles, FileText, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

const iconMap: Record<string, any> = {
    Wand2,
    Youtube,
    Sliders,
    ImageIcon,
    AlignLeft,
    Sparkles,
    FileText
}

interface NextStepProps {
    title: string
    desc: string
    href: string
    iconName: string
}

export default function NextStep({ title, desc, href, iconName }: NextStepProps) {
    const { t } = useLanguage()
    const Icon = iconMap[iconName] || ArrowRight

    return (
        <div className="w-full max-w-4xl mx-auto mt-20 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="group relative overflow-hidden rounded-[2.5rem] glass-card p-1 border-2 border-primary/5 hover:border-primary/20 transition-all hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                            <Icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-2 max-w-md">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                                <Sparkles className="w-3 h-3" /> {t.home.nextStep}
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    </div>

                    <Link
                        href={href}
                        className="w-full md:w-auto px-10 py-5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        <span>{t.home.launchTool}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <p className="text-center mt-6 text-xs text-muted-foreground font-medium uppercase tracking-[0.3em] opacity-40">
                {t.home.suggestNext}
            </p>
        </div>
    )
}
