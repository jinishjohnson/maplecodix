import { useState } from "react"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export type PackageCategory = "web" | "marketing"

export const packageCategories = siteData.packageCategories
export const packages = siteData.packages

export function Packages() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("web")
  const seo = siteData.seo.packages
  const customQuote = siteData.packagesCustomQuote

  const currentCategory = packageCategories[activeCategory]
  const currentPackages = currentCategory.packages

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <PageShell intro={siteData.pageIntros.packages}>
        <section
          id="pricing-tiers"
          aria-label="Packages and pricing options"
          className="py-16 md:py-24"
        >
          {/* Category Switcher Tabs */}
          <div className="mx-auto mb-14 max-w-4xl px-5 text-center md:px-8">
            <div className="inline-flex items-center rounded-2xl border border-black/10 bg-white p-1.5 shadow-md">
              <button
                type="button"
                id="switch-web-dev"
                onClick={() => setActiveCategory("web")}
                className={`flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-extrabold transition-all duration-300 md:px-8 md:text-base ${
                  activeCategory === "web"
                    ? "bg-[#071d35] text-white shadow-md ring-1 ring-[#071d35]"
                    : "text-[#526273] hover:text-[#071d35]"
                }`}
                aria-pressed={activeCategory === "web"}
              >
                <Icon
                  name="code"
                  className={`size-4 transition-colors ${
                    activeCategory === "web"
                      ? "text-[#e24a50]"
                      : "text-[#526273]"
                  }`}
                />
                <span>Web Development</span>
              </button>

              <button
                type="button"
                id="switch-marketing"
                onClick={() => setActiveCategory("marketing")}
                className={`flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-extrabold transition-all duration-300 md:px-8 md:text-base ${
                  activeCategory === "marketing"
                    ? "bg-[#c91f26] text-white shadow-md ring-1 ring-[#c91f26]"
                    : "text-[#526273] hover:text-[#071d35]"
                }`}
                aria-pressed={activeCategory === "marketing"}
              >
                <Icon
                  name="marketing"
                  className={`size-4 transition-colors ${
                    activeCategory === "marketing"
                      ? "text-white"
                      : "text-[#c91f26]"
                  }`}
                />
                <span>Marketing</span>
              </button>
            </div>

            {/* Subtitle Indicator */}
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#526273]">
              <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
              <span className="font-semibold text-[#071d35]">
                {currentCategory.label}:
              </span>
              <span>{currentCategory.subtitle}</span>
            </div>
          </div>

          {/* Package Grid */}
          <div
            key={activeCategory}
            className="mx-auto grid max-w-[90rem] gap-5 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-4 xl:px-10"
          >
            {currentPackages.map((item, index) => {
              const hasTone = "tone" in item && Boolean(item.tone)
              const isDark = "tone" in item && item.tone === "dark"
              const isBlue = "tone" in item && item.tone === "blue"
              const includesTitle =
                "includesTitle" in item ? item.includesTitle : undefined

              return (
                <ScrollReveal
                  key={`${activeCategory}-${item.name}`}
                  animation="fade-up"
                  delay={index * 80}
                  duration={650}
                >
                  <article
                    id={`package-${activeCategory}-${index + 1}`}
                    className={`relative flex h-full min-h-[42rem] flex-col rounded-xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                      isDark
                        ? "border-[#071d35] bg-[#071d35] text-white shadow-lg"
                        : isBlue
                          ? "border-[#164f86] bg-[#164f86] text-white shadow-lg"
                          : "border-black/8 bg-white shadow-sm"
                    }`}
                  >
                    <span
                      className={`w-fit rounded-lg px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] ${
                        hasTone
                          ? "bg-white/15 text-white"
                          : activeCategory === "marketing"
                            ? "bg-[#fbeaec] text-[#c91f26]"
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
                        hasTone ? "text-white/65" : "text-[#526273]"
                      }`}
                    >
                      {item.description}
                    </p>
                    <div className="mt-5 flex items-end gap-2">
                      <span
                        className={`pb-1 text-sm line-through ${
                          hasTone ? "text-white/45" : "text-black/35"
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
                        hasTone ? "border-white/15" : "border-black/10"
                      }`}
                    >
                      {includesTitle && (
                        <p className="mb-4 text-sm font-extrabold">
                          {includesTitle}
                        </p>
                      )}
                      <ul className="space-y-3.5">
                        {item.features.map((feature) => (
                          <li
                            className={`flex items-start gap-3 text-sm font-semibold leading-snug ${
                              hasTone ? "text-white/85" : "text-[#42566a]"
                            }`}
                            key={feature}
                          >
                            <span
                              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[0.65rem] ${
                                hasTone
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
                      id={`cta-${activeCategory}-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${
                        hasTone
                          ? "bg-white text-[#071d35] hover:bg-[#dceaf4]"
                          : "bg-[#071d35] text-white hover:bg-[#c91f26]"
                      }`}
                      href={`mailto:support@maplecodix.com?subject=${encodeURIComponent(`${item.name} (${currentCategory.label}) package enquiry`)}`}
                    >
                      Choose {item.name}{" "}
                      <Icon name="arrow" className="size-4" />
                    </a>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Custom Quote Routing Banner */}
          <div className="mx-auto mt-12 max-w-[90rem] px-5 md:px-8 xl:px-10">
            <ScrollReveal animation="zoom-in" duration={650}>
              <div
                id="custom-quote-card"
                className="relative overflow-hidden rounded-xl border border-[#155b96]/30 bg-[#eef5f9] p-7 shadow-[inset_5px_0_0_#155b96] transition duration-300 hover:shadow-lg md:flex md:items-center md:justify-between md:gap-10 md:p-9"
              >
                <div className="absolute -right-16 -top-20 size-56 rounded-full bg-[#d5e7f3]/60 blur-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-extrabold tracking-[-0.035em]">
                    {customQuote.title}
                  </h3>
                  <p className="mt-3 max-w-4xl leading-relaxed text-[#526273]">
                    {customQuote.description}
                  </p>
                </div>
                <a
                  id="custom-quote-cta"
                  className="relative mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#155b96] px-6 py-3.5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#071d35] md:mt-0"
                  href={`mailto:support@maplecodix.com?subject=${encodeURIComponent(`Custom ${currentCategory.label} quote request`)}`}
                >
                  {customQuote.buttonLabel}{" "}
                  <Icon name="arrow" className="size-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
          <p className="mx-auto mt-12 max-w-2xl px-5 text-center text-sm leading-relaxed text-[#526273]">
            {customQuote.disclaimer}
          </p>
        </section>
      </PageShell>
    </>
  )
}

export const PackagesPage = Packages
export default Packages
