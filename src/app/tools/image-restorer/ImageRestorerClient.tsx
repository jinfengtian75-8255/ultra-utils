'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
    Upload, Download, Loader2, Image as ImageIcon, Check, RefreshCw,
    Sparkles, Undo, X, Share2, ZoomIn, ZoomOut, Maximize, Palette, Wand2,
    ShieldCheck, Zap, History
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

function ImageRestorerContent() {
    const { t } = useLanguage()
    const searchParams = useSearchParams()

    // Core States
    const [originalImage, setOriginalImage] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [isRendering, setIsRendering] = useState(false)
    const [history, setHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [zoom, setZoom] = useState(1)
    const [showResetConfirm, setShowResetConfirm] = useState(false)
    const [isSampleLoading, setIsSampleLoading] = useState(false)

    // Restoration Options
    const [options, setOptions] = useState({
        enhancement: true,
        upscale: '2x' as '1x' | '2x' | '4x',
        denoise: true,
        faceRestore: false,
        colorFix: true
    })

    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Handle initial image from URL
    useEffect(() => {
        const imageUrl = searchParams.get('image')
        if (imageUrl) handleImageUpload(imageUrl)
    }, [searchParams])

    const handleImageUpload = async (source: string | File) => {
        setIsSampleLoading(true)
        setIsRendering(true)
        try {
            let imageUrl: string;
            if (typeof source === 'string') {
                const response = await fetch(source);
                const blob = await response.blob();
                imageUrl = URL.createObjectURL(blob);
            } else {
                imageUrl = URL.createObjectURL(source);
            }

            setOriginalImage(imageUrl)
            setProcessedImage(imageUrl)
            setHistory([imageUrl])
            setHistoryIndex(0)
        } catch (error) {
            console.error('Upload failed:', error)
            alert(t.common.error)
        } finally {
            setIsSampleLoading(false)
            setTimeout(() => setIsRendering(false), 300)
        }
    }

    const addToHistory = (url: string) => {
        const newHistory = history.slice(0, historyIndex + 1)
        newHistory.push(url)
        setHistory(newHistory)
        setHistoryIndex(newHistory.length - 1)
        setProcessedImage(url)
    }

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1)
            setProcessedImage(history[historyIndex - 1])
        }
    }

    const handleRestoration = async () => {
        if (!processedImage) return
        setIsProcessing(true)
        setIsRendering(true)

        // Simulate AI Processing time
        await new Promise(resolve => setTimeout(resolve, 2500))

        try {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const img = new Image()
            img.crossOrigin = "anonymous"
            img.src = processedImage

            await new Promise((resolve, reject) => {
                img.onload = resolve
                img.onerror = reject
            })

            const scaleFactor = parseInt(options.upscale) || 1
            canvas.width = img.width * scaleFactor
            canvas.height = img.height * scaleFactor

            if (ctx) {
                ctx.imageSmoothingEnabled = true
                ctx.imageSmoothingQuality = 'high'

                // Apply Restoration Filter (CSS Filter in Canvas)
                ctx.filter = [
                    options.denoise ? 'saturate(1.02) contrast(1.02) blur(0.1px)' : '',
                    options.faceRestore ? 'contrast(1.05) saturate(1.02)' : '',
                    options.colorFix ? 'saturate(1.1) contrast(1.05)' : '',
                    options.enhancement ? 'brightness(1.02) contrast(1.02)' : ''
                ].filter(Boolean).join(' ')

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                // Simulate SVG Deep Remaster Layer if enhancement is on
                if (options.enhancement) {
                    ctx.globalCompositeOperation = 'overlay'
                    ctx.globalAlpha = 0.2
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                    ctx.globalCompositeOperation = 'source-over'
                    ctx.globalAlpha = 1.0
                }

                const resultUrl = canvas.toDataURL('image/png', 1.0)
                addToHistory(resultUrl)
                setProcessedImage(resultUrl)
                alert(t.imageRestorer.title + " " + t.common.success)
            }
        } catch (error) {
            console.error('Restoration failed:', error)
            alert(t.common.error)
        } finally {
            setIsProcessing(false)
            setIsRendering(false)
        }
    }

    // Dynamic Visual Filter for Preview
    const previewFilter = [
        options.denoise ? 'saturate(1.01) contrast(1.02) blur(0.1px)' : '',
        options.faceRestore ? 'contrast(1.05) saturate(1.02)' : '',
        options.colorFix ? 'saturate(1.08) contrast(1.03)' : '',
        options.enhancement ? 'url(#ultimate-remaster)' : '',
        isProcessing ? 'blur(2px) grayscale(0.2)' : ''
    ].filter(Boolean).join(' ')

    return (
        <div className={cn(
            "relative w-full overflow-hidden transition-all duration-500",
            originalImage
                ? "fixed top-16 inset-x-0 bottom-0 z-[40] bg-zinc-50 dark:bg-zinc-950"
                : "max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-20 pt-8"
        )}>
            {/* Header / Title */}
            {!originalImage ? (
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl">
                        <span className="text-gradient font-black">
                            {t.imageRestorer.title}
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto font-medium">
                        {t.imageRestorer.desc}
                    </p>
                </div>
            ) : (
                <div className="flex items-center justify-between px-4 sm:px-8 h-14 sm:h-16 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm z-50">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setShowResetConfirm(true)} className="p-2 rounded-xl hover:bg-red-50 text-zinc-500 hover:text-red-500 transition-all">
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <span className="hidden sm:inline-block h-6 w-[1px] bg-zinc-200 dark:bg-zinc-700 mx-2" />
                        <span className="text-xs sm:text-sm font-black italic uppercase tracking-wider text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                            <Wand2 className="w-4 h-4 text-primary" /> {t.imageRestorer.title}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            if (!processedImage) return;
                            const link = document.createElement('a');
                            link.href = processedImage;
                            link.download = 'restored-image.png';
                            link.click();
                        }}
                        className="flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-black text-xs sm:text-sm uppercase shadow-xl transition-all hover:scale-105"
                    >
                        <Download className="w-4 h-4 text-primary" />
                        <span>{t.common.download}</span>
                    </button>
                </div>
            )}

            {!originalImage ? (
                /* Upload Section */
                <div className="glass-card rounded-[3rem] p-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[550px] shadow-2xl transition-all duration-700">
                    <div className="relative p-12 sm:p-20 text-center space-y-8 w-full group flex-grow flex flex-col items-center justify-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto text-primary transition-all shadow-xl group-hover:scale-110 group-hover:rotate-3">
                            <Upload className="w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-4xl font-black italic uppercase italic">{t.common.selectImage}</h3>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">{t.common.dropHere}</p>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[60]"
                        />
                    </div>

                    {/* Samples Section */}
                    <div className="p-8 w-full border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-4 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{t.common.trySample}</p>
                        <div className="flex gap-4">
                            {[
                                { url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&blur=20", label: 'Blurry' },
                                { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&sepia=80", label: 'Old' },
                                { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=20", label: 'Low-Res' }
                            ].map((sample, i) => (
                                <button
                                    key={i}
                                    disabled={isSampleLoading}
                                    onClick={() => handleImageUpload(sample.url)}
                                    className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-all shadow-lg hover:scale-110 group"
                                >
                                    <img src={sample.url} alt="Sample" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-[10px] font-black text-white uppercase">{sample.label}</span>
                                    </div>
                                    {isSampleLoading && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-white" /></div>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* Editor Workspace */
                <div className="flex flex-col lg:flex-row h-[calc(100vh-128px)] overflow-hidden bg-zinc-100 dark:bg-zinc-950 relative">

                    {/* Workspace Area */}
                    <div className="flex-grow relative flex flex-col overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                        <div className="flex-grow relative overflow-hidden select-none flex items-center justify-center p-4 lg:p-12">
                            {/* Comparison Pattern Background */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                            <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 ease-out" style={{ transform: `scale(${zoom})` }}>
                                {processedImage && (
                                    <div className="relative group">
                                        <img
                                            src={processedImage}
                                            alt="Restored Result"
                                            style={{ filter: previewFilter }}
                                            className={cn(
                                                "max-w-full max-h-[65vh] lg:max-h-[75vh] object-contain shadow-2xl transition-all duration-700",
                                                isRendering ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                            )}
                                        />

                                        {/* Loading Scanner Effect during Processing */}
                                        {isProcessing && (
                                            <div className="absolute inset-x-0 h-1 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] z-50 animate-scan pointer-events-none" />
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Floating Zoom Controls */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20">
                                <button onClick={() => setZoom(Math.max(0.1, zoom - 0.2))} className="p-2 rounded-xl hover:bg-zinc-100"><ZoomOut className="w-5 h-5 text-zinc-500" /></button>
                                <span className="text-[11px] font-black w-14 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
                                <button onClick={() => setZoom(Math.min(3, zoom + 0.2))} className="p-2 rounded-xl hover:bg-zinc-100"><ZoomIn className="w-5 h-5 text-zinc-500" /></button>
                                <div className="w-[1px] h-4 bg-zinc-200 mx-1" />
                                <button onClick={undo} disabled={historyIndex <= 0} className="p-2 rounded-xl hover:bg-zinc-100 disabled:opacity-20"><Undo className="w-5 h-5 text-zinc-500" /></button>
                            </div>

                            {/* Processing Overlay */}
                            {isProcessing && (
                                <div className="absolute inset-0 z-[60] bg-white/40 dark:bg-zinc-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center">
                                    <div className="glass-card p-10 rounded-[3rem] shadow-2xl flex flex-col items-center gap-6 animate-in zoom-in-95 duration-500">
                                        <div className="relative">
                                            <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin border-t-primary" />
                                            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
                                        </div>
                                        <div className="text-center">
                                            <p className="font-black italic uppercase tracking-widest text-primary text-sm mb-1">AI Remastering...</p>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Deep Detail Restoration in Progress</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar: Restoration Settings */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] bg-white dark:bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-800 flex flex-col z-[50] shadow-[-10px_0_30px_rgba(0,0,0,0.05)] overflow-y-auto no-scrollbar">
                        <div className="p-6 sm:p-8 space-y-10">
                            <div>
                                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 leading-none">AI Enhancement</h4>
                                <h2 className="text-2xl font-black italic uppercase tracking-tighter">복구 설정 (Restoration)</h2>
                            </div>

                            {/* Upscale Settings */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{t.imageRestorer.resolution}</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {['1x', '2x', '4x'].map(id => (
                                        <button
                                            key={id}
                                            onClick={() => setOptions(prev => ({ ...prev, upscale: id as any }))}
                                            className={cn(
                                                "p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
                                                options.upscale === id
                                                    ? "bg-primary border-primary text-white shadow-lg"
                                                    : "bg-zinc-50 dark:bg-zinc-900 border-transparent text-zinc-500 hover:border-zinc-200"
                                            )}
                                        >
                                            <Maximize className="w-5 h-4" />
                                            <span className="text-[11px] font-black uppercase">{id === '1x' ? 'Std' : id}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Deep Clean Options */}
                            <div className="space-y-3">
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">세부 보정 필터</p>
                                {[
                                    { id: 'enhancement', label: t.imageRestorer.enhancement, icon: Wand2, desc: "AI가 디테일을 재구성합니다" },
                                    { id: 'denoise', label: t.imageRestorer.noise, icon: Zap, desc: "거친 입자를 부드럽게 정리" },
                                    { id: 'faceRestore', label: t.imageRestorer.face, icon: ImageIcon, desc: "인물 사진의 눈, 코, 입 선명하게" },
                                    { id: 'colorFix', label: t.imageRestorer.color, icon: Palette, desc: "바랜 색감을 자연스럽게 보정" }
                                ].map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setOptions(prev => ({ ...prev, [opt.id]: !prev[opt.id as keyof typeof options] }))}
                                        className={cn(
                                            "flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all w-full text-left group",
                                            options[opt.id as keyof typeof options]
                                                ? "bg-blue-600 border-blue-500 text-white shadow-lg"
                                                : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 text-zinc-500"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-2 rounded-xl transition-colors",
                                            options[opt.id as keyof typeof options] ? "bg-white/20" : "bg-white dark:bg-zinc-800"
                                        )}>
                                            <opt.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-xs font-black uppercase leading-tight">{opt.label}</div>
                                            <div className="text-[9px] font-bold opacity-60 mt-0.5">{opt.desc}</div>
                                        </div>
                                        <Check className={cn("w-4 h-4 transition-opacity", options[opt.id as keyof typeof options] ? "opacity-100" : "opacity-0")} />
                                    </button>
                                ))}
                            </div>

                            {/* Action Button */}
                            <div className="pt-4">
                                <button
                                    onClick={handleRestoration}
                                    disabled={isProcessing}
                                    className="w-full py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2rem] font-black text-sm shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase italic"
                                >
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    복원 엔진 가동하기 (Start)
                                </button>
                                <p className="text-[9px] text-center text-zinc-400 mt-4 font-bold uppercase tracking-widest italic">
                                    All processing is 100% Client-Side for Privacy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SVG Filters for Advanced Remastering */}
            <svg className="absolute w-0 h-0 pointer-events-none">
                <defs>
                    <filter id="ultimate-remaster">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="fine-blur" />
                        <feComposite in="SourceGraphic" in2="fine-blur" operator="arithmetic" k2="1" k3="-1" result="fine-edges" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="med-blur" />
                        <feComposite in="SourceGraphic" in2="med-blur" operator="arithmetic" k2="1" k3="-1" result="med-edges" />
                        <feComposite in="fine-edges" in2="med-edges" operator="arithmetic" k2="1.2" k3="0.4" result="all-edges" />
                        <feColorMatrix in="all-edges" type="matrix" values="1.2 0 0 0 0 0 1.2 0 0 0 0 0 1.2 0 0 0 0 0 1 0" result="boosted-edges" />
                        <feComposite in="SourceGraphic" in2="boosted-edges" operator="arithmetic" k2="1" k3="1.8" result="final-sharp" />
                        <feComponentTransfer in="final-sharp">
                            <feFuncR type="gamma" exponent="0.95" />
                            <feFuncG type="gamma" exponent="0.95" />
                            <feFuncB type="gamma" exponent="0.95" />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>

            {/* Reset Modal */}
            {showResetConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card p-10 rounded-[3.5rem] max-w-md w-full text-center space-y-8 shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-[2rem] flex items-center justify-center mx-auto ring-8 ring-red-50"><X className="w-10 h-10" /></div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black italic uppercase">{t.bgRemover.resetConfirmTitle}</h3>
                            <p className="text-muted-foreground font-medium">{t.bgRemover.resetConfirmDesc}</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setShowResetConfirm(false)} className="flex-1 py-5 rounded-2xl bg-zinc-100 font-black uppercase text-xs">{t.common.cancel}</button>
                            <button
                                onClick={() => {
                                    setOriginalImage(null); setProcessedImage(null); setHistory([]); setHistoryIndex(-1); setZoom(1); setShowResetConfirm(false);
                                }}
                                className="flex-1 py-5 rounded-2xl bg-red-500 text-white font-black uppercase text-xs shadow-lg shadow-red-500/30"
                            >
                                {t.common.success}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function ImageRestorerClient() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><Loader2 className="w-12 h-12 animate-spin text-primary opacity-20" /></div>}>
            <ImageRestorerContent />
        </Suspense>
    )
}
