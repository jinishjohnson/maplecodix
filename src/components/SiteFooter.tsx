import { Link } from "react-router"
import { Logo } from "./Logo"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function SiteFooter() {
  const { footer } = siteData

  return (
    <footer className="bg-[#071d35] py-10 text-white">
      <ScrollReveal animation="fade-up" duration={600}>
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
            <Logo inverse />
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/65">
              {footer.links.map((link) =>
                "to" in link && link.to ? (
                  <Link
                    key={link.label}
                    className="transition hover:text-white"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    className="transition hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 text-sm text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {footer.copyright}
            </p>
            <p>{footer.tagline}</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}

export default SiteFooter
