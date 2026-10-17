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
      <div className="grid min-h-screen place-items-center bg-[#fbfbfd] px-5 text-center text-[#1d1d1f]">
        <ScrollReveal animation="zoom-in">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26]">
              {notFound.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-7xl">
              {notFound.heading}
            </h1>
            <p className="mt-4 text-base text-[#6e6e73] max-w-md mx-auto">
              The page you are looking for doesn't exist or has moved to a new URL.
            </p>
            <Link
              id="not-found-return-home"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c91f26] hover:scale-[1.02]"
              to={notFound.buttonTo}
            >
              <span>{notFound.buttonText}</span>
              <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}

export const NotFoundPage = NotFound
export default NotFound
