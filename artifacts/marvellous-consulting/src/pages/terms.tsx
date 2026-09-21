import { SEO } from "@/components/seo"

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <SEO title="Terms of Service" description="Terms of service for Marvellous Consulting." />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-serif">
        <h1 className="text-4xl font-medium mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Marvellous Consulting website operated by Marvellous Consulting ("us", "we", or "our").
        </p>
        
        <h2>1. No Professional-Client Relationship</h2>
        <p>
          The information contained on this website is provided for informational purposes only and should not be construed as formal advisory, legal, or financial advice on any subject matter. No recipients of content from this site, clients or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue.
        </p>
        <p>
          Your use of this website or submission of an inquiry via our contact form does not create a professional-client relationship between you and Marvellous Consulting. A formal relationship is only established upon mutual execution of a written engagement letter.
        </p>
        
        <h2>2. Intellectual Property</h2>
        <p>
          The Site and its original content, features, and functionality are owned by Marvellous Consulting and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p>
          "Odoo" is a registered trademark of Odoo S.A. Marvellous Consulting is an independent professional advisory firm and is not directly affiliated with, sponsored by, or endorsed by Odoo S.A.
        </p>
        
        <h2>3. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Marvellous Consulting.
        </p>
        <p>
          Marvellous Consulting has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Marvellous Consulting shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
        
        <h2>4. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>
      </div>
    </div>
  )
}
