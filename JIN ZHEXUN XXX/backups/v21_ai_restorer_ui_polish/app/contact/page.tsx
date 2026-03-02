'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/language-context'
import { Mail, MessageSquare, Bug, Lightbulb, ExternalLink, Loader2, CheckCircle2, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function ContactPage() {
    const { t } = useLanguage()
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [category, setCategory] = useState('General Inquiries')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                category: category,
                type: 'Support',
                createdAt: new Date().toISOString(),
                status: 'new'
            }

            await addDoc(collection(db, 'inquiries'), data)
            setSubmitting(false)
            setSubmitted(true)
        } catch (error) {
            console.error("Error submitting contact:", error)
            alert("Submission failed. Please try again.")
            setSubmitting(false)
        }
    }

    const categories = [
        { icon: Bug, title: 'Bug Report', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/20', faqs: t.bgRemover.guide.faq },
        { icon: Lightbulb, title: 'Feature Request', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20', faqs: t.promptGen.guide.faq },
        { icon: ExternalLink, title: 'Partnerships', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20', faqs: t.advertise.faq },
        { icon: MessageSquare, title: 'General Inquiries', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', faqs: t.imageMaster.guide.faq },
    ]

    const selectedCategory = categories.find(c => c.title === category) || categories[categories.length - 1]

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto py-32 px-4 text-center space-y-8 animate-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-black">{t.advertise.success}</h1>
                    <p className="text-muted-foreground text-lg">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-black transition-all hover:scale-105 active:scale-95"
                >
                    Send Another Message
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto py-20 px-4 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header */}
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                    {t.contact.title.split(' ')[0]} <span className="text-gradient">{t.contact.title.split(' ')[1] || ''}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                    {t.contact.subtitle}
                </p>
                <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-5 gap-16 items-start">
                <div className="lg:col-span-2 space-y-12">
                    {/* Contact Method */}
                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">{t.contact.infoTitle}</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t.contact.desc}
                                </p>
                                <div className="space-y-1">
                                    <a href={`mailto:${t.contact.infoEmail}`} className="text-lg font-black text-primary break-all">
                                        {t.contact.infoEmail}
                                    </a>
                                    <p className="text-xs text-muted-foreground font-bold">{t.contact.infoResponse}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Selection */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Choose Category</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {categories.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCategory(item.title)}
                                    className={`p-6 rounded-[2rem] border-2 transition-all flex items-center gap-6 text-left group
                                        ${category === item.title
                                            ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5 scale-105'
                                            : 'border-transparent glass-card hover:border-zinc-200 dark:hover:border-zinc-800'}`}
                                >
                                    <div className={`${item.color} p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ${category === item.title ? 'scale-110' : ''} transition-transform`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold">{item.title}</h4>
                                        {category === item.title && <p className="text-[10px] font-black uppercase text-primary mt-1">Currently Selected</p>}
                                    </div>
                                    {category === item.title && <CheckCircle2 className="w-6 h-6 text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Instant Answers Deflection */}
                    <div className="glass-card p-8 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5 animate-in slide-in-from-right-8 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-black text-lg">Instant Answers</h3>
                                <p className="text-xs text-muted-foreground font-bold">You might find your answer here!</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {selectedCategory.faqs.map((faq, idx) => (
                                <details key={idx} className="group glass-card-nav bg-white/50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all">
                                    <summary className="list-none p-5 cursor-pointer flex items-center justify-between font-bold group-open:text-primary">
                                        <span>{faq.q}</span>
                                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-800/20">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[3.5rem] shadow-2xl space-y-8 border border-zinc-100 dark:border-zinc-800">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Still need help? Send a message</span>
                            <h2 className="text-3xl font-black">Get in <span className="text-gradient">Touch</span></h2>
                        </div>

                        {/* ... rest of the form fields ... */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                                <input
                                    name="name"
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full h-14 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full h-14 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message Content</label>
                            <textarea
                                name="message"
                                required
                                placeholder={`Please describe your ${category.toLowerCase()}...`}
                                className="w-full min-h-[220px] p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 transition-all outline-none resize-none"
                                defaultValue={category === 'Partnerships' ? 'I am interested in advertising on your platform. Please let me know the process and potential costs.' : ''}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full h-16 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-[2rem] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            {submitting ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                <>
                                    <span>Send Message</span>
                                    <ArrowRight className="w-6 h-6" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center pt-10">
                <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 glass-card rounded-2.5xl font-black hover:bg-primary hover:text-white transition-all group">
                    <span>{t.navbar.home}</span>
                    <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
            </div>
        </div>
    )
}
