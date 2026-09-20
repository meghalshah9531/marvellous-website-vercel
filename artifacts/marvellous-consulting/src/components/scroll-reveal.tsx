import * as React from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.7,
}: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  
  // Respect reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const initialValues = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    none: { opacity: 0 },
  }

  const animateValues = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    none: { opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialValues[direction]}
      animate={isInView ? animateValues[direction] : initialValues[direction]}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
