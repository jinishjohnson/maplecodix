import { ScrollReveal } from "./ScrollReveal"

export interface PageIntroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#eef2f7] pb-20 pt-36 text-[#1d1d1f] border-b border-slate-200/90 md:pb-28 md:pt-44">
      {/* Subtle Apple ambient radial lighting */}
      <div className="pointer-events-none absolute -right-32 top-10 size-[36rem] rounded-full bg-gradient-to-br from-[#c91f26]/8 via-[#0066cc]/6 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-gradient-to-tr from-[#0066cc]/5 via-[#c91f26]/5 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <ScrollReveal animation="fade-down" delay={60}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
            {eyebrow}
          </p>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={140}>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={220}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6e6e73] md:text-xl">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PageIntro
