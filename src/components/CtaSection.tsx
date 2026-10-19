import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function CtaSection() {
  const { ctaSection } = siteData

  return (
    <section className="relative mx-5 my-20 overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-[#0c131f] via-[#111827] to-[#0a0e17] py-20 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:mx-8 md:py-28 lg:mx-10">
      {/* Ambient glows inside keynote CTA */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#c91f26]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-[#0066cc]/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <ScrollReveal animation="zoom-in" duration={750}>
          <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white/10 text-white transition-transform duration-300 hover:scale-110">
            <Icon name="spark" className="size-6" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4f]">
            {ctaSection.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            {ctaSection.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#86868b] md:text-lg">
            {ctaSection.description}
          </p>
          <a
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0f172a] shadow-lg transition-all duration-300 hover:bg-[#c91f26] hover:text-white hover:scale-[1.02] active:scale-[0.99]"
            href={ctaSection.buttonHref}
          >
            <span>{ctaSection.buttonText}</span>
            <Icon
              name="arrow"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CtaSection
