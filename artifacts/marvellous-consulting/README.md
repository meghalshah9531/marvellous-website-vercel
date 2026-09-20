# Marvellous Consulting

Boutique firm providing ERP advisory, solution design, and implementation coordination.

## Tech Stack
- React + Vite
- Tailwind CSS v4
- wouter
- shadcn/ui
- React Hook Form + Zod
- Framer Motion

## Deploy on Vercel

1. Keep the full monorepo (including `lib/` and `pnpm-lock.yaml`) in Git. Import it in Vercel and set the project **Root Directory** to `artifacts/marvellous-consulting`.
2. Select the **Vite** framework. Use `pnpm run build` as the build command and `dist/public` as the output directory (also declared in `vercel.json`). Vercel should install dependencies from the monorepo workspace.
3. In Vercel Project Settings → Environment Variables, set `RESEND_API_KEY`, `CONTACT_EMAIL` (your receiving inbox), and `CONTACT_FROM_EMAIL` (e.g. `Marvellous Consulting <hello@yourdomain.com>`). Set them for Production and Preview as appropriate, then redeploy. Never prefix these secrets with `VITE_` or commit them.
4. Add and verify your sending domain in Resend. Add the DNS records Resend specifies for email sending; these are separate from Vercel's website DNS records. The sending domain must match `CONTACT_FROM_EMAIL`.
5. In Vercel Project Settings → Domains, add the desired domain and follow the exact DNS records Vercel shows. Keep existing MX records if your inbox is hosted elsewhere.
6. Replace the remaining `{{...}}` business and legal placeholders in `src/config/site.ts` and the site's legal pages before public launch. Submit a real contact form on the deployed domain and confirm delivery and Reply-To.
7. In Vercel's Firewall, add a rate-limit rule for `POST /api/contact` (for example, 5 requests per IP per 10 minutes) and publish the rule. Monitor legitimate enquiries and adjust the threshold if needed. Origin checks and the hidden spam field are useful filters, but are not a substitute for rate limiting.

The Vercel Function in `api/contact.js` accepts `/api/contact` submissions and sends them through Resend. It returns an error when delivery is unavailable, so the form cannot show a false success. The deployment package excludes the original unused API server and mockup app.

## Configuration

All business-specific copy, contact details, partner bios, and testimonials are centralized in `src/config/site.ts`.
Edit this file and replace all `{{PLACEHOLDER}}` values with real data before deploying.

## Theming

To swap the color palette, open `src/index.css` and modify the HSL values for `--primary`, `--secondary`, and `--background` variables under the `:root` (Light mode) and `.dark` (Dark mode) selectors. All shadcn/ui components will automatically adapt.
