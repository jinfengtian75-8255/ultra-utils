'use client'

import { useState, useEffect } from 'react'
import { Link as LinkIcon, Download, Image as ImageIcon, Loader2, Sparkles, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'

export default function YoutubeThumbnailPage() {
    const { t } = useLanguage()
    const [url, setUrl] = useState('')
    const [videoId, setVideoId] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const extractVideoId = (inputUrl: string) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/
        const match = inputUrl.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    const handleGrab = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        setVideoId(null)

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
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <span className="text-gradient">{t.ytGrab.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.ytGrab.desc}
                </p>
            </div>

            <div className="glass-card p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <form onSubmit={handleGrab} className="flex gap-4 flex-col sm:flex-row items-center">
                    <div className="relative flex-1 w-full">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <LinkIcon className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder={t.ytGrab.placeholder}
                            className="w-full pl-12 h-14 rounded-xl border-none bg-zinc-100/50 dark:bg-zinc-800/50 px-4 text-lg focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading || !url}
                        className="h-14 px-8 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
                    >
                        {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <span>{t.ytGrab.getBtn}</span>}
                    </button>
                </form>
                {error && (
                    <div className="mt-4 p-4 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20 text-center font-medium animate-in fade-in slide-in-from-top-2">
                        {error}
                    </div>
                )}
            </div>

            {loading && (
                <div className="h-[400px] w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-3xl animate-pulse flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 text-muted-foreground">
                        <Loader2 className="h-8 w-8 animate-spin" />
                        <span className="font-medium">{t.ytGrab.fetching}</span>
                    </div>
                </div>
            )}

            {videoId && !loading && (
                <div key={videoId} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* ... (existing thumbnail display code) */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/10 dark:ring-white/10 group relative aspect-video bg-black">
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                            <button
                                onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, `thumbnail-${videoId}.jpg`)}
                                className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-110 transition-transform shadow-xl"
                            >
                                <Download className="h-5 w-5" /> {t.ytGrab.downloadHd}
                            </button>
                            <button
                                onClick={() => {
                                    const rootUrl = `/tools/background-remover`
                                    const params = new URLSearchParams()
                                    params.set('src', `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
                                    if (url.includes('shorts/')) params.set('shorts', 'true')
                                    window.location.href = `${rootUrl}?${params.toString()}`
                                }}
                                className="bg-primary text-white w-[240px] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-110 transition-transform shadow-xl"
                            >
                                <Sparkles className="h-5 w-5" /> {t.ytGrab.editBtn}
                            </button>
                            <button
                                onClick={() => {
                                    const text = `Check out this YouTube Thumbnail Grabber! ⚡\n${window.location.origin}${window.location.pathname}`;
                                    navigator.clipboard.writeText(text);
                                    alert(t.common.copiedLink);
                                }}
                                className="bg-white/10 text-white w-[240px] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all shadow-xl backdrop-blur-md border border-white/20"
                            >
                                <Share2 className="h-5 w-5" /> {t.common.shareResult}
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['hqdefault', 'mqdefault', 'sddefault'].map((quality) => (
                            <div key={quality} className="relative group rounded-xl overflow-hidden aspect-video border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/${quality}.jpg`}
                                    alt={quality}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <button
                                        onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/${quality}.jpg`, `thumbnail-${videoId}-${quality}.jpg`)}
                                        className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
                                        title={t.common.download}
                                    >
                                        <Download className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SEO Guide Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">{t.ytGrab.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.ytGrab.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.ytGrab.guide.sections.map((section, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl space-y-4 hover:shadow-xl transition-all">
                            <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {t.ytGrab.guide.faq.map((item, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50">
                                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-start gap-3">
                                    <span className="text-primary font-black">Q.</span>
                                    {item.q}
                                </h4>
                                <p className="text-muted-foreground pl-7 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
