import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CtaSection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Layers, CheckCircle2 } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Why hire an advisory firm rather than going direct to a developer?",
    answer: "We help translate your business requirements into a practical scope before implementation begins. This gives your team and the implementation partner a clearer basis for decisions, priorities, and progress reviews."
  },
  {
    question: "What is your relationship with Odoo?",
    answer: "We help you assess whether Odoo and the proposed implementation approach fit your requirements. We discuss the criteria for selecting a delivery partner and clarify commercial arrangements before you commit."
  },
  {
    question: "How do you choose the delivery partner?",
    answer: "We consider relevant industry experience, technical capability, availability, budget, and how the team works with your stakeholders. The final selection is agreed with you."
  },
  {
    question: "Who is responsible for delivery?",
    answer: "We coordinate requirements, decisions, and progress with your team. Your implementation partner is responsible for the delivery work it agrees to perform. We clarify roles and responsibilities before the project starts."
  }
]

export default function OdooPractice() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="ERP Advisory & Delivery" 
        description="Independent ERP advisory, solution design, and implementation coordination."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/5 rounded-tl-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 text-primary font-medium mb-4">
                <Layers className="size-5" />
                <span className="uppercase tracking-widest text-sm">Service Offering</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                ERP Advisory & Delivery
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform fragmented data and disjointed workflows into a cohesive operational engine. We architect the solution and coordinate the execution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
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

      {/* Accountable Delivery Models */}
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

      <section id="partners" className="scroll-mt-24 py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ScrollReveal className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">For Partners</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">Work with us on ERP delivery.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with implementation partners who bring relevant industry and technical expertise. We help clients define requirements and priorities, then coordinate with the selected team during delivery. If your team supports ERP implementation, tell us about your experience and the projects you are best suited to deliver.
            </p>
            <Button asChild variant="outline" className="h-12 px-6"><Link href="/contact">Get in Touch</Link></Button>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection items={faqs} />
      
      <CtaSection 
        title="Ready to unify your operations?"
        description="Whether you are outgrowing legacy software or improving an existing implementation, let’s discuss your requirements and a practical next step."
      />
    </div>
  )
}
