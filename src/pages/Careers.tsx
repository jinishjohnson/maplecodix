import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export const roles = siteData.careersPage.roles

export function Careers() {
  const seo = siteData.seo.careers
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
          className="py-20 md:py-28"
        >
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="mb-14 grid gap-5 sm:grid-cols-3">
              {careers.values.map((value, index) => (
                <ScrollReveal
                  key={value}
                  animation="fade-up"
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    id={`career-value-${index + 1}`}
                    className={`h-full rounded-xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                      index === 1
                        ? "border-[#c8dbe8] bg-[#dceaf4]"
                        : "border-black/5 bg-white"
                    }`}
                  >
                    <span className="text-xs font-extrabold tracking-wider text-[#c91f26]">
                      0{index + 1}
                    </span>
                    <p className="mt-10 text-xl font-extrabold tracking-tight">
                      {value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up">
              <div className="flex items-end justify-between border-b border-black/10 pb-6">
                <div>
                  <p className="eyebrow text-[#c91f26]">{careers.eyebrow}</p>
                  <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    {careers.heading}
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div id="open-positions-list" className="mt-4">
              {roles.map((role, index) => (
                <ScrollReveal
                  key={role}
                  animation="fade-up"
                  delay={index * 90}
                  duration={650}
                >
                  <a
                    id={`job-role-${index + 1}`}
                    className="group flex items-center justify-between border-b border-black/10 py-7 transition duration-300 hover:px-2"
                    href={`mailto:careers@maplecodix.com?subject=${encodeURIComponent(`Application: ${role}`)}`}
                  >
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight md:text-2xl transition-colors group-hover:text-[#c91f26]">
                        {role}
                      </h3>
                      <p className="mt-2 text-sm text-[#526273]">
                        {careers.roleType}
                      </p>
                    </div>
                    <span className="grid size-11 place-items-center rounded-full bg-white text-[#c91f26] shadow-sm transition group-hover:bg-[#c91f26] group-hover:text-white">
                      <Icon name="arrow" />
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
