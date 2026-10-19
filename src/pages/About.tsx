import { useState, useEffect } from "react"
import { Link } from "react-router"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import { CustomQuoteModal } from "../components/CustomQuoteModal"
import { SocialSection } from "../components/SocialSection"
import siteData from "../data/data.json"

interface StoryChapter {
  id: string
  number: string
  tag: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-genesis",
    number: "01",
    tag: "The Genesis",
    title: "Why We Started",
    subtitle: "Tired of bloated handoffs and empty agency buzzwords",
    image: "/about/discovery-workshop.jpg",
    imageAlt: "MapleCodix discovery and product design workshop with tactile sketches and architecture blueprints",
  },
  {
    id: "chapter-design-system",
    number: "02",
    tag: "Design Language",
    title: "Crafting Every Token",
    subtitle: "Apple-level design systems, typography scales, and fluid tactile UI",
    image: "/about/design-tokens-craft.jpg",
    imageAlt: "Apple Studio Display and iPad Pro presenting sleek Figma design system tokens and micro-interactions",
  },
  {
    id: "chapter-code-craft",
    number: "03",
    tag: "Precision Code",
    title: "Code with Character",
    subtitle: "Surgical TypeScript, sub-200ms APIs, and zero template bloat",
    image: "/about/engineering-craft.jpg",
    imageAlt: "Senior software engineer at MapleCodix coding high performance React and TypeScript architecture",
  },
  {
    id: "chapter-collaboration",
    number: "04",
    tag: "Team Synergy",
    title: "Architecture on Glass",
    subtitle: "Engineers and strategists collaborating with real customer empathy",
    image: "/about/team-collaboration-whiteboard.jpg",
    imageAlt: "MapleCodix Canadian engineering team mapping system architecture and user flows on glass whiteboard",
  },
  {
    id: "chapter-studio",
    number: "05",
    tag: "Moncton HQ & 24*7",
    title: "Rooted in Atlantic Canada",
    subtitle: "24*7 around-the-clock technical operations desk with ~15m SLA",
    image: "/about/studio-moncton.jpg",
    imageAlt: "MapleCodix Canadian digital headquarters in Moncton overlooking the skyline",
  },
  {
    id: "chapter-launch",
    number: "06",
    tag: "Next Horizon",
    title: "Shipping What Matters",
    subtitle: "Partnering with ambitious founders to launch lasting digital products",
    image: "/about/studio-launch.jpg",
    imageAlt: "MapleCodix team celebrating launch of client mobile app and web platform",
  },
]

