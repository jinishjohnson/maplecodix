import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { ScrollReveal } from "../components/ScrollReveal"

type IconName = "arrow" | "code" | "commerce" | "globe" | "marketing" | "mobile" | "pen" | "search" | "spark"

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    commerce: (
      <>
        <circle cx="9" cy="20" r="1" />
        <circle cx="19" cy="20" r="1" />
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    marketing: (
      <>
        <path d="m3 11 18-5v12L3 14v-3Z" />
        <path d="M11.6 16v4H7.5L6 14.7" />
      </>
    ),
    mobile: (
      <>
        <rect width="12" height="20" x="6" y="2" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    pen: (
      <>
        <path d="m15 5 4 4" />
        <path d="M13 7 4 16l-1 5 5-1 9-9a2.8 2.8 0 1 0-4-4Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    spark: (
      <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

export const services: {
  title: string
  description: string
  icon: IconName
  number: string
}[] = [
  {
    title: "Website Development",
    description:
      "Fast, responsive websites shaped around your brand and built to turn visits into real business.",
    icon: "globe",
    number: "01",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Frictionless online stores with intuitive shopping experiences and scalable foundations.",
    icon: "commerce",
    number: "02",
  },
  {
    title: "Web Applications",
    description:
      "Powerful, secure web products that make complex workflows feel refreshingly simple.",
    icon: "code",
    number: "03",
  },
  {
    title: "Mobile Applications",
    description:
      "Thoughtful iOS, Android, Flutter, Native, Hybrid, and React Native experiences.",
    icon: "mobile",
    number: "04",
  },
  {
    title: "SEO Services",
    description:
      "Technical and content-led search strategies designed for sustainable organic growth.",
    icon: "search",
    number: "05",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-informed campaigns that earn attention, build trust, and create measurable demand.",
    icon: "marketing",
    number: "06",
  },
  {
    title: "Creative Copywriting",
    description:
      "Clear, distinctive brand language that sounds human and inspires people to act.",
    icon: "pen",
    number: "07",
  },
]

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen, research, and turn your goals into a focused product strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the experience, content, and visual system around your audience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop with care, test thoroughly, and keep you close to the progress.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We launch, learn, and optimize for stronger performance over time.",
  },
]

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      className="group inline-flex items-center gap-3"
      to="/"
      aria-label="MapleCodix home"
    >
      <span className="relative size-11 overflow-hidden rounded-lg bg-white shadow-[0_6px_16px_rgba(5,38,73,0.14)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105">
        <img
          className="absolute left-1/2 top-[-0.55rem] w-[5.25rem] max-w-none -translate-x-1/2"
          src="/maplecodix-logo.jpg"
          alt=""
        />
      </span>
      <span
        className={`text-xl font-extrabold tracking-[-0.04em] transition ${
          inverse ? "text-white" : "text-[#071d35]"
        }`}
      >
        Maple<span className="text-[#c91f26]">Codix</span>
      </span>
    </Link>
  )
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
]

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerBg = isScrolled
    ? inverse
      ? "bg-[#071d35]/92 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
      : "bg-white/92 backdrop-blur-md border-b border-black/5 shadow-[0_4px_25px_rgba(7,29,53,0.06)]"
    : "bg-transparent"

  const paddingY = isScrolled ? "py-3.5 md:py-4" : "py-6"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 lg:px-10 ${paddingY}`}
      >
        <Logo inverse={inverse} />
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `nav-link ${inverse ? "nav-link-inverse" : ""} ${
                  isActive ? "nav-link-active" : ""
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a
          className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] active:scale-[0.98] md:inline-flex ${
            inverse
              ? "bg-[#c91f26] hover:bg-[#a9161b] shadow-[0_4px_14px_rgba(201,31,38,0.3)]"
              : "bg-[#071d35] hover:bg-[#c91f26] shadow-[0_4px_14px_rgba(7,29,53,0.15)]"
          }`}
          href="mailto:hello@maplecodix.com"
        >
          Start a project <Icon name="arrow" className="size-4" />
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/70 backdrop-blur-sm md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 bg-black transition ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-0.5 w-5 bg-black transition ${
                menuOpen ? "-translate-y-0.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav
          className="mx-5 mb-3 flex flex-col gap-1 rounded-3xl border border-black/5 bg-white p-3 shadow-2xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className="rounded-2xl px-4 py-3 font-semibold hover:bg-[#f4f1eb]"
              to={item.to}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="mt-1 rounded-2xl bg-[#c91f26] px-4 py-3 font-bold text-white text-center"
            href="mailto:hello@maplecodix.com"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  )
}

function Home() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#071d35]"
    >
      <SiteHeader />

      <main>
        {/* Hero Section with animated entry */}
        <section className="relative min-h-[820px] overflow-hidden pb-24 pt-36 lg:min-h-[760px] lg:pb-24 lg:pt-40">
          <div className="hero-grid absolute inset-0 opacity-55" />
          <div className="absolute -right-28 top-20 size-[34rem] rounded-full bg-[#cfe1f0]/35 blur-3xl" />
          <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-[#dbe9f2]/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <div>
              <ScrollReveal animation="fade-down" delay={60} duration={600}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
                  <span className="grid size-6 place-items-center rounded-full bg-[#fbeaec] text-[#c91f26]">
                    <Icon name="spark" className="size-4" />
                  </span>
                  Digital experiences, thoughtfully made
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={140} duration={700}>
                <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.5rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#071d35]">
                  We turn bold ideas into{" "}
                  <span className="text-[#c91f26]">digital impact.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={240} duration={700}>
                <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#526273] md:text-xl">
                  MapleCodix is a full-service digital studio creating
                  high-performing websites, apps, commerce, and growth
                  strategies for ambitious businesses.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={340} duration={700}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#c91f26] px-7 py-4 font-bold text-white shadow-[0_12px_24px_rgba(201,31,38,0.18)] transition hover:bg-[#a9161b] hover:shadow-[0_16px_30px_rgba(201,31,38,0.28)]"
                    href="mailto:hello@maplecodix.com"
                  >
                    Let&apos;s build something{" "}
                    <Icon
                      name="arrow"
                      className="size-5 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <Link
                    className="inline-flex items-center justify-center rounded-lg border border-[#071d35]/15 bg-white/70 px-7 py-4 font-bold backdrop-blur transition hover:border-[#071d35]/30 hover:bg-white hover:shadow-sm"
                    to="/services"
                  >
                    Explore our services
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-left" delay={180} duration={850}>
              <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0d2a47] shadow-[0_28px_70px_rgba(7,29,53,0.2)]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://images.unsplash.com/photo-1681949287382-052ea3954a51?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
                    alt="A creative team collaborating around a table in a sunlit office"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c91f26]">
                      One creative partner
                    </p>
                    <p className="mt-2 text-xl font-extrabold tracking-tight">
                      From first sketch to lasting growth.
                    </p>
                  </div>
                </div>

                {/* Micro-animated floating accents */}
                <div className="animate-float-slow absolute -left-7 top-16 hidden rounded-xl border border-[#071d35]/10 bg-white px-5 py-4 shadow-xl sm:block">
                  <p className="text-2xl font-extrabold text-[#071d35]">
                    7 core
                  </p>
                  <p className="text-sm font-semibold text-[#526273]">
                    digital services
                  </p>
                </div>
                <div className="animate-float-delayed absolute -right-5 top-36 grid size-16 place-items-center rounded-xl border-4 border-white bg-[#164f86] text-white shadow-xl sm:grid">
                  <Icon name="code" className="size-8" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Marquee Ticker */}
        <ScrollReveal animation="fade" duration={700}>
          <section className="border-y border-black/10 bg-white py-6">
            <div className="ticker flex min-w-max items-center gap-8 text-sm font-extrabold uppercase tracking-[0.15em] text-[#263f57]">
              {[
                "Strategy",
                "Web Development",
                "E-Commerce",
                "Mobile Apps",
                "SEO",
                "Digital Marketing",
                "Copywriting",
                "Strategy",
                "Web Development",
                "E-Commerce",
                "Mobile Apps",
              ].map((item, index) => (
                <span
                  className="flex items-center gap-8"
                  key={`${item}-${index}`}
                >
                  {item}
                  <Icon name="spark" className="size-4 text-[#c91f26]" />
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Services Section with Staggered Scroll Reveals */}
        <section
          id="services"
          className="bg-[#071d35] py-24 text-white md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <ScrollReveal animation="fade-up" duration={700}>
                <div>
                  <p className="eyebrow text-[#e24a50]">What we do</p>
                  <h2 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                    Everything you need to move forward.
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={150} duration={700}>
                <p className="max-w-lg text-lg leading-relaxed text-white/60 lg:ml-auto">
                  Strategy, technology, and creativity—working together under
                  one roof to build experiences that perform beautifully.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ScrollReveal
                  key={service.title}
                  animation="fade-up"
                  delay={index * 65}
                  duration={650}
                  className={index === 6 ? "lg:col-span-3" : ""}
                >
                  <article
                    className={`service-card group h-full min-h-72 bg-[#071d35] p-7 transition-all duration-300 hover:bg-[#0d2a47] hover:shadow-2xl md:p-9 ${
                      index === 6 ? "lg:min-h-0" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg bg-white/10 text-[#e24a50] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c91f26] group-hover:text-white">
                        <Icon name={service.icon} className="size-6" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.15em] text-white/30">
                        {service.number}
                      </span>
                    </div>
                    <div
                      className={
                        index === 6
                          ? "lg:flex lg:items-end lg:justify-between lg:gap-10"
                          : ""
                      }
                    >
                      <h3 className="mt-12 text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-[#fbeaec]">
                        {service.title}
                      </h3>
                      <p
                        className={`mt-4 leading-relaxed text-white/55 ${
                          index === 6 ? "lg:max-w-xl" : ""
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className="relative mx-auto max-w-md">
                <div className="aspect-square overflow-hidden rounded-2xl border border-[#071d35]/10 bg-white p-6 shadow-[0_24px_60px_rgba(7,29,53,0.1)] transition duration-500 hover:scale-[1.02]">
                  <img
                    className="h-full w-full object-contain"
                    src="/maplecodix-logo.jpg"
                    alt="MapleCodix company logo"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-xl bg-[#164f86] p-5 text-white shadow-xl">
                  <p className="text-3xl font-extrabold">Full-service</p>
                  <p className="mt-1 text-sm font-medium text-white/75">
                    One team. Zero handoffs.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal animation="fade-left" duration={750}>
                <p className="eyebrow text-[#c91f26]">Why MapleCodix</p>
                <h2 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] md:text-7xl">
                  Big thinking.
                  <br />
                  Practical delivery.
                </h2>
                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#526273]">
                  The best digital work happens when smart strategy, expressive
                  design, and solid engineering meet. We bring all three
                  together—so your idea stays clear from conversation to launch.
                </p>
              </ScrollReveal>

              <div className="mt-10 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
                {[
                  ["01", "Direct, honest collaboration"],
                  ["02", "Built around business outcomes"],
                  ["03", "Designed to evolve with you"],
                ].map(([number, text], idx) => (
                  <ScrollReveal
                    key={number}
                    animation="fade-up"
                    delay={idx * 110}
                    duration={650}
                  >
                    <div className="rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-[#c91f26]">
                        {number}
                      </p>
                      <p className="mt-2 font-bold leading-snug text-[#071d35]">
                        {text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process / Approach Section */}
        <section id="approach" className="bg-[#edf3f7] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <ScrollReveal animation="fade-up" duration={700}>
                <div>
                  <p className="eyebrow text-[#c91f26]">How we work</p>
                  <h2 className="mt-5 text-5xl font-extrabold tracking-[-0.055em] md:text-7xl">
                    Simple process.
                    <br />
                    Serious craft.
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={150} duration={700}>
                <p className="max-w-sm text-lg leading-relaxed text-[#526273]">
                  Clear milestones, open communication, and no black boxes along
                  the way.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  animation="fade-up"
                  delay={index * 110}
                  duration={700}
                >
                  <article
                    className={`h-full rounded-xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-8 ${
                      index === 1
                        ? "border-[#164f86] bg-[#164f86] text-white shadow-md"
                        : index === 3
                          ? "border-[#c8dbe8] bg-[#dceaf4]"
                          : "border-black/5 bg-white shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-extrabold ${
                          index === 1 ? "text-white/60" : "text-[#c91f26]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`size-2 rounded-full ${
                          index === 1 ? "bg-[#dceaf4]" : "bg-[#c91f26]"
                        }`}
                      />
                    </div>
                    <h3 className="mt-16 text-3xl font-extrabold tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed ${
                        index === 1 ? "text-white/70" : "text-[#526273]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Zoom-in animation */}
        <section className="bg-[#c91f26] py-24 text-white md:py-32">
          <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
            <ScrollReveal animation="zoom-in" duration={750}>
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-white/15 transition-transform duration-300 hover:scale-110">
                <Icon name="spark" className="size-7" />
              </span>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Have an idea in mind?
              </p>
              <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] md:text-8xl">
                Let&apos;s make it matter.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Tell us what you&apos;re building, fixing, or dreaming about.
                We&apos;ll help you find the smartest way forward.
              </p>
              <a
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#071d35] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#071d35]"
                href="mailto:hello@maplecodix.com"
              >
                hello@maplecodix.com{" "}
                <Icon
                  name="arrow"
                  className="size-5 transition-transform group-hover:translate-x-1"
                />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#071d35] py-10 text-white">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
              <Logo inverse />
              <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/65">
                <Link className="transition hover:text-white" to="/services">
                  Services
                </Link>
                <Link className="transition hover:text-white" to="/packages">
                  Packages
                </Link>
                <Link className="transition hover:text-white" to="/about">
                  About
                </Link>
                <Link className="transition hover:text-white" to="/careers">
                  Careers
                </Link>
                <a
                  className="transition hover:text-white"
                  href="mailto:hello@maplecodix.com"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 text-sm text-white/40 sm:flex-row">
              <p>
                © {new Date().getFullYear()} MapleCodix. All rights reserved.
              </p>
              <p>Ideas, designed and developed with purpose.</p>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  )
}

export default Home
