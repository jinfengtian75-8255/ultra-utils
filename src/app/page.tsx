'use client'

import Link from 'next/link'
import { ArrowRight, Image as ImageIcon, Youtube, Wand2, Sliders, AlignLeft, Sparkles, FileText, ShieldCheck, Zap, Globe2 } from "lucide-react"
import { useLanguage } from '@/context/language-context'
import AdBanner from '@/components/AdBanner'
import RecentTools from '@/components/RecentTools'
import PwaBanner from '@/components/PwaBanner'

export default function Home() {
  const { t } = useLanguage()

  const tools = [
    {
      title: t.navbar.ytPlanner,
      description: t.ytPlanner.desc,
      href: "/tools/youtube-planner",
      icon: Wand2,
      gradient: "from-amber-400 to-rose-500",
      delay: "delay-100"
    },
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

      {/* Recently Used Tools */}
      <RecentTools />

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
          </div>
        ))}
      </div>

      {/* Hero Ad Section - Moved below tools for better UX */}
      <div className="w-full max-w-7xl px-4 py-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[800ms]">
        <AdBanner slot="home-mid-banner" useAdSense={true} />
      </div>

      {/* Growth Tips Section - SEO Boost */}
      <div className="w-full max-w-7xl px-4 py-10 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[900ms]">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black">{t.home.growthTips.title}</h2>
          <p className="text-muted-foreground text-lg">{t.home.growthTips.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.home.growthTips.tips.map((tip, i) => (
            <Link
              key={i}
              href={tip.href}
              className="group relative glass-card p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:border-primary/20 transition-all hover:shadow-xl text-left flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="w-20 h-20 text-primary" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  {tip.tool}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                {t.home.launchTool} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO & Informational Section */}
      <div className="w-full max-w-5xl px-4 py-20 border-t border-zinc-100 dark:border-zinc-800 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-black">{t.home.titlePrefix} {t.home.titleSuffix}</h2>
            <div className="prose prose-zinc dark:prose-invert leading-[1.8] text-muted-foreground whitespace-pre-line">
              <p>{t.home.missionDesc1}</p>
              <p>{t.home.missionDesc2}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: t.home.features.privacy.title, desc: t.home.features.privacy.desc, icon: ShieldCheck },
              { title: t.home.features.speed.title, desc: t.home.features.speed.desc, icon: Zap },
              { title: t.home.features.global.title, desc: t.home.features.global.desc, icon: Globe2 },
              { title: t.home.features.free.title, desc: t.home.features.free.desc, icon: Sparkles }
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
            <h3 className="text-2xl font-bold italic underline underline-offset-8 decoration-primary">{t.home.footerNote.title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.home.footerNote.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t.home.footerNote.media.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.home.footerNote.media.desc}</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t.home.footerNote.data.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.home.footerNote.data.desc}</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t.home.footerNote.design.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.home.footerNote.design.desc}</p>
            </div>
          </div>
        </div>

        {/* PWA Install Banner */}
        <PwaBanner />
      </div>
    </div>
  )
}


