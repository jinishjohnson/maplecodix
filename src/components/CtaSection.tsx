import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function CtaSection() {
  const { ctaSection } = siteData

  return (
    <section className="mx-5 my-16 overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] py-20 text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] sm:mx-8 md:py-28 lg:mx-10">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
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
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1d1d1f] shadow-lg transition-all duration-300 hover:bg-[#f5f5f7] hover:scale-[1.02] active:scale-[0.99]"
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
