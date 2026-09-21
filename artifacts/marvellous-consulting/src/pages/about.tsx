import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CtaSection } from "@/components/cta-section"
import { Building, Award, Target, Briefcase } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="About Us" 
        description="Marvellous Consulting helps businesses plan ERP solutions and coordinate implementation."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/erp-delivery-workshop.jpg" 
            alt="Consulting Workshop" 
            className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.15] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                Grounded expertise. <br className="hidden md:block" />
                <span className="text-muted-foreground">Strategic execution.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We built Marvellous Consulting on a simple premise: technical knowledge is only valuable when applied with precision and clarity. We coordinate complex deliveries without dealing in ambiguity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16 text-foreground">
              Core Principles
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-6">
                  <Target className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground">Radical Clarity</h3>
                <p className="text-muted-foreground">
                  Complex database schemas and operational workflows require translation. We communicate plainly, ensuring business stakeholders understand exactly where the project stands.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-6">
                  <Award className="size-8 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground">Business-First Advice</h3>
                <p className="text-muted-foreground">
                  We start with your business requirements and explain the reasoning behind solution and partner recommendations. We clarify roles and commercial arrangements as part of the planning process.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-6">
                  <Briefcase className="size-8 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground">Boutique Attention</h3>
                <p className="text-muted-foreground">
                  You work directly with the partners. We limit our active engagements to ensure every client receives the rigorous, senior-level coordination their business transformation demands.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-5xl">
          <ScrollReveal>
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
                Leadership
              </h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full mx-auto md:mx-0" />
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {/* ERP Advisory Partner */}
            <ScrollReveal delay={0.1}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
                <div className="aspect-square bg-card rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <Building className="size-24 text-primary/30" />
                  <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border text-center">
                    <p className="font-medium text-sm text-foreground">Placeholder Profile</p>
                    <p className="text-xs text-muted-foreground">Update in siteConfig</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground">{siteConfig.partners.erp.name}</h3>
                  <p className="text-primary font-medium tracking-wide uppercase text-sm">{siteConfig.partners.erp.credentials}</p>
                  <p className="text-muted-foreground font-medium pb-2 border-b border-border inline-block">{siteConfig.partners.erp.title}</p>
                  <div className="text-muted-foreground leading-relaxed pt-2">
                    <p>{siteConfig.partners.erp.bio}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Delivery Partner */}
            <ScrollReveal delay={0.2}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
                <div className="aspect-square bg-card rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
                  <Building className="size-24 text-secondary/30" />
                  <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border text-center">
                    <p className="font-medium text-sm text-foreground">Placeholder Profile</p>
                    <p className="text-xs text-muted-foreground">Update in siteConfig</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground">{siteConfig.partners.delivery.name}</h3>
                  <p className="text-secondary font-medium tracking-wide uppercase text-sm">{siteConfig.partners.delivery.credentials}</p>
                  <p className="text-muted-foreground font-medium pb-2 border-b border-border inline-block">{siteConfig.partners.delivery.title}</p>
                  <div className="text-muted-foreground leading-relaxed pt-2">
                    <p>{siteConfig.partners.delivery.bio}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
