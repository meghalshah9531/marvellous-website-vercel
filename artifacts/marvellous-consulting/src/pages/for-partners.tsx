import { Link } from "wouter"
import { ArrowRight, BriefcaseBusiness, ClipboardList, MessagesSquare, Puzzle } from "lucide-react"
import { SEO } from "@/components/seo"
import { Button } from "@/components/ui/button"

const strengths = [
  { icon: ClipboardList, title: "Clearer requirements", detail: "We work with the client to understand workflows, priorities, and the decisions needed before implementation." },
  { icon: Puzzle, title: "A better project fit", detail: "We consider your industry experience, capabilities, capacity, and approach when discussing a potential project." },
  { icon: MessagesSquare, title: "Connected communication", detail: "We help keep business stakeholders and the delivery team aligned on requirements, progress, and open decisions." },
]

export default function ForPartners() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO title="For Implementation Partners" description="Collaborate with Marvellous Consulting on ERP and Odoo implementation projects that fit your team's expertise." />
      <section className="bg-card border-b border-border py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-5">For Implementation Partners</p>
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">Good ERP projects need the right delivery team.</h1>
          <p className="max-w-3xl mt-7 text-lg md:text-xl leading-relaxed text-muted-foreground">We help businesses understand their requirements and choose implementation expertise that fits. If your team delivers Odoo or other ERP projects, we would like to learn where you do your best work and explore opportunities to collaborate.</p>
          <Button asChild size="lg" className="mt-8 h-12 px-7"><Link href="/contact">Introduce Your Team <ArrowRight className="ml-2 size-4" /></Link></Button>
          <p className="text-sm text-muted-foreground mt-3">On the contact form, select “General Inquiry” and include your company name.</p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mb-10"><p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">How we collaborate</p><h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">A practical partnership built around the client.</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="bg-card rounded-2xl border border-border p-7"><div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6"><Icon aria-hidden="true" className="size-6 text-primary" /></div><h3 className="font-serif font-medium text-xl text-foreground mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{detail}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid md:grid-cols-2 gap-12 items-start">
          <div><div className="flex items-center gap-3 text-primary mb-5"><BriefcaseBusiness aria-hidden="true" className="size-6" /><p className="text-sm font-bold tracking-widest uppercase">Who we want to meet</p></div><h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-5">Tell us what you do best.</h2><p className="text-muted-foreground leading-relaxed">We welcome conversations with implementation teams of different sizes and locations. What matters is relevant experience, a clear delivery approach, and a willingness to work closely with the client.</p></div>
          <div className="bg-background border border-border rounded-2xl p-7 md:p-9"><h3 className="text-xl font-serif font-medium text-foreground mb-5">Helpful details to share</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Industries and business processes you know well</li><li>ERP products, Odoo versions, and technical strengths</li><li>Examples of implementation, integration, or migration work</li><li>Team location, languages, availability, and delivery capacity</li><li>Your preferred way of working with clients and consultants</li></ul></div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl"><h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-5">Clear roles and commercial terms.</h2><p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">Each opportunity is discussed individually. We clarify the client relationship, delivery responsibilities, and any referral commission or consulting fee before agreeing to work together. Introducing your team does not promise a project or preferred partner status.</p></div>
      </section>

      <section className="bg-primary text-primary-foreground py-20"><div className="container mx-auto px-4 md:px-6 max-w-3xl text-center"><h2 className="text-3xl md:text-4xl font-serif font-medium mb-5">Let’s explore a fit.</h2><p className="text-lg text-primary-foreground/80 mb-8">Share your team’s expertise and the kind of ERP projects you are best placed to deliver.</p><Button asChild size="lg" variant="secondary" className="h-12 px-8"><Link href="/contact">Contact Us</Link></Button></div></section>
    </div>
  )
}
