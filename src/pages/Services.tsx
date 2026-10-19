import { useState } from "react"
import { Link } from "react-router"
import { Icon, type IconName } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import { ServiceIllustration } from "../components/ServiceIllustration"
import { CustomQuoteModal } from "../components/CustomQuoteModal"
import siteData from "../data/data.json"

export interface ServiceDetailItem {
  id: string
  category: string
  number: string
  title: string
  tagline: string
  description: string
  icon: string
  timeline: string
  outcome: string
  deliverables: string[]
  technologies: string[]
  processPhases: {
    phase: string
    name: string
    desc: string
  }[]
}

export function Services() {
  const seo = siteData.seo.services
  const { servicesPage } = siteData

  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    "website-development",
  )
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1")
  const [isCustomQuoteOpen, setIsCustomQuoteOpen] = useState(false)
  const [quoteCategory, setQuoteCategory] = useState("webapp")

  const filteredServices: ServiceDetailItem[] =
    activeFilter === "all"
      ? (servicesPage.detailedServices as ServiceDetailItem[])
      : (servicesPage.detailedServices as ServiceDetailItem[]).filter(
          (s) => s.category === activeFilter,
        )

  const activeInspectorService: ServiceDetailItem =
    (servicesPage.detailedServices as ServiceDetailItem[]).find(
      (s) => s.id === selectedServiceId,
    ) || (servicesPage.detailedServices[0] as ServiceDetailItem)

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  const handleOpenQuoteForService = (category: string) => {
    if (category === "mobile") {
      setQuoteCategory("mobile")
    } else {
      setQuoteCategory("webapp")
    }
    setIsCustomQuoteOpen(true)
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <PageShell intro={siteData.pageIntros.services}>
        {/* 
          SECTION 1: APPLE-STYLE STICKY SEGMENTED FILTER BAR 
        */}
        <section
          id="capabilities-overview"
          aria-label="Capabilities overview and filter"
          className="sticky top-20 z-30 border-b border-slate-200/90 bg-white/95 py-4 backdrop-blur-xl shadow-xs"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Filter capabilities by discipline"
              className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar py-0.5"
            >
              {servicesPage.filterCategories.map((category) => {
                const isActive = activeFilter === category.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(category.id)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:text-sm whitespace-nowrap ${
                      isActive
                        ? "bg-[#0f172a] text-white shadow-sm ring-1 ring-[#0f172a]"
                        : "bg-[#f1f5f9] text-[#475569] border border-slate-200/60 hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                    }`}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>

            {/* Results counter pill */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#86868b]">
              <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
              <span>
                Showing <strong className="text-[#1d1d1f]">{filteredServices.length}</strong> specialized{" "}
                {filteredServices.length === 1 ? "discipline" : "disciplines"}
              </span>
            </div>
          </div>
        </section>

        {/* 
          SECTION 2: APPLE-STANDARD ILLUSTRATED SERVICES DECK 
          Crisp white cards on off-white canvas with soft ambient shadow
        */}
        <section
          id="detailed-capabilities"
          aria-label="Detailed service specifications"
          className="relative bg-[#e9edf5] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="mb-14">
              <ScrollReveal animation="fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                  Specialized Offerings
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
                  Built with care. Designed to scale.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6e6e73] md:text-lg">
                  Every capability includes full-lifecycle delivery—from UX wireframing to performance engineering, sub-200ms APIs, and post-launch analytics.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {filteredServices.map((service, index) => (
                <ScrollReveal
                  key={service.id}
                  animation="fade-up"
                  delay={index * 60}
                  duration={650}
                >
                  <article
                    id={`service-${service.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12)]"
                  >
                    {/* Header Bar with Category Badge & Number */}
                    <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8fafc] px-7 py-4.5">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-2xl bg-[#f1f5f9] text-[#1d1d1f] shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#c91f26] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(201,31,38,0.25)]">
                          <Icon
                            name={service.icon as IconName}
                            className="size-5"
                          />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                          {service.category.toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#86868b]">
                        {service.number}
                      </span>
                    </div>

                    {/* Vector Illustration Canvas */}
                    <div className="border-b border-black/[0.04] bg-gradient-to-b from-[#fbfbfd] to-[#f5f5f7] p-5">
                      <ServiceIllustration
                        id={service.id}
                        className="h-44 w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Content Body */}
                    <div className="flex flex-1 flex-col p-7 md:p-9">
                      <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] transition-colors group-hover:text-[#c91f26] md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#0066cc]">
                        {service.tagline}
                      </p>
                      <p className="mt-4 leading-relaxed text-[#6e6e73]">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist (Apple Style) */}
                      <div className="mt-6 border-t border-black/[0.06] pt-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                          Key Inclusions &amp; Scope:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {service.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-start gap-2.5 text-xs font-medium text-[#1d1d1f]"
                            >
                              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#f5f5f7] text-[10px] font-bold text-[#c91f26]">
                                ✓
                              </span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills (Flexbox Wrap) */}
                      <div className="mt-6 border-t border-black/[0.06] pt-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                          Technologies:
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-black/[0.04] bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#1d1d1f]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Metrics & Interactive Actions */}
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-6">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#e8f2fc] px-3 py-1 text-xs font-semibold text-[#0066cc]">
                            {service.outcome}
                          </span>
                          <span className="text-xs font-medium text-[#86868b]">
                            ⏱️ {service.timeline}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedServiceId(service.id)
                              const el = document.getElementById(
                                "architecture-inspector",
                              )
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066cc] transition-colors hover:text-[#0077ed]"
                          >
                            <span>Inspect Workflow</span>
                            <Icon name="arrow" className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 
          SECTION 3: INTERACTIVE ARCHITECTURAL INSPECTOR (APPLE PRO STUDIO DECK)
          Dark Space-Black / Titanium workbench with tactile execution pipeline
        */}
        <section
          id="architecture-inspector"
          aria-label="Interactive architecture and delivery inspector"
          className="relative bg-[#0c131f] py-24 text-white border-b border-slate-800 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4f]">
                  Interactive Studio
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                  Delivery Architecture &amp; Lifecycle
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-[#86868b]">
                Click any discipline below to inspect our phased engineering approach, verification milestones, and tangible handoffs.
              </p>
            </div>

            {/* Split Workbench: Service Tabs (Left) & Live Architecture Deck (Right) */}
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_2fr]">
              {/* Left Column: Interactive Service Selector Tabs */}
              <div
                role="tablist"
                aria-label="Select discipline to inspect"
                className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 no-scrollbar"
              >
                {(servicesPage.detailedServices as ServiceDetailItem[]).map(
                  (service) => {
                    const isSelected = selectedServiceId === service.id
                    return (
                      <button
                        key={service.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`group flex shrink-0 items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 md:p-5 ${
                          isSelected
                            ? "border-white/20 bg-white/15 text-white shadow-lg ring-1 ring-white/25"
                            : "border-white/8 bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`grid size-9 place-items-center rounded-xl transition-colors ${
                              isSelected
                                ? "bg-[#c91f26] text-white"
                                : "bg-white/10 text-white/70 group-hover:text-white"
                            }`}
                          >
                            <Icon
                              name={service.icon as IconName}
                              className="size-4"
                            />
                          </span>
                          <div>
                            <p className="text-sm font-semibold">{service.title}</p>
                            <p className="text-xs text-white/40">
                              {service.timeline}
                            </p>
                          </div>
                        </div>
                        <span className="hidden font-mono text-xs font-semibold text-white/30 lg:inline">
                          {service.number}
                        </span>
                      </button>
                    )
                  },
                )}
              </div>

              {/* Right Column: Live Technical Blueprint */}
              <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-2xl shadow-2xl md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c91f26]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff4d4f]">
                      Active Blueprint · {activeInspectorService.number}
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      {activeInspectorService.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#86868b]">
                      {activeInspectorService.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Targeted Impact
                    </p>
                    <p className="mt-1 text-xl font-bold text-emerald-400">
                      {activeInspectorService.outcome}
                    </p>
                  </div>
                </div>

                {/* 4-Phase Delivery Timeline (Flexbox Grid) */}
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#ff4d4f]">
                    4-Phase Execution Pipeline:
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {activeInspectorService.processPhases.map((phase) => (
                      <div
                        key={phase.phase}
                        className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition duration-300 hover:bg-white/[0.08]"
                      >
                        <span className="text-xs font-mono font-bold text-[#ff4d4f]">
                          Phase {phase.phase}
                        </span>
                        <h4 className="mt-1 text-base font-semibold text-white">
                          {phase.name}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-white/60">
                          {phase.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Technology Badges */}
                <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Tangible Deliverables
                    </p>
                    <ul className="mt-3 space-y-2">
                      {activeInspectorService.deliverables.map((del) => (
                        <li
                          key={del}
                          className="flex items-start gap-2.5 text-xs text-white/80"
                        >
                          <span className="text-[#ff4d4f]">✦</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Stack &amp; Frameworks
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeInspectorService.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-white/[0.06] p-4 border border-white/8">
                      <p className="text-xs text-white/70">
                        Need tailored architecture or specific compliance needs?
                      </p>
                      <button
                        type="button"
                        onClick={() => handleOpenQuoteForService(activeInspectorService.category)}
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#1d1d1f] transition-all hover:bg-[#f5f5f7] hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Start this project scope</span>
                        <Icon name="arrow" className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          SECTION 4: APPLE-STYLE INDEPENDENT CARD ACCORDION (FAQS)
        */}
        <section
          id="service-faqs"
          aria-label="Frequently asked questions about services"
          className="relative bg-[#ffffff] py-24 border-b border-slate-200/90 md:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="text-center">
              <ScrollReveal animation="fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                  Clarity &amp; Assurance
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-base text-[#6e6e73] md:text-lg">
                  Everything you need to know about our engineering standards, ownership, and post-launch guarantees.
                </p>
              </ScrollReveal>
            </div>

            {/* Apple Card Accordion Panels */}
            <div className="mt-12 space-y-3.5">
              {servicesPage.faqAccordion.map((faq) => {
                const isOpen = openFaqId === faq.id
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f8fafc] shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:bg-white"
                  >
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-[#f5f5f7]/40 cursor-pointer"
                    >
                      <span className="text-base font-semibold text-[#1d1d1f] md:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-[#1d1d1f] bg-[#1d1d1f] text-white"
                            : "border-black/10 bg-[#f5f5f7] text-[#6e6e73]"
                        }`}
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#6e6e73] md:text-base border-t border-black/[0.04]"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 
          SECTION 5: TECHNOLOGY STACK (APPLE ECOSYSTEM CARDS)
        */}
        <section
          id="tech-stack-cloud"
          aria-label="Technology and engineering ecosystem"
          className="border-t border-slate-200/90 bg-[#e9edf5] py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="text-center">
              <ScrollReveal animation="fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                  Tech &amp; Tooling
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
                  Built on modern, proven foundations.
                </h2>
                <p className="mt-2 text-base text-[#6e6e73]">
                  Zero vendor lock-in. 100% full code ownership transferred upon launch.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicesPage.techStack.map((cluster, idx) => (
                <ScrollReveal
                  key={cluster.category}
                  animation="fade-up"
                  delay={idx * 80}
                  duration={650}
                >
                  <div className="h-full rounded-[2rem] border border-black/[0.05] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#c91f26]">
                      0{idx + 1} / {cluster.category}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-black/[0.04] bg-[#f5f5f7] px-3 py-1.5 text-xs font-medium text-[#1d1d1f]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 
          SECTION 6: APPLE KEYNOTE READY TO BUILD CTA 
        */}
        <section
          id="services-cta"
          aria-label="Start a project CTA"
          className="relative mx-5 my-20 overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-[#0c131f] via-[#111827] to-[#0a0e17] py-20 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:mx-8 md:py-28 lg:mx-10"
        >
          {/* Ambient glows inside CTA */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#c91f26]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-[#0066cc]/15 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <ScrollReveal animation="zoom-in" duration={700}>
              <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white/10 text-white">
                <Icon name="spark" className="size-6" />
              </span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                Ready to transform your digital presence?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#86868b] md:text-lg">
                Let&apos;s evaluate your goals and map the right architecture, timeline, and package for your brand.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsCustomQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1d1d1f] shadow-lg transition-all hover:bg-[#f5f5f7] hover:scale-[1.02] cursor-pointer"
                >
                  <span>Start your project scope</span>
                  <Icon name="arrow" className="size-4" />
                </button>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                  to="/packages"
                >
                  <span>Explore transparent packages</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageShell>

      {/* Custom Quote Routing Modal */}
      <CustomQuoteModal
        isOpen={isCustomQuoteOpen}
        onClose={() => setIsCustomQuoteOpen(false)}
        initialCategory={quoteCategory}
      />
    </>
  )
}

export const ServicesPage = Services
export default Services
