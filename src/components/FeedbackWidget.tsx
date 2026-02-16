'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { MessageSquare, Send, CheckCircle2, Loader2, Smile, Meh, Frown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function FeedbackWidget() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const [reaction, setReaction] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!reaction && !comment) return;

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'feedbacks'), {
                reaction,
                comment,
                page: pathname,
                createdAt: new Date().toISOString(),
                userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Submission failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="w-full max-w-2xl mx-auto my-12 p-8 rounded-[2.5rem] bg-green-50/50 dark:bg-green-950/10 border border-green-200 dark:border-green-900/30 text-center animate-in zoom-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-black mb-2">{t.feedback.success}</h3>
                <button
                    onClick={() => { setSubmitted(false); setReaction(null); setComment(''); }}
                    className="text-sm font-bold text-green-600 dark:text-green-400 hover:underline"
                >
                    Send another one?
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto my-12 p-8 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 transition-all group">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">User Voice</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{t.feedback.title}</h3>
                </div>

                {/* Reactions */}
                <div className="flex flex-wrap justify-center gap-4 w-full">
                    {[
                        { id: 'useful', emoji: <Smile className="w-5 h-5" />, label: t.feedback.useful, color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10' },
                        { id: 'neutral', emoji: <Meh className="w-5 h-5" />, label: t.feedback.neutral, color: 'hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10' },
                        { id: 'improve', emoji: <Frown className="w-5 h-5" />, label: t.feedback.improve, color: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setReaction(item.id);
                                // If user just clicks a reaction, we could auto-submit or wait for comment
                            }}
                            className={cn(
                                "flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition-all border-2",
                                reaction === item.id
                                    ? "bg-white dark:bg-zinc-900 border-primary text-primary shadow-lg scale-105"
                                    : "bg-white/50 dark:bg-zinc-950/50 border-transparent text-zinc-500",
                                item.color
                            )}
                        >
                            {item.emoji}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Optional Comment */}
                <div className="w-full space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={t.feedback.placeholder}
                        className="w-full min-h-[120px] p-5 rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-100 dark:border-zinc-800 focus:border-primary/20 transition-all outline-none resize-none text-sm leading-relaxed"
                    />

                    <button
                        onClick={() => handleSubmit()}
                        disabled={submitting || (!reaction && !comment)}
                        className="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-black flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 shadow-xl shadow-zinc-200/50 dark:shadow-none"
                    >
                        {submitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                <span>{t.feedback.submit}</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
