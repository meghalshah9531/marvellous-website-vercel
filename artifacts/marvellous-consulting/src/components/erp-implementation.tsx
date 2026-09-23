import { useId, useRef, useState, type CSSProperties } from "react"
import { useInView } from "framer-motion"
import { Boxes, ChartNoAxesCombined, Pause, Play, Settings2, Wallet } from "lucide-react"
import "./erp-implementation.css"

// Project a square plan into an isometric view. Height lifts each surface.
function point(x: number, y: number, height: number) {
  return `${260 + x - y},${100 + (x + y) / 2 - height}`
}

function surface(x: number, y: number, size: number, height: number) {
  return [point(x, y, height), point(x + size, y, height), point(x + size, y + size, height), point(x, y + size, height)].join(" ")
}

function Block({ x, y, size, height, depth, tone, topFill }: { x: number; y: number; size: number; height: number; depth: number; tone: "base" | "erp" | "module"; topFill?: string }) {
  return (
    <g className={`erp-block erp-block-${tone}`} strokeLinejoin="round">
      <polygon className="erp-face-left" points={[point(x, y + size, height), point(x + size, y + size, height), point(x + size, y + size, height - depth), point(x, y + size, height - depth)].join(" ")} />
      <polygon className="erp-face-right" points={[point(x + size, y, height), point(x + size, y + size, height), point(x + size, y + size, height - depth), point(x + size, y, height - depth)].join(" ")} />
      <polygon className="erp-face-top" style={{ fill: topFill }} points={surface(x, y, size, height)} />
    </g>
  )
}

// Each module assembles from its own side of the diamond layout: top, right, left, bottom.
const modules = [
  { label: "Sales", icon: ChartNoAxesCombined, x: 12, y: 12, fromX: 0, fromY: -80 },
  { label: "Finance", icon: Wallet, x: 106, y: 12, fromX: 80, fromY: 0 },
  { label: "Inventory", icon: Boxes, x: 12, y: 106, fromX: -80, fromY: 0 },
  { label: "Operations", icon: Settings2, x: 106, y: 106, fromX: 0, fromY: 80 },
]

export function ErpImplementation() {
  const id = useId()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const [paused, setPaused] = useState(false)

  return (
    <figure
      ref={ref}
      className="erp-implementation mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-primary/15 p-4 sm:p-6"
      data-running={inView && !paused}
    >
      <div className="flex min-h-9 items-center justify-between gap-3 px-2">
        <p className="text-sm font-semibold tracking-tight text-primary">Built around your business</p>
        <button
          type="button"
          onClick={() => setPaused(value => !value)}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hidden"
          aria-label={paused ? "Play ERP illustration" : "Pause ERP illustration"}
        >
          {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
        </button>
      </div>

      <svg
        viewBox="0 0 520 390"
        role="img"
        aria-label="An isometric model of Sales, Finance, Inventory, and Operations settling onto an ERP layer built around your business."
        className="mt-4 block w-full"
      >
        <defs>
          <linearGradient id={`${id}-module`} x1="0" y1="0" x2="1" y2="1">
            <stop className="erp-surface-highlight" offset="0%" />
            <stop className="erp-surface-shade" offset="100%" />
          </linearGradient>
          <linearGradient id={`${id}-platform`} x1="0" y1="0" x2="0.8" y2="1">
            <stop className="erp-platform-highlight" offset="0%" />
            <stop className="erp-platform-shade" offset="100%" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <g aria-hidden="true">
          <ellipse cx="260" cy="301" rx="174" ry="46" fill="hsl(var(--primary) / 0.13)" filter={`url(#${id}-shadow)`} />

          <g className="erp-business-foundation">
            <Block x={-15} y={-15} size={230} height={-42} depth={18} tone="base" />
            <g transform="rotate(26.565 76 277)">
              <text x="76" y="277" className="erp-business-label" fontSize="14" fontWeight="600" letterSpacing="0.3">
                Your Business
              </text>
            </g>
          </g>

          <g className="erp-foundation">
            <Block x={-5} y={-5} size={210} height={-6} depth={10} tone="erp" topFill={`url(#${id}-platform)`} />
            <g fill="none" stroke="hsl(var(--primary-foreground) / 0.08)" strokeWidth="1">
              <path d="M155 158.5 L365 263.5 M155 263.5 L365 158.5" />
            </g>
            <g className="erp-connections" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M80 211 L260 301 L440 211" />
              <path className="erp-signal" pathLength="1" d="M80 211 L260 301 L440 211" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" />
              <circle cx="80" cy="211" r="2.5" fill="hsl(var(--secondary))" stroke="none" />
              <circle cx="440" cy="211" r="2.5" fill="hsl(var(--secondary))" stroke="none" />
            </g>
          </g>

          {modules.map(({ label, icon: Icon, x, y, fromX, fromY }, index) => {
            const cx = 260 + x - y
            const cy = 100 + (x + y + 82) / 2 - 30
            return (
              <g
                key={label}
                className="erp-module"
                style={{ "--module-x": `${fromX}px`, "--module-y": `${fromY}px`, "--module-delay": `${index * 0.1}s` } as CSSProperties}
              >
                <polygon points={surface(x + 2, y + 2, 82, 0)} fill="hsl(var(--foreground) / 0.07)" />
                <Block x={x} y={y} size={82} height={30} depth={12} tone="module" topFill={`url(#${id}-module)`} />
                <Icon x={cx - 11} y={cy - 25} width={22} height={22} className="text-primary" strokeWidth={1.5} />
                <text x={cx} y={cy + 17} textAnchor="middle" className="fill-primary" fontSize="18" fontWeight="500" letterSpacing="-0.3">{label}</text>
              </g>
            )
          })}

        </g>
      </svg>

      <div className="mb-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground" aria-hidden="true">
        <span className="flex items-center gap-2"><span className="size-2.5 rounded-sm bg-primary" />ERP platform</span>
        <span className="flex items-center gap-2"><span className="erp-business-swatch size-2.5 rounded-sm border" />Your business</span>
      </div>
      <figcaption className="border-t border-primary/10 px-2 pb-1 pt-5 text-center">
        <p className="erp-caption text-sm font-medium text-primary sm:text-base">Your business. A connected system.</p>
      </figcaption>
    </figure>
  )
}
