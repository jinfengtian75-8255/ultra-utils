'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, Download, Loader2, Image as ImageIcon, Check, RefreshCw, Layers, Sparkles, Undo, MousePointer2, Eraser, Brush, X, Crop, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import { removeBackground } from '@imgly/background-removal'

function BackgroundRemoverContent() {
    const { t } = useLanguage()
    const searchParams = useSearchParams()
    const [originalImage, setOriginalImage] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [history, setHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [maskImage, setMaskImage] = useState<HTMLImageElement | null>(null)
    const [isRefining, setIsRefining] = useState(false)
    const [brushMode, setBrushMode] = useState<'restore' | 'erase'>('restore')
    const [brushSize, setBrushSize] = useState(30)
    const [isDrawing, setIsDrawing] = useState(false)

    const [activeTab, setActiveTab] = useState<'subject' | 'background' | 'editor'>('subject')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [bgGradient, setBgGradient] = useState('linear-gradient(to bottom right, #3b82f6, #8b5cf6)')
    const [bgImage, setBgImage] = useState<string | null>(null)
    const [bgType, setBgType] = useState<'none' | 'color' | 'gradient' | 'image'>('none')
    const [showResetConfirm, setShowResetConfirm] = useState(false)

    useEffect(() => {
        const imageUrl = searchParams.get('image')
        if (imageUrl) handleImageUpload(imageUrl)
    }, [searchParams])

    const handleImageUpload = async (source: string | File) => {
        setIsProcessing(true)
        try {
            let imageUrl = typeof source === 'string' ? source : URL.createObjectURL(source)
            setOriginalImage(imageUrl)
            const blob = await removeBackground(imageUrl)
            const resultUrl = URL.createObjectURL(blob)
            setProcessedImage(resultUrl)
            setHistory([resultUrl])
            setHistoryIndex(0)
            const img = new Image()
            img.src = resultUrl
            img.onload = () => setMaskImage(img)
        } catch (error) {
            console.error('Removal failed:', error)
            alert(t.common.error)
        } finally {
            setIsProcessing(false)
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

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isRefining) return
        setIsDrawing(true)
        draw(e)
    }

    const stopDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false)
            if (canvasRef.current) addToHistory(canvasRef.current.toDataURL())
        }
    }

    const draw = (e: any) => {
        if (!isDrawing || !canvasRef.current) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX || e.touches?.[0].clientX) - rect.left
        const y = (e.clientY || e.touches?.[0].clientY) - rect.top
        ctx.globalCompositeOperation = brushMode === 'restore' ? 'source-over' : 'destination-out'
        ctx.beginPath()
        ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2)
        ctx.fill()
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-20">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
                    <span className="text-gradient font-black">{t.bgRemover.title}</span>
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">{t.bgRemover.desc}</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                    <div className="glass-card p-8 rounded-[2.5rem] space-y-8 animate-in duration-700 delay-200 shadow-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="space-y-6">
                            {/* Manual Refine Section */}
                            <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4">
                                <h3 className="text-sm font-black flex items-center gap-2 text-primary uppercase tracking-widest">
                                    <Sparkles className="w-4 h-4" /> {t.bgRemover.refineTitle}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{t.bgRemover.refineDesc}</p>
                                <button
                                    onClick={() => setIsRefining(!isRefining)}
                                    className={cn(
                                        "w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all",
                                        isRefining ? "bg-primary text-white shadow-lg" : "bg-zinc-200 dark:bg-zinc-800"
                                    )}
                                >
                                    {isRefining ? <Check className="w-4 h-4" /> : <MousePointer2 className="w-4 h-4" />}
                                    {isRefining ? t.common.apply : t.bgRemover.refineTitle}
                                </button>

                                {isRefining && (
                                    <div className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95">
                                        <div className="flex gap-2 p-1 bg-white/50 dark:bg-zinc-800/50 rounded-xl">
                                            <button onClick={() => setBrushMode('restore')} className={cn("flex-1 py-2.5 rounded-lg text-xs font-black transition-all", brushMode === 'restore' ? "bg-white dark:bg-zinc-700 shadow-sm text-primary" : "text-muted-foreground")}><Brush className="w-3.5 h-3.5" /> {t.bgRemover.brushRestore}</button>
                                            <button onClick={() => setBrushMode('erase')} className={cn("flex-1 py-2.5 rounded-lg text-xs font-black transition-all", brushMode === 'erase' ? "bg-white dark:bg-zinc-700 shadow-sm text-primary" : "text-muted-foreground")}><Eraser className="w-3.5 h-3.5" /> {t.bgRemover.brushErase}</button>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground"><span>{t.bgRemover.brushSize}</span><span>{brushSize}px</span></div>
                                            <input type="range" min="5" max="100" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full cursor-pointer accent-primary" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Background Settings Section */}
                            <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4">
                                <h3 className="text-sm font-black flex items-center gap-2 text-primary uppercase tracking-widest">
                                    <ImageIcon className="w-4 h-4" /> {t.bgRemover.backgroundColor}
                                </h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {[
                                        { id: 'none', icon: X, label: t.bgRemover.bgTransparent },
                                        { id: 'color', icon: ImageIcon, label: t.bgRemover.bgSolid },
                                        { id: 'gradient', icon: Sparkles, label: t.bgRemover.bgGradient },
                                        { id: 'image', icon: Layers, label: t.bgRemover.bgImage }
                                    ].map((item) => (
                                        <button key={item.id} onClick={() => setBgType(item.id as any)} className={cn("flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all", bgType === item.id ? "border-primary bg-primary/5 shadow-sm" : "bg-white dark:bg-zinc-800 border-transparent")}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-[9px] font-black uppercase text-center leading-tight">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                                {bgType === 'color' && (
                                    <div className="grid grid-cols-6 gap-2 p-3 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                        {['#ffffff', '#000000', '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa', '#f472b6', '#94a3b8', '#52525b', '#262626'].map(col => (
                                            <button key={col} onClick={() => setBgColor(col)} className={cn("w-full aspect-square rounded-lg border-2", bgColor === col ? "border-primary scale-110 shadow-md" : "border-white/20 dark:border-zinc-700")} style={{ backgroundColor: col }} />
                                        ))}
                                    </div>
                                )}
                                {bgType === 'gradient' && (
                                    <div className="grid grid-cols-1 gap-2 p-3 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                        {['linear-gradient(to bottom right, #3b82f6, #8b5cf6)', 'linear-gradient(to bottom right, #f43f5e, #fb923c)', 'linear-gradient(to bottom right, #10b981, #3b82f6)'].map(grad => (
                                            <button key={grad} onClick={() => setBgGradient(grad)} className={cn("w-full h-10 rounded-xl border-2", bgGradient === grad ? "border-primary" : "border-transparent")} style={{ background: grad }} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                            <div className="flex gap-3">
                                <button onClick={undo} disabled={historyIndex <= 0} className="flex-1 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 font-bold flex items-center justify-center gap-2 disabled:opacity-30"><Undo className="w-5 h-5" /> {t.bgRemover.undo}</button>
                                <button onClick={() => setShowResetConfirm(true)} className="w-16 py-4 rounded-2xl bg-zinc-100 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"><RefreshCw className="w-5 h-5" /></button>
                            </div>
                            <button
                                disabled={!processedImage || isProcessing}
                                onClick={() => { const l = document.createElement('a'); l.href = processedImage!; l.download = 'no-bg.png'; l.click(); }}
                                className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all"
                            >
                                <Download className="w-6 h-6" /> {t.common.download}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="glass-card rounded-[3rem] p-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[600px] shadow-2xl animate-in fade-in duration-700 delay-300">
                        {!originalImage && (
                            <div className="p-20 text-center space-y-8 w-full group">
                                <div className="w-32 h-32 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto text-primary transition-all shadow-xl group-hover:scale-110"><Upload className="w-16 h-16" /></div>
                                <div className="space-y-4"><h3 className="text-3xl font-black italic uppercase">{t.common.selectImage}</h3><p className="text-muted-foreground font-medium">{t.common.dropHere}</p></div>
                                <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" />
                            </div>
                        )}
                        {originalImage && (
                            <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-8 overflow-hidden rounded-[2.8rem]">
                                <div className="absolute inset-0 transition-all duration-500" style={{ backgroundColor: bgType === 'color' ? bgColor : 'transparent', background: bgType === 'gradient' ? bgGradient : 'none', backgroundImage: bgType === 'image' && bgImage ? `url(${bgImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    {bgType === 'none' && <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />}
                                </div>
                                {isProcessing && (
                                    <div className="absolute inset-0 z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl flex flex-col items-center justify-center space-y-6">
                                        <div className="relative"><div className="w-24 h-24 border-4 border-primary/20 rounded-full animate-spin border-t-primary" /><Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" /></div>
                                        <div className="text-center"><p className="text-2xl font-black italic uppercase">{t.common.processing}</p><p className="text-sm text-muted-foreground font-bold tracking-widest mt-2">{t.bgRemover.stepInference}</p></div>
                                    </div>
                                )}
                                <div className="relative z-10 max-w-full max-h-full shadow-2xl transition-transform duration-500">
                                    {processedImage && <img src={processedImage} alt="Processed" className={cn("max-w-full max-h-[500px] object-contain rounded-xl select-none pointer-events-none", isRefining && "opacity-50")} />}
                                    {isRefining && canvasRef && <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={stopDrawing} className="absolute inset-0 w-full h-full cursor-crosshair touch-none" />}
                                </div>
                                <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(`⚡ ${window.location.origin}${window.location.pathname}`); alert(t.common.copiedLink); }}
                                        className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg hover:scale-105 transition-all"
                                    >
                                        <Share2 className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showResetConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card p-10 rounded-[3rem] max-w-md w-full text-center space-y-8 shadow-2xl animate-in zoom-in-95">
                        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-[1.5rem] flex items-center justify-center mx-auto"><RefreshCw className="w-10 h-10" /></div>
                        <div className="space-y-4"><h3 className="text-3xl font-black italic uppercase">{t.bgRemover.reset}</h3><p className="text-muted-foreground font-medium">{t.bgRemover.reset}</p></div>
                        <div className="flex gap-4">
                            <button onClick={() => setShowResetConfirm(false)} className="flex-1 py-5 rounded-2xl bg-zinc-100 font-black uppercase text-sm"> {t.common.cancel}</button>
                            <button
                                onClick={() => { setOriginalImage(null); setProcessedImage(null); setHistory([]); setHistoryIndex(-1); setShowResetConfirm(false); }}
                                className="flex-1 py-5 rounded-2xl bg-red-500 text-white font-black uppercase text-sm shadow-lg shadow-red-500/30"
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

export default function BackgroundRemoverClient() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><Loader2 className="w-12 h-12 animate-spin text-primary opacity-20" /></div>}>
            <BackgroundRemoverContent />
        </Suspense>
    )
}
