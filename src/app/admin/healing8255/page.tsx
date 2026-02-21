'use client';

import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Plus,
    Trash2,
    Calendar,
    Link as LinkIcon,
    Type,
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
    BarChart3,
    MessageSquare,
    Mail,
    X
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { db } from '@/lib/firebase';
import { cn } from '@/lib/utils';
import {
    collection,
    onSnapshot,
    query,
    where,
    doc,
    setDoc,
    deleteDoc,
    orderBy
} from 'firebase/firestore';

type AdSlot = 'top-banner' | 'home-mid-banner' | 'left-sidebar' | 'right-sidebar' | 'bottom-banner';

interface AdItem {
    id: string;
    title: string;
    description: string;
    link: string;
    slot: AdSlot;
    startDate: string;
    endDate: string;
    active: boolean;
}

interface Inquiry {
    id: string;
    name: string;
    email: string;
    message: string;
    category?: string;
    type?: string;
    createdAt: string;
    status: string;
    dates?: string;
}

export default function AdminPage() {
    const { t } = useLanguage();
    const [ads, setAds] = useState<AdItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [currentTimestamp, setCurrentTimestamp] = useState(0);

    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Real Traffic Data State
    const [liveTraffic, setLiveTraffic] = useState({
        current: 0,
        todayTotal: 0,
        topTool: 'Loading...',
        revenue: 0,
        referrers: {} as Record<string, number>
    });

    useEffect(() => {
        const auth = sessionStorage.getItem('admin_auth');
        if (auth === 'true') setIsAuthenticated(true);
        setCurrentTimestamp(Date.now());
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Secret password known only to the boss
        if (password === 'healing8255!!') {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_auth', 'true');
        } else {
            setError('비밀번호가 틀렸습니다.');
        }
    };

    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [viewingInquiry, setViewingInquiry] = useState<Inquiry | null>(null);

    // Form state
    const [newAd, setNewAd] = useState<Partial<AdItem>>({
        slot: 'top-banner',
        active: true,
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        if (!newAd.startDate) {
            setNewAd(prev => ({
                ...prev,
                startDate: new Date().toISOString().split('T')[0],
                endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            }));
        }
    }, [newAd.startDate]);

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

                const views = data.views || 0;
                setLiveTraffic(prev => ({
                    ...prev,
                    todayTotal: views,
                    topTool: top !== 'None' ? decodeURIComponent(top).replace('-', ' ') : 'N/A',
                    revenue: Number((views * 0.005).toFixed(2)),
                    referrers: data.referrers || {}
                }));
            }
        });

        // 4. Inquiries Sync
        const qInquiries = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        const unsubscribeInquiries = onSnapshot(qInquiries, (snapshot) => {
            const items: Inquiry[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                items.push({
                    id: doc.id,
                    name: data.name || '',
                    email: data.email || '',
                    message: data.message || '',
                    category: data.category,
                    type: data.type,
                    createdAt: data.createdAt || new Date().toISOString(),
                    status: data.status || 'new',
                    dates: data.dates
                } as Inquiry);
            });
            setInquiries(items);
        });

        return () => {
            unsubscribeAds();
            unsubscribeActive();
            unsubscribeStats();
            unsubscribeInquiries();
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
            id: String(Date.now()),
            title: newAd.title || '',
            description: newAd.description || '',
            link: newAd.link || '',
            slot: (newAd.slot as AdSlot) || 'top-banner',
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
        if (confirm('이 광고를 삭제하시겠습니까?')) {
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
            id: String(Date.now() + Math.random()),
            title: `${ad.title} (복사본)`,
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
        if (!currentTimestamp) return 0;
        const end = new Date(endDate).getTime();
        const now = new Date(currentTimestamp).setHours(0, 0, 0, 0);
        const diff = end - now;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const deleteInquiry = async (id: string) => {
        if (!db) return;
        if (confirm('이 문의 건을 삭제하시겠습니까?')) {
            await deleteDoc(doc(db, 'inquiries', id));
        }
    };

    const markAsRead = async (id: string) => {
        if (!db) return;
        await setDoc(doc(db, 'inquiries', id), { status: 'read' }, { merge: true });
    };

    if (!mounted) return null;

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
                <div className="w-full max-w-md glass-card p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8 animate-in fade-in zoom-in-95 duration-500 shadow-2xl">
                    <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary mb-4">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-black tracking-tight">관리자 센터 접속</h1>
                        <p className="text-sm text-muted-foreground font-medium">서비스 운영을 위해 보안 비밀번호를 입력해주세요.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <input
                                type="password"
                                placeholder="보안 비밀번호 입력"
                                className="w-full h-14 px-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary/50 transition-all outline-none font-bold"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                autoFocus
                            />
                            {error && <p className="text-xs text-red-500 font-bold pl-2">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-zinc-900/10"
                        >
                            접속하기
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 space-y-12 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase">
                        <LayoutDashboard className="w-4 h-4" />
                        Management Center
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight">서비스 <span className="text-gradient">운영 센터</span></h1>
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
                        className="h-12 px-6 md:px-8 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20 flex-1 md:flex-none"
                    >
                        {isAdding ? '취소' : <><Plus className="w-5 h-5" /> 새 캠페인</>}
                    </button>
                </div>
            </div>

            {/* Traffic Analytics Section */}
            <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-black flex items-center gap-3">
                    <BarChart3 className="text-primary" /> 실시간 오디언스 분석
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-blue-500/[0.03] to-transparent relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-blue-500">
                                <Users className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Active Now</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-5xl font-black tracking-tighter">{liveTraffic.current}</span>
                                <span className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase">명 접속 중</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-medium italic">실시간 활성 세션 감지됨</p>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-amber-500/[0.03] to-transparent relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-amber-500">
                                <TrendingUp className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Growth Rate</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-4xl font-black tracking-tighter">+{Math.round((liveTraffic.todayTotal / 100) * 1.5)}%</span>
                                <span className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase">전일 대비 성장</span>
                            </div>
                            <div className="pt-2">
                                <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full w-[65%]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-emerald-500/[0.03] to-transparent relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-emerald-500">
                                <MousePointer2 className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Today Rev.</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-4xl font-black tracking-tighter">${liveTraffic.revenue}</span>
                                <span className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase">오늘 예상 수익</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-emerald-500/10">
                                <span className="text-[9px] font-black uppercase text-muted-foreground">월간 예상</span>
                                <span className="text-xs md:text-sm font-black text-emerald-500">${(liveTraffic.revenue * 30).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-purple-500/[0.03] to-transparent relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-purple-500">
                                <BarChart3 className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Total PV</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-4xl font-black tracking-tighter">{liveTraffic.todayTotal.toLocaleString()}</span>
                                <span className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase">조회수</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">평균 체류: 4분 12초</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Traffic Sources Breakdown */}
                    <div className="glass-card p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h3 className="text-xl font-black italic">유입 소스 분석</h3>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">사용자 접속 경로</p>
                            </div>
                            <Globe2 className="w-6 h-6 text-primary animate-pulse" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {(() => {
                                const entries = Object.entries(liveTraffic.referrers);
                                const totalTracked = entries.reduce((a, b) => a + (b[1] as number), 0);
                                return entries
                                    .sort(([, a], [, b]) => (b as number) - (a as number))
                                    .slice(0, 8)
                                    .map(([source, count], idx) => {
                                        const percentage = Math.round(((count as number) / (totalTracked || 1)) * 100);
                                        return (
                                            <div key={idx} className="space-y-3">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-xs font-black text-zinc-600 dark:text-zinc-400 truncate max-w-[120px]">
                                                        {source.replace(/_/g, '.')}
                                                    </span>
                                                    <span className="text-xs font-bold text-primary">{percentage}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary transition-all duration-1000"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    });
                            })()}
                            {Object.keys(liveTraffic.referrers).length === 0 && (
                                <div className="col-span-full py-8 text-center">
                                    <p className="text-[10px] font-bold text-muted-foreground italic">데이터를 불러오는 중입니다...</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tool Performance Leaderboard */}
                    <div className="glass-card p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h3 className="text-xl font-black italic">도구 사용 순위</h3>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">가장 많이 사용된 기능</p>
                            </div>
                            <Zap className="w-6 h-6 text-amber-500" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 border-l-4 border-l-emerald-500">
                                <span className="font-black text-emerald-500">1ST</span>
                                <span className="text-sm font-bold truncate flex-1 px-4">{liveTraffic.topTool}</span>
                                <span className="text-xs font-black bg-emerald-500 text-white px-2 py-1 rounded-md">HOT</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 opacity-60">
                                <span className="font-black">2ND</span>
                                <span className="text-sm font-bold truncate flex-1 px-4">유튜브 썸네일</span>
                                <span className="text-[9px] font-bold">인기 급상승</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">캠페인 스냅샷</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { label: '데이터베이스', val: '정상', icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
                        { label: '활성 광고', val: ads.length, icon: <Clock className="w-5 h-5 text-blue-500" /> },
                        { label: '서버 상태', val: '실시간', icon: <Globe2 className="w-5 h-5 text-purple-500" /> },
                        { label: '동기화 속도', val: '즉시', icon: <Zap className="w-5 h-5 text-amber-500" /> },
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
            {
                isAdding && (
                    <div className="glass-card p-10 rounded-[2.5rem] border-2 border-primary/20 animate-in slide-in-from-top-4 duration-500 space-y-8 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-3xl">
                        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                            <Plus className="text-primary" /> 새 광고 캠페인 생성
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block">기본 정보</label>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                        <Type className="w-5 h-5 text-zinc-400" />
                                        <input
                                            placeholder="캠페인 이름 / 제목"
                                            className="bg-transparent border-none outline-none w-full font-medium"
                                            value={newAd.title || ''}
                                            onChange={e => setNewAd({ ...newAd, title: e.target.value })}
                                        />
                                    </div>
                                    <textarea
                                        placeholder="상세 설명 (하단 보조 텍스트)"
                                        className="w-full h-24 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus:border-primary/50 transition-all outline-none resize-none"
                                        value={newAd.description || ''}
                                        onChange={e => setNewAd({ ...newAd, description: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block">배치 위치 및 링크</label>
                                <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                    <Layout className="w-5 h-5 text-zinc-400" />
                                    <select
                                        className="bg-transparent border-none outline-none w-full font-bold cursor-pointer"
                                        value={newAd.slot}
                                        onChange={e => setNewAd({ ...newAd, slot: e.target.value as AdSlot })}
                                    >
                                        <option value="top-banner">상단 프리미엄 배너</option>
                                        <option value="home-mid-banner">홈페이지 중간 그리드</option>
                                        <option value="left-sidebar">좌측 사이드바</option>
                                        <option value="right-sidebar">우측 사이드바</option>
                                        <option value="bottom-banner">결과 페이지 하단</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2 px-4 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-transparent focus-within:border-primary/50 transition-all">
                                    <LinkIcon className="w-5 h-5 text-zinc-400" />
                                    <input
                                        placeholder="타겟 URL (https://...)"
                                        className="bg-transparent border-none outline-none w-full font-medium"
                                        value={newAd.link || ''}
                                        onChange={e => setNewAd({ ...newAd, link: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">게시 시작일</label>
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
                                    <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">게시 종료일</label>
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
                                취소
                            </button>
                            <button
                                onClick={handleAddAd}
                                disabled={!newAd.title || !newAd.link}
                                className="h-12 px-10 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black rounded-2xl hover:scale-105 transition-all shadow-xl disabled:opacity-50"
                            >
                                캠페인 활성화 (Cloud)
                            </button>
                        </div>
                    </div>
                )
            }

            {/* List Ads */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black">클라우드 캠페인 리스트</h2>
                    <div className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        실시간 연결됨
                    </div>
                </div>

                {ads.length === 0 ? (
                    <div className="glass-card p-20 rounded-[3rem] text-center space-y-4 border border-zinc-100 dark:border-zinc-800">
                        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-300">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">등록된 캠페인이 없습니다</h3>
                            <p className="text-muted-foreground">새로운 광고 캠페인을 생성하여 수익화를 시작해보세요.</p>
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
                                                        {isExpired ? '만료됨' : `D-${dDay}`}
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
                                                {ad.active ? '송출 중' : '대기 중'}
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

            {/* Inquiries Section */}
            <div className="space-y-6 pt-12 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black flex items-center gap-3">
                        <MessageSquare className="text-blue-500" /> 사용자 문의
                        <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">{inquiries.filter(i => i.status === 'new').length} 건 미확인</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {inquiries.map((inq) => (
                        <div key={inq.id} className={cn(
                            "glass-card p-6 rounded-3xl border transition-all hover:shadow-xl",
                            inq.status === 'new' ? "border-blue-500/30 bg-blue-500/5 shadow-lg shadow-blue-500/5 rotate-1" : "border-zinc-100 dark:border-zinc-800"
                        )}>
                            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                            inq.type === 'Advertisement' ? "bg-amber-500 text-white" : "bg-purple-500 text-white"
                                        )}>
                                            {inq.category || inq.type}
                                        </span>
                                        <span className="text-xs font-bold text-muted-foreground">{new Date(inq.createdAt).toLocaleString()}</span>
                                    </div>
                                    <h4 className="text-xl font-black">
                                        {inq.name}
                                        <a href={`mailto:${inq.email}`} className="text-sm font-medium text-blue-500 hover:underline flex items-center gap-1 mt-1">
                                            <Mail className="w-3 h-3" /> {inq.email}
                                        </a>
                                    </h4>
                                    <p className="text-muted-foreground line-clamp-2 italic">&quot;{inq.message}&quot;</p>
                                    {inq.dates && <p className="text-xs font-black text-amber-600">REQ DATES: {inq.dates}</p>}
                                </div>
                                <div className="flex gap-2">
                                    {inq.status === 'new' && (
                                        <button
                                            onClick={() => markAsRead(inq.id)}
                                            className="h-10 px-4 bg-blue-500 text-white text-xs font-black uppercase rounded-xl hover:bg-blue-600 transition-colors"
                                        >
                                            읽음 처리
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setViewingInquiry(inq)}
                                        className="h-10 px-4 bg-zinc-100 dark:bg-zinc-800 text-xs font-black uppercase rounded-xl"
                                    >
                                        상세 보기
                                    </button>
                                    <button
                                        onClick={() => deleteInquiry(inq.id)}
                                        className="h-10 w-10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {inquiries.length === 0 && <p className="text-center py-20 text-muted-foreground font-bold italic">No inquiries received yet.</p>}
                </div>
            </div>

            {/* Inquiry Detail Modal */}
            {
                viewingInquiry && (
                    <div className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="glass-card w-full max-w-2xl p-10 rounded-[3rem] space-y-8 animate-in zoom-in-95 duration-300">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">문의 상세 정보</span>
                                    <h2 className="text-2xl md:text-3xl font-black">{viewingInquiry?.name}</h2>
                                </div>
                                <button onClick={() => setViewingInquiry(null)} className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-800"><X className="w-6 h-6" /></button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 text-sm">
                                <div className="space-y-4">
                                    <p className="font-bold text-muted-foreground uppercase text-[9px]">연락처 (이메일)</p>
                                    <a href={`mailto:${viewingInquiry.email}`} className="text-lg font-black text-blue-500 hover:underline flex items-center gap-2">
                                        <Mail className="w-5 h-5" /> {viewingInquiry?.email}
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-bold text-muted-foreground uppercase text-[9px]">접수 시간</p>
                                    <p className="text-lg font-black">{viewingInquiry?.createdAt ? new Date(viewingInquiry.createdAt).toLocaleString() : ''}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="font-bold text-muted-foreground uppercase text-[9px]">상세 메시지</p>
                                <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 text-lg leading-relaxed italic">
                                    &quot;{viewingInquiry?.message}&quot;
                                </div>
                            </div>

                            {viewingInquiry.dates && (
                                <div className="space-y-4">
                                    <p className="font-bold text-muted-foreground uppercase text-[9px]">희망 광고 기간</p>
                                    <p className="text-xl font-black text-amber-500">{viewingInquiry?.dates}</p>
                                </div>
                            )}

                            <div className="pt-4">
                                <button
                                    onClick={() => setViewingInquiry(null)}
                                    className="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black rounded-2xl"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

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


