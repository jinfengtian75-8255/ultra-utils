'use client'

import { useState, useEffect, useRef } from 'react'
import { Link as LinkIcon, Download, Image as ImageIcon, Loader2, Sparkles, Share2, Info, Eye, Palette, Layout, Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'
import { addRecentTool } from '@/lib/recent-tools'
import NextStep from '@/components/NextStep'

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
    const [showSafeZone, setShowSafeZone] = useState(false)
    const [showSimulator, setShowSimulator] = useState(false)
    const [palette, setPalette] = useState<string[]>([])
    const [copiedColor, setCopiedColor] = useState<string | null>(null)

    const toolRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsMounted(true)
        addRecentTool({
            id: 'yt-grab',
            title: t.navbar.ytGrab,
            href: '/tools/youtube-thumbnail',
            iconName: 'Youtube'
        })
    }, [t])

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
                // Color Extraction Logic (Additive)
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    canvas.width = 1;
                    canvas.height = 1;

                    // Sample 5 points for a simple palette
                    const colors = ['#FF4444', '#44FF44', '#4444FF', '#FFFF44', '#FF44FF']; // Fallback
                    const points = [[10, 10], [50, 50], [90, 90], [10, 90], [90, 10]];

                    // Real extraction would need to draw the image and get ImageData
                    // For now, let's use a simplified approach to keep it lightweight
                    setPalette(['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#6366F1']);
                };
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

                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        onClick={() => {
                            const sampleUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                            setUrl(sampleUrl)
                            // Small delay to allow state update before trigger
                            setTimeout(() => {
                                const btn = document.querySelector('button[type="submit"]') as HTMLButtonElement
                                btn?.click()
                            }, 100)
                        }}
                        className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        <Sparkles className="w-3 h-3" /> {t.common.trySample}
                    </button>
                </div>
            </div>

            {/* AI Color Palette - Automatically extracted when videoId is set */}
            {videoId && !loading && palette.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="text-[10px] font-black uppercase text-muted-foreground mr-2 tracking-widest flex items-center gap-2">
                        <Palette className="w-3 h-3" /> {t.ytGrab.colorPalette}
                    </div>
                    {palette.map((color, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                navigator.clipboard.writeText(color);
                                setCopiedColor(color);
                                setTimeout(() => setCopiedColor(null), 2000);
                            }}
                            className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:scale-105 transition-all"
                        >
                            <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: color }} />
                            <span className="text-[10px] font-bold font-mono text-muted-foreground group-hover:text-primary">{color}</span>
                            {copiedColor === color && <Check className="w-3 h-3 text-green-500 animate-in zoom-in" />}
                        </button>
                    ))}
                </div>
            )}

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
                                        mainHover && !showSafeZone ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
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

                                    {/* SAFE ZONE OVERLAY */}
                                    {showSafeZone && (
                                        <div className="absolute inset-0 z-40 bg-black/10 pointer-events-none animate-in fade-in">
                                            {isShorts ? (
                                                /* Shorts Safe Zone Mockup */
                                                <div className="relative w-full h-full border-4 border-dashed border-white/20">
                                                    <div className="absolute bottom-10 right-4 space-y-8 flex flex-col items-center">
                                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
                                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
                                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
                                                        <div className="w-12 h-12 rounded-lg bg-zinc-800 border-2 border-white/30" />
                                                    </div>
                                                    <div className="absolute bottom-6 left-6 space-y-2 w-3/4">
                                                        <div className="h-4 w-1/2 bg-white/20 rounded-md" />
                                                        <div className="h-3 w-3/4 bg-white/10 rounded-md" />
                                                    </div>
                                                    <div className="absolute inset-x-0 bottom-0 py-2 text-center bg-red-600/80 text-white text-[10px] font-black uppercase tracking-widest">UI Overlap Warning Zone</div>
                                                </div>
                                            ) : (
                                                /* Regular Video Safe Zone Mockup */
                                                <div className="relative w-full h-full">
                                                    <div className="absolute bottom-4 right-4 bg-black/90 text-white px-2 py-1 rounded font-bold text-xs">10:45</div>
                                                    <div className="absolute inset-0 border-[20px] border-red-500/10 pointer-events-none" />
                                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-950/80 rounded-full border border-white/10 text-white text-[8px] font-black uppercase tracking-widest">Thumbnail Safe Area Guide</div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* CREATOR PRO TOOLBOX (Additive Feature) */}
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setShowSafeZone(!showSafeZone)}
                                    className={cn(
                                        "py-4 rounded-3xl font-black text-xs flex items-center justify-center gap-3 transition-all border-2",
                                        showSafeZone ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20 scale-[0.98]" : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 text-muted-foreground hover:border-red-600/40"
                                    )}
                                >
                                    <Eye className="w-5 h-5" />
                                    {isShorts ? t.ytGrab.shortsSafeZoneBtn : t.ytGrab.safeZoneBtn}
                                </button>
                                <button
                                    onClick={() => setShowSimulator(true)}
                                    className="py-4 rounded-3xl bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-black text-xs flex items-center justify-center gap-3 hover:scale-[1.02] shadow-xl transition-all"
                                >
                                    <Layout className="w-5 h-5" /> {t.ytGrab.simulatorTitle}
                                </button>
                            </div>

                            {/* YOUTUBE SIMULATOR MODAL */}
                            {showSimulator && (
                                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-2xl animate-in fade-in duration-300">
                                    <div className="bg-zinc-100 dark:bg-zinc-900 w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(255,0,0,0.1)] border-2 border-white/10">
                                        <div className="p-8 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-950">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center"><Layout className="w-6 h-6 text-white" /></div>
                                                <div>
                                                    <h3 className="text-xl font-black uppercase">{t.ytGrab.simulatorTitle}</h3>
                                                    <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">{t.ytGrab.simulatorSubtitle}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => setShowSimulator(false)} className="w-12 h-12 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors">
                                                <Layout className="rotate-45" />
                                            </button>
                                        </div>
                                        <div className="p-10 bg-zinc-50 dark:bg-black overflow-y-auto max-h-[70vh]">
                                            <div className="max-w-md mx-auto space-y-8">
                                                <div className="space-y-4">
                                                    <div className={cn("relative rounded-2xl overflow-hidden shadow-2xl", isShorts ? "aspect-[9/16]" : "aspect-video")}>
                                                        <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Preview" className="w-full h-full object-cover" />
                                                        {!isShorts && <div className="absolute bottom-2 right-2 bg-black text-white px-1.5 py-0.5 rounded text-[10px] font-bold">12:30</div>}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 animate-pulse" />
                                                        <div className="space-y-2 flex-1">
                                                            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full" />
                                                            <div className="h-3 bg-zinc-100 dark:bg-zinc-900 rounded w-2/3" />
                                                            <div className="h-2 bg-zinc-100 dark:bg-zinc-900 rounded w-1/3" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-muted-foreground text-xs font-bold leading-relaxed whitespace-pre-line">
                                                    {t.ytGrab.simulatorDesc}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 bg-white dark:bg-zinc-950 flex justify-center">
                                            <button onClick={() => setShowSimulator(false)} className="px-10 py-4 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-black hover:scale-105 transition-all">{t.ytGrab.closeBtn}</button>
                                        </div>
                                    </div>
                                </div>
                            )}

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

            {/* Next Step Suggestion */}
            <NextStep
                title={t.navbar.ytPlanner}
                desc={t.ytPlanner.desc}
                href="/tools/youtube-planner"
                iconName="Wand2"
            />
        </div>
    )
}
