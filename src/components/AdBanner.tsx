'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

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

const MOCK_ADS: Record<string, AdSlide[]> = {
    'top-banner': [
        { id: '1', title: 'Premium YouTube Templates', description: 'Boost your CTR with our pro templates.' },
    ],
    'left-sidebar': [
        { id: 's1', title: 'Host with Vercel', description: 'Deploy your next app in seconds.' },
    ],
    'right-sidebar': [
        { id: 'r1', title: 'Design like a Pro', description: 'New Figma course for developers.' },
    ],
    'bottom-banner': [
        { id: 'b1', title: 'Share UltraUtils', description: 'Love this tool? Share it with your friends!' },
    ],
    'home-mid-banner': [
        { id: 'h1', title: 'AdSense Optimized', description: 'Experience lightning-fast ad delivery with our premium network.' },
    ]
};

export default function AdBanner({ className, slot, type = 'banner', useAdSense = false }: AdBannerProps) {
    const [ads, setAds] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
        if (!db) {
            setAds(MOCK_ADS[slot] || []);
            return;
        }

        // Real-time Ads Sync from Cloud
        const now = new Date().toISOString().split('T')[0];
        const q = query(
            collection(db, 'campaigns'),
            where('slot', '==', slot),
            where('active', '==', true)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cloudAds: any[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                // Client side date filtering to avoid Firestore complex index requirement for now
                if (data.startDate <= now && data.endDate >= now) {
                    cloudAds.push(data);
                }
            });

            if (cloudAds.length > 0) {
                setAds(cloudAds);
            } else {
                setAds(MOCK_ADS[slot] || []);
            }
        });

        return () => unsubscribe();
    }, [slot]);

    useEffect(() => {
        if (ads.length <= 1 || useAdSense) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ads.length);
        }, 12000);
        return () => clearInterval(interval);
    }, [ads.length, useAdSense]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ads.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);

    if (!mounted) return <div className={cn("bg-zinc-100/10 rounded-3xl animate-pulse", className)} />;

    const isSkyscraper = type === 'skyscraper';

    if (useAdSense) {
        return (
            <div className={cn(
                "relative flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl transition-all group",
                isSkyscraper ? "h-full min-h-[600px] w-full max-w-[170px]" : "w-full my-8 mx-auto max-w-[728px] min-h-[100px] aspect-[728/90]",
                className
            )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative text-center space-y-2 px-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 italic">Advertisement</span>
                        <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    <p className="text-xs font-bold text-muted-foreground/60 italic">Content optimized for your interests</p>
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
                    {ads.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out",
                                index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                            )}
                        >
                            <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-black mb-3 px-2 py-0.5 bg-primary/10 rounded-full">Partner</span>
                            <h3 className={cn("font-black text-zinc-900 dark:text-zinc-100 tracking-tight", isSkyscraper ? "text-sm mb-2" : "text-lg mb-1")}>
                                {slide.title}
                            </h3>
                            <p className={cn("text-muted-foreground leading-tight font-medium", isSkyscraper ? "text-xs" : "text-sm")}>
                                {slide.description}
                            </p>
                            {!isSkyscraper && slide.link && (
                                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                    Learn More <ChevronRight className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    ))}
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
