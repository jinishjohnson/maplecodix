import { useState, useEffect, useRef } from "react"
import siteData from "../data/data.json"

export interface WhatsAppButtonProps {
  className?: string
}

export function WhatsAppButton({ className = "" }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const whatsappConfig = siteData.site.whatsapp || {
    phoneNumber: "+15063124135",
    displayNumber: "+1 (506) 312-4135",
    message:
      "Hello MapleCodix! I would like to connect with your 24*7 support and development team.",
    label: "Chat with us on WhatsApp 24*7",
    tooltip: "Need quick help? 24*7 WhatsApp Hotline",
    supportTitle: "MapleCodix 24*7 Support",
    supportStatus: "Online 24*7 · Typically replies in ~15 mins",
    greeting:
      "Hi there! 👋 Welcome to MapleCodix 24*7 Support. How can we help bring your digital vision to life today?",
    starterPrompts: [
      {
        id: "web",
        label: "💻 Web Development",
        message:
          "Hi MapleCodix, I would like to inquire about building a new website.",
      },
      {
        id: "packages",
        label: "📦 Packages & Pricing",
        message:
          "Hi MapleCodix, I have a question about your development and marketing packages.",
      },
      {
        id: "webapp",
        label: "🚀 Custom Web App / SaaS",
        message:
          "Hi MapleCodix, I want to discuss building a custom web application or SaaS platform.",
      },
      {
        id: "mobile",
        label: "📱 Mobile App",
        message:
          "Hi MapleCodix, I would like to discuss developing a mobile app for iOS and Android.",
      },
      {
        id: "growth",
        label: "📈 SEO & Growth",
        message:
          "Hi MapleCodix, I am interested in your SEO and digital marketing services.",
      },
    ],
  }

  const [userMessage, setUserMessage] = useState(whatsappConfig.message)
  const [activePromptId, setActivePromptId] = useState<string | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const cleanPhone = whatsappConfig.phoneNumber.replace(/[^0-9]/g, "")
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    userMessage,
  )}`

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelectPrompt = (id: string, message: string) => {
    setActivePromptId(id)
    setUserMessage(message)
  }

  return (
    <div
      ref={popupRef}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 md:bottom-8 md:right-8 ${className}`}
    >
      {/* 
        INTERACTIVE CHAT POPUP DRAWER / CARD
      */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="MapleCodix WhatsApp Chat"
          className="absolute bottom-16 right-0 mb-2 w-[340px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5 animate-fadeIn sm:w-[380px]"
        >
          {/* Header Bar */}
          <div className="bg-[#1d1d1f] p-5 text-white border-b border-white/[0.08]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative grid size-11 place-items-center rounded-2xl bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-sm">
                  <svg
                    className="size-6 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full border border-white bg-emerald-400" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    {whatsappConfig.supportTitle}
                  </h3>
                  <p className="text-[11px] font-medium text-emerald-400">
                    {whatsappConfig.supportStatus}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid size-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat window"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Body Area */}
          <div className="bg-[#fbfbfd] p-5">
            {/* Incoming Studio Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="grid size-7 shrink-0 place-items-center rounded-full bg-[#c91f26] text-[10px] font-bold text-white shadow-xs">
                M
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-black/[0.06] bg-white p-3.5 shadow-xs">
                <p className="text-xs leading-relaxed text-[#1d1d1f]">
                  {whatsappConfig.greeting}
                </p>
                <span className="mt-1 block text-[10px] font-medium text-[#86868b]">
                  Just now
                </span>
              </div>
            </div>

            {/* Quick Starter Conversation Chips */}
            <div className="mt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]">
                Quick Conversation Starters:
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {whatsappConfig.starterPrompts.map((prompt) => {
                  const isSelected = activePromptId === prompt.id
                  return (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() =>
                        handleSelectPrompt(prompt.id, prompt.message)
                      }
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                        isSelected
                          ? "border border-[#25D366] bg-[#25D366]/10 text-[#075E54] shadow-xs ring-1 ring-[#25D366]"
                          : "border border-black/[0.08] bg-white text-[#1d1d1f] hover:border-black/20 hover:bg-[#f5f5f7]"
                      }`}
                    >
                      {prompt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Editable Message Textarea */}
            <div className="mt-4">
              <label
                htmlFor="whatsapp-custom-message"
                className="block text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]"
              >
                Your Message:
              </label>
              <textarea
                id="whatsapp-custom-message"
                rows={3}
                value={userMessage}
                onChange={(e) => {
                  setUserMessage(e.target.value)
                  setActivePromptId(null)
                }}
                className="mt-1.5 w-full resize-none rounded-2xl border border-black/[0.08] bg-white p-3.5 text-xs leading-relaxed text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#25D366] focus:outline-none focus:ring-4 focus:ring-[#25D366]/15 transition"
                placeholder="Type your project requirements..."
              />
            </div>

            {/* Send WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#20ba59] active:scale-[0.99]"
            >
              <svg
                className="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Open in WhatsApp</span>
              <span className="text-white/80">→</span>
            </a>

            {/* Direct fallback note */}
            <div className="mt-2.5 text-center">
              <span className="text-[10px] text-[#86868b]">
                Direct line:{" "}
                <span className="font-semibold text-[#1d1d1f]">
                  {whatsappConfig.displayNumber || whatsappConfig.phoneNumber}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 
        FLOATING TRIGGER BUTTON (RIGHT CORNER)
      */}
      <div
        className="group relative flex items-center justify-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Radar ping ring (only when drawer is closed) */}
        {!isOpen && (
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000"
            aria-hidden="true"
          />
        )}

        {/* WhatsApp Floating Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp chat" : whatsappConfig.label}
          className={`relative flex size-14 items-center justify-center rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-95 ${
            isOpen
              ? "bg-[#1d1d1f] shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:bg-black"
              : "bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.42)] hover:scale-105 hover:bg-[#20ba59]"
          }`}
        >
          {isOpen ? (
            <svg
              className="size-5 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              {/* Official WhatsApp Logo SVG */}
              <svg
                className="size-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>

              {/* Online status indicator dot */}
              <span className="absolute right-0.5 top-0.5 flex size-3.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-emerald-400" />
              </span>
            </>
          )}
        </button>

        {/* Hover Tooltip (Shown only when drawer is closed and hovered) */}
        {!isOpen && (
          <div
            role="tooltip"
            className={`pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full border border-black/8 bg-[#1d1d1f] px-4 py-2 text-xs font-medium text-white shadow-xl transition-all duration-300 md:block ${
              isHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#25D366]" />
              <span>{whatsappConfig.tooltip}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WhatsAppButton
