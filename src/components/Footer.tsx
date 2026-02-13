'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { Coffee, Github, Twitter, Youtube, ExternalLink, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: t.footer.tools,
            links: [
                { name: t.navbar.ytGrab, href: '/tools/youtube-thumbnail' },
                { name: t.navbar.bgRemover, href: '/tools/background-remover' },
                { name: t.navbar.imageSuite, href: '/tools/image-compressor' },
                { name: t.navbar.qrGen, href: '/tools/qr-generator' },
                { name: t.navbar.textConv, href: '/tools/text-converter' },
                { name: t.navbar.promptGen, href: '/tools/prompt-generator' },
            ]
        },
        {
            title: t.footer.resources,
            links: [
                { name: t.footer.advertise, href: '/advertise', highlight: true },
                { name: 'API Docs', href: '#', badge: 'Soon' },
                { name: 'Sitemap', href: '/sitemap.xml' },
            ]
        },
        {
            title: t.footer.legal,
            links: [
                { name: t.footer.privacy, href: '/privacy' },
                { name: t.footer.terms, href: '/terms' },
                { name: 'Cookies', href: '#' },
            ]
        }
    ];

    return (
        <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 mt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2 font-black text-2xl tracking-tighter">
                            <span className="text-3xl">⚡</span>
                            <span className="text-gradient">ULTRAUTILS</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                            {t.home.desc} {t.home.descLine2}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/ultrautils" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/ultrautils" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/@ultrautils" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-muted-foreground hover:text-primary transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {sections.map((section, i) => (
                        <div key={i} className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
                                                link.highlight ? "text-primary font-bold" : "text-muted-foreground"
                                            )}
                                        >
                                            {link.name}
                                            {link.badge && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-bold uppercase tracking-wider">
                                                    {link.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar & Donation */}
                <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                        <span>© {currentYear} ULTRAUTILS. {t.footer.allRights}</span>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span className="flex items-center gap-1">
                            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the Global Creators
                        </span>
                    </div>

                    {/* Buy Me a Coffee Simulated Button */}
                    <a
                        href="https://www.buymeacoffee.com/jinzhexun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 px-6 py-3 bg-[#FFDD00] text-zinc-900 rounded-2xl font-black text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Coffee className="w-5 h-5 animate-bounce group-hover:rotate-12 transition-transform" />
                        {t.footer.coffee}
                    </a>
                </div>
            </div>
        </footer>
    );
}
