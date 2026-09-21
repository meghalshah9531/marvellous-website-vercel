export function ProjectRoles() {
  return (
      <section className="relative overflow-hidden bg-card border-b border-border py-20">
        <img src="/images/erp-delivery-workshop.jpg" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.10] dark:opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-card/80 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Your Role</p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">Your business leads the decisions.</h2>
              <p className="text-muted-foreground leading-relaxed">Your team sets priorities, reviews proposed workflows, and approves key decisions. We provide the context and guidance to help you make informed choices.</p>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Role</p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">Clear guidance. Coordinated delivery.</h2>
              <p className="text-muted-foreground leading-relaxed">We translate your priorities into requirements, help evaluate implementation expertise, and keep communication clear between your stakeholders and delivery team.</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm text-center mt-10 pt-10 border-t border-border">Scope, responsibilities, and commercial terms are agreed before work begins.</p>
        </div>
      </section>
  )
}
