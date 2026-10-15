import { useState } from "react"
import { Link } from "react-router"
import { Icon, type IconName } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import { ServiceIllustration } from "../components/ServiceIllustration"
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

  const filteredServices: ServiceDetailItem[] =
    activeFilter === "all"
      ? servicesPage.detailedServices as ServiceDetailItem[]
      : (servicesPage.detailedServices as ServiceDetailItem[]).filter(
          (s) => s.category === activeFilter,
        )

  const activeInspectorService: ServiceDetailItem =
    (servicesPage.detailedServices as ServiceDetailItem[]).find(
      (s) => s.id === selectedServiceId,
    ) || servicesPage.detailedServices[0] as ServiceDetailItem

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
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
          SECTION 1: DISCIPLINE FILTER TABS 
        */}
        <section
          id="capabilities-overview"
          aria-label="Capabilities overview and filter"
          className="border-b border-black/8 bg-white py-8"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 md:px-8 lg:px-10">
            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter capabilities by discipline"
              className="flex flex-wrap items-center gap-2"
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
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 md:text-sm ${
                      isActive
                        ? "bg-[#071d35] text-white shadow-sm ring-1 ring-[#071d35]"
                        : "border border-black/8 bg-[#f7f9fb] text-[#526273] hover:border-black/20 hover:bg-white hover:text-[#071d35]"
                    }`}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>

            {/* Results counter pill */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#526273]">
              <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
              <span>
                Showing <strong>{filteredServices.length}</strong> specialized{" "}
                {filteredServices.length === 1 ? "service" : "services"}
              </span>
            </div>
          </div>
        </section>

        {/* 
          SECTION 2: DETAILED ILLUSTRATED SERVICES DECK 
          Card deck with custom vector illustrations, deliverables flexbox, and tech badges
        */}
        <section
          id="detailed-capabilities"
          aria-label="Detailed service specifications"
          className="py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="mb-12">
              <ScrollReveal animation="fade-up">
                <p className="eyebrow text-[#c91f26]">Specialized Offerings</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                  Built with care. Designed to scale.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-[#526273] md:text-lg">
                  Every capability includes full-lifecycle delivery—from UX
                  wireframing to performance engineering and post-launch
                  analytics.
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
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#164f86]/30 hover:shadow-xl"
                  >
                    {/* Header Bar with Category Badge & Number */}
                    <div className="flex items-center justify-between border-b border-black/5 bg-[#fafcfd] px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-lg bg-[#fbeaec] text-[#c91f26]">
                          <Icon
                            name={service.icon as IconName}
                            className="size-5"
                          />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#526273]">
                          {service.category.toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-extrabold text-black/30">
                        {service.number}
                      </span>
                    </div>

                    {/* Vector Illustration Canvas */}
                    <div className="border-b border-black/5 bg-gradient-to-b from-[#f8fafc] to-[#edf3f7] p-4">
                      <ServiceIllustration
                        id={service.id}
                        className="h-44 w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Content Body */}
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <h3 className="text-2xl font-extrabold tracking-tight text-[#071d35] group-hover:text-[#c91f26] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#164f86]">
                        {service.tagline}
                      </p>
                      <p className="mt-4 leading-relaxed text-[#526273]">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist (Flexbox items) */}
                      <div className="mt-6 border-t border-black/8 pt-5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#071d35]">
                          Key Inclusions &amp; Scope:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {service.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-start gap-2.5 text-xs font-medium text-[#263f57]"
                            >
                              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#fbeaec] text-[9px] font-bold text-[#c91f26]">
                                ✓
                              </span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills (Flexbox Wrap) */}
                      <div className="mt-6 border-t border-black/8 pt-5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#526273]">
                          Technologies:
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-black/5 bg-[#f4f7fa] px-2.5 py-1 text-[11px] font-bold text-[#071d35]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Metrics & Interactive Action */}
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-black/8 pt-6">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#e8f1f8] px-3 py-1 text-xs font-extrabold text-[#155b96]">
                            {service.outcome}
                          </span>
                          <span className="text-xs font-medium text-[#526273]">
                            ⏱️ {service.timeline}
                          </span>
                        </div>
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
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#c91f26] transition-colors hover:text-[#071d35]"
                        >
                          <span>Explore Workflow</span>
                          <Icon name="arrow" className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 
          SECTION 3: INTERACTIVE ARCHITECTURAL INSPECTOR (TABS + WORKBENCH)
          Allows clicking any service to view its 4-phase delivery pipeline and scope
        */}
        <section
          id="architecture-inspector"
          aria-label="Interactive architecture and delivery inspector"
          className="border-y border-black/8 bg-[#071d35] py-20 text-white md:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#e24a50]">Interactive Studio</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                  Delivery Architecture &amp; Lifecycle
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/60 md:text-base">
                Click any discipline below to inspect our phased engineering
                approach, verification milestones, and tangible handoffs.
              </p>
            </div>

            {/* Split Workbench: Service Tabs (Left) & Live Architecture Deck (Right) */}
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
              {/* Left Column: Interactive Service Selector Tabs */}
              <div
                role="tablist"
                aria-label="Select discipline to inspect"
                className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
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
                        className={`group flex shrink-0 items-center justify-between rounded-xl border p-4 text-left transition-all duration-300 md:p-5 ${
                          isSelected
                            ? "border-[#c91f26] bg-white/10 text-white shadow-md ring-1 ring-[#c91f26]"
                            : "border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`grid size-8 place-items-center rounded-lg transition-colors ${
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
                            <p className="text-sm font-bold">{service.title}</p>
                            <p className="text-xs text-white/40">
                              {service.timeline}
                            </p>
                          </div>
                        </div>
                        <span className="hidden font-mono text-xs font-bold text-white/30 lg:inline">
                          {service.number}
                        </span>
                      </button>
                    )
                  },
                )}
              </div>

              {/* Right Column: Live Technical Blueprint */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c91f26]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e24a50]">
                      Active Blueprint · {activeInspectorService.number}
                    </span>
                    <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                      {activeInspectorService.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {activeInspectorService.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Targeted Impact
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-[#10b981]">
                      {activeInspectorService.outcome}
                    </p>
                  </div>
                </div>

                {/* 4-Phase Delivery Timeline (Flexbox Grid) */}
                <div className="mt-8">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#e24a50]">
                    4-Phase Execution Pipeline:
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {activeInspectorService.processPhases.map((phase) => (
                      <div
                        key={phase.phase}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10"
                      >
                        <span className="text-xs font-mono font-bold text-[#c91f26]">
                          Phase {phase.phase}
                        </span>
                        <h4 className="mt-1 text-base font-bold text-white">
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
                    <p className="text-xs font-extrabold uppercase tracking-widest text-white/50">
                      Tangible Deliverables
                    </p>
                    <ul className="mt-3 space-y-2">
                      {activeInspectorService.deliverables.map((del) => (
                        <li
                          key={del}
                          className="flex items-start gap-2.5 text-xs text-white/80"
                        >
                          <span className="text-[#e24a50]">✦</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-white/50">
                      Stack &amp; Frameworks
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeInspectorService.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-white/70">
                        Need tailored architecture or specific compliance needs?
                      </p>
                      <a
                        href={`mailto:hello@maplecodix.com?subject=${encodeURIComponent(`${activeInspectorService.title} Custom Architecture Enquiry`)}`}
                        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#c91f26] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#a9161b]"
                      >
                        <span>Start this project</span>
                        <Icon name="arrow" className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          SECTION 4: INTERACTIVE ACCORDION (FAQS & TECHNICAL SCOPE)
        */}
        <section
          id="service-faqs"
          aria-label="Frequently asked questions about services"
          className="bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="text-center">
              <ScrollReveal animation="fade-up">
                <p className="eyebrow text-[#c91f26]">
                  Clarity &amp; Assurance
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-base text-[#526273] md:text-lg">
                  Everything you need to know about our engineering standards,
                  ownership, and post-launch guarantees.
                </p>
              </ScrollReveal>
            </div>

            {/* Accordion Panels */}
            <div className="mt-12 divide-y divide-black/8 rounded-2xl border border-black/8 bg-[#fdfefe]">
              {servicesPage.faqAccordion.map((faq) => {
                const isOpen = openFaqId === faq.id
                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-black/[0.015]"
                    >
                      <span className="text-base font-extrabold text-[#071d35] md:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-[#c91f26] bg-[#c91f26] text-white"
                            : "border-black/10 bg-white text-[#526273]"
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
                        className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#526273] md:text-base animate-fadeIn"
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
          SECTION 5: TECHNOLOGY STACK (FLEXBOX CLOUD)
        */}
        <section
          id="tech-stack-cloud"
          aria-label="Technology and engineering ecosystem"
          className="border-t border-black/8 bg-[#edf3f7] py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="text-center">
              <ScrollReveal animation="fade-up">
                <p className="eyebrow text-[#155b96]">Tech &amp; Tooling</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                  Built on modern, proven foundations.
                </h2>
                <p className="mt-2 text-sm text-[#526273] md:text-base">
                  Zero vendor lock-in. 100% full code ownership transferred upon
                  launch.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicesPage.techStack.map((cluster, idx) => (
                <ScrollReveal
                  key={cluster.category}
                  animation="fade-up"
                  delay={idx * 80}
                  duration={650}
                >
                  <div className="h-full rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#c91f26]">
                      0{idx + 1} / {cluster.category}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-black/5 bg-[#f7f9fb] px-3 py-1.5 text-xs font-bold text-[#071d35]"
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
          SECTION 6: READY TO BUILD CTA 
        */}
        <section
          id="services-cta"
          aria-label="Start a project CTA"
          className="bg-[#c91f26] py-16 text-white md:py-24"
        >
          <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
            <ScrollReveal animation="zoom-in" duration={700}>
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-white/15">
                <Icon name="spark" className="size-6" />
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.05em] md:text-6xl">
                Ready to transform your digital presence?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
                Let&apos;s evaluate your goals and map the right architecture,
                timeline, and package for your brand.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071d35] px-8 py-4 font-bold text-white shadow-xl transition hover:bg-white hover:text-[#071d35]"
                  href="mailto:hello@maplecodix.com?subject=Project%20Discovery%20Conversation"
                >
                  <span>Start a discovery conversation</span>
                  <Icon name="arrow" className="size-4" />
                </a>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#c91f26]"
                  to="/packages"
                >
                  <span>Explore transparent packages</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageShell>
    </>
  )
}

export const ServicesPage = Services
export default Services
