import { ScrollReveal } from "@/components/scroll-reveal"
import { ErpImplementation } from "@/components/erp-implementation"

export function ErpDelivery() {
  return (
    <section id="erp-delivery" aria-labelledby="erp-consulting-title" className="scroll-mt-24 py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">ERP Consulting</p>
            <h2 id="erp-consulting-title" className="text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
              Make your ERP work for your business.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From choosing a new system to improving an existing setup, we help you make practical decisions about workflows, configuration, integrations, and data migrations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ErpImplementation />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
