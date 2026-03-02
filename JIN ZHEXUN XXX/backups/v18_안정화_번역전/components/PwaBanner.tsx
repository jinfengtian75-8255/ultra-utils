'use client'

import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PwaBanner() {
    const { t } = useLanguage()
    const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handler = (e: Event) => {
            const promptEvent = e as BeforeInstallPromptEvent;
            promptEvent.preventDefault()
            setInstallPrompt(promptEvent)
            // Only show if user hasn't dismissed it this session
            if (!sessionStorage.getItem('pwa_dismissed')) {
                setIsVisible(true)
            }
        }

        window.addEventListener('beforeinstallprompt', handler)

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsVisible(false)
        }

        return () => window.removeEventListener('beforeinstallprompt', handler)
    }, [])

    const handleInstall = async () => {
        if (!installPrompt) return
        installPrompt.prompt()
        const { outcome } = await installPrompt.userChoice
        if (outcome === 'accepted') {
            setIsVisible(false)
        }
        setInstallPrompt(null)
    }

    const handleDismiss = () => {
        setIsVisible(false)
        sessionStorage.setItem('pwa_dismissed', 'true')
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="relative group overflow-hidden rounded-3xl glass-card border border-primary/20 p-6 shadow-2xl shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-10"
                >
                    <X className="w-4 h-4 text-zinc-400" />
                </button>

                <div className="relative z-10 flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                        <Download className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg leading-tight">{t.home.installPwa}</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {t.home.installPwaDesc}
                            </p>
                        </div>
                        <button
                            onClick={handleInstall}
                            className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
                        >
                            {t.home.installBtn}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
