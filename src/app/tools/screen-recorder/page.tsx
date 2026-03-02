import { Metadata } from 'next'
import ScreenRecorderClient from './ScreenRecorderClient'

export const metadata: Metadata = {
    title: 'Free Online Screen Recorder with Audio & Webcam | UltraUtils',
    description: 'Record your screen, webcam, and system audio directly from your browser. No software installation required. High-quality export for tutorials, gameplay, and presentations. 100% private.',
    keywords: ['screen recorder', 'online screen capture', 'record webcam', 'screen recorder with audio', 'free screen recording', '화면 녹화', '컴퓨터 화면 녹화', '웹캠 녹화'],
    openGraph: {
        title: 'Free Online Screen Recorder with Audio & Webcam | UltraUtils',
        description: 'High-quality screen recording directly in your browser. No installer needed.',
        url: 'https://ultra-utils.com/tools/screen-recorder',
    }
}

export default function page() {
    return (
        <ScreenRecorderClient />
    )
}
