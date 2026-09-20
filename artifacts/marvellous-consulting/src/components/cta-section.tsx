import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CtaSection({
  title = "Ready to define the right ERP delivery path?",
  description = "Schedule a consultation to clarify your requirements, solution architecture, delivery model, and next steps.",
  primaryButtonText = "Request a Consultation",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn about our Firm",
  secondaryButtonHref = "/about"
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-background/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base">
              <Link href={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
