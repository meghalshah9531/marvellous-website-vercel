import { useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/odoo", label: "ERP Advisory & Delivery" },
  { href: "/about", label: "About Firm" },
  { href: "/odoo#partners", label: "For Partners" },
]

export function Navbar() {
  const [location] = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-3" 
          : "bg-background border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg transition-transform group-hover:scale-105">
              M
            </div>
            <span className="font-serif font-semibold text-lg hidden sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-3 lg:gap-5 text-xs lg:text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "transition-colors hover:text-primary relative py-1",
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-l border-border pl-3 lg:pl-5">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="size-8 shrink-0 text-muted-foreground/70 hover:text-foreground"
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                <Sun aria-hidden="true" className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon aria-hidden="true" className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button asChild variant="secondary" className="font-medium">
                <Link href="/contact">Consultation</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="size-8 text-muted-foreground/70 hover:text-foreground"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              <Sun aria-hidden="true" className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon aria-hidden="true" className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  location === link.href ? "text-primary font-semibold" : "text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <Button asChild variant="secondary" className="w-full justify-center">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
