import type React from "react"
import { Link } from "react-router"
import { SiteHeader } from "./SiteHeader"
import { Logo } from "./Logo"
import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import { PageIntro, type PageIntroProps } from "./PageIntro"
import siteData from "../data/data.json"

export interface PageShellProps {
  children: React.ReactNode
  intro?: PageIntroProps
}

export function PageShell({ children, intro }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#071d35]">
      <SiteHeader inverse />
      <main>
        {intro && <PageIntro {...intro} />}
        {children}
      </main>
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
              © {new Date().getFullYear()} {siteData.footer.copyright}{" "}
              {siteData.footer.tagline}
            </p>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  )
}

export default PageShell
