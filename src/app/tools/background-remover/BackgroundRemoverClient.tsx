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
            const imageUrl = typeof source === 'string' ? source : URL.createObjectURL(source)
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

    const draw = (e: React.MouseEvent | React.TouchEvent | any) => {
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
        <div className={cn(
            "relative w-full overflow-hidden transition-all duration-500",
            originalImage
                ? "fixed inset-0 z-[100] bg-zinc-50 dark:bg-zinc-950 h-[100dvh]"
                : "max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-20 pt-8"
        )}>
            {/* Header - Completely hidden in Mobile Editor Mode */}
            {!originalImage ? (
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl">
                        <span className="text-gradient font-black">{t.bgRemover.title}</span>
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto font-medium">{t.bgRemover.desc}</p>
                </div>
            ) : (
                /* Mobile Navigation Bar (Simplified) */
                <div className="sm:hidden flex items-center justify-between px-4 h-14 border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
                    <button onClick={() => setShowResetConfirm(true)} className="text-zinc-500 hover:text-red-500 transition-colors"><X className="w-6 h-6" /></button>
                    <span className="text-sm font-black italic uppercase tracking-wider">{t.bgRemover.title}</span>
                    <button onClick={() => { const l = document.createElement('a'); l.href = processedImage!; l.download = 'no-bg.png'; l.click(); }} className="text-primary font-black text-sm uppercase">{t.common.download}</button>
                </div>
            )}

            {!originalImage ? (
                /* Initial Upload View */
                <div className="glass-card rounded-[3rem] p-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px] shadow-2xl transition-all duration-700">
                    <div className="p-12 sm:p-20 text-center space-y-8 w-full group">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center mx-auto text-primary transition-all shadow-xl group-hover:scale-110">
                            <Upload className="w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-4xl font-black italic uppercase">{t.common.selectImage}</h3>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">{t.common.dropHere}</p>
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" />
                    </div>
                </div>
            ) : (
                /* Pro Mobile Editor UI - Fixed Height */
                <div className="flex flex-col sm:grid sm:grid-cols-12 h-[calc(100dvh-56px)] sm:h-auto overflow-hidden">

                    {/* Main Workspace (Center) - Occupies most space */}
                    <div className="relative flex-grow sm:col-span-8 lg:col-span-9 h-full min-h-0 bg-zinc-200 dark:bg-zinc-900 transition-all duration-500">
                        {/* Dynamic Background */}
                        <div className="absolute inset-0 transition-all duration-500" style={{
                            backgroundColor: bgType === 'color' ? bgColor : 'transparent',
                            background: bgType === 'gradient' ? bgGradient : 'none',
                            backgroundImage: bgType === 'image' && bgImage ? `url(${bgImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            {bgType === 'none' && <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />}
                        </div>

                        {/* Processing Overlay */}
                        {isProcessing && (
                            <div className="absolute inset-0 z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md flex flex-col items-center justify-center">
                                <div className="relative"><div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin border-t-primary" /><Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary animate-pulse" /></div>
                            </div>
                        )}

                        {/* Image Canvas Container */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-6 sm:p-12 select-none">
                            {processedImage && <img src={processedImage} alt="Main" className={cn("max-w-full max-h-full object-contain drop-shadow-2xl transition-all", isRefining && "opacity-60")} />}
                            {isRefining && canvasRef && <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={stopDrawing} className="absolute inset-0 w-full h-full cursor-crosshair touch-none" />}
                        </div>

                        {/* LEFT SIDEBAR (Category Icons) */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
                            {[
                                { id: 'background', icon: ImageIcon, label: t.bgRemover.backgroundColor },
                                { id: 'subject', icon: Sparkles, label: t.bgRemover.refineTitle }
                            ].map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={cn("flex flex-col items-center justify-center w-14 h-14 rounded-2xl shadow-2xl transition-all border", activeTab === tab.id ? "bg-primary border-primary text-white scale-110" : "bg-white/90 dark:bg-zinc-800/90 border-zinc-200 dark:border-zinc-700 text-zinc-500")}>
                                    <tab.icon className="w-5 h-5" />
                                    <span className="text-[8px] font-black uppercase mt-1 leading-none">{tab.id === 'background' ? 'BG' : 'REFINE'}</span>
                                </button>
                            ))}
                        </div>

                        {/* RIGHT SIDEBAR (Utility Icons) */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
                            <button onClick={undo} disabled={historyIndex <= 0} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/90 dark:bg-zinc-800/90 shadow-2xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 disabled:opacity-30"><Undo className="w-5 h-5" /></button>
                            <button onClick={() => { navigator.clipboard.writeText(`⚡ ${window.location.origin}${window.location.pathname}`); alert(t.common.copiedLink); }} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/90 dark:bg-zinc-800/90 shadow-2xl border border-zinc-200 dark:border-zinc-700 text-zinc-500"><Share2 className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Property Settings (Bottom Panel) - Zero scroll, fits what is needed */}
                    <div className="h-40 sm:h-auto sm:col-span-4 lg:col-span-3 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 z-50 overflow-hidden">
                        <div className="h-full p-4 sm:p-6 flex flex-col">
                            {activeTab === 'background' ? (
                                <div className="h-full flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                                        {[
                                            { id: 'none', icon: X, label: t.bgRemover.bgTransparent },
                                            { id: 'color', icon: ImageIcon, label: t.bgRemover.bgSolid },
                                            { id: 'gradient', icon: Sparkles, label: t.bgRemover.bgGradient },
                                            { id: 'image', icon: Layers, label: t.bgRemover.bgImage }
                                        ].map((item) => (
                                            <button key={item.id} onClick={() => setBgType(item.id as any)} className={cn("shrink-0 px-4 py-2 rounded-xl border-2 transition-all flex items-center gap-2", bgType === item.id ? "bg-primary border-primary text-white" : "bg-zinc-50 dark:bg-zinc-900 border-transparent text-muted-foreground")}>
                                                <item.icon className="w-4 h-4" /><span className="text-[10px] font-black uppercase whitespace-nowrap">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex-grow overflow-x-auto no-scrollbar flex items-center gap-2">
                                        {bgType === 'color' && ['#ffffff', '#000000', '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa', '#f472b6', '#94a3b8', '#52525b', '#262626'].map(col => (
                                            <button key={col} onClick={() => setBgColor(col)} className={cn("w-10 h-10 shrink-0 rounded-full border-4 transition-all", bgColor === col ? "border-primary scale-110" : "border-zinc-100 dark:border-zinc-800")} style={{ backgroundColor: col }} />
                                        ))}
                                        {bgType === 'gradient' && ['linear-gradient(to bottom right, #3b82f6, #8b5cf6)', 'linear-gradient(to bottom right, #f43f5e, #fb923c)', 'linear-gradient(to bottom right, #10b981, #3b82f6)'].map(grad => (
                                            <button key={grad} onClick={() => setBgGradient(grad)} className={cn("w-20 h-10 shrink-0 rounded-xl border-4 transition-all", bgGradient === grad ? "border-primary shadow-lg" : "border-transparent")} style={{ background: grad }} />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex gap-2">
                                        <button onClick={() => setIsRefining(!isRefining)} className={cn("flex-grow py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all shadow-xl", isRefining ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800 text-foreground")}>
                                            {isRefining ? <><Check className="w-4 h-4" /> APPLY</> : <><MousePointer2 className="w-4 h-4" /> START REFINE</>}
                                        </button>
                                    </div>
                                    {isRefining && (
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl shrink-0">
                                                <button onClick={() => setBrushMode('restore')} className={cn("p-2 rounded-lg transition-all", brushMode === 'restore' ? "bg-white text-primary" : "text-muted-foreground")}><Brush className="w-4 h-4" /></button>
                                                <button onClick={() => setBrushMode('erase')} className={cn("p-2 rounded-lg transition-all", brushMode === 'erase' ? "bg-white text-primary" : "text-muted-foreground")}><Eraser className="w-4 h-4" /></button>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-1">
                                                <div className="flex justify-between text-[8px] font-black text-muted-foreground"><span>SIZE</span><span>{brushSize}PX</span></div>
                                                <input type="range" min="5" max="100" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full cursor-pointer accent-primary" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

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
