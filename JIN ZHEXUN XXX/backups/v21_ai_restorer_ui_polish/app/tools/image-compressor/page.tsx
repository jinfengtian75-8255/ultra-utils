import { Metadata } from 'next'
import ImageCompressorClient from './ImageCompressorClient'

export const metadata: Metadata = {
    title: 'All-in-One Image Master: Compression, Scaling, & Enhancing | UltraUtils',
    description: 'Pro-grade image compressor and optimizer. Reduce file size up to 90% without losing quality. Support JPEG, PNG, and AI-powered smart enhancement. Fast, secure, and private.',
    keywords: ['image compressor', 'reduce image size', 'optimize image for web', 'png compressor', 'jpeg optimizer', '이미지 압축', '이미지 용량 줄이기', '이미지 리사이징'],
    openGraph: {
        title: 'All-in-One Image Master: Compression, Scaling, & Enhancing | UltraUtils',
        description: 'Optimize your images instantly. Pro quality compression for free.',
        url: 'https://ultra-utils.com/tools/image-compressor',
    }
}

export default function page() {
    return (
        <ImageCompressorClient />
    )
}
