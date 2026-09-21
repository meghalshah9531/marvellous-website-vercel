import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
}

export function CtaSection({
  title = "Planning an ERP project—or struggling with your current system?",
  description = "Let’s discuss your business, the challenges you’re facing, and what you need from your ERP. We’ll help identify a practical next step.",
  primaryButtonText = "Discuss Your Project",
  primaryButtonHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-primary dark:bg-card text-primary-foreground dark:text-primary relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-background/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            {title}
          </h2>
          <p className="text-primary-foreground/85 dark:text-primary/85 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-12 px-8 text-base">
              <Link href={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
