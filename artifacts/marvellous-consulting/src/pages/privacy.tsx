import { SEO } from "@/components/seo"

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <SEO title="Privacy Policy" description="Privacy policy for Marvellous Consulting." />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-serif">
        <h1 className="text-4xl font-medium mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <p>
          Marvellous Consulting ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights.
        </p>
        
        <h2>1. Important Information and Who We Are</h2>
        <p>
          This website is not intended for children and we do not knowingly collect data relating to children. We are the controller and responsible for your personal data.
        </p>
        
        <h2>2. The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul>
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
        </ul>
        
        <h2>3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. Client data exchanged after engagement is subject to stringent security protocols not covered by this general website policy.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us via our contact form or by using the details provided on our website.
        </p>
      </div>
    </div>
  )
}
