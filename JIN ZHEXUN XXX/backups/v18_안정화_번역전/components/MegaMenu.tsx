import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { toolsConfig } from '@/lib/tools-config';
import { X, Search, Sparkles } from 'lucide-react';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const filteredTools = toolsConfig.filter((tool) => {
        const title = (t as any)[tool.translationKey]?.title || (t as any)[tool.translationKey];
        return title?.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Main Container */}
            <div className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Sparkles className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                                {t.megaMenu?.title || t.allTools}
                            </h2>
                            <p className="text-sm text-zinc-500 font-medium">
                                {t.megaMenu?.subtitle || 'Explore our full suite of digital utilities'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="p-4 md:p-6 bg-zinc-50/50 dark:bg-zinc-950/20">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder={t.megaMenu?.searchPlaceholder || "Search for a tool..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 dark:text-white font-medium"
                        />
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {filteredTools.map((tool) => {
                            const toolData = (t as any)[tool.translationKey];
                            const title = toolData?.title || toolData;
                            const desc = toolData?.desc || '';
                            const Icon = tool.icon;

                            return (
                                <Link
                                    key={tool.id}
                                    href={tool.href}
                                    onClick={onClose}
                                    className="group relative flex flex-col items-start p-5 rounded-[2rem] hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${tool.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                        {title}
                                    </h3>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                                        {desc}
                                    </p>

                                    {/* Subtle hover indicator */}
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            );
                        })}
                    </div>

                    {filteredTools.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                                <Search className="w-10 h-10" />
                            </div>
                            <p className="text-zinc-500 font-medium">{t.megaMenu?.noResults || "No tools found matching"} "{searchQuery}"</p>
                        </div>
                    )}
                </div>

                {/* Footer info */}
                <div className="p-6 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-800 text-center text-xs text-zinc-400 font-medium uppercase tracking-widest">
                    {t.common?.total || 'Total'} {toolsConfig.length} {t.megaMenu?.totalTools || 'pro utilities available'}
                </div>
            </div>
        </div>
    );
}
