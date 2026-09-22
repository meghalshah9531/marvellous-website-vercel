export const siteConfig = {
  name: "Marvellous Consulting",
  description: "ERP advisory, solution design, and implementation coordination firm.",
  url: "https://marvellous-consulting.com", // {{PLACEHOLDER}}
  email: "info@marvellous-consulting.com",
  phone: "+49 155 6590 4343",
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
    linkedin: "https://www.linkedin.com/company/marvellous-consulting", // {{PLACEHOLDER}}
  },
  disclaimer: {
    odoo: "Odoo is a registered trademark of Odoo S.A. Marvellous Consulting is an independent advisory and implementation coordination partner and is not directly affiliated with Odoo S.A."
  }
} as const;

export type SiteConfig = typeof siteConfig;
