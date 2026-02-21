'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Wand2, Youtube, Sliders, ImageIcon, AlignLeft, Sparkles, FileText, History } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { getRecentTools, RecentTool } from '@/lib/recent-tools'

const iconMap: Record<string, React.ElementType> = {
    Wand2,
    Youtube,
    Sliders,
    ImageIcon,
    AlignLeft,
    Sparkles,
    FileText
}

export default function RecentTools() {
    const { t } = useLanguage()
    const [recent, setRecent] = useState<RecentTool[]>([])

    useEffect(() => {
        setRecent(getRecentTools())
    }, [])

    if (recent.length === 0) return null

    return (
        <div className="w-full max-w-7xl px-4 py-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center space-x-3 text-left">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <History className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black">{t.home.recentTools}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recent.map((tool) => {
                    const Icon = iconMap[tool.iconName] || History
                    return (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="group flex items-center space-x-4 p-4 rounded-2xl glass-card border border-zinc-100 dark:border-zinc-800 hover:border-primary/30 transition-all hover:shadow-lg"
                        >
                            <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-primary group-hover:text-white transition-all">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-sm truncate">{tool.title}</h3>
                                <div className="flex items-center text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                                    <span>{t.home.launchTool}</span>
                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
