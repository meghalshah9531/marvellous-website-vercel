import { SEO } from "@/components/seo"
import { CtaSection } from "@/components/cta-section"
import { HomeHero } from "@/components/home-hero"
import { ProcessOverview } from "@/components/process-overview"
import { ProjectRoles } from "@/components/project-roles"
import { ErpDelivery } from "@/components/erp-delivery"

export default function Home() {
  return (
    <div id="home" className="pt-24 min-h-screen">
      <SEO />
      
      <HomeHero />
      <ProcessOverview />
      <ProjectRoles />
      <ErpDelivery />

      <div id="contact-us" className="scroll-mt-24"><CtaSection /></div>
    </div>
  )
}
