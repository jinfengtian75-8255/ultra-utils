'use client'

import { useState, useMemo, useEffect } from 'react'
import { Calculator, TrendingUp, DollarSign, PieChart, Info, InfoIcon, MapPin, Zap, Rocket, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function RevenueCalculatorClient() {
    const { t } = useLanguage()
    const [views, setViews] = useState<number>(50000)
    const [cpm, setCpm] = useState<number>(4.5)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const results = useMemo(() => {
        const daily = (views / 1000) * cpm
        const monthly = daily * 30
        const yearly = daily * 365
        return { daily, monthly, yearly }
    }, [views, cpm])

    const growthTips = useMemo(() => {
        // Dynamic tips based on CPM/Views
        if (cpm < 2) {
            return [
                "Your CPM is currently below average. Try targeting higher-paying regions like the US, UK, or Australia.",
                "Review your niche. Content focused on finance, technology, or business typically commands 5x higher CPMs.",
                "Increase mid-roll ad placement by creating videos longer than 8 minutes."
            ]
        } else if (views > 100000) {
            return [
                "With your high traffic, it's time to leverage direct sponsorships for 2-3x more income than AdSense.",
                "Create a membership program (Patreon or YT Memberships) to monetize your most loyal 1% of fans.",
                "Diversify by launching merch or digital products relevant to your viral topics."
            ]
        } else {
            return [
                "Optimize your CTR (Click-Through Rate) by split-testing thumbnails to double your views without new content.",
                "Focus on 'Watch Time' - the algorithm prioritizes session duration over just view counts.",
                "Collaborate with niche-adjacent creators to cross-pollinate audiences effectively."
            ]
        }
    }, [views, cpm])

    if (!isMounted) return null

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 text-sm font-bold mb-4 border border-green-100 dark:border-green-900/50">
                    <TrendingUp className="w-4 h-4" />
                    <span>Premium Channel Insights</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    <span className="text-gradient from-emerald-600 to-green-600 font-black italic">{t.revenueCalc.title}</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {t.revenueCalc.desc}
                </p>
            </div>

            {/* Main Calculator */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Inputs */}
                <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-6">
                    <div className="glass-card rounded-[3rem] p-10 border-2 border-zinc-200/50 dark:border-zinc-800/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-100 shadow-2xl shadow-green-500/5">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Input 1 */}
                            <div className="space-y-6">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground block text-center md:text-left">
                                    {t.revenueCalc.views}
                                </label>
                                <div className="relative group">
                                    <input
                                        type="number"
                                        value={views}
                                        onChange={(e) => setViews(Number(e.target.value))}
                                        className="w-full text-5xl font-black bg-zinc-50 dark:bg-zinc-900/50 border-none rounded-3xl p-10 text-center focus:ring-4 focus:ring-green-500/10 transition-all placeholder:text-zinc-200"
                                    />
                                    <div className="absolute inset-0 pointer-events-none rounded-3xl ring-2 ring-zinc-100 dark:ring-zinc-800 group-hover:ring-green-500/30 transition-all" />
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="1000000"
                                    step="1000"
                                    value={views}
                                    onChange={(e) => setViews(Number(e.target.value))}
                                    className="w-full accent-green-600"
                                />
                            </div>

                            {/* Input 2 */}
                            <div className="space-y-6">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground block text-center md:text-left">
                                    {t.revenueCalc.cpm}
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-3xl font-black text-green-500/50">$</div>
                                    <input
                                        type="number"
                                        value={cpm}
                                        onChange={(e) => setCpm(Number(e.target.value))}
                                        className="w-full text-5xl font-black bg-zinc-50 dark:bg-zinc-900/50 border-none rounded-3xl p-10 pl-20 text-center focus:ring-4 focus:ring-green-500/10 transition-all"
                                    />
                                    <div className="absolute inset-0 pointer-events-none rounded-3xl ring-2 ring-zinc-100 dark:ring-zinc-800 group-hover:ring-green-500/30 transition-all" />
                                </div>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="50"
                                    step="0.1"
                                    value={cpm}
                                    onChange={(e) => setCpm(Number(e.target.value))}
                                    className="w-full accent-green-600"
                                />
                            </div>
                        </div>

                        {/* Result Dashboard */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: t.revenueCalc.resultDaily, value: results.daily, color: 'emerald' },
                                { label: t.revenueCalc.resultMonthly, value: results.monthly, color: 'green' },
                                { label: t.revenueCalc.resultYearly, value: results.yearly, color: 'teal' }
                            ].map((res, i) => (
                                <div key={i} className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2rem] text-center transform hover:scale-105 transition-all">
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground mb-2 block">{res.label}</span>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-xl font-bold text-muted-foreground">$</span>
                                        <span className={`text-4xl font-black text-${res.color}-600 drop-shadow-sm`}>
                                            {res.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Growth Tips Section */}
                    <div className="glass-card rounded-[3rem] p-10 border-2 border-emerald-500/10 bg-emerald-50/10 dark:bg-emerald-950/5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-black italic">{t.revenueCalc.growthTip}</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {growthTips.map((tip, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center font-black text-emerald-600 text-xs shadow-sm z-10 border border-emerald-200 dark:border-emerald-800">
                                        {idx + 1}
                                    </div>
                                    <div className="h-full bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 font-bold leading-relaxed shadow-sm group-hover:border-emerald-500/30 transition-all">
                                        {tip}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Insights & Stats */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                    <div className="glass-card p-8 rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-950 text-white border-none shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-[80px]" />
                        <h3 className="text-xl font-black mb-6 flex items-center gap-2 italic">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            Market Averages
                        </h3>
                        <div className="space-y-6">
                            {[
                                { niche: 'Finance / SaaS', avg: '$15 - $35' },
                                { niche: 'Tech / Business', avg: '$5 - $15' },
                                { niche: 'Vlog / Lifestyle', avg: '$1 - $5' },
                                { niche: 'Gaming / Music', avg: '$0.50 - $2' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <span className="font-bold text-zinc-400 group-hover:text-white transition-colors">{item.niche}</span>
                                    <span className="font-black text-green-400">{item.avg}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-800">
                            <p className="text-xs text-zinc-500 font-bold leading-relaxed">
                                * CPM varies greatly based on viewer location, watch time, and advertiser demand.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border-2 border-zinc-100 dark:border-zinc-800 space-y-6">
                        <h3 className="text-lg font-black italic flex items-center gap-2">
                            <InfoIcon className="w-5 h-5 text-green-600" />
                            Industry Benchmarks
                        </h3>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black uppercase text-muted-foreground mr-2">Top 5% CPM Region</span>
                                <span className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    <MapPin className="w-3 h-3" /> United States, Norway, UK
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black uppercase text-muted-foreground mr-2">Target CTR</span>
                                <span className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-yellow-500" /> 5.0% - 10.0% (Ideal)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AdBanner slot="tool-bottom-banner" useAdSense={true} />

            {/* SEO Guide Section */}
            <div className="pt-20 border-t border-zinc-200 dark:border-zinc-800 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-gradient from-emerald-600 to-green-600">{t.revenueCalc.guide.title}</h2>
                    <p className="text-muted-foreground text-lg">{t.revenueCalc.guide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.revenueCalc.guide.sections.map((section: any, idx: number) => (
                        <div key={idx} className="glass-card p-8 rounded-[2.5rem] space-y-4 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800/50">
                            <h3 className="text-xl font-black text-emerald-600 italic uppercase tracking-tighter">{section.title}</h3>
                            <div className="text-muted-foreground leading-relaxed font-bold">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    <h3 className="text-3xl font-black text-center italic">FAQ</h3>
                    <div className="space-y-4">
                        {t.revenueCalc.guide.faq.map((item: any, idx: number) => (
                            <div key={idx} className="glass-card p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800/50 transition-all hover:border-emerald-500/30 group">
                                <h4 className="text-lg font-black text-zinc-900 dark:text-zinc-100 mb-4 flex items-start gap-4">
                                    <span className="text-emerald-500 italic font-black text-2xl">Q.</span>
                                    <span className="pt-1">{item.q}</span>
                                </h4>
                                <div className="pl-12">
                                    <p className="text-muted-foreground leading-relaxed font-bold text-md">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
