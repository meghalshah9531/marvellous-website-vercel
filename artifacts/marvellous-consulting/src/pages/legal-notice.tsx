import { SEO } from "@/components/seo"
import { siteConfig } from "@/config/site"

export default function LegalNotice() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <SEO title="Legal Notice" description="Company contact details and trademark information for Marvellous Consulting." />
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-serif">
        <h1 className="text-4xl font-medium mb-8">Legal Notice</h1>
        <h2>{siteConfig.name}</h2>
        <address className="not-italic">
          <p>
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            Phone: <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.phone}</a>
          </p>
        </address>
        <h2>Trademarks and affiliation</h2>
        <p>{siteConfig.disclaimer.odoo}</p>
      </div>
    </div>
  )
}
