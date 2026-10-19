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
    <section className="relative min-h-[820px] overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fbfcfe] to-[#f1f4f9] pb-24 pt-36 lg:min-h-[760px] lg:pb-28 lg:pt-44 border-b border-slate-200/90">
      {/* Subtle Apple ambient radial lighting */}
      <div className="pointer-events-none absolute -right-28 top-16 size-[36rem] rounded-full bg-gradient-to-br from-[#c91f26]/8 via-[#0066cc]/6 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-gradient-to-tr from-[#0066cc]/5 via-[#c91f26]/5 to-transparent blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          {/* Apple Pill Badge */}
          <ScrollReveal animation="fade-down" delay={60} duration={600}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-1.5 text-xs font-semibold text-[#1d1d1f] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
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
                <Link
                  to="/services"
                  className="animate-float-slow absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/55 px-3.5 py-1.5 backdrop-blur-md text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-black/75 hover:border-white/40 group"
                >
                  <span className="size-2 rounded-full bg-[#c91f26] animate-ping" />
                  <span className="text-[11px] font-semibold tracking-wide">
                    {hero.showcase.statNumber} {hero.showcase.statLabel}
                  </span>
                  <span className="text-[10px] text-white/60 transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>

                {/* Floating Frosted Glass Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 sm:p-5 backdrop-blur-xl shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#c91f26]">
                      {hero.showcase.tag}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0066cc] hover:text-[#0077ed] transition-colors"
                    >
                      <span>Explore</span>
                      <span>↗</span>
                    </Link>
                  </div>
                  <p className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-[#1d1d1f]">
                    {hero.showcase.title}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.06]">
                    <Link to="/services" className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-[#1d1d1f] transition-all hover:bg-[#c91f26] hover:text-white">Web Apps</Link>
                    <Link to="/services" className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-[#1d1d1f] transition-all hover:bg-[#c91f26] hover:text-white">UI/UX Design</Link>
                    <Link to="/services" className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-[#1d1d1f] transition-all hover:bg-[#c91f26] hover:text-white">Mobile Apps</Link>
                    <Link to="/services" className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-[#1d1d1f] transition-all hover:bg-[#c91f26] hover:text-white">SEO Growth</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. Service 07: Creative Asset Craft (Photoshop Ps) — Floating Top-Right */}
            <Link
              to="/services"
              className="group animate-float-delayed absolute -right-3 -top-5 z-20 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-[#001e36]/95 px-3 py-2 text-white shadow-[0_16px_36px_rgba(0,30,54,0.38)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#31a8ff]/60 hover:shadow-[0_20px_45px_rgba(49,168,255,0.25)] sm:-right-7 sm:-top-6 sm:gap-3 sm:px-3.5 sm:py-2.5"
            >
              <div className="grid size-8.5 place-items-center rounded-xl border border-[#31a8ff]/40 bg-[#001424] font-sans text-xs font-extrabold tracking-tight text-[#31a8ff] shadow-inner transition-transform duration-300 group-hover:scale-110 sm:size-9 sm:text-sm">
                Ps
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#31a8ff]">Service 07</span>
                  <span className="text-white/40 text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>
                <p className="text-xs font-bold leading-tight text-white transition-colors group-hover:text-[#31a8ff]">Digital Asset Craft</p>
                <p className="text-[10px] font-semibold text-white/60">Photoshop · 3D · Motion</p>
              </div>
            </Link>

            {/* 2. Service 02: UI/UX & Visual Design (Paint Brush) — Floating Mid-Left */}
            <Link
              to="/services"
              className="group animate-float-slow absolute -left-3 top-14 z-20 flex items-center gap-2.5 rounded-2xl border border-black/[0.08] bg-white/95 px-3 py-2 shadow-[0_16px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#c91f26]/30 hover:shadow-[0_20px_45px_rgba(201,31,38,0.15)] sm:-left-7 sm:top-18 sm:gap-3 sm:px-3.5 sm:py-2.5"
            >
              <div className="grid size-8.5 place-items-center rounded-xl bg-gradient-to-tr from-[#c91f26] via-[#e24a50] to-[#ff6b6b] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-9">
                <svg
                  className="size-4.5 sm:size-5 fill-none stroke-current stroke-[2.2]"
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
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#c91f26]">Service 02</span>
                  <span className="text-black/30 text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c91f26]">↗</span>
                </div>
                <p className="text-xs font-bold text-[#1d1d1f] transition-colors group-hover:text-[#c91f26]">UI/UX &amp; Brand Design</p>
                <p className="text-[10px] font-semibold text-[#86868b]">Paint Brush · Figma · Tokens</p>
              </div>
            </Link>

            {/* 3. Service 01: Web Applications & Architecture (Coding Tools) — Floating Lower-Right */}
            <Link
              to="/services"
              className="group animate-float-gentle absolute -right-3 bottom-24 z-20 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#1d1d1f]/95 px-3 py-2 text-white shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#34c759]/40 hover:shadow-[0_20px_45px_rgba(52,199,89,0.18)] sm:-right-7 sm:bottom-28 sm:gap-3 sm:px-3.5 sm:py-2.5"
            >
              <div className="grid size-8.5 place-items-center rounded-xl border border-white/10 bg-[#2a2a2e] font-mono text-xs font-bold text-[#34c759] shadow-inner transition-transform duration-300 group-hover:scale-110 sm:size-9">
                &lt;/&gt;
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#34c759] animate-pulse" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#34c759]">Service 01</span>
                  <span className="text-white/40 text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#34c759]">↗</span>
                </div>
                <p className="text-xs font-bold text-white transition-colors group-hover:text-[#34c759]">Web Applications</p>
                <p className="font-mono text-[10px] text-[#a1a1a6]">Coding Tools · React · SaaS</p>
              </div>
            </Link>

            {/* 4. Service 04: Mobile Applications (iOS & Android) — Floating Lower-Left */}
            <Link
              to="/services"
              className="group animate-float-slow absolute -left-3 bottom-14 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-black/[0.08] bg-white/95 px-3 py-2 shadow-[0_16px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#0066cc]/30 hover:shadow-[0_20px_45px_rgba(0,102,204,0.15)] sm:-left-7 sm:bottom-16 sm:gap-3 sm:px-3.5 sm:py-2.5"
            >
              <div className="grid size-8.5 place-items-center rounded-xl bg-gradient-to-tr from-[#0066cc] to-[#2997ff] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-9">
                <svg
                  className="size-4.5 sm:size-5 fill-none stroke-current stroke-[2.2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="14" height="20" x="5" y="2" rx="3" ry="3" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#0066cc]">Service 04</span>
                  <span className="text-black/30 text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0066cc]">↗</span>
                </div>
                <p className="text-xs font-bold text-[#1d1d1f] transition-colors group-hover:text-[#0066cc]">Mobile Applications</p>
                <p className="text-[10px] font-semibold text-[#86868b]">iOS · Android · Flutter</p>
              </div>
            </Link>
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
