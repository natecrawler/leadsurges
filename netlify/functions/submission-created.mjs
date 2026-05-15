// Netlify Function: triggered automatically every time a form is submitted.
// Receives the submission payload, builds a clean HTML email, and sends it
// via the Resend API (free tier: 3,000 emails/month).
//
// Required env var (set in Netlify dashboard → Site configuration → Environment variables):
//   RESEND_API_KEY  — from resend.com → API Keys

const RECIPIENT = 'nathanayala360@gmail.com';
const FROM_ADDRESS = 'Lead Surges <onboarding@resend.dev>'; // Resend's shared sender; works without domain verification

// Field display labels (in display order)
const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  business: 'Business',
  phone: 'Phone',
  website: 'Website',
  service: 'Service of interest',
  budget: 'Estimated budget',
  message: 'Message / goals',
  'tier-context': 'Plan of interest',
  subject: 'Subject',
};

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmail(payload) {
  const data = payload.data || {};
  const formName = payload.form_name || 'unknown';
  const submittedAt = payload.created_at || new Date().toISOString();
  const submitterName = data.name || data.email || 'unknown';

  // Build rows for any non-empty field we recognize, in label order
  const rows = Object.keys(FIELD_LABELS)
    .filter((k) => data[k])
    .map(
      (k) => `
        <tr>
          <td style="padding:10px 12px;font-weight:600;color:#444;width:160px;vertical-align:top;border-bottom:1px solid #eee;font-size:13px;text-transform:uppercase;letter-spacing:0.02em">${FIELD_LABELS[k]}</td>
          <td style="padding:10px 12px;color:#111;vertical-align:top;border-bottom:1px solid #eee;font-size:15px;white-space:pre-wrap;word-break:break-word">${escapeHtml(data[k])}</td>
        </tr>`
    )
    .join('');

  const formLabel = formName === 'consultation' ? 'Consultation request' : 'Contact form';

  const html = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:white;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08)">
        <tr>
          <td style="background:linear-gradient(135deg,#7e22ce,#d946ef);padding:20px 24px;color:white">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.85">New ${escapeHtml(formLabel)}</div>
            <div style="font-size:22px;font-weight:700;margin-top:4px">${escapeHtml(submitterName)}</div>
          </td>
        </tr>
        <tr><td style="padding:8px 24px 24px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px">
            ${rows}
          </table>
          <div style="margin-top:20px;font-size:13px;color:#888">
            Submitted ${escapeHtml(new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }))} · Form: <code style="background:#f0f0f3;padding:2px 6px;border-radius:4px;font-size:12px">${escapeHtml(formName)}</code>
          </div>
          ${data.email ? `<div style="margin-top:16px"><a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#7e22ce;color:white;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:600;font-size:14px">Reply to ${escapeHtml(data.name || data.email)}</a></div>` : ''}
        </td></tr>
        <tr><td style="background:#fafafb;padding:14px 24px;text-align:center;color:#aaa;font-size:12px">
          From leadsurges.com · <a href="https://app.netlify.com" style="color:#aaa">view in Netlify</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return {
    subject: `New ${formLabel}: ${submitterName}${data.business ? ` (${data.business})` : ''}`,
    html,
    replyTo: data.email,
  };
}

export default async (req) => {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set — submission email will not be sent');
    return new Response('Missing RESEND_API_KEY', { status: 500 });
  }

  let payload;
  try {
    const body = await req.json();
    // Netlify wraps the submission in { payload: {...} }
    payload = body.payload || body;
  } catch (e) {
    console.error('Could not parse request body', e);
    return new Response('Invalid payload', { status: 400 });
  }

  const { subject, html, replyTo } = buildEmail(payload);

  const resendBody = {
    from: FROM_ADDRESS,
    to: [RECIPIENT],
    subject,
    html,
  };
  if (replyTo) resendBody.reply_to = replyTo;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resendBody),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend API error', res.status, errText);
    return new Response(`Resend error: ${res.status}`, { status: 500 });
  }

  return new Response('Email sent', { status: 200 });
};
