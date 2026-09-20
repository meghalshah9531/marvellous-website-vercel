import { Link } from "wouter"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SEO } from "@/components/seo"
import { ProcessOverview } from "@/components/process-overview"
import { CtaSection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"

const outcomes = [
  { title: "A shared understanding", detail: "A clear picture of current workflows, pain points, stakeholders, and the outcomes that matter to your business." },
  { title: "A workable scope", detail: "Priorities for standard ERP features, configuration, integrations, data migration, and development where needed." },
  { title: "A delivery team that fits", detail: "Partner selection informed by industry experience, technical capability, capacity, budget, and working style." },
  { title: "A coordinated rollout", detail: "Regular decisions and progress reviews, with testing, training, and go-live preparation planned with the delivery team." },
]

export default function HowWeWork() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO title="How We Work" description="How Marvellous Consulting helps you define ERP requirements, select an implementation team, and guide delivery from discovery to go-live." />
      <section className="bg-background py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-5">How We Work</p>
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">From business requirements to a clear implementation plan.</h1>
          <p className="max-w-3xl mt-7 text-lg md:text-xl leading-relaxed text-muted-foreground">Whether you are considering your first ERP, exploring Odoo, or improving a system you already use, we start by listening. We help turn what your business needs into a practical scope, find suitable implementation expertise, and stay involved as the project moves toward go-live.</p>
          <Button asChild size="lg" className="mt-8 h-12 px-7"><Link href="/contact">Discuss Your ERP Project <ArrowRight className="ml-2 size-4" /></Link></Button>
        </div>
      </section>

      <ProcessOverview />

      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">What you can expect</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">Clear decisions at every stage.</h2>
            <p className="text-muted-foreground text-lg mt-4">The exact scope depends on your project. These are the practical outcomes we work toward together.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {outcomes.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-7 flex gap-4">
                <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-primary mt-1" />
                <div><h3 className="text-xl font-serif font-medium text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid md:grid-cols-2 gap-10 md:gap-16">
          <div><p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Your role</p><h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">Your team stays involved.</h2><p className="text-muted-foreground leading-relaxed">Your stakeholders help set priorities, review proposed workflows, and decide what is right for the business. We make those decisions easier to understand and document.</p></div>
          <div><p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Our role</p><h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">A clear point of contact.</h2><p className="text-muted-foreground leading-relaxed">We help define requirements, evaluate delivery options, and coordinate with your chosen implementation team. The agreed delivery team is responsible for the implementation work it undertakes; roles and commercial terms are clarified before work begins.</p></div>
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
