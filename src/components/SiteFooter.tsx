import { Link } from "react-router"
import { Logo } from "./Logo"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function SiteFooter() {
  const { footer, site } = siteData

  return (
    <footer className="border-t border-white/10 bg-[#071d35] text-white">
      <ScrollReveal animation="fade-up" duration={600}>
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-10">
          {/* Main Footer Grid */}
          <div className="grid gap-10 pb-12 border-b border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand & 24*7 Support Badge */}
            <div className="space-y-4">
              <Logo inverse />
              <p className="text-xs leading-relaxed text-white/70 max-w-xs">
                {site.tagline} We engineer digital impact with purpose, speed, and craft.
              </p>
              {/* 24*7 Status Indicator */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24*7 Technical Support Active</span>
              </div>
            </div>

            {/* Column 2: Direct 24*7 Contact & Helpline */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#c91f26]">
                24*7 Support & Helpline
              </p>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li>
                  <a
                    href="tel:+15063124135"
                    className="group flex items-center gap-2 transition hover:text-white"
                  >
                    <svg className="size-4 shrink-0 text-[#c91f26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>
                      Call: <span className="font-semibold text-white group-hover:underline">+1 (506) 312-4135</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/15063124135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 transition hover:text-white"
                  >
                    <svg className="size-4 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>
                      WhatsApp: <span className="font-semibold text-white group-hover:underline">+1 (506) 312-4135</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@maplecodix.com"
                    className="group flex items-center gap-2 transition hover:text-white"
                  >
                    <svg className="size-4 shrink-0 text-[#c91f26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="font-semibold text-white group-hover:underline">
                      support@maplecodix.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Headquarters / Location */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#c91f26]">
                Studio Headquarters
              </p>
              <div className="flex items-start gap-2 text-xs leading-relaxed text-white/80">
                <svg className="size-4 shrink-0 text-[#c91f26] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="not-italic">
                  <span className="block font-semibold text-white">20th Floor, 770 Main St</span>
                  <span className="block text-white/70">Moncton, NB E1C 1E7</span>
                  <span className="block text-white/70">Canada</span>
                </address>
              </div>
              <a
                href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c91f26] hover:underline"
              >
                <span>View on Google Maps</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 4: Quick Links & 24*7 Support Portal */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#c91f26]">
                Navigation & Support
              </p>
              <ul className="space-y-2 text-xs font-semibold text-white/70">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    {"to" in link && link.to ? (
                      <Link
                        className="transition hover:text-white flex items-center justify-between"
                        to={link.to}
                      >
                        <span>{link.label}</span>
                        {link.to === "/contact" && (
                          <span className="rounded bg-[#c91f26]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#ff6b6b]">
                            24*7
                          </span>
                        )}
                      </Link>
                    ) : (
                      <a
                        className="transition hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-white/45 sm:flex-row">
            <p>© {new Date().getFullYear()} {footer.copyright} Moncton, NB, Canada.</p>
            <p className="text-white/60">24*7 Dedicated Client & Infrastructure Support</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}

export default SiteFooter
