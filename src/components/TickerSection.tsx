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
      <section className="border-y border-slate-800/80 bg-[#0c131f] py-5 overflow-hidden shadow-inner">
        <div className="ticker flex min-w-max items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
          {items.map((item, index) => (
            <span className="flex items-center gap-10" key={`${item}-${index}`}>
              <span>{item}</span>
              <Icon name="spark" className="size-3.5 text-[#ff4d4f]" />
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}

export default TickerSection
