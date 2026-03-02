import { Metadata } from 'next'
import BackgroundRemoverClient from './BackgroundRemoverClient'

export const metadata: Metadata = {
    title: 'AI Background Remover - Professional Cutout Tool (누끼 따기) | UltraUtils',
    description: 'Remove background from any image instantly using AI. High precision, supports HD export, stickers, and custom backgrounds. 100% private and free.',
    keywords: ['ai background remover', 'remove bg', 'image cutout', '누끼 따기', '배경 제거', 'transparent background generator', 'png maker'],
    openGraph: {
        title: 'AI Background Remover - Professional Cutout Tool (누끼 따기) | UltraUtils',
        description: 'Remove backgrounds instantly with AI. Professional HD quality output for free.',
        url: 'https://ultra-utils.com/tools/background-remover',
    }
}

export default function page() {
    return (
        <BackgroundRemoverClient />
    )
}
