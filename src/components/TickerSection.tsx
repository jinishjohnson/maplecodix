import { Icon } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export const defaultTickerItems = siteData.ticker.items

export interface TickerSectionProps {
  items?: string[]
}

export function TickerSection({
  items = defaultTickerItems,
}: TickerSectionProps) {
  return (
    <ScrollReveal animation="fade" duration={700}>
      <section className="border-y border-black/10 bg-white py-6">
        <div className="ticker flex min-w-max items-center gap-8 text-sm font-extrabold uppercase tracking-[0.15em] text-[#263f57]">
          {items.map((item, index) => (
            <span className="flex items-center gap-8" key={`${item}-${index}`}>
              {item}
              <Icon name="spark" className="size-4 text-[#c91f26]" />
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}

export default TickerSection
