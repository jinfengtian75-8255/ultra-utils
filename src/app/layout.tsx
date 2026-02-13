import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Suspense } from 'react'
import AdBanner from '@/components/AdBanner'

import { LanguageProvider } from '@/context/language-context'
import LayoutShell from '@/components/LayoutShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UltraUtils - Free Pro Tools for Creators',
  description: 'Pro-grade YouTube Thumbnail Grabber, AI Background Remover, Image Compressor, and more. Free, fast, and no registration required.',
  keywords: ['youtube thumbnail downloader', 'ai background remover', 'image compressor', 'qr code generator', 'text converter', 'free online tools'],
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
        </Suspense>
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
