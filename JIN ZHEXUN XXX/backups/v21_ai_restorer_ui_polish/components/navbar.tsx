import { useState } from 'react'
import Link from 'next/link'
import { LanguagePicker } from './LanguagePicker'
import { useLanguage } from '@/context/language-context'
import { X, LayoutGrid } from 'lucide-react'
import { MegaMenu } from './MegaMenu'

export function Navbar() {
    const { t } = useLanguage();
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center space-x-1.5 font-bold text-xl tracking-tight transition-all hover:opacity-90 active:scale-95 group">
                        <div className="relative flex items-center justify-center">
                            <img src="/logo.svg" alt="UltraUtils Logo" className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <span className="text-zinc-900 dark:text-zinc-50 font-black italic">
                            {t.navbar.title}
                        </span>
                    </Link>

                    {/* Desktop & Mobile All Tools Button */}
                    <div className="flex items-center gap-2.5 sm:gap-4">
                        <button
                            onClick={() => setIsMegaMenuOpen(true)}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
                        >
                            <LayoutGrid className="w-4 h-4" />
                            <span className="whitespace-nowrap">{t.navbar.allTools}</span>
                        </button>

                        <div className="hidden md:flex items-center gap-6">
                            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                            <Link href="/advertise" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">
                                {t.advertise.title}
                            </Link>
                        </div>

                        {/* Language Picker - Now visible on both desktop and mobile */}
                        <LanguagePicker />
                    </div>
                </div>
            </nav>

            <MegaMenu
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
            />
        </>
    )
}
