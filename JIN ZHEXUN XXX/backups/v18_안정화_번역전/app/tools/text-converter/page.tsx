'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { Copy, Check, Trash2, Hash, Type, AlignLeft, Globe, Database, CaseUpper, CaseLower, CaseSensitive, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function TextConverterPage() {
    const { t } = useLanguage()
    const [text, setText] = useState('')
    const [copied, setCopied] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Stats
    const stats = useMemo(() => {
        return {
            chars: text.length,
            words: text.trim() ? text.trim().split(/\s+/).length : 0,
            lines: text ? text.split('\n').length : 0
        }
    }, [text])

    // Actions
    const transformText = useCallback((type: string) => {
        let result = text
        switch (type) {
            case 'upper': result = text.toUpperCase(); break
            case 'lower': result = text.toLowerCase(); break
            case 'capitalize':
                result = text.split('\n').map(line => {
                    const match = line.match(/^(\s*)(.*)/);
                    if (match && match[2]) {
                        return match[1] + match[2].charAt(0).toUpperCase() + match[2].slice(1);
                    }
                    return line;
                }).join('\n');
                break
            case 'trim':
                // Trim each line, then replace multiple spaces with single space within each line
                result = text.split('\n')
                    .map(line => line.trim().replace(/\s+/g, ' '))
                    .join('\n').trim();
                break
            case 'removeEmpty':
                result = text.split('\n').filter(line => line.trim()).join('\n');
                break
            case 'removeDupes':
                // Remove duplicates by comparing trimmed versions of lines
                const seen = new Set();
                result = text.split('\n').filter(line => {
                    const trimmed = line.trim();
                    if (seen.has(trimmed)) return false;
                    seen.add(trimmed);
                    return true;
                }).join('\n');
                break
            case 'removeDupesWords':
                result = text.split('\n').map(line => {
                    return line.split(/\s+/).filter((word, i, arr) => {
                        return i === 0 || word !== arr[i - 1];
                    }).join(' ');
                }).join('\n');
                break
            case 'urlEncode': result = encodeURIComponent(text); break
            case 'urlDecode':
                try { result = decodeURIComponent(text); } catch { alert(t.common.error); }
                break
            case 'base64Encode':
                try { result = btoa(unescape(encodeURIComponent(text))); } catch { alert(t.common.error); }
                break
            case 'base64Decode':
                try { result = decodeURIComponent(escape(atob(text))); } catch { alert(t.common.error); }
                break
            case 'jsonFormat':
                try { result = JSON.stringify(JSON.parse(text), null, 4); } catch { alert(t.common.error); }
                break
            case 'sortAz':
                result = text.split('\n').sort((a, b) => a.localeCompare(b)).join('\n');
                break
            case 'sortZa':
                result = text.split('\n').sort((a, b) => b.localeCompare(a)).join('\n');
                break
        }
        setText(result)
    }, [text, t.common.error])

    const handleCopy = () => {
        if (!text) return
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!isMounted) return null

    const toolCategories = [
        {
            title: t.textConverter.categoryCase,
            icon: CaseSensitive,
            tools: [
                { id: 'upper', label: t.textConverter.btnUppercase, icon: CaseUpper },
                { id: 'lower', label: t.textConverter.btnLowercase, icon: CaseLower },
                { id: 'capitalize', label: t.textConverter.btnCapitalize, icon: Type },
            ]
        },
        {
            title: t.textConverter.categoryCleanup,
            icon: AlignLeft,
            tools: [
                { id: 'trim', label: t.textConverter.btnTrim, icon: Sparkles },
                { id: 'removeEmpty', label: t.textConverter.btnRemoveEmpty, icon: Trash2 },
                { id: 'removeDupes', label: t.textConverter.btnRemoveDupes, icon: Database },
                { id: 'removeDupesWords', label: t.textConverter.btnRemoveDupesWords, icon: Sparkles },
            ]
        },
        {
            title: t.textConverter.categoryWeb,
            icon: Globe,
            tools: [
                { id: 'urlEncode', label: t.textConverter.btnUrlEncode, icon: Globe },
                { id: 'urlDecode', label: t.textConverter.btnUrlDecode, icon: Globe },
                { id: 'base64Encode', label: t.textConverter.btnBase64Encode, icon: Hash },
                { id: 'base64Decode', label: t.textConverter.btnBase64Decode, icon: Hash },
            ]
        },
        {
            title: t.textConverter.categoryData,
            icon: Database,
            tools: [
                { id: 'jsonFormat', label: t.textConverter.btnJsonFormat, icon: Database },
                { id: 'sortAz', label: t.textConverter.btnSortAz, icon: AlignLeft },
                { id: 'sortZa', label: t.textConverter.btnSortZa, icon: AlignLeft },
            ]
        }
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient">{t.textConverter.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.textConverter.desc}
                </p>
            </div>



            <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Editor */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="glass-card rounded-[2.5rem] p-4 space-y-4 border-2 border-zinc-200/50 dark:border-zinc-800/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                        <div className="relative group">
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={t.textConverter.inputPlaceholder}
                                className="w-full min-h-[500px] p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border-none focus:ring-4 focus:ring-primary/10 text-lg font-mono leading-relaxed transition-all resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                            />

                            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setText('')}
                                    className="p-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors shadow-sm"
                                    title={t.textConverter.btnClear}
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className={cn(
                                        "p-3 rounded-xl transition-all shadow-sm flex items-center gap-2 font-bold",
                                        copied ? "bg-green-500 text-white" : "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                                    )}
                                >
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    <span className="text-xs">{copied ? t.textConverter.btnCopied : t.textConverter.btnCopy}</span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Bar: Stats */}
                        <div className="grid grid-cols-3 gap-4 px-4 py-2">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">{t.textConverter.statsCharacters}</span>
                                <span className="text-2xl font-black text-primary">{stats.chars.toLocaleString()}</span>
                            </div>
                            <div className="flex flex-col border-x border-zinc-100 dark:border-zinc-800 px-4">
                                <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">{t.textConverter.statsWords}</span>
                                <span className="text-2xl font-black text-primary">{stats.words.toLocaleString()}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">{t.textConverter.statsLines}</span>
                                <span className="text-2xl font-black text-primary">{stats.lines.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Controls */}
                <div className="lg:col-span-4 space-y-6">
                    {toolCategories.map((cat, idx) => (
                        <div
                            key={cat.title}
                            className="glass-card p-6 rounded-3xl space-y-4 animate-in fade-in slide-in-from-right-4 duration-700"
                            style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <cat.icon className="w-4 h-4 text-primary" /> {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.tools.map((tool) => (
                                    <button
                                        key={tool.id}
                                        onClick={() => transformText(tool.id)}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold hover:bg-primary hover:text-white transition-all transform active:scale-[0.95]"
                                    >
                                        <tool.icon className="w-3 h-3" /> {tool.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AdBanner slot="tool-bottom-banner" useAdSense={true} />

            {/* SEO Guide Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient">{t.textConverter.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.textConverter.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.textConverter.guide.sections.map((section, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl space-y-4 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800/50">
                            <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-10">
                    <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {t.textConverter.guide.faq.map((item, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50">
                                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-start gap-3">
                                    <span className="text-primary font-black">Q.</span>
                                    {item.q}
                                </h4>
                                <p className="text-muted-foreground pl-7 leading-relaxed font-medium">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
