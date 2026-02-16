'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { Share2, Link2, Check, Twitter, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ShareWidget() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = typeof window !== 'undefined' ? document.title : 'UltraUtils';

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareToTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
    };

    const shareToFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8 p-6 rounded-[2rem] bg-zinc-50/30 dark:bg-zinc-900/10 border border-dashed border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-black text-sm uppercase tracking-widest text-zinc-400 mb-1">Viral Share</h4>
                        <p className="font-bold text-zinc-900 dark:text-zinc-100">{t.share.title}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Copy Link */}
                    <button
                        onClick={handleCopy}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all text-sm",
                            copied
                                ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                                : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50"
                        )}
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                        {copied ? t.share.copied : t.share.copy}
                    </button>

                    {/* Twitter */}
                    <button
                        onClick={shareToTwitter}
                        className="p-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-zinc-900/10 dark:shadow-none"
                    >
                        <Twitter className="w-5 h-5 fill-current" />
                    </button>

                    {/* Facebook */}
                    <button
                        onClick={shareToFacebook}
                        className="p-2.5 bg-[#1877F2] text-white rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-[#1877F2]/20"
                    >
                        <Facebook className="w-5 h-5 fill-current" />
                    </button>
                </div>
            </div>
        </div>
    );
}
