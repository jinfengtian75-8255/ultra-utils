'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { CheckCircle2, Layout, Monitor, ArrowRight, Loader2, Zap, HelpCircle, ChevronDown } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AdvertisePage() {
    const { t } = useLanguage();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                dates: formData.get('dates'),
                message: formData.get('message'),
                type: 'Advertisement',
                createdAt: new Date().toISOString(),
                status: 'new'
            };

            await addDoc(collection(db, 'inquiries'), data);
            setSubmitting(false);
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            alert("Submission failed. Please try again.");
            setSubmitting(false);
        }
    };

    const adSlots = [
        {
            title: t.advertise.slotTop,
            icon: <Layout className="w-6 h-6 text-blue-500" />,
            desc: "728x90 Banner - Prime visibility at the very top of all tool pages. Maximize your brand awareness.",
            price: "Premium"
        },
        {
            title: "Home Feed Banner", // Add new home slot
            icon: <Zap className="w-6 h-6 text-amber-500" />,
            desc: "Native placement within the tool grid on the homepage. Perfect for high engagement.",
            price: "High CTR"
        },
        {
            title: t.advertise.slotSide,
            icon: <Monitor className="w-6 h-6 text-purple-500" />,
            desc: "160x600 Skyscraper - Sticky sidebar placement for prolonged brand exposure.",
            price: "Premium"
        },
        {
            title: t.advertise.slotBottom,
            icon: <Layout className="w-6 h-6 text-zinc-400 rotate-180" />,
            desc: "728x90 Banner - High intent placement at the bottom of every tool page.",
            price: "Conversion"
        }
    ];

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 animate-in zoom-in duration-500" />
                </div>
                <h1 className="text-3xl font-bold">{t.advertise.success}</h1>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                    Back to Form
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-16 py-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight italic">
                    <span className="text-gradient">{t.advertise.title}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {t.advertise.desc}
                </p>
            </div>

            {/* Ad Slots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                {adSlots.map((slot, i) => (
                    <div key={i} className="glass-card p-8 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            {slot.icon}
                        </div>
                        <h3 className="text-xl font-bold">{slot.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{slot.desc}</p>
                        <div className="pt-2">
                            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {slot.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inquiry Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                <div className="space-y-8 py-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.advertise.formTitle}</h2>
                    <ul className="space-y-6">
                        {[
                            "100k+ Monthly Active Users",
                            "High engagement from YouTube Creators",
                            "Bilingual reach (Global & Local)",
                            "Transparent performance reports"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Partnering with UltraUtils means connecting with the next generation of digital builders.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl space-y-6 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t.advertise.name}</label>
                            <input
                                name="name"
                                required
                                placeholder="Jane Doe / Acme Corp"
                                className="w-full h-12 px-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 border-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t.advertise.email}</label>
                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="jane@example.com"
                                className="w-full h-12 px-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 border-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t.advertise.dates}</label>
                        <input
                            name="dates"
                            required
                            placeholder="e.g., 2026-03-01 ~ 2026-03-15"
                            className="w-full h-12 px-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 border-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t.advertise.message}</label>
                        <textarea
                            name="message"
                            required
                            className="w-full min-h-[140px] p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 border-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            placeholder="Tell us about your product or share an ad link..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-14 bg-primary text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : t.advertise.submit}
                    </button>
                </form>
            </div>
            {/* Ads FAQ Section */}
            <div className="pt-20 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black">Advertising FAQ</h2>
                        <p className="text-muted-foreground font-bold">Frequently asked questions about advertising on UltraUtils</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {t.advertise.faq.map((item, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-4">
                            <h4 className="text-lg font-black flex items-center gap-3">
                                <span className="text-primary">Q.</span> {item.q}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed pl-7 border-l-2 border-primary/20">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
