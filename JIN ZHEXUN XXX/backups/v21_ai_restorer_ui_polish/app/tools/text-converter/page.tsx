import { Metadata } from 'next'
import TextConverterClient from './TextConverterClient'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
    title: 'Free Online Text Converter | Case, Cleanup & Encode Tools',
    description: 'Transform your text instantly with our free online tools. Change case, cleanup whitespace, remove duplicates, URL encode/decode, Base64, and JSON formatting.',
    keywords: ['text converter', 'uppercase', 'lowercase', 'remove duplicates', 'url encode', 'base64 converter', 'json formatter', 'online text tools'],
    openGraph: {
        title: 'Free Online Text Converter | Instant Text Transformation',
        description: 'Professional grade text transformation tools. FREE, fast, and secure.',
        type: 'website',
    }
}

export default function TextConverterPage() {
    return (
        <>
            <TextConverterClient />
            <AdBanner slot="tool-bottom-banner" useAdSense={true} />
        </>
    )
}
