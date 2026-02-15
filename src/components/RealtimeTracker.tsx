'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, setDoc, increment, serverTimestamp } from 'firebase/firestore';

export default function RealtimeTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!db) return;

        // 1. Unique Session ID for 'Active Now'
        const sessionId = Math.random().toString(36).substring(7);
        const sessionRef = doc(db, 'active_sessions', sessionId);

        // Heartbeat function
        const updateHeartbeat = async () => {
            try {
                await setDoc(sessionRef, {
                    lastActive: serverTimestamp(),
                    path: pathname
                }, { merge: true });
            } catch (e) {
                console.error("Heartbeat failed", e);
            }
        };

        // Initial heartbeat
        updateHeartbeat();

        // Heartbeat every 30 seconds
        const interval = setInterval(updateHeartbeat, 30000);

        // Cleanup: Ideally delete session, but Firestore has no guaranteed cleanup on exit
        // We will just filter stale sessions in the admin dashboard
        window.addEventListener('beforeunload', () => {
            // Optional: Try to delete session on close (not always reliable)
            // deleteDoc(sessionRef); 
        });

        return () => {
            clearInterval(interval);
        };
    }, [pathname]);

    useEffect(() => {
        if (!db) return;

        // 2. Daily Page View & Tool Usage Tracking
        const trackView = async () => {
            const today = new Date().toISOString().split('T')[0];
            const statsRef = doc(db, 'stats', today);

            try {
                // Increment total views for the day
                await setDoc(statsRef, {
                    views: increment(1)
                }, { merge: true });

                // 3. Track Referrer
                const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct';
                const safeReferrer = referrer.replace(/\./g, '_'); // Firestore keys can't contain dots
                await setDoc(statsRef, {
                    referrers: {
                        [safeReferrer]: increment(1)
                    }
                }, { merge: true });

                // If it's a tool page, track tool-specific usage
                if (pathname.startsWith('/tools/')) {
                    const toolName = pathname.replace('/tools/', '');
                    await setDoc(statsRef, {
                        [`tools.${toolName}`]: increment(1)
                    }, { merge: true });
                }
            } catch (e) {
                console.error("Tracking view failed", e);
            }
        };

        trackView();
    }, [pathname]);

    return null;
}
