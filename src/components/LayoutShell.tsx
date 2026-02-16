'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AdBanner from '@/components/AdBanner';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { FeedbackWidget } from '@/components/FeedbackWidget';
import { ShareWidget } from '@/components/ShareWidget';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Global scroll-to-top handler on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Pages that need maximum width/focus (heavy tools)
    const heavyTools = [
        '/tools/background-remover',
        '/tools/image-compressor'
    ];

    const isHeavyTool = heavyTools.includes(pathname);
    const isToolPage = pathname.startsWith('/tools/');

    // Dynamic slot name generation
    const getPageSlot = (suffix: string) => {
        const cleanPath = pathname === '/' ? 'home' : pathname.replace(/\//g, '-').replace(/^-|-$/g, '');
        return `${cleanPath}-${suffix}`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex justify-center max-w-[1900px] mx-auto min-h-screen w-full">
                {/* Left Sidebar Ad - Only on non-heavy tools & LG screens */}
                {!isHeavyTool && (
                    <aside className="hidden 2xl:flex w-[240px] flex-shrink-0 pt-24 pb-12 px-6 sticky top-0 h-screen flex-col">
                        <AdBanner slot={getPageSlot('left-sidebar')} type="skyscraper" useAdSense={false} className="h-full" />
                    </aside>
                )}

                {/* Main Content Area */}
                <main className={cn(
                    "flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col min-w-0 transition-all duration-500",
                    isHeavyTool ? "max-w-7xl" : "max-w-4xl"
                )}>
                    {/* Top Ad Slot - Dynamic per page */}
                    <AdBanner slot={getPageSlot('top-banner')} useAdSense={true} className="mb-12" />

                    <div className="flex-1">
                        {children}
                    </div>

                    {/* Viral Share Widget - Active context after tool use */}
                    {isToolPage && (
                        <div className="mt-8">
                            <ShareWidget />
                        </div>
                    )}

                    {/* Bottom Ad Slot - Dynamic per page */}
                    <AdBanner slot={getPageSlot('bottom-banner')} useAdSense={false} className="mt-12" />

                    {/* User Feedback Widget - Only on Tool Pages */}
                    {isToolPage && (
                        <div className="mt-12 border-t border-zinc-100 dark:border-zinc-900 pt-12">
                            <FeedbackWidget />
                        </div>
                    )}
                </main>

                {/* Right Sidebar Ad - Dynamic per page */}
                {!isHeavyTool && (
                    <aside className="hidden 2xl:flex w-[240px] flex-shrink-0 pt-24 pb-12 px-6 sticky top-0 h-screen flex-col">
                        <AdBanner slot={getPageSlot('right-sidebar')} type="skyscraper" useAdSense={false} className="h-full" />
                    </aside>
                )}
            </div>

            <Footer />
        </div>
    );
}
