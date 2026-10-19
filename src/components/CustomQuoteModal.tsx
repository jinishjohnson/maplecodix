import { useState, useEffect, useRef } from "react"
import { Icon } from "./Icon"
import siteData from "../data/data.json"
import { ENV } from "../config/env"
import { encryptStorage, decryptStorage } from "../utils/crypto"

export interface CustomQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialCategory?: "web" | "webapp" | "mobile" | "marketing" | string
}

const CATEGORY_OPTIONS = [
  { id: "webapp", label: "Web App / SaaS", icon: "globe" },
  { id: "mobile", label: "Mobile App (iOS/Android)", icon: "mobile" },
  { id: "web", label: "Bespoke Website", icon: "code" },
  { id: "marketing", label: "Growth Marketing", icon: "marketing" },
  { id: "other", label: "Custom Architecture", icon: "spark" },
] as const

const BUDGET_OPTIONS = [
  "Under $1,500",
  "$1,500 - $3,500",
  "$3,500 - $7,000",
  "$7,000+",
]

const TIMELINE_OPTIONS = [
  "Urgent (< 3 Weeks)",
  "Standard (1 - 2 Months)",
  "Flexible / Planning Phase",
]

const POPULAR_REQUIREMENTS = [
  "User Auth & Roles",
  "Stripe Subscriptions",
  "iOS & Android App",
  "AI / LLM Integration",
  "Admin Management Console",
  "REST / GraphQL API",
  "Real-time WebSockets",
  "Database Migration",
  "SOC-2 / Security Hardening",
]

