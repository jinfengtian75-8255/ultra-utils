import { useState } from 'react'
import Link from 'next/link'
import { LanguagePicker } from './LanguagePicker'
import { useLanguage } from '@/context/language-context'
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/tools/youtube-thumbnail', label: t.navbar.ytGrab },
        { href: '/tools/qr-generator', label: t.navbar.qrGen },
        { href: '/tools/image-compressor', label: t.navbar.imageSuite },
        { href: '/tools/prompt-generator', label: t.navbar.promptGen },
        { href: '/tools/text-converter', label: t.navbar.textConv },
        { href: '/tools/background-remover', label: t.navbar.bgRemover },
        { href: '/tools/pdf-master', label: t.pdfMaster.title },
    ];

    return (
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

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguagePicker />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                    <Link href="/advertise" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">
                        {t.advertise.title}
                    </Link>
                    <LanguagePicker />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-16 z-40 bg-white dark:bg-zinc-950 animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex flex-col p-8 space-y-2 h-[calc(100vh-64px)] overflow-y-auto">
                        <div className="py-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 mb-6 block">
                                Navigation Menu
                            </span>
                            <div className="space-y-1">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between text-2xl font-black py-4 border-b border-zinc-100 dark:border-zinc-900 group active:scale-95 transition-all"
                                        style={{ animationDelay: `${idx * 50}ms` }}
                                    >
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
                                            {link.label}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 mt-auto pb-12">
                            <Link
                                href="/advertise"
                                onClick={() => setIsOpen(false)}
                                className="block w-full p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-900 text-center font-black text-xl shadow-xl active:scale-95 transition-all"
                            >
                                {t.advertise.title}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
