import { Link } from "wouter"
import { siteConfig } from "@/config/site"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg">
                M
              </div>
              <span className="font-serif font-semibold text-xl">
                Marvellous
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-medium text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/how-we-work" className="text-muted-foreground hover:text-primary transition-colors">How We Work</Link></li>
              <li>
                <Link href="/odoo" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  ERP Advisory & Delivery
                  <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
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
            <h4 className="font-serif font-medium text-lg mb-6">Firm</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/for-partners" className="text-muted-foreground hover:text-primary transition-colors">For Partners</Link></li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About the Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-medium text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
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
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-xs text-muted-foreground space-y-4">
          <p className="max-w-4xl">{siteConfig.disclaimer.odoo}</p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
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
