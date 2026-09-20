import { ScrollReveal } from "@/components/scroll-reveal"
import { Layers, CheckCircle2 } from "lucide-react"

export function ErpDelivery() {
  return (
    <div>
      {/* ERP delivery illustration */}
      <section id="erp-delivery" className="scroll-mt-24 py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">ERP Delivery</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                Execution without architecture is risk.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Start by understanding your workflows, priorities, and the problems the ERP needs to solve. Those findings help shape the scope and the delivery plan.
                </p>
                <p>
                  We help define requirements and coordinate with the implementation team as they configure and deliver the solution. Together, we review decisions against your business priorities through go-live.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/30 flex items-center justify-center">
                  <div className="w-[60%] h-[60%] rounded-full bg-background border border-primary/40 shadow-xl flex items-center justify-center">
                    <Layers className="size-16 text-primary" />
                  </div>
                </div>
                {/* Orbital dots */}
                <div className="absolute top-0 w-4 h-4 bg-primary rounded-full blur-[2px] animate-[spin_6s_linear_infinite] origin-[50%_250px]" style={{ left: 'calc(50% - 8px)' }} />
                <div className="absolute top-0 w-3 h-3 bg-secondary rounded-full animate-[spin_8s_linear_infinite_reverse] origin-[50%_200px]" style={{ left: 'calc(50% - 6px)' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Delivery options */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
              Delivery Options
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help clarify the work to be done and coordinate with the team carrying it out. The right approach depends on your needs and the expertise already available to you.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mode A */}
            <ScrollReveal delay={0.1}>
              <div className="bg-background p-8 md:p-10 rounded-2xl border border-border h-full flex flex-col relative overflow-hidden transition-colors hover:border-primary/50 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Mode A</h3>
                  <h4 className="text-2xl font-serif font-medium text-foreground mb-4">Specialist Delivery Partner</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Implementation services are delivered through an agreed specialist delivery partner, carefully selected for your project based on:
                  </p>
                </div>
                
                <ul className="space-y-4 mt-auto relative z-10">
                  {[
                    "Industry expertise",
                    "Capacity and timeline",
                    "Technical capability",
                    "Integrations and migration",
                    "Budget alignment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Mode B */}
            <ScrollReveal delay={0.2}>
              <div className="bg-background p-8 md:p-10 rounded-2xl border border-border h-full flex flex-col relative overflow-hidden transition-colors hover:border-secondary/50 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 group-hover:bg-secondary/10 transition-colors rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Mode B</h3>
                  <h4 className="text-2xl font-serif font-medium text-foreground mb-4">Internal Team</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    If your business already has an in-house ERP team, we can help coordinate requirements and priorities for work such as:
                  </p>
                </div>
                
                <ul className="space-y-4 mt-auto relative z-10">
                  {[
                    "System configuration",
                    "Custom development",
                    "Implementation execution",
                    "Ongoing system support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground">
                      <CheckCircle2 className="size-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
