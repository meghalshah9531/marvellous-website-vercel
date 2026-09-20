export const siteConfig = {
  name: "Marvellous Consulting",
  description: "ERP advisory, solution design, and implementation coordination firm.",
  url: "https://marvellousconsulting.com", // {{PLACEHOLDER}}
  email: "{{BUSINESS_EMAIL}}",
  phone: "{{BUSINESS_PHONE}}",
  address: {
    street: "{{BUSINESS_ADDRESS_STREET}}",
    city: "{{BUSINESS_ADDRESS_CITY}}",
    state: "{{BUSINESS_ADDRESS_STATE}}",
    zip: "{{BUSINESS_ADDRESS_ZIP}}",
  },
  hours: "{{BUSINESS_HOURS}}",
  calendarUrl: "{{CALENDAR_URL}}",
  yearsExperience: "9+ Years of Personal Experience",
  social: {
    linkedin: "https://linkedin.com/company/marvellous-consulting", // {{PLACEHOLDER}}
  },
  partners: {
    erp: {
      name: "{{ERP_LEAD_NAME}}",
      credentials: "{{ERP_CREDENTIALS}}",
      title: "Managing Partner, Advisory & Strategy",
      bio: "With extensive experience in enterprise architecture, they lead discovery, solution strategy, and commercial coordination. Their focus is ensuring the operational scope perfectly aligns with the selected delivery model."
    },
    delivery: {
      name: "{{DELIVERY_LEAD_NAME}}",
      credentials: "{{DELIVERY_CREDENTIALS}}",
      title: "Partner, Implementation & Delivery",
      bio: "Overseeing the execution phase, they ensure clear contractual and operational responsibility whether the project is delivered through a specialist partner or an internal team."
    }
  },
  disclaimer: {
    odoo: "Odoo is a registered trademark of Odoo S.A. Marvellous Consulting is an independent advisory and implementation coordination partner and is not directly affiliated with Odoo S.A."
  }
} as const;

export type SiteConfig = typeof siteConfig;
