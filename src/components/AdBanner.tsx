'use client';

import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Sparkles, Layout, Zap, Wand2, FileText, Coffee } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useLanguage } from '@/context/language-context';

interface AdSlide {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
    slot?: string;
    active?: boolean;
    startDate?: string;
    endDate?: string;
}

interface AdBannerProps {
    className?: string;
    slot: string;
    type?: 'banner' | 'skyscraper' | 'square';
    useAdSense?: boolean;
}

const ADSENSE_CLIENT = "ca-pub-1373852776233080";

export default function AdBanner({ className, slot, type = 'banner', useAdSense = false }: AdBannerProps) {
    const { t } = useLanguage();
    const [ads, setAds] = useState<AdSlide[]>([]);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const houseAds = useMemo<Record<string, AdSlide[]>>(() => ({
        'top-banner': [
            { id: 'h_bg', title: t.houseAds.bgRemoverTitle, description: t.houseAds.bgRemoverDesc, link: '/tools/background-remover' },
            { id: 'h_pdf', title: t.houseAds.pdfMasterTitle, description: t.houseAds.pdfMasterDesc, link: '/tools/pdf-master' },
        ],
        'left-sidebar': [
            { id: 'h_comp', title: t.houseAds.imageCompTitle, description: t.houseAds.imageCompDesc, link: '/tools/image-compressor' },
            { id: 'h_prompt', title: t.navbar.promptGen, description: t.promptGen.desc, link: '/tools/prompt-generator' },
        ],
        'right-sidebar': [
            { id: 'h_yt', title: t.houseAds.ytGrabTitle, description: t.houseAds.ytGrabDesc, link: '/tools/youtube-thumbnail' },
            { id: 'h_planner', title: t.navbar.ytPlanner, description: t.ytPlanner.desc, link: '/tools/youtube-planner' },
        ],
        'bottom-banner': [
            { id: 'h_coffee', title: t.houseAds.coffeeTitle, description: t.houseAds.coffeeDesc, link: 'https://www.buymeacoffee.com/jinfengtian75' },
            { id: 'h_all', title: t.home.badge, description: t.home.desc, link: '/' },
        ],
        'home-mid-banner': [
            { id: 'h_all', title: t.houseAds.bgRemoverTitle, description: t.houseAds.bgRemoverDesc, link: '/tools/background-remover' },
            { id: 'h_yt', title: t.navbar.ytGrab, description: t.houseAds.ytGrabDesc, link: '/tools/youtube-thumbnail' },
        ]
    }), [t]);

    const adVisuals: Record<string, { gradient: string, icon: React.ElementType, accent: string }> = {
        'h_bg': { gradient: 'from-blue-600 via-indigo-600 to-purple-700', icon: Sparkles, accent: 'bg-blue-400' },
        'h_pdf': { gradient: 'from-orange-500 via-red-600 to-rose-700', icon: FileText, accent: 'bg-orange-400' },
        'h_comp': { gradient: 'from-emerald-500 via-teal-600 to-cyan-700', icon: Zap, accent: 'bg-emerald-400' },
        'h_yt': { gradient: 'from-red-600 via-rose-700 to-red-900', icon: Layout, accent: 'bg-red-400' },
        'h_coffee': { gradient: 'from-yellow-400 via-orange-500 to-amber-600', icon: Coffee, accent: 'bg-yellow-300' },
        'h_all': { gradient: 'from-purple-600 via-fuchsia-600 to-pink-700', icon: Sparkles, accent: 'bg-purple-400' },
        'h_prompt': { gradient: 'from-indigo-600 via-purple-600 to-pink-600', icon: Wand2, accent: 'bg-indigo-400' },
        'h_planner': { gradient: 'from-rose-500 via-orange-500 to-yellow-500', icon: Wand2, accent: 'bg-rose-400' },
        'h_qr': { gradient: 'from-zinc-800 via-zinc-900 to-black', icon: Layout, accent: 'bg-zinc-500' },
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        if (!db) {
            const genericSlot = slot.includes('top') ? 'top-banner' :
                slot.includes('bottom') ? 'bottom-banner' :
                    slot.includes('left') ? 'left-sidebar' :
                        slot.includes('right') ? 'right-sidebar' : slot;

            setAds(houseAds[slot] || houseAds[genericSlot] || []);
            return;
        }

        const now = new Date().toISOString().split('T')[0];
        const fetchAds = (slotID: string, isFallback: boolean = false) => {
            const q = query(
                collection(db!, 'campaigns'),
                where('slot', '==', slotID),
                where('active', '==', true)
            );

            return onSnapshot(q, (snapshot) => {
                const cloudAds: AdSlide[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as AdSlide;
                    if (data.startDate && data.endDate && data.startDate <= now && data.endDate >= now) {
                        cloudAds.push(data);
                    }
                });

                if (cloudAds.length > 0) {
                    setAds(cloudAds);
                } else if (!isFallback) {
                    const genericSlot = slot.includes('top') ? 'top-banner' :
                        slot.includes('bottom') ? 'bottom-banner' :
                            slot.includes('left') ? 'left-sidebar' :
                                slot.includes('right') ? 'right-sidebar' : null;

                    if (genericSlot && genericSlot !== slotID) {
                        fetchAds(genericSlot, true);
                    } else {
                        setAds(houseAds[slot] || houseAds[genericSlot || ''] || []);
                    }
                } else {
                    const genericSlot = slot.includes('top') ? 'top-banner' :
                        slot.includes('bottom') ? 'bottom-banner' : slot;
                    setAds(houseAds[slot] || houseAds[genericSlot] || []);
                }
            });
        };

        const unsubscribe = fetchAds(slot);
        return () => unsubscribe();
    }, [slot, t, mounted, houseAds]);

    useEffect(() => {
        if (ads.length <= 1 || isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ads.length);
        }, 8000); // Faster rotation for better visibility
        return () => clearInterval(interval);
    }, [ads.length, isHovered]);

    // Google AdSense Push Trigger
    useEffect(() => {
        if (useAdSense && mounted) {
            try {
                // @ts-expect-error - Google AdSense window variable
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push failed", e);
            }
        }
    }, [useAdSense, mounted]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ads.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);

    if (!mounted) return <div className={cn("bg-zinc-100/10 rounded-3xl animate-pulse", className)} />;

    const isSkyscraper = type === 'skyscraper';
    const isSquare = type === 'square';

    if (useAdSense) {
        // ... (AdSense implementation remains similar but with uncropped container)
        return (
            <div className={cn(
                "relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-700 w-full mx-auto",
                isSkyscraper ? "h-full min-h-[600px]" : isSquare ? "aspect-square max-w-[300px]" : "min-h-[100px] max-w-[728px]",
                className
            )}>
                <div className={cn(
                    "relative w-full h-full flex flex-col items-center justify-center border rounded-[2rem] transition-all duration-700 overflow-hidden",
                    "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-xl group-hover:border-primary/20"
                )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50" />
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
                        <span className="text-[8px] uppercase font-black tracking-[0.2em] text-zinc-400 mb-1">Sponsored</span>
                        <div className="w-full flex items-center justify-center overflow-visible">
                            <ins className="adsbygoogle"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: isSkyscraper ? '600px' : isSquare ? '250px' : '90px',
                                    maxWidth: isSkyscraper ? '160px' : isSquare ? '300px' : '728px',
                                }}
                                data-ad-client={ADSENSE_CLIENT}
                                data-ad-slot={slot}
                                data-ad-format={isSkyscraper ? 'vertical' : isSquare ? 'square' : 'horizontal'}
                                data-full-width-responsive="false"></ins>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-700 w-full mx-auto",
                isSkyscraper ? "h-full min-h-[600px]" : isSquare ? "aspect-square max-w-[300px]" : "min-h-[100px] max-w-[900px]",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={cn(
                "relative w-full h-full flex flex-col items-center justify-center border rounded-[2rem] transition-all duration-700 overflow-hidden",
                "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-2xl group-hover:border-primary/30",
            )}>
                {/* Unified Rotation Content */}
                <div className="absolute inset-0 z-0">
                    {ads.map((slide, index) => {
                        const visual = adVisuals[slide.id] || adVisuals['h_all'];
                        const Icon = visual.icon;

                        return (
                            <div
                                key={slide.id || index}
                                className={cn(
                                    "absolute inset-0 flex transition-all duration-1000 ease-in-out overflow-hidden group/slide",
                                    index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"
                                )}
                            >
                                {/* Background Aesthetic */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br transition-all duration-1000",
                                    visual.gradient,
                                    "opacity-10 group-hover/slide:opacity-15"
                                )} />

                                {/* Geometric Decorations */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                                <div className={cn(
                                    "relative z-10 w-full h-full flex px-8 py-6 items-center gap-8",
                                    isSkyscraper ? "flex-col justify-center text-center p-4" : "flex-row text-left"
                                )}>
                                    {/* Visual Portion - Supporting both Images and Icons */}
                                    <div className={cn(
                                        "shrink-0 flex items-center justify-center relative",
                                        isSkyscraper ? "w-32 h-32 mb-8" : isSquare ? "w-24 h-24 mb-4" : "w-16 h-16 md:w-20 md:h-20"
                                    )}>
                                        <div className={cn(
                                            "absolute inset-0 rounded-[1.5rem] blur-xl opacity-40 animate-pulse",
                                            visual.accent
                                        )} />
                                        <div className={cn(
                                            "relative w-full h-full rounded-[1.5rem] flex items-center justify-center shadow-lg border border-white/20 overflow-hidden bg-gradient-to-br",
                                            visual.gradient
                                        )}>
                                            {slide.imageUrl ? (
                                                <img
                                                    src={slide.imageUrl}
                                                    alt={slide.title}
                                                    className="w-full h-full object-contain p-2"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10" />
                                                    <Icon className="w-1/2 h-1/2 text-white drop-shadow-md transform group-hover/slide:scale-110 transition-transform duration-500" />
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Link Overlay for entire slide */}
                                    {slide.link && (
                                        <a
                                            href={slide.link}
                                            target={slide.link.startsWith('http') ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 z-20"
                                            aria-label={slide.title}
                                        />
                                    )}

                                    {/* Text Content */}
                                    <div className={cn(
                                        "flex-1 min-w-0 flex flex-col justify-center relative z-10",
                                        isSkyscraper && "items-center"
                                    )}>
                                        <div className={cn(
                                            "flex items-center gap-2 mb-2",
                                            isSkyscraper && "justify-center"
                                        )}>
                                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/80 px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">
                                                Featured Tool
                                            </span>
                                        </div>
                                        <h3 className={cn(
                                            "font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug mb-2 break-keep",
                                            isSkyscraper ? "text-lg px-2" : "text-xl md:text-2xl"
                                        )}>
                                            {slide.title}
                                        </h3>
                                        <p className={cn(
                                            "text-zinc-500 dark:text-zinc-400 font-medium line-clamp-3 leading-tight break-keep",
                                            isSkyscraper ? "text-xs px-2" : "text-xs md:text-sm max-w-md"
                                        )}>
                                            {slide.description}
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    {slide.link && !isSkyscraper && (
                                        <div className="hidden md:flex px-6 py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-xl items-center gap-2 shrink-0 overflow-hidden relative group/btn z-30 pointer-events-none">
                                            <span className="relative z-10">Visit Site</span>
                                            <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                            <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                        </div>
                                    )}

                                    {isSkyscraper && slide.link && (
                                        <div className="mt-6 px-6 py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg w-full max-w-[140px] text-center z-30 pointer-events-none">
                                            Visit
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {ads.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                            )}
                        />
                    ))}
                </div>

                {/* Navigation Controls */}
                {ads.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white z-40 shadow-sm border border-zinc-200 dark:border-zinc-700"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white z-40 shadow-sm border border-zinc-200 dark:border-zinc-700"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </>
                )}
            </div>

        </div>
    );
}
