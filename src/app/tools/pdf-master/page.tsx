'use client'

import PDFMasterClient from './PDFMasterClient'
import AdBanner from '@/components/AdBanner'

export default function PDFMasterPage() {
    return (
        <div className="space-y-12">
            <PDFMasterClient />
            <AdBanner slot="tool-bottom-banner" useAdSense={true} />
        </div>
    )
}
