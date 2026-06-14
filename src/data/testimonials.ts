// ─────────────────────────────────────────────────────────────────────────
// CLIENT TESTIMONIALS  —  real, verbatim Google reviews for Lead Surges
// ─────────────────────────────────────────────────────────────────────────
// Every entry below is a genuine 5-star Google review (real: true), so each
// emits Review structured data. Quotes are kept faithful to the originals;
// longer reviews are trimmed at a complete sentence (no words added).
// `result` chips use ONLY figures the reviewer actually stated — do not add
// invented performance numbers here. The verified aggregate rating
// (5.0★, 32 reviews) lives separately in ./reviews.ts.

// Section is live (real content). Set false to hide it (renders in dev only).
export const testimonialsReady = true;

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** Optional headline result. Use only numbers the reviewer actually stated. */
  result?: string;
  /** True for genuine, verifiable reviews. Gates Review schema. */
  real: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'We were referred to Nathan and his team. We went from a few phone calls a day to over 15 booked appointments a day. Nathan and his team are forever hired.',
    name: 'Chris Otten',
    business: 'Local service business',
    result: '15+ booked appts/day',
    real: true,
  },
  {
    quote:
      'They are managing our car dealership leads. We have a budget of more than half a million dollars a year.',
    name: 'Guadalupe Andreu',
    business: 'Auto dealership',
    result: '$500K+/yr ad budget',
    real: true,
  },
  {
    quote:
      'Nathan and his team are doing a wonderful job on our Google Adwords. He has our Cost Per Click extremely low.',
    name: 'Brian Gray',
    business: 'Google Ads client',
    result: 'Low cost-per-click',
    real: true,
  },
  {
    quote:
      'Our cost for advertising has been reduced and our revenue has increased. Couldn’t ask for a better company to work with.',
    name: 'Letty G.',
    business: 'Google Local Guide',
    result: 'Lower cost, higher revenue',
    real: true,
  },
  {
    quote:
      'Results are what we were looking for. We got them with Nathan and we are getting an influx of phone calls and making money.',
    name: 'Eileen Harang',
    business: 'Verified Google review',
    result: 'More inbound calls',
    real: true,
  },
  {
    quote:
      'Working with Nathan’s company has been an absolute game-changer for our real estate business in Victorville.',
    name: 'Jeff Kelsoe',
    business: 'Real estate · Victorville',
    real: true,
  },
];

/** Genuine reviews only — used to emit Review structured data. */
export const realTestimonials = testimonials.filter((t) => t.real);

// Headline stats strip. These are the verified review figures (all true).
// Want to feature campaign performance instead? Swap in real, defensible
// numbers once you have them, e.g.:
//   { value: '+140%', label: 'average organic traffic growth' }
export const resultStats: { value: string; label: string }[] = [
  { value: '5.0★', label: 'average rating on Google' },
  { value: '32', label: 'verified 5-star reviews' },
  { value: '100%', label: 'five-star reviews' },
];
