'use client'

import { useState, useEffect, useMemo } from 'react'
import { Copy, Check, Sparkles, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'

export default function PromptGeneratorClient() {
    const { t, language } = useLanguage()
    const [platform, setPlatform] = useState('Midjourney')
    const [genre, setGenre] = useState('Cinematic')
    const [subject, setSubject] = useState('')
    const [details, setDetails] = useState('')
    const [copied, setCopied] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const platformGenres = useMemo(() => {
        return platform === 'Suno'
            ? ['K-Pop', 'Lofi', 'Jazz', 'Rock', 'Electronic', 'Acoustic']
            : ['Cinematic', 'Anime', 'Cyberpunk', 'Minimalist', '3D Render', 'Oil Painting']
    }, [platform])

    useEffect(() => {
        if (!platformGenres.includes(genre)) {
            setGenre(platformGenres[0])
        }
    }, [platform, platformGenres, genre])

    const prompt = useMemo(() => {
        if (!isMounted) return ''
        if (!subject && !details) return t.promptGen.placeholder
        if (platform === 'Suno') {
            return `[${genre}] song about ${subject}, ${details}, high quality audio`
        }
        return `/imagine prompt: ${subject}, ${genre} style, ${details} --v 6.0 --ar 16:9`
    }, [isMounted, subject, details, genre, platform, t.promptGen.placeholder])

    const handleCopy = () => {
        if (!subject && !details) return
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!isMounted) return null

    const platforms = [
        { id: 'Midjourney', label: t.promptGen.platforms.midjourney },
        { id: 'Suno', label: t.promptGen.platforms.suno },
        { id: 'Stable Diffusion', label: t.promptGen.platforms.stableDiffusion }
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient font-black">{t.promptGen.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.promptGen.desc}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="glass-card p-10 rounded-[3rem] space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                    <div className="space-y-4">
                        <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
                            <Sparkles className="w-4 h-4 text-primary" /> {t.promptGen.platform}
                        </label>
                        <div className="grid grid-cols-3 gap-3 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                            {platforms.map((p) => (
                                <button
                                    key={p.id} onClick={() => setPlatform(p.id)}
                                    className={cn("py-3 px-4 rounded-xl text-xs font-bold transition-all", platform === p.id ? "bg-white dark:bg-zinc-700 shadow-md text-primary scale-[1.02]" : "text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100")}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
                            <Zap className="w-4 h-4 text-primary" /> {t.promptGen.genre}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {platformGenres.map((g) => (
                                <button
                                    key={g} onClick={() => setGenre(g)}
                                    className={cn("py-3 px-4 rounded-xl text-xs font-bold border-2 transition-all", genre === g ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:border-zinc-200")}
                                >
                                    {t.promptGen.genres[g] || g}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="space-y-3">
                            <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">{t.promptGen.subject}</label>
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t.promptGen.subjectPlaceholder} className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 text-lg transition-all" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">{t.promptGen.details}</label>
                            <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder={t.promptGen.detailsPlaceholder} rows={4} className="w-full px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 text-lg transition-all resize-none" />
                        </div>
                    </div>
                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                    <div className="overflow-hidden rounded-[3rem] shadow-2xl bg-zinc-950 border border-white/10">
                        <div className="bg-zinc-900 p-6 flex items-center justify-between border-b border-white/5">
                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">{t.promptGen.outputTitle}</span>
                        </div>
                        <div className="p-10 min-h-[300px] font-mono" translate="no">
                            <div className="text-zinc-500 text-sm mb-6 flex items-center gap-2 select-none"><span className="text-primary opacity-70">➜</span><span className="text-zinc-600">~/ai-toolkit</span><span className="text-zinc-400">$ generate --{platform.toLowerCase().replace(' ', '-')}</span></div>
                            <div className="relative">
                                <p className="text-lg text-white leading-relaxed break-words whitespace-pre-wrap">{prompt}<span className="inline-block w-2.5 h-5 ml-2 bg-primary align-middle animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]" /></p>
                            </div>
                        </div>
                        <div className="p-8 bg-white/[0.03] border-t border-white/5">
                            <button
                                onClick={handleCopy} disabled={!subject && !details}
                                className={cn("w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all", copied ? "bg-green-600 text-white" : "bg-white text-zinc-950 hover:bg-zinc-200")}
                            >
                                {copied ? <><Check className="w-6 h-6" /> {t.promptGen.copied}</> : <><Copy className="w-6 h-6" /> {t.promptGen.copy}</>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
