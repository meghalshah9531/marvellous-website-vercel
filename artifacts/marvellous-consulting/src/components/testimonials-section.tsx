import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/config/site"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Client Feedback</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
            Trusted by the businesses we protect and empower.
          </h3>
          <p className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-mono uppercase tracking-wider rounded-md mt-4 border border-border">
            Placeholder Content - Update in siteConfig
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border relative h-full flex flex-col">
                <Quote className="size-10 text-primary/20 absolute top-8 right-8" />
                <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed flex-1 relative z-10 mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
