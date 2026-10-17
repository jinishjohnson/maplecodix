import type React from "react"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { PageIntro, type PageIntroProps } from "./PageIntro"

export interface PageShellProps {
  children: React.ReactNode
  intro?: PageIntroProps
}

export function PageShell({ children, intro }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <SiteHeader />
      <main>
        {intro && <PageIntro {...intro} />}
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export default PageShell
