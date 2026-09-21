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
              <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">ERP Delivery</p>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
                A clear scope. A coordinated implementation.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We turn agreed business requirements into a practical delivery brief covering workflows, configuration, integrations, and data migration.
                </p>
                <p>
                  During implementation, we help resolve open questions, review proposed changes against the agreed scope, and coordinate testing and go-live preparation with your team and implementation partner.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center overflow-hidden" aria-label="ERP delivery illustration with four orbiting elements" role="img">
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

      {/* Delivery options */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="max-w-4xl mb-12 space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">The Delivery Team</p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight">
              Delivery Options
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help clarify the work to be done and coordinate with the team carrying it out. The right approach depends on your needs and the expertise already available to you.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Implementation Through a Specialist Partner",
                whoItSuits: "You need full end-to-end delivery and want a partner matched to your industry, project scope, and budget.",
                ourRole: "We help select the right delivery partner based on industry expertise, capacity, technical capability, and integrations, then coordinate throughout the engagement.",
                handles: ["System configuration", "Integrations and data migration", "Testing and go-live execution", "Post-launch support"],
              },
              {
                title: "Support for Your Existing ERP Team",
                whoItSuits: "You already have an in-house ERP team, or an external implementation partner already in place, and want independent oversight to keep the project on track.",
                ourRole: "We clarify requirements, review proposed changes against agreed scope, and keep communication clear between your stakeholders and the existing team or partner.",
                handles: ["System configuration", "Custom development", "Implementation execution", "Ongoing system support"],
              },
              {
                title: "Implementation by Our Team",
                note: "Available on a project basis, subject to capacity.",
                whoItSuits: "You'd prefer a single point of contact handling both advisory and hands-on implementation.",
                ourRole: "We take on delivery directly, applying the same scope and requirements discipline as our advisory engagements.",
                handles: ["System configuration", "Integrations and data migration", "Testing and go-live execution", "Post-launch support"],
              },
            ].map((option, i) => (
              <ScrollReveal key={option.title} delay={i * 0.1}>
                <div className="bg-background p-8 rounded-2xl border border-border h-full flex flex-col relative overflow-hidden transition-colors hover:border-primary/50 group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="relative z-10">
                    <h4 className="text-xl font-serif font-medium text-foreground mb-2">{option.title}</h4>
                    {option.note && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-4">{option.note}</p>
                    )}

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5">Who it suits</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{option.whoItSuits}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5">Our role</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{option.ourRole}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">What the delivery team handles</p>
                        <ul className="space-y-2.5">
                          {option.handles.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                              <CheckCircle2 className="size-4 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
