'use client'

import { useState, useRef, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Download, Palette, Type, Maximize, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function QrGeneratorPage() {
    const { t } = useLanguage()
    const [text, setText] = useState('https://google.com')
    const [fgColor, setFgColor] = useState('#000000')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [size, setSize] = useState(256)
    const qrRef = useRef<SVGSVGElement>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const downloadQr = () => {
        const svg = qrRef.current
        if (!svg) return

        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()

        img.onload = () => {
            canvas.width = size
            canvas.height = size
            ctx?.drawImage(img, 0, 0)
            const pngFile = canvas.toDataURL('image/png')
            const downloadLink = document.createElement('a')
            downloadLink.download = 'qrcode.png'
            downloadLink.href = pngFile
            downloadLink.click()
        }

        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
    }

    if (!isMounted) return null

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient">{t.qrGen.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.qrGen.desc}
                </p>
            </div>



            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                    <div className="glass-card p-8 rounded-3xl space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-bold flex items-center gap-2">
                                <Type className="w-4 h-4 text-primary" /> {t.qrGen.target}
                            </label>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="https://yourlink.com"
                                className="w-full h-14 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/20 text-lg transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <label className="text-sm font-bold flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-primary" /> {t.qrGen.fgColor}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                        className="w-12 h-12 rounded-lg cursor-pointer border-none bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                        className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 text-xs font-mono uppercase"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-muted-foreground" /> {t.qrGen.bgColor}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="w-12 h-12 rounded-lg cursor-pointer border-none bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 text-xs font-mono uppercase"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold flex items-center gap-2">
                                <Maximize className="w-4 h-4 text-primary" /> {t.qrGen.size} ({size}px)
                            </label>
                            <input
                                type="range"
                                min="128"
                                max="1024"
                                step="64"
                                value={size}
                                onChange={(e) => setSize(parseInt(e.target.value))}
                                className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                    <div className="glass-card p-12 rounded-[3rem] flex flex-col items-center justify-center space-y-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div key={`${fgColor}-${bgColor}`} className="p-4 bg-white rounded-3xl shadow-xl relative z-10 transition-transform group-hover:scale-105 duration-500">
                            <QRCodeSVG
                                ref={qrRef}
                                value={text}
                                size={size}
                                fgColor={fgColor}
                                bgColor={bgColor}
                                level="H"
                                includeMargin={true}
                            />
                        </div>

                        <div className="space-y-4 w-full relative z-10">
                            <div className="flex items-stretch gap-3">
                                <button
                                    onClick={downloadQr}
                                    className="flex-1 py-5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    <Download className="w-6 h-6 shrink-0" />
                                    <span className="truncate">{t.qrGen.downloadPng}</span>
                                </button>
                                <button
                                    onClick={() => {
                                        const text = `Check out this awesome QR Generator! ⚡\n${window.location.origin}${window.location.pathname}`;
                                        navigator.clipboard.writeText(text);
                                        alert(t.common.copiedLink);
                                    }}
                                    className="w-16 sm:w-20 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shrink-0"
                                    title={t.common.shareResult}
                                >
                                    <Share2 className="w-6 h-6" />
                                </button>
                            </div>
                            <p className="text-center text-xs text-muted-foreground font-medium uppercase tracking-widest">
                                {t.qrGen.vectorReady}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AdBanner slot="tool-bottom-banner" useAdSense={true} />

            {/* SEO Guide & FAQ Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient">{t.qrGen.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.qrGen.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.qrGen.guide.sections.map((section, idx) => (
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
                        {t.qrGen.guide.faq.map((item, idx) => (
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
