import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Target, Search, Users, ShieldCheck } from "lucide-react"

export function ProcessOverview() {
  const steps = [
    {
      icon: <Search className="size-6 text-primary" />,
      title: "Discovery & Strategy",
      description: "We lead business development, initial discovery, and solution strategy to understand your precise operational goals."
    },
    {
      icon: <Target className="size-6 text-secondary" />,
      title: "Assessment & Scoping",
      description: "Rigorous assessment of customer requirements resulting in a clearly defined, executable project scope and architecture."
    },
    {
      icon: <Users className="size-6 text-primary" />,
      title: "Delivery Coordination",
      description: "We select the optimal path: an agreed specialist delivery partner vetted for fit, or an appropriately resourced internal team."
    },
    {
      icon: <ShieldCheck className="size-6 text-foreground" />,
      title: "Implementation & Support",
      description: "Both paths guarantee successful ERP implementation and ongoing support with clear contractual and operational responsibility."
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  return (
    <section className="py-24 bg-card border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">The Delivery Model</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
            Accountable coordination from discovery to deployment.
          </h3>
        </div>

        <div ref={ref} className="relative max-w-6xl mx-auto z-10">
          {/* Static Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2rem] left-[12.5%] right-[12.5%] h-[2px] bg-border -z-10" />

          {/* Animated Progress Line (Desktop) */}
          {!shouldReduceMotion && (
            <motion.div
              className="hidden lg:block absolute top-[2rem] left-[12.5%] h-[2px] bg-primary -z-10"
              style={{ width: "75%", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            />
          )}

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4"
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
          >
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                variants={shouldReduceMotion ? undefined : itemVariants} 
                className="relative flex flex-col items-center lg:items-start"
              >
                {/* Mobile/Tablet Static Connection Line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[4rem] left-[50%] w-[2px] h-[calc(100%+3rem)] bg-border -z-10 -translate-x-1/2" />
                )}

                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-border shadow-sm mb-6 mx-auto lg:mx-0 relative z-20">
                  {step.icon}
                </div>
                <h4 className="text-xl font-serif font-medium text-foreground mb-3 text-center lg:text-left">{step.title}</h4>
                <p className="text-muted-foreground text-center lg:text-left leading-relaxed text-sm lg:pr-6">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
