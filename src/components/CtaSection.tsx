import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function CtaSection() {
  const { ctaSection } = siteData

  return (
    <section className="bg-[#c91f26] py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <ScrollReveal animation="zoom-in" duration={750}>
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-white/15 transition-transform duration-300 hover:scale-110">
            <Icon name="spark" className="size-7" />
          </span>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            {ctaSection.eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] md:text-8xl">
            {ctaSection.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/80">
            {ctaSection.description}
          </p>
          <a
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#071d35] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#071d35]"
            href={ctaSection.buttonHref}
          >
            {ctaSection.buttonText}{" "}
            <Icon
              name="arrow"
              className="size-5 transition-transform group-hover:translate-x-1"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CtaSection
