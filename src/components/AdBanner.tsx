'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useLanguage } from '@/context/language-context';

interface AdSlide {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
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
    const [ads, setAds] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const houseAds: Record<string, AdSlide[]> = {
        'top-banner': [
            { id: 'h_bg', title: t.houseAds.bgRemoverTitle, description: t.houseAds.bgRemoverDesc, link: '/tools/background-remover' },
            { id: 'h_pdf', title: t.houseAds.pdfMasterTitle, description: t.houseAds.pdfMasterDesc, link: '/tools/pdf-master' },
        ],
        'left-sidebar': [
            { id: 'h_comp', title: t.houseAds.imageCompTitle, description: t.houseAds.imageCompDesc, link: '/tools/image-compressor' },
        ],
        'right-sidebar': [
            { id: 'h_yt', title: t.houseAds.ytGrabTitle, description: t.houseAds.ytGrabDesc, link: '/tools/youtube-thumbnail' },
        ],
        'bottom-banner': [
            { id: 'h_coffee', title: t.houseAds.coffeeTitle, description: t.houseAds.coffeeDesc, link: 'https://www.buymeacoffee.com/jinfengtian75' },
        ],
        'home-mid-banner': [
            { id: 'h_all', title: t.houseAds.bgRemoverTitle, description: t.houseAds.bgRemoverDesc, link: '/tools/background-remover' },
        ]
    };

    useEffect(() => {
        setMounted(true);
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
                const cloudAds: any[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.startDate <= now && data.endDate >= now) {
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
    }, [slot, t]); // Add t to dependency to update when language changes

    useEffect(() => {
        if (ads.length <= 1 || useAdSense) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ads.length);
        }, 12000);
        return () => clearInterval(interval);
    }, [ads.length, useAdSense]);

    // Google AdSense Push Trigger
    useEffect(() => {
        if (useAdSense && mounted) {
            try {
                // @ts-ignore
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

    if (useAdSense) {
        return (
            <div className={cn(
                "relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-700",
                isSkyscraper ? "h-full min-h-[600px] w-full" : "w-full my-8 mx-auto",
                className
            )}>
                <div className={cn(
                    "relative flex flex-col items-center justify-center p-6 border rounded-[2rem] transition-all duration-700 overflow-hidden",
                    "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-xl group-hover:border-primary/20",
                    isSkyscraper ? "h-full w-full max-w-[170px]" : "w-full max-w-[728px] min-h-[120px]"
                )}>
                    {/* House Ad as Dynamic Background Fallback */}
                    <div className="absolute inset-0 z-0">
                        {ads.length > 0 && ads.map((slide, index) => (
                            <div
                                key={slide.id || index}
                                className={cn(
                                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-6 text-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100",
                                    index === currentIndex ? "translate-y-0" : "translate-y-4 pointer-events-none"
                                )}
                            >
                                <span className="text-[7px] font-black text-primary/40 uppercase tracking-widest mb-1">Internal Ad Fallback</span>
                                <h4 className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase">{slide.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 w-full flex flex-col items-center gap-2">
                        <span className="text-[8px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 italic">Advertisement</span>

                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                            <ins className="adsbygoogle"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: isSkyscraper ? '600px' : '90px',
                                    maxWidth: isSkyscraper ? '160px' : '728px',
                                }}
                                data-ad-client={ADSENSE_CLIENT}
                                data-ad-slot={slot}
                                data-ad-format={isSkyscraper ? 'vertical' : 'horizontal'}
                                data-full-width-responsive="false"></ins>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn(
            "relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-700",
            isSkyscraper ? "h-full min-h-[600px] w-full" : "w-full my-8 mx-auto",
            className
        )}>
            <div className={cn(
                "relative flex flex-col items-center justify-center p-6 border rounded-[2rem] transition-all duration-700 overflow-hidden",
                "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-xl group-hover:border-primary/20",
                isSkyscraper ? "h-full w-full max-w-[170px]" : "w-full max-w-[728px] min-h-[120px]"
            )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-4">
                    {ads.length > 0 ? (
                        ads.map((slide, index) => (
                            <div
                                key={slide.id || index}
                                className={cn(
                                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-6 text-center",
                                    index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                )}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[8px] uppercase tracking-[0.3em] font-black text-zinc-400 dark:text-zinc-600 italic">OFFICIAL</span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-black px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">HOUSE AD</span>
                                </div>

                                <h3 className={cn("font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight", isSkyscraper ? "text-base mb-2" : "text-xl mb-1")}>
                                    {slide.title}
                                </h3>
                                <p className={cn("text-zinc-500 dark:text-zinc-400 leading-tight font-medium max-w-sm mx-auto", isSkyscraper ? "text-xs px-2" : "text-sm")}>
                                    {slide.description}
                                </p>

                                {slide.link && (
                                    <a
                                        href={slide.link}
                                        target={slide.link.startsWith('http') ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="mt-4 px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-xs font-black hover:scale-105 transition-all shadow-lg shadow-zinc-200 dark:shadow-none"
                                    >
                                        Try Now
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[8px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 italic">Space Reserved</span>
                            </div>
                            <h4 className="text-sm font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-widest">Premium Ad Slot</h4>
                            <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 hover:text-primary transition-colors cursor-default">Advertise with UltraUtils</p>
                            <div className="h-[1px] w-12 bg-zinc-100 dark:bg-zinc-900 mt-2" />
                        </div>
                    )}
                </div>

                {!useAdSense && ads.length > 1 && (
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="p-2 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white pointer-events-auto transform -translate-x-4 group-hover:translate-x-0"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="p-2 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white pointer-events-auto transform translate-x-4 group-hover:translate-x-0"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
