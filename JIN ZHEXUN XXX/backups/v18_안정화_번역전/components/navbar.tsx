import { useState } from 'react'
import Link from 'next/link'
import { LanguagePicker } from './LanguagePicker'
import { useLanguage } from '@/context/language-context'
import { Menu, X, LayoutGrid } from 'lucide-react'
import { MegaMenu } from './MegaMenu'

export function Navbar() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center space-x-1.5 font-bold text-xl tracking-tight transition-all hover:opacity-90 active:scale-95 group">
                        <div className="relative flex items-center justify-center">
                            <span className="text-2xl drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] transition-all duration-500">⚡</span>
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-800 dark:from-white dark:via-zinc-400 dark:to-zinc-200 font-black italic">
                            {t.navbar.title}
                        </span>
                    </Link>

                    {/* Desktop & Mobile All Tools Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMegaMenuOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
                        >
                            <LayoutGrid className="w-4 h-4" />
                            <span>{t.allTools}</span>
                        </button>

                        <div className="hidden md:flex items-center gap-6">
                            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                            <Link href="/advertise" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">
                                {t.advertise.title}
                            </Link>
                            <LanguagePicker />
                        </div>

                        {/* Mobile Menu Button (Optional, for other links like Advertise/Contact) */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Overlay (for non-tool links) */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 z-[9999] bg-white dark:bg-zinc-950 flex flex-col h-screen w-screen overflow-hidden">
                        <div className="flex h-16 items-center justify-between px-4 border-b border-zinc-100 dark:border-zinc-900">
                            <span className="font-black text-lg text-zinc-900 dark:text-white uppercase tracking-widest">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-8">
                            <div className="space-y-4 text-center">
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsMegaMenuOpen(true);
                                    }}
                                    className="block w-full py-6 rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 font-black text-2xl"
                                >
                                    {t.allTools}
                                </button>

                                <Link
                                    href="/advertise"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full py-6 rounded-[2rem] bg-primary text-white font-black text-2xl"
                                >
                                    {t.advertise.title}
                                </Link>

                                <div className="flex justify-center pt-8">
                                    <LanguagePicker />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <MegaMenu
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
            />
        </>
    )
}
