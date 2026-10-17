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
      <section className="border-y border-black/[0.05] bg-[#f5f5f7] py-5 overflow-hidden">
        <div className="ticker flex min-w-max items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d1d1f]">
          {items.map((item, index) => (
            <span className="flex items-center gap-10" key={`${item}-${index}`}>
              <span>{item}</span>
              <Icon name="spark" className="size-3.5 text-[#c91f26]" />
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}

export default TickerSection
