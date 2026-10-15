import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function AboutSection() {
  const { aboutSection } = siteData

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <ScrollReveal animation="fade-right" duration={800}>
          <div className="relative mx-auto max-w-md">
            <div className="aspect-square overflow-hidden rounded-2xl border border-[#071d35]/10 bg-white p-6 shadow-[0_24px_60px_rgba(7,29,53,0.1)] transition duration-500 hover:scale-[1.02]">
              <img
                className="h-full w-full object-contain"
                src="/maplecodix-logo.jpg"
                alt="MapleCodix company logo"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl bg-[#164f86] p-5 text-white shadow-xl">
              <p className="text-3xl font-extrabold">
                {aboutSection.badge.title}
              </p>
              <p className="mt-1 text-sm font-medium text-white/75">
                {aboutSection.badge.subtitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal animation="fade-left" duration={750}>
            <p className="eyebrow text-[#c91f26]">{aboutSection.eyebrow}</p>
            <h2 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] md:text-7xl">
              Big thinking.
              <br />
              Practical delivery.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#526273]">
              {aboutSection.description}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
            {aboutSection.pillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                animation="fade-up"
                delay={idx * 110}
                duration={650}
              >
                <div className="rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-extrabold tracking-[0.15em] text-[#c91f26]">
                    {pillar.number}
                  </p>
                  <p className="mt-2 font-bold leading-snug text-[#071d35]">
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
