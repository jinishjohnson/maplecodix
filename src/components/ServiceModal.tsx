import { useEffect, useRef } from "react"
import { Link } from "react-router"
import { Icon, type IconName } from "./Icon"
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

export interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceNumber?: string
  serviceTitle?: string
  onOpenCustomQuote?: (category: string) => void
}

export function ServiceModal({
  isOpen,
  onClose,
  serviceNumber,
  serviceTitle,
  onOpenCustomQuote,
}: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  const detailedServices = siteData.servicesPage
    .detailedServices as ServiceDetailItem[]

  // Find matching detailed service by number or title
  const service =
    detailedServices.find(
      (s) =>
        s.number === serviceNumber ||
        s.title.toLowerCase() === serviceTitle?.toLowerCase() ||
        serviceTitle?.toLowerCase().includes(s.title.toLowerCase()),
    ) || detailedServices[0]

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !service) return null

  // WhatsApp quick link for this specific service
  const cleanPhone = (siteData.site.whatsapp?.phoneNumber || "+15063124135").replace(
    /[^0-9]/g,
    "",
  )
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hi MapleCodix, I would like to inquire about your ${service.title} (${service.number}) service.`,
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Window Modal Card */}
      <div
        ref={modalRef}
        className="relative my-6 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-[#071d35] text-white shadow-2xl ring-1 ring-black/20 transition-all animate-jelly"
      >
        {/* Window Chrome Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0d2a47] px-4 py-3 sm:px-6">
          {/* OS Dots */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="size-3 rounded-full bg-[#ff5f56] transition hover:opacity-80"
              aria-label="Close window"
            />
            <span className="size-3 rounded-full bg-[#ffbd2e]" />
            <span className="size-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 hidden text-xs font-mono font-semibold text-white/50 sm:inline">
              maplecodix://services/{service.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-white/70">
              #{service.number}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="grid size-7 place-items-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Close popup window"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Window Content */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8">
          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#c91f26] to-[#a9161b] text-white shadow-lg ring-4 ring-[#c91f26]/20">
                <Icon name={service.icon as IconName} className="size-7" />
              </span>
              <div>
                <span className="inline-block rounded-md bg-[#e24a50]/15 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#e24a50]">
                  {service.category.toUpperCase()} DISCIPLINE
                </span>
                <h2
                  id="service-modal-title"
                  className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                >
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#155b96]/40 px-3.5 py-1 text-xs font-bold text-[#60a5fa] ring-1 ring-[#155b96]">
                {service.outcome}
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/70">
                ⏱️ {service.timeline}
              </span>
            </div>
          </div>

          {/* Tagline & Description */}
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#60a5fa]">
            {service.tagline}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
            {service.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="mt-7 rounded-xl border border-white/10 bg-[#0d2a47]/60 p-5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Included Deliverables & Engineering Scope:
            </h3>
            <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
              {service.deliverables.map((del) => (
                <li
                  key={del}
                  className="flex items-start gap-2.5 text-xs font-medium text-white/85"
                >
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#c91f26] text-[9px] font-bold text-white">
                    ✓
                  </span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mt-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white/60">
              Tech Stack & Tooling:
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/90 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4-Phase Delivery Lifecycle */}
          <div className="mt-7">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white/60">
              Milestone Execution Workflow:
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-4">
              {service.processPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-xl border border-white/10 bg-[#0d2a47]/40 p-3.5 transition hover:border-[#c91f26]/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-[#e24a50]">
                      Phase {phase.phase}
                    </span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-white">
                    {phase.name}
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/60">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Window Footer Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#1ebd59]"
              >
                <span>WhatsApp Scoping</span>
                <Icon name="arrow" className="size-3.5" />
              </a>

              <Link
                to="/services"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <span>Full Services Page</span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose()
                if (onOpenCustomQuote) {
                  onOpenCustomQuote(service.category === "mobile" ? "mobile" : "webapp")
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c91f26] px-6 py-3 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#a9161b] hover:shadow-xl"
            >
              <span>Get Custom Quote for {service.title}</span>
              <Icon name="arrow" className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
