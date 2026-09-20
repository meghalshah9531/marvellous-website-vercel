import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CtaSection } from "@/components/cta-section"
import { HomeHero } from "@/components/home-hero"
import { ProcessOverview } from "@/components/process-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"

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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                <img 
                  src="/images/erp-delivery-workshop.jpg" 
                  alt="ERP project team reviewing a process diagram together" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[17rem] z-10 bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border">
                  <h3 className="font-serif font-medium text-lg text-foreground mb-1">A Clear Point of Contact</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">We connect your business stakeholders and delivery team, keeping requirements, decisions, and next steps clear.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                Your business goals shape the solution.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A successful ERP project starts with understanding how your business works: where teams lose time, where information gets disconnected, and what needs to improve.
                </p>
                <p>
                  We turn those insights into clear requirements and practical solution decisions. We then work with the selected implementation team to keep delivery aligned with your priorities, from planning through go-live.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild variant="outline" className="h-12 px-6">
                  <Link href="/odoo">Our Approach</Link>
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
