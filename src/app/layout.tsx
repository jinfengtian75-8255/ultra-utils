import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import RealtimeTracker from '@/components/RealtimeTracker'
import { Suspense } from 'react'
import AdBanner from '@/components/AdBanner'
import Script from 'next/script'

import { LanguageProvider } from '@/context/language-context'
import LayoutShell from '@/components/LayoutShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UltraUtils - Free Pro Tools for Creators (YouTube, AI, Image)',
  description: 'Pro-grade YouTube Thumbnail Grabber, AI Background Remover (누끼 따기), Image Compressor, and more. Free, fast, and no registration required. Best tools for creators.',
  keywords: [
    'youtube thumbnail downloader', 'ai background remover', 'image compressor', 'qr code generator', 'text converter', 'free online tools',
    '누끼 따기', '이미지 압축', '유튜브 썸네일 다운로드', '무료 ai 도구', '배경 제거', 'QR 코드 생성'
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
