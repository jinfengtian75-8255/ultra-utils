'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AdBanner from '@/components/AdBanner';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Pages that need maximum width/focus (heavy tools)
    const heavyTools = [
        '/tools/background-remover',
        '/tools/image-compressor'
    ];

    const isHeavyTool = heavyTools.includes(pathname);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex justify-center max-w-[1900px] mx-auto min-h-screen w-full">
                {/* Left Sidebar Ad - Only on non-heavy tools & LG screens */}
                {!isHeavyTool && (
                    <aside className="hidden 2xl:flex w-[240px] flex-shrink-0 pt-24 pb-12 px-6 sticky top-0 h-screen flex-col">
                        <AdBanner slot="left-sidebar" type="skyscraper" useAdSense={false} className="h-full" />
                    </aside>
                )}

                {/* Main Content Area */}
                <main className={cn(
                    "flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col min-w-0 transition-all duration-500",
                    isHeavyTool ? "max-w-7xl" : "max-w-4xl"
                )}>
                    {/* Top Ad Slot - Set to Google AdSense for easy automated revenue */}
                    <AdBanner slot="top-banner" useAdSense={true} className="mb-12" />

                    <div className="flex-1">
                        {children}
                    </div>

                    {/* Bottom Ad Slot - Set to Direct Ad for internal promotion/viral loop */}
                    <AdBanner slot="bottom-banner" useAdSense={false} className="mt-12" />
                </main>

                {/* Right Sidebar Ad - Direct Ad Slot (Premium space) */}
                {!isHeavyTool && (
                    <aside className="hidden 2xl:flex w-[240px] flex-shrink-0 pt-24 pb-12 px-6 sticky top-0 h-screen flex-col">
                        <AdBanner slot="right-sidebar" type="skyscraper" useAdSense={false} className="h-full" />
                    </aside>
                )}
            </div>

            <Footer />
        </div>
    );
}
