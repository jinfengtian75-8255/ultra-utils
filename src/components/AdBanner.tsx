'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    useAdSense?: boolean; // New prop to toggle between AdSense and Direct Ads
}

const MOCK_ADS: Record<string, AdSlide[]> = {
    'top-banner': [
        { id: '1', title: 'Premium YouTube Templates', description: 'Boost your CTR with our pro templates.' },
        { id: '2', title: 'AI Background Pro', description: 'Unlock 4K exports and batch processing.' },
        { id: '3', title: 'Join our Newsletter', description: 'Get weekly AI utility tips.' },
    ],
    'left-sidebar': [
        { id: 's1', title: 'Host with Vercel', description: 'Deploy your next app in seconds.' },
        { id: 's2', title: 'Learn Next.js 15', description: 'The ultimate course for creators.' },
    ],
    'right-sidebar': [
        { id: 'r1', title: 'Design like a Pro', description: 'New Figma course for developers.' },
        { id: 'r2', title: 'Hire Antigravity', description: 'The smartest coding assistant.' },
    ],
    'bottom-banner': [
        { id: 'b1', title: 'Share UltraUtils', description: 'Love this tool? Share it with your friends!' },
    ]
};

export default function AdBanner({ className, slot, type = 'banner', useAdSense = false }: AdBannerProps) {
    const isDev = process.env.NODE_ENV === 'development';
    const slides = MOCK_ADS[slot] || [{ id: 'default', title: 'Advertise Here', description: 'Reach thousands of creators.' }];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slides.length <= 1 || useAdSense) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 12000); // Slower interval for less distraction
        return () => clearInterval(interval);
    }, [slides.length, useAdSense]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const isSkyscraper = type === 'skyscraper';

    // Google AdSense Logic
    if (useAdSense) {
        return (
            <div className={cn(
                "relative flex items-center justify-center overflow-hidden border border-dashed border-blue-200 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-900/10 rounded-3xl transition-all",
                isSkyscraper ? "h-full min-h-[600px] w-full max-w-[170px]" : "w-full my-8 mx-auto max-w-[728px] min-h-[100px] aspect-[728/90]",
                className
            )}>
                <div className="text-center space-y-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-blue-500/50 italic">Google AdSense</span>
                    <p className="text-xs text-muted-foreground italic">Ads will appear here automatically</p>
                    {/* 
                        TUTORIAL: To activate real ads, replace this div with:
                        <ins className="adsbygoogle"
                            style={{ display: 'block' }}
                            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Your AdSense ID
                            data-ad-slot={slot}
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    */}
                </div>
            </div>
        );
    }

    // Direct Ad Carousel Logic
    return (
        <div className={cn(
            "relative group flex flex-col items-center justify-center overflow-hidden transition-all duration-700",
            isSkyscraper ? "h-full min-h-[600px] w-full" : "w-full my-8 mx-auto",
            className
        )}>
            <div className={cn(
                "relative flex flex-col items-center justify-center p-6 border border-dashed rounded-3xl transition-all duration-700",
                "bg-zinc-100/50 dark:bg-zinc-800/30 border-zinc-200 dark:border-zinc-700 hover:border-primary/10",
                isSkyscraper ? "h-full w-full max-w-[170px]" : "w-full max-w-[728px] min-h-[100px]"
            )}>
                {/* Carousel Content */}
                <div className="relative w-full h-full flex items-center justify-center text-center px-4">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out",
                                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                            )}
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-black mb-2">Direct Partner Ad</span>
                            <h3 className={cn("font-bold text-zinc-900 dark:text-zinc-100", isSkyscraper ? "text-sm mb-2" : "text-base")}>
                                {slide.title}
                            </h3>
                            <p className={cn("text-muted-foreground leading-tight", isSkyscraper ? "text-xs" : "text-sm")}>
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Controls - visible on hover */}
                {!useAdSense && slides.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/50 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/50 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </>
                )}

                {/* Vertical Visual for Skyscraper */}
                {isSkyscraper && slides.length > 1 && (
                    <div className="absolute inset-x-0 bottom-8 flex justify-center gap-1">
                        {slides.map((_, i) => (
                            <div key={i} className={cn("h-1 rounded-full transition-all", i === currentIndex ? "w-4 bg-primary" : "w-1 bg-zinc-300")} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

