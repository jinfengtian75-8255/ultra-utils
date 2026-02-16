'use client'

import Link from 'next/link'
import { Home, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function NotFound() {
    const { t } = useLanguage()

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 text-center px-4">
            <div className="relative">
                {/* Visual Background Decoration */}
                <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl opacity-50 -z-10 animate-pulse"></div>

                <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 opacity-20 select-none">
                    404
                </h1>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl">
                        <AlertCircle className="w-12 h-12 text-primary animate-bounce" />
                    </div>
                </div>
            </div>

            <div className="mt-8 space-y-6 max-w-lg">
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    {t.notFound.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.notFound.desc}
                </p>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-primary/20"
                    >
                        <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                        {t.notFound.backHome}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </Link>
                </div>
            </div>

            {/* Suggested tools for lost users */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl opacity-50 hover:opacity-100 transition-opacity">
                {[
                    { label: t.navbar.bgRemover, href: '/tools/background-remover' },
                    { label: t.navbar.ytGrab, href: '/tools/youtube-thumbnail' },
                    { label: t.navbar.imageSuite, href: '/tools/image-compressor' },
                    { label: t.navbar.qrGen, href: '/tools/qr-generator' }
                ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="p-4 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:border-primary/50 hover:text-primary transition-all"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}
