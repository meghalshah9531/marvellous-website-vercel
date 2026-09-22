import type { ReactNode } from "react"
import { SEO } from "@/components/seo"
import { siteConfig } from "@/config/site"

// This remains a review draft until the operator supplies the bracketed facts
// and the processing described here is checked against the production services.
const revisionDate = "2026-09-22"

function ToConfirm({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-secondary pl-4 text-muted-foreground">
      <strong>Before publication:</strong> [{children}]
    </p>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <SEO title="Privacy Policy — Draft" description="Privacy policy draft awaiting confirmation of operator and processing details." />

      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-serif">
        <h1 className="text-4xl font-medium mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Draft revised: <time dateTime={revisionDate}>22 September 2026</time></p>
        <aside aria-label="Draft status" className="not-prose rounded-xl border border-secondary/40 bg-card p-5 my-8">
          <p className="font-semibold text-foreground">Draft — not ready for publication</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This draft distinguishes the current website configuration from operational details that still need confirmation.
            Bracketed items must be completed and checked before this becomes the published privacy policy.
          </p>
        </aside>
        <p>
          This policy covers personal data processed when you visit this website, make an enquiry,
          communicate with us, or request an introduction to an ERP implementation partner.
        </p>

        <h2>1. Who is responsible for your data?</h2>
        <p><strong>Trading name:</strong> {siteConfig.name}</p>
        <ToConfirm>Full legal name of the operator, legal form where applicable, and complete postal address including country. Identify the individual or entity behind the trading name.</ToConfirm>
        <p>
          <strong>Privacy contact:</strong>{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <p>You can send privacy questions and requests to exercise your rights directly to this address.</p>
        <ToConfirm>Add data protection officer contact details if one has been appointed.</ToConfirm>

        <h2>2. Website hosting and technical logs</h2>
        <p>
          The website is configured for deployment on Vercel. Delivering pages and processing form submissions
          involves network requests; the live hosting account and its logging configuration still need confirmation.
        </p>
        <ToConfirm>Actual hosting provider and contracting entity, processing locations, and enabled CDN, firewall, runtime and access logs. List the technical fields actually processed or stored, such as IP addresses, request times, URLs, browser information and response status, only where verified.</ToConfirm>
        <p>
          <strong>Purpose and basis to confirm:</strong> delivering the site, diagnosing faults and preventing abuse.
          Article 6(1)(f) GDPR may apply where necessary for these legitimate interests, subject to the actual processing and balancing assessment.
        </p>
        <ToConfirm>Retention for each log category, deletion settings, any log exports, and the applicable legal basis for each purpose.</ToConfirm>

        <h2>3. Contact enquiries</h2>
        <p>
          The form requests your name, email address, enquiry type and message. Company name and telephone number
          are optional. These details are used to understand and respond to your enquiry. Without the required fields,
          the form cannot be submitted. You can also contact the published email address directly.
        </p>
        <p>
          The form includes a hidden field to help filter automated spam. The configured form service sends validated
          enquiries through Resend to the configured receiving inbox, with an optional copied recipient.
          Replies and subsequent correspondence also involve the receiving email service.
        </p>
        <p>
          <strong>Basis to confirm:</strong> Article 6(1)(b) GDPR for necessary steps towards a contract with you at your request;
          Article 6(1)(f) for other business correspondence, including contact on behalf of an organisation,
          where our interest in answering enquiries justifies the processing.
        </p>
        <ToConfirm>Confirm live use and contracting entity of Resend, the receiving mailbox provider, any copied recipients or shared inbox access, other communication or CRM services, and retention of messages and delivery records. Confirm the enquiry and spam-prevention bases separately.</ToConfirm>

        <h2>4. Partner introductions</h2>
        <ToConfirm>Describe the actual introduction process: when information is shared; which contact details, project requirements or correspondence are disclosed; which implementation partners or recipient categories receive it; and whether those recipients act independently or on instructions. Confirm any overseas recipients.</ToConfirm>
        <ToConfirm>Specify the basis that matches this process. If relying on consent under Article 6(1)(a) GDPR, describe how it is obtained and withdrawn. Do not claim that every enquiry authorises disclosure. If another basis applies, document why it covers the particular introduction and data shared.</ToConfirm>

        <h2>5. Analytics and performance monitoring</h2>
        <p>
          The website includes Vercel Web Analytics for usage statistics and Vercel Speed Insights for loading and
          responsiveness measurements. Both integrations are mounted at application level; the current code does
          not contain a consent control for them. Their production enablement still needs confirmation.
        </p>
        <p>
          Vercel describes Web Analytics data as including page URLs, referrers, event times, location and device/browser
          information. Speed Insights records performance measurements with page, device and network context.
          These provider descriptions must be checked against the tools and settings retained for this site.
          See the provider information for{" "}
          <a href="https://vercel.com/docs/analytics/privacy-policy">Web Analytics</a> and{" "}
          <a href="https://vercel.com/docs/speed-insights/privacy-policy">Speed Insights</a>.
        </p>
        <ToConfirm>Confirm which tools are enabled, their purposes, recipients, data fields, retention, processing locations and legal bases. Assess device access separately under §25 TDDDG; a claim that a tool is cookieless does not settle that question. If consent is required, implement it before collection and describe withdrawal. Remove this section only after removing these tools and checking that no equivalent processing remains.</ToConfirm>

        <h2>6. Browser storage and external resources</h2>
        <h3>Theme preference</h3>
        <p>
          When you choose a theme, this website saves the selection in your browser under the local-storage key
          <code>marvellous-theme</code> and reads it on later visits. No expiry is set by the application.
          It remains until overwritten or cleared through your browser, which also resets the saved preference.
          Without a saved choice, the site follows your system theme.
        </p>
        <ToConfirm>Assess whether storing and reading the preference, including its duration, is strictly necessary for the theme service explicitly requested by the visitor under §25(2)(2) TDDDG. Otherwise obtain consent or change the storage behaviour. Confirm the GDPR basis where personal data is involved and inventory any additional production storage.</ToConfirm>
        <h3>Fonts and external links</h3>
        <p>
          The current website requests Inter, Playfair Display and Plus Jakarta Sans fonts from Google Fonts,
          using fonts.googleapis.com and fonts.gstatic.com. These requests contact Google servers and disclose
          the requesting IP address and associated request information. The fonts are not currently hosted locally.
        </p>
        <ToConfirm>Confirm the font-service recipient, legal basis, processing locations and applicable transfer arrangements, or host the fonts locally and remove the external requests before deleting this description.</ToConfirm>
        <p>
          LinkedIn is linked from the site rather than embedded as a social widget. Following that link opens
          LinkedIn, where its own data-processing information applies.
        </p>

        <h2>7. International transfers</h2>
        <ToConfirm>For the confirmed host, Resend, mailbox provider, analytics/performance services, external font service and any overseas partners, identify processing or remote access outside the EEA, the recipient and country, and the mechanism actually relied on. Verify the scope of any adequacy decision or applicable contractual safeguards, and explain how a copy can be obtained. Do not infer safeguards from a provider name or an EU server setting.</ToConfirm>

        <h2>8. Retention</h2>
        <p>Retention must be specified by processing activity; one period does not describe all of these records.</p>
        <ul>
          <li><strong>Technical and security logs:</strong> [Confirmed periods for each enabled log category, including exports and incident records.]</li>
          <li><strong>Enquiries and correspondence:</strong> [Actual deletion period or review criteria after the enquiry is resolved, including how ongoing discussions and any resulting engagement affect retention.]</li>
          <li><strong>Email delivery and partner introductions:</strong> [Provider record-retention settings and criteria for retaining introduction correspondence or consent records.]</li>
          <li><strong>Analytics and performance records:</strong> [Confirmed retention settings for each retained tool; remove if the tools are removed.]</li>
          <li><strong>Saved theme:</strong> no application expiry; retained in the browser until overwritten or cleared, subject to the storage assessment above.</li>
        </ul>
        <ToConfirm>Identify records subject to an actual statutory retention duty or a necessary legal-claims hold, with the relevant period or criterion. Confirm deletion from mailboxes, CRM systems, provider logs and backups as applicable.</ToConfirm>

        <h2>9. Your rights and complaints</h2>
        <p>
          Subject to the applicable conditions, you can request access, correction, erasure, restriction and
          portability of your personal data. You can object to processing based on legitimate interests for reasons
          relating to your situation, and to direct marketing at any time.
        </p>
        <p>
          Where processing relies on consent, you can withdraw it for the future without affecting earlier lawful processing.
          Send requests to our privacy contact in section 1. Necessary identity checks may apply.
        </p>
        <p>
          You may complain to a data-protection supervisory authority, particularly where you live, work or believe
          an infringement occurred. You do not have to contact us first.
        </p>
        <ToConfirm>Add the competent supervisory authority and its contact or complaint link once the operator and location are confirmed. Confirm whether any solely automated decisions with legal or similarly significant effects occur before making a statement about them.</ToConfirm>
        <p>
          More information is available in the{" "}
          <a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en">European Commission’s guide to data-protection rights</a>.
        </p>
      </div>
    </div>
  )
}
