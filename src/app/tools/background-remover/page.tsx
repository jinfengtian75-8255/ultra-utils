'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, Download, Loader2, Image as ImageIcon, Check, RefreshCw, Layers, Sparkles, Undo, MousePointer2, Eraser, Brush, X, Crop, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import { removeBackground } from '@imgly/background-removal'
import AdBanner from '@/components/AdBanner'

function BackgroundRemoverContent() {
    const { t } = useLanguage()
    const searchParams = useSearchParams()
    const [originalImage, setOriginalImage] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [currentStep, setCurrentStep] = useState<string>('')
    const [isMounted, setIsMounted] = useState(false)
    const [isRefining, setIsRefining] = useState(false)
    const [viewMode, setViewMode] = useState<'comparison' | 'editor'>('comparison')
    const [brushMode, setBrushMode] = useState<'restore' | 'erase'>('restore')
    const [brushSize, setBrushSize] = useState(30)
    const [isDrawing, setIsDrawing] = useState(false)

    // Pro Features State
    const [bgType, setBgType] = useState<'transparent' | 'color' | 'gradient' | 'image'>('transparent')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
    const [customBgImage, setCustomBgImage] = useState<string | null>(null)
    const [hasSticker, setHasSticker] = useState(false)
    const [stickerColor, setStickerColor] = useState('#ffffff')
    const [stickerWidth, setStickerWidth] = useState(15)
    const [zoom, setZoom] = useState(1)
    const [history, setHistory] = useState<string[]>([])
    const [showResetConfirm, setShowResetConfirm] = useState(false)

    const fileInputRef = useRef<HTMLInputElement>(null)
    const bgInputRef = useRef<HTMLInputElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const studioCanvasRef = useRef<HTMLCanvasElement>(null)
    const maskCanvasRef = useRef<HTMLCanvasElement>(null)
    const resultCanvasRef = useRef<HTMLCanvasElement>(null)
    const originalImgRef = useRef<HTMLImageElement | null>(null)
    const customBgImgRef = useRef<HTMLImageElement | null>(null)
    const [subjectPos, setSubjectPos] = useState({ x: 0, y: 0 })
    const [subjectScale, setSubjectScale] = useState(1)
    const [isDraggingSubject, setIsDraggingSubject] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [isMaskReady, setIsMaskReady] = useState(false)
    const [isShorts, setIsShorts] = useState(false)
    const [aspectRatio, setAspectRatio] = useState<'original' | 'vertical'>('original')

    useEffect(() => {
        setIsMounted(true)

        // Handle image from URL parameter (e.g., from YouTube Thumbnail tool)
        const src = searchParams.get('src')
        const isShortsParam = searchParams.get('shorts') === 'true'

        if (src) {
            setOriginalImage(src)
            if (isShortsParam) {
                setAspectRatio('vertical')
                setIsShorts(true)
            }
            const img = new Image()
            img.src = src
            img.onload = () => {
                originalImgRef.current = img
                processImage(src)
            }
        }
    }, [searchParams])

    const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
        let file: File | null = null
        if ('target' in e && e.target instanceof HTMLInputElement) {
            file = e.target.files?.[0] || null
        } else if ('dataTransfer' in e) {
            e.preventDefault()
            file = e.dataTransfer.files?.[0] || null
        }

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const dataUrl = event.target?.result as string
                setOriginalImage(dataUrl)

                // Pre-load original image for brush tool performance
                const img = new Image()
                img.src = dataUrl
                img.onload = () => {
                    originalImgRef.current = img
                }

                setProcessedImage(null)
                setIsRefining(false)
                setSubjectPos({ x: 0, y: 0 })
                setSubjectScale(1)
                setIsMaskReady(false)
                processImage(file!)
            }
            reader.readAsDataURL(file)
        }
    }, [t.common.error])

    function getStepLabel(step: string) {
        if (step.includes('fetch')) return t.bgRemover.stepFetch
        if (step.includes('segment')) return t.bgRemover.stepInference
        return t.bgRemover.stepModel
    }

    async function processImage(imageFile: File | string) {
        setIsProcessing(true)
        setProgress(0)
        setCurrentStep('model')

        try {
            if (processedImage && processedImage.startsWith('blob:')) {
                URL.revokeObjectURL(processedImage)
            }

            // @ts-ignore
            const blob = await removeBackground(imageFile, {
                progress: (item: string, current: number, total: number) => {
                    setCurrentStep(item)
                    const percent = Math.round((current / total) * 100)
                    setProgress(percent)
                },
                debug: false,
                model: 'isnet',
            })

            const url = URL.createObjectURL(blob)
            setProcessedImage(url)
            setHistory([url])
            setViewMode('editor')

            const img = new Image()
            img.src = url
            img.onload = () => {
                setupCanvases(img)
            }
        } catch (error) {
            console.error('Background removal failed:', error)
            alert(t.common.error)
        } finally {
            setIsProcessing(false)
            setCurrentStep('')
        }
    }

    function drawCheckerboard(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const size = 20
        for (let y = 0; y < height; y += size) {
            for (let x = 0; x < width; x += size) {
                ctx.fillStyle = (Math.floor(x / size) + Math.floor(y / size)) % 2 === 0 ? '#f8f8f8' : '#ffffff'
                ctx.fillRect(x, y, size, size)
            }
        }
    }

    async function renderStudio() {
        const studioCanvas = studioCanvasRef.current
        const maskCanvas = maskCanvasRef.current
        if (!studioCanvas || !maskCanvas || !processedImage) return

        const ctx = studioCanvas.getContext('2d', { alpha: true })
        if (!ctx) return

        const targetHeight = maskCanvas.height
        const targetWidth = aspectRatio === 'vertical' ? targetHeight * (9 / 16) : maskCanvas.width

        studioCanvas.width = targetWidth
        studioCanvas.height = targetHeight

        if (bgType === 'color') {
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, studioCanvas.width, studioCanvas.height)
        } else if (bgType === 'gradient') {
            const gradient = ctx.createLinearGradient(0, 0, studioCanvas.width, studioCanvas.height)
            gradient.addColorStop(0, '#667eea')
            gradient.addColorStop(1, '#764ba2')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, studioCanvas.width, studioCanvas.height)
        } else if (bgType === 'image' && customBgImgRef.current) {
            const bgImg = customBgImgRef.current
            const bgAspect = bgImg.width / bgImg.height
            const canvasAspect = studioCanvas.width / studioCanvas.height
            let drawW, drawH, drawX, drawY
            if (bgAspect > canvasAspect) {
                drawH = studioCanvas.height
                drawW = drawH * bgAspect
                drawX = (studioCanvas.width - drawW) / 2
                drawY = 0
            } else {
                drawW = studioCanvas.width
                drawH = drawW / bgAspect
                drawX = 0
                drawY = (studioCanvas.height - drawH) / 2
            }
            ctx.drawImage(bgImg, drawX, drawY, drawW, drawH)
        } else {
            drawCheckerboard(ctx, studioCanvas.width, studioCanvas.height)
        }

        ctx.save()
        const rect = studioCanvas.getBoundingClientRect()
        const renScaleX = studioCanvas.width / rect.width
        const renScaleY = studioCanvas.height / rect.height

        ctx.translate(subjectPos.x * renScaleX, subjectPos.y * renScaleY)
        ctx.translate(studioCanvas.width / 2, studioCanvas.height / 2)
        ctx.scale(subjectScale, subjectScale)
        ctx.translate(-maskCanvas.width / 2, -maskCanvas.height / 2)

        if (hasSticker) {
            ctx.save()
            const strokeDist = stickerWidth * (maskCanvas.width / 1000)
            const tempCanvas = document.createElement('canvas')
            tempCanvas.width = studioCanvas.width
            tempCanvas.height = studioCanvas.height
            const tCtx = tempCanvas.getContext('2d')
            if (tCtx) {
                tCtx.fillStyle = stickerColor
                for (let angle = 0; angle < 360; angle += 15) {
                    const rad = angle * Math.PI / 180
                    tCtx.drawImage(maskCanvas, strokeDist * Math.cos(rad), strokeDist * Math.sin(rad))
                }
                tCtx.globalCompositeOperation = 'source-in'
                tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
                ctx.drawImage(tempCanvas, 0, 0)
            }
            ctx.restore()
        }

        ctx.drawImage(maskCanvas, 0, 0)
        ctx.restore()
    }

    async function renderFinalResult() {
        const resultCanvas = resultCanvasRef.current
        const maskCanvas = maskCanvasRef.current
        if (!resultCanvas || !maskCanvas || !processedImage) return null

        const targetHeight = maskCanvas.height
        const targetWidth = aspectRatio === 'vertical' ? targetHeight * (9 / 16) : maskCanvas.width
        resultCanvas.width = targetWidth
        resultCanvas.height = targetHeight

        const ctx = resultCanvas.getContext('2d')
        if (!ctx) return null

        if (bgType === 'color') {
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, resultCanvas.width, resultCanvas.height)
        } else if (bgType === 'gradient') {
            const gradient = ctx.createLinearGradient(0, 0, resultCanvas.width, resultCanvas.height)
            gradient.addColorStop(0, '#667eea')
            gradient.addColorStop(1, '#764ba2')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, resultCanvas.width, resultCanvas.height)
        } else if (bgType === 'image' && customBgImgRef.current) {
            const bgImg = customBgImgRef.current
            const bgAspect = bgImg.width / bgImg.height
            const canvasAspect = resultCanvas.width / resultCanvas.height
            let drawW, drawH, drawX, drawY
            if (bgAspect > canvasAspect) {
                drawH = resultCanvas.height
                drawW = drawH * bgAspect
                drawX = (resultCanvas.width - drawW) / 2
                drawY = 0
            } else {
                drawW = resultCanvas.width
                drawH = drawW / bgAspect
                drawX = 0
                drawY = (resultCanvas.height - drawH) / 2
            }
            ctx.drawImage(bgImg, drawX, drawY, drawW, drawH)
        } else {
            ctx.clearRect(0, 0, resultCanvas.width, resultCanvas.height)
        }

        ctx.save()
        const rect = studioCanvasRef.current?.getBoundingClientRect()
        if (rect) {
            const renScaleX = resultCanvas.width / rect.width
            const renScaleY = resultCanvas.height / rect.height
            ctx.translate(subjectPos.x * renScaleX, subjectPos.y * renScaleY)
        }
        ctx.translate(resultCanvas.width * 0.5, resultCanvas.height * 0.5)
        ctx.scale(subjectScale, subjectScale)
        ctx.translate(-maskCanvas.width * 0.5, -maskCanvas.height * 0.5)

        if (hasSticker) {
            ctx.save()
            const strokeDist = stickerWidth * (maskCanvas.width / 1000)
            const tempCanvas = document.createElement('canvas')
            tempCanvas.width = resultCanvas.width
            tempCanvas.height = resultCanvas.height
            const tCtx = tempCanvas.getContext('2d')
            if (tCtx) {
                tCtx.fillStyle = stickerColor
                for (let angle = 0; angle < 360; angle += 15) {
                    const rad = angle * Math.PI / 180
                    tCtx.drawImage(maskCanvas, strokeDist * Math.cos(rad), strokeDist * Math.sin(rad))
                }
                tCtx.globalCompositeOperation = 'source-in'
                tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
                ctx.drawImage(tempCanvas, 0, 0)
            }
            ctx.restore()
        }

        ctx.drawImage(maskCanvas, 0, 0)
        return resultCanvas.toDataURL('image/png')
    }

    const downloadResult = async () => {
        const dataUrl = await renderFinalResult()
        if (dataUrl) {
            const link = document.createElement('a')
            link.href = dataUrl
            link.download = `creative_result_${Date.now()}.png`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    function setupCanvases(processedImg: HTMLImageElement) {
        const maskCanvas = maskCanvasRef.current
        if (!maskCanvas) return

        maskCanvas.width = processedImg.width
        maskCanvas.height = processedImg.height
        const ctx = maskCanvas.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, maskCanvas.width, maskCanvas.height)
        ctx.drawImage(processedImg, 0, 0)

        if (processedImg.width / processedImg.height > 1.5) {
            setIsShorts(true)
        } else {
            setIsShorts(false)
        }

        setIsMaskReady(true)

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'background_removed', {
                'event_category': 'tool_usage',
                'event_label': 'AI Background Remover'
            });
        }

        setTimeout(() => renderStudio(), 0)
    }

    function startDrawing(e: React.MouseEvent | React.TouchEvent) {
        if (isRefining) {
            setIsDrawing(true)
            draw(e)
        } else if (viewMode === 'editor') {
            setIsDraggingSubject(true)
            const studioCanvas = studioCanvasRef.current
            if (!studioCanvas) return
            const rect = studioCanvas.getBoundingClientRect()
            let clientX, clientY
            if ('touches' in e) {
                clientX = e.touches[0].clientX
                clientY = e.touches[0].clientY
            } else {
                clientX = e.clientX
                clientY = e.clientY
            }
            setDragStart({
                x: clientX - rect.left - subjectPos.x,
                y: clientY - rect.top - subjectPos.y
            })
        }
    }

    function stopDrawing() {
        setIsDrawing(false)
        setIsDraggingSubject(false)
        if (isRefining) {
            const maskCanvas = maskCanvasRef.current
            if (maskCanvas) {
                const dataUrl = maskCanvas.toDataURL('image/png')
                setHistory(prev => [...prev.slice(-10), dataUrl])
                setProcessedImage(dataUrl)
                renderStudio()
            }
        }
    }

    function undo() {
        if (history.length > 1) {
            const newHistory = [...history]
            newHistory.pop()
            const lastState = newHistory[newHistory.length - 1]
            setHistory(newHistory)
            setProcessedImage(lastState)

            const img = new Image()
            img.src = lastState
            img.onload = () => {
                const maskCanvas = maskCanvasRef.current
                if (maskCanvas) {
                    const ctx = maskCanvas.getContext('2d')
                    if (ctx) {
                        ctx.clearRect(0, 0, maskCanvas.width, maskCanvas.height)
                        ctx.drawImage(img, 0, 0)
                        renderStudio()
                    }
                }
            }
        }
    }

    function draw(e: React.MouseEvent | React.TouchEvent) {
        const studioCanvas = studioCanvasRef.current
        const maskCanvas = maskCanvasRef.current

        if (!originalImage || !studioCanvas || !maskCanvas) return
        const rect = studioCanvas.getBoundingClientRect()
        let clientX, clientY
        if ('touches' in e) {
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else {
            clientX = e.clientX
            clientY = e.clientY
        }

        if (isRefining) {
            if (isDrawing) {
                const scaleX = maskCanvas.width / rect.width
                const scaleY = maskCanvas.height / rect.height

                const canvasX = (clientX - rect.left) * scaleX
                const canvasY = (clientY - rect.top) * scaleY

                const ctx = maskCanvas.getContext('2d')
                if (!ctx) return

                ctx.lineJoin = 'round'
                ctx.lineCap = 'round'
                ctx.lineWidth = brushSize * scaleX

                if (brushMode === 'erase') {
                    ctx.globalCompositeOperation = 'destination-out'
                    ctx.beginPath()
                    ctx.arc(canvasX, canvasY, (brushSize * scaleX) / 2, 0, Math.PI * 2)
                    ctx.fill()
                } else {
                    ctx.globalCompositeOperation = 'source-over'
                    const originalImg = originalImgRef.current
                    if (!originalImg) return
                    ctx.save()
                    ctx.beginPath()
                    ctx.arc(canvasX, canvasY, (brushSize * scaleX) / 2, 0, Math.PI * 2)
                    ctx.clip()
                    ctx.drawImage(originalImg, 0, 0, maskCanvas.width, maskCanvas.height)
                    ctx.restore()
                }
                renderStudio()
            }
        } else if (isDraggingSubject) {
            setSubjectPos({
                x: clientX - rect.left - dragStart.x,
                y: clientY - rect.top - dragStart.y
            })
            renderStudio()
        }
    }

    useEffect(() => {
        if (processedImage && viewMode === 'editor' && isMaskReady) {
            renderStudio()
        }
    }, [processedImage, viewMode, isMaskReady, bgType, bgColor, bgGradient, customBgImage, hasSticker, stickerColor, stickerWidth, subjectPos, subjectScale])



    if (!isMounted) return null

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-20 px-4">
            {/* Hidden canvases for internal processing */}
            <canvas ref={maskCanvasRef} className="hidden" />
            <canvas ref={resultCanvasRef} className="hidden" />

            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient">AI Creative Studio</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.bgRemover.desc}
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 items-start">
                {/* Main Content Area */}
                <div className="flex-1 w-full space-y-6">
                    <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileUpload}
                        onClick={() => !isProcessing && !isRefining && !originalImage && fileInputRef.current?.click()}
                        className={cn(
                            "glass-card rounded-[3rem] p-4 border-2 border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center justify-center min-h-[650px] relative overflow-hidden group/result shadow-2xl transition-all duration-500",
                            !processedImage && !isProcessing && "bg-zinc-50/50 dark:bg-zinc-900/50 cursor-pointer",
                            isRefining && "cursor-none"
                        )}
                        style={{
                            backgroundImage: processedImage && bgType === 'transparent' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%238882\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%238882\'/%3E%3C/svg%3E")' : 'none',
                            backgroundColor: bgType === 'color' ? bgColor : 'transparent',
                            background: bgType === 'gradient' ? bgGradient : undefined
                        }}
                    >
                        {isProcessing ? (
                            <div className="flex flex-col items-center space-y-8 p-12 w-full max-w-sm">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full border-8 border-zinc-100 dark:border-zinc-800 flex items-center justify-center">
                                        <span className="text-3xl font-black">{progress}%</span>
                                    </div>
                                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                                        <circle
                                            cx="64" cy="64" r="56"
                                            fill="transparent"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            strokeDasharray={351.8}
                                            strokeDashoffset={351.8 * (1 - progress / 100)}
                                            className="text-primary transition-all duration-500"
                                        />
                                    </svg>
                                </div>
                                <p className="text-center font-black text-xl">{getStepLabel(currentStep)}</p>
                            </div>
                        ) : processedImage ? (
                            <div className="w-full h-full flex flex-col">
                                {/* Mode Selector */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex bg-white/90 dark:bg-zinc-900/90 backdrop-blur p-1 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg">
                                    <button
                                        onClick={() => setViewMode('comparison')}
                                        className={cn(
                                            "px-4 py-2 rounded-xl text-sm font-bold transition-all",
                                            viewMode === 'comparison' ? "bg-primary text-white shadow-md" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                        )}
                                    >
                                        {t.bgRemover.comparison}
                                    </button>
                                    <button
                                        onClick={() => setViewMode('editor')}
                                        className={cn(
                                            "px-4 py-2 rounded-xl text-sm font-bold transition-all",
                                            viewMode === 'editor' ? "bg-primary text-white shadow-md" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                        )}
                                    >
                                        Studio
                                    </button>
                                </div>

                                <div className="flex-1 flex items-center justify-center p-8">
                                    {viewMode === 'comparison' ? (
                                        <div className="grid grid-cols-2 gap-8 w-full h-full">
                                            <div className="relative group/original">
                                                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur">ORIGINAL</div>
                                                <img src={originalImage!} alt="Original" className="w-full h-full object-contain rounded-2xl shadow-xl" />
                                            </div>
                                            <div className="relative group/result">
                                                <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur">RESULT</div>
                                                <img src={processedImage} alt="Result" className="w-full h-full object-contain rounded-2xl shadow-xl" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="relative w-full h-full flex items-center justify-center p-4"
                                            style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
                                        >
                                            <canvas
                                                ref={studioCanvasRef}
                                                onMouseDown={startDrawing}
                                                onMouseMove={draw}
                                                onMouseUp={stopDrawing}
                                                onMouseLeave={stopDrawing}
                                                onTouchStart={startDrawing}
                                                onTouchMove={draw}
                                                onTouchEnd={stopDrawing}
                                                className={cn(
                                                    "w-full h-full object-contain shadow-2xl transition-all bg-white dark:bg-zinc-800 rounded-2xl",
                                                    "cursor-default"
                                                )}
                                                style={{ touchAction: 'none' }}
                                            />

                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center space-y-6">
                                <div className="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform duration-500">
                                    <Upload className="w-10 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">{t.common.selectImage}</h3>
                                    <p className="text-muted-foreground font-medium">{t.bgRemover.dropMsg}</p>
                                </div>
                            </div>
                        )}

                        {/* Top Controls Overlay */}
                        {processedImage && !isProcessing && (
                            <div className="absolute top-6 right-6 flex items-center gap-3">
                                {!isRefining && (
                                    <button
                                        onClick={() => setIsRefining(true)}
                                        className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2 font-bold group"
                                    >
                                        <Brush className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                                        {t.bgRemover.brushRestore}
                                    </button>
                                )}
                                <button
                                    onClick={() => setShowResetConfirm(true)}
                                    className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform text-red-500 font-bold"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {/* Confirmation Dialog Overlay */}
                        {showResetConfirm && (
                            <div className="absolute inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center p-6 pb-20">
                                <div className="glass-card p-8 rounded-[2rem] max-w-sm w-full space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 border-2 border-primary/20 bg-white">
                                    <h3 className="text-2xl font-black text-center">정말 초기화할까요?</h3>
                                    <p className="text-muted-foreground text-center font-medium">지금까지 작업한 내용이 모두 사라집니다.</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setShowResetConfirm(false)}
                                            className="py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 font-bold hover:bg-zinc-200 transition-colors"
                                        >
                                            취소
                                        </button>
                                        <button
                                            onClick={() => {
                                                setProcessedImage(null)
                                                setOriginalImage(null)
                                                setIsRefining(false)
                                                setShowResetConfirm(false)
                                            }}
                                            className="py-4 rounded-2xl bg-red-500 text-white font-bold shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors"
                                        >
                                            초기화
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Zoom Controls Overlay */}
                        {processedImage && !isProcessing && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-2 rounded-2xl shadow-xl flex items-center gap-4">
                                <button onClick={() => setZoom(z => Math.max(0.5, z - 0.2))} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                                    <MousePointer2 className="w-4 h-4" />
                                </button>
                                <span className="font-bold text-sm min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
                                <button onClick={() => setZoom(z => Math.min(3, z + 0.2))} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                                    <Sparkles className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
                </div>

                {/* Pro Settings Sidebar */}
                {processedImage && !isProcessing && (
                    <div className="w-full xl:w-80 space-y-6 animate-in slide-in-from-right-8 duration-500">
                        {isRefining ? (
                            <div className="glass-card p-6 rounded-[2.5rem] space-y-6 shadow-xl border-2 border-primary/20">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-black text-xl flex items-center gap-3">
                                        <Brush className="w-6 h-6 text-primary" />
                                        {t.bgRemover.refineTitle}
                                    </h3>
                                    <button onClick={undo} disabled={history.length <= 1} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full disabled:opacity-30">
                                        <Undo className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setBrushMode('restore')}
                                        className={cn(
                                            "py-3 rounded-2xl font-bold flex flex-col items-center gap-2 border-2 transition-all",
                                            brushMode === 'restore'
                                                ? "bg-primary/10 border-primary text-primary"
                                                : "border-zinc-100 dark:border-zinc-800"
                                        )}
                                    >
                                        <Brush className="w-5 h-5" />
                                        <span className="text-xs">{t.bgRemover.brushRestore}</span>
                                    </button>
                                    <button
                                        onClick={() => setBrushMode('erase')}
                                        className={cn(
                                            "py-3 rounded-2xl font-bold flex flex-col items-center gap-2 border-2 transition-all",
                                            brushMode === 'erase'
                                                ? "bg-red-500/10 border-red-500 text-red-500"
                                                : "border-zinc-100 dark:border-zinc-800"
                                        )}
                                    >
                                        <Eraser className="w-5 h-5" />
                                        <span className="text-xs">{t.bgRemover.brushErase}</span>
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-bold">
                                        <span>{t.bgRemover.brushSize}</span>
                                        <span>{brushSize}px</span>
                                    </div>
                                    <input
                                        type="range" min="5" max="100" value={brushSize}
                                        onChange={(e) => setBrushSize(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                <button
                                    onClick={() => setIsRefining(false)}
                                    className="w-full py-4 rounded-2xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-black hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                                >
                                    <Check className="w-5 h-5" />
                                    {t.bgRemover.applyRefine}
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="glass-card p-6 rounded-[2.5rem] space-y-8 shadow-xl">
                                    {/* Subject Transformation Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                <MousePointer2 className="w-4 h-4" /> 객체 크기 조절
                                            </h4>
                                            <button
                                                onClick={() => {
                                                    setSubjectScale(1)
                                                    setSubjectPos({ x: 0, y: 0 })
                                                    renderStudio()
                                                }}
                                                className="text-[10px] font-bold text-primary hover:underline"
                                            >
                                                위치/크기 초기화
                                            </button>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-xs font-bold">
                                                <span className="text-muted-foreground">확대/축소</span>
                                                <span className="text-primary">{Math.round(subjectScale * 100)}%</span>
                                            </div>
                                            <input
                                                type="range" min="0.1" max="3" step="0.05" value={subjectScale}
                                                onChange={(e) => {
                                                    setSubjectScale(parseFloat(e.target.value))
                                                    renderStudio()
                                                }}
                                                className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                            />
                                            <p className="text-[10px] text-muted-foreground font-medium">
                                                * 마우스로 사진을 직접 드래그해서 위치를 옮길 수 있습니다.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                                    {/* YouTube Shorts Support */}
                                    {isShorts && (
                                        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-4 animate-in fade-in slide-in-from-top-2">
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                <Sparkles className="w-4 h-4" /> 쇼츠(Shorts) 감지됨
                                            </div>
                                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                                유튜브 쇼츠 썸네일에서 좌우 배경을 제거하고 세로형(9:16)으로 즉시 변환할 수 있습니다.
                                            </p>
                                            <button
                                                onClick={() => {
                                                    const newMode = aspectRatio === 'vertical' ? 'original' : 'vertical'
                                                    setAspectRatio(newMode)
                                                    if (newMode === 'vertical') {
                                                        setSubjectScale(1) // Normal scale in vertical
                                                    }
                                                    setSubjectPos({ x: 0, y: 0 })
                                                    setTimeout(() => renderStudio(), 0)
                                                }}
                                                className={cn(
                                                    "w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all",
                                                    aspectRatio === 'vertical' ? "bg-primary/10 text-primary border border-primary/20" : "bg-primary text-white"
                                                )}
                                            >
                                                <Crop className="w-4 h-4" />
                                                {aspectRatio === 'vertical' ? "원본 가로형으로 되돌리기" : "세로형(9:16)으로 자동 전환하기"}
                                            </button>
                                        </div>
                                    )}

                                    {/* Sticker Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" /> {t.bgRemover.stickerEffect}
                                            </h4>
                                            <button
                                                onClick={() => setHasSticker(!hasSticker)}
                                                className={cn(
                                                    "w-12 h-6 rounded-full transition-colors relative",
                                                    hasSticker ? "bg-primary" : "bg-zinc-200 dark:bg-zinc-800"
                                                )}
                                            >
                                                <div className={cn(
                                                    "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform",
                                                    hasSticker && "translate-x-6"
                                                )} />
                                            </button>
                                        </div>

                                        {hasSticker && (
                                            <div className="space-y-4 animate-in fade-in zoom-in-95">
                                                <div className="flex gap-2">
                                                    {['#ffffff', '#000000', '#facc15', '#f87171', '#60a5fa'].map(color => (
                                                        <button
                                                            key={color}
                                                            onClick={() => setStickerColor(color)}
                                                            className={cn(
                                                                "w-8 h-8 rounded-full border-2 transition-all",
                                                                stickerColor === color ? "border-primary scale-110" : "border-transparent"
                                                            )}
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                </div>
                                                <input
                                                    type="range" min="1" max="40" value={stickerWidth}
                                                    onChange={(e) => setStickerWidth(parseInt(e.target.value))}
                                                    className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Background Section */}
                                    <div className="space-y-4">
                                        <h4 className="font-black text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                            <Layers className="w-4 h-4" /> {t.bgRemover.backgroundColor}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { id: 'transparent', icon: ImageIcon, label: t.bgRemover.bgTransparent },
                                                { id: 'color', icon: Brush, label: t.bgRemover.bgSolid },
                                                { id: 'gradient', icon: Sparkles, label: t.bgRemover.bgGradient },
                                                { id: 'image', icon: Upload, label: t.bgRemover.bgImage }
                                            ].map(item => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => {
                                                        if (item.id === 'image') {
                                                            if (customBgImage) setBgType('image')
                                                            bgInputRef.current?.click()
                                                        } else {
                                                            setBgType(item.id as any)
                                                        }
                                                    }}
                                                    className={cn(
                                                        "p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all",
                                                        bgType === item.id ? "border-primary bg-primary/5 text-primary" : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                                    )}
                                                >
                                                    <item.icon className="w-4 h-4" />
                                                    <span className="text-[10px] font-bold">{item.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <input
                                            type="file" ref={bgInputRef} accept="image/*" className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                    const reader = new FileReader()
                                                    reader.onload = (ev) => {
                                                        const url = ev.target?.result as string
                                                        setCustomBgImage(url)
                                                        const img = new Image()
                                                        img.src = url
                                                        img.onload = () => {
                                                            customBgImgRef.current = img
                                                            setBgType('image')
                                                            // Clear input value so same file can be selected again
                                                            e.target.value = ''
                                                        }
                                                    }
                                                    reader.readAsDataURL(file)
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-stretch gap-3">
                                        <button
                                            onClick={downloadResult}
                                            className="flex-1 py-5 rounded-[2rem] bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <Download className="w-6 h-6 shrink-0" />
                                            <span className="truncate">{t.bgRemover.downloadReady}</span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                const text = `Check out this awesome AI Background Remover! ⚡\n${window.location.origin}${window.location.pathname}`;
                                                navigator.clipboard.writeText(text);
                                                alert(t.common.copiedLink);
                                            }}
                                            className="w-16 sm:w-20 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shrink-0"
                                            title={t.common.shareResult}
                                        >
                                            <Share2 className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>



            {/* Feature Highlights - Pre-process state */}
            {!processedImage && !isProcessing && (
                <div className="grid md:grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    {[
                        { icon: Sparkles, title: "Edge Perfect", desc: "Fine hair and edges are preserved using advanced AI." },
                        { icon: MousePointer2, title: "Precision Control", desc: "Use the manual brush to perfectly refine any tricky areas." },
                        { icon: Layers, title: "Professional Backgrounds", desc: "Instantly create ID photos or YouTube thumbnails with one click." }
                    ].map((feature, i) => (
                        <div key={i} className="glass-card p-8 rounded-[2.5rem] space-y-4 hover:scale-105 transition-transform">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h4 className="font-bold text-xl">{feature.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            )}

            <AdBanner slot="tool-bottom-banner" useAdSense={true} />

            {/* SEO Guide & FAQ Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient">{t.bgRemover.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.bgRemover.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.bgRemover.guide.sections.map((section, idx) => (
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
                        {t.bgRemover.guide.faq.map((item, idx) => (
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

export default function BackgroundRemoverPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        }>
            <BackgroundRemoverContent />
        </Suspense>
    )
}
