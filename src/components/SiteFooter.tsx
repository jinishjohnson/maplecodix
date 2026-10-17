import { Link } from "react-router"
import { Logo } from "./Logo"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export function SiteFooter() {
  const { footer, site } = siteData

  return (
    <footer className="border-t border-white/10 bg-[#1d1d1f] text-white">
      <ScrollReveal animation="fade-up" duration={600}>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
          {/* Main Footer Grid */}
          <div className="grid gap-10 pb-14 border-b border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand & 24*7 Status Badge */}
            <div className="space-y-4">
              <Logo inverse />
              <p className="text-xs leading-relaxed text-[#86868b] max-w-xs">
                {site.tagline} We engineer digital products with Apple-grade discipline, human care, and lasting craft.
              </p>
              {/* 24*7 Status Indicator */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24*7 Engineering Active</span>
              </div>

              {/* Social Media Channels Row */}
              <div className="pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  Connect on Social
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com/maplecodix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-8 place-items-center rounded-full bg-white/5 text-[#86868b] transition hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white"
                    aria-label="MapleCodix on Instagram"
                    title="Instagram"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/maplecodix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-8 place-items-center rounded-full bg-white/5 text-[#86868b] transition hover:bg-white hover:text-black"
                    aria-label="MapleCodix on X (Twitter)"
                    title="X (Twitter)"
                  >
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/maplecodix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-8 place-items-center rounded-full bg-white/5 text-[#86868b] transition hover:bg-[#0A66C2] hover:text-white"
                    aria-label="MapleCodix on LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/maplecodix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-8 place-items-center rounded-full bg-white/5 text-[#86868b] transition hover:bg-[#1877F2] hover:text-white"
                    aria-label="MapleCodix on Facebook"
                    title="Facebook"
                  >
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Direct 24*7 Contact & Helpline */}
            <div className="space-y-3.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff4d4f]">
                24*7 Support Desk
              </p>
              <ul className="space-y-3 text-xs text-[#86868b]">
                <li>
                  <a
                    href="tel:+15063124135"
                    className="group flex items-center gap-2 transition hover:text-white"
                  >
                    <svg className="size-4 shrink-0 text-[#ff4d4f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    <svg className="size-4 shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
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
                    <svg className="size-4 shrink-0 text-[#ff4d4f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

            {/* Column 3: Canadian Headquarters */}
            <div className="space-y-3.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff4d4f]">
                Studio Headquarters
              </p>
              <div className="flex items-start gap-2.5 text-xs leading-relaxed text-[#86868b]">
                <svg className="size-4 shrink-0 text-[#ff4d4f] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="not-italic">
                  <span className="block font-semibold text-white">770 Main St, 20th Floor</span>
                  <span className="block">Moncton, NB E1C 1E7, Canada</span>
                </address>
              </div>
              <a
                href="https://maps.google.com/?q=770+Main+St,+Moncton,+NB+E1C+1E7,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff4d4f] hover:underline"
              >
                <span>Directions on Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-3.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff4d4f]">
                Navigation
              </p>
              <ul className="space-y-2.5 text-xs text-[#86868b]">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    {"to" in link && link.to ? (
                      <Link
                        className="transition hover:text-white flex items-center justify-between"
                        to={link.to}
                      >
                        <span>{link.label}</span>
                        {link.to === "/contact" && (
                          <span className="rounded-full bg-[#c91f26]/20 px-2 py-0.5 text-[10px] font-bold text-[#ff4d4f]">
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
          <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-[#86868b] sm:flex-row">
            <p>© {new Date().getFullYear()} {footer.copyright} Moncton, NB, Canada.</p>
            <p className="text-[#86868b]">Engineered with Apple standard design &amp; Canadian craft</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}

export default SiteFooter
