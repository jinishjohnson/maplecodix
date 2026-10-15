import { Link } from "react-router"
import { Icon } from "../components/Icon"
import { ScrollReveal } from "../components/ScrollReveal"
import { SEO } from "../components/SEO"
import siteData from "../data/data.json"

export function NotFound() {
  const notFound = siteData.notFoundPage
  const seo = siteData.seo.notFound

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <div className="grid min-h-screen place-items-center bg-[#071d35] px-5 text-center text-white">
        <ScrollReveal animation="zoom-in">
          <div>
            <p className="eyebrow text-[#e24a50]">{notFound.eyebrow}</p>
            <h1 className="mt-5 text-6xl font-extrabold tracking-[-0.06em]">
              {notFound.heading}
            </h1>
            <Link
              id="not-found-return-home"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c91f26] px-7 py-4 font-bold transition hover:bg-[#a9161b]"
              to={notFound.buttonTo}
            >
              {notFound.buttonText} <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}

export const NotFoundPage = NotFound
export default NotFound
