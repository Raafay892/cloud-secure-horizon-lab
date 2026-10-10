import { site } from "@/data/site";

// FormSubmit (https://formsubmit.co) relays form posts to the lab inbox; no backend or API key needed.
// The first submission sends a one-time "Activate Form" email to site.email that must be confirmed.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

interface SubmitOptions {
  subject: string;
  replyTo: string;
  fields: Record<string, string>;
  /** Value of the hidden honeypot field; bots fill it, people don't. */
  honeypot?: string;
}

export class FormSubmitError extends Error {}

export const submitForm = async ({ subject, replyTo, fields, honeypot }: SubmitOptions) => {
  if (honeypot) return; // silently drop spam

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _replyto: replyTo,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || String(data?.success) !== "true") {
    throw new FormSubmitError(data?.message || "The message could not be sent.");
  }
};
