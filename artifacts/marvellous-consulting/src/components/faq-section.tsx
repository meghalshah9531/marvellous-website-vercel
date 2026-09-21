import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Clear answers regarding our services and process.",
  items 
}: FAQSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-4xl">
        <ScrollReveal className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
