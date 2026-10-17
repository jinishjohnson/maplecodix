import { useState } from "react"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import { CustomQuoteModal } from "../components/CustomQuoteModal"
import siteData from "../data/data.json"

export type PackageCategory = "web" | "webapp" | "mobile" | "marketing"

export const packageCategories = siteData.packageCategories
export const packages = siteData.packages

interface CategoryTabConfig {
  id: PackageCategory
  label: string
  icon: "code" | "globe" | "mobile" | "marketing"
}

const CATEGORY_TABS: CategoryTabConfig[] = [
  {
    id: "web",
    label: "Websites",
    icon: "code",
  },
  {
    id: "webapp",
    label: "Web Applications",
    icon: "globe",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: "mobile",
  },
  {
    id: "marketing",
    label: "Marketing & Growth",
    icon: "marketing",
  },
]

export function Packages() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("web")
  const [isCustomQuoteModalOpen, setIsCustomQuoteModalOpen] = useState(false)
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
          className="bg-[#f5f5f7] py-20 text-[#1d1d1f] md:py-28"
        >
          {/* Apple-Style Segmented Tab Controller */}
          <div className="mx-auto mb-16 max-w-5xl px-5 text-center md:px-8">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-black/[0.06] bg-white p-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    id={`switch-${tab.id}`}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 md:text-sm cursor-pointer ${
                      isActive
                        ? "bg-[#1d1d1f] text-white shadow-sm ring-1 ring-[#1d1d1f]"
                        : "text-[#6e6e73] hover:text-[#1d1d1f]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon
                      name={tab.icon}
                      className={`size-4 transition-colors ${
                        isActive ? "text-[#ff4d4f]" : "text-[#86868b]"
                      }`}
                    />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Subtitle Indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#6e6e73]">
              <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
              <span className="font-semibold text-[#1d1d1f]">
                {currentCategory.label}:
              </span>
              <span>{currentCategory.subtitle}</span>
            </div>
          </div>

          {/* Apple-Standard Package Cards Grid */}
          <div
            key={activeCategory}
            className="mx-auto grid max-w-[90rem] gap-6 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-4 xl:px-10"
          >
            {currentPackages.map((item, index) => {
              const hasTone = "tone" in item && Boolean(item.tone)
              const isDark = "tone" in item && (item.tone === "dark" || item.tone === "blue")
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
                    className={`group relative flex h-full min-h-[42rem] flex-col justify-between rounded-[2rem] border p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 ${
                      isDark
                        ? "border-white/10 bg-[#1d1d1f] text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.3)]"
                        : "border-black/[0.05] bg-white text-[#1d1d1f] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-black/[0.09] hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]"
                    }`}
                  >
                    <div>
                      {/* Pill Badge */}
                      <span
                        className={`inline-block rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                          isDark
                            ? "bg-white/15 text-white"
                            : "bg-[#f5f5f7] text-[#1d1d1f]"
                        }`}
                      >
                        {item.badge}
                      </span>

                      {/* Package Name */}
                      <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                        {item.name}
                      </h2>

                      {/* Description */}
                      <p
                        className={`mt-3 min-h-14 text-sm leading-relaxed ${
                          isDark ? "text-[#86868b]" : "text-[#6e6e73]"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Price Tag */}
                      <div className="mt-6 flex items-baseline gap-2">
                        <span
                          className={`text-sm line-through ${
                            isDark ? "text-white/40" : "text-[#86868b]"
                          }`}
                        >
                          {item.originalPrice}
                        </span>
                        <span className="text-4xl font-bold tracking-tight md:text-5xl">
                          {item.price}
                        </span>
                      </div>

                      {/* Inclusions */}
                      <div
                        className={`mt-8 border-t pt-6 ${
                          isDark ? "border-white/10" : "border-black/[0.06]"
                        }`}
                      >
                        {includesTitle && (
                          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#c91f26]">
                            {includesTitle}
                          </p>
                        )}
                        <ul className="space-y-3">
                          {item.features.map((feature) => (
                            <li
                              className={`flex items-start gap-2.5 text-xs font-medium leading-relaxed ${
                                isDark ? "text-white/90" : "text-[#1d1d1f]"
                              }`}
                              key={feature}
                            >
                              <span
                                className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
                                  isDark
                                    ? "bg-white/15 text-white"
                                    : "bg-[#f5f5f7] text-[#c91f26]"
                                }`}
                              >
                                ✓
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apple-Style CTA Button */}
                    <div className="mt-8 pt-6 border-t border-black/[0.04]">
                      <a
                        id={`cta-${activeCategory}-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] cursor-pointer ${
                          isDark
                            ? "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] shadow-md"
                            : "bg-[#1d1d1f] text-white hover:bg-[#c91f26] shadow-sm"
                        }`}
                        href={`mailto:support@maplecodix.com?subject=${encodeURIComponent(`${item.name} (${currentCategory.label}) package enquiry`)}`}
                      >
                        <span>Choose {item.name}</span>
                        <Icon name="arrow" className="size-3.5" />
                      </a>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Apple-Style Custom Quote Banner */}
          <div className="mx-auto mt-16 max-w-[90rem] px-5 md:px-8 xl:px-10">
            <ScrollReveal animation="zoom-in" duration={650}>
              <div
                id="custom-quote-card"
                className="relative overflow-hidden rounded-[2.25rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:flex md:items-center md:justify-between md:gap-10 md:p-10"
              >
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                    Tailored Scoping
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-3xl">
                    {customQuote.title}
                  </h3>
                  <p className="mt-3 max-w-4xl leading-relaxed text-[#6e6e73]">
                    {customQuote.description}
                  </p>
                </div>
                
                <button
                  type="button"
                  id="custom-quote-cta"
                  onClick={() => setIsCustomQuoteModalOpen(true)}
                  className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-3.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c91f26] hover:scale-[1.02] cursor-pointer md:mt-0"
                >
                  <span>{customQuote.buttonLabel}</span>
                  <Icon name="arrow" className="size-3.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          <p className="mx-auto mt-12 max-w-2xl px-5 text-center text-xs leading-relaxed text-[#86868b]">
            {customQuote.disclaimer}
          </p>
        </section>
      </PageShell>

      {/* Dedicated Custom Quote Routing Popup Screen */}
      <CustomQuoteModal
        isOpen={isCustomQuoteModalOpen}
        onClose={() => setIsCustomQuoteModalOpen(false)}
        initialCategory={activeCategory}
      />
    </>
  )
}

export const PackagesPage = Packages
export default Packages
