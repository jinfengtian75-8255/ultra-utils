'use client'

import { useState, useRef, useEffect } from 'react'
import { FileText, Plus, Trash2, Download, Loader2, ArrowRight, FileStack, Scissors, ImageIcon as LucideImageIcon, CheckCircle2, Settings2 } from 'lucide-react'
import { PDFDocument } from 'pdf-lib'
import { useLanguage } from '@/context/language-context'
import { cn } from '@/lib/utils'
import JSZip from 'jszip'
import confetti from 'canvas-confetti'

let pdfjs: any = null;

interface PDFFile {
    id: string
    file: File
    name: string
    size: string
    pageCount?: number
}

export default function PDFMasterClient() {
    const { t } = useLanguage()
    const [activeTab, setActiveTab] = useState<'merge' | 'split' | 'toImage'>('merge')
    const [files, setFiles] = useState<PDFFile[]>([])
    const [processing, setProcessing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [resultUrl, setResultUrl] = useState<string | null>(null)
    const [isMounted, setIsMounted] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setIsMounted(true)
        import('pdfjs-dist').then((mod) => {
            pdfjs = mod;
            pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        });
        return () => { if (resultUrl) URL.revokeObjectURL(resultUrl); }
    }, [resultUrl])

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || [])
        const pdfFiles = selectedFiles.filter(f => f.type === 'application/pdf')
        const newFiles: PDFFile[] = await Promise.all(pdfFiles.map(async (f) => {
            let pageCount = undefined;
            try {
                const arrayBuffer = await f.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
                pageCount = pdf.getPageCount();
            } catch (e) { }
            return { id: Math.random().toString(36).substring(7), file: f, name: f.name, size: (f.size / (1024 * 1024)).toFixed(2) + ' MB', pageCount }
        }))
        if (activeTab === 'split' || activeTab === 'toImage') setFiles(newFiles.slice(0, 1))
        else setFiles(prev => [...prev, ...newFiles])
        setResultUrl(null)
        setProgress(0)
    }

    const removeFile = (id: string) => {
        setFiles(prev => prev.filter(f => f.id !== id))
        setResultUrl(null)
        setProgress(0)
    }

    const runConfetti = () => {
        const end = Date.now() + 2 * 1000;
        const colors = ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'];
        (function frame() {
            confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
            confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }

    const handleAction = async () => {
        if (files.length === 0) return
        setProcessing(true)
        setProgress(0)
        try {
            if (activeTab === 'merge') await mergePDFs()
            else if (activeTab === 'split') await splitPDF()
            else if (activeTab === 'toImage') await convertToImages()
            runConfetti()
        } catch (error) {
            console.error('Task failed:', error); alert(t.common.error);
        } finally { setProcessing(false); }
    }

    const mergePDFs = async () => {
        if (files.length < 2) return
        const mergedPdf = await PDFDocument.create()
        for (let i = 0; i < files.length; i++) {
            const pdfFile = files[i]
            const arrayBuffer = await pdfFile.file.arrayBuffer()
            const pdf = await PDFDocument.load(arrayBuffer)
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
            copiedPages.forEach((page) => mergedPdf.addPage(page))
            setProgress(Math.round(((i + 1) / files.length) * 100))
        }
        const pdfBytes = await mergedPdf.save()
        const blob = new Blob([pdfBytes as any], { type: 'application/pdf' })
        setResultUrl(URL.createObjectURL(blob))
    }

    const splitPDF = async () => {
        if (files.length === 0) return
        const fileToSplit = files[0]
        const arrayBuffer = await fileToSplit.file.arrayBuffer()
        const pdf = await PDFDocument.load(arrayBuffer)
        const totalPages = pdf.getPageCount()
        const zip = new JSZip(); const folder = zip.folder("split_pages")
        for (let i = 0; i < totalPages; i++) {
            const newPdf = await PDFDocument.create()
            const [copiedPage] = await newPdf.copyPages(pdf, [i])
            newPdf.addPage(copiedPage)
            const bytes = await newPdf.save()
            folder?.file(`${fileToSplit.name.replace('.pdf', '')}_page_${i + 1}.pdf`, bytes)
            setProgress(Math.round(((i + 1) / totalPages) * 100))
        }
        const content = await zip.generateAsync({ type: "blob" })
        setResultUrl(URL.createObjectURL(content))
    }

    const convertToImages = async () => {
        if (files.length === 0 || !pdfjs) return
        const fileToConvert = files[0]
        const arrayBuffer = await fileToConvert.file.arrayBuffer()
        const loadingTask = pdfjs.getDocument({ data: arrayBuffer })
        const pdf = await loadingTask.promise
        const totalPages = pdf.numPages
        const zip = new JSZip(); const folder = zip.folder("pdf_images")
        const offscreenCanvas = document.createElement('canvas'); const context = offscreenCanvas.getContext('2d')
        for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i)
            const viewport = page.getViewport({ scale: 2.0 })
            offscreenCanvas.height = viewport.height; offscreenCanvas.width = viewport.width
            await page.render({ canvasContext: context!, viewport }).promise
            const dataUrl = offscreenCanvas.toDataURL('image/jpeg', 0.9)
            const base64Data = dataUrl.split(',')[1]
            folder?.file(`${fileToConvert.name.replace('.pdf', '')}_page_${i}.jpg`, base64Data, { base64: true })
            setProgress(Math.round((i / totalPages) * 100))
        }
        const content = await zip.generateAsync({ type: "blob" })
        setResultUrl(URL.createObjectURL(content))
    }

    if (!isMounted) return null

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl"><span className="text-gradient">{t.pdfMaster.title}</span></h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.pdfMaster.desc}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 p-1.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/80 w-fit mx-auto animate-in duration-500 delay-100 backdrop-blur-sm border shadow-inner">
                {[{ id: 'merge', label: t.pdfMaster.merge, icon: FileStack, color: 'text-blue-500' }, { id: 'split', label: t.pdfMaster.split, icon: Scissors, color: 'text-orange-500' }, { id: 'toImage', label: t.pdfMaster.toImage, icon: LucideImageIcon, color: 'text-emerald-500' }].map((tab) => (
                    <button key={tab.id} onClick={() => { setActiveTab(tab.id as any); setFiles([]); setResultUrl(null); setProgress(0); }} className={cn("flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold transition-all duration-300", activeTab === tab.id ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xl scale-105" : "text-muted-foreground hover:text-foreground")}>
                        <tab.icon className={cn("w-5 h-5", activeTab === tab.id ? tab.color : "")} />{tab.label}
                    </button>
                ))}
            </div>

            <div className="glass-card p-8 rounded-[2rem] min-h-[450px] flex flex-col relative overflow-hidden animate-in duration-700 delay-200 shadow-2xl transition-all">
                {files.length === 0 ? (
                    <div onClick={() => fileInputRef.current?.click()} className="flex-1 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center space-y-6 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group relative">
                        <div className="w-24 h-24 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:text-primary transition-all duration-500 shadow-lg"><Plus className="w-12 h-12" /></div>
                        <div className="text-center relative z-10"><p className="text-2xl font-black tracking-tight mb-2">{t.pdfMaster.uploadMsg}</p><div className="flex items-center justify-center gap-3"><span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider border">PDF ONLY</span><span className="text-sm text-muted-foreground font-medium underline underline-offset-4">Select multiple files to merge</span></div></div>
                    </div>
                ) : (
                    <div className="space-y-8 flex-1 flex flex-col h-full">
                        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-6"><div className="flex items-center gap-4"><div className="p-4 bg-primary/10 rounded-2xl text-primary font-black flex items-center gap-2"><CheckCircle2 className="w-5 h-5" />{files.length} {t.pdfMaster.filesSelected}</div><button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-muted-foreground hover:text-primary transition-all underline">Add More</button></div><button onClick={() => { setFiles([]); setResultUrl(null); setProgress(0); }} className="px-4 py-2 rounded-xl text-sm font-bold text-red-500 hover:text-red-600 transition-all underline">Clear</button></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto max-h-[400px] pr-2">
                            {files.map((file) => (
                                <div key={file.id} className="flex items-center gap-4 p-5 rounded-3xl bg-white dark:bg-zinc-900 border group hover:border-primary/30 hover:shadow-xl transition-all relative">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center transition-transform"><FileText className="w-7 h-7" /></div>
                                    <div className="flex-1 min-w-0"><p className="font-extrabold truncate text-lg">{file.name}</p><div className="flex items-center gap-2 text-xs text-muted-foreground font-bold uppercase tracking-wider mt-1"><span>{file.size}</span>{file.pageCount && <><span className="w-1 h-1 rounded-full bg-zinc-300" /><span>{file.pageCount} Pages</span></>}</div></div>
                                    <button onClick={() => removeFile(file.id)} className="p-3 text-muted-foreground hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"><Trash2 className="w-6 h-6" /></button>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 mt-auto border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                            {!resultUrl ? (
                                <div className="space-y-4">
                                    {processing && <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)]" style={{ width: `${progress}%` }} /></div>}
                                    <button onClick={handleAction} disabled={processing || (activeTab === 'merge' && files.length < 2)} className="w-full h-20 rounded-3xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl disabled:opacity-50 flex items-center justify-center gap-4 group overflow-hidden">
                                        <span>{activeTab === 'merge' ? t.pdfMaster.mergeNow : activeTab === 'split' ? t.pdfMaster.splitNow : t.pdfMaster.toImage}</span>
                                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
                                    <div className="flex items-center justify-center gap-3 p-5 bg-emerald-50 text-emerald-600 rounded-[1.5rem] font-black border-2 border-emerald-200 text-lg"><CheckCircle2 className="w-7 h-7" />Success! Processing Complete.</div>
                                    <button onClick={() => { if (!resultUrl) return; const l = document.createElement('a'); l.href = resultUrl; l.download = `${activeTab}.${activeTab === 'merge' ? 'pdf' : 'zip'}`; l.click(); }} className="w-full h-20 rounded-3xl bg-emerald-600 text-white font-black text-xl hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4"><Download className="h-7 w-7" /> Download</button>
                                    <button onClick={() => { setFiles([]); setResultUrl(null); setProgress(0); }} className="w-full py-4 text-muted-foreground font-bold hover:text-foreground">Do another task</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" multiple={activeTab === 'merge'} onChange={handleFileSelect} />

            <style jsx>{`
                .text-gradient { background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            `}</style>
        </div>
    )
}
