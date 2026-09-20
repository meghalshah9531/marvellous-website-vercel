import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Target, Search, Users, ShieldCheck } from "lucide-react"

export function ProcessOverview() {
  const sequenceRef = useRef(null)
  const isInView = useInView(sequenceRef, { once: true, margin: "-10% 0px -10% 0px" })
  const reduceMotion = useReducedMotion()
  const steps = [
    {
      icon: <Search className="size-6 text-primary" />,
      title: "Understand Your Business",
      description: "We explore your processes, challenges, and priorities to define what your ERP needs to achieve."
    },
    {
      icon: <Target className="size-6 text-secondary" />,
      title: "Define the Solution",
      description: "We translate your requirements into a practical scope, with clear priorities for configuration, integrations, and development."
    },
    {
      icon: <Users className="size-6 text-primary" />,
      title: "Select the Right Delivery Team",
      description: "We help select implementation expertise suited to your industry, project scope, budget, and working style."
    },
    {
      icon: <ShieldCheck className="size-6 text-foreground" />,
      title: "Guide Implementation & Go-Live",
      description: "We coordinate with your delivery team, review progress against agreed requirements, and help plan testing, training, and support."
    }
  ]

  return (
    <section id="how-we-work" className="scroll-mt-24 py-20 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            From business requirements to a clear implementation plan.
          </h2>
        </div>

        <div ref={sequenceRef} className="relative max-w-6xl mx-auto">
          <div aria-hidden="true" className="absolute left-8 top-8 bottom-8 w-px bg-border lg:hidden" />
          <div aria-hidden="true" className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border" />
          {!reduceMotion && (
            <>
              <motion.div aria-hidden="true" className="absolute left-8 top-8 bottom-8 w-[2px] bg-secondary origin-top lg:hidden" initial={{ scaleY: 0 }} animate={{ scaleY: isInView ? 1 : 0 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }} />
              <motion.div aria-hidden="true" className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-secondary origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: isInView ? 1 : 0 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }} />
            </>
          )}
          <motion.ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-0" initial={reduceMotion ? false : "hidden"} animate={isInView || reduceMotion ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.45, delayChildren: 0.12 } } }}>
            {steps.map((step, i) => (
              <motion.li key={i} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:px-4">
                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-border shadow-sm lg:mb-6 relative z-10">
                  {step.icon}
                </div>
                <div className="pb-2 lg:text-center">
                  <span className="text-xs font-bold tracking-widest text-secondary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mt-1 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
