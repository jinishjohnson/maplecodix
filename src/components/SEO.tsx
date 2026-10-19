import { useEffect } from "react"
import { ENV } from "../config/env"

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface SEOProps {
  title: string
  description: string
  canonicalPath?: string
  ogType?: string
  keywords?: string
  siteUrl?: string
  breadcrumbs?: BreadcrumbItem[]
  faqs?: FAQItem[]
  image?: string
}

export function SEO({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  keywords,
  siteUrl = ENV.siteUrl || "https://maplecodix.com",
  breadcrumbs,
  faqs,
  image = "/maplecodix-logo.jpg",
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Helper to set/update meta tag
    const setMeta = (attribute: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${attrValue}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attribute, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta("name", "description", description)
    if (keywords) {
      setMeta("name", "keywords", keywords)
    }
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")

    // OpenGraph
    const cleanSiteUrl = siteUrl.replace(/\/$/, "")
    const fullUrl = `${cleanSiteUrl}${canonicalPath}`
    const fullImageUrl = image.startsWith("http") ? image : `${cleanSiteUrl}${image}`

    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", ogType)
    setMeta("property", "og:site_name", "MapleCodix")
    setMeta("property", "og:url", fullUrl)
    setMeta("property", "og:image", fullImageUrl)

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", description)
    setMeta("name", "twitter:image", fullImageUrl)

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']")
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", fullUrl)

    // 3. Structured Data JSON-LD Schemas
    let schemaScript = document.querySelector(
      "#seo-schema-jsonld",
    ) as HTMLScriptElement | null
    if (!schemaScript) {
      schemaScript = document.createElement("script")
      schemaScript.id = "seo-schema-jsonld"
      schemaScript.type = "application/ld+json"
      document.head.appendChild(schemaScript)
    }

    // ProfessionalService & LocalBusiness Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "MapleCodix",
      alternateName: "MapleCodix Digital Studio",
      url: cleanSiteUrl,
      logo: `${cleanSiteUrl}/maplecodix-logo.jpg`,
      image: fullImageUrl,
      description: "Premier Canadian digital engineering studio specializing in high-performance websites, custom web apps, and growth architecture.",
      telephone: "+1-506-312-4135",
      email: "support@maplecodix.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "770 Main St, 20th Floor",
        addressLocality: "Moncton",
        addressRegion: "NB",
        postalCode: "E1C 1E7",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "46.0878",
        longitude: "-64.7782",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.linkedin.com/company/maplecodix",
        "https://twitter.com/maplecodix",
      ],
    }

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: description,
      url: fullUrl,
      publisher: {
        "@type": "Organization",
        name: "MapleCodix",
        url: cleanSiteUrl,
        logo: `${cleanSiteUrl}/maplecodix-logo.jpg`,
      },
    }

    const schemas: unknown[] = [organizationSchema, webpageSchema]

    // Optional BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: `${cleanSiteUrl}${crumb.path}`,
        })),
      }
      schemas.push(breadcrumbSchema)
    }

    // Optional FAQPage Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
      schemas.push(faqSchema)
    }

    schemaScript.textContent = JSON.stringify(schemas)
  }, [
    title,
    description,
    canonicalPath,
    ogType,
    keywords,
    siteUrl,
    breadcrumbs,
    faqs,
    image,
  ])

  return null
}

export default SEO
