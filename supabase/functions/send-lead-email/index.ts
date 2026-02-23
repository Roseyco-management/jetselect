import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "re_Py63r1q9_5US89VbwBnWFT2jNtWN86xFb";
const NOTIFICATION_TO = "contact@jetselect.nl";
const FROM = "JetSelect <noreply@jetselect.nl>";
const REPLY_TO = "contact@jetselect.nl";

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  record: Record<string, unknown>;
  schema: string;
  old_record: Record<string, unknown> | null;
}

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, reply_to: REPLY_TO, to: [to], subject, html }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}

// ─── Label helpers ────────────────────────────────────────────────────────────

function rangeLabel(v: unknown) {
  const map: Record<string, string> = {
    short: "Kort (<2 uur)",
    medium: "Middellang (2–4 uur)",
    long: "Lang (4+ uur)",
  };
  return map[String(v)] ?? String(v ?? "–");
}

function priorityLabel(v: unknown) {
  const map: Record<string, string> = {
    luxury: "Luxe",
    speed: "Snelheid",
    cost: "Kostenbesparing",
  };
  return map[String(v)] ?? String(v ?? "–");
}

function runwayLabel(v: unknown) {
  const map: Record<string, string> = {
    major: "Grote luchthavens",
    regional: "Regionale luchthavens",
    remote: "Afgelegen / klein",
  };
  return map[String(v)] ?? String(v ?? "–");
}

function budgetLabel(v: unknown) {
  const map: Record<string, string> = {
    entry: "Entry level",
    mid: "Mid-range",
    premium: "Premium",
    ultra: "Ultra / VIP",
  };
  return map[String(v)] ?? String(v ?? "–");
}

// ─── Email templates ──────────────────────────────────────────────────────────

function wizardNotification(r: Record<string, unknown>) {
  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;padding:24px 32px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">✈️ Nieuwe lead via keuzewizard</h1>
  </div>
  <div style="background:#f8f8f8;padding:32px;border-radius:0 0 8px 8px">

    <h2 style="margin:0 0 16px;font-size:16px;color:#555;text-transform:uppercase;letter-spacing:.05em">Contactgegevens</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;width:40%;color:#666">Naam</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${r.name ?? "–"}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5"><a href="mailto:${r.email}" style="color:#1a6ef7">${r.email ?? "–"}</a></td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">Telefoon</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5"><a href="tel:${r.phone}" style="color:#1a6ef7">${r.phone ?? "–"}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666">Bedrijf</td><td style="padding:8px 0">${r.company ?? "–"}</td></tr>
    </table>

    <h2 style="margin:0 0 16px;font-size:16px;color:#555;text-transform:uppercase;letter-spacing:.05em">Jet-wensen</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;width:40%;color:#666">Vliegbereik</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${rangeLabel(r.range)}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">Passagiers</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${r.passenger_count ?? "–"}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">Prioriteit</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${priorityLabel(r.aircraft_type)}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">Landingsbaan</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${runwayLabel(r.timeline)}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0;font-weight:600">${budgetLabel(r.budget)}</td></tr>
    </table>

    ${r.notes ? `<h2 style="margin:0 0 8px;font-size:16px;color:#555;text-transform:uppercase;letter-spacing:.05em">Notities</h2><p style="margin:0 0 28px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e5e5e5">${r.notes}</p>` : ""}

    <a href="mailto:${r.email}?subject=Re: uw jet-aanvraag&body=Beste ${r.name}," style="display:inline-block;background:#0a0a0a;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600">Direct beantwoorden</a>
  </div>
</div>`;
}

function wizardConfirmation(r: Record<string, unknown>) {
  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;padding:24px 32px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">JetSelect – Aanvraag ontvangen</h1>
  </div>
  <div style="background:#f8f8f8;padding:32px;border-radius:0 0 8px 8px">
    <p style="margin:0 0 16px">Beste ${r.name},</p>
    <p style="margin:0 0 16px">Bedankt voor uw aanvraag via de JetSelect keuzewizard. We hebben uw wensen goed ontvangen en nemen zo spoedig mogelijk contact met u op — doorgaans binnen één werkdag.</p>
    <p style="margin:0 0 24px">Heeft u een urgente vraag? Neem direct contact op via <a href="mailto:contact@jetselect.nl" style="color:#1a6ef7">contact@jetselect.nl</a>.</p>
    <p style="margin:0;color:#888;font-size:14px">Met vriendelijke groet,<br><strong style="color:#1a1a1a">Het JetSelect team</strong></p>
  </div>
</div>`;
}

