'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Upload, Download, Loader2, Image as ImageIcon, Check, RefreshCw, Layers, Sparkles, Undo, Redo, MousePointer2, Eraser, Brush, X, Crop, Share2, Type, Maximize, ImagePlus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import { removeBackground } from '@imgly/background-removal'
import AdBanner from '@/components/AdBanner'

// --- Interfaces ---

interface IDStandard {
    id: string;
    name: string;
    width: number; // in mm
    height: number; // in mm
    label: string;
}

interface TextLayer {
    id: string;
    text: string;
    x: number;
    y: number;
    fontSize: number;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    fontWeight: string;
}

interface DesignTemplate {
    id: string;
    label: string;
    bgType: 'color' | 'gradient' | 'image';
    bgColor?: string;
    bgGradient?: string;
    bgImage?: string;
    aspectRatio: 'original' | 'vertical';
    subjectScale: number;
    subjectPos: { x: number; y: number };
    text?: string;
}

interface BatchItem {
    id: string;
    file: File;
    status: 'pending' | 'processing' | 'done' | 'error';
    result?: string;
}

interface StudioState {
    processedImage: string;
    subjectPos: { x: number; y: number };
    subjectScale: number;
    hasSticker: boolean;
    stickerColor: string;
    stickerWidth: number;
    bgType: 'transparent' | 'color' | 'gradient' | 'image';
    bgColor: string;
    bgGradient: string;
    customBgImage: string | null;
    aspectRatio: 'original' | 'vertical';
    textLayers: TextLayer[];
    subjectBrightness: number;
    subjectContrast: number;
    subjectSaturation: number;
    globalFilter: string;
}

// --- Main Content Component ---

