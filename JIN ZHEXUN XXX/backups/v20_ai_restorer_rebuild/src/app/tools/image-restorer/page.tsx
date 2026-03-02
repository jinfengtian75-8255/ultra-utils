import { Metadata } from 'next'
import ImageRestorerClient from './ImageRestorerClient'

export const metadata: Metadata = {
    title: 'AI Image Restorer: Repair & Enhance Old Photos | UltraUtils',
    description: 'Restore old, blurry, or damaged photos using advanced AI. Fix scratches, enhance resolution, and bring your memories back to life. Fast, secure, and free photo restoration.',
    keywords: ['image restorer', 'fix old photos', 'ai photo enhancement', 'restore blurry images', 'photo repair tool', '사진 복원', '오래된 사진 복원', '고화질 변환'],
    openGraph: {
        title: 'AI Image Restorer: Repair & Enhance Old Photos | UltraUtils',
        description: 'Breathe life into your old photos with AI restoration technology.',
        url: 'https://ultra-utils.com/tools/image-restorer',
    }
}

export default function page() {
    return <ImageRestorerClient />
}
