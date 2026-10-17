import { Link } from "react-router"
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
    <section id="services" className="bg-[#f5f5f7] py-24 text-[#1d1d1f] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        
        {/* Apple-Style Section Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <ScrollReveal animation="fade-up" duration={700}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c91f26]">
                {servicesSection.eyebrow}
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl">
                {servicesSection.heading}
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={150} duration={700}>
            <div className="lg:ml-auto lg:max-w-md">
              <p className="text-base leading-relaxed text-[#6e6e73] md:text-lg">
                {servicesSection.description}
              </p>
              <div className="mt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066cc] hover:text-[#0077ed] transition-colors group"
                >
                  <span>Explore all architectural capabilities</span>
                  <Icon
                    name="arrow"
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Apple-Standard White Cards Grid with Refined Ambient Hover Effect */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <ScrollReveal
              key={service.title}
              animation="fade-up"
              delay={index * 60}
              duration={650}
              className={index === 6 ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <Link
                to="/services"
                className={`service-card group relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-black/[0.09] hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.11)] sm:min-h-[21rem] md:p-9 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066cc]/40 ${
                  index === 6 ? "sm:min-h-0" : ""
                }`}
              >
                {/* Subtle top Apple-tint ambient gradient that brightens on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#fbfbfd] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Delicate highlight border overlay on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition-colors duration-500 group-hover:border-[#c91f26]/15" />

                <div className="relative z-10 flex h-full flex-col justify-between transition-all duration-300">
                  {/* Card Header: Icon & Number */}
                  <div className="flex items-start justify-between">
                    <span className="grid size-13 place-items-center rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] shadow-xs transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-[#c91f26] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(201,31,38,0.25)]">
                      <Icon name={service.icon} className="size-6 transition-transform duration-300 group-hover:scale-105" />
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#86868b] transition-colors duration-300 group-hover:text-[#1d1d1f]">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div
                    className={
                      index === 6
                        ? "lg:flex lg:items-end lg:justify-between lg:gap-10"
                        : ""
                    }
                  >
                    <div>
                      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#1d1d1f] transition-colors duration-300 group-hover:text-[#c91f26]">
                        {service.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed text-[#6e6e73] md:text-base ${
                          index === 6 ? "lg:max-w-xl" : ""
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066cc] transition-colors duration-300 group-hover:text-[#c91f26]">
                      <span>Explore details</span>
                      <Icon
                        name="arrow"
                        className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
