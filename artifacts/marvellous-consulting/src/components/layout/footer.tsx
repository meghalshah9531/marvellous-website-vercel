import { Link } from "wouter"
import { siteConfig } from "@/config/site"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-card border-t border-border pt-10 pb-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img src="/images/logo-mark.png" alt="" className="size-8 object-contain" />
              <span className="font-serif font-semibold text-lg">
                Marvellous
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#how-we-work" className="text-muted-foreground hover:text-primary transition-colors">How We Work</a></li>
              <li>
                <a href="/#erp-delivery" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  ERP Delivery
                  <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  Consultation
                  <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Firm</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Consult Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Marvellous Consulting on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-5 border-t border-border/50 text-xs text-muted-foreground space-y-3">
          <p className="max-w-4xl">{siteConfig.disclaimer.odoo}</p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
            <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
