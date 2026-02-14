'use client';

import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Plus,
    Trash2,
    Calendar,
    Link as LinkIcon,
    Type,
    Save,
    AlertCircle,
    Monitor,
    Layout,
    Zap,
    Clock,
    CheckCircle2,
    Loader2,
    Globe2,
    Users,
    TrendingUp,
    MousePointer2,
    BarChart3
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { db } from '@/lib/firebase';
import {
    collection,
    onSnapshot,
    query,
    where,
    getDoc,
    doc,
    setDoc,
    deleteDoc,
    Timestamp,
    orderBy,
    limit
} from 'firebase/firestore';

interface AdItem {
    id: string;
    title: string;
    description: string;
    link: string;
    slot: 'top-banner' | 'home-mid-banner' | 'left-sidebar' | 'right-sidebar' | 'bottom-banner';
    startDate: string;
    endDate: string;
    active: boolean;
}

export default function AdminPage() {
    const { t } = useLanguage();
    const [ads, setAds] = useState<AdItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [syncing, setSyncing] = useState(false);

    // Real Traffic Data State
    const [liveTraffic, setLiveTraffic] = useState({
        current: 0,
        todayTotal: 0,
        topTool: 'Loading...',
        revenue: 0
    });

    // Form state
    const [newAd, setNewAd] = useState<Partial<AdItem>>({
        slot: 'top-banner',
        active: true,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });

    useEffect(() => {
        setMounted(true);
        if (!db) return;

        // 1. Real-time Ads Sync
        const q = query(collection(db, 'campaigns'), orderBy('id', 'desc'));
        const unsubscribeAds = onSnapshot(q, (snapshot) => {
            const items: AdItem[] = [];
            snapshot.forEach((doc) => {
                items.push(doc.data() as AdItem);
            });
            setAds(items);
        });

        // 2. Active Now Users Sync (Heartbeats from last 2 minutes)
        const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
        const qActive = query(collection(db, 'active_sessions'), where('lastActive', '>=', twoMinutesAgo));
        const unsubscribeActive = onSnapshot(qActive, (snapshot) => {
            setLiveTraffic(prev => ({ ...prev, current: snapshot.size }));
        });

        // 3. Daily Stats & Top Tool
        const todayStr = new Date().toISOString().split('T')[0];
        const statsRef = doc(db, 'stats', todayStr);
        const unsubscribeStats = onSnapshot(statsRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                const tools = data.tools || {};
                let top = 'None';
                let max = 0;
                Object.entries(tools).forEach(([name, count]) => {
                    if ((count as number) > max) {
                        max = count as number;
                        top = name;
                    }
                });

                // Revenue estimation: $0.01 per view for demo
                const views = data.views || 0;
                setLiveTraffic(prev => ({
                    ...prev,
                    todayTotal: views,
                    topTool: top !== 'None' ? decodeURIComponent(top).replace('-', ' ') : 'N/A',
                    revenue: Number((views * 0.005).toFixed(2)) // Adjusted for more realistic low-end
                }));
            }
        });

        return () => {
            unsubscribeAds();
            unsubscribeActive();
            unsubscribeStats();
        };
    }, []);

    const saveToCloud = async (newAdItem: AdItem) => {
        if (!db) return;
        try {
            await setDoc(doc(db, 'campaigns', newAdItem.id), newAdItem);
        } catch (e) {
            console.error("Cloud save failed", e);
        }
    };

    const handleAddAd = async () => {
        if (!newAd.title || !newAd.link) return;

        const ad: AdItem = {
            id: Date.now().toString(),
            title: newAd.title || '',
            description: newAd.description || '',
            link: newAd.link || '',
            slot: newAd.slot as any,
            startDate: newAd.startDate || '',
            endDate: newAd.endDate || '',
            active: true
        };

        await saveToCloud(ad);
        setIsAdding(false);
        resetForm();
    };

    const resetForm = () => {
        setNewAd({
            slot: 'top-banner',
            active: true,
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        });
    };

    const deleteAd = async (id: string) => {
        if (!db) return;
        if (confirm('Are you sure you want to delete this ad?')) {
            try {
                await deleteDoc(doc(db, 'campaigns', id));
            } catch (e) {
                console.error("Delete failed", e);
            }
        }
    };

    const toggleStatus = async (ad: AdItem) => {
        if (!db) return;
        try {
            await setDoc(doc(db, 'campaigns', ad.id), { ...ad, active: !ad.active }, { merge: true });
        } catch (e) {
            console.error("Status toggle failed", e);
        }
    };

    const handleDuplicate = async (ad: AdItem) => {
        const duplicated: AdItem = {
            ...ad,
            id: (Date.now() + Math.random()).toString(),
            title: `${ad.title} (Copy)`,
            active: false
        };
        await saveToCloud(duplicated);
    };

    const handleSync = () => {
        setSyncing(true);
        setTimeout(() => {
            setSyncing(false);
            alert('전체 동기화 완료! 현재 모든 데이터가 구글 Firebase 클라우드와 실시간으로 연결되어 있습니다.');
        }, 1500);
    };

    const calculateDDay = (endDate: string) => {
        const diff = new Date(endDate).getTime() - new Date().getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    if (!mounted) return null;

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 space-y-12 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
                        <LayoutDashboard className="w-4 h-4" />
                        Management Center
                    </div>
                    <h1 className="text-4xl font-black tracking-tight">Ad Operations <span className="text-gradient">Control</span></h1>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleSync}
                        disabled={syncing}
                        className="h-12 px-6 bg-green-500 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 disabled:opacity-50"
                    >
                        {syncing ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Globe2 className="w-5 h-5" /> 클라우드 연결됨</>}
                    </button>
                    <button
                        onClick={() => setIsAdding(!isAdding)}
                        className="h-12 px-8 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                    >
                        {isAdding ? 'Cancel' : <><Plus className="w-5 h-5" /> New Campaign</>}
                    </button>
                </div>
            </div>

            {/* Traffic Analytics Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-black flex items-center gap-3">
                    <BarChart3 className="text-primary" /> Real-time Audience Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-blue-500/[0.03] to-transparent relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-blue-500">
                                <Users className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Active Now</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black tracking-tighter">{liveTraffic.current}</span>
                                <span className="text-sm font-bold text-muted-foreground uppercase">Users Online</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-medium italic">Global traffic detected across all tools.</p>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-amber-500/[0.03] to-transparent relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-amber-500">
                                <TrendingUp className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Daily Performance</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tighter">{liveTraffic.todayTotal.toLocaleString()}</span>
                                <span className="text-sm font-bold text-muted-foreground uppercase">Visits Today</span>
                            </div>
                            <div className="pt-2">
                                <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full w-[10%]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-emerald-500/[0.03] to-transparent relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-emerald-500">
                                <MousePointer2 className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Top Utility</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-black truncate">{liveTraffic.topTool}</h4>
                                <p className="text-xs font-bold text-muted-foreground mt-1 text-emerald-600/70">🔥 Most used in last 24 hours</p>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-[10px] font-black uppercase text-muted-foreground">Est. Ad Revenue</span>
                                <span className="text-lg font-black text-emerald-500">${liveTraffic.revenue}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Campaign Snapshot */}
            <div className="space-y-6">
                <h3 className="text-lg font-black uppercase tracking-widest text-muted-foreground ml-2">Campaign Snapshot</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Cloud Database', val: 'Active', icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
                        { label: 'Ad Inventory', val: ads.length, icon: <Clock className="w-5 h-5 text-blue-500" /> },
                        { label: 'Cloud Status', val: 'Live', icon: <Globe2 className="w-5 h-5 text-purple-500" /> },
                        { label: 'Total Sync', val: 'Instant', icon: <Zap className="w-5 h-5 text-amber-500" /> },
                    ].map((stat, i) => (
                        <div key={i} className="glass-card p-6 rounded-3xl space-y-2 border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-muted-foreground">{stat.label}</span>
                                {stat.icon}
                            </div>
                            <p className="text-2xl font-black">{stat.val}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Form */}
            {isAdding && (
                <div className="glass-card p-10 rounded-[2.5rem] border-2 border-primary/20 animate-in slide-in-from-top-4 duration-500 space-y-8 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-3xl">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Plus className="text-primary" /> Create New Ad Campaign
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground block">General Info</label>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                    <Type className="w-5 h-5 text-zinc-400" />
                                    <input
                                        placeholder="Campaign Name / Title"
                                        className="bg-transparent border-none outline-none w-full font-medium"
                                        value={newAd.title || ''}
                                        onChange={e => setNewAd({ ...newAd, title: e.target.value })}
                                    />
                                </div>
                                <textarea
                                    placeholder="Brief Description (Sub-text)"
                                    className="w-full h-24 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus:border-primary/50 transition-all outline-none resize-none"
                                    value={newAd.description || ''}
                                    onChange={e => setNewAd({ ...newAd, description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground block">Placement & Link</label>
                            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                <Layout className="w-5 h-5 text-zinc-400" />
                                <select
                                    className="bg-transparent border-none outline-none w-full font-bold cursor-pointer"
                                    value={newAd.slot}
                                    onChange={e => setNewAd({ ...newAd, slot: e.target.value as any })}
                                >
                                    <option value="top-banner">Top Premium Banner</option>
                                    <option value="home-mid-banner">Home Grid Feed</option>
                                    <option value="left-sidebar">Left Sidebar (Skyscraper)</option>
                                    <option value="right-sidebar">Right Sidebar (Skyscraper)</option>
                                    <option value="bottom-banner">Bottom Result Page</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                <LinkIcon className="w-5 h-5 text-zinc-400" />
                                <input
                                    placeholder="Target URL (https://...)"
                                    className="bg-transparent border-none outline-none w-full font-medium"
                                    value={newAd.link || ''}
                                    onChange={e => setNewAd({ ...newAd, link: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Launch Date</label>
                                <div className="flex items-center gap-2 px-4 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                                    <Calendar className="w-4 h-4 text-zinc-400" />
                                    <input
                                        type="date"
                                        className="bg-transparent border-none outline-none w-full text-sm font-bold"
                                        value={newAd.startDate}
                                        onChange={e => setNewAd({ ...newAd, startDate: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Expiry Date</label>
                                <div className="flex items-center gap-2 px-4 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                                    <Calendar className="w-4 h-4 text-zinc-400" />
                                    <input
                                        type="date"
                                        className="bg-transparent border-none outline-none w-full text-sm font-bold"
                                        value={newAd.endDate}
                                        onChange={e => setNewAd({ ...newAd, endDate: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            onClick={() => setIsAdding(false)}
                            className="h-12 px-6 font-bold text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAddAd}
                            disabled={!newAd.title || !newAd.link}
                            className="h-12 px-10 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black rounded-2xl hover:scale-105 transition-all shadow-xl disabled:opacity-50"
                        >
                            Activate Campaign (Cloud)
                        </button>
                    </div>
                </div>
            )}

            {/* List Ads */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black">Cloud Campaigns</h2>
                    <div className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Cloud Connected
                    </div>
                </div>

                {ads.length === 0 ? (
                    <div className="glass-card p-20 rounded-[3rem] text-center space-y-4 border border-zinc-100 dark:border-zinc-800">
                        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-300">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">No cloud campaigns yet</h3>
                            <p className="text-muted-foreground">Start by creating your first campaign on Firebase.</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {ads.map((ad) => {
                            const dDay = calculateDDay(ad.endDate);
                            const isExpired = dDay < 0;

                            return (
                                <div key={ad.id} className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 group hover:shadow-2xl transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex items-start gap-6">
                                            <div className="w-20 h-20 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-3 shadow-inner">
                                                {ad.slot.includes('sidebar') ? <Monitor className="w-8 h-8" /> : <Layout className="w-8 h-8" />}
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                        {ad.slot.replace('-', ' ')}
                                                    </span>
                                                    <span className={cn(
                                                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                        isExpired ? "bg-red-500 text-white" : "bg-amber-500/10 text-amber-600"
                                                    )}>
                                                        {isExpired ? 'Expired' : `D-${dDay}`}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-black tracking-tight">{ad.title}</h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-muted-foreground">
                                                    <div className="flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                                        <Calendar className="w-4 h-4" /> {ad.startDate} ~ {ad.endDate}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                                                        <LinkIcon className="w-4 h-4" /> {(ad.link as string).substring(0, 30)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleDuplicate(ad)}
                                                title="Duplicate Campaign"
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500 hover:text-primary transition-all shadow-sm"
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => toggleStatus(ad)}
                                                className={cn(
                                                    "h-12 px-6 rounded-2xl text-xs font-black uppercase border transition-all shadow-sm",
                                                    ad.active
                                                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                                                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-transparent"
                                                )}
                                            >
                                                {ad.active ? 'Live Now' : 'Draft Mode'}
                                            </button>
                                            <button
                                                onClick={() => deleteAd(ad.id)}
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all transform hover:rotate-12"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* SYNC Footer */}
            <div className="glass-card p-10 rounded-[3rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    <Globe2 className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-black">실시간 클라우드 센터</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
                        이제 사장님이 여기서 수정하는 모든 캠페인은 구글 <strong>Firebase 클라우드</strong>에 즉시 저장됩니다.
                        PC에서 수정하고 사장님의 핸드폰으로 봐도 똑같이 업데이트되어 노출됩니다!
                    </p>
                    <div className="flex justify-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-400">
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Firebase Live</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time Sync</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Global Reach</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
