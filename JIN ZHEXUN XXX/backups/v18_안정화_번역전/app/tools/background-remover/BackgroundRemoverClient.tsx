'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, Download, Loader2, Image as ImageIcon, Check, RefreshCw, Sparkles, Undo, Eraser, Brush, X, Share2, ZoomIn, ZoomOut, Maximize, Palette } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import { removeBackground } from '@imgly/background-removal'
import AdBanner from '@/components/AdBanner'

function BackgroundRemoverContent({ defaultTab }: { defaultTab?: 'subject' | 'background' | 'editor' | 'restoration' }) {
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
    const [isRendering, setIsRendering] = useState(false)
    const [isSampleLoading, setIsSampleLoading] = useState(false)

    const [activeTab, setActiveTab] = useState<'subject' | 'background' | 'editor' | 'restoration'>(defaultTab || 'subject')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [bgGradient, setBgGradient] = useState('linear-gradient(to bottom right, #3b82f6, #8b5cf6)')
    const [bgImage, setBgImage] = useState<string | null>(null)
    const [bgType, setBgType] = useState<'none' | 'color' | 'gradient' | 'image'>('none')
    const [showResetConfirm, setShowResetConfirm] = useState(false)
    const [zoom, setZoom] = useState(1)
    const [mobilePanel, setMobilePanel] = useState<'none' | 'modes' | 'settings'>('none')

    // Restoration states
    const [restorationOptions, setRestorationOptions] = useState({
        enhancement: false,
        upscale: '2x' as '1x' | '2x' | '4x',
        denoise: false,
        faceRestore: false,
        colorFix: false
    })

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

            if (activeTab !== 'restoration') {
                setIsProcessing(true)
                try {
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
                } finally {
                    setIsProcessing(false)
                }
            }
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

    const originalImgRef = useRef<HTMLImageElement | null>(null)
    const [canvasInitialized, setCanvasInitialized] = useState(false)

    useEffect(() => {
        if (originalImage) {
            const img = new Image()
            img.crossOrigin = "anonymous"
            img.src = originalImage
            img.onload = () => { originalImgRef.current = img }
        }
    }, [originalImage])

    useEffect(() => {
        if (!isRefining) {
            setCanvasInitialized(false)
        }
    }, [isRefining])

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isRefining || !canvasRef.current || !processedImage) return
        setIsDrawing(true)

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (ctx && (!canvasInitialized || canvas.width === 0)) {
            const img = new Image()
            img.crossOrigin = "anonymous"
            img.src = processedImage
            img.onload = () => {
                canvas.width = img.width
                canvas.height = img.height
                ctx.imageSmoothingEnabled = true
                ctx.imageSmoothingQuality = 'high'
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(img, 0, 0)
                setCanvasInitialized(true)
                performDraw(e)
            }
        } else {
            performDraw(e)
        }
    }

    const performDraw = (e: any) => {
        if (!isDrawing || !canvasRef.current) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const clientX = e.clientX ?? e.touches?.[0]?.clientX
        const clientY = e.clientY ?? e.touches?.[0]?.clientY

        if (clientX === undefined || clientY === undefined) return

        const x = (clientX - rect.left) * (canvas.width / rect.width)
        const y = (clientY - rect.top) * (canvas.height / rect.height)
        const radius = brushSize / (zoom || 1)

        if (brushMode === 'erase') {
            ctx.globalCompositeOperation = 'destination-out'
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fill()
        } else if (brushMode === 'restore' && originalImgRef.current) {
            ctx.save()
            ctx.globalCompositeOperation = 'source-over'
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.clip()
            ctx.drawImage(originalImgRef.current, 0, 0, canvas.width, canvas.height)
            ctx.restore()
        }
    }

    const draw = (e: React.MouseEvent | React.TouchEvent | any) => {
        if (isDrawing) performDraw(e)
    }

    const stopDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false)
            if (canvasRef.current) addToHistory(canvasRef.current.toDataURL())
        }
    }

    const handleRestoration = async () => {
        if (!processedImage) return
        setIsProcessing(true)
        setIsRendering(true)

        // 시뮬레이션을 위한 지연
        await new Promise(resolve => setTimeout(resolve, 2000))

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

            // 진짜 업스케일 로직: 선택된 배율에 따라 캔버스 크기 결정
            const scaleFactor = parseInt(restorationOptions.upscale) || 1
            canvas.width = img.width * scaleFactor
            canvas.height = img.height * scaleFactor

            if (ctx) {
                ctx.imageSmoothingEnabled = true
                ctx.imageSmoothingQuality = 'high'

                // 1. 전체 이미지 렌더링 (업스케일링)
                ctx.filter = restorationFilter
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                // 2. 추가 필터 중첩 제거 (SVG 필터에서 이미 처리됨)

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

    const restorationFilter = activeTab === 'restoration' ? [
        restorationOptions.denoise ? 'saturate(1.01) contrast(1.02) blur(0.1px)' : '',
        restorationOptions.faceRestore ? 'contrast(1.05) saturate(1.02)' : '',
        restorationOptions.colorFix ? 'saturate(1.08) contrast(1.03)' : '',
        restorationOptions.enhancement ? 'url(#ultimate-remaster)' : '',
        isProcessing ? 'blur(1px) grayscale(0.1)' : ''
    ].filter(Boolean).join(' ') : '';

    return (
        <div className={cn(
            "relative w-full overflow-hidden transition-all duration-500",
            originalImage
                ? "fixed top-16 inset-x-0 bottom-0 z-[40] bg-zinc-50 dark:bg-zinc-950"
                : "max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-20 pt-8"
        )}>
            {/* Header */}
            {!originalImage ? (
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl">
                        <span className="text-gradient font-black">
                            {defaultTab === 'restoration' ? t.imageRestorer.title : t.bgRemover.title}
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto font-medium">
                        {defaultTab === 'restoration' ? t.imageRestorer.desc : t.bgRemover.desc}
                    </p>
                </div>
            ) : (
                <div className="flex items-center justify-between px-4 sm:px-8 h-14 sm:h-16 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 border-none">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setShowResetConfirm(true)} className="p-2 rounded-xl hover:bg-red-50 text-zinc-500 hover:text-red-500 transition-all"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button>
                        <span className="hidden sm:inline-block h-6 w-[1px] bg-zinc-200 dark:bg-zinc-700 mx-2" />
                        <span className="text-xs sm:text-sm font-black italic uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                            {activeTab === 'restoration' ? t.navbar.imageRestorer : t.bgRemover.title}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            if (!processedImage) return;
                            const l = document.createElement('a');
                            l.href = processedImage;
                            l.download = activeTab === 'restoration' ? 'restored.png' : 'no-bg.png';
                            document.body.appendChild(l);
                            l.click();
                            document.body.removeChild(l);
                        }}
                        className="flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-black text-xs sm:text-sm uppercase shadow-2xl transition-all"
                    >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <span>{t.common.download}</span>
                    </button>
                </div>
            )}

            {!originalImage ? (
                <div className="glass-card rounded-[3rem] p-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[550px] shadow-2xl transition-all duration-700">
                    <div className="relative p-12 sm:p-20 text-center space-y-8 w-full group flex-grow flex flex-col items-center justify-center border-b border-zinc-50 dark:border-zinc-900">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto text-primary transition-all shadow-xl group-hover:scale-110">
                            <Upload className="w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-4xl font-black italic uppercase">{t.common.selectImage}</h3>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">{t.common.dropHere}</p>
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[60]" />
                    </div>
                    <div className="p-8 w-full border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-4">
                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{t.common.trySample}</p>
                        <div className="flex gap-4">
                            {[
                                "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=600&fit=crop&blur=15&q=40",
                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&sepia=80&q=40",
                                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&q=20"
                            ].map((url, i) => (
                                <button
                                    key={i}
                                    disabled={isSampleLoading}
                                    onClick={() => handleImageUpload(url)}
                                    className={cn("relative w-24 h-24 rounded-[1.5rem] overflow-hidden border-2 border-primary/20 hover:border-primary transition-all shadow-lg hover:scale-110 active:scale-95 disabled:opacity-50 group")}
                                >
                                    <img src={url} alt="Sample" className="w-full h-full object-cover transition-all duration-300" />
                                    <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-black/60 to-transparent text-[8px] text-white font-black uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        {i === 0 ? 'Blurry' : i === 1 ? 'Vintage' : 'Low Res'}
                                    </div>
                                    {isSampleLoading && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-white" /></div>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row h-[calc(100vh-128px)] overflow-hidden bg-zinc-100 dark:bg-zinc-950 relative">

                    {/* LEFT SIDEBAR: Desktop Only */}
                    <div className="hidden lg:flex w-24 xl:w-72 flex-shrink-0 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex-col items-center py-8 lg:px-6 gap-8 z-50 transition-all">
                        <div className="w-full space-y-2">
                            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2 mb-4">Edit Modes</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            {[
                                { id: 'background', icon: ImageIcon, label: '배경 변경', desc: '배경 색상 및 이미지 교체' },
                                { id: 'restoration', icon: RefreshCw, label: '사진 복구', desc: 'AI 화질 개선 및 리마스터' },
                                { id: 'subject', icon: Sparkles, label: '부분 리터칭', desc: '브러시로 직접 세밀 보정' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={cn(
                                        "flex items-center lg:gap-4 p-3 lg:p-4 rounded-2xl transition-all duration-300 group",
                                        activeTab === tab.id ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20" : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                                    )}
                                >
                                    <tab.icon className={cn("w-6 h-6 shrink-0", activeTab === tab.id ? "text-white" : "group-hover:scale-110 transition-transform")} />
                                    <div className="hidden lg:flex flex-col text-left">
                                        <span className="text-xs font-black uppercase leading-none">{tab.label}</span>
                                        <span className="text-[9px] font-bold opacity-60 mt-1">{tab.desc}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="mt-auto w-full lg:pt-8 lg:border-t border-zinc-100 dark:border-zinc-800">
                            <button onClick={() => setShowResetConfirm(true)} className="w-full flex items-center justify-center lg:justify-start lg:gap-4 p-3 lg:p-4 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all font-black text-[10px] lg:text-xs uppercase">
                                <X className="w-5 h-5 shrink-0" /><span className="hidden lg:block italic">Reset All</span>
                            </button>
                        </div>
                    </div>

                    {/* MAIN WORKSPACE */}
                    <div className="flex-grow relative flex flex-col overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                        <div className="flex-grow relative overflow-hidden select-none flex items-center justify-center">
                            {/* Dynamic Background */}
                            <div className="absolute inset-0 z-0" style={{
                                backgroundColor: bgType === 'color' ? bgColor : 'transparent',
                                background: bgType === 'gradient' ? bgGradient : 'none',
                                backgroundImage: bgType === 'image' && bgImage ? `url(${bgImage})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                {bgType === 'none' && <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />}
                            </div>

                            {/* Image Workspace */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 lg:p-12 overflow-hidden">
                                <div className="relative inline-block transition-all duration-700 ease-out" style={{ transform: `scale(${zoom})` }}>
                                    {processedImage && (
                                        <img
                                            src={processedImage}
                                            alt="Main"
                                            style={{ filter: restorationFilter }}
                                            className={cn(
                                                "max-w-full max-h-[65vh] lg:max-h-[70vh] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]",
                                                isRendering ? "opacity-0 scale-95" : "opacity-100 scale-100",
                                                isRefining && "opacity-40"
                                            )}
                                            onLoad={() => setIsRendering(false)}
                                        />
                                    )}
                                    {isRefining && canvasRef && (
                                        <canvas
                                            ref={canvasRef}
                                            onMouseDown={startDrawing}
                                            onMouseMove={draw}
                                            onMouseUp={stopDrawing}
                                            onMouseLeave={stopDrawing}
                                            onTouchStart={startDrawing}
                                            onTouchMove={draw}
                                            onTouchEnd={stopDrawing}
                                            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Floating Controls for Desktop Only */}
                            <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-50 items-center gap-1.5 p-1.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20">
                                <div className="flex items-center px-4 border-r border-zinc-200 dark:border-zinc-800">
                                    <span className="text-[11px] font-black w-14 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
                                </div>
                                <button onClick={() => setZoom(Math.max(0.1, zoom - 0.2))} className="p-3 rounded-2xl hover:bg-zinc-100 text-zinc-500"><ZoomOut className="w-5 h-5" /></button>
                                <button onClick={() => setZoom(1)} className="p-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-900"><Maximize className="w-5 h-5" /></button>
                                <button onClick={() => setZoom(Math.min(3, zoom + 0.2))} className="p-3 rounded-2xl hover:bg-zinc-100 text-zinc-500"><ZoomIn className="w-5 h-5" /></button>
                                <div className="w-[1px] h-6 bg-zinc-200 mx-2" />
                                <button onClick={undo} disabled={historyIndex <= 0} className="p-3 rounded-2xl hover:bg-zinc-100 text-zinc-500 disabled:opacity-20"><Undo className="w-5 h-5" /></button>
                                <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert(t.common.copiedLink); }} className="p-3 rounded-2xl hover:bg-zinc-100 text-zinc-500"><Share2 className="w-5 h-5" /></button>
                            </div>

                            {/* Processing Overlay */}
                            {isProcessing && (
                                <div className="absolute inset-0 z-[60] bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md flex flex-col items-center justify-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 border-4 border-primary/20 rounded-full animate-spin border-t-primary" />
                                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
                                    </div>
                                    <p className="mt-6 font-black italic uppercase tracking-widest text-primary text-sm animate-pulse">AI Processing...</p>
                                </div>
                            )}
                        </div>

                        {/* MOBILE INTEGRATED TOOLBOX (IMAGE BELOW) */}
                        <div className="lg:hidden flex flex-col bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 h-[380px] z-50 shrink-0">
                            {/* Tab Switcher */}
                            <div className="flex p-2 bg-zinc-50 dark:bg-zinc-800/50 gap-2 border-b border-zinc-200 dark:border-zinc-800">
                                {[
                                    { id: 'background', icon: ImageIcon, label: '배경' },
                                    { id: 'restoration', icon: RefreshCw, label: '복구' },
                                    { id: 'subject', icon: Sparkles, label: '리터칭' }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => { setActiveTab(tab.id as any); setIsRefining(false); }}
                                        className={cn(
                                            "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-[10px] transition-all",
                                            activeTab === tab.id ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg" : "text-zinc-400"
                                        )}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Compact Mobile Tools (Zoom/Undo) */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-50 dark:border-zinc-800/50">
                                <div className="flex items-center gap-1">
                                    <button onClick={() => setZoom(Math.max(0.1, zoom - 0.1))} className="p-2 text-zinc-400"><ZoomOut className="w-4 h-4" /></button>
                                    <span className="text-[10px] font-black w-10 text-center">{Math.round(zoom * 100)}%</span>
                                    <button onClick={() => setZoom(Math.min(3, zoom + 0.1))} className="p-2 text-zinc-400"><ZoomIn className="w-4 h-4" /></button>
                                    <button onClick={() => setZoom(1)} className="p-2 ml-1 text-zinc-400"><Maximize className="w-4 h-4" /></button>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={undo} disabled={historyIndex <= 0} className="p-2 text-zinc-400 disabled:opacity-20"><Undo className="w-4 h-4" /></button>
                                    <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert(t.common.copiedLink); }} className="p-2 text-zinc-400"><Share2 className="w-4 h-4" /></button>
                                </div>
                            </div>

                            {/* Scrollable Integrated Panels */}
                            <div className="flex-grow overflow-y-auto p-5 no-scrollbar">
                                {activeTab === 'background' ? (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-4 gap-2">
                                            {[
                                                { id: 'none', icon: X, label: "투명" },
                                                { id: 'color', icon: Palette, label: "색상" },
                                                { id: 'gradient', icon: Sparkles, label: "그라" },
                                                { id: 'image', icon: ImageIcon, label: "이미지" }
                                            ].map((item) => (
                                                <button key={item.id} onClick={() => setBgType(item.id as any)} className={cn("py-2 px-1 rounded-xl border-2 transition-all flex flex-col items-center gap-1", bgType === item.id ? "bg-primary border-primary text-white" : "bg-zinc-50 dark:bg-zinc-800 border-transparent text-zinc-500")}>
                                                    <item.icon className="w-4 h-4" /><span className="text-[8px] font-black uppercase">{item.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        {bgType === 'color' && (
                                            <div className="grid grid-cols-6 gap-2 animate-in fade-in slide-in-from-top-2">
                                                {['#ffffff', '#000000', '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa', '#f472b6', '#94a3b8', '#52525b', '#262626'].map(col => (
                                                    <button key={col} onClick={() => setBgColor(col)} className={cn("aspect-square rounded-lg border-2", bgColor === col ? "border-primary scale-110 shadow-md" : "border-zinc-100 dark:border-zinc-800")} style={{ backgroundColor: col }} />
                                                ))}
                                            </div>
                                        )}
                                        {bgType === 'gradient' && (
                                            <div className="grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2">
                                                {[
                                                    'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
                                                    'linear-gradient(to bottom right, #ef4444, #f59e0b)',
                                                    'linear-gradient(to bottom right, #10b981, #3b82f6)',
                                                    'linear-gradient(to bottom right, #8b5cf6, #ec4899)',
                                                    'linear-gradient(to bottom right, #f97316, #eab308)',
                                                    'linear-gradient(to bottom right, #22c55e, #10b981)'
                                                ].map(grad => (
                                                    <button key={grad} onClick={() => setBgGradient(grad)} className={cn("h-10 rounded-lg border-2", bgGradient === grad ? "border-primary scale-105 shadow-md" : "border-transparent")} style={{ background: grad }} />
                                                ))}
                                            </div>
                                        )}
                                        {bgType === 'image' && (
                                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                                                <button
                                                    onClick={() => document.getElementById('bg-upload-mobile')?.click()}
                                                    className="w-full py-3 bg-zinc-50 dark:bg-zinc-800 border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black"
                                                >
                                                    <Upload className="w-3 h-3" /> 배경 이미지 업로드
                                                </button>
                                                <input
                                                    id="bg-upload-mobile"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) setBgImage(URL.createObjectURL(file));
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ) : activeTab === 'restoration' ? (
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-2 gap-2">
                                            {['2x', '4x'].map(id => (
                                                <button key={id} onClick={() => setRestorationOptions(prev => ({ ...prev, upscale: id as any }))} className={cn("py-2.5 rounded-xl border-2 font-black text-[10px]", restorationOptions.upscale === id ? "bg-primary border-primary text-white" : "bg-zinc-50 dark:bg-zinc-800 border-transparent")}>
                                                    {id === '2x' ? '2배 확대' : '4배 초화질'}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-1 gap-1.5">
                                            {[
                                                { id: 'denoise', label: "노이즈 억제" },
                                                { id: 'faceRestore', label: "얼굴 세밀 복원" },
                                                { id: 'colorFix', label: "생동감 보정" },
                                                { id: 'enhancement', label: "초고화질 리마스터" }
                                            ].map(opt => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setRestorationOptions(prev => ({ ...prev, [opt.id]: !prev[opt.id as keyof typeof restorationOptions] }))}
                                                    className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 transition-all", restorationOptions[opt.id as keyof typeof restorationOptions] ? "bg-blue-600 border-blue-500 text-white" : "bg-zinc-50 dark:bg-zinc-800 border-transparent text-zinc-400")}
                                                >
                                                    <Check className={cn("w-3 h-3", restorationOptions[opt.id as keyof typeof restorationOptions] ? "opacity-100" : "opacity-20")} />
                                                    <span className="text-[10px] font-black">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={handleRestoration} disabled={isProcessing} className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-black text-xs shadow-xl">복원 시작하기</button>
                                    </div>
                                ) : (
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-2 gap-2">
                                            <button onClick={() => setBrushMode('restore')} className={cn("py-3 rounded-xl border-2 flex flex-col items-center gap-1", brushMode === 'restore' ? "bg-blue-600 border-blue-500 text-white" : "bg-zinc-50 dark:bg-zinc-800 border-transparent text-zinc-400")}>
                                                <Brush className="w-4 h-4" /><span className="text-[10px] font-black uppercase">복구</span>
                                            </button>
                                            <button onClick={() => setBrushMode('erase')} className={cn("py-3 rounded-xl border-2 flex flex-col items-center gap-1", brushMode === 'erase' ? "bg-red-500 border-red-500 text-white" : "bg-zinc-50 dark:bg-zinc-800 border-transparent text-zinc-400")}>
                                                <Eraser className="w-4 h-4" /><span className="text-[10px] font-black uppercase">삭제</span>
                                            </button>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-[10px] font-black text-zinc-400 mb-1">
                                                <span>브러시 크기</span>
                                                <span>{brushSize}px</span>
                                            </div>
                                            <input type="range" min="5" max="150" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full cursor-pointer accent-blue-600" />
                                        </div>
                                        <button onClick={() => setIsRefining(!isRefining)} className={cn("w-full py-4 rounded-xl font-black text-xs transition-all shadow-xl", isRefining ? "bg-green-500 text-white" : "bg-zinc-900 text-white")}>
                                            {isRefining ? '이미지 적용 완료' : '리터칭 모드 시작'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR: Desktop Only */}
                    <div className="hidden lg:flex w-80 xl:w-[400px] flex-shrink-0 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-50 no-scrollbar overflow-y-auto">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="space-y-1">
                                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Properties</h4>
                                <h2 className="text-xl font-black italic uppercase tracking-tighter">
                                    {activeTab === 'background' ? '배경 커스텀' : activeTab === 'restoration' ? '화질 리마스터' : '정밀 리터칭'}
                                </h2>
                            </div>
                            {activeTab === 'background' ? (
                                <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { id: 'none', icon: X, label: "투명 배경" },
                                            { id: 'color', icon: Palette, label: "색상 채우기" },
                                            { id: 'gradient', icon: Sparkles, label: "그라데이션" },
                                            { id: 'image', icon: ImageIcon, label: "이미지 배경" }
                                        ].map((item) => (
                                            <button key={item.id} onClick={() => setBgType(item.id as any)} className={cn("p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2", bgType === item.id ? "bg-primary border-primary text-white shadow-lg" : "bg-zinc-50 dark:bg-zinc-900 border-transparent text-muted-foreground")}>
                                                <item.icon className="w-5 h-5" /><span className="text-[9px] font-black uppercase">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {bgType === 'color' && (
                                        <div className="grid grid-cols-6 gap-3 animate-in fade-in slide-in-from-right-2">
                                            {['#ffffff', '#000000', '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa', '#f472b6', '#94a3b8', '#52525b', '#262626'].map(col => (
                                                <button key={col} onClick={() => setBgColor(col)} className={cn("aspect-square rounded-xl border-2 transition-all", bgColor === col ? "border-primary scale-110 shadow-lg ring-4 ring-primary/10" : "border-zinc-100 dark:border-zinc-900 hover:border-zinc-300")} style={{ backgroundColor: col }} />
                                            ))}
                                        </div>
                                    )}
                                    {bgType === 'gradient' && (
                                        <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-right-2">
                                            {[
                                                'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
                                                'linear-gradient(to bottom right, #ef4444, #f59e0b)',
                                                'linear-gradient(to bottom right, #10b981, #3b82f6)',
                                                'linear-gradient(to bottom right, #8b5cf6, #ec4899)',
                                                'linear-gradient(to bottom right, #f97316, #eab308)',
                                                'linear-gradient(to bottom right, #22c55e, #10b981)',
                                                'linear-gradient(to bottom right, #ff7e5f, #feb47b)',
                                                'linear-gradient(to bottom right, #00c6ff, #0072ff)'
                                            ].map(grad => (
                                                <button key={grad} onClick={() => setBgGradient(grad)} className={cn("h-16 rounded-2xl border-2 transition-all", bgGradient === grad ? "border-primary scale-105 shadow-xl ring-4 ring-primary/10" : "border-transparent hover:scale-102")} style={{ background: grad }} />
                                            ))}
                                        </div>
                                    )}
                                    {bgType === 'image' && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-right-2">
                                            <button
                                                onClick={() => document.getElementById('bg-upload-desktop')?.click()}
                                                className="w-full py-10 bg-zinc-50 dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group"
                                            >
                                                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <Upload className="w-6 h-6 text-primary" />
                                                </div>
                                                <span className="text-xs font-black uppercase text-zinc-500">배경 이미지 업로드</span>
                                            </button>
                                            <input
                                                id="bg-upload-desktop"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) setBgImage(URL.createObjectURL(file));
                                                }}
                                            />
                                            {bgImage && (
                                                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary shadow-lg animate-in zoom-in-95">
                                                    <img src={bgImage} alt="Custom BG" className="w-full h-full object-cover" />
                                                    <button onClick={() => setBgImage(null)} className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-lg backdrop-blur-md"><X className="w-4 h-4" /></button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : activeTab === 'restoration' ? (
                                <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">분해능 배율</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['2x', '4x'].map(id => (
                                                <button key={id} onClick={() => setRestorationOptions(prev => ({ ...prev, upscale: id as any }))} className={cn("p-4 rounded-2xl border-2 flex flex-col items-center gap-2", restorationOptions.upscale === id ? "bg-primary border-primary text-white" : "bg-zinc-50 dark:bg-zinc-900 border-transparent")}>
                                                    <Sparkles className="w-5 h-5" /><span className="text-[10px] font-black uppercase">{id === '2x' ? '2배 확대' : '4배 확대'}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { id: 'denoise', label: "노이즈 억제" },
                                            { id: 'faceRestore', label: "얼굴 세밀 복원" },
                                            { id: 'colorFix', label: "생동감 보정" },
                                            { id: 'enhancement', label: "초고화질 리마스터" }
                                        ].map(opt => (
                                            <button key={opt.id} onClick={() => setRestorationOptions(prev => ({ ...prev, [opt.id]: !prev[opt.id as keyof typeof restorationOptions] }))} className={cn("flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all w-full text-left", restorationOptions[opt.id as keyof typeof restorationOptions] ? "bg-blue-600 border-blue-500 text-white" : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800")}>
                                                <Check className={cn("w-4 h-4", restorationOptions[opt.id as keyof typeof restorationOptions] ? "opacity-100" : "opacity-20")} />
                                                <span className="text-xs font-black uppercase">{opt.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={handleRestoration} disabled={isProcessing} className="w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-3xl font-black text-sm shadow-2xl">복원 시작하기</button>
                                </div>
                            ) : (
                                <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                                    <div className="grid grid-cols-2 gap-3">
                                        <button onClick={() => setBrushMode('restore')} className={cn("p-4 rounded-2xl border-2 flex flex-col items-center gap-2", brushMode === 'restore' ? "bg-blue-600 border-blue-500 text-white shadow-lg" : "bg-zinc-50 dark:bg-zinc-900 border-transparent")}>
                                            <Brush className="w-5 h-5" /><span className="text-[10px] font-black uppercase">영역 복구</span>
                                        </button>
                                        <button onClick={() => setBrushMode('erase')} className={cn("p-4 rounded-2xl border-2 flex flex-col items-center gap-2", brushMode === 'erase' ? "bg-red-500 border-red-500 text-white shadow-lg" : "bg-zinc-50 dark:bg-zinc-900 border-transparent")}>
                                            <Eraser className="w-5 h-5" /><span className="text-[10px] font-black uppercase">영역 삭제</span>
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end mb-2">
                                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">브러시 크기</p>
                                            <span className="text-xs font-black italic">{brushSize}px</span>
                                        </div>
                                        <input type="range" min="5" max="150" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full cursor-pointer accent-blue-600" />
                                    </div>
                                    <button onClick={() => setIsRefining(!isRefining)} className={cn("w-full py-5 rounded-3xl font-black text-sm shadow-xl transition-all", isRefining ? "bg-green-500 text-white shadow-green-500/20" : "bg-zinc-900 text-white")}>
                                        {isRefining ? '이미지 적용 완료' : '리터칭 모드 시작'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* SVG Filters for Advanced Image Processing */}
            <svg className="absolute w-0 h-0 pointer-events-none">
                <defs>
                    <filter id="ultimate-remaster">
                        {/* Phase 1: High-Frequency Multi-Layer Extraction */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="fine-blur" />
                        <feComposite in="SourceGraphic" in2="fine-blur" operator="arithmetic" k2="1" k3="-1" result="fine-edges" />

                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="med-blur" />
                        <feComposite in="SourceGraphic" in2="med-blur" operator="arithmetic" k2="1" k3="-1" result="med-edges" />

                        {/* Phase 2: Natural Edge Combining */}
                        <feComposite in="fine-edges" in2="med-edges" operator="arithmetic" k2="1.2" k3="0.4" result="all-edges" />
                        <feColorMatrix in="all-edges" type="matrix"
                            values="1.2 0 0 0 0
                                    0 1.2 0 0 0
                                    0 0 1.2 0 0
                                    0 0 0 1 0" result="boosted-edges" />

                        {/* Phase 3: Sophisticated Synthesis (Balanced Gain) */}
                        <feComposite in="SourceGraphic" in2="boosted-edges" operator="arithmetic" k2="1" k3="1.8" result="final-sharp" />

                        {/* Phase 4: Natural Tone Calibration */}
                        <feComponentTransfer in="final-sharp">
                            <feFuncR type="gamma" exponent="0.95" />
                            <feFuncG type="gamma" exponent="0.95" />
                            <feFuncB type="gamma" exponent="0.95" />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>

            {/* MODALS */}
            {showResetConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <div className="glass-card p-10 rounded-[3rem] max-w-md w-full text-center space-y-8 shadow-2xl animate-in zoom-in-95">
                        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-[1.5rem] flex items-center justify-center mx-auto"><RefreshCw className="w-10 h-10" /></div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black italic uppercase">{t.bgRemover.resetConfirmTitle}</h3>
                            <p className="text-muted-foreground font-medium">{t.bgRemover.resetConfirmDesc}</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setShowResetConfirm(false)} className="flex-1 py-5 rounded-2xl bg-zinc-100 font-black uppercase text-sm">{t.common.cancel}</button>
                            <button onClick={() => { setOriginalImage(null); setProcessedImage(null); setHistory([]); setHistoryIndex(-1); setZoom(1); setIsRefining(false); setShowResetConfirm(false); }} className="flex-1 py-5 rounded-2xl bg-red-500 text-white font-black uppercase text-sm shadow-lg shadow-red-500/30">{t.common.success}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function BackgroundRemoverClient({ defaultTab }: { defaultTab?: 'subject' | 'background' | 'editor' | 'restoration' }) {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><Loader2 className="w-12 h-12 animate-spin text-primary opacity-20" /></div>}>
            <BackgroundRemoverContent defaultTab={defaultTab} />
        </Suspense>
    )
}