function BackgroundRemoverContent() {
    const { t } = useLanguage()
    const searchParams = useSearchParams()

    // --- State ---

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

    const [bgType, setBgType] = useState<'transparent' | 'color' | 'gradient' | 'image'>('transparent')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
    const [customBgImage, setCustomBgImage] = useState<string | null>(null)
    const [hasSticker, setHasSticker] = useState(false)
    const [stickerColor, setStickerColor] = useState('#ffffff')
    const [stickerWidth, setStickerWidth] = useState(15)
    const [zoom, setZoom] = useState(1)

    const [history, setHistory] = useState<StudioState[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [showResetConfirm, setShowResetConfirm] = useState(false)
    const [textLayers, setTextLayers] = useState<TextLayer[]>([])
    const [activeTextId, setActiveTextId] = useState<string | null>(null)
    const [isDraggingText, setIsDraggingText] = useState(false)
    const [subjectBrightness, setSubjectBrightness] = useState(100)
    const [subjectContrast, setSubjectContrast] = useState(100)
    const [subjectSaturation, setSubjectSaturation] = useState(100)
    const [globalFilter, setGlobalFilter] = useState('none')
    const [bgLoadCount, setBgLoadCount] = useState(0)
    const [batchQueue, setBatchQueue] = useState<BatchItem[]>([])
    const [isBatchMode, setIsBatchMode] = useState(false)

    const [isIDMode, setIsIDMode] = useState(false)
    const [activeIDStandard, setActiveIDStandard] = useState<IDStandard | null>(null)
    const [showIDGuide, setShowIDGuide] = useState(true)

    const [subjectPos, setSubjectPos] = useState({ x: 0, y: 0 })
    const [subjectScale, setSubjectScale] = useState(1)
    const [isDraggingSubject, setIsDraggingSubject] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [isMaskReady, setIsMaskReady] = useState(false)
    const [aspectRatio, setAspectRatio] = useState<'original' | 'vertical'>('original')

    // --- Refs ---

    const fileInputRef = useRef<HTMLInputElement>(null)
    const bgInputRef = useRef<HTMLInputElement>(null)
    const studioCanvasRef = useRef<HTMLCanvasElement>(null)
    const maskCanvasRef = useRef<HTMLCanvasElement>(null)
    const resultCanvasRef = useRef<HTMLCanvasElement>(null)
    const originalImgRef = useRef<HTMLImageElement | null>(null)
    const customBgImgRef = useRef<HTMLImageElement | null>(null)

    // --- Constants ---

    const ID_STANDARDS: IDStandard[] = [
        { id: 'passport', name: '여권 (Passport)', width: 35, height: 45, label: '3.5 x 4.5 cm' },
        { id: 'identification', name: '반명함 (ID)', width: 30, height: 40, label: '3 x 4 cm' },
        { id: 'us-visa', name: '미국 비자 (Visa)', width: 51, height: 51, label: '5.1 x 5.1 cm' },
    ]

    const PRESET_BGS = [
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80',
        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80',
        'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&q=80',
        'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80',
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80',
        'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800&q=80'
    ]

    const DESIGN_TEMPLATES: DesignTemplate[] = [
        { id: 'insta', label: t.bgRemover.templateInsta, bgType: 'gradient', bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', aspectRatio: 'vertical', subjectScale: 1.2, subjectPos: { x: 0, y: 50 }, text: 'TODAY VIBE' },
        { id: 'youtube', label: t.bgRemover.templateYoutube, bgType: 'image', bgImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80', aspectRatio: 'original', subjectScale: 1.5, subjectPos: { x: -100, y: 0 }, text: 'MEGA TREND!' },
        { id: 'product', label: t.bgRemover.templateProduct, bgType: 'color', bgColor: '#f8fafc', aspectRatio: 'original', subjectScale: 0.8, subjectPos: { x: 0, y: 0 }, text: 'SHOP NOW' }
    ]

    // --- Core Logic ---

    const pushHistory = useCallback((currentProcessedImage?: string) => {
        const activeImg = currentProcessedImage || processedImage
        if (!activeImg) return

        const newState: StudioState = {
            processedImage: activeImg,
            subjectPos,
            subjectScale,
            hasSticker,
            stickerColor,
            stickerWidth,
            bgType,
            bgColor,
            bgGradient,
            customBgImage,
            aspectRatio,
            textLayers: [...textLayers],
            subjectBrightness,
            subjectContrast,
            subjectSaturation,
            globalFilter
        }

        setHistory(prev => {
            const newHist = prev.slice(0, historyIndex + 1)
            // Avoid adding identical states
            if (newHist.length > 0) {
                const last = newHist[newHist.length - 1]
                if (JSON.stringify(last) === JSON.stringify(newState)) return prev
            }
            const updated = [...newHist, newState].slice(-30)
            setHistoryIndex(updated.length - 1)
            return updated
        })
    }, [processedImage, subjectPos, subjectScale, hasSticker, stickerColor, stickerWidth, bgType, bgColor, bgGradient, customBgImage, aspectRatio, textLayers, subjectBrightness, subjectContrast, subjectSaturation, globalFilter, historyIndex])

    const applyState = useCallback((state: StudioState) => {
        setProcessedImage(state.processedImage)
        setSubjectPos(state.subjectPos)
        setSubjectScale(state.subjectScale)
        setHasSticker(state.hasSticker)
        setStickerColor(state.stickerColor)
        setStickerWidth(state.stickerWidth)
        setBgType(state.bgType)
        setBgColor(state.bgColor)
        setBgGradient(state.bgGradient)
        setCustomBgImage(state.customBgImage)
        setAspectRatio(state.aspectRatio)
        setTextLayers(state.textLayers || [])
        setSubjectBrightness(state.subjectBrightness)
        setSubjectContrast(state.subjectContrast)
        setSubjectSaturation(state.subjectSaturation)
        setGlobalFilter(state.globalFilter)

        const img = new Image()
        img.src = state.processedImage
        img.onload = () => {
            const mc = maskCanvasRef.current
            if (mc) {
                const ctx = mc.getContext('2d')
                if (ctx) {
                    ctx.clearRect(0, 0, mc.width, mc.height)
                    ctx.drawImage(img, 0, 0)
                }
            }
        }
    }, [])

    const undo = useCallback(() => {
        if (historyIndex > 0) {
            const nextIdx = historyIndex - 1
            setHistoryIndex(nextIdx)
            applyState(history[nextIdx])
        }
    }, [history, historyIndex, applyState])

    const redo = useCallback(() => {
        if (historyIndex < history.length - 1) {
            const nextIdx = historyIndex + 1
            setHistoryIndex(nextIdx)
            applyState(history[nextIdx])
        }
    }, [history, historyIndex, applyState])

    // --- Image Processing ---

    const processImage = async (file: File | string) => {
        setIsProcessing(true)
        setProgress(0)
        setCurrentStep('model')
        try {
            const blob = await removeBackground(file, {
                progress: (item, current, total) => {
                    setCurrentStep(item)
                    setProgress(Math.round((current / total) * 100))
                },
                model: 'isnet'
            })
            const url = URL.createObjectURL(blob)
            setProcessedImage(url)
            setViewMode('editor')
            const img = new Image()
            img.src = url
            img.onload = () => {
                setupCanvases(img)
                setTimeout(() => pushHistory(url), 200)
            }
            return url
        } catch (err) {
            console.error(err)
            alert(t.common.error)
            return null
        } finally {
            setIsProcessing(false)
        }
    }

    const setupCanvases = (img: HTMLImageElement) => {
        const mc = maskCanvasRef.current
        if (!mc) return
        mc.width = img.width
        mc.height = img.height
        const ctx = mc.getContext('2d')
        if (ctx) {
            ctx.clearRect(0, 0, mc.width, mc.height)
            ctx.drawImage(img, 0, 0)
        }
        setIsMaskReady(true)
    }

    // --- Rendering Logic ---

    const renderStudio = useCallback(() => {
        const sc = studioCanvasRef.current
        const mc = maskCanvasRef.current
        if (!sc || !mc || !processedImage) return
        const ctx = sc.getContext('2d')
        if (!ctx) return

        const targetH = mc.height
        const targetW = aspectRatio === 'vertical' ? targetH * (9 / 16) : mc.width
        sc.width = targetW
        sc.height = targetH

        // Draw Background
        if (isIDMode) {
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(0, 0, targetW, targetH)
        } else if (bgType === 'color') {
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, targetW, targetH)
        } else if (bgType === 'gradient') {
            const g = ctx.createLinearGradient(0, 0, targetW, targetH)
            g.addColorStop(0, '#667eea'); g.addColorStop(1, '#764ba2')
            ctx.fillStyle = g
            ctx.fillRect(0, 0, targetW, targetH)
        } else if (bgType === 'image' && customBgImgRef.current) {
            const img = customBgImgRef.current
            const aspect = img.width / img.height
            const canvasAspect = targetW / targetH
            let dw, dh, dx, dy
            if (aspect > canvasAspect) {
                dh = targetH; dw = dh * aspect; dx = (targetW - dw) / 2; dy = 0
            } else {
                dw = targetW; dh = dw / aspect; dx = 0; dy = (targetH - dh) / 2
            }
            ctx.drawImage(img, dx, dy, dw, dh)
        } else {
            // Checkerboard
            const sz = 20
            for (let y = 0; y < targetH; y += sz) {
                for (let x = 0; x < targetW; x += sz) {
                    ctx.fillStyle = (Math.floor(x / sz) + Math.floor(y / sz)) % 2 === 0 ? '#f8f8f8' : '#ffffff'
                    ctx.fillRect(x, y, sz, sz)
                }
            }
        }

        // Draw Subject
        ctx.save()
        const rect = sc.getBoundingClientRect()
        const scalex = targetW / rect.width
        const scaley = targetH / rect.height
        ctx.translate(subjectPos.x * scalex, subjectPos.y * scaley)
        ctx.translate(targetW / 2, targetH / 2)
        ctx.scale(subjectScale, subjectScale)
        ctx.translate(-mc.width / 2, -mc.height / 2)

        if (hasSticker) {
            ctx.save()
            const dist = stickerWidth * (mc.width / 1000)
            const temp = document.createElement('canvas')
            temp.width = targetW; temp.height = targetH
            const tctx = temp.getContext('2d')
            if (tctx) {
                tctx.fillStyle = stickerColor
                for (let a = 0; a < 360; a += 15) {
                    const r = a * Math.PI / 180
                    tctx.drawImage(mc, dist * Math.cos(r), dist * Math.sin(r))
                }
                tctx.globalCompositeOperation = 'source-in'
                tctx.fillRect(0, 0, targetW, targetH)
                ctx.drawImage(temp, 0, 0)
            }
            ctx.restore()
        }

        let filter = `brightness(${subjectBrightness}%) contrast(${subjectContrast}%) saturate(${subjectSaturation}%)`
        if (globalFilter === 'grayscale') filter += ' grayscale(100%)'
        else if (globalFilter === 'sepia') filter += ' sepia(80%)'
        else if (globalFilter === 'warm') filter += ' sepia(20%) saturate(140%) hue-rotate(-10deg)'
        else if (globalFilter === 'cool') filter += ' saturate(120%) hue-rotate(180deg) brightness(110%)'
        else if (globalFilter === 'vintage') filter += ' sepia(50%) contrast(120%) brightness(90%)'
        ctx.filter = filter
        ctx.drawImage(mc, 0, 0)
        ctx.restore()

        // Text Layers
        textLayers.forEach(l => {
            ctx.save()
            ctx.translate(l.x, l.y)
            ctx.font = `${l.fontWeight === 'black' ? '900' : '700'} ${l.fontSize * (targetW / 1000)}px Inter, system-ui`
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
            if (l.strokeWidth > 0) {
                ctx.strokeStyle = l.strokeColor; ctx.lineWidth = l.strokeWidth * 2 * (targetW / 1000)
                ctx.lineJoin = 'round'; ctx.strokeText(l.text, 0, 0)
            }
            ctx.fillStyle = l.color; ctx.fillText(l.text, 0, 0)
            ctx.restore()
        })

        // ID Guide
        if (isIDMode && activeIDStandard && showIDGuide) {
            ctx.save()
            ctx.fillStyle = 'rgba(0,0,0,0.4)'
            const gw = targetW * 0.7, gh = gw * (activeIDStandard.height / activeIDStandard.width)
            const gx = (targetW - gw) / 2, gy = (targetH - gh) / 2
            ctx.beginPath(); ctx.rect(0, 0, targetW, targetH); ctx.rect(gx, gy, gw, gh); ctx.fill('evenodd')
            ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 3; ctx.setLineDash([10, 5]); ctx.strokeRect(gx, gy, gw, gh)
            ctx.restore()
        }
    }, [processedImage, aspectRatio, isIDMode, activeIDStandard, showIDGuide, bgType, bgColor, bgGradient, customBgImage, subjectPos, subjectScale, hasSticker, stickerColor, stickerWidth, subjectBrightness, subjectContrast, subjectSaturation, globalFilter, textLayers])

    // --- Interaction ---

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        if (isRefining) { setIsDrawing(true); draw(e); return }
        const sc = studioCanvasRef.current
        if (!sc) return
        const rect = sc.getBoundingClientRect()
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
        const sx = sc.width / rect.width, sy = sc.height / rect.height
        const cx = (clientX - rect.left) * sx, cy = (clientY - rect.top) * sy

        const hit = [...textLayers].reverse().find(l => {
            const fs = l.fontSize * (sc.width / 1000)
            return Math.abs(cx - l.x) < (fs * l.text.length * 0.3 + 20) && Math.abs(cy - l.y) < (fs / 2 + 20)
        })

        if (hit) {
            setActiveTextId(hit.id); setIsDraggingText(true); setDragStart({ x: cx - hit.x, y: cy - hit.y })
        } else {
            setActiveTextId(null); setIsDraggingSubject(true); setDragStart({ x: clientX - rect.left - subjectPos.x, y: clientY - rect.top - subjectPos.y })
        }
    }

    const stopDrawing = () => {
        const was = isDraggingSubject || isDraggingText || (isRefining && isDrawing)
        setIsDrawing(false); setIsDraggingSubject(false); setIsDraggingText(false)
        if (was) pushHistory()
    }

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        const sc = studioCanvasRef.current
        const mc = maskCanvasRef.current
        if (!sc || !mc) return
        const rect = sc.getBoundingClientRect()
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        if (isRefining && isDrawing) {
            const ctx = mc.getContext('2d')
            if (!ctx) return
            const sx = mc.width / rect.width, sy = mc.height / rect.height
            const cx = (clientX - rect.left) * sx, cy = (clientY - rect.top) * sy
            ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.lineWidth = brushSize * sx
            if (brushMode === 'erase') {
                ctx.globalCompositeOperation = 'destination-out'
                ctx.beginPath(); ctx.arc(cx, cy, (brushSize * sx) / 2, 0, Math.PI * 2); ctx.fill()
            } else {
                ctx.globalCompositeOperation = 'source-over'
                if (originalImgRef.current) {
                    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, (brushSize * sx) / 2, 0, Math.PI * 2); ctx.clip()
                    ctx.drawImage(originalImgRef.current, 0, 0, mc.width, mc.height); ctx.restore()
                }
            }
            renderStudio()
        } else if (isDraggingText && activeTextId) {
            const sx = sc.width / rect.width, sy = sc.height / rect.height
            const cx = (clientX - rect.left) * sx, cy = (clientY - rect.top) * sy
            setTextLayers(prev => prev.map(l => l.id === activeTextId ? { ...l, x: cx - dragStart.x, y: cy - dragStart.y } : l))
        } else if (isDraggingSubject) {
            setSubjectPos({ x: clientX - rect.left - dragStart.x, y: clientY - rect.top - dragStart.y })
        }
    }

    const startBatchProcessing = async () => {
        for (let i = 0; i < batchQueue.length; i++) {
            if (batchQueue[i].status === 'done') continue
            setBatchQueue(prev => prev.map((item, idx) => idx === i ? { ...item, status: 'processing' } : item))
            const result = await processImage(batchQueue[i].file)
            if (result) {
                setBatchQueue(prev => prev.map((item, idx) => idx === i ? { ...item, status: 'done', result } : item))
            } else {
                setBatchQueue(prev => prev.map((item, idx) => idx === i ? { ...item, status: 'error' } : item))
            }
        }
    }

    const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
        let files: FileList | null = null
        if ('target' in e && e.target instanceof HTMLInputElement) files = e.target.files
        else if ('dataTransfer' in e) { e.preventDefault(); files = e.dataTransfer.files }
        if (!files || files.length === 0) return

        if (files.length > 1 || isBatchMode) {
            setIsBatchMode(true)
            const items: BatchItem[] = Array.from(files).filter(f => f.type.startsWith('image/')).map(f => ({ id: Math.random().toString(36).substr(2, 9), file: f, status: 'pending' }))
            setBatchQueue(prev => [...prev, ...items]); return
        }

        const f = files[0]
        if (f && f.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (ev) => {
                const url = ev.target?.result as string; setOriginalImage(url)
                const img = new Image(); img.src = url; img.onload = () => originalImgRef.current = img
                setProcessedImage(null); setSubjectPos({ x: 0, y: 0 }); setSubjectScale(1); processImage(f)
            }
            reader.readAsDataURL(f)
        }
    }, [isBatchMode, t.common.error])

    const downloadResult = async () => {
        const sc = studioCanvasRef.current
        if (!sc) return
        const link = document.createElement('a')
        link.href = sc.toDataURL('image/png')
        link.download = `creative_${Date.now()}.png`
        link.click()
    }

    // --- Effects ---

    useEffect(() => { setIsMounted(true) }, [])

    useEffect(() => {
        const src = searchParams.get('src')
        if (src) {
            setOriginalImage(src)
            const img = new Image(); img.src = src; img.onload = () => { originalImgRef.current = img; processImage(src) }
        }
    }, [searchParams])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo() }
                if (e.key === 'y') { e.preventDefault(); redo() }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [undo, redo])

    useEffect(() => { renderStudio() }, [renderStudio])

    if (!isMounted) return null

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-20 px-4">
            <canvas ref={maskCanvasRef} className="hidden" />
            <canvas ref={resultCanvasRef} className="hidden" />

            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">AI Creative Studio</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.bgRemover.desc}</p>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 items-start w-full">
                {/* Left Sidebar */}
                {processedImage && !isProcessing && !isRefining && (
                    <div className="w-full xl:w-72 space-y-6 animate-in slide-in-from-left-8 duration-500 order-2 xl:order-1">
                        <div className="glass-card p-5 rounded-[2.5rem] space-y-6 shadow-xl border-2 border-primary/5">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Photo Mode</label>
                                <div className="flex gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                                    <button onClick={() => { setIsIDMode(false); setTimeout(() => renderStudio(), 0); }} className={cn("flex-1 py-2.5 rounded-xl text-[10px] font-black transition-all", !isIDMode ? "bg-white dark:bg-zinc-900 shadow-xl text-primary" : "text-muted-foreground")}>{t.bgRemover.reset}</button>
                                    <button onClick={() => { setIsIDMode(true); if (!activeIDStandard) setActiveIDStandard(ID_STANDARDS[0]); setTimeout(() => renderStudio(), 0); }} className={cn("flex-1 py-2.5 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-1.5", isIDMode ? "bg-white dark:bg-zinc-900 shadow-xl text-primary" : "text-muted-foreground")}>{t.bgRemover.idPhoto}</button>
                                </div>
                                {isIDMode && activeIDStandard && (
                                    <div className="space-y-3 p-3 bg-primary/5 rounded-2xl border border-primary/10 animate-in fade-in zoom-in-95">
                                        <div className="grid grid-cols-1 gap-1.5">
                                            {ID_STANDARDS.map(std => (
                                                <button key={std.id} onClick={() => { setActiveIDStandard(std); setBgType('color'); setBgColor('#ffffff'); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className={cn("p-3 rounded-xl border-2 text-left transition-all relative overflow-hidden group", activeIDStandard?.id === std.id ? "border-primary bg-white dark:bg-zinc-900 shadow-sm" : "border-transparent bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800")}>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="text-[10px] font-black">{std.name}</div>
                                                            <div className="text-[9px] font-bold text-muted-foreground">{std.label}</div>
                                                        </div>
                                                        {activeIDStandard?.id === std.id && <Check className="w-3.5 h-3.5 text-primary" />}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-primary/10">
                                            <span className="text-[10px] font-black text-muted-foreground uppercase">{t.bgRemover.showGuide}</span>
                                            <button onClick={() => { setShowIDGuide(!showIDGuide); setTimeout(() => renderStudio(), 0); }} className={cn("w-10 h-5 rounded-full relative transition-all", showIDGuide ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700")}>
                                                <div className={cn("absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-all", showIDGuide && "translate-x-5")} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                            <div className="space-y-4">
                                <h4 className="font-black text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-2 px-1">
                                    <Sparkles className="w-3.5 h-3.5" /> {t.bgRemover.designTemplates}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {DESIGN_TEMPLATES.map(tmp => (
                                        <button key={tmp.id} onClick={() => {
                                            setAspectRatio(tmp.aspectRatio); setBgType(tmp.bgType); setSubjectScale(tmp.subjectScale); setSubjectPos(tmp.subjectPos)
                                            if (tmp.bgType === 'color') setBgColor(tmp.bgColor!);
                                            if (tmp.bgType === 'gradient') setBgGradient(tmp.bgGradient!);
                                            if (tmp.bgType === 'image') {
                                                setCustomBgImage(tmp.bgImage!);
                                                const img = new Image(); img.src = tmp.bgImage!;
                                                img.onload = () => { customBgImgRef.current = img; setBgLoadCount(prev => prev + 1); };
                                            }
                                            if (tmp.text) {
                                                const nt: TextLayer = { id: Math.random().toString(36).substr(2, 9), text: tmp.text, x: tmp.aspectRatio === 'vertical' ? 150 : 350, y: 300, fontSize: 80, color: '#ffffff', strokeColor: '#000000', strokeWidth: 8, fontWeight: 'black' };
                                                setTextLayers([nt]);
                                            }
                                            setTimeout(() => { renderStudio(); pushHistory(); }, 0);
                                        }} className="p-3 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:border-primary/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-between group">
                                            <span className="text-[10px] font-black">{tmp.label}</span>
                                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">
                                    <span>{t.bgRemover.subjectScale}</span>
                                    <span className="text-primary">{Math.round(subjectScale * 100)}%</span>
                                </div>
                                <input type="range" min="0.1" max="3" step="0.05" value={subjectScale} onChange={(e) => { setSubjectScale(parseFloat(e.target.value)); renderStudio(); }} onMouseUp={() => pushHistory()} className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                <div className="flex gap-2 pt-1">
                                    <button onClick={() => { setSubjectPos({ x: 0, y: 0 }); setSubjectScale(1); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className="flex-1 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[9px] font-black text-muted-foreground hover:bg-zinc-200 transition-all">{t.bgRemover.resetPos}</button>
                                    <button onClick={() => { if (confirm(t.bgRemover.deleteImage + "?")) { setProcessedImage(null); setOriginalImage(null); pushHistory(); } }} className="flex-1 py-2 bg-red-50 dark:bg-red-900/20 rounded-xl text-[9px] font-black text-red-500 hover:bg-red-100 transition-all border border-red-100 dark:border-red-900/30">{t.bgRemover.deleteImage}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 w-full space-y-6 order-1 xl:order-2">
                    <div
                        onDragOver={e => e.preventDefault()}
                        onDrop={handleFileUpload}
                        onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={stopDrawing}
                        className={cn(
                            "glass-card rounded-[3rem] p-4 border-2 flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden transition-all duration-500",
                            !processedImage && !isProcessing && "bg-zinc-50/50 cursor-pointer",
                            isRefining && "cursor-none"
                        )}
                        style={{
                            backgroundImage: processedImage && bgType === 'transparent' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%238882\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%238882\'/%3E%3C/svg%3E")' : 'none',
                            backgroundColor: bgType === 'color' ? bgColor : 'transparent',
                            background: bgType === 'gradient' ? bgGradient : undefined
                        }}
                    >
                        {isProcessing && !isBatchMode ? (
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-20 h-20 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                                <p className="font-black text-xl">{progress}%</p>
                            </div>
                        ) : isBatchMode ? (
                            <div className="w-full max-w-2xl p-6 space-y-6 animate-in fade-in zoom-in-95">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-black">{t.bgRemover.batchMode}</h3>
                                    <button onClick={() => { setIsBatchMode(false); setBatchQueue([]); }} className="p-2 hover:bg-zinc-100 rounded-full transition-colors"><X className="w-6 h-6" /></button>
                                </div>
                                <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {batchQueue.map((item, idx) => (
                                        <div key={item.id} className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800">
                                            <div className="w-12 h-12 rounded-lg bg-zinc-200 overflow-hidden">
                                                <img src={URL.createObjectURL(item.file)} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-bold truncate">{item.file.name}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase font-black">{item.status}</p>
                                            </div>
                                            {item.status === 'done' ? (
                                                <button onClick={() => { const a = document.createElement('a'); a.href = item.result!; a.download = `done_${idx}.png`; a.click(); }} className="p-2 bg-primary/10 text-primary rounded-lg"><Download className="w-4 h-4" /></button>
                                            ) : item.status === 'processing' ? (
                                                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                            ) : item.status === 'error' ? (
                                                <X className="w-5 h-5 text-red-500" />
                                            ) : (
                                                <div className="w-5 h-5 rounded-full border-2 border-zinc-300" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button onClick={startBatchProcessing} disabled={batchQueue.every(i => i.status === 'done')} className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 active:scale-95 transition-all disabled:opacity-50">
                                    {t.bgRemover.batchStart}
                                </button>
                            </div>
                        ) : processedImage ? (
                            <canvas ref={studioCanvasRef} style={{ maxWidth: '100%', maxHeight: '70vh', cursor: isRefining ? 'none' : 'default', transform: `scale(${zoom})` }} />
                        ) : (
                            <div className="text-center space-y-6" onClick={() => fileInputRef.current?.click()}>
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary"><Upload className="w-10 h-10" /></div>
                                <h3 className="text-2xl font-bold">{t.common.selectImage}</h3>
                            </div>
                        )}

                        {/* Top Right Controls */}
                        {processedImage && !isProcessing && (
                            <div className="absolute top-4 right-4 flex gap-2">
                                {!isRefining && (
                                    <button onClick={() => setIsRefining(true)} className="bg-sky-400 text-zinc-950 px-4 py-2 rounded-xl font-black text-xs flex items-center gap-2 shadow-lg"><Brush className="w-4 h-4" />{t.bgRemover.brushRestore}</button>
                                )}
                                <button onClick={() => setShowResetConfirm(true)} className="bg-zinc-900 text-white p-2 rounded-xl outline-none"><X className="w-6 h-6" /></button>
                            </div>
                        )}

                        {/* History & Zoom Controls */}
                        {processedImage && !isProcessing && !isRefining && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-white/95 dark:bg-zinc-900/95 p-2 rounded-full shadow-2xl border border-primary/10">
                                <button onClick={undo} disabled={historyIndex <= 0} className="p-3 hover:bg-zinc-100 rounded-full disabled:opacity-20"><Undo className="w-5 h-5" /></button>
                                <button onClick={redo} disabled={historyIndex >= history.length - 1} className="p-3 hover:bg-zinc-100 rounded-full disabled:opacity-20 border-r border-zinc-100"><Redo className="w-5 h-5" /></button>
                                <div className="px-6 flex items-center gap-4">
                                    <button onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}><MousePointer2 className="w-4 h-4" /></button>
                                    <span className="font-black text-xs text-primary">{Math.round(zoom * 100)}%</span>
                                    <button onClick={() => setZoom(z => Math.min(3, z + 0.2))}><Sparkles className="w-4 h-4" /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar */}
                {processedImage && !isProcessing && (
                    <div className="w-full xl:w-80 space-y-6 animate-in slide-in-from-right-8 duration-500 order-3">
                        {isRefining ? (
                            <div className="glass-card p-6 rounded-[2.5rem] space-y-6 shadow-xl border-2 border-primary/20 bg-white dark:bg-zinc-900">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-black text-xl flex items-center gap-3">
                                        <Brush className="w-6 h-6 text-primary" />
                                        세부 수정
                                    </h3>
                                    <button onClick={() => setIsRefining(false)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => setBrushMode('restore')} className={cn("py-3 rounded-2xl font-bold flex flex-col items-center gap-2 border-2 transition-all shadow-sm", brushMode === 'restore' ? "bg-primary/10 border-primary text-primary" : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50")}>
                                        <Brush className="w-5 h-5" /><span className="text-[10px] uppercase font-black">복구</span>
                                    </button>
                                    <button onClick={() => setBrushMode('erase')} className={cn("py-3 rounded-2xl font-bold flex flex-col items-center gap-2 border-2 transition-all shadow-sm", brushMode === 'erase' ? "bg-red-500/10 border-red-500 text-red-500" : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50")}>
                                        <Eraser className="w-5 h-5" /><span className="text-[10px] uppercase font-black">지우기</span>
                                    </button>
                                </div>
                                <div className="space-y-4 pt-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase text-muted-foreground"><span>브러시 크기</span><span className="text-primary">{brushSize}px</span></div>
                                    <input type="range" min="5" max="100" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                </div>
                                <button onClick={() => setIsRefining(false)} className="w-full py-4 rounded-2xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-black hover:scale-[1.02] shadow-lg shadow-zinc-950/20 transition-all flex items-center justify-center gap-2">
                                    <Check className="w-5 h-5" /> 수정 완료 (Save)
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {/* Background Section */}
                                <div className="glass-card p-5 rounded-[2.5rem] space-y-6 shadow-xl border-2 border-primary/5">
                                    <div className="space-y-4">
                                        <h4 className="font-black text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-2 px-1">
                                            <Layers className="w-3.5 h-3.5" /> {t.bgRemover.bgLibrary}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { id: 'transparent', icon: ImageIcon, label: t.bgRemover.bgTransparent },
                                                { id: 'color', icon: Brush, label: t.bgRemover.bgSolid },
                                                { id: 'gradient', icon: Sparkles, label: t.bgRemover.bgGradient },
                                                { id: 'image', icon: Upload, label: t.bgRemover.bgImage }
                                            ].map(item => (
                                                <button key={item.id} onClick={() => {
                                                    if (item.id === 'image') { bgInputRef.current?.click(); }
                                                    else { setBgType(item.id as any); setTimeout(() => pushHistory(), 0); }
                                                    setTimeout(() => renderStudio(), 0);
                                                }} className={cn("p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all", bgType === item.id ? "border-primary bg-primary/5 text-primary shadow-sm" : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900")}>
                                                    <item.icon className="w-4 h-4" /><span className="text-[9px] font-black uppercase">{item.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        {bgType === 'color' && (
                                            <div className="flex flex-wrap gap-1.5 p-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 animate-in fade-in slide-in-from-top-2">
                                                {['#ffffff', '#000000', '#f8fafc', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'].map(c => (
                                                    <button key={c} onClick={() => { setBgColor(c); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className={cn("w-7 h-7 shrink-0 rounded-lg border-2 shadow-sm", bgColor === c ? "border-primary scale-110" : "border-transparent")} style={{ backgroundColor: c }} />
                                                ))}
                                            </div>
                                        )}
                                        {bgType === 'gradient' && (
                                            <div className="p-2 space-y-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 animate-in fade-in slide-in-from-top-2">
                                                {['linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'].map(g => (
                                                    <button key={g} onClick={() => { setBgGradient(g); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className={cn("w-7 h-7 shrink-0 rounded-lg border-2", bgGradient === g ? "border-primary scale-110" : "border-transparent")} style={{ background: g }} />
                                                ))}
                                            </div>
                                        )}
                                        {bgType === 'image' && (
                                            <div className="grid grid-cols-3 gap-1.5 p-2">
                                                {PRESET_BGS.map((bg, idx) => (
                                                    <button key={idx} onClick={() => { setCustomBgImage(bg); setBgType('image'); const img = new Image(); img.src = bg; img.onload = () => { customBgImgRef.current = img; setBgLoadCount(p => p + 1); pushHistory(); }; }} className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-100 hover:border-primary transition-all"><img src={bg} className="w-full h-full object-cover" alt="" /></button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                                    {/* Filters & Adjustments */}
                                    <div className="space-y-4">
                                        <h4 className="font-black text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-2 px-1">
                                            <Sparkles className="w-4 h-4" /> {t.bgRemover.filterPresets}
                                        </h4>
                                        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                                            {[
                                                { id: 'none', label: t.bgRemover.filterOriginal },
                                                { id: 'grayscale', label: t.bgRemover.filterBW },
                                                { id: 'sepia', label: t.bgRemover.filterSepia },
                                                { id: 'warm', label: t.bgRemover.filterWarm },
                                                { id: 'cool', label: t.bgRemover.filterCool },
                                                { id: 'vintage', label: t.bgRemover.filterVintage }
                                            ].map(f => (
                                                <button key={f.id} onClick={() => { setGlobalFilter(f.id); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className={cn("px-3 py-1.5 rounded-xl text-[10px] font-black whitespace-nowrap transition-all border-2", globalFilter === f.id ? "border-primary bg-primary text-white" : "border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-muted-foreground hover:border-primary/30")}>{f.label}</button>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[9px] font-black uppercase text-muted-foreground"><span>{t.bgRemover.brightness}</span><span className="text-primary">{subjectBrightness}%</span></div>
                                                <input type="range" min="0" max="200" value={subjectBrightness} onChange={(e) => { setSubjectBrightness(parseInt(e.target.value)); renderStudio(); }} onMouseUp={() => pushHistory()} className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[9px] font-black uppercase text-muted-foreground"><span>{t.bgRemover.contrast}</span><span className="text-primary">{subjectContrast}%</span></div>
                                                <input type="range" min="0" max="200" value={subjectContrast} onChange={(e) => { setSubjectContrast(parseInt(e.target.value)); renderStudio(); }} onMouseUp={() => pushHistory()} className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[9px] font-black uppercase text-muted-foreground"><span>{t.bgRemover.saturation}</span><span className="text-primary">{subjectSaturation}%</span></div>
                                                <input type="range" min="0" max="200" value={subjectSaturation} onChange={(e) => { setSubjectSaturation(parseInt(e.target.value)); renderStudio(); }} onMouseUp={() => pushHistory()} className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                                    {/* Text & Stickers */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between px-1">
                                            <h4 className="font-black text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-2"><Type className="w-4 h-4" /> {t.bgRemover.addText}</h4>
                                            <button onClick={() => { const nt: TextLayer = { id: Math.random().toString(36).substr(2, 9), text: t.bgRemover.textPlaceholder, x: 250, y: 250, fontSize: 80, color: '#ffffff', strokeColor: '#000000', strokeWidth: 8, fontWeight: 'black' }; setTextLayers([...textLayers, nt]); setActiveTextId(nt.id); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className="px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-[9px] font-black hover:bg-primary/20 transition-all">+ {t.bgRemover.addText}</button>
                                        </div>
                                        {activeTextId && (
                                            <div className="p-4 bg-primary/5 rounded-[1.5rem] border-2 border-primary/20 space-y-4 animate-in zoom-in-95">
                                                <input type="text" value={textLayers.find(l => l.id === activeTextId)?.text || ''} onChange={(e) => { const val = e.target.value; setTextLayers(textLayers.map(l => l.id === activeTextId ? { ...l, text: val } : l)); setTimeout(() => renderStudio(), 0); }} onBlur={() => pushHistory()} className="w-full bg-white dark:bg-zinc-900 border-2 border-primary/10 rounded-xl px-3 py-2 text-xs font-bold outline-none" placeholder={t.bgRemover.textPlaceholder} />
                                                <div className="flex justify-between text-[9px] font-black"><span>Size</span><input type="range" min="10" max="300" value={textLayers.find(l => l.id === activeTextId)?.fontSize || 80} onChange={(e) => { setTextLayers(textLayers.map(l => l.id === activeTextId ? { ...l, fontSize: parseInt(e.target.value) } : l)); renderStudio(); }} onMouseUp={() => pushHistory()} className="w-2/3 h-1 appearance-none bg-zinc-200 rounded-full" /></div>
                                                <div className="flex gap-2">{['#ffffff', '#000000', '#fef08a', '#ef4444', '#3b82f6'].map(c => (<button key={c} onClick={() => { setTextLayers(textLayers.map(l => l.id === activeTextId ? { ...l, color: c } : l)); renderStudio(); pushHistory(); }} className={cn("w-6 h-6 rounded-full border-2", textLayers.find(l => l.id === activeTextId)?.color === c ? "border-primary scale-110" : "border-transparent")} style={{ backgroundColor: c }} />))}</div>
                                                <button onClick={() => { setTextLayers(textLayers.filter(l => l.id !== activeTextId)); setActiveTextId(null); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className="w-full py-2 bg-red-50 text-red-500 rounded-xl text-[9px] font-black">{t.bgRemover.deleteText}</button>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"><Check className="w-4 h-4 text-primary" /></div><span className="text-[10px] font-black uppercase">{t.bgRemover.stickerEffect}</span></div>
                                            <button onClick={() => { setHasSticker(!hasSticker); setTimeout(() => { renderStudio(); pushHistory(); }, 0); }} className={cn("w-10 h-5 rounded-full relative transition-all", hasSticker ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700")}><div className={cn("absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-all", hasSticker && "translate-x-5")} /></button>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

                                    {/* Export */}
                                    <div className="space-y-3">
                                        <button onClick={downloadResult} className="w-full py-4 rounded-2xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 font-black text-xs flex items-center justify-center gap-3 hover:scale-[1.02] shadow-xl transition-all active:scale-[0.98]"><Download className="w-5 h-5" /> {t.common.download}</button>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button onClick={() => { setAspectRatio(aspectRatio === 'original' ? 'vertical' : 'original'); setTimeout(() => renderStudio(), 0); }} className={cn("py-3 rounded-xl border-2 text-[9px] font-black transition-all flex items-center justify-center gap-2", aspectRatio === 'vertical' ? "border-primary bg-primary/5 text-primary" : "border-zinc-100 dark:border-zinc-800")}><Crop className="w-3.5 h-3.5" /> {t.bgRemover.shortsCrop}</button>
                                            <button onClick={() => { const text = `AI Creative Studio! ⚡\n${window.location.origin}${window.location.pathname}`; navigator.clipboard.writeText(text); alert(t.common.copiedLink); }} className="py-3 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 text-[9px] font-black text-muted-foreground transition-all flex items-center justify-center gap-2"><Share2 className="w-3.5 h-3.5" /> {t.bgRemover.share}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
            <input type="file" ref={bgInputRef} onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) {
                    const r = new FileReader()
                    r.onload = (ev) => {
                        const url = ev.target?.result as string; setCustomBgImage(url); setBgType('image')
                        const i = new Image(); i.src = url; i.onload = () => { customBgImgRef.current = i; setBgLoadCount(p => p + 1); pushHistory() }
                    }
                    r.readAsDataURL(f)
                }
            }} accept="image/*" className="hidden" />

            {showResetConfirm && (
                <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-[2rem] max-w-sm w-full space-y-6 shadow-2xl text-center">
                        <h3 className="text-2xl font-black">초기화할까요?</h3>
                        <div className="flex gap-4">
                            <button onClick={() => setShowResetConfirm(false)} className="flex-1 py-4 bg-zinc-100 rounded-2xl font-bold">취소</button>
                            <button onClick={() => { setProcessedImage(null); setOriginalImage(null); setHistory([]); setHistoryIndex(-1); setShowResetConfirm(false) }} className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold">초기화</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Feature Highlights Section */}
            {!processedImage && !isProcessing && (
                <div className="grid md:grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    {[
                        { icon: Sparkles, title: "Edge Perfect", desc: "Advanced AI preserves every fine detail." },
                        { icon: MousePointer2, title: "Precision Control", desc: "Manual brush for perfect refinements." },
                        { icon: Layers, title: "Pro Backgrounds", desc: "One-click ID photos and thumbnails." }
                    ].map((feature, i) => (
                        <div key={i} className="glass-card p-8 rounded-[2.5rem] space-y-4 hover:scale-105 transition-transform border border-zinc-100 dark:border-zinc-800/50">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><feature.icon className="w-7 h-7" /></div>
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
                    {t.bgRemover.guide.sections.map((section: any, idx: number) => (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] space-y-4 border border-zinc-100 dark:border-zinc-800/50 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">{section.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function BackgroundRemoverPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px] text-primary font-black animate-pulse">LOADING...</div>}>
            <BackgroundRemoverContent />
        </Suspense>
    )
}
