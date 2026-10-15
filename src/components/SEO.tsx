import { useEffect } from "react"

export interface SEOProps {
  title: string
  description: string
  canonicalPath?: string
  ogType?: string
  keywords?: string
  siteUrl?: string
}

export function SEO({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  keywords,
  siteUrl = "https://maplecodix.com",
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
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
    setMeta("name", "robots", "index, follow")

    // OpenGraph
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", ogType)
    setMeta("property", "og:site_name", "MapleCodix")

    const fullUrl = `${siteUrl.replace(/\/$/, "")}${canonicalPath}`
    setMeta("property", "og:url", fullUrl)

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", description)

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']")
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", fullUrl)

    // JSON-LD Structured Data Schema for search engines
    let schemaScript = document.querySelector(
      "#seo-schema-jsonld",
    ) as HTMLScriptElement | null
    if (!schemaScript) {
      schemaScript = document.createElement("script")
      schemaScript.id = "seo-schema-jsonld"
      schemaScript.type = "application/ld+json"
      document.head.appendChild(schemaScript)
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: description,
      url: fullUrl,
      publisher: {
        "@type": "Organization",
        name: "MapleCodix",
        url: siteUrl,
        logo: `${siteUrl}/maplecodix-logo.jpg`,
      },
    }

    schemaScript.textContent = JSON.stringify(schemaData)
  }, [title, description, canonicalPath, ogType, keywords, siteUrl])

  return null
}

export default SEO
