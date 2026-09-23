# Privacy policy factual review

Reviewed: 22 September 2026. Status: draft; operator information and production settings are still required. No deployment has been performed. The draft is not a completed transparency notice.

## What the repository establishes

| Activity | Evidence | What remains unknown |
| --- | --- | --- |
| Operator | `src/config/site.ts` contains the trading name and published contact email; address values are placeholders. | Actual legal operator, legal form, postal address and any appointed DPO. The user confirmed the published email is the privacy contact. |
| Hosting | `vercel.json` and the app README configure Vercel deployment. | Actual production host, contracting entity, regions, log fields, log retention, firewall settings and any log exports. |
| Enquiries | `src/pages/contact.tsx` requires name, email, enquiry type and message; company and phone are optional. A hidden `website` field filters spam. | Actual handling practices, other correspondence systems and retention. |
| Form delivery | `api/contact.js` calls Resend after validation. `CONTACT_EMAIL` receives the message; `CONTACT_CC_EMAIL` optionally receives a copy. No database write appears in this handler. It logs configuration/delivery errors. | Live Resend account/entity, receiving mailbox provider, copied recipients, provider message/log retention, backups and downstream CRM use. Absence of a database write does not establish absence of storage. |
| Monitoring | `src/App.tsx` mounts Vercel Analytics and Speed Insights without a consent gate. | Production enablement, project-specific collection and retention, recipients, legal basis and device-access assessment. SDK inclusion alone does not prove successful live collection. |
| Theme | `theme-provider.tsx` reads `marvellous-theme` on initial load and writes when a choice is made. No expiry or server transmission is implemented for that key. | Whether the chosen persistence period satisfies the requested-function exception and whether production adds other storage. |
| Fonts | `index.html` requests Inter and Playfair Display from Google Fonts; `src/index.css` imports Plus Jakarta Sans. | Actual recipient/transfer arrangements and the decision to keep external delivery or switch to local files. Do not describe these fonts as self-hosted. |
| Other browser storage | A reusable sidebar component writes a seven-day `sidebar_state` cookie, but no active route imports it. | Production runtime verification. Do not describe unused component code as an active cookie or claim that the whole website is cookie-free. |
| Partner introductions | Marketing content offers partner selection. | Actual disclosure trigger, fields shared, recipients and roles, lawful basis, consent/request records, retention and overseas recipients. |

## Information to provide

- Controller: full legal name/legal form, trading name, postal address including country, and any appointed DPO. Privacy contact confirmed by the user: `info@marvellous-consulting.com`.
- Hosting: actual provider and contracting entity; request, security and runtime log fields; processing locations; retention per log type and any exports.
- Enquiries: live form provider; receiving mailbox provider; copied/shared recipients; other communication/CRM services; deletion/review criteria and any applicable record-retention duties.
- Introductions: when sharing occurs, the information shared, recipient categories, recipients' roles, how the introduction is requested/authorised, retention and recipient countries.
- Monitoring: which Vercel tools are actually enabled, purpose, data fields, settings, retention and the basis for each activity.
- Transfers: recipient entity, country, actual contract/processing locations, remote access, applicable transfer mechanism and how safeguard documentation can be obtained. A provider's general website is not evidence of the site's contract.
- Rights: operator location for the supervisory authority, and any relevant automated decision-making.

Unknown items should remain explicitly unresolved. Do not supply API keys or mailbox passwords.

## Basis and storage assessment to finish

The draft distinguishes contractual enquiries from general business correspondence and keeps their proposed bases subject to the real process. Partner disclosure requires its own assessment; submitting the form does not by itself establish permission to share it. The GDPR requires processing-specific information and cannot be completed by listing every possible basis. [GDPR, Articles 6 and 13](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng).

Device storage/access requires a separate assessment under §25 TDDDG. Its exceptions concern transmission alone or strict necessity for a service the user explicitly requests. The saved theme serves a selected display preference, but persistence and subsequent access still need a necessity assessment. Optional usage and performance tools should not inherit that justification. No conclusion that they are exempt follows merely from a cookieless design. If the retained tools need consent, they need an actual control before collection and a withdrawal mechanism; policy wording alone does not implement either. [§25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html), [German supervisory-authority guidance](https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/publikationen/DSK/2024/2024_DSK-OH_Digitale-Dienste.pdf).

Provider references describe products, not this site's enabled settings or contracts: [Vercel Web Analytics privacy information](https://vercel.com/docs/analytics/privacy-policy), [Speed Insights privacy information](https://vercel.com/docs/speed-insights/privacy-policy). Rights wording was checked against the [European Commission's information for individuals](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en).

## Draft changes

The replacement has all nine requested topic areas, a fixed draft revision date, exact form fields, separate processing activities, explicit missing facts, and rights/complaint information. It removes the unsupported security claims and generic login/identity-data categories. It does not invent a legal operator, contract entity, retention period, consent workflow or transfer safeguard. Existing analytics and external fonts have not been removed, so their sections remain.

Before publication, resolve the bracketed items, verify the running production services and any necessary controls, then replace the draft status with the actual fixed publication/revision date.
