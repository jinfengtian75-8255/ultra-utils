'use client'

const STORAGE_KEY = 'ultrautils_recent_tools'
const MAX_RECENT = 4

export interface RecentTool {
    id: string
    title: string
    href: string
    iconName: string
    timestamp: number
}

export const addRecentTool = (tool: Omit<RecentTool, 'timestamp'>) => {
    if (typeof window === 'undefined') return

    const existing = getRecentTools()
    const updated = [
        { ...tool, timestamp: Date.now() },
        ...existing.filter(t => t.id !== tool.id)
    ].slice(0, MAX_RECENT)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export const getRecentTools = (): RecentTool[] => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    try {
        return JSON.parse(stored)
    } catch (e) {
        return []
    }
}
