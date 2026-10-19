import { useState } from "react"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"
import logoSrc from "../assets/maplecodix-logo.jpg"

export function AboutSection() {
  const { aboutSection } = siteData
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="relative bg-[#e9edf5] py-24 text-[#1d1d1f] border-b border-slate-200/90 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <ScrollReveal animation="fade-right" duration={800}>
          <div className="relative mx-auto max-w-md">
            {/* Pure White Apple Emblem Frame */}
            <div className="aspect-square overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12)] transition-all duration-500 flex items-center justify-center">
              {!imgError ? (
                <img
                  className="h-full w-full object-contain"
                  src={logoSrc}
                  alt="MapleCodix emblem"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <svg
                    className="size-32 drop-shadow-md"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 5L24 13L28 9L27 17L33 16L29 23L35 25L28 30L20 37L12 30L5 25L11 23L7 16L13 17L12 9L16 13L20 5Z"
                      fill="#071d35"
                    />
                    <path
                      d="M20 5L24 13L28 9L25 15L20 12L15 15L12 9L16 13L20 5Z"
                      fill="#c91f26"
                    />
                    <path
                      d="M16 17V27H19V22H21V27H24V17H21V20H19V17H16Z"
                      fill="white"
                    />
                  </svg>
                  <span className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[#071d35]">
                    Maple<span className="text-[#c91f26]">Codix</span>
                  </span>
                </div>
              )}
            </div>
            
            {/* Apple Space Black Badge */}
            <div className="absolute -bottom-3 -right-3 rounded-2xl border border-slate-800 bg-[#0f172a] p-5 text-white shadow-xl">
              <p className="text-3xl font-bold tracking-tight text-white">
                {aboutSection.badge.title}
              </p>
              <p className="mt-1 text-xs font-medium text-[#86868b]">
                {aboutSection.badge.subtitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal animation="fade-left" duration={750}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
              {aboutSection.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
              Big thinking.
              <br />
              Practical delivery.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6e6e73] md:text-lg">
              {aboutSection.description}
            </p>
          </ScrollReveal>

          {/* Apple Pillar Cards */}
          <div className="mt-10 grid gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-3">
            {aboutSection.pillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                animation="fade-up"
                delay={idx * 110}
                duration={650}
              >
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                  <p className="font-mono text-xs font-bold tracking-wider text-[#c91f26]">
                    {pillar.number}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-[#1d1d1f]">
                    {pillar.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