function contactNotification(r: Record<string, unknown>) {
  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;padding:24px 32px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">📩 Nieuw contactformulier</h1>
  </div>
  <div style="background:#f8f8f8;padding:32px;border-radius:0 0 8px 8px">
    <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;width:40%;color:#666">Naam</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${r.name ?? "–"}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#666">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5"><a href="mailto:${r.email}" style="color:#1a6ef7">${r.email ?? "–"}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666">Telefoon</td><td style="padding:8px 0"><a href="tel:${r.phone}" style="color:#1a6ef7">${r.phone ?? "–"}</a></td></tr>
    </table>
    <h2 style="margin:0 0 8px;font-size:16px;color:#555;text-transform:uppercase;letter-spacing:.05em">Bericht</h2>
    <p style="margin:0 0 28px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e5e5e5">${r.message ?? "–"}</p>
    <a href="mailto:${r.email}?subject=Re: uw bericht aan JetSelect&body=Beste ${r.name}," style="display:inline-block;background:#0a0a0a;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600">Direct beantwoorden</a>
  </div>
</div>`;
}

function contactConfirmation(r: Record<string, unknown>) {
  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;padding:24px 32px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">JetSelect – Bericht ontvangen</h1>
  </div>
  <div style="background:#f8f8f8;padding:32px;border-radius:0 0 8px 8px">
    <p style="margin:0 0 16px">Beste ${r.name},</p>
    <p style="margin:0 0 16px">Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.</p>
    <p style="margin:0 0 24px">Heeft u een urgente vraag? Bel of mail ons via <a href="mailto:contact@jetselect.nl" style="color:#1a6ef7">contact@jetselect.nl</a>.</p>
    <p style="margin:0;color:#888;font-size:14px">Met vriendelijke groet,<br><strong style="color:#1a1a1a">Het JetSelect team</strong></p>
  </div>
</div>`;
}

function callbackNotification(r: Record<string, unknown>) {
  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#0a0a0a;padding:24px 32px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">📞 Terugbelverzoek</h1>
  </div>
  <div style="background:#f8f8f8;padding:32px;border-radius:0 0 8px 8px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;width:40%;color:#666">Naam</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-weight:600">${r.name ?? "–"}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Telefoon</td><td style="padding:8px 0"><a href="tel:${r.phone}" style="color:#1a6ef7;font-weight:600;font-size:18px">${r.phone ?? "–"}</a></td></tr>
    </table>
  </div>
</div>`;
}

// ─── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const payload: WebhookPayload = await req.json();

    if (payload.type !== "INSERT") {
      return new Response("OK", { status: 200 });
    }

    const { table, record } = payload;

    if (table === "wizard_submissions") {
      await sendEmail(
        NOTIFICATION_TO,
        `✈️ Nieuwe lead via keuzewizard – ${record.name}`,
        wizardNotification(record)
      );
      if (record.email) {
        await sendEmail(
          String(record.email),
          "JetSelect – Wij hebben uw aanvraag ontvangen",
          wizardConfirmation(record)
        );
      }
    } else if (table === "contact_submissions") {
      await sendEmail(
        NOTIFICATION_TO,
        `📩 Nieuw contactformulier – ${record.name}`,
        contactNotification(record)
      );
      if (record.email) {
        await sendEmail(
          String(record.email),
          "JetSelect – Wij hebben uw bericht ontvangen",
          contactConfirmation(record)
        );
      }
    } else if (table === "callback_requests") {
      await sendEmail(
        NOTIFICATION_TO,
        `📞 Terugbelverzoek – ${record.name} (${record.phone})`,
        callbackNotification(record)
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
