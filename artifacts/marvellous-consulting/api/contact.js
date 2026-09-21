import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(40).optional(),
  service: z.enum(["erp_advisory", "implementation_coordination", "system_audit", "other"]),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(200).optional(),
});

const labels = {
  erp_advisory: "ERP Advisory & Strategy",
  implementation_coordination: "Implementation Coordination",
  system_audit: "System Audit & Rescue",
  other: "General Inquiry",
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function json(body, status) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export default {
  async fetch(request) {
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
    const origin = request.headers.get("origin");
    if (!origin || origin !== new URL(request.url).origin) {
      return json({ error: "This request cannot be accepted." }, 403);
    }
    if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
      return json({ error: "Please submit the form again." }, 415);
    }
    if (Number(request.headers.get("content-length") || 0) > 12000) {
      return json({ error: "Message is too long." }, 413);
    }

    let input;
    try {
      const raw = await request.text();
      if (raw.length > 12000) return json({ error: "Message is too long." }, 413);
      input = JSON.parse(raw);
    } catch {
      return json({ error: "Please review the form and try again." }, 400);
    }
    const result = schema.safeParse(input);
    if (!result.success) return json({ error: "Please review the form and try again." }, 400);
    if (result.data.website) return json({ success: true, message: "Thank you." }, 200);

    const key = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;
    const cc = process.env.CONTACT_CC_EMAIL;
    if (!key || !recipient || !sender) {
      console.error("Contact email configuration is incomplete");
      return json({ error: "The contact form is temporarily unavailable. Please email us directly." }, 503);
    }

    const { name, email, phone, service, message } = result.data;
    try {
      const delivery = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          ...(cc ? { cc: [cc] } : {}),
          reply_to: email,
          subject: `New ERP inquiry: ${labels[service]}`,
          html: `<h1>New ERP inquiry</h1><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Phone:</b> ${escapeHtml(phone || "Not provided")}</p><p><b>Interest:</b> ${escapeHtml(labels[service])}</p><p><b>Message:</b></p><p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
        }),
      });
      if (!delivery.ok) {
        console.error("Email delivery rejected", delivery.status);
        return json({ error: "We could not send your inquiry. Please email us directly." }, 502);
      }
      return json({ success: true, message: "Thank you. Your inquiry has been sent." }, 200);
    } catch (error) {
      console.error("Email delivery failed", error);
      return json({ error: "We could not send your inquiry. Please email us directly." }, 502);
    }
  },
};
