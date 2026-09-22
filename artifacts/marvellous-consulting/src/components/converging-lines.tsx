import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

// Three lines—business needs, ERP, implementation expertise—gradually meeting.
export function ConvergingLines() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const reduceMotion = useReducedMotion()

  const lines = [
    { d: "M10,0 C10,40 30,72 50,100", color: "hsl(var(--primary))", delay: 0 },
    { d: "M50,0 C50,40 47,72 50,100", color: "hsl(var(--secondary))", delay: 0.15 },
    { d: "M90,0 C90,40 70,72 50,100", color: "hsl(var(--muted-foreground))", delay: 0.3 },
  ]

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className="hidden lg:block absolute inset-y-0 left-2 xl:left-6 w-16 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {lines.map((line) => (
        <motion.path
          key={line.d}
          d={line.d}
          fill="none"
          stroke={line.color}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={0.5}
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={isInView || reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, delay: line.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}
