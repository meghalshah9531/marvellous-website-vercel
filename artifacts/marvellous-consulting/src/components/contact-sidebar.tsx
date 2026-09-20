import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function ContactSidebar() {
  return (
    <div className="space-y-8 bg-card p-8 rounded-2xl border border-border h-full flex flex-col">
      <div>
        <h3 className="font-serif text-xl font-medium mb-6 text-foreground">Contact Details</h3>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="mt-1 bg-background p-2 rounded-md border border-border text-primary shrink-0">
              <MapPin className="size-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Office</p>
              <p className="text-muted-foreground">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 bg-background p-2 rounded-md border border-border text-primary shrink-0">
              <Phone className="size-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Direct</p>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 bg-background p-2 rounded-md border border-border text-primary shrink-0">
              <Mail className="size-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 bg-background p-2 rounded-md border border-border text-primary shrink-0">
              <Clock className="size-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Hours</p>
              <p className="text-muted-foreground">{siteConfig.hours}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-8 border-t border-border">
        <Button 
          asChild 
          className="w-full h-12 text-base gap-2 bg-primary hover:bg-primary/90"
        >
          <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
            <Calendar className="size-4" />
            Schedule a Consultation
          </a>
        </Button>
      </div>
      
      <div className="mt-auto pt-8">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>Important:</strong> Submitting this form does not establish a formal client relationship. Please do not include passwords or confidential business data in your initial message.
        </p>
      </div>
    </div>
  )
}
