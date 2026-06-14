// ─────────────────────────────────────────────────────────────────────────
// CLIENT TESTIMONIALS  —  ⚠️ PLACEHOLDER CONTENT, REPLACE BEFORE DEPLOYING
// ─────────────────────────────────────────────────────────────────────────
// Every entry below is a placeholder. To activate one:
//   1. Paste a real Google review into `quote` and set `name` / `business`.
//   2. Fill `result` with the real headline metric (or set it to undefined).
//   3. Flip `real` to true.
// Only entries with `real: true` emit Review structured data (schema.org),
// so placeholder entries never become fake review markup. The verified
// aggregate rating (5.0★, 27 reviews) lives separately in ./reviews.ts.
// Reviewers most often mention: Google Ads, lead generation, cost-per-click,
// local SEO — good angles to look for when picking which reviews to feature.

// Flip to `true` once the testimonials below hold real content. While false,
// the section renders in local `npm run dev` (so you can preview/fill it) but
// is hidden on the production build — placeholders never reach live visitors.
export const testimonialsReady = false;

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** Optional headline result, e.g. "+140% leads in 6 months". */
  result?: string;
  /** Set true ONLY for a genuine, verifiable review. Gates Review schema. */
  real: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder — paste a real Google review here. Keep it specific: what changed, how fast, and what it meant for the business.',
    name: 'First L.',
    business: 'Business Name, Apple Valley',
    result: '+XX% leads',
    real: false,
  },
  {
    quote:
      'Placeholder — a second real client quote goes here. Reviews that mention calls, leads, or revenue convert best.',
    name: 'First L.',
    business: 'Business Name, Victorville',
    result: '+XX calls / mo',
    real: false,
  },
  {
    quote:
      'Placeholder — a third real client quote goes here. A different industry than the others adds credibility.',
    name: 'First L.',
    business: 'Business Name, Hesperia',
    result: '#X ranking',
    real: false,
  },
];

/** Genuine reviews only — used to emit Review structured data. */
export const realTestimonials = testimonials.filter((t) => t.real);

// Headline client results — ⚠️ PLACEHOLDER numbers, replace with real ones.
// Keep these defensible (averages or specific anonymized client outcomes).
export const resultStats: { value: string; label: string }[] = [
  { value: '+XXX%', label: 'average organic traffic growth' },
  { value: 'XX', label: 'more qualified leads per month' },
  { value: 'X mo', label: 'typical time to first-page rankings' },
];
