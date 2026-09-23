import { ScrollReveal } from "@/components/scroll-reveal"
import { ErpImplementation } from "@/components/erp-implementation"

export function ErpDelivery() {
  return (
    <section id="erp-delivery" aria-labelledby="erp-consulting-title" className="scroll-mt-24 py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">ERP CONSULTING</p>
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
        <div className="mt-16 border-t border-border pt-10 lg:mt-20 lg:pt-12">
          <ScrollReveal className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">How we can help</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Find the Right Partner",
                description: "Starting an ERP project? We help you choose implementation expertise suited to your industry, requirements, and budget.",
              },
              {
                title: "Support Your Current Project",
                description: "Already have a team or partner? We help clarify requirements, review proposed solutions, and resolve gaps between business needs and delivery.",
              },
            ].map((option, i) => (
              <ScrollReveal key={option.title} delay={i * 0.1}>
                <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border h-full transition-colors hover:border-primary/50">
                  <h4 className="text-2xl font-serif font-medium text-foreground mb-4">{option.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
