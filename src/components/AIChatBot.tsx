import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import siteData from "../data/data.json"
import { ENV } from "../config/env"
import {
  encryptStorage,
  decryptStorage,
  readEncryptedStorageSync,
} from "../utils/crypto"
import {
  generateAIResponse,
  type AIMode,
  type ChatMessage,
  type MessageAction,
} from "../utils/aiKnowledgeEngine"

export interface AIChatBotProps {
  className?: string
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "assistant",
    text: "Hi there! 👋 I am **Codix AI**, your MapleCodix intelligence assistant.\n\nI can help you explore our services, compare website & marketing packages, estimate project timelines, and answer technical architecture questions.",
    timestamp: "Just now",
    mode: "advisor",
    actions: [
      {
        label: "📦 Packages from $99",
        actionType: "prompt",
        value: "What packages and pricing do you offer?",
      },
      {
        label: "⚡ Estimate My Web App",
        actionType: "prompt",
        value: "I want an estimate for a custom web application",
      },
      {
        label: "🛠️ Tech Stack & Speed",
        actionType: "prompt",
        value: "What tech stack do you use for 90+ PageSpeed?",
      },
      { label: "💬 WhatsApp Team", actionType: "whatsapp", value: "" },
    ],
  },
]

export function AIChatBot({ className = "" }: AIChatBotProps) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [mode, setMode] = useState<AIMode>("advisor")
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return (
      readEncryptedStorageSync<ChatMessage[]>(
        "maplecodix_chat_history",
        INITIAL_MESSAGES,
      ) || INITIAL_MESSAGES
    )
  })
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [apiKey, setApiKey] = useState(() => {
    const stored = readEncryptedStorageSync<string>("maplecodix_gemini_key", "")
    return stored || ENV.geminiApiKey || ""
  })
  const [tempApiKey, setTempApiKey] = useState("")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  // Asynchronously decrypt and sync chat history & API key on mount
  useEffect(() => {
    decryptStorage<ChatMessage[]>("maplecodix_chat_history").then((saved) => {
      if (saved && Array.isArray(saved) && saved.length > 0) {
        setMessages(saved)
      }
    })

    decryptStorage<string>("maplecodix_gemini_key").then((savedKey) => {
      if (savedKey) {
        setApiKey(savedKey)
      } else if (ENV.geminiApiKey) {
        setApiKey(ENV.geminiApiKey)
      }
    })
  }, [])

  // Persist messages encrypted with AES-256 GCM
  useEffect(() => {
    encryptStorage("maplecodix_chat_history", messages)
  }, [messages])

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      inputRef.current?.focus()
    }
  }, [isOpen, messages, isTyping])

  // Play subtle audio tone using Web Audio API
  const playTone = (type: "sent" | "received") => {
    if (!soundEnabled) return
    try {
      const ctx = new (
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      )()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)

      const now = ctx.currentTime
      if (type === "sent") {
        osc.frequency.setValueAtTime(540, now)
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1)
        gain.gain.setValueAtTime(0.04, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)
        osc.start(now)
        osc.stop(now + 0.12)
      } else {
        osc.frequency.setValueAtTime(750, now)
        osc.frequency.exponentialRampToValueAtTime(1050, now + 0.15)
        gain.gain.setValueAtTime(0.05, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18)
        osc.start(now)
        osc.stop(now + 0.18)
      }
    } catch {
      // AudioContext unavailable or restricted
    }
  }

  // Handle outside click & ESC key
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

  // Listen for global custom open event (e.g. from SiteHeader or Hero CTA)
  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent<{ prompt?: string; mode?: AIMode }>
      setIsOpen(true)
      if (customEvent.detail?.mode) {
        setMode(customEvent.detail.mode)
      }
      if (customEvent.detail?.prompt) {
        handleSendMessage(customEvent.detail.prompt)
      }
    }

    window.addEventListener("open-ai-chat", handleOpenChat)
    return () => window.removeEventListener("open-ai-chat", handleOpenChat)
  }, [])

  // Send message
  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputText
    if (!textToSend.trim() || isTyping) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMessages((prev) => [...prev, userMessage])
    if (!customText) setInputText("")
    setIsTyping(true)
    playTone("sent")

    try {
      const response = await generateAIResponse(
        textToSend,
        [...messages, userMessage],
        mode,
        apiKey,
      )

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "assistant",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        actions: response.actions,
        mode,
      }

      setMessages((prev) => [...prev, assistantMessage])
      playTone("received")
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: "assistant",
        text: "Sorry, I had trouble formulating a response. Please try again or reach out directly to support@maplecodix.com.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  // Handle action buttons
  const handleActionClick = (action: MessageAction) => {
    if (action.actionType === "navigate") {
      setIsOpen(false)
      navigate(action.value)
    } else if (action.actionType === "prompt") {
      handleSendMessage(action.value)
    } else if (action.actionType === "whatsapp") {
      const cleanPhone = (
        siteData.site.whatsapp?.phoneNumber || "+1234567890"
      ).replace(/[^0-9]/g, "")
      const msg = encodeURIComponent(
        "Hello MapleCodix! I was chatting with Codix AI and would like to discuss my project.",
      )
      window.open(
        `https://wa.me/${cleanPhone}?text=${msg}`,
        "_blank",
        "noopener,noreferrer",
      )
    } else if (action.actionType === "email") {
      window.location.href = `mailto:${action.value}?subject=MapleCodix Project Inquiry`
    }
  }

  // Copy text to clipboard
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Clear chat
  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES)
    localStorage.removeItem("maplecodix_chat_history")
    setShowSettings(false)
  }

  // Save API key
  const handleSaveApiKey = () => {
    const trimmed = tempApiKey.trim()
    setApiKey(trimmed || ENV.geminiApiKey || "")
    if (trimmed) {
      encryptStorage("maplecodix_gemini_key", trimmed)
    } else {
      localStorage.removeItem("maplecodix_gemini_key")
    }
    setShowSettings(false)
  }

  // Render text with basic markdown formatting (bold, bullet points, code tags)
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split("\n")

    return (
      <div className="space-y-1.5 text-xs leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) {
            return <div key={idx} className="h-1" />
          }

          // Bullet points
          const isBullet =
            line.startsWith("• ") ||
            line.startsWith("- ") ||
            line.startsWith("* ")
          const cleanLine = isBullet ? line.substring(2) : line

          // Parse **bold** and `code`
          const parts = cleanLine.split(/(\*\*.*?\*\*|`.*?`)/g)

          const renderedLine = parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-bold text-[#1d1d1f]">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            if (part.startsWith("`") && part.endsWith("`")) {
              return (
                <code
                  key={pIdx}
                  className="rounded bg-black/6 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[#c91f26]"
                >
                  {part.slice(1, -1)}
                </code>
              )
            }
            return part
          })

          if (isBullet) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1">
                <span className="text-[#c91f26] font-bold">•</span>
                <span className="flex-1">{renderedLine}</span>
              </div>
            )
          }

          return <p key={idx}>{renderedLine}</p>
        })}
      </div>
    )
  }

  return (
    <div
      ref={popupRef}
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 md:bottom-8 md:left-8 ${className}`}
    >
      {/* 
        ========================================================================
        EXPANDED / FLOATING AI CHAT WINDOW
        ========================================================================
      */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="MapleCodix AI Assistant"
          className={`absolute bottom-16 left-0 mb-2 flex flex-col overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5 animate-fadeIn transition-all duration-300 ${
            isExpanded
              ? "h-[640px] w-[92vw] max-w-[680px] sm:h-[680px]"
              : "h-[560px] w-[340px] max-w-[calc(100vw-2.5rem)] sm:w-[400px]"
          }`}
        >
          {/* Header Bar */}
          <div className="relative flex items-center justify-between border-b border-white/[0.08] bg-[#1d1d1f] px-4 py-3.5 text-white shadow-xs">
            <div className="flex items-center gap-3">
              {/* AI Avatar */}
              <div className="relative flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c91f26] to-[#e03138] shadow-sm">
                <svg
                  className="size-5 fill-none stroke-current stroke-[2.2]"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
                </svg>
                {/* Blinking Live indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 flex size-3">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full border-2 border-[#1d1d1f] bg-emerald-500" />
                </span>
              </div>

              {/* Bot Info */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    Codix AI
                  </h3>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/90 uppercase tracking-wider backdrop-blur-xs">
                    {mode}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-white/70">
                  MapleCodix Senior AI Consultant
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              {/* Expand/Contract Toggle */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={
                  isExpanded ? "Collapse chat view" : "Expand chat view"
                }
                className="hidden rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white sm:flex"
                title={isExpanded ? "Collapse" : "Maximize"}
              >
                {isExpanded ? (
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                  </svg>
                ) : (
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                )}
              </button>

              {/* Settings Toggle */}
              <button
                type="button"
                onClick={() => {
                  setTempApiKey(apiKey)
                  setShowSettings(!showSettings)
                }}
                aria-label="Chat settings"
                className={`rounded-full p-1.5 transition-colors ${
                  showSettings
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                title="Settings & API Key"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close AI chat"
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-black/[0.06] bg-[#f5f5f7] p-1.5 gap-1">
            <button
              type="button"
              onClick={() => setMode("advisor")}
              className={`flex-1 rounded-full py-1 text-[11px] font-semibold transition-all ${
                mode === "advisor"
                  ? "bg-white text-[#1d1d1f] shadow-xs"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              💼 Advisor
            </button>
            <button
              type="button"
              onClick={() => setMode("architect")}
              className={`flex-1 rounded-full py-1 text-[11px] font-semibold transition-all ${
                mode === "architect"
                  ? "bg-white text-[#1d1d1f] shadow-xs"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              ⚡ Architect
            </button>
            <button
              type="button"
              onClick={() => setMode("growth")}
              className={`flex-1 rounded-full py-1 text-[11px] font-semibold transition-all ${
                mode === "growth"
                  ? "bg-white text-[#1d1d1f] shadow-xs"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              💡 Growth
            </button>
          </div>

          {/* 
            SETTINGS DRAWER / OVERLAY
          */}
          {showSettings && (
            <div className="border-b border-black/[0.06] bg-white p-4 text-xs shadow-xs">
              <div className="flex items-center justify-between font-bold text-[#1d1d1f]">
                <span>⚙️ Chat Preferences & API</span>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="text-xs text-[#86868b] hover:text-[#1d1d1f]"
                >
                  ✕ Done
                </button>
              </div>

              {/* Custom Gemini API Key */}
              <div className="mt-3">
                <label className="block text-[11px] font-medium text-[#6e6e73]">
                  Custom Gemini API Key (Optional):
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="password"
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="AIzaSy... (leave empty for built-in AI)"
                    className="flex-1 rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-3 py-1.5 text-xs text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={handleSaveApiKey}
                    className="rounded-full bg-[#1d1d1f] px-4 py-1.5 font-bold text-white hover:bg-black transition"
                  >
                    Save
                  </button>
                </div>
                <p className="mt-1 text-[10px] text-[#86868b]">
                  MapleCodix has built-in local intelligence by default. Adding
                  a free Gemini key provides unconstrained reasoning.
                </p>
              </div>

              {/* Sound & Clear actions */}
              <div className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-3">
                <label className="flex items-center gap-2 cursor-pointer text-[11px] font-medium text-[#1d1d1f]">
                  <input
                    type="checkbox"
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                    className="rounded accent-[#c91f26]"
                  />
                  <span>Sound Effects</span>
                </label>

                <button
                  type="button"
                  onClick={handleClearChat}
                  className="rounded-full px-3 py-1 text-[11px] font-semibold text-[#c91f26] hover:bg-[#c91f26]/10 transition"
                >
                  🗑️ Clear History
                </button>
              </div>
            </div>
          )}

          {/* 
            MESSAGES CONTAINER
          */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4 bg-[#fbfbfd]">
            {messages.map((msg) => {
              const isUser = msg.sender === "user"

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    isUser ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`group relative max-w-[85%] rounded-[1.25rem] px-4 py-3 shadow-xs transition-all ${
                      isUser
                        ? "bg-[#1d1d1f] text-white rounded-br-xs"
                        : "border border-black/[0.06] bg-white text-[#1d1d1f] rounded-tl-xs shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {/* Message Header (for AI messages) */}
                    {!isUser && (
                      <div className="mb-1.5 flex items-center justify-between gap-2 border-b border-black/[0.05] pb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#c91f26]">
                          Codix AI
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#86868b] hover:text-[#1d1d1f]"
                          title="Copy text"
                        >
                          {copiedId === msg.id ? "✓ Copied" : "Copy"}
                        </button>
                      </div>
                    )}

                    {/* Content */}
                    {isUser ? (
                      <p className="text-xs leading-relaxed font-normal">
                        {msg.text}
                      </p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}

                    {/* Action Buttons inside message */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-black/[0.05] pt-2.5">
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            type="button"
                            onClick={() => handleActionClick(act)}
                            className="rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] shadow-xs transition-all hover:border-[#c91f26] hover:bg-[#c91f26] hover:text-white active:scale-95"
                          >
                            {act.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Timestamp */}
                    <span
                      className={`mt-1.5 block text-[9px] ${
                        isUser
                          ? "text-white/60 text-right"
                          : "text-[#86868b]"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <div className="flex size-7 items-center justify-center rounded-xl bg-white border border-black/[0.06] shadow-xs">
                  <span className="size-2 rounded-full bg-[#c91f26] animate-ping" />
                </div>
                <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white px-3.5 py-2 shadow-xs">
                  <span className="size-1.5 rounded-full bg-[#c91f26] animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-1.5 rounded-full bg-[#c91f26] animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-1.5 rounded-full bg-[#c91f26] animate-bounce" />
                  <span className="ml-1 text-[11px] font-medium text-[#6e6e73]">
                    Codix AI is thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 
            QUICK SUGGESTION CHIPS BAR
          */}
          <div className="border-t border-black/[0.06] bg-white px-3 py-2">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
              <button
                type="button"
                onClick={() =>
                  handleSendMessage(
                    "What website packages do you offer and how much are they?",
                  )
                }
                className="shrink-0 rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] transition-colors hover:border-[#c91f26] hover:bg-[#c91f26]/5 hover:text-[#c91f26]"
              >
                💰 Packages & Pricing
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendMessage(
                    "Can you estimate a custom web application with React and Node.js?",
                  )
                }
                className="shrink-0 rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] transition-colors hover:border-[#c91f26] hover:bg-[#c91f26]/5 hover:text-[#c91f26]"
              >
                🚀 Custom Web App Scope
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendMessage(
                    "How do you guarantee 90+ PageSpeed and high SEO rank?",
                  )
                }
                className="shrink-0 rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] transition-colors hover:border-[#c91f26] hover:bg-[#c91f26]/5 hover:text-[#c91f26]"
              >
                ⚡ 90+ PageSpeed & SEO
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendMessage(
                    "Do you develop cross-platform mobile apps for iOS and Android?",
                  )
                }
                className="shrink-0 rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] transition-colors hover:border-[#c91f26] hover:bg-[#c91f26]/5 hover:text-[#c91f26]"
              >
                📱 Mobile Apps (iOS/Android)
              </button>
            </div>
          </div>

          {/* 
            INPUT AREA
          */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex items-center gap-2 border-t border-black/[0.06] bg-white p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Codix AI anything..."
              className="flex-1 rounded-full border border-black/[0.08] bg-[#f5f5f7] px-4 py-2.5 text-xs text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-black/5 transition"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              aria-label="Send message to AI"
              className="flex size-10 items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-sm transition-all hover:bg-black active:scale-95 disabled:pointer-events-none disabled:opacity-40"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* 
        ========================================================================
        FLOATING TRIGGER LAUNCHER BUTTON (BOTTOM-LEFT)
        ========================================================================
      */}
      <div
        className="group relative flex items-center justify-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Radar ping ring (when closed) */}
        {!isOpen && (
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#c91f26] opacity-35 animate-ping duration-1000"
            aria-hidden="true"
          />
        )}

        {/* Floating Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close AI chat" : "Open MapleCodix AI chat"}
          className={`relative flex size-14 items-center justify-center rounded-full text-white transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#c91f26] focus:ring-offset-2 active:scale-95 ${
            isOpen
              ? "bg-[#1d1d1f] shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:bg-black"
              : "bg-[#1d1d1f] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-105 hover:bg-black"
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
              {/* Sparkles / AI Robot Icon */}
              <svg
                className="size-6 fill-none stroke-current stroke-[2]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
              </svg>

              {/* Online status indicator dot with Canadian Maple red */}
              <span className="absolute right-0.5 top-0.5 flex size-3.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-[#c91f26]" />
              </span>
            </>
          )}
        </button>

        {/* Hover Tooltip (Shown only when drawer is closed and hovered) */}
        {!isOpen && (
          <div
            role="tooltip"
            className={`pointer-events-none absolute left-16 hidden whitespace-nowrap rounded-full border border-black/8 bg-[#1d1d1f] px-4 py-2 text-xs font-medium text-white shadow-xl transition-all duration-300 md:block ${
              isHovered
                ? "translate-x-0 opacity-100"
                : "-translate-x-2 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#c91f26]" />
              <span>Ask Codix AI · Studio Assistant</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIChatBot
