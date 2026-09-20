import { useEffect } from "react"
import { siteConfig } from "@/config/site"
import { useLocation } from "wouter"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  type?: "website" | "article" | "profile"
}

export function SEO({
  title,
  description = siteConfig.description,
  canonicalUrl,
  type = "website",
}: SEOProps) {
  const [location] = useLocation()
  
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const url = canonicalUrl || `${siteConfig.url}${location}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip
    }
  }

  useEffect(() => {
    document.title = siteTitle

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:title', siteTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:site_name', siteConfig.name)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', siteTitle)
    setMetaTag('name', 'twitter:description', description)

    let canonical = document.querySelector(`link[rel="canonical"]`)
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [siteTitle, description, type, url])

  return null
}
