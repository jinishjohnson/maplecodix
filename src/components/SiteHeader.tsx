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
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/[0.06] bg-white/80 py-3.5 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "border-b border-transparent bg-white/60 py-5 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Logo inverse={false} />

        {/* Desktop Navigation Links (Apple Style) */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `text-xs font-medium tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[#c91f26]"
                    : "text-[#1d1d1f] hover:text-[#c91f26]"
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-2.5 md:flex">
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-ai-chat"))
            }
            className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3.5 py-1.5 text-xs font-medium text-[#1d1d1f] transition hover:bg-[#e8e8ed]"
          >
            <span className="flex size-1.5 rounded-full bg-[#c91f26] animate-pulse" />
            <span>Ask AI</span>
          </button>

          {cta.to ? (
            <Link
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#c91f26] hover:scale-[1.02]"
              to={cta.to}
            >
              <span>{cta.label}</span>
              <Icon name="arrow" className="size-3" />
            </Link>
          ) : (
            <a
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#c91f26] hover:scale-[1.02]"
              href={cta.href}
            >
              <span>{cta.label}</span>
              <Icon name="arrow" className="size-3" />
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/80 backdrop-blur-md md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-4 bg-[#1d1d1f] transition-all duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0.5 left-0 h-0.5 w-4 bg-[#1d1d1f] transition-all duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown Card */}
      {menuOpen && (
        <nav
          className="mx-5 mt-2 flex flex-col gap-1 rounded-[2rem] border border-black/[0.06] bg-white/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
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
            className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#f5f5f7] px-4 py-3 text-xs font-semibold text-[#1d1d1f] hover:bg-[#e8e8ed]"
          >
            <span className="flex size-1.5 rounded-full bg-[#c91f26] animate-pulse" />
            <span>Ask Codix AI</span>
          </button>
          {cta.to ? (
            <Link
              className="mt-1 rounded-full bg-[#1d1d1f] px-4 py-3 text-center text-xs font-semibold text-white hover:bg-[#c91f26] transition-colors"
              to={cta.to}
              onClick={closeMenu}
            >
              {cta.label}
            </Link>
          ) : (
            <a
              className="mt-1 rounded-full bg-[#1d1d1f] px-4 py-3 text-center text-xs font-semibold text-white hover:bg-[#c91f26] transition-colors"
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
