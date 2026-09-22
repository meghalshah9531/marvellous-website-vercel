import { Link } from "wouter"
import { siteConfig } from "@/config/site"
import { Phone, Mail, Linkedin } from "lucide-react"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/#erp-delivery", label: "ERP Consulting" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Discuss Your Project" },
]

const legalLinks = [
  { href: "/legal-notice", label: "Legal Notice" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Website Terms" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border pt-8 pb-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-6">
          <div className="min-w-0 space-y-2">
            <Link href="/" aria-label="Marvellous Consulting homepage" className="inline-flex items-center gap-3">
              <img src="/images/logo-mark.png" alt="" className="h-8 w-8 shrink-0 object-contain" />
              <span className="font-serif font-bold text-base text-primary">Marvellous Consulting</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The right ERP solution.<br />
              The right implementation partner.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="md:justify-self-center">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="min-w-0 not-italic text-sm text-muted-foreground md:justify-self-end">
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-words hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Marvellous Consulting on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-border/50 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-muted-foreground">
          <p>&copy; {year} {siteConfig.name}</p>
          <nav aria-label="Legal information">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {legalLinks.map((link, index) => (
                <li key={link.href} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
