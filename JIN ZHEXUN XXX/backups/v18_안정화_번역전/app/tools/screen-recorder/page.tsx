'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Video, StopCircle, Download, Camera, Mic, Info, Play, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function ScreenRecorderPage() {
    const { t } = useLanguage()
    const [isRecording, setIsRecording] = useState(false)
    const [stream, setStream] = useState<MediaStream | null>(null)
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([])
    const [includeWebcam, setIncludeWebcam] = useState(false)
    const [includeMic, setIncludeMic] = useState(true)
    const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null)
    const [isMounted, setIsMounted] = useState(false)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const videoPreviewRef = useRef<HTMLVideoElement>(null)
    const webcamPreviewRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const stopStreams = useCallback(() => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop())
            setStream(null)
        }
        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop())
            setWebcamStream(null)
        }
    }, [stream, webcamStream])

    const startRecording = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true
            })

            let finalStream = screenStream

            if (includeMic) {
                try {
                    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true })
                    const audioTracks = audioStream.getAudioTracks()
                    if (audioTracks.length > 0) {
                        const desktopAudioTracks = screenStream.getAudioTracks()
                        // Merge tracks if needed, but for simplicity we add it
                        finalStream.addTrack(audioTracks[0])
                    }
                } catch (e) {
                    console.error("Mic access denied", e)
                }
            }

            if (includeWebcam) {
                try {
                    const camStream = await navigator.mediaDevices.getUserMedia({ video: true })
                    setWebcamStream(camStream)
                    if (webcamPreviewRef.current) {
                        webcamPreviewRef.current.srcObject = camStream
                    }
                } catch (e) {
                    console.error("Webcam access denied", e)
                }
            }

            setStream(finalStream)
            if (videoPreviewRef.current) {
                videoPreviewRef.current.srcObject = finalStream
            }

            const mediaRecorder = new MediaRecorder(finalStream, {
                mimeType: 'video/webm;codecs=vp9,opus'
            })

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setRecordedChunks(prev => [...prev, event.data])
                }
            }

            mediaRecorder.onstop = () => {
                stopStreams()
            }

            mediaRecorderRef.current = mediaRecorder
            setRecordedChunks([])
            mediaRecorder.start()
            setIsRecording(true)

            // Auto stop when screen sharing is stopped via browser UI
            screenStream.getVideoTracks()[0].onended = () => {
                stopRecording()
            }

        } catch (err) {
            console.error("Error starting recording:", err)
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop()
        }
        setIsRecording(false)
        stopStreams()
    }

    const downloadRecording = () => {
        if (recordedChunks.length === 0) return

        const blob = new Blob(recordedChunks, { type: 'video/mp4' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `UltraUtils-Record-${new Date().getTime()}.mp4`
        a.click()
        URL.revokeObjectURL(url)
    }

    if (!isMounted) return null

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 text-sm font-bold mb-4 border border-sky-100 dark:border-sky-900/50">
                    <Video className="w-4 h-4" />
                    <span>Free Web Recorder</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient from-sky-600 to-indigo-600">{t.screenRecorder.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.screenRecorder.desc}
                </p>
            </div>

            {/* Main Interface */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Preview & Controls */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="glass-card rounded-[2.5rem] p-4 border-2 border-zinc-200/50 dark:border-zinc-800/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-100 overflow-hidden relative">
                        {/* Video Area */}
                        <div className="aspect-video bg-zinc-950 rounded-[2rem] overflow-hidden relative group">
                            {stream ? (
                                <video
                                    ref={videoPreviewRef}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 space-y-4">
                                    <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 animate-pulse">
                                        <Monitor className="w-10 h-10" />
                                    </div>
                                    <p className="font-bold">{t.screenRecorder.ready}</p>
                                </div>
                            )}

                            {/* Webcam Overlay (Visible when includeWebcam is true and recording) */}
                            {includeWebcam && webcamStream && (
                                <div className="absolute bottom-6 right-6 w-48 aspect-video rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-10">
                                    <video
                                        ref={webcamPreviewRef}
                                        autoPlay
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover mirror-mode"
                                    />
                                </div>
                            )}

                            {/* Recording Indicator */}
                            {isRecording && (
                                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500 text-white font-black text-xs animate-pulse tracking-widest uppercase">
                                    <span className="w-2 h-2 rounded-full bg-white block" />
                                    REC
                                </div>
                            )}
                        </div>

                        {/* Controls Container */}
                        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                {!isRecording ? (
                                    <button
                                        onClick={startRecording}
                                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/10"
                                    >
                                        <Play className="w-6 h-6 fill-current" />
                                        {t.screenRecorder.startBtn}
                                    </button>
                                ) : (
                                    <button
                                        onClick={stopRecording}
                                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-500 text-white font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                                    >
                                        <StopCircle className="w-6 h-6" />
                                        {t.screenRecorder.stopBtn}
                                    </button>
                                )}

                                {recordedChunks.length > 0 && !isRecording && (
                                    <button
                                        onClick={downloadRecording}
                                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 text-white font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
                                    >
                                        <Download className="w-6 h-6" />
                                        {t.screenRecorder.downloadBtn}
                                    </button>
                                )}
                            </div>

                            {/* Logic for Webcam/Mic Toggle */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIncludeWebcam(!includeWebcam)}
                                    className={cn(
                                        "p-4 rounded-2xl transition-all border-2",
                                        includeWebcam
                                            ? "bg-sky-50 border-sky-200 text-sky-600 dark:bg-sky-950/30 dark:border-sky-800"
                                            : "bg-zinc-50 border-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800"
                                    )}
                                    title={t.screenRecorder.webcam}
                                >
                                    <Camera className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => setIncludeMic(!includeMic)}
                                    className={cn(
                                        "p-4 rounded-2xl transition-all border-2",
                                        includeMic
                                            ? "bg-sky-50 border-sky-200 text-sky-600 dark:bg-sky-950/30 dark:border-sky-800"
                                            : "bg-zinc-50 border-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800"
                                    )}
                                    title={t.screenRecorder.mic}
                                >
                                    <Mic className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Sidebar Tips */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-8 rounded-[2rem] bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-2xl shadow-sky-500/20">
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2 italic">
                            PRO TIP
                        </h3>
                        <p className="font-bold text-sky-50 leading-relaxed mb-6">
                            For the highest quality, select "Entire Screen" and ensure system audio is checked if you want to record sound from your computer.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <Monitor className="w-5 h-5 text-sky-200" />
                                <span className="font-bold text-sm">4K Resolution Support</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <Mic className="w-5 h-5 text-sky-200" />
                                <span className="font-bold text-sm">Studio Quality Audio</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-[2rem] border-2 border-zinc-100 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-black">
                            <Info className="w-5 h-5 text-primary" />
                            <span>Privacy Note</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                            Your recordings are processed 100% locally in your browser. Nothing is ever uploaded to our servers. Your privacy is our priority.
                        </p>
                    </div>
                </div>
            </div>

            <AdBanner slot="tool-bottom-banner" useAdSense={true} />

            {/* SEO Guide Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient">{t.screenRecorder.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.screenRecorder.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.screenRecorder.guide.sections.map((section: any, idx: number) => (
                        <div key={idx} className="glass-card p-8 rounded-[2.5rem] space-y-4 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800/50">
                            <h3 className="text-xl font-black text-primary italic uppercase tracking-tighter">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed font-bold">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    <h3 className="text-3xl font-black text-center italic">FAQ</h3>
                    <div className="space-y-4">
                        {t.screenRecorder.guide.faq.map((item: any, idx: number) => (
                            <div key={idx} className="glass-card p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800/50 transition-all hover:border-primary/30 group">
                                <h4 className="text-lg font-black text-zinc-900 dark:text-zinc-100 mb-4 flex items-start gap-4">
                                    <span className="text-primary italic font-black text-2xl">Q.</span>
                                    <span className="pt-1">{item.q}</span>
                                </h4>
                                <div className="pl-12">
                                    <p className="text-muted-foreground leading-relaxed font-bold text-md">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mirror-mode {
                    transform: scaleX(-1);
                }
            `}</style>
        </div>
    )
}
