import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = siteData.processSection
  .steps as ProcessStep[]

export interface ProcessSectionProps {
  steps?: ProcessStep[]
}

export function ProcessSection({ steps = processSteps }: ProcessSectionProps) {
  const { processSection } = siteData

  return (
    <section id="approach" className="bg-[#fbfbfd] py-24 text-[#1d1d1f] border-t border-black/[0.04] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal animation="fade-up" duration={700}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                {processSection.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
                Simple process.
                <br />
                Serious craft.
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={150} duration={700}>
            <p className="max-w-sm text-base leading-relaxed text-[#6e6e73] md:text-lg">
              {processSection.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Apple-Style Process Cards Grid with Highlighted Accent Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const isDark = index === 1
            const isTinted = index === 3

            return (
              <ScrollReveal
                key={item.title}
                animation="fade-up"
                delay={index * 100}
                duration={700}
              >
                <article
                  className={`group flex h-full flex-col justify-between rounded-[2rem] p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 ${
                    isDark
                      ? "border border-white/[0.08] bg-[#1d1d1f] text-white shadow-[0_8px_32px_rgba(0,0,0,0.16)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                      : isTinted
                        ? "border border-[#c91f26]/20 bg-[#fff5f6] text-[#1d1d1f] shadow-[0_4px_24px_rgba(201,31,38,0.06)] hover:border-[#c91f26]/35 hover:shadow-[0_24px_60px_rgba(201,31,38,0.12)]"
                        : "border border-black/[0.05] bg-white text-[#1d1d1f] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isDark ? "text-[#ff4d4f]" : "text-[#c91f26]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <div className="flex items-center gap-2">
                        {isDark && (
                          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/90">
                            Core Phase
                          </span>
                        )}
                        {isTinted && (
                          <span className="rounded-full bg-[#c91f26]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c91f26]">
                            Continuous
                          </span>
                        )}
                        <span
                          className={`size-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                            isDark ? "bg-[#ff4d4f]" : "bg-[#c91f26]"
                          }`}
                        />
                      </div>
                    </div>

                    <h3
                      className={`mt-14 text-2xl font-bold tracking-tight transition-colors ${
                        isDark
                          ? "text-white group-hover:text-[#ff4d4f]"
                          : "text-[#1d1d1f] group-hover:text-[#c91f26]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
