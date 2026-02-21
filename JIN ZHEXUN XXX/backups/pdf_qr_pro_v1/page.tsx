import { Metadata } from 'next'
import QrGeneratorClient from './QrGeneratorClient'
import AdBanner from '@/components/AdBanner'
import NextStep from '@/components/NextStep'

export const metadata: Metadata = {
    title: 'QR PRO - Premium QR Code Design System',
    description: 'Create professional, custom-branded QR codes with high-resolution vector export, logo integration, and business presets.',
}

export default function QrGeneratorPage() {
    return (
        <div className="space-y-12">
            <QrGeneratorClient />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AdBanner slot="tool-bottom-banner" useAdSense={true} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <NextStep
                    title="PDF Master"
                    desc="Merge, Split and Convert PDFs"
                    href="/tools/pdf-master"
                    iconName="FileText"
                />
            </div>
        </div>
    )
}
