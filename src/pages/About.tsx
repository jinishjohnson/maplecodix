import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { PageShell } from "../components/PageShell"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export function About() {
  const seo = siteData.seo.about
  const about = siteData.aboutPage

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <PageShell intro={siteData.pageIntros.about}>
        <section
          id="company-beliefs"
          aria-label="MapleCodix beliefs and principles"
          className="py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            <ScrollReveal animation="fade-right" duration={750}>
              <div className="relative overflow-hidden rounded-xl border border-[#c8dbe8] bg-[#dceaf4] p-10 md:p-16">
                <Icon name="spark" className="size-16 text-[#c91f26]" />
                <p className="mt-24 text-4xl font-extrabold leading-tight tracking-[-0.05em] md:text-5xl">
                  {about.beliefQuote}
                </p>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal animation="fade-left" duration={750}>
                <p className="eyebrow text-[#c91f26]">{about.eyebrow}</p>
                <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] md:text-6xl">
                  {about.beliefHeading}
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-[#526273]">
                  {about.beliefDescription}
                </p>
              </ScrollReveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {about.beliefValues.map((value, index) => (
                  <ScrollReveal
                    key={value}
                    animation="fade-up"
                    delay={index * 90}
                    duration={600}
                  >
                    <div
                      id={`belief-value-${index + 1}`}
                      className="h-full rounded-lg border border-black/5 bg-white p-5 font-bold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="mr-3 text-[#c91f26]">0{index + 1}</span>
                      {value}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  )
}

export const AboutPage = About
export default About
