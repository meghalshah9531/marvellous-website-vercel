export function ProjectRoles() {
  return (
      <section className="bg-card border-b border-border py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid md:grid-cols-2 gap-10 md:gap-16">
          <div><p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Your role</p><h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">Your team stays involved.</h2><p className="text-muted-foreground leading-relaxed">Your stakeholders help set priorities, review proposed workflows, and decide what is right for the business. We make those decisions easier to understand and document.</p></div>
          <div><p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Our role</p><h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">A clear point of contact.</h2><p className="text-muted-foreground leading-relaxed">We help define requirements, evaluate delivery options, and coordinate with your chosen implementation team. The agreed delivery team is responsible for the implementation work it undertakes; roles and commercial terms are clarified before work begins.</p></div>
        </div>
      </section>
  )
}
