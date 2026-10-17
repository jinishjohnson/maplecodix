import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export interface SocialChannel {
  id: string
  name: string
  handle: string
  url: string
  tagline: string
  description: string
  badge: string
  actionText: string
}

export function SocialSection() {
  const socialChannels = siteData.site.social as SocialChannel[]

  const renderIcon = (id: string) => {
    switch (id) {
      case "instagram":
        return (
          <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        )
      case "linkedin":
        return (
          <div className="grid size-12 place-items-center rounded-2xl bg-[#0A66C2] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </div>
        )
      case "twitter":
        return (
          <div className="grid size-12 place-items-center rounded-2xl bg-[#1d1d1f] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        )
      case "facebook":
        return (
          <div className="grid size-12 place-items-center rounded-2xl bg-[#1877F2] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="social" className="bg-[#fbfbfd] py-24 text-[#1d1d1f] border-t border-black/[0.04] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal animation="fade-up" duration={700}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                Community & Social Media
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
                Always connected.
                <br />
                Follow our craft.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150} duration={700}>
            <p className="max-w-sm text-base leading-relaxed text-[#6e6e73] md:text-lg">
              Explore real-world case studies, design token drops, dev changelogs, and Moncton studio life across our social channels.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Apple-Standard Social Media Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialChannels.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={index * 100}
              duration={700}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#c91f26]"
              >
                <div>
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    {renderIcon(item.id)}
                    <span className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6e6e73] transition-colors group-hover:bg-[#c91f26]/10 group-hover:text-[#c91f26]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Handle & Platform Title */}
                  <div className="mt-8">
                    <p className="font-mono text-xs font-semibold text-[#86868b]">
                      {item.handle}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#1d1d1f] transition-colors group-hover:text-[#c91f26]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#c91f26]">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-sm leading-relaxed text-[#6e6e73]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 flex items-center justify-between border-t border-black/[0.05] pt-4">
                  <span className="text-xs font-bold text-[#1d1d1f] transition-colors group-hover:text-[#c91f26]">
                    {item.actionText}
                  </span>
                  <span className="grid size-7 place-items-center rounded-full bg-[#f5f5f7] text-xs font-bold text-[#1d1d1f] transition-all duration-300 group-hover:bg-[#c91f26] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialSection
