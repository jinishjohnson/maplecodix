import { Icon, type IconName } from "./Icon"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export interface ServiceItem {
  title: string
  description: string
  icon: IconName
  number: string
}

export const services: ServiceItem[] = siteData.servicesSection
  .services as ServiceItem[]

export interface ServicesSectionProps {
  items?: ServiceItem[]
}

export function ServicesSection({ items = services }: ServicesSectionProps) {
  const { servicesSection } = siteData

  return (
    <section id="services" className="bg-[#071d35] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <ScrollReveal animation="fade-up" duration={700}>
            <div>
              <p className="eyebrow text-[#e24a50]">
                {servicesSection.eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                {servicesSection.heading}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150} duration={700}>
            <p className="max-w-lg text-lg leading-relaxed text-white/60 lg:ml-auto">
              {servicesSection.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <ScrollReveal
              key={service.title}
              animation="fade-up"
              delay={index * 65}
              duration={650}
              className={index === 6 ? "lg:col-span-3" : ""}
            >
              <article
                className={`service-card group h-full min-h-72 bg-[#071d35] p-7 transition-all duration-300 hover:bg-[#0d2a47] hover:shadow-2xl md:p-9 ${
                  index === 6 ? "lg:min-h-0" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-lg bg-white/10 text-[#e24a50] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c91f26] group-hover:text-white">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.15em] text-white/30">
                    {service.number}
                  </span>
                </div>
                <div
                  className={
                    index === 6
                      ? "lg:flex lg:items-end lg:justify-between lg:gap-10"
                      : ""
                  }
                >
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-[#fbeaec]">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed text-white/55 ${
                      index === 6 ? "lg:max-w-xl" : ""
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
