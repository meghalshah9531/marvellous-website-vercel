import { ScrollReveal } from "@/components/scroll-reveal"
import { Layers } from "lucide-react"

export function ErpDelivery() {
  return (
    <div>
      {/* ERP consulting illustration */}
      <section id="erp-delivery" className="scroll-mt-24 py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">ERP CONSULTING</p>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
                Make your ERP work for your business.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From choosing a new system to improving an existing setup, we help you make practical decisions about workflows, configuration, integrations, and data migrations.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center overflow-hidden" aria-label="ERP consulting illustration with four orbiting elements" role="img">
                <div aria-hidden="true" className="absolute inset-0 bg-primary/5 motion-safe:animate-[pulse_4s_ease-in-out_infinite]" />
                <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-primary/25 motion-safe:animate-[spin_12s_linear_infinite]">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 bg-primary rounded-full shadow-md" />
                  <span className="absolute bottom-[15%] right-[15%] size-3 bg-secondary rounded-full shadow-sm" />
                </div>
                <div aria-hidden="true" className="absolute inset-[21%] rounded-full border border-secondary/30 motion-safe:animate-[spin_9s_linear_infinite_reverse]">
                  <span className="absolute top-[12%] right-[12%] size-4 bg-secondary rounded-full shadow-sm" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-3 bg-primary/70 rounded-full" />
                </div>
                <div aria-hidden="true" className="relative size-[30%] rounded-full bg-background border border-primary/40 shadow-xl flex items-center justify-center">
                  <Layers className="size-14 text-primary" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Consulting support */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <ScrollReveal className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary">HOW WE CAN HELP</h2>
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
                <div className="bg-background p-8 rounded-2xl border border-border h-full transition-colors hover:border-primary/50">
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-4">{option.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
