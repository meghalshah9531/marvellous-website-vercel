import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CtaSection } from "@/components/cta-section"
import { HomeHero } from "@/components/home-hero"
import { ProcessOverview } from "@/components/process-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO />
      
      <HomeHero />
      <ProcessOverview />

      {/* The Firm Difference */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border p-8 flex items-center justify-center">
                <img 
                  src="/images/erp-delivery-workshop.jpg" 
                  alt="ERP Delivery Workshop" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 dark:opacity-30" 
                />
                <div className="relative z-10 w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl" />
                  <div className="relative bg-background/90 backdrop-blur-md p-8 rounded-xl shadow-xl border border-border text-center">
                    <Layers className="size-12 text-primary mx-auto mb-4" />
                    <h4 className="font-serif font-medium text-xl text-foreground mb-2">Centralized Accountability</h4>
                    <p className="text-sm text-muted-foreground">Regardless of the delivery path, we maintain strategic oversight.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                Software must serve the business, not the reverse.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Most ERP implementations fail because they focus on the technology rather than the underlying business processes. A poor process digitized is still a poor process—it just happens faster.
                </p>
                <p>
                  We act as your strategic lead. By separating discovery and architecture from the raw development execution, we guarantee that the final system is objectively designed to meet your commercial requirements.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild variant="outline" className="h-12 px-6">
                  <Link href="/about">Read our philosophy</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
