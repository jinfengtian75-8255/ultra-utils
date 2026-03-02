import { Metadata } from 'next'
import YoutubePlannerClient from './YoutubePlannerClient'

export const metadata: Metadata = {
    title: 'AI YouTube Video Planner & Script Generator | UltraUtils',
    description: 'Plan your next viral YouTube video with AI. Generate catchy titles, optimized tags, video scripts, and growth strategies instantly. The ultimate studio for content creators.',
    keywords: ['youtube planner', 'video script generator', 'youtube title generator', 'viral video ideas', 'content planner', '유튜브 기획 도구', '유튜브 스크립트 생성', '동영상 주제 추천'],
    openGraph: {
        title: 'AI YouTube Video Planner & Script Generator | UltraUtils',
        description: 'Plan viral videos instantly with AI-powered scripts and titles.',
        url: 'https://ultra-utils.com/tools/youtube-planner',
    }
}

export default function page() {
    return (
        <YoutubePlannerClient />
    )
}
