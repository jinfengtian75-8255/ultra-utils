import { Metadata } from 'next'
import QrGeneratorClient from './QrGeneratorClient'
import AdBanner from '@/components/AdBanner'
import NextStep from '@/components/NextStep'

export const metadata: Metadata = {
    title: 'Free QR Code Generator | Design Custom QR Codes with Logo',
    description: 'Create professional, custom-branded QR codes with logo integration, high-resolution vector export, and business presets. FREE and easy to use.',
    keywords: ['qr code generator', 'custom qr code', 'qr code with logo', 'qr designing', 'vector qr code', 'free qr generator'],
    openGraph: {
        title: 'Premium QR Code Generator | Design Custom QR Codes',
        description: 'Professional grade QR code generation with high-quality exports. FREE.',
        type: 'website',
    }
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
