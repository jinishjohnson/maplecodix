import { Link } from "react-router"
import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function HeroSection() {
  const { hero } = siteData

  return (
    <section className="relative min-h-[820px] overflow-hidden pb-24 pt-36 lg:min-h-[760px] lg:pb-24 lg:pt-40">
      <div className="hero-grid absolute inset-0 opacity-55" />
      <div className="absolute -right-28 top-20 size-[34rem] rounded-full bg-[#cfe1f0]/35 blur-3xl" />
      <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-[#dbe9f2]/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <div>
          <ScrollReveal animation="fade-down" delay={60} duration={600}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
              <span className="grid size-6 place-items-center rounded-full bg-[#fbeaec] text-[#c91f26]">
                <Icon name="spark" className="size-4" />
              </span>
              {hero.badge}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={140} duration={700}>
            <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.5rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#071d35]">
              {hero.titlePrefix}
              <span className="text-[#c91f26]">{hero.titleHighlight}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={240} duration={700}>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#526273] md:text-xl">
              {hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={340} duration={700}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#c91f26] px-7 py-4 font-bold text-white shadow-[0_12px_24px_rgba(201,31,38,0.18)] transition hover:bg-[#a9161b] hover:shadow-[0_16px_30px_rgba(201,31,38,0.28)]"
                href={hero.primaryCta.href}
              >
                {hero.primaryCta.text}{" "}
                <Icon
                  name="arrow"
                  className="size-5 transition-transform group-hover:translate-x-1"
                />
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-[#071d35]/15 bg-white/70 px-7 py-4 font-bold backdrop-blur transition hover:border-[#071d35]/30 hover:bg-white hover:shadow-sm"
                to={hero.secondaryCta.to}
              >
                {hero.secondaryCta.text}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-left" delay={180} duration={850}>
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0d2a47] shadow-[0_28px_70px_rgba(7,29,53,0.2)]">
              <img
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                src={hero.showcase.image}
                alt={hero.showcase.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c91f26]">
                  {hero.showcase.tag}
                </p>
                <p className="mt-2 text-xl font-extrabold tracking-tight">
                  {hero.showcase.title}
                </p>
              </div>
            </div>

            {/* Micro-animated floating accents */}
            <div className="animate-float-slow absolute -left-7 top-16 hidden rounded-xl border border-[#071d35]/10 bg-white px-5 py-4 shadow-xl sm:block">
              <p className="text-2xl font-extrabold text-[#071d35]">
                {hero.showcase.statNumber}
              </p>
              <p className="text-sm font-semibold text-[#526273]">
                {hero.showcase.statLabel}
              </p>
            </div>
            <div className="animate-float-delayed absolute -right-5 top-36 grid size-16 place-items-center rounded-xl border-4 border-white bg-[#164f86] text-white shadow-xl sm:grid">
              <Icon name="code" className="size-8" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HeroSection
