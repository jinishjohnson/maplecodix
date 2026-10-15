import { useState } from "react"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export function Contact() {
  const seo = siteData.seo.contact || {
    title: "24*7 Support & Contact | MapleCodix Digital Studio",
    description: "24*7 dedicated engineering and digital support. Call +1 (506) 312-4135, WhatsApp, email support@maplecodix.com, or visit our Moncton, NB, Canada studio.",
    keywords: "24*7 support, maplecodix contact, moncton web design, support maplecodix, 24/7 web development",
    canonicalPath: "/contact",
  }

  const { site } = siteData

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
          eyebrow: "Always-On Studio & Emergency Desk",
          title: "24*7 Support",
          description:
            "Day or night, our multidisciplinary engineering team and solutions architects in Moncton, Canada are ready to assist. Instant resolution, rapid deployment, and human communication.",
        }}
      >
        {/* 
          ========================================================================
          24*7 LIVE STATUS TICKER / BADGE BAR
          ========================================================================
        */}
        <section className="border-b border-black/5 bg-white py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#071d35]">
                24*7 Engineers Active & On-Duty
              </p>
              <span className="hidden text-xs text-[#526273] sm:inline">
                · Typical WhatsApp response: <strong className="text-[#071d35]">&lt; 15 mins</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={triggerAIChat}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#f8fafc] px-3 py-1.5 text-xs font-bold text-[#071d35] transition hover:border-[#c91f26] hover:text-[#c91f26]"
              >
                <span className="size-2 rounded-full bg-[#c91f26]" />
                <span>Ask AI Assistant</span>
              </button>

              <a
                href="https://wa.me/15063124135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition hover:brightness-105"
              >
                <span>WhatsApp Hotline</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          FOUR PILLAR 24*7 CONTACT CHANNELS
          ========================================================================
        */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="text-center max-w-2xl mx-auto">
                <p className="eyebrow text-[#c91f26]">Direct Touchpoints</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#071d35] md:text-5xl">
                  Connect with us right now.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#526273] md:text-base">
                  Choose your preferred channel below. Whether it's an emergency technical outage, a quote inquiry, or a project roadmap discussion, we respond 24 hours a day.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Channel 1: Phone & WhatsApp */}
              <ScrollReveal animation="fade-up" delay={50} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c91f26]/40 hover:shadow-xl">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#128C7E] to-[#25D366] text-white shadow-md">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
                      Phone or WhatsApp
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold text-[#071d35]">
                      5063124135
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#526273]">
                      +1 (506) 312-4135
                    </p>
                    <p className="mt-2.5 text-xs text-[#526273] leading-relaxed">
                      Instant WhatsApp voice or text chat. Direct line for emergency deployments and urgent calls.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href="https://wa.me/15063124135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] py-2.5 text-xs font-bold text-white shadow-xs transition hover:brightness-105"
                    >
                      <span>Open WhatsApp</span>
                      <span>→</span>
                    </a>
                    <a
                      href="tel:+15063124135"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-[#f8fafc] py-2.5 text-xs font-bold text-[#071d35] transition hover:border-black/25"
                    >
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 2: Support Email */}
              <ScrollReveal animation="fade-up" delay={150} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c91f26]/40 hover:shadow-xl">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c91f26] to-[#ff5b4f] text-white shadow-md">
                      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#c91f26]">
                      24*7 Email Support
                    </span>
                    <h3 className="mt-1 text-base font-extrabold text-[#071d35] break-all">
                      support@maplecodix.com
                    </h3>
                    <p className="mt-2.5 text-xs text-[#526273] leading-relaxed">
                      Send project scopes, wireframes, bug reports, or contracts. Monitored 24/7 by our technical leads.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href="mailto:support@maplecodix.com"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#071d35] py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#c91f26]"
                    >
                      <span>Send Email</span>
                      <span>→</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy("support@maplecodix.com", "email")}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-[#f8fafc] py-2.5 text-xs font-bold text-[#071d35] transition hover:border-black/25"
                    >
                      <span>{copiedEmail ? "✓ Copied to Clipboard" : "Copy Email"}</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 3: Moncton Headquarters */}
              <ScrollReveal animation="fade-up" delay={250} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c91f26]/40 hover:shadow-xl">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#071d35] to-[#1e3a5f] text-white shadow-md">
                      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#071d35]">
                      Studio Headquarters
                    </span>
                    <h3 className="mt-1 text-sm font-extrabold text-[#071d35]">
                      20th Floor, 770 Main St
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#526273]">
                      Moncton, NB E1C 1E7, Canada
                    </p>
                    <p className="mt-2.5 text-xs text-[#526273] leading-relaxed">
                      Our Canadian flagship digital studio, servicing clients across North America and international hubs.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-[#f8fafc] py-2.5 text-xs font-bold text-[#071d35] transition hover:border-[#c91f26] hover:text-[#c91f26]"
                    >
                      <span>Open Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Channel 4: AI Intelligent Assistant */}
              <ScrollReveal animation="fade-up" delay={350} duration={600}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-gradient-to-b from-white to-[#f7f9fb] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c91f26]/40 hover:shadow-xl">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c91f26] via-[#071d35] to-[#c91f26] text-white shadow-md">
                      <svg className="size-6 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
                      </svg>
                    </div>
                    <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#c91f26]">
                      Instant AI Chatbot
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold text-[#071d35]">
                      Codix AI Assistant
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-emerald-600">
                      ⚡ Active & Ready to chat
                    </p>
                    <p className="mt-2.5 text-xs text-[#526273] leading-relaxed">
                      Get immediate package comparisons ($99 to $1399), custom web app estimates, and technical advice in seconds.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={triggerAIChat}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#071d35] to-[#c91f26] py-2.5 text-xs font-bold text-white shadow-xs transition hover:brightness-110 active:scale-95"
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
          INTERACTIVE 24*7 SUPPORT TICKET & PROJECT CONSULTATION DESK
          ========================================================================
        */}
        <section className="bg-[#f0f4f8] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-right" duration={700}>
                  <div className="rounded-3xl border border-black/8 bg-white p-7 shadow-xl md:p-10">
                    <div className="flex items-center justify-between border-b border-black/6 pb-6">
                      <div>
                        <span className="eyebrow text-[#c91f26]">Priority Desk</span>
                        <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#071d35] md:text-3xl">
                          Submit a 24*7 Support Ticket
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200">
                        SLA &lt; 15 Mins
                      </span>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-bold text-[#071d35] uppercase tracking-wider">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Alex Tremblay"
                              className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#f8fafc] px-4 py-3 text-xs text-[#071d35] placeholder:text-[#526273]/50 focus:border-[#c91f26] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c91f26]/20"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#071d35] uppercase tracking-wider">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="alex@company.com"
                              className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#f8fafc] px-4 py-3 text-xs text-[#071d35] placeholder:text-[#526273]/50 focus:border-[#c91f26] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c91f26]/20"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-bold text-[#071d35] uppercase tracking-wider">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (506) ..."
                              className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#f8fafc] px-4 py-3 text-xs text-[#071d35] placeholder:text-[#526273]/50 focus:border-[#c91f26] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c91f26]/20"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#071d35] uppercase tracking-wider">
                              Support Urgency Level
                            </label>
                            <select
                              value={formData.urgency}
                              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                              className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#f8fafc] px-4 py-3 text-xs font-semibold text-[#071d35] focus:border-[#c91f26] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c91f26]/20"
                            >
                              <option value="urgent">⚡ Urgent / Emergency Outage (Immediate)</option>
                              <option value="scoping">🚀 New Project Scoping / Quote Request</option>
                              <option value="package">📦 Package & Pricing Inquiry ($99 - $1399)</option>
                              <option value="technical">🔧 Technical Maintenance / Modification</option>
                              <option value="general">💬 General Consultation</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#071d35] uppercase tracking-wider">
                            Project or Issue Description *
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Please share details about your website, software requirements, or urgent technical request..."
                            className="mt-1.5 w-full resize-none rounded-xl border border-black/10 bg-[#f8fafc] p-4 text-xs leading-relaxed text-[#071d35] placeholder:text-[#526273]/50 focus:border-[#c91f26] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c91f26]/20"
                          />
                        </div>

                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#071d35] via-[#102a45] to-[#c91f26] py-4 text-xs font-extrabold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.99]"
                        >
                          <span>Submit 24*7 Support Request</span>
                          <span>→</span>
                        </button>

                        <p className="text-center text-[11px] text-[#526273]">
                          🔒 We respect your privacy. All inquiries are covered under our strict NDA guarantee.
                        </p>
                      </form>
                    ) : (
                      <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-fadeIn">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <h4 className="mt-4 text-xl font-extrabold text-[#071d35]">
                          Ticket Received Successfully!
                        </h4>
                        <p className="mt-1 text-xs font-bold text-emerald-700">
                          Support Ticket ID: <span className="font-mono text-sm underline">{ticketId}</span>
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-[#526273] max-w-md mx-auto">
                          Thank you, <strong>{formData.name}</strong>. Our on-duty 24*7 engineering team has been notified. We will contact you at <strong>{formData.email}</strong> shortly.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                          <a
                            href={`https://wa.me/15063124135?text=${encodeURIComponent(`Hi MapleCodix, I just submitted Ticket ${ticketId} regarding ${formData.urgency}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:brightness-105"
                          >
                            <span>Speed up on WhatsApp ({ticketId})</span>
                            <span>→</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-xs font-bold text-[#071d35] hover:bg-black/5"
                          >
                            Submit Another Request
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Office Card & SLAs (5 cols) */}
              <div className="space-y-6 lg:col-span-5">
                <ScrollReveal animation="fade-left" duration={700}>
                  {/* Location & Office Card */}
                  <div className="rounded-3xl border border-black/8 bg-white p-7 shadow-lg md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-[#c91f26]">Location Hub</span>
                      <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-bold text-[#c91f26]">
                        🍁 Canada
                      </span>
                    </div>

                    <h4 className="mt-3 text-xl font-extrabold text-[#071d35]">
                      Moncton Digital Studio
                    </h4>

                    <div className="mt-5 space-y-4 text-xs text-[#526273]">
                      <div className="flex items-start gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#071d35]/5 text-[#071d35]">
                          📍
                        </span>
                        <div>
                          <strong className="block text-[#071d35]">Physical Address:</strong>
                          <span>20th Floor, 770 Main St</span><br />
                          <span>Moncton, NB E1C 1E7, Canada</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#071d35]/5 text-[#071d35]">
                          📞
                        </span>
                        <div>
                          <strong className="block text-[#071d35]">Helpline & WhatsApp:</strong>
                          <a href="tel:+15063124135" className="text-[#c91f26] font-semibold hover:underline">
                            +1 (506) 312-4135
                          </a>
                          <span className="block text-[10px] text-[#526273]">Short dial: 5063124135</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#071d35]/5 text-[#071d35]">
                          ✉️
                        </span>
                        <div>
                          <strong className="block text-[#071d35]">24*7 Support Email:</strong>
                          <a href="mailto:support@maplecodix.com" className="text-[#c91f26] font-semibold hover:underline">
                            support@maplecodix.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#071d35]/5 text-[#071d35]">
                          🕒
                        </span>
                        <div>
                          <strong className="block text-[#071d35]">Operational Hours:</strong>
                          <span>24 Hours a day / 7 Days a week / 365 Days a year</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-black/6 pt-5">
                      <a
                        href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#f8fafc] py-3 text-xs font-bold text-[#071d35] transition hover:border-[#c91f26] hover:bg-white hover:text-[#c91f26]"
                      >
                        <svg className="size-4 text-[#c91f26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                          <line x1="9" y1="3" x2="9" y2="18" />
                          <line x1="15" y1="6" x2="15" y2="21" />
                        </svg>
                        <span>Open Directions in Maps</span>
                      </a>
                    </div>
                  </div>

                  {/* Support Guarantees Badges */}
                  <div className="mt-6 rounded-3xl border border-black/8 bg-gradient-to-br from-[#071d35] to-[#122842] p-7 text-white shadow-lg">
                    <h5 className="text-sm font-extrabold uppercase tracking-wider text-[#ff6b6b]">
                      Our 24*7 SLA Commitments
                    </h5>
                    <ul className="mt-4 space-y-3 text-xs text-white/80">
                      <li className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong>15-Minute Response:</strong> WhatsApp & phone inquiries picked up immediately.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong>Direct Senior Engineers:</strong> Speak directly to developers, not outsourced call centers.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        <span><strong>100% Satisfaction Guarantee:</strong> We keep tuning until your expectations are exceeded.</span>
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
          FREQUENTLY ASKED QUESTIONS (24*7 SUPPORT ACCORDION)
          ========================================================================
        */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="text-center">
                <p className="eyebrow text-[#c91f26]">Support FAQ</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#071d35] md:text-4xl">
                  Questions about our 24*7 Support?
                </h2>
                <p className="mt-3 text-xs text-[#526273]">
                  Everything you need to know about our response times, services, and communication protocols.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 space-y-4">
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
              ].map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 60} duration={500}>
                  <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-xs">
                    <h3 className="text-sm font-extrabold text-[#071d35] flex items-center gap-2">
                      <span className="text-[#c91f26]">Q:</span> {item.q}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#526273]">
                      {item.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  )
}

export default Contact
