import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Building2, Compass, Layers3, MessagesSquare, Users } from "lucide-react"
import { Link } from "wouter"

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO
        title="About Us"
        description="Marvellous Consulting connects business requirements with the right ERP solution and the people who can deliver it."
      />

      <div>
        {/* Opening */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 xl:gap-24 xl:px-16 2xl:px-24">
            <div className="min-w-0 max-w-[65ch]">
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
            <ScrollReveal delay={0.2} className="w-full max-w-xl justify-self-center lg:justify-self-end">
              <figure className="relative isolate pb-6 pr-5 sm:pb-8 sm:pr-8">
                <div aria-hidden="true" className="absolute bottom-0 right-0 -z-10 h-4/5 w-4/5 rounded-[2rem] border border-primary/20 bg-primary/5" />
                <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lg">
                  <img
                    src="/images/erp-delivery-workshop.jpg"
                    alt="Business workflows being reviewed around a table with diagrams and an ERP dashboard."
                    width={1024}
                    height={1024}
                    className="aspect-[5/4] w-full object-cover lg:aspect-square"
                  />
                  <figcaption className="flex items-start gap-4 border-t border-border bg-background p-5 sm:p-6">
                    <span aria-hidden="true" className="mt-1 h-10 w-1 shrink-0 rounded-full bg-secondary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">Business first</p>
                      <p className="mt-2 text-lg font-medium leading-snug text-primary">Your people. Your processes.<br />The starting point for every decision.</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        {/* The Idea */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 xl:gap-24 xl:px-16 2xl:px-24">
            <div className="min-w-0 max-w-[65ch]">
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
            <ScrollReveal delay={0.15} className="w-full max-w-xl justify-self-center lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-border bg-background p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Connected by understanding</p>
                <div className="relative mt-7">
                  <div aria-hidden="true" className="absolute bottom-7 left-6 top-7 w-px bg-primary/20" />
                  <ul className="relative space-y-6">
                    {[
                      { icon: Building2, title: "Your business", detail: "Processes, people, and priorities" },
                      { icon: Layers3, title: "The right ERP", detail: "A solution shaped around your needs" },
                      { icon: Users, title: "Delivery expertise", detail: "People equipped to make it work" },
                    ].map(({ icon: Icon, title, detail }) => (
                      <li key={title} className="flex items-center gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-background text-primary">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-primary">{title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-secondary" />
                  <p className="text-sm font-medium text-primary">One joined-up view of your ERP project.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Approach */}
        <section className="py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 xl:gap-24 xl:px-16 2xl:px-24">
            <div className="min-w-0 max-w-[65ch]">
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
            <ScrollReveal delay={0.15} className="w-full max-w-xl justify-self-center lg:justify-self-end">
              <aside className="border-l-2 border-secondary/60 pl-6 sm:pl-8" aria-label="What you can expect from us">
                <p className="mb-7 text-xs font-bold uppercase tracking-widest text-secondary">What you can expect</p>
                <ul className="space-y-7">
                  {[
                    { icon: MessagesSquare, title: "Thoughtful questions", detail: "Space to explain what works, what doesn’t, and what needs to change." },
                    { icon: Compass, title: "Practical guidance", detail: "Clear options grounded in your business requirements." },
                    { icon: Users, title: "A collaborative approach", detail: "A shared understanding between your team and the people delivering your ERP." },
                  ].map(({ icon: Icon, title, detail }) => (
                    <li key={title} className="flex items-start gap-4">
                      <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-secondary" />
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* The Belief */}
      <section className="py-24 lg:py-32 bg-primary dark:bg-card text-primary-foreground dark:text-primary relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 bg-background/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10">
          <ScrollReveal className="max-w-[65ch] mx-auto text-center space-y-6">
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
