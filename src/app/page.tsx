'use client'

import Link from 'next/link'
import { ArrowRight, Image as ImageIcon, Youtube, Wand2, Sliders, AlignLeft, Sparkles } from "lucide-react"
import { useLanguage } from '@/context/language-context'

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
      delay: "delay-[600ms]"
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

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
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
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-card p-8 transition-all hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both ${tool.delay}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>

            <div className="relative z-10 space-y-6 text-left">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${tool.gradient} text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <tool.icon className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-2xl tracking-tight">{tool.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center text-sm font-bold text-primary opacity-60 transition-all group-hover:opacity-100 group-hover:translate-x-1">
              {t.home.launchTool} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
