import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import RealtimeTracker from '@/components/RealtimeTracker'
import { Suspense } from 'react'

import Script from 'next/script'

import { LanguageProvider } from '@/context/language-context'
import LayoutShell from '@/components/LayoutShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ultra-utils.com'),
  title: 'UltraUtils - Free Pro Tools for Creators (YouTube, AI, Image)',
  description: 'Pro-grade YouTube Thumbnail Grabber, AI Background Remover (누끼 따기), Image Compressor, and more. Free, fast, and no registration required. Best tools for creators.',
  keywords: [
    'youtube thumbnail downloader', 'ai background remover', 'image compressor', 'qr code generator', 'text converter', 'free online tools',
    'increase youtube ctr', 'branding tools', 'content creator kit', 'productivity tools',
    '누끼 따기', '이미지 압축', '유튜브 썸네일 다운로드', '무료 ai 도구', '배경 제거', 'QR 코드 생성', '클릭률 높이는 법',
    '背景削除', '画像圧縮', 'YouTube サムネイル', 'QRコード作成',
    'quitar fondo ai', 'comprimir imagen', 'descargar miniatura youtube',
    'hintergrund entfernen', 'bild komprimieren', 'youtube vorschaubild',
    'usuwanie tła ai', 'kompresja obrazu', 'miniatury youtube'
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '48x48', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'UltraUtils - 크리에이터를 위한 무료 디지털 도구 모음',
    description: '유튜브 썸네일 추출, AI 배경 제거(누끼), 이미지 압축 등 크리에이터에게 필요한 고성능 도구를 무료로 이용하세요. 별도의 가입 없이 즉시 사용 가능합니다.',
    url: 'https://ultra-utils.com',
    siteName: 'UltraUtils',
    images: [
      {
        url: 'https://ultra-utils.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'UltraUtils - 크리에이터를 위한 디지털 슈퍼파워',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UltraUtils - Digital Superpowers for Creators',
    description: '100% 무료, 개인정보를 보호하는 크리에이터 전용 온라인 도구 모음.',
    images: ['https://ultra-utils.com/opengraph-image'],
  },
  other: {
    'google-adsense-account': 'ca-pub-1373852776233080',
    'google-site-verification': 'TRvpShMEIm9PHhPgGSTrxxR8FO4ESg6FIsbW5poRq7I',
    'naver-site-verification': '2cb2d07c789aea0a76e3f059cbe1d0f720f40de1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased selection:bg-blue-500/30 overflow-x-hidden")}>
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ''} />
          <RealtimeTracker />
        </Suspense>
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "UltraUtils",
              "url": "https://ultra-utils.com",
              "description": "Premium, free, and privacy-focused digital tools for creators.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ultra-utils.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Script
          id="json-ld-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "UltraUtils AI Background Remover",
              "operatingSystem": "Any",
              "applicationCategory": "DesignApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1373852776233080"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <LanguageProvider>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[hsl(var(--background))] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f1f1f_1px,transparent_1px)]"></div>

          <LayoutShell>
            {children}
          </LayoutShell>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
