import { useState } from "react"
import { Link } from "react-router"
import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import { CustomQuoteModal } from "./CustomQuoteModal"
import siteData from "../data/data.json"

export function HeroSection() {
  const { hero } = siteData
  const [isCustomQuoteModalOpen, setIsCustomQuoteModalOpen] = useState(false)

  return (
    <section className="relative min-h-[820px] overflow-hidden bg-[#fbfbfd] pb-24 pt-36 lg:min-h-[760px] lg:pb-28 lg:pt-44 border-b border-black/[0.04]">
      {/* Subtle Apple ambient radial lighting */}
      <div className="pointer-events-none absolute -right-28 top-16 size-[36rem] rounded-full bg-gradient-to-br from-[#c91f26]/5 via-[#0066cc]/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-gradient-to-tr from-[#f5f5f7] to-transparent blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          {/* Apple Pill Badge */}
          <ScrollReveal animation="fade-down" delay={60} duration={600}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-4 py-1.5 text-xs font-semibold text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="grid size-5 place-items-center rounded-full bg-[#c91f26]/10 text-[#c91f26]">
                <Icon name="spark" className="size-3" />
              </span>
              <span>{hero.badge}</span>
            </div>
          </ScrollReveal>

          {/* Apple Large Display Headline */}
          <ScrollReveal animation="fade-up" delay={140} duration={700}>
            <h1 className="max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1d1d1f]">
              {hero.titlePrefix}{" "}
              <span className="text-[#c91f26]">{hero.titleHighlight}</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal animation="fade-up" delay={240} duration={700}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#6e6e73] md:text-xl">
              {hero.description}
            </p>
          </ScrollReveal>

          {/* Apple-Style Rounded Pill CTAs */}
          <ScrollReveal animation="fade-up" delay={340} duration={700}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={() => setIsCustomQuoteModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d1d1f] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c91f26] hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <Icon
                  name="arrow"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </button>
              
              <Link
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold text-[#1d1d1f] shadow-xs transition-all duration-300 hover:bg-[#f5f5f7] hover:border-black/20"
                to={hero.secondaryCta.to}
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Apple-Style Showcase Card */}
        <ScrollReveal animation="fade-left" delay={180} duration={850}>
          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            {/* Pure White Outer Frame with Apple Soft Shadow */}
            <div className="overflow-hidden rounded-[2.25rem] border border-black/[0.05] bg-white p-3 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#1d1d1f]">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src={hero.showcase.image}
                  alt={hero.showcase.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating On-Image Studio Chip */}
                <div className="animate-float-slow absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-3.5 py-1.5 backdrop-blur-md text-white shadow-md">
                  <span className="size-2 rounded-full bg-[#c91f26] animate-ping" />
                  <span className="text-[11px] font-semibold tracking-wide">{hero.showcase.statNumber} {hero.showcase.statLabel}</span>
                </div>

                {/* Floating Frosted Glass Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c91f26]">
                    {hero.showcase.tag}
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                    {hero.showcase.title}
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Floating Photoshop Icon Badge (Top-Right) */}
            <div className="animate-float-delayed absolute -right-3 -top-4 z-20 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-[#001e36]/95 px-3.5 py-2.5 text-white shadow-[0_16px_32px_rgba(0,30,54,0.35)] backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:-right-6 sm:-top-5">
              <div className="grid size-9 place-items-center rounded-xl border border-[#31a8ff]/40 bg-[#001424] font-sans text-sm font-extrabold tracking-tight text-[#31a8ff] shadow-inner">
                Ps
              </div>
              <div>
                <p className="text-xs font-bold leading-tight text-white">Photoshop</p>
                <p className="text-[10px] font-semibold text-[#31a8ff]">Asset Craft</p>
              </div>
            </div>

            {/* 2. Floating Paint Brush Badge (Mid-Left) */}
            <div className="animate-float-slow absolute -left-4 top-16 z-20 flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:-left-7">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-[#c91f26] via-[#e24a50] to-[#ff6b6b] text-white shadow-sm">
                <svg
                  className="size-5 fill-none stroke-current stroke-[2.2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m18 2 4 4" />
                  <path d="m17 7 3-3" />
                  <path d="M19 9 8.7 19.3c-1 1-2.5 1.7-4.2 1.7H3v-1.5c0-1.7.7-3.2 1.7-4.2L15 5" />
                  <path d="m14 6 4 4" />
                  <path d="M6 18c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1d1d1f]">Paint &amp; Brush</p>
                <p className="text-[10px] font-semibold text-[#c91f26]">Visual Design</p>
              </div>
            </div>

            {/* 3. Floating Coding Tools Badge (Lower-Right) */}
            <div className="animate-float-gentle absolute -right-3 bottom-24 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1d1d1f]/95 px-4 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:-right-6 sm:bottom-28">
              <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-[#2a2a2e] font-mono text-xs font-bold text-[#34c759] shadow-inner">
                &lt;/&gt;
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#34c759] animate-pulse" />
                  <p className="text-xs font-bold text-white">Coding Tools</p>
                </div>
                <p className="font-mono text-[10px] text-[#a1a1a6]">React · TS · Cloud</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Custom Quote Routing Modal */}
      <CustomQuoteModal
        isOpen={isCustomQuoteModalOpen}
        onClose={() => setIsCustomQuoteModalOpen(false)}
        initialCategory="webapp"
      />
    </section>
  )
}

export default HeroSection
