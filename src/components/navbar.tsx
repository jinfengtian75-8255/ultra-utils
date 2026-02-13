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
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight transition-opacity hover:opacity-80">
                    <span className="text-2xl">⚡</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
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
                <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex flex-col p-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold border-b border-zinc-100 dark:border-zinc-900 pb-4"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/advertise"
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-black text-primary italic"
                        >
                            {t.advertise.title}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
