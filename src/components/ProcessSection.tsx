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
    <section id="approach" className="bg-[#edf3f7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal animation="fade-up" duration={700}>
            <div>
              <p className="eyebrow text-[#c91f26]">{processSection.eyebrow}</p>
              <h2 className="mt-5 text-5xl font-extrabold tracking-[-0.055em] md:text-7xl">
                Simple process.
                <br />
                Serious craft.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150} duration={700}>
            <p className="max-w-sm text-lg leading-relaxed text-[#526273]">
              {processSection.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="fade-up"
              delay={index * 110}
              duration={700}
            >
              <article
                className={`h-full rounded-xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-8 ${
                  index === 1
                    ? "border-[#164f86] bg-[#164f86] text-white shadow-md"
                    : index === 3
                      ? "border-[#c8dbe8] bg-[#dceaf4]"
                      : "border-black/5 bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-extrabold ${
                      index === 1 ? "text-white/60" : "text-[#c91f26]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`size-2 rounded-full ${
                      index === 1 ? "bg-[#dceaf4]" : "bg-[#c91f26]"
                    }`}
                  />
                </div>
                <h3 className="mt-16 text-3xl font-extrabold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed ${
                    index === 1 ? "text-white/70" : "text-[#526273]"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
