'use client'

import { useState, useCallback, useEffect } from 'react'
import { Upload, Download, Loader2, Check, Sliders, Maximize, Wand2, Trash2, Share2 } from 'lucide-react'
import imageCompression from 'browser-image-compression'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'

export default function ImageCompressorPage() {
    const { t } = useLanguage()
    const [originalFile, setOriginalFile] = useState<File | null>(null)
    const [compressedFile, setCompressedFile] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [compressedPreview, setCompressedPreview] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [progress, setProgress] = useState(0)

    // Advanced State
    const [quality, setQuality] = useState(0.8)
    const [maxWidth, setMaxWidth] = useState<number>(1920)
    const [isEnhanceEnabled, setIsEnhanceEnabled] = useState(false)
    const [aspectRatio, setAspectRatio] = useState<number | null>(null)

    // Safety flag to prevent hydration issues
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Revoke object URLs when they change or component unmounts
    useEffect(() => {
        return () => {
            if (originalPreview) URL.revokeObjectURL(originalPreview)
            if (compressedPreview) URL.revokeObjectURL(compressedPreview)
        }
    }, [originalPreview, compressedPreview])

    const applySharpen = async (file: File): Promise<File> => {
        const canvas = await imageCompression.drawFileInCanvas(file) as any
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        if (!ctx) return file

        const w = canvas.width
        const h = canvas.height
        const imageData = ctx.getImageData(0, 0, w, h)
        const data = imageData.data

        const factor = 0.2
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] + factor * (data[i] - 128))
            data[i + 1] = Math.min(255, data[i + 1] + factor * (data[i + 1] - 128))
            data[i + 2] = Math.min(255, data[i + 2] + factor * (data[i + 2] - 128))
        }
        ctx.putImageData(imageData, 0, 0)

        return new Promise((resolve) => {
            canvas.toBlob((blob: Blob | null) => {
                if (blob) {
                    const sharpenedFile = new File([blob], file.name, { type: 'image/jpeg' })
                    resolve(sharpenedFile)
                } else {
                    resolve(file)
                }
            }, 'image/jpeg', 0.95)
        })
    }

    const processImage = useCallback(async (file: File, currentQuality: number, currentWidth: number, enhance: boolean) => {
        if (isProcessing) return
        setIsProcessing(true)
        setProgress(0)

        const options = {
            maxSizeMB: 10,
            maxWidthOrHeight: currentWidth,
            useWebWorker: true,
            initialQuality: currentQuality,
            onProgress: (p: number) => setProgress(p)
        }

        try {
            let processed = await imageCompression(file, options)

            if (enhance) {
                processed = await applySharpen(processed)
            }

            setCompressedFile(processed)

            const newUrl = URL.createObjectURL(processed)
            setCompressedPreview((prev) => {
                if (prev) URL.revokeObjectURL(prev)
                return newUrl
            })
        } catch (error) {
            console.error(error)
        } finally {
            setIsProcessing(false)
        }
    }, [isProcessing])

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        setOriginalFile(file)
        setCompressedFile(null)

        setCompressedPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev)
            return null
        })

        const previewUrl = URL.createObjectURL(file)
        setOriginalPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev)
            return previewUrl
        })

        const img = new Image()
        img.src = previewUrl
        img.onload = () => {
            setMaxWidth(img.width)
            setAspectRatio(img.width / img.height)
            processImage(file, quality, img.width, isEnhanceEnabled)
        }
    }

    const handleApplySettings = () => {
        if (!originalFile) return
        processImage(originalFile, quality, maxWidth, isEnhanceEnabled)
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    if (!isMounted) return null

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient">{t.imageMaster.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.imageMaster.desc}
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-6 rounded-3xl space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Sliders className="w-4 h-4" /> {t.imageMaster.quality}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-mono">
                                    <span className="text-[10px] opacity-50 uppercase tracking-tighter">Fast</span>
                                    <span className="text-primary font-bold">{Math.round(quality * 100)}%</span>
                                    <span className="text-[10px] opacity-50 uppercase tracking-tighter">Quality</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="1.0"
                                    step="0.1"
                                    value={quality}
                                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Maximize className="w-4 h-4" /> {t.imageMaster.size}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-xs text-muted-foreground ml-1">{t.imageMaster.width} (px)</label>
                                    <input
                                        type="number"
                                        value={maxWidth}
                                        onChange={(e) => setMaxWidth(parseInt(e.target.value))}
                                        className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl p-3 text-sm font-mono focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-muted-foreground ml-1">{t.imageMaster.height} (px)</label>
                                    <div className="w-full bg-zinc-100/50 dark:bg-zinc-900/50 border-none rounded-xl p-3 text-sm font-mono text-muted-foreground">
                                        {aspectRatio ? Math.round(maxWidth / aspectRatio) : 0}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "p-2 rounded-xl transition-colors",
                                    isEnhanceEnabled ? "bg-purple-100 text-purple-600" : "bg-zinc-100 text-muted-foreground"
                                )}>
                                    <Wand2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">{t.imageMaster.smartEnhance}</h4>
                                    <p className="text-[10px] text-muted-foreground leading-tight">{t.imageMaster.smartEnhanceDesc}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsEnhanceEnabled(!isEnhanceEnabled)}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative flex-shrink-0",
                                    isEnhanceEnabled ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                    isEnhanceEnabled ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>

                        <button
                            disabled={!originalFile || isProcessing}
                            onClick={handleApplySettings}
                            className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                        >
                            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : t.imageMaster.applyOptimize}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                    {!originalFile ? (
                        <div className="group relative border-4 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-24 text-center hover:border-primary/50 hover:bg-zinc-50/50 dark:hover:bg-primary/5 transition-all cursor-pointer animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="space-y-6 pointer-events-none">
                                <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto shadow-2xl transition-transform group-hover:scale-110">
                                    <Upload className="w-12 h-12" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black italic tracking-tighter">{t.common.selectImage}</h3>
                                    <p className="text-muted-foreground mt-2 max-w-xs mx-auto text-sm">{t.common.dropHere}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6 animate-in zoom-in-95 duration-500">
                            <div className="glass-card p-4 rounded-3xl space-y-4">
                                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">
                                    <span>{t.imageMaster.original}</span>
                                    <span>{originalFile && formatSize(originalFile.size)}</span>
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative group">
                                    {originalPreview ? (
                                        <img src={originalPreview} alt="Original" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-200 animate-pulse" />
                                    )}
                                    <button
                                        onClick={() => {
                                            setOriginalFile(null)
                                            setOriginalPreview((prev) => { if (prev) URL.revokeObjectURL(prev); return null; })
                                            setCompressedFile(null)
                                            setCompressedPreview((prev) => { if (prev) URL.revokeObjectURL(prev); return null; })
                                        }}
                                        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="glass-card p-4 rounded-3xl space-y-4 border-2 border-primary/20">
                                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest px-2">
                                    <span className="text-primary flex items-center gap-1">
                                        {isProcessing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                                        {t.imageMaster.optimized}
                                    </span>
                                    <div className="flex gap-2">
                                        {compressedFile && originalFile && (
                                            <span className="text-green-600 dark:text-green-400">
                                                -{((originalFile.size - compressedFile.size) / originalFile.size * 100).toFixed(0)}%
                                            </span>
                                        )}
                                        <span className="text-muted-foreground">{compressedFile ? formatSize(compressedFile.size) : "..."}</span>
                                    </div>
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                                    {isProcessing && (
                                        <div className="absolute inset-0 z-20 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-8 transition-opacity">
                                            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden mb-4">
                                                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
                                            </div>
                                            <span className="text-white text-sm font-black">{progress}%</span>
                                        </div>
                                    )}
                                    {compressedPreview ? (
                                        <img src={compressedPreview} alt="Optimized" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-zinc-100/50">
                                            <Loader2 className="w-8 h-8 animate-spin opacity-20" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-stretch gap-3">
                                <button
                                    disabled={!compressedFile || isProcessing}
                                    onClick={() => {
                                        if (compressedPreview && originalFile) {
                                            const link = document.createElement('a')
                                            link.href = compressedPreview
                                            link.download = `optimized-${originalFile.name}`
                                            link.click()
                                        }
                                    }}
                                    className="flex-1 py-5 rounded-3xl bg-primary text-primary-foreground font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    <Download className="w-6 h-6 shrink-0" />
                                    <span className="truncate">{t.imageMaster.downloadOptimized}</span>
                                </button>
                                <button
                                    onClick={() => {
                                        const text = `Check out this awesome Image Compressor! ⚡\n${window.location.origin}${window.location.pathname}`;
                                        navigator.clipboard.writeText(text);
                                        alert(t.common.copiedLink);
                                    }}
                                    className="w-16 sm:w-20 rounded-3xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shrink-0"
                                    title={t.common.shareResult}
                                >
                                    <Share2 className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* SEO Guide & FAQ Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient">{t.imageMaster.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.imageMaster.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.imageMaster.guide.sections.map((section, idx) => (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] space-y-4 hover:shadow-2xl transition-all border border-zinc-100 dark:border-zinc-800/50">
                            <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-10">
                    <h3 className="text-3xl font-black text-center">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {t.imageMaster.guide.faq.map((item, idx) => (
                            <div key={idx} className="glass-card p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800/50 hover:border-primary/20 transition-colors">
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-start gap-4">
                                    <span className="text-primary font-black bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">Q</span>
                                    {item.q}
                                </h4>
                                <p className="text-muted-foreground pl-14 leading-relaxed text-lg">
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