export function About() {
  const seo = siteData.seo.about
  const about = siteData.aboutPage
  const [activeChapter, setActiveChapter] = useState("chapter-genesis")
  const [isCustomQuoteOpen, setIsCustomQuoteOpen] = useState(false)

  // Track active chapter on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (const chapter of STORY_CHAPTERS) {
        const el = document.getElementById(chapter.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveChapter(chapter.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToChapter = (id: string) => {
    setActiveChapter(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <PageShell intro={siteData.pageIntros.about}>
        {/* APPLE-STANDARD STICKY STORY MODE CONTROLLER */}
        <section
          aria-label="Story mode chapter navigation"
          className="sticky top-20 z-30 border-b border-slate-200/90 bg-white/95 py-3 backdrop-blur-xl shadow-xs transition-all"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-xl bg-[#c91f26]/10 text-[#c91f26]">
                <Icon name="spark" className="size-3.5" />
              </span>
              <span className="hidden text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase sm:inline">
                Story Mode
              </span>
            </div>

            {/* Chapter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
              {STORY_CHAPTERS.map((ch) => {
                const isActive = activeChapter === ch.id
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToChapter(ch.id)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-3.5 ${isActive
                        ? "bg-[#0f172a] text-white shadow-sm ring-1 ring-[#0f172a]"
                        : "bg-[#f1f5f9] text-[#475569] border border-slate-200/60 hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                      }`}
                  >
                    <span
                      className={`font-mono text-[10px] font-semibold ${isActive ? "text-[#ff4d4f]" : "text-[#86868b]"
                        }`}
                    >
                      {ch.number}
                    </span>
                    <span className="whitespace-nowrap">{ch.tag}</span>
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsCustomQuoteOpen(true)}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#c91f26] transition-colors cursor-pointer"
            >
              <span>Build with Us</span>
              <Icon name="arrow" className="size-3" />
            </button>
          </div>
        </section>

        {/* 
          STORY HERO PROLOGUE (Apple Standard Typography)
        */}
        <section className="relative bg-gradient-to-b from-[#ffffff] to-[#f8fafc] py-16 text-center border-b border-slate-200/90 md:py-24">
          <div className="mx-auto max-w-4xl px-5">
            <ScrollReveal animation="fade-up">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                Our Narrative &amp; Craft
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-6xl md:text-7xl">
                The Story Behind the Screen.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73] md:text-xl">
                Every line of code is structured with deliberate purpose. Explore how our Canadian studio builds digital products with obsessive polish, human care, and zero compromise.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 
          CHAPTER 01: THE GENESIS 
        */}
        <section
          id="chapter-genesis"
          className="scroll-mt-36 py-20 bg-[#e9edf5] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 01 The Genesis"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Apple-Style Photo Card */}
              <ScrollReveal animation="fade-right" duration={750}>
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
                    <img
                      src="/about/discovery-workshop.jpg"
                      alt="MapleCodix discovery and product design workshop with tactile sketches and architecture blueprints"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Frosted Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#c91f26]">
                          Phase 01 · Tactical Workshop
                        </p>
                        <p className="font-semibold text-[#1d1d1f] text-sm sm:text-base">
                          Tactile UX &amp; Architecture Discovery
                        </p>
                      </div>
                      <span className="grid size-8 place-items-center rounded-xl bg-[#1d1d1f] text-white">
                        <Icon name="spark" className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Story Narrative */}
              <div>
                <ScrollReveal animation="fade-left" duration={750}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1 text-xs font-semibold text-[#1d1d1f]">
                    <span className="text-[#c91f26]">CHAPTER 01</span>
                    <span>·</span>
                    <span className="text-[#86868b]">THE GENESIS</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                    Tired of handoffs, bloated themes, and black boxes.
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                    Traditional digital agencies operate like fragmented assembly lines: a salesperson closes the deal, passes notes to an account manager, who forwards briefs to offshore subcontractors. By the time code is pushed, the original product vision has dissolved.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
                    MapleCodix was founded in Moncton, Canada to eliminate the middle layers. We unified digital strategy, user experience design, and modern full-stack engineering under one roof. When you speak with us, you speak directly with the people writing your TypeScript and choreographing your user journeys.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/[0.04] bg-[#f5f5f7] p-5 shadow-xs">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c91f26]">Zero Debt</p>
                      <p className="mt-1 font-semibold text-[#1d1d1f] text-sm">
                        No brittle WordPress plugins or slow template chains.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/[0.04] bg-[#f5f5f7] p-5 shadow-xs">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">Direct Craft</p>
                      <p className="mt-1 font-semibold text-[#1d1d1f] text-sm">
                        Direct Slack/WhatsApp access to senior technical leads.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 
          CHAPTER 02: THE DESIGN LANGUAGE & TOKENS (NEW FEATURED IMAGE)
        */}
        <section
          id="chapter-design-system"
          className="scroll-mt-36 bg-[#ffffff] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 02 The Design System"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Narrative Content */}
              <div className="order-2 lg:order-1">
                <ScrollReveal animation="fade-right" duration={750}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#1d1d1f] shadow-xs">
                    <span className="text-[#0066cc]">CHAPTER 02</span>
                    <span>·</span>
                    <span className="text-[#86868b]">DESIGN LANGUAGE</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                    Every pixel calibrated with Apple-grade discipline.
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                    Great software feels effortless because every micro-interaction has been carefully sculpted. We establish unified design systems with strict typographic scales, fluid spacing tokens, accessible contrast, and tactile spring physics.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
                    Whether on an Apple Studio Display, an iPhone in direct sunlight, or an Android tablet, your digital brand retains its crisp authority and undeniable polish.
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/[0.08] pt-6">
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-[#1d1d1f] sm:text-3xl">
                        8pt
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        Fluid Spacing Grid
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-[#0066cc] sm:text-3xl">
                        WCAG
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        AAA Accessibility
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-[#c91f26] sm:text-3xl">
                        60fps
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        Smooth Animations
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Apple Studio Display Image Card */}
              <ScrollReveal animation="fade-left" duration={750} className="order-1 lg:order-2">
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
                    <img
                      src="/about/design-tokens-craft.jpg"
                      alt="Apple Studio Display and iPad Pro presenting sleek Figma design system tokens and micro-interactions"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0066cc]">
                          System Architecture
                        </p>
                        <p className="font-semibold text-[#1d1d1f] text-sm sm:text-base">
                          Tokens, Scales &amp; Tactile States
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        100% Sync
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 
          CHAPTER 03: THE CRAFT & CODE STANDARDS 
        */}
        <section
          id="chapter-code-craft"
          className="scroll-mt-36 bg-[#e9edf5] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 03 The Craft"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Engineering Image Frame */}
              <ScrollReveal animation="fade-right" duration={750}>
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
                    <img
                      src="/about/engineering-craft.jpg"
                      alt="Senior software engineer at MapleCodix coding high performance React and TypeScript architecture"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#c91f26]">
                          Production Engineering
                        </p>
                        <p className="font-semibold text-[#1d1d1f] text-sm sm:text-base">
                          Zero-Downtime Deployments &amp; Typing
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        ● BUILD PASS
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Story Narrative */}
              <div>
                <ScrollReveal animation="fade-left" duration={750}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1 text-xs font-semibold text-[#1d1d1f]">
                    <span className="text-[#c91f26]">CHAPTER 03</span>
                    <span>·</span>
                    <span className="text-[#86868b]">PRECISION CODE</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                    High-performance code with a human point of view.
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                    We approach software architecture not as an assembly line, but as an artisanal discipline. Every component and API endpoint is engineered for sub-200ms latency, strict type contracts, and zero runtime bloat.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
                    Whether we are engineering a multi-tenant SaaS application with PostgreSQL read-replicas, an offline-first mobile app with SQLite sync, or a fast-converting e-commerce checkout with Apple Pay, we build with long-term resilience in mind.
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/[0.08] pt-6">
                    <div>
                      <p className="font-mono text-3xl font-bold text-[#c91f26]">
                        90+
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        Lighthouse Score
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-bold text-[#0066cc]">
                        &lt;200ms
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        API Response Time
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-bold text-emerald-600">
                        100%
                      </p>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        Strict TypeScript
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 
          CHAPTER 04: TEAM COLLABORATION & GLASS ARCHITECTURE (NEW FEATURED IMAGE)
        */}
        <section
          id="chapter-collaboration"
          className="scroll-mt-36 bg-[#ffffff] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 04 Team Collaboration"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Narrative Content */}
              <div className="order-2 lg:order-1">
                <ScrollReveal animation="fade-right" duration={750}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#1d1d1f] shadow-xs">
                    <span className="text-[#c91f26]">CHAPTER 04</span>
                    <span>·</span>
                    <span className="text-[#86868b]">COLLABORATIVE CRAFT</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                    Architecture mapped on glass with genuine empathy.
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                    Before we write a single schema migration or React hook, our team gathers in our Moncton studio to sketch data flows, API gateways, and user journeys directly on glass whiteboards.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
                    This rigorous whiteboard choreography catches edge-cases early, aligns engineering with real business goals, and ensures your application scales seamlessly from MVP to thousands of concurrent users.
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-black/[0.04] shadow-xs">
                      <span className="grid size-8 place-items-center rounded-xl bg-[#c91f26]/10 text-[#c91f26] font-bold text-xs">
                        01
                      </span>
                      <span className="text-sm font-semibold text-[#1d1d1f]">
                        Microservices &amp; API Gateway mapping
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-black/[0.04] shadow-xs">
                      <span className="grid size-8 place-items-center rounded-xl bg-[#0066cc]/10 text-[#0066cc] font-bold text-xs">
                        02
                      </span>
                      <span className="text-sm font-semibold text-[#1d1d1f]">
                        Zero-friction checkout &amp; onboarding user journeys
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-black/[0.04] shadow-xs">
                      <span className="grid size-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs">
                        03
                      </span>
                      <span className="text-sm font-semibold text-[#1d1d1f]">
                        Database indexing &amp; horizontal read-replica strategies
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Glass Whiteboard Image Card */}
              <ScrollReveal animation="fade-left" duration={750} className="order-1 lg:order-2">
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
                    <img
                      src="/about/team-collaboration-whiteboard.jpg"
                      alt="MapleCodix Canadian engineering team mapping system architecture and user flows on glass whiteboard"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#c91f26]">
                          🍁 Atlantic Canada
                        </p>
                        <p className="font-semibold text-[#1d1d1f] text-sm sm:text-base">
                          Moncton Strategy &amp; System Flow
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#86868b]">
                        Live Sprint
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 
          CHAPTER 05: THE MONCTON STUDIO & 24*7 COMMAND ENGINE 
        */}
        <section
          id="chapter-studio"
          className="scroll-mt-36 bg-[#e9edf5] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 05 The Studio"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            {/* Header */}
            <div className="text-center">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1 text-xs font-semibold text-[#1d1d1f]">
                  <span className="text-[#c91f26]">CHAPTER 05</span>
                  <span>·</span>
                  <span className="text-[#86868b]">CANADIAN HEADQUARTERS</span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                  Rooted in Moncton, building for the world.
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6e6e73] md:text-lg">
                  Atlantic Canada has an enduring tradition of genuine collaboration, straight talk, and resilient craft. That spirit is baked into every product sprint.
                </p>
              </ScrollReveal>
            </div>

            {/* Panoramic Studio Showcase Card with Apple Styling */}
            <div className="mt-12">
              <ScrollReveal animation="zoom-in" duration={800}>
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
                    <img
                      src="/about/studio-moncton.jpg"
                      alt="MapleCodix Canadian digital headquarters in Moncton overlooking the skyline"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Studio Information Overlay Card */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 rounded-2xl border border-white/20 bg-white/95 p-6 md:p-8 backdrop-blur-xl shadow-xl">
                      <div>
                        <span className="inline-block rounded-full bg-[#c91f26] px-3 py-1 text-[11px] font-bold text-white tracking-wide">
                          🍁 CANADIAN HEADQUARTERS
                        </span>
                        <h4 className="mt-3 text-2xl font-bold text-[#1d1d1f] md:text-3xl">
                          770 Main St, 20th Floor
                        </h4>
                        <p className="mt-1 text-sm font-medium text-[#6e6e73]">
                          Moncton, New Brunswick, E1C 1E7, Canada
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] px-4 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#86868b]">
                            SLA DESK
                          </p>
                          <p className="font-bold text-[#1d1d1f] text-sm">
                            24*7 Around the Clock
                          </p>
                        </div>
                        <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] px-4 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#86868b]">
                            DIRECT HOTLINE
                          </p>
                          <a
                            href="tel:+15063124135"
                            className="font-bold text-[#c91f26] text-sm hover:underline"
                          >
                            +1 (506) 312-4135
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Apple-Style Core Values Cards with Soft Shadow */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.beliefValues.map((value, index) => (
                <ScrollReveal
                  key={value}
                  animation="fade-up"
                  delay={index * 80}
                  duration={600}
                >
                  <div className="h-full rounded-[2rem] border border-black/[0.04] bg-[#f5f5f7] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                    <span className="inline-block rounded-full bg-white px-3 py-1 font-mono text-xs font-bold text-[#c91f26] shadow-xs">
                      0{index + 1}
                    </span>
                    <h5 className="mt-4 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                      {value}
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                      {index === 0 &&
                        "We deeply understand the business context and customer friction before writing a single line."}
                      {index === 1 &&
                        "No ornamental fluff. Every interaction, transition, and micro-copy serves a real purpose."}
                      {index === 2 &&
                        "Clear milestones, plain English, and direct communication without consulting doublespeak."}
                      {index === 3 &&
                        "Clean architectures and scalable design tokens that grow seamlessly alongside your ambition."}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 
          CHAPTER 06: THE LAUNCHPAD & PARTNERSHIP (APPLE STANDARD)
        */}
        <section
          id="chapter-launch"
          className="scroll-mt-36 bg-[#ffffff] py-20 text-[#1d1d1f] border-b border-slate-200/90 md:py-28"
          aria-label="Chapter 06 Next Horizon"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Image Frame */}
              <ScrollReveal animation="fade-right" duration={750}>
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/[0.05] bg-white p-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
                    <img
                      src="/about/studio-launch.jpg"
                      alt="MapleCodix team celebrating launch of client mobile app and web platform"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#c91f26]">
                          The Milestone
                        </p>
                        <p className="font-semibold text-[#1d1d1f] text-sm sm:text-base">
                          Real Products. Measurable Momentum.
                        </p>
                      </div>
                      <span className="rounded-full bg-[#0066cc] px-3 py-1 text-xs font-bold text-white shadow-xs">
                        40+ Launches
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Story Narrative & Action CTA */}
              <div>
                <ScrollReveal animation="fade-left" duration={750}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1 text-xs font-semibold text-[#1d1d1f]">
                    <span className="text-[#c91f26]">CHAPTER 06</span>
                    <span>·</span>
                    <span className="text-[#86868b]">YOUR NEXT CHAPTER</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl md:text-5xl">
                    Ready to build your story with us?
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[#6e6e73] md:text-lg">
                    Every meaningful product begins with an honest discovery conversation. We look forward to learning what you are envisioning, scoping the architectural blueprint, and shipping something you are proud to put in front of the world.
                  </p>

                  <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setIsCustomQuoteOpen(true)}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d1d1f] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c91f26] hover:shadow-lg cursor-pointer"
                    >
                      <span>Start Your Custom Scope</span>
                      <Icon name="arrow" className="size-4" />
                    </button>

                    <Link
                      to="/careers"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-[#1d1d1f] shadow-xs transition-all duration-300 hover:bg-[#f5f5f7] hover:border-black/20"
                    >
                      <span>Join Our Team (Careers)</span>
                    </Link>
                  </div>

                  {/* 24*7 Fast Track WhatsApp Badge */}
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-black/[0.06]">
                    <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
                    <p className="text-xs text-[#86868b]">
                      Need urgent scoping?{" "}
                      <a
                        href="https://wa.me/15063124135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#1d1d1f] underline hover:text-[#25D366]"
                      >
                        Connect on WhatsApp 24*7
                      </a>
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          APPLE-STYLE SOCIAL MEDIA & COMMUNITY SECTION
          ========================================================================
        */}
        {/* <SocialSection /> */}
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

export const AboutPage = About
export default About
