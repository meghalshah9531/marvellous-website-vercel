import { Link } from "wouter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ClipboardList, LifeBuoy, ListChecks, Search, Users, Workflow } from "lucide-react"

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We explore how your business works, where challenges arise, and what you want to achieve.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Requirements",
    description: "We translate those insights into clear requirements, priorities, and a practical project scope.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Solution Design",
    description: "We map your workflows to ERP capabilities and identify the configuration, integrations, and development needed.",
  },
  {
    number: "04",
    icon: Users,
    title: "Partner Selection",
    description: "We help you choose implementation expertise suited to your industry, scope, budget, and timeline—or work with your existing team.",
  },
  {
    number: "05",
    icon: ListChecks,
    title: "Implementation Governance",
    description: "We review progress, scope changes, and risks with your delivery team, helping coordinate decisions, testing, and go-live readiness.",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Support & Improvement",
    description: "We help prioritise post-launch issues, coordinate with your support team, and identify improvements as your business evolves.",
  },
]

export function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-24 py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <ScrollReveal className="max-w-2xl mb-14 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary leading-tight">
            From understanding your business to supporting your next step.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bring clarity to each stage of your ERP journey, whether you're starting fresh or improving an existing system.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.number} delay={(i % 3) * 0.1}>
              <div className="bg-background p-6 sm:p-7 rounded-2xl border border-border h-full transition-colors hover:border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                    <stage.icon className="size-5 text-primary" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-bold tracking-widest text-secondary">{stage.number}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">{stage.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{stage.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Start where you are. Our involvement can cover the full journey or the stages where you need support.
          </p>
          <Button asChild size="lg" className="h-12 px-8 text-base shrink-0">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
