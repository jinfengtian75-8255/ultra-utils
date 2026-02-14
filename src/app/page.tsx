'use client'

import Link from 'next/link'
import { ArrowRight, Image as ImageIcon, Youtube, Wand2, Sliders, AlignLeft, Sparkles, FileText, ShieldCheck, Zap, Globe2 } from "lucide-react"
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'

export default function Home() {
  const { t } = useLanguage()

  const tools = [
    {
      title: t.navbar.ytGrab,
      description: t.ytGrab.desc,
      href: "/tools/youtube-thumbnail",
      icon: Youtube,
      gradient: "from-red-500 to-orange-500",
      delay: "delay-100"
    },
    {
      title: t.navbar.qrGen,
      description: t.qrGen.desc,
      href: "/tools/qr-generator",
      icon: Sliders,
      gradient: "from-zinc-900 to-zinc-600",
      delay: "delay-200"
    },
    {
      title: t.navbar.imageSuite,
      description: t.imageMaster.desc,
      href: "/tools/image-compressor",
      icon: ImageIcon,
      gradient: "from-blue-500 to-cyan-500",
      delay: "delay-300"
    },
    {
      title: t.navbar.promptGen,
      description: t.promptGen.desc,
      href: "/tools/prompt-generator",
      icon: Wand2,
      gradient: "from-purple-500 to-pink-500",
      delay: "delay-[400ms]"
    },
    {
      title: t.navbar.textConv,
      description: t.textConverter.desc,
      href: "/tools/text-converter",
      icon: AlignLeft,
      gradient: "from-green-500 to-emerald-500",
      delay: "delay-[500ms]"
    },
    {
      title: t.navbar.bgRemover,
      description: t.bgRemover.desc,
      href: "/tools/background-remover",
      icon: Sparkles,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: t.pdfMaster.title,
      description: t.pdfMaster.desc,
      href: "/tools/pdf-master",
      icon: FileText,
      gradient: "from-blue-600 to-indigo-600",
      delay: "delay-[700ms]"
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-20 text-center space-y-20">

      {/* Hero Section */}
      <div className="space-y-6 max-w-4xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm font-medium text-zinc-800 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 mb-4 transition-transform hover:scale-105 cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          {t.home.badge}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          {t.home.titlePrefix} <br />
          <span className="text-gradient">{t.home.titleSuffix}</span>
        </h1>

        <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
          {t.home.desc}
          <br className="hidden sm:block" />
          {t.home.descLine2}
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4">
        {tools.map((tool, index) => (
          <div key={tool.title} className="contents">
            <Link
              href={tool.href}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-card p-8 transition-all hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both ${tool.delay}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>

              <div className="relative z-10 space-y-6 text-left">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${tool.gradient} text-white shadow-lg shadow-black/5`}>
                  <tool.icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">{tool.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm h-[3rem] overflow-hidden line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between text-sm font-bold pt-4 border-t border-zinc-100/50 dark:border-zinc-800/50">
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{t.home.launchTool}</span>
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Insert Ad after 6th tool (2 rows in tablet/desktop) */}
            {index === 5 && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[600ms]">
                <AdBanner slot="home-mid-banner" useAdSense={true} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* SEO & Informational Section */}
      <div className="w-full max-w-5xl px-4 py-20 border-t border-zinc-100 dark:border-zinc-800 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-black">{t.home.titlePrefix} {t.home.titleSuffix}</h2>
            <div className="prose prose-zinc dark:prose-invert leading-[1.8] text-muted-foreground">
              <p>
                Welcome to <strong>UltraUtils</strong>, your premium destination for high-performance, privacy-focused digital utilities. In an era where online tools often compromise user data or hide behind complex paywalls, we stand for a different approach: 100% free, entirely local, and professionally designed.
              </p>
              <p>
                Our mission is to empower creators, developers, and everyday users with tools that work directly in the browser. Whether you need to <strong>remove backgrounds with AI</strong>, <strong>optimize images for SEO</strong>, or <strong>manage complex PDF documents</strong>, our suite of tools handles the heavy lifting without ever uploading your sensitive files to a server.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Privacy", desc: "No server uploads", icon: ShieldCheck },
              { title: "Speed", desc: "Local processing", icon: Zap },
              { title: "Global", desc: "Multi-language", icon: Globe2 },
              { title: "Free", desc: "No hidden fees", icon: Sparkles }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl text-center space-y-2 hover:border-primary/30 transition-all">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="font-bold text-lg">{stat.title}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold italic underline underline-offset-8 decoration-primary">Professional Tools for Everyone</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover why thousands of users trust UltraUtils for their daily digital workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">Media Suite</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">High-quality YouTube thumbnail extraction and AI-powered background removal. Perfect for YouTubers and content creators looking to streamline their workflow.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">Data & Text</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">Advanced text conversion, formatting, and cleanup tools. Essential for data analysts and developers who need to transform raw data into usable formats instantly.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">Design Assets</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">Professional QR code generation with custom styling and high-resolution output. Ideal for businesses and marketing campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


