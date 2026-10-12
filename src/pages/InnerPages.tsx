import { Link } from "react-router"
import { Icon, Logo, services, SiteHeader } from "./Home"
import { ScrollReveal } from "../components/ScrollReveal"

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071d35] pb-24 pt-40 text-white md:pb-32 md:pt-48">
      <div className="hero-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-32 top-16 size-[32rem] rounded-full bg-[#164f86]/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <ScrollReveal animation="fade-down" delay={60}>
          <p className="eyebrow text-[#e24a50]">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={140}>
          <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-7xl">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={220}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#071d35] py-10 text-white">
      <ScrollReveal animation="fade-up" duration={600}>
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
            <Logo inverse />
            <Link
              className="inline-flex items-center gap-2 font-bold text-[#e24a50] transition hover:text-white"
              to="/packages"
            >
              Explore our packages <Icon name="arrow" className="size-4" />
            </Link>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} MapleCodix. Ideas, designed and
            developed with purpose.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  )
}

function PageShell({
  children,
  intro,
}: {
  children: React.ReactNode
  intro: PageIntroProps
}) {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#071d35]">
      <SiteHeader inverse />
      <main>
        <PageIntro {...intro} />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export function ServicesPage() {
  return (
    <PageShell
      intro={{
        eyebrow: "Our capabilities",
        title: "One team for your whole digital journey.",
        description:
          "From a first idea to a growing digital business, we combine strategy, design, engineering, and marketing to create meaningful momentum.",
      }}
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 md:px-8 lg:px-10">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              animation="fade-up"
              delay={index * 60}
              duration={650}
            >
              <article className="group h-full rounded-xl border border-black/8 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#164f86]/30 hover:shadow-xl md:p-10">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-lg bg-[#fbeaec] text-[#c91f26] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c91f26] group-hover:text-white">
                    <Icon name={service.icon} className="size-7" />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.18em] text-black/25">
                    {service.number}
                  </span>
                </div>
                <h2 className="mt-12 text-3xl font-extrabold tracking-[-0.04em]">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-[#526273]">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

const packages = [
  {
    badge: "Entry Level",
    name: "Startup Website",
    description:
      "Ideal for super startup businesses requiring fast deployment.",
    originalPrice: "$399",
    price: "$99",
    features: [
      "3 Static Webpages",
      "Custom Design Layout",
      "2 Stock Images Included",
      "Content Writing Assistance",
      "Fully Responsive Design",
      "1 Custom Banner / Slider",
      "Interactive Feedback Form",
      "1 Year Free Hosting",
      "5 Business Days Delivery",
      "Satisfaction Guarantee",
    ],
  },
  {
    badge: "Popular Choice",
    name: "Standard Plan",
    description:
      "Ideal for new businesses or individuals needing online presence.",
    originalPrice: "$699",
    price: "$399",
    features: [
      "Up to 10 Static Pages",
      "Custom Responsive Design",
      "5 Custom Banners / Sliders",
      "Feedback & Contact Forms",
      "6 Stock Images Included",
      "Free Hosting for 1 Year",
      "Free Domain (Select Names)",
      "Basic SEO Setup",
      "Basic Speed Optimization",
      "Satisfaction Guarantee",
    ],
  },
  {
    badge: "Growth Tier",
    name: "Elite Package",
    description: "For growing businesses needing content control & functions.",
    originalPrice: "$1199",
    price: "$999",
    includesTitle: "All in Standard Plan Plus:",
    tone: "blue",
    features: [
      "Dynamic Pages (Up to 10)",
      "Dedicated Landing Page",
      "Appointment Booking System",
      "Advanced Mobile Tuning",
      "jQuery & CSS Effects",
      "Conversion Focused Layout",
      "Payment Gateway Integration",
      "Social Media Integration",
    ],
  },
  {
    badge: "Full Suite",
    name: "Elite Plus Marketing",
    description: "Complete design, dynamic custom code & full scale growth.",
    originalPrice: "$1699",
    price: "$1399",
    includesTitle: "All Elite Features Plus:",
    tone: "dark",
    features: [
      "Extra Pages On Request",
      "High-End UI & Custom Code",
      "Content Management System",
      "Special Hover Effects",
      "4 Conversion Social Posters",
      "Meta Ads Management Setup",
      "15 Reels Promotion Setup",
      "FB/IG/TikTok Content Plan",
      "Google Analytics Config",
    ],
  },
]

export function PackagesPage() {
  return (
    <PageShell
      intro={{
        eyebrow: "Packages",
        title: "A clear way to get started.",
        description:
          "Choose the website package that fits your stage—from a fast startup launch to a complete custom site and marketing growth system.",
      }}
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-5 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-4 xl:px-10">
          {packages.map((item, index) => {
            const emphasized = Boolean(item.tone)
            const dark = item.tone === "dark"
            return (
              <ScrollReveal
                key={item.name}
                animation="fade-up"
                delay={index * 80}
                duration={650}
              >
                <article
                  className={`relative flex h-full min-h-[42rem] flex-col rounded-xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    dark
                      ? "border-[#071d35] bg-[#071d35] text-white shadow-lg"
                      : item.tone === "blue"
                        ? "border-[#164f86] bg-[#164f86] text-white shadow-lg"
                        : "border-black/8 bg-white shadow-sm"
                  }`}
                >
                  <span
                    className={`w-fit rounded-lg px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] ${
                      emphasized
                        ? "bg-white/15 text-white"
                        : "bg-[#e8f1f8] text-[#155b96]"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h2 className="mt-6 text-2xl font-extrabold tracking-[-0.04em]">
                    {item.name}
                  </h2>
                  <p
                    className={`mt-3 min-h-16 text-sm leading-relaxed ${
                      emphasized ? "text-white/65" : "text-[#526273]"
                    }`}
                  >
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-end gap-2">
                    <span
                      className={`pb-1 text-sm line-through ${
                        emphasized ? "text-white/45" : "text-black/35"
                      }`}
                    >
                      {item.originalPrice}
                    </span>
                    <span className="text-4xl font-extrabold tracking-[-0.05em]">
                      {item.price}
                    </span>
                  </div>
                  <div
                    className={`mt-7 border-t pt-6 ${
                      emphasized ? "border-white/15" : "border-black/10"
                    }`}
                  >
                    {item.includesTitle && (
                      <p className="mb-4 text-sm font-extrabold">
                        {item.includesTitle}
                      </p>
                    )}
                    <ul className="space-y-3.5">
                      {item.features.map((feature) => (
                        <li
                          className={`flex items-start gap-3 text-sm font-semibold leading-snug ${
                            emphasized ? "text-white/85" : "text-[#42566a]"
                          }`}
                          key={feature}
                        >
                          <span
                            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[0.65rem] ${
                              emphasized
                                ? "bg-[#dceaf4] text-[#071d35]"
                                : "bg-[#fbeaec] text-[#c91f26]"
                            }`}
                          >
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${
                      emphasized
                        ? "bg-white text-[#071d35] hover:bg-[#dceaf4]"
                        : "bg-[#071d35] text-white hover:bg-[#c91f26]"
                    }`}
                    href={`mailto:hello@maplecodix.com?subject=${encodeURIComponent(`${item.name} package enquiry`)}`}
                  >
                    Choose {item.name} <Icon name="arrow" className="size-4" />
                  </a>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-[90rem] px-5 md:px-8 xl:px-10">
          <ScrollReveal animation="zoom-in" duration={650}>
            <div className="relative overflow-hidden rounded-xl border border-[#155b96]/30 bg-[#eef5f9] p-7 shadow-[inset_5px_0_0_#155b96] transition duration-300 hover:shadow-lg md:flex md:items-center md:justify-between md:gap-10 md:p-9">
              <div className="absolute -right-16 -top-20 size-56 rounded-full bg-[#d5e7f3]/60 blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold tracking-[-0.035em]">
                  Not seeing what you are looking for?
                </h3>
                <p className="mt-3 max-w-4xl leading-relaxed text-[#526273]">
                  Developers must route non-standard architectural requirements,
                  bespoke SaaS builds, or custom integrations directly to the
                  technical lead for custom pricing assessment.
                </p>
              </div>
              <a
                className="relative mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#155b96] px-6 py-3.5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#071d35] md:mt-0"
                href="mailto:hello@maplecodix.com?subject=Custom%20quote%20request"
              >
                Custom Quote Routing <Icon name="arrow" className="size-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
        <p className="mx-auto mt-12 max-w-2xl px-5 text-center text-sm leading-relaxed text-[#526273]">
          Every project is different. Package details are starting points, and
          final scope and pricing are confirmed after a discovery conversation.
        </p>
      </section>
    </PageShell>
  )
}

export function AboutPage() {
  return (
    <PageShell
      intro={{
        eyebrow: "About MapleCodix",
        title: "Technology with a human point of view.",
        description:
          "We are a multidisciplinary digital team focused on making complex things clear, useful, and valuable to the people who use them.",
      }}
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <ScrollReveal animation="fade-right" duration={750}>
            <div className="relative overflow-hidden rounded-xl border border-[#c8dbe8] bg-[#dceaf4] p-10 md:p-16">
              <Icon name="spark" className="size-16 text-[#c91f26]" />
              <p className="mt-24 text-4xl font-extrabold leading-tight tracking-[-0.05em] md:text-5xl">
                Good work starts with good questions.
              </p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal animation="fade-left" duration={750}>
              <p className="eyebrow text-[#c91f26]">Our belief</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] md:text-6xl">
                Clarity creates momentum.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-[#526273]">
                We keep strategy close to execution. That means fewer handoffs,
                better decisions, and a finished product that stays true to the
                original purpose.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Listen before we solve",
                "Make every detail useful",
                "Communicate without jargon",
                "Build for what comes next",
              ].map((value, index) => (
                <ScrollReveal
                  key={value}
                  animation="fade-up"
                  delay={index * 90}
                  duration={600}
                >
                  <div className="h-full rounded-lg border border-black/5 bg-white p-5 font-bold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="mr-3 text-[#c91f26]">0{index + 1}</span>
                    {value}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

const roles = [
  "Senior Full-Stack Developer",
  "Product Designer",
  "SEO & Content Strategist",
]

export function CareersPage() {
  return (
    <PageShell
      intro={{
        eyebrow: "Careers",
        title: "Do your best work with people who care.",
        description:
          "We are building a thoughtful, curious team that values excellent craft, direct communication, and a healthy way of working.",
      }}
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="mb-14 grid gap-5 sm:grid-cols-3">
            {[
              "Flexible by design",
              "Learning encouraged",
              "Impact over ego",
            ].map((value, index) => (
              <ScrollReveal
                key={value}
                animation="fade-up"
                delay={index * 100}
                duration={600}
              >
                <div
                  className={`h-full rounded-xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    index === 1
                      ? "border-[#c8dbe8] bg-[#dceaf4]"
                      : "border-black/5 bg-white"
                  }`}
                >
                  <span className="text-xs font-extrabold tracking-wider text-[#c91f26]">
                    0{index + 1}
                  </span>
                  <p className="mt-10 text-xl font-extrabold tracking-tight">
                    {value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up">
            <div className="flex items-end justify-between border-b border-black/10 pb-6">
              <div>
                <p className="eyebrow text-[#c91f26]">Open positions</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                  Find your next challenge.
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div>
            {roles.map((role, index) => (
              <ScrollReveal
                key={role}
                animation="fade-up"
                delay={index * 90}
                duration={650}
              >
                <a
                  className="group flex items-center justify-between border-b border-black/10 py-7 transition duration-300 hover:px-2"
                  href={`mailto:careers@maplecodix.com?subject=${encodeURIComponent(`Application: ${role}`)}`}
                >
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight md:text-2xl transition-colors group-hover:text-[#c91f26]">
                      {role}
                    </h3>
                    <p className="mt-2 text-sm text-[#526273]">
                      Remote-friendly · Full time
                    </p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-[#c91f26] shadow-sm transition group-hover:bg-[#c91f26] group-hover:text-white">
                    <Icon name="arrow" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#071d35] px-5 text-center text-white">
      <ScrollReveal animation="zoom-in">
        <div>
          <p className="eyebrow text-[#e24a50]">404</p>
          <h1 className="mt-5 text-6xl font-extrabold tracking-[-0.06em]">
            This page took a detour.
          </h1>
          <Link
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c91f26] px-7 py-4 font-bold transition hover:bg-[#a9161b]"
            to="/"
          >
            Back to home <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default ServicesPage
