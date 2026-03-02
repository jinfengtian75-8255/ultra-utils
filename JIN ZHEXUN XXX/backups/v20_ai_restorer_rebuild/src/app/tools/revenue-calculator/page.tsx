import { Metadata } from 'next'
import RevenueCalculatorClient from './RevenueCalculatorClient'

export const metadata: Metadata = {
    title: 'YouTube Revenue & AdSense Calculator | UltraUtils',
    description: 'Estimate your YouTube earnings based on views and CPM. Includes niche averages, growth tips, and market insights for content creators. Free and accurate revenue forecasting tool.',
    keywords: ['youtube revenue calculator', 'adsense earnings calculator', 'estimated revenue tool', 'yt money calculator', '유튜브 수익 계산기', '애드센스 수익 확인'],
    openGraph: {
        title: 'YouTube Revenue & AdSense Calculator | UltraUtils',
        description: 'Calculate your potential YouTube earnings. Professional revenue estimator tool.',
        url: 'https://ultra-utils.com/tools/revenue-calculator',
    }
}

export default function page() {
    return (
        <RevenueCalculatorClient />
    )
}
