import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export const roles = siteData.careersPage.roles

export function Careers() {
  const seo = siteData.careersPage ? siteData.seo.careers : { title: "Careers | MapleCodix", description: "Careers at MapleCodix" }
  const careers = siteData.careersPage

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <PageShell intro={siteData.pageIntros.careers}>
        <section
          id="careers-content"
          aria-label="MapleCodix career opportunities"
          className="bg-[#f5f5f7] py-20 text-[#1d1d1f] md:py-28"
        >
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            {/* Apple-Style Values Cards */}
            <div className="mb-16 grid gap-6 sm:grid-cols-3">
              {careers.values.map((value, index) => (
                <ScrollReveal
                  key={value}
                  animation="fade-up"
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    id={`career-value-${index + 1}`}
                    className="h-full rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.09)]"
                  >
                    <span className="font-mono text-xs font-bold tracking-wider text-[#c91f26]">
                      0{index + 1}
                    </span>
                    <p className="mt-8 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                      {value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Section Header */}
            <ScrollReveal animation="fade-up">
              <div className="border-b border-black/[0.06] pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
                  {careers.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
                  {careers.heading}
                </h2>
              </div>
            </ScrollReveal>

            {/* Apple-Style Role Rows */}
            <div id="open-positions-list" className="mt-6 space-y-4">
              {roles.map((role, index) => (
                <ScrollReveal
                  key={role}
                  animation="fade-up"
                  delay={index * 90}
                  duration={650}
                >
                  <a
                    id={`job-role-${index + 1}`}
                    className="group flex items-center justify-between rounded-2xl border border-black/[0.05] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.09] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] md:p-7"
                    href={`mailto:careers@maplecodix.com?subject=${encodeURIComponent(`Application: ${role}`)}`}
                  >
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] transition-colors group-hover:text-[#c91f26] md:text-2xl">
                        {role}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-[#86868b]">
                        {careers.roleType} · Moncton Studio or Remote
                      </p>
                    </div>
                    
                    <span className="grid size-10 place-items-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] shadow-xs transition-all duration-300 group-hover:bg-[#c91f26] group-hover:text-white group-hover:scale-105">
                      <Icon name="arrow" className="size-4" />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  )
}

export const CareersPage = Careers
export default Careers
