import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Layers, ShieldCheck, Award } from "lucide-react"
import { siteConfig } from "@/config/site"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-card">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden pointer-events-none" aria-hidden="true">
        <img src="/images/erp-advisory-hero.jpg" alt="" className="w-full h-full object-cover object-right scale-[2.7] origin-right opacity-60 dark:opacity-45" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/35 dark:to-card/65 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10">
        <div className="max-w-4xl space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to ERP Consulting Projects
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl hero-slogan font-medium font-semibold leading-[1.1] text-foreground tracking-tight">
              The right ERP solution. <br className="hidden md:block" />
              <span className="text-secondary">The right implementation partner.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed max-w-3xl py-2">
              We help you turn business requirements into a clear ERP plan, select an implementation partner with relevant industry expertise, and guide your project from discovery to go-live.
            </p>
            <p className="text-lg md:text-xl text-primary/85 dark:text-primary max-w-3xl mt-5">
              Whether you’re exploring Odoo or improving an existing system, start with a conversation about your business.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg bg-primary hover:bg-primary/90">
              <Link href="/contact">Discuss Your ERP Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base shadow-sm">
              <a href="/#how-we-work">How We Work</a>
            </Button>
          </ScrollReveal>

          {/* Balanced Trust Indicators */}
          <ScrollReveal delay={0.3} className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border mt-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-8 text-secondary shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm leading-tight">Business-First Advice</p>
                <p className="text-xs text-muted-foreground">Requirements-Led Planning</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Layers className="size-8 text-secondary shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm leading-tight">Odoo Expertise</p>
                <p className="text-xs text-muted-foreground">Functional Consulting</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="size-8 text-secondary shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm leading-tight">Personal ERP Experience</p>
                <p className="text-xs text-muted-foreground">{siteConfig.yearsExperience}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
