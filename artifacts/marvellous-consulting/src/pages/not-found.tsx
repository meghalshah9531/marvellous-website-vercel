import { SEO } from "@/components/seo"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SEO title="Page Not Found" />
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-7xl font-serif font-bold text-primary">404</h1>
        <h2 className="text-2xl font-serif font-medium text-foreground">Page not found</h2>
        <p className="text-muted-foreground text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
