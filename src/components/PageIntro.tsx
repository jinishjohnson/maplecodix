import { ScrollReveal } from "./ScrollReveal"

export interface PageIntroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071d35] pb-24 pt-40 text-white md:pb-32 md:pt-48">
      <div className="hero-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-32 top-16 size-[32rem] rounded-full bg-[#164f86]/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <ScrollReveal animation="fade-down" delay={60}>
          <p className="eyebrow text-[#e24a50]">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={140}>
          <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-7xl">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={220}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PageIntro
