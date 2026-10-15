import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router"
import { Logo } from "./Logo"
import { Icon } from "./Icon"
import siteData from "../data/data.json"

export const navItems = siteData.navigation.items

export interface SiteHeaderProps {
  inverse?: boolean
}

export function SiteHeader({ inverse = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const { cta } = siteData.navigation

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
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-ai-chat"))
            }
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-bold transition hover:scale-[1.03] active:scale-[0.98] ${
              inverse
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-black/10 bg-white text-[#071d35] shadow-xs hover:border-[#c91f26] hover:text-[#c91f26]"
            }`}
          >
            <span className="flex size-2 rounded-full bg-[#c91f26] animate-pulse" />
            <span>Ask AI</span>
          </button>
          {cta.to ? (
            <Link
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] active:scale-[0.98] ${
                inverse
                  ? "bg-[#c91f26] hover:bg-[#a9161b] shadow-[0_4px_14px_rgba(201,31,38,0.3)]"
                  : "bg-[#071d35] hover:bg-[#c91f26] shadow-[0_4px_14px_rgba(7,29,53,0.15)]"
              }`}
              to={cta.to}
            >
              {cta.label} <Icon name="arrow" className="size-4" />
            </Link>
          ) : (
            <a
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] active:scale-[0.98] ${
                inverse
                  ? "bg-[#c91f26] hover:bg-[#a9161b] shadow-[0_4px_14px_rgba(201,31,38,0.3)]"
                  : "bg-[#071d35] hover:bg-[#c91f26] shadow-[0_4px_14px_rgba(7,29,53,0.15)]"
              }`}
              href={cta.href}
            >
              {cta.label} <Icon name="arrow" className="size-4" />
            </a>
          )}
        </div>
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
          <button
            type="button"
            onClick={() => {
              closeMenu()
              window.dispatchEvent(new CustomEvent("open-ai-chat"))
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#f8fafc] px-4 py-3 font-bold text-[#071d35] hover:border-[#c91f26] hover:text-[#c91f26]"
          >
            <span className="flex size-2 rounded-full bg-[#c91f26] animate-pulse" />
            <span>Ask Codix AI</span>
          </button>
          {cta.to ? (
            <Link
              className="mt-1 rounded-2xl bg-[#c91f26] px-4 py-3 font-bold text-white text-center"
              to={cta.to}
              onClick={closeMenu}
            >
              {cta.label}
            </Link>
          ) : (
            <a
              className="mt-1 rounded-2xl bg-[#c91f26] px-4 py-3 font-bold text-white text-center"
              href={cta.href}
            >
              {cta.label}
            </a>
          )}
        </nav>
      )}
    </header>
  )
}

export default SiteHeader
