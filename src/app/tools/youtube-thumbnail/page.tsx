'use client'

import { useState, useEffect, useRef } from 'react'
import { Link as LinkIcon, Download, Image as ImageIcon, Loader2, Sparkles, Share2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function YoutubeThumbnailPage() {
    const { t } = useLanguage()
    const [url, setUrl] = useState('')
    const [videoId, setVideoId] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [isMounted, setIsMounted] = useState(false)
    const [isShorts, setIsShorts] = useState(false)

    // State-based hover/touch sensors
    const [mainHover, setMainHover] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false) // Track first touch
    const [gridHover, setGridHover] = useState<string | null>(null)

    const toolRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const extractVideoId = (inputUrl: string) => {
        const isShortsCheck = inputUrl.includes('shorts/')
        setIsShorts(isShortsCheck)
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/
        const match = inputUrl.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    const handleGrab = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        setVideoId(null)
        setMainHover(false)
        setHasInteracted(false)

        setTimeout(() => {
            const id = extractVideoId(url)
            if (id) {
                setVideoId(id)
            } else {
                setError(t.ytGrab.invalidUrl)
                setVideoId(null)
            }
            setLoading(false)
        }, 600)
    }

    const downloadImage = async (imgUrl: string, filename: string) => {
        try {
            const response = await fetch(imgUrl)
            const blob = await response.blob()
            const blobUrl = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(blobUrl)
        } catch (err) {
            console.error("Download failed", err)
        }
    }

    if (!isMounted) return null

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20 px-4 sm:px-0">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <span className="text-gradient">{t.ytGrab.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    {t.ytGrab.desc}
                </p>
            </div>

            {/* Input Section */}
            <div className="glass-card p-6 sm:p-10 rounded-[2.5rem] border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl">
                <form onSubmit={handleGrab} className="flex gap-4 flex-col sm:flex-row items-center">
                    <div className="relative flex-1 w-full">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <LinkIcon className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder={t.ytGrab.placeholder}
                            className="w-full pl-12 h-14 sm:h-16 rounded-2xl border-none bg-zinc-100/50 dark:bg-zinc-800/50 px-4 text-lg focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/50 font-medium"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading || !url}
                        className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50 min-w-[200px]"
                    >
                        {loading ? <Loader2 className="animate-spin h-6 w-6" /> : <span>{t.ytGrab.getBtn}</span>}
                    </button>
                </form>
            </div>

            <div ref={toolRef} className="space-y-12">
                {loading && (
                    <div className="h-[300px] w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-[2.5rem] animate-pulse flex flex-col items-center justify-center gap-4">
                        <Loader2 className="h-10 w-10 animate-spin text-red-600" />
                        <span className="font-bold text-muted-foreground uppercase tracking-widest text-xs">{t.ytGrab.fetching}</span>
                    </div>
                )}

                {videoId && !loading && (
                    <div key={videoId} className="space-y-12">
                        <div className="space-y-4">
                            {/* MAIN PREVIEW */}
                            <div
                                onMouseEnter={() => setMainHover(true)}
                                onMouseLeave={() => setMainHover(false)}
                                onClick={() => {
                                    setMainHover(!mainHover)
                                    setHasInteracted(true)
                                }}
                                className={cn(
                                    "relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-zinc-900/10 dark:ring-white/10 bg-zinc-950 mx-[-1rem] sm:mx-0 transition-all cursor-pointer",
                                    isShorts ? "aspect-[9/16] max-h-[75vh] w-fit mx-auto" : "aspect-video"
                                )}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                        alt="Main"
                                        className={cn("relative z-10 w-full h-full pointer-events-none", isShorts ? "object-cover" : "object-contain")}
                                    />

                                    {/* MENU OVERLAY */}
                                    <div className={cn(
                                        "absolute inset-0 z-30 flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-black/60 p-6",
                                        mainHover ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                                    )}>
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className={cn(
                                                "flex flex-col items-center gap-5 w-full max-w-[320px] sm:max-w-md transition-all duration-500 transform",
                                                mainHover ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                                            )}
                                        >
                                            <button
                                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, `premium-thumb-${videoId}.jpg`)}
                                                className="w-full bg-white text-black py-5 rounded-3xl font-black text-lg sm:text-xl flex items-center justify-center gap-3 hover:bg-zinc-100 shadow-2xl"
                                            >
                                                <Download className="h-6 w-6" /> <span className="whitespace-nowrap">{t.ytGrab.downloadHd}</span>
                                            </button>
                                            <div className="flex gap-3 w-full">
                                                <button
                                                    onClick={() => {
                                                        const rootUrl = `/tools/background-remover`
                                                        const params = new URLSearchParams()
                                                        params.set('src', `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
                                                        if (isShorts) params.set('shorts', 'true')
                                                        window.location.href = `${rootUrl}?${params.toString()}`
                                                    }}
                                                    className="flex-1 bg-amber-500 text-white py-4 rounded-2xl font-black text-[10px] sm:text-sm flex items-center justify-center gap-2 hover:bg-amber-600 shadow-xl"
                                                >
                                                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="whitespace-nowrap">{t.ytGrab.editBtn}</span>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const text = `Check out this 4K Grabber! ⚡\n${window.location.href}`;
                                                        navigator.clipboard.writeText(text);
                                                        alert(t.common.copiedLink);
                                                    }}
                                                    className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-black text-[10px] sm:text-sm flex items-center justify-center gap-2 backdrop-blur-lg border border-white/20 shadow-xl"
                                                >
                                                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="whitespace-nowrap">{t.common.shareResult}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE INTERACTION HINT */}
                            {!hasInteracted && !mainHover && (
                                <div className="sm:hidden flex items-center justify-center gap-2 text-zinc-400 text-xs font-bold animate-bounce mt-4">
                                    <Info className="h-4 w-4 text-amber-500" />
                                    <span>이미지를 터치하여 메뉴를 확인하세요</span>
                                </div>
                            )}
                        </div>

                        {/* SUB PREVIEWS */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {['hqdefault', 'mqdefault', 'sddefault'].map((quality) => (
                                <div
                                    key={quality}
                                    onMouseEnter={() => setGridHover(quality)}
                                    onMouseLeave={() => setGridHover(null)}
                                    className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 sm:p-4 hover:shadow-2xl transition-all"
                                >
                                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-100 dark:bg-zinc-950">
                                        <img
                                            src={`https://img.youtube.com/vi/${videoId}/${quality}.jpg`}
                                            alt={quality}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={cn(
                                            "absolute inset-0 z-10 flex items-center justify-center transition-all duration-150 bg-black/40 backdrop-blur-[2px]",
                                            gridHover === quality ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                                        )}>
                                            <button
                                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/${quality}.jpg`, `yt-thumb-${quality}-${videoId}.jpg`)}
                                                className="p-5 bg-white rounded-full text-red-600 shadow-2xl transform hover:scale-110 active:scale-90 transition-all"
                                            >
                                                <Download className="h-7 w-7" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center pb-2">
                                        <p className="text-[11px] font-black uppercase text-zinc-400 tracking-[0.2em]">{quality.replace('default', '')} Resolution</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-4xl mx-auto py-8">
                <AdBanner slot="tool-bottom-thumbnail" />
            </div>

            {/* SEO Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-black uppercase tracking-tight">{t.ytGrab.guide.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{t.ytGrab.desc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {t.ytGrab.guide.sections.map((section: any, idx: number) => (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] border border-transparent hover:border-red-600/10 transition-all text-center">
                            <div className="text-3xl font-black text-red-600 mb-6 font-serif">0{idx + 1}</div>
                            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
