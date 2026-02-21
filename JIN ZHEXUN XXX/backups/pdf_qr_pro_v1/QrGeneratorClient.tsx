'use client'

import { useState, useRef, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Download, Palette, Type, Maximize, Share2, Youtube, Instagram, Link2, Wifi, CheckCircle2, Monitor } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { addRecentTool } from '@/lib/recent-tools'

export default function QrGeneratorClient() {
    const { t } = useLanguage()
    const [text, setText] = useState('https://google.com')
    const [fgColor, setFgColor] = useState('#000000')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [size, setSize] = useState(1024)
    const [logoImage, setLogoImage] = useState<string | null>(null)
    const [logoSize, setLogoSize] = useState(80)
    const [qrStyle, setQrStyle] = useState<'squares' | 'dots'>('squares')
    const [frameText, setFrameText] = useState('')
    const [isMounted, setIsMounted] = useState(false)
    const qrRef = useRef<SVGSVGElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setIsMounted(true)
        addRecentTool({
            id: 'qr-gen',
            title: t.navbar.qrGen,
            href: '/tools/qr-generator',
            iconName: 'Maximize'
        })
    }, [t])

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (e) => setLogoImage(e.target?.result as string)
        reader.readAsDataURL(file)
    }

    const applyPreset = (type: 'instagram' | 'youtube' | 'website' | 'wifi') => {
        switch (type) {
            case 'instagram':
                setFgColor('#E1306C')
                setFrameText('FOLLOW ON INSTAGRAM')
                break
            case 'youtube':
                setFgColor('#FF0000')
                setFrameText('SUBSCRIBE ON YOUTUBE')
                break
            case 'website':
                setFgColor('#000000')
                setFrameText('SCAN TO VISIT')
                break
            case 'wifi':
                setFgColor('#007AFF')
                setFrameText('FREE WI-FI CONNECT')
                break
        }
    }

    const downloadPng = () => {
        const svg = qrRef.current
        if (!svg) return
        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.onload = () => {
            const finalWidth = size
            const frameHeight = frameText ? Math.round(size * 0.2) : 0
            const finalHeight = size + frameHeight

            canvas.width = finalWidth
            canvas.height = finalHeight

            if (ctx) {
                // Background
                ctx.fillStyle = bgColor
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                // QR Code
                ctx.drawImage(img, 0, 0, size, size)

                // Frame Text
                if (frameText) {
                    ctx.fillStyle = fgColor
                    ctx.font = `bold ${Math.round(size * 0.08)}px sans-serif`
                    ctx.textAlign = 'center'
                    ctx.textBaseline = 'middle'
                    ctx.fillText(frameText, size / 2, size + (frameHeight / 2))
                }
            }

            const pngFile = canvas.toDataURL('image/png')
            const downloadLink = document.createElement('a')
            downloadLink.download = 'QRPRO_Premium_Export.png'
            downloadLink.href = pngFile
            downloadLink.click()
        }
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
    }

    const downloadSvg = () => {
        const svg = qrRef.current
        if (!svg) return
        // Create a wrapper for the frame if exists
        let finalSvgContent = ''
        if (frameText) {
            const frameHeight = size * 0.2
            finalSvgContent = `
                <svg width="${size}" height="${size + frameHeight}" viewBox="0 0 ${size} ${size + frameHeight}" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="${bgColor}"/>
                    ${svg.innerHTML}
                    <text x="${size / 2}" y="${size + frameHeight / 2}" font-family="sans-serif" font-size="${size * 0.08}" font-weight="bold" fill="${fgColor}" text-anchor="middle" dominant-baseline="middle">${frameText}</text>
                </svg>
            `
        } else {
            finalSvgContent = new XMLSerializer().serializeToString(svg)
        }

        const blob = new Blob([finalSvgContent], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'QRPRO_Vector_Master.svg'
        link.click()
        URL.revokeObjectURL(url)
    }

    if (!isMounted) return null

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Hero Section */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-4">
                    <Maximize className="w-3 h-3" /> Professional QR Engine
                </div>
                <h1 className="text-5xl font-black tracking-tighter sm:text-8xl">
                    <span className="text-gradient">QR PRO</span>
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                    단순한 QR을 넘어 비즈니스의 품격을 높이는<br className="hidden sm:block" /> 프리미엄 커스텀 디자인 시스템
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Controls */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Presets */}
                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                            <Palette className="w-3 h-3" /> {t.qrGen.templates}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { id: 'instagram', icon: <Instagram className="w-5 h-5" />, label: t.qrGen.presets.instagram, color: 'hover:bg-[#E1306C] hover:text-white' },
                                { id: 'youtube', icon: <Youtube className="w-5 h-5" />, label: t.qrGen.presets.youtube, color: 'hover:bg-[#FF0000] hover:text-white' },
                                { id: 'website', icon: <Link2 className="w-5 h-5" />, label: t.qrGen.presets.link, color: 'hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 hover:text-white' },
                                { id: 'wifi', icon: <Wifi className="w-5 h-5" />, label: t.qrGen.presets.wifi, color: 'hover:bg-[#007AFF] hover:text-white' },
                            ].map((preset) => (
                                <button
                                    key={preset.id}
                                    onClick={() => applyPreset(preset.id as any)}
                                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-300 group ${preset.color}`}
                                >
                                    {preset.icon}
                                    <span className="text-[10px] font-black uppercase tracking-widest">{preset.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Settings */}
                    <div className="glass-card p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                                <Type className="w-3 h-3" /> {t.qrGen.target}
                            </label>
                            <input
                                type="text" value={text} onChange={(e) => setText(e.target.value)}
                                placeholder="https://..."
                                className="w-full h-16 px-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary/50 focus:ring-0 text-xl font-bold transition-all shadow-inner"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-10 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                            {/* Visual Color Palettes */}
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                                    <Palette className="w-3 h-3" /> Visual Style Palette
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {/* Primary Color Swatches */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase text-muted-foreground">{t.qrGen.fgColor}</span>
                                            <div className="flex gap-1.5">
                                                {['#000000', '#2563EB', '#7C3AED', '#DB2777', '#EA580C', '#16A34A'].map(color => (
                                                    <button
                                                        key={color}
                                                        onClick={() => setFgColor(color)}
                                                        className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-125 ${fgColor === color ? 'border-primary scale-110 shadow-lg' : 'border-transparent shadow-sm'}`}
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="relative group">
                                                <input
                                                    type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)}
                                                    className="w-12 h-12 rounded-xl cursor-pointer border-2 border-white dark:border-zinc-700 bg-transparent shadow-md overflow-hidden"
                                                />
                                                <div className="absolute inset-0 pointer-events-none rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all" />
                                            </div>
                                            <input type="text" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 text-xs font-mono uppercase font-black focus:border-primary/30 focus:ring-0" />
                                        </div>
                                    </div>

                                    {/* Background Color Swatches */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase text-muted-foreground">{t.qrGen.bgColor}</span>
                                            <div className="flex gap-1.5">
                                                {['#FFFFFF', '#F8FAFC', '#F0F9FF', '#FDF2F8', '#ECFDF5', '#18181B'].map(color => (
                                                    <button
                                                        key={color}
                                                        onClick={() => setBgColor(color)}
                                                        className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-125 ${bgColor === color ? 'border-primary scale-110 shadow-lg' : 'border-zinc-200 dark:border-zinc-700 shadow-sm'}`}
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="relative group">
                                                <input
                                                    type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}
                                                    className="w-12 h-12 rounded-xl cursor-pointer border-2 border-white dark:border-zinc-700 bg-transparent shadow-md overflow-hidden"
                                                />
                                                <div className="absolute inset-0 pointer-events-none rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all" />
                                            </div>
                                            <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 text-xs font-mono uppercase font-black focus:border-primary/30 focus:ring-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Styles & Frames */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t.qrGen.styles}</label>
                                <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-2xl gap-1">
                                    <button
                                        onClick={() => setQrStyle('squares')}
                                        className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${qrStyle === 'squares' ? 'bg-white dark:bg-zinc-700 shadow-sm text-primary' : 'text-muted-foreground opacity-50'}`}
                                    >
                                        SQUARES
                                    </button>
                                    <button
                                        onClick={() => setQrStyle('dots')}
                                        className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${qrStyle === 'dots' ? 'bg-white dark:bg-zinc-700 shadow-sm text-primary' : 'text-muted-foreground opacity-50'}`}
                                    >
                                        DOTS
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t.qrGen.frames}</label>
                                <input
                                    type="text" value={frameText} onChange={(e) => setFrameText(e.target.value)}
                                    placeholder={t.qrGen.frameText}
                                    className="w-full h-12 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-1 focus:ring-primary/30 text-xs font-black"
                                />
                            </div>
                        </div>

                        {/* Logo Upload */}
                        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                                    <Share2 className="w-3 h-3" /> {t.qrGen.uploadLogo}
                                </label>
                                {logoImage && (
                                    <button onClick={() => setLogoImage(null)} className="text-[10px] font-black text-red-500 hover:text-red-600 transition-colors">{t.qrGen.removeLogo}</button>
                                )}
                            </div>

                            {!logoImage ? (
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full flex flex-col items-center justify-center gap-3 py-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-muted-foreground font-black hover:border-primary/50 hover:bg-primary/5 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-3xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <Maximize className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-xs uppercase tracking-widest mt-2">{t.qrGen.uploadLogo}</span>
                                </button>
                            ) : (
                                <div className="flex items-center gap-8 p-6 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95 duration-500">
                                    <div className="w-24 h-24 rounded-2xl border-4 border-white dark:border-zinc-800 shadow-2xl overflow-hidden bg-white shrink-0 flex items-center justify-center p-3 relative group">
                                        <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                                            <span>{t.qrGen.logoSize}</span>
                                            <span className="text-primary">{logoSize}PX</span>
                                        </div>
                                        <input
                                            type="range" min="20" max="150" value={logoSize}
                                            onChange={(e) => setLogoSize(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>
                            )}
                            <input type="file" ref={fileInputRef} onChange={handleLogoUpload} className="hidden" accept="image/*" />
                        </div>
                    </div>
                </div>

                {/* Right Column: Preview & Export */}
                <div className="lg:col-span-5 space-y-8 sticky top-24">
                    <div className="glass-card p-12 rounded-[4rem] flex flex-col items-center justify-center space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* Device Mockup Look */}
                        <div className="relative z-10 w-full max-w-[300px] mx-auto p-3 bg-zinc-950 rounded-[3rem] shadow-[0_0_0_8px_rgba(255,255,255,0.05)] border border-white/10 aspect-[9/18.5] overflow-hidden sm:aspect-[9/16]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-950 rounded-b-2xl z-20 border-x border-b border-white/5" />
                            <div className="h-full bg-white rounded-[2.2rem] flex flex-col items-center justify-start p-6 pt-12 space-y-8 overflow-y-auto hide-scrollbar">
                                <div className="space-y-1 text-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 mx-auto flex items-center justify-center mb-2">
                                        <Monitor className="w-4 h-4 text-zinc-400" />
                                    </div>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Preview Mode</p>
                                </div>

                                <div className="bg-white p-6 rounded-3xl transition-all duration-700 hover:scale-105 active:rotate-3 shadow-md border border-zinc-50 shrink-0">
                                    <QRCodeSVG
                                        ref={qrRef}
                                        value={text}
                                        size={160}
                                        fgColor={fgColor}
                                        bgColor={bgColor}
                                        level="H"
                                        includeMargin={false}
                                        imageSettings={logoImage ? {
                                            src: logoImage,
                                            x: undefined,
                                            y: undefined,
                                            height: Math.round(logoSize / 6.4),
                                            width: Math.round(logoSize / 6.4),
                                            excavate: true,
                                        } : undefined}
                                    />
                                </div>

                                {frameText && (
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest leading-tight py-3 px-6 rounded-2xl border-2" style={{ color: fgColor, borderColor: fgColor + '20', backgroundColor: fgColor + '05' }}>
                                        {frameText}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Export Buttons */}
                        <div className="w-full space-y-4 relative z-10">
                            <button
                                onClick={downloadPng}
                                className="w-full py-6 rounded-3xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-black text-xl flex items-center justify-center gap-4 shadow-xl hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                                <span>{t.qrGen.downloadPng}</span>
                            </button>
                            <button
                                onClick={downloadSvg}
                                className="w-full py-5 rounded-3xl bg-transparent border-2 border-zinc-200 dark:border-zinc-800 font-black text-sm flex items-center justify-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all opacity-80 hover:opacity-100"
                            >
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>{t.qrGen.downloadSvg}</span>
                            </button>
                            <div className="flex items-center justify-center gap-2 pt-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{t.qrGen.vectorReady}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Guide Section */}
            <div className="pt-24 border-t border-zinc-200 dark:border-zinc-800 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{(t.qrGen as any).guide.title}</h2>
                    <p className="text-muted-foreground text-xl leading-relaxed">{(t.qrGen as any).guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {(t.qrGen as any).guide.sections.map((section: any, idx: number) => (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] space-y-6 hover:shadow-2xl transition-all border border-white/40 dark:border-white/5 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] transition-all group-hover:scale-110" />
                            <h3 className="text-2xl font-black text-primary flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-lg">0{idx + 1}</span>
                                {section.title}
                            </h3>
                            <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line relative z-10">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto space-y-10">
                    <h3 className="text-3xl font-black text-center flex items-center justify-center gap-4">
                        <Type className="w-10 h-10 text-primary" />
                        Frequently Asked Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(t.qrGen as any).guide.faq.map((item: any, idx: number) => (
                            <div key={idx} className="glass-card p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800/50 hover:border-primary/30 transition-all shadow-sm">
                                <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 mb-4 flex items-start gap-3 text-lg leading-tight">
                                    <span className="text-primary font-black text-2xl">Q.</span>
                                    {item.q}
                                </h4>
                                <p className="text-muted-foreground pl-10 leading-relaxed font-medium">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-gradient {
                    background: linear-gradient(to right, #000000, #4f46e5, #007AFF);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .dark .text-gradient {
                    background: linear-gradient(to right, #FFFFFF, #818CF8, #38BDF8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}
