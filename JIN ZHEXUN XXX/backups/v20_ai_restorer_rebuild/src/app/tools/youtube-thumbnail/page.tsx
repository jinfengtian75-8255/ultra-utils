import { Metadata } from 'next'
import YoutubeThumbnailClient from './YoutubeThumbnailClient'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
    title: 'YouTube Thumbnail Grabber - High Quality Download | UltraUtils',
    description: 'Download YouTube thumbnails in HD, SD, and 4K quality for free. No login required. Quick and easy tool for content creators and designers.',
    keywords: ['youtube thumbnail downloader', 'yt thumbnail grabber', 'download youtube thumbnail', 'hd thumbnail download', '유튜브 썸네일 다운로드', '썸네일 추출'],
    openGraph: {
        title: 'YouTube Thumbnail Grabber - High Quality Download | UltraUtils',
        description: 'Download YouTube thumbnails in HD, SD, and 4K quality for free. No login required.',
        url: 'https://ultra-utils.com/tools/youtube-thumbnail',
    }
}

export default function page() {
    return (
        <div className="space-y-12">
            <YoutubeThumbnailClient />
            <AdBanner slot="tool-bottom-thumbnail" useAdSense={true} />
        </div>
    )
}
