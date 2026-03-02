import { Metadata } from 'next'
import PDFMasterClient from './PDFMasterClient'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
    title: 'PDF Master: Merge, Split, Convert & Protect PDFs | UltraUtils',
    description: 'The ultimate PDF toolset. Merge multiple PDFs, split pages, convert to images, rotate, and password-protect your files. All processing happens in your browser for 100% privacy.',
    keywords: ['pdf master', 'merge pdf', 'split pdf', 'pdf to image', 'protect pdf', 'rotate pdf', 'pdf 도구', 'pdf 합치기', 'pdf 나누기'],
    openGraph: {
        title: 'PDF Master: Merge, Split, Convert & Protect PDFs | UltraUtils',
        description: 'Complete professional PDF toolset for merged, splitting, converting and protecting PDFs.',
        url: 'https://ultra-utils.com/tools/pdf-master',
    }
}

export default function page() {
    return (
        <div className="space-y-12">
            <PDFMasterClient />
            <AdBanner slot="tool-bottom-master" useAdSense={true} />
        </div>
    )
}
