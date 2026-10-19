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

interface LogoCardTheme {
  cardClass: string
  topLineClass: string
  numberClass: string
  badgeText?: string
  badgeClass?: string
  dotClass: string
  titleClass: string
  descClass: string
}

// Color palette derived directly from MapleCodix logo:
// 1. Tech Circuit Sapphire Blue (#0066cc)
// 2. Signature Maple Crown Crimson Red (#c91f26)
// 3. Maple Leaf Wings Midnight Navy Blue (#071d35)
// 4. Center Diamond Faceted Silver Titanium (#475569)
const LOGO_CARD_THEMES: LogoCardTheme[] = [
  {
    // 01 Discover - Tech Circuit Sapphire Blue
    cardClass:
      "border border-blue-200/90 bg-gradient-to-b from-[#f0f7ff] to-[#ddecfe] text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,102,204,0.07)] hover:border-[#0066cc] hover:shadow-[0_20px_45px_rgba(0,102,204,0.18)]",
    topLineClass: "bg-gradient-to-r from-[#0066cc] to-[#38bdf8]",
    numberClass: "text-[#0066cc]",
    badgeText: "Phase 01",
    badgeClass: "bg-[#0066cc]/10 text-[#0066cc] border border-[#0066cc]/20",
    dotClass: "bg-[#0066cc]",
    titleClass: "text-[#1d1d1f] group-hover:text-[#0066cc]",
    descClass: "text-[#4b5563]",
  },
  {
    // 02 Design - Signature Maple Leaf Crown Crimson Red
    cardClass:
      "border border-rose-200/90 bg-gradient-to-b from-[#fff1f2] to-[#ffdce0] text-[#1d1d1f] shadow-[0_8px_30px_rgba(201,31,38,0.07)] hover:border-[#c91f26] hover:shadow-[0_20px_45px_rgba(201,31,38,0.18)]",
    topLineClass: "bg-gradient-to-r from-[#c91f26] to-[#f43f5e]",
    numberClass: "text-[#c91f26]",
    badgeText: "Core Phase",
    badgeClass: "bg-[#c91f26]/10 text-[#c91f26] border border-[#c91f26]/20",
    dotClass: "bg-[#c91f26]",
    titleClass: "text-[#1d1d1f] group-hover:text-[#c91f26]",
    descClass: "text-[#4b5563]",
  },
  {
    // 03 Build - Maple Leaf Wings Midnight Navy Blue
    cardClass:
      "border border-sky-300/80 bg-gradient-to-b from-[#edf3fa] to-[#d4e2f2] text-[#1d1d1f] shadow-[0_8px_30px_rgba(7,29,53,0.08)] hover:border-[#071d35] hover:shadow-[0_20px_45px_rgba(7,29,53,0.2)]",
    topLineClass: "bg-gradient-to-r from-[#071d35] via-[#0f3460] to-[#1e40af]",
    numberClass: "text-[#071d35]",
    badgeText: "Phase 03",
    badgeClass: "bg-[#071d35]/10 text-[#071d35] border border-[#071d35]/25",
    dotClass: "bg-[#071d35]",
    titleClass: "text-[#1d1d1f] group-hover:text-[#071d35]",
    descClass: "text-[#334155]",
  },
  {
    // 04 Grow - Center Diamond Faceted Silver Titanium
    cardClass:
      "border border-slate-300/90 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] text-[#1d1d1f] shadow-[0_8px_30px_rgba(100,116,139,0.07)] hover:border-[#475569] hover:shadow-[0_20px_45px_rgba(100,116,139,0.18)]",
    topLineClass: "bg-gradient-to-r from-[#64748b] to-[#94a3b8]",
    numberClass: "text-[#475569]",
    badgeText: "Continuous",
    badgeClass: "bg-slate-500/10 text-[#475569] border border-slate-500/20",
    dotClass: "bg-[#475569]",
    titleClass: "text-[#1d1d1f] group-hover:text-[#1e293b]",
    descClass: "text-[#475569]",
  },
]

export function ProcessSection({ steps = processSteps }: ProcessSectionProps) {
  const { processSection } = siteData

  return (
    <section id="approach" className="relative bg-[#ffffff] py-24 text-[#1d1d1f] border-b border-slate-200/90 md:py-32">
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

        {/* Process Cards Grid - Distinct Colors from the MapleCodix Logo */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const theme = LOGO_CARD_THEMES[index % LOGO_CARD_THEMES.length]

            return (
              <ScrollReveal
                key={item.title}
                animation="fade-up"
                delay={index * 100}
                duration={700}
              >
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 ${theme.cardClass}`}
                >
                  {/* Subtle top rim light in brand logo accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[2.5px] ${theme.topLineClass}`}
                  />

                  <div>
                    {/* Header: SF Mono Index & Status Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold tracking-widest ${theme.numberClass}`}>
                        {item.number}
                      </span>
                      <div className="flex items-center gap-2">
                        {theme.badgeText && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${theme.badgeClass}`}
                          >
                            {theme.badgeText}
                          </span>
                        )}
                        <span
                          className={`size-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${theme.dotClass}`}
                        />
                      </div>
                    </div>

                    {/* Headline Title */}
                    <h3
                      className={`mt-14 text-2xl font-bold tracking-tight transition-colors duration-300 ${theme.titleClass}`}
                    >
                      {item.title}
                    </h3>

                    {/* Secondary Description */}
                    <p className={`mt-3 text-sm leading-relaxed ${theme.descClass}`}>
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
