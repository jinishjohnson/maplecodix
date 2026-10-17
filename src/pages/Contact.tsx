import { useState } from "react"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import { CustomQuoteModal } from "../components/CustomQuoteModal"
import siteData from "../data/data.json"

export function Contact() {
  const seo = siteData.seo.contact || {
    title: "24*7 Support & Contact | MapleCodix Digital Studio",
    description: "24*7 dedicated engineering and digital support. Call +1 (506) 312-4135, WhatsApp, email support@maplecodix.com, or visit our Moncton, NB, Canada studio.",
    keywords: "24*7 support, maplecodix contact, moncton web design, support maplecodix, 24/7 web development",
    canonicalPath: "/contact",
  }

  // Support Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    urgency: "urgent",
    service: "website",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState("")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [isCustomQuoteOpen, setIsCustomQuoteOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    const randomTicket = `MC-247-${Math.floor(1000 + Math.random() * 9000)}`
    setTicketId(randomTicket)
    setIsSubmitted(true)
  }

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const triggerAIChat = () => {
    window.dispatchEvent(
      new CustomEvent("open-ai-chat", {
        detail: { prompt: "I have a question about 24*7 support and custom project scopes" },
      })
    )
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />

      <PageShell
        intro={{
          eyebrow: "Always-On Canadian Engineering",
          title: "24*7 Direct Support",
          description:
            "Day or night, our senior solutions architects and full-stack engineers in Moncton, Canada are on-duty. Instant triage, sub-15 minute response, and human clarity.",
        }}
      >
        {/* 
          ========================================================================
          APPLE-STYLE STICKY 24*7 STATUS TICKER BAR
          ========================================================================
        */}
        <section
          aria-label="Support status bar"
          className="sticky top-20 z-30 border-b border-black/[0.06] bg-white/80 py-3.5 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#34c759]" />
              </span>
              <p className="text-xs font-semibold tracking-wide text-[#1d1d1f]">
                Engineers On-Duty in Moncton, NB
              </p>
              <span className="hidden text-xs text-[#86868b] sm:inline">
                · Typical Response: <strong className="text-[#1d1d1f]">&lt; 15 mins</strong>
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={triggerAIChat}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-xs font-medium text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
              >
                <span className="size-2 rounded-full bg-[#c91f26]" />
                <span>Ask AI Assistant</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCustomQuoteOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-xs font-medium text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
              >
                <span>Custom Quote</span>
              </button>

              <a
                href="https://wa.me/15063124135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:brightness-105 transition-all"
              >
                <span>WhatsApp Hotline</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          APPLE-STYLE FOUR PILLAR TOUCHPOINTS
          Clean white cards with soft ambient drop shadows on off-white canvas
          ========================================================================
        */}
        <section className="bg-[#f5f5f7] py-20 text-[#1d1d1f] md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                  Direct Touchpoints
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
                  Connect with our studio.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                  Choose your preferred channel below. Whether it's an emergency deployment, a custom quote scope, or an architecture inquiry, our Moncton team responds around the clock.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Channel 1: Phone & WhatsApp */}
              <ScrollReveal animation="fade-up" delay={50} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]">
                  <div>
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-transform duration-300 group-hover:scale-105">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                      Phone &amp; WhatsApp
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      (506) 312-4135
                    </h3>
                    <p className="mt-1 text-xs text-[#86868b]">
                      Toll-free short dial: 5063124135
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      Direct WhatsApp voice or text chat. Monitored 24/7 by our technical leads for rapid resolutions.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-2.5">
                    <a
                      href="https://wa.me/15063124135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-3 text-xs font-semibold text-white shadow-sm hover:brightness-105 transition-all"
                    >
                      <span>Open WhatsApp</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="tel:+15063124135"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f5f5f7] py-3 text-xs font-semibold text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
                    >
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 2: Support Email */}
              <ScrollReveal animation="fade-up" delay={150} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]">
                  <div>
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-[#c91f26]/10 text-[#c91f26] transition-transform duration-300 group-hover:scale-105">
                      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-[#c91f26]">
                      24*7 Email Support
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f] break-all">
                      support@maplecodix.com
                    </h3>
                    <p className="mt-1 text-xs text-[#86868b]">
                      Average response: ~15 mins
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      Send project briefs, Figma links, API specs, or security inquiries. Always tracked with ticket IDs.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-2.5">
                    <a
                      href="mailto:support@maplecodix.com"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1d1d1f] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#c91f26] transition-colors"
                    >
                      <span>Send Email</span>
                      <span>↗</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy("support@maplecodix.com", "email")}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f5f5f7] py-3 text-xs font-semibold text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors cursor-pointer"
                    >
                      <span>{copiedEmail ? "✓ Copied" : "Copy Address"}</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 3: Moncton Headquarters */}
              <ScrollReveal animation="fade-up" delay={250} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]">
                  <div>
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-[#0066cc]/10 text-[#0066cc] transition-transform duration-300 group-hover:scale-105">
                      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-[#0066cc]">
                      Studio Headquarters
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">
                      770 Main St, 20th Floor
                    </h3>
                    <p className="mt-1 text-xs text-[#86868b]">
                      Moncton, NB E1C 1E7, Canada
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      Our Canadian flagship digital studio, collaborating with brands across Canada, the US, and worldwide.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-2.5">
                    <a
                      href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f5f5f7] py-3 text-xs font-semibold text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
                    >
                      <span>Open in Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 4: AI Intelligent Assistant */}
              <ScrollReveal animation="fade-up" delay={350} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]">
                  <div>
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#c91f26]">
                      <Icon name="spark" className="size-6" />
                    </div>
                    <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-[#c91f26]">
                      Instant AI Knowledge
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      Codix AI
                    </h3>
                    <p className="mt-1 text-xs font-medium text-emerald-600">
                      ⚡ Active &amp; Ready to Chat
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      Get immediate scope recommendations, pricing packages ($999 to $3,999), and technical comparisons in seconds.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={triggerAIChat}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1d1d1f] py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#c91f26] transition-colors cursor-pointer"
                    >
                      <span>Start AI Chat</span>
                      <span>✨</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          APPLE-STYLE INTERACTIVE SUPPORT DESK & OFFICE WORKBENCH
          ========================================================================
        */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-right" duration={700}>
                  <div className="rounded-[2.25rem] border border-black/[0.05] bg-[#fbfbfd] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:p-12">
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">Priority Desk</span>
                        <h3 className="mt-1 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
                          Submit a Support Request
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        SLA &lt; 15 Mins
                      </span>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Alex Tremblay"
                              className="mt-2 w-full rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] shadow-xs focus:border-[#0066cc] focus:outline-hidden focus:ring-2 focus:ring-[#0066cc]/20 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="alex@company.com"
                              className="mt-2 w-full rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] shadow-xs focus:border-[#0066cc] focus:outline-hidden focus:ring-2 focus:ring-[#0066cc]/20 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (506) ..."
                              className="mt-2 w-full rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] shadow-xs focus:border-[#0066cc] focus:outline-hidden focus:ring-2 focus:ring-[#0066cc]/20 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                              Urgency Level
                            </label>
                            <select
                              value={formData.urgency}
                              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                              className="mt-2 w-full rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 text-sm font-medium text-[#1d1d1f] shadow-xs focus:border-[#0066cc] focus:outline-hidden focus:ring-2 focus:ring-[#0066cc]/20 transition-all cursor-pointer"
                            >
                              <option value="urgent">⚡ Urgent Emergency (Immediate)</option>
                              <option value="scoping">🚀 New Project Scope / Architecture</option>
                              <option value="package">📦 Package &amp; Pricing Inquiry</option>
                              <option value="technical">🔧 Technical Maintenance / Update</option>
                              <option value="general">💬 General Consultation</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                            Project or Issue Description *
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Please share details about your digital product, technical scope, or emergency outage..."
                            className="mt-2 w-full resize-none rounded-2xl border border-black/[0.06] bg-white p-4 text-sm leading-relaxed text-[#1d1d1f] placeholder:text-[#86868b] shadow-xs focus:border-[#0066cc] focus:outline-hidden focus:ring-2 focus:ring-[#0066cc]/20 transition-all"
                          />
                        </div>

                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c91f26] hover:shadow-lg active:scale-[0.99] cursor-pointer"
                        >
                          <span>Submit Priority Request</span>
                          <Icon name="arrow" className="size-4" />
                        </button>

                        <p className="text-center text-xs text-[#86868b]">
                          🔒 Protected by mutual confidentiality and strict non-disclosure agreement.
                        </p>
                      </form>
                    ) : (
                      <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-fadeIn">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <h4 className="mt-4 text-2xl font-semibold text-[#1d1d1f]">
                          Request Logged Successfully
                        </h4>
                        <p className="mt-2 text-xs font-bold text-emerald-700">
                          Support Ticket ID: <span className="font-mono text-sm underline">{ticketId}</span>
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#6e6e73] max-w-md mx-auto">
                          Thank you, <strong>{formData.name}</strong>. Our on-duty Canadian engineering desk has received your ticket. We will reach out to <strong>{formData.email}</strong> shortly.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                          <a
                            href={`https://wa.me/15063124135?text=${encodeURIComponent(`Hi MapleCodix, I just submitted Ticket ${ticketId} regarding ${formData.urgency}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:brightness-105"
                          >
                            <span>Fast-track on WhatsApp ({ticketId})</span>
                            <span>↗</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-semibold text-[#1d1d1f] hover:bg-[#f5f5f7] cursor-pointer"
                          >
                            Submit Another Request
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Office Card & Space Black SLAs (5 cols) */}
              <div className="space-y-6 lg:col-span-5">
                <ScrollReveal animation="fade-left" duration={700}>
                  {/* Location & Studio Card with Photography */}
                  <div className="overflow-hidden rounded-[2.25rem] border border-black/[0.05] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1d1d1f]">
                      <img
                        src="/about/studio-moncton.jpg"
                        alt="MapleCodix Moncton studio headquarters"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff4d4f]">
                            🍁 Moncton Headquarters
                          </span>
                          <p className="font-semibold text-base">770 Main St, 20th Floor</p>
                        </div>
                        <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                          Active Studio
                        </span>
                      </div>
                    </div>

                    <div className="p-7 md:p-8 space-y-4 text-xs text-[#6e6e73]">
                      <div className="flex items-start gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f] font-bold">
                          📍
                        </span>
                        <div>
                          <strong className="block text-sm text-[#1d1d1f] font-semibold">Physical Studio:</strong>
                          <span>20th Floor, 770 Main St, Moncton, NB, E1C 1E7, Canada</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f] font-bold">
                          📞
                        </span>
                        <div>
                          <strong className="block text-sm text-[#1d1d1f] font-semibold">Helpline &amp; WhatsApp:</strong>
                          <a href="tel:+15063124135" className="text-[#0066cc] font-semibold hover:underline">
                            +1 (506) 312-4135
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f] font-bold">
                          🕒
                        </span>
                        <div>
                          <strong className="block text-sm text-[#1d1d1f] font-semibold">Live Hours:</strong>
                          <span>24 Hours a day / 7 Days a week / 365 Days a year</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-black/[0.06]">
                        <a
                          href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-[#f5f5f7] py-3 text-xs font-semibold text-[#1d1d1f] transition-colors hover:bg-[#e8e8ed]"
                        >
                          <span>Open Directions in Maps</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Space Black / Titanium Support Guarantees Badges */}
                  <div className="mt-6 rounded-[2.25rem] border border-white/10 bg-[#1d1d1f] p-8 text-white shadow-xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4f]">
                      SLA Commitments
                    </span>
                    <h5 className="mt-2 text-xl font-semibold text-white">
                      Our Support Standard
                    </h5>
                    <ul className="mt-5 space-y-3.5 text-xs text-[#86868b]">
                      <li className="flex items-center gap-3">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">15-Minute Emergency SLA:</strong> WhatsApp &amp; phone calls picked up immediately.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">Direct Canadian Engineers:</strong> Talk directly to senior technical leads.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">Full IP Transfer:</strong> 100% code ownership and repository access transferred.</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          APPLE-STYLE SUPPORT ACCORDION (FAQS)
          ========================================================================
        */}
        <section className="bg-[#fbfbfd] py-20 border-t border-black/[0.04] md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">Support FAQ</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-base text-[#6e6e73]">
                  Everything you need to know about our response times, services, and communication protocols.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 space-y-3.5">
              {[
                {
                  q: "What does MapleCodix 24*7 Support include?",
                  a: "Our 24*7 support covers emergency downtime recovery, critical bug patches, website updates, package scoping, deployment support, and ongoing client communication. Whether it's 2 PM or 2 AM, our on-duty team is available.",
                },
                {
                  q: "What is the fastest way to get in touch right now?",
                  a: "For immediate assistance, message us on WhatsApp at +1 (506) 312-4135 or tap the floating WhatsApp button on the bottom right. For instant answers about our services and pricing packages, you can also ask Codix AI on the bottom left.",
                },
                {
                  q: "Do you support clients outside of Canada?",
                  a: "Yes! While our physical studio is on the 20th Floor, 770 Main St in Moncton, NB, Canada, over 65% of our clients are located across the United States, Europe, and globally. Our 24*7 rotation ensures timezone coverage across EST, PST, GMT, and UTC.",
                },
                {
                  q: "Can I schedule a live video discovery session?",
                  a: "Absolutely. Send us an email at support@maplecodix.com or a message on WhatsApp, and we will send a calendar link for a Google Meet or Zoom session with one of our senior software engineers.",
                },
              ].map((item, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 60} duration={500}>
                    <div className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-[#f5f5f7]/40 cursor-pointer"
                      >
                        <span className="text-base font-semibold text-[#1d1d1f] md:text-lg">
                          {item.q}
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
                        <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#6e6e73] md:text-base border-t border-black/[0.04]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      </PageShell>

      {/* Custom Quote Routing Modal */}
      <CustomQuoteModal
        isOpen={isCustomQuoteOpen}
        onClose={() => setIsCustomQuoteOpen(false)}
        initialCategory="webapp"
      />
    </>
  )
}

export default Contact
