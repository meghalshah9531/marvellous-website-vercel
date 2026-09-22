import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ConvergingLines } from "@/components/converging-lines"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO
        title="About Us"
        description="Marvellous Consulting connects business requirements with the right ERP solution and the people who can deliver it."
      />

      <div className="relative">
        <ConvergingLines />

        {/* Opening */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="max-w-2xl">
              <ScrollReveal>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">About Marvellous</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-primary mb-8">
                  Good ERP decisions start with understanding.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    An ERP project often begins with a software search. But the questions behind it are about the business: What needs to improve? Which processes are holding people back? And who can help turn those needs into a working solution?
                  </p>
                  <p>
                    Marvellous Consulting grew from experience with these conversations—and the belief that understanding the business should come first.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Idea */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="max-w-2xl">
              <ScrollReveal>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">The Idea</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight mb-8">
                  Bring the right pieces together.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Choosing an ERP is one decision. Choosing the people who understand your industry and can implement it is another. Both deserve careful thought.
                  </p>
                  <p>
                    We bring these decisions together, connecting business requirements with practical ERP guidance and suitable implementation expertise.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section className="py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="max-w-2xl">
              <ScrollReveal>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">The Approach</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight mb-8">
                  Listen carefully. Make things clear.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We ask questions, make sense of complex requirements, and help you understand your options. With a focus on Odoo, we support the decisions that move your project forward.
                  </p>
                  <p>
                    Sometimes that means finding an implementation partner. Sometimes it means bringing clarity to a project already underway.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* The Belief */}
      <section className="py-24 lg:py-32 bg-primary dark:bg-card text-primary-foreground dark:text-primary relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 bg-background/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10">
          <ScrollReveal className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">The Belief</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-tight">
              The right fit makes the difference.
            </h2>
            <p className="text-primary-foreground/85 dark:text-primary/85 text-lg leading-relaxed">
              Your processes, people, and priorities shape what "right" means for your business. That is where our work begins.
            </p>
            <p className="font-serif text-xl md:text-2xl leading-snug pt-2">
              The right ERP solution.<br />
              The right implementation partner.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
                <Link href="/contact">Let's Discuss Your Project</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