export function CustomQuoteModal({
  isOpen,
  onClose,
  initialCategory = "webapp",
}: CustomQuoteModalProps) {
  const [category, setCategory] = useState(initialCategory)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [budget, setBudget] = useState("$1,500 - $3,500")
  const [timeline, setTimeline] = useState("Standard (1 - 2 Months)")
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([
    "User Auth & Roles",
    "Admin Management Console",
  ])
  const [projectOverview, setProjectOverview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState("")
  const [copiedRef, setCopiedRef] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)

  // Sync category when opened
  useEffect(() => {
    if (isOpen) {
      setCategory(initialCategory)
      setIsSubmitted(false)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, initialCategory])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const toggleRequirement = (req: string) => {
    setSelectedRequirements((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req],
    )
  }

  const generateTicket = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000)
    return `MCR-${randomCode}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !email.trim()) return

    setIsSubmitting(true)

    setTimeout(async () => {
      const ref = generateTicket()
      setReferenceId(ref)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Encrypt and store quote request in local encrypted vault
      try {
        const quoteRecord = {
          ref,
          timestamp: new Date().toISOString(),
          category,
          fullName,
          email,
          phone,
          company,
          budget,
          timeline,
          selectedRequirements,
          projectOverview,
        }
        const existing =
          (await decryptStorage<unknown[]>(
            "maplecodix_encrypted_quotes",
            [],
          )) || []
        const list = Array.isArray(existing) ? existing : []
        list.unshift(quoteRecord)
        await encryptStorage("maplecodix_encrypted_quotes", list)
      } catch {
        // ignore
      }
    }, 600)
  }

  const handleCopyRef = () => {
    navigator.clipboard.writeText(referenceId)
    setCopiedRef(true)
    setTimeout(() => setCopiedRef(false), 2000)
  }

  const buildWhatsAppMessage = () => {
    const activeLabel =
      CATEGORY_OPTIONS.find((c) => c.id === category)?.label || category
    const lines = [
      `👋 *Custom Architecture Quote Request*`,
      `*Client:* ${fullName || "Prospective Client"}`,
      email ? `*Email:* ${email}` : "",
      phone ? `*Phone:* ${phone}` : "",
      company ? `*Company:* ${company}` : "",
      `*Domain:* ${activeLabel}`,
      `*Budget:* ${budget}`,
      `*Timeline:* ${timeline}`,
      selectedRequirements.length > 0
        ? `*Key Capabilities:* ${selectedRequirements.join(", ")}`
        : "",
      projectOverview ? `*Brief:* ${projectOverview}` : "",
      referenceId ? `*Ref:* ${referenceId}` : "",
    ].filter(Boolean)

    return encodeURIComponent(lines.join("\n"))
  }

  const cleanPhone = (
    ENV.whatsappPhone ||
    siteData.site.whatsapp?.phoneNumber ||
    "15063124135"
  ).replace(/[^0-9]/g, "")
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${buildWhatsAppMessage()}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-quote-title"
    >
      {/* Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative my-8 w-full max-w-2xl overflow-hidden rounded-[2.25rem] border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition-all"
      >
        {/* Subtle Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#c91f26] via-[#e24a50] to-[#c91f26]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition hover:bg-[#ebebee] hover:text-[#1d1d1f]"
          aria-label="Close custom quote modal"
        >
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="p-8 sm:p-12 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#e8f5e9] text-[#2e7d32] shadow-xs">
              <svg
                className="size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <span className="mt-5 inline-block rounded-full bg-[#c91f26]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#c91f26]">
              Specification Routed
            </span>

            <h3
              id="custom-quote-title"
              className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#1d1d1f] sm:text-3xl"
            >
              Requirements In Technical Review
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#6e6e73] sm:text-base">
              Thank you, <strong className="text-[#1d1d1f]">{fullName}</strong>. Your custom
              specification has been routed directly to our Technical Lead.
            </p>

            {/* Reference Badge */}
            <div className="mx-auto mt-6 flex max-w-xs items-center justify-between rounded-2xl border border-black/[0.08] bg-[#fbfbfd] px-5 py-3.5">
              <div className="text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#86868b]">
                  Routing Reference
                </p>
                <p className="font-mono text-base font-bold text-[#c91f26]">
                  {referenceId}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyRef}
                className="rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-semibold text-[#1d1d1f] shadow-xs hover:bg-[#f5f5f7] transition"
              >
                {copiedRef ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#20ba59]"
              >
                <span>Fast-Track on WhatsApp</span>
                <Icon name="arrow" className="size-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-black/[0.12] bg-white px-6 py-3.5 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                Done
              </button>
            </div>

            <p className="mt-5 text-xs text-[#86868b]">
              Standard SLA response time: <strong className="text-[#1d1d1f]">15 to 30 minutes</strong> during studio hours.
            </p>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="p-7 sm:p-10 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#c91f26]/10 px-3.5 py-1 text-xs font-bold text-[#c91f26]">
                <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
                <span>DIRECT TECH-LEAD ROUTING</span>
              </div>
              <h2
                id="custom-quote-title"
                className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#1d1d1f] sm:text-3xl"
              >
                Custom Quote & Architecture Routing
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                Need custom microservices, bespoke SaaS, native iOS/Android, or third-party APIs?
                Route your specifications directly to our engineering lead for a formal quote.
              </p>
            </div>

            {/* Domain / Category Pills */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f]">
                Project Domain
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {CATEGORY_OPTIONS.map((cat) => {
                  const isSelected = category === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        isSelected
                          ? "border-[#1d1d1f] bg-[#1d1d1f] text-white shadow-xs"
                          : "border-black/[0.08] bg-[#f5f5f7] text-[#6e6e73] hover:border-black/20 hover:text-[#1d1d1f]"
                      }`}
                    >
                      <span>{cat.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Client Info Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Full Name <span className="text-[#c91f26]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Work Email <span className="text-[#c91f26]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Tech Labs"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                />
              </div>
            </div>

            {/* Budget & Timeline Selectors */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Budget Expectation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm font-medium text-[#1d1d1f] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1d1f]">
                  Target Launch Date
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-sm font-medium text-[#1d1d1f] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Key Architectural Capabilities */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f]">
                Key Technical Requirements (Select all that apply)
              </label>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {POPULAR_REQUIREMENTS.map((req) => {
                  const isChecked = selectedRequirements.includes(req)
                  return (
                    <button
                      key={req}
                      type="button"
                      onClick={() => toggleRequirement(req)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                        isChecked
                          ? "border-[#c91f26] bg-[#c91f26]/10 text-[#c91f26]"
                          : "border-black/[0.08] bg-[#f5f5f7] text-[#6e6e73] hover:border-black/20 hover:text-[#1d1d1f]"
                      }`}
                    >
                      <span
                        className={`grid size-3.5 place-items-center rounded-full text-[0.6rem] ${
                          isChecked ? "bg-[#c91f26] text-white" : "border border-black/20"
                        }`}
                      >
                        {isChecked ? "✓" : ""}
                      </span>
                      <span>{req}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Project Overview / Specs */}
            <div className="mt-6">
              <label className="block text-xs font-bold text-[#1d1d1f]">
                Project Scope & Specific Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Share key user workflows, integrations, target audience, or existing tech stack..."
                value={projectOverview}
                onChange={(e) => setProjectOverview(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-4 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/5 transition"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#f0fbf4] px-5 py-3 text-sm font-semibold text-[#1b9e4b] transition hover:bg-[#e1f7e9]"
              >
                <span>Quick Route via WhatsApp</span>
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-black disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Routing to Tech Lead...</span>
                ) : (
                  <>
                    <span>Route Specification</span>
                    <Icon name="arrow" className="size-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default CustomQuoteModal
