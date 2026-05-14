export type Tier = {
  name: string;
  price: number | string;
  priceSuffix: string;
  desc: string;
  meta: string;
  featured: boolean;
  features: string[];
};

export const paidSearchTiers: Tier[] = [
  {
    name: 'Launch',
    price: 750,
    priceSuffix: '/month',
    desc: 'For businesses launching their first Google Ads campaigns.',
    meta: 'Manages up to $3,000/mo in ad spend',
    featured: false,
    features: [
      'Account setup & strategy',
      'Search campaign management',
      'Conversion tracking setup',
      'Ad copy + A/B testing',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: 1500,
    priceSuffix: '/month',
    desc: 'Most popular — for businesses ready to scale paid acquisition.',
    meta: 'Manages up to $10,000/mo in ad spend',
    featured: true,
    features: [
      'Everything in Launch',
      'Multi-campaign architecture',
      'Display + retargeting',
      'Landing page recommendations',
      'Bi-weekly optimization calls',
      'Competitor monitoring',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    priceSuffix: '',
    desc: 'For businesses spending $10k+/month on ads.',
    meta: 'Typically 10–15% of monthly ad spend',
    featured: false,
    features: [
      'Everything in Growth',
      'Shopping & Performance Max',
      'Dedicated strategist',
      'Weekly reporting + calls',
      'Creative production support',
      'Priority response',
    ],
  },
];

export const seoTiers: Tier[] = [
  {
    name: 'Bronze',
    price: 1500,
    priceSuffix: '/month',
    desc: 'Solid foundation for businesses just getting serious about SEO.',
    meta: '4 target keywords',
    featured: false,
    features: [
      'On-page optimization',
      'Keyword research',
      'Link acquisition',
      'Content creation',
      'Monthly strategy call',
      'Performance reporting',
    ],
  },
  {
    name: 'Silver',
    price: 2000,
    priceSuffix: '/month',
    desc: 'Most popular — built to accelerate growth for established businesses.',
    meta: '6 target keywords',
    featured: true,
    features: [
      'Everything in Bronze',
      'Expanded content production',
      'Aggressive link building',
      'Competitor monitoring',
      'Priority response',
    ],
  },
  {
    name: 'Gold',
    price: 3000,
    priceSuffix: '/month',
    desc: 'Maximum velocity for businesses serious about dominating their market.',
    meta: '10 target keywords',
    featured: false,
    features: [
      'Everything in Silver',
      'Full content strategy',
      'Premium link building',
      'Technical SEO deep-dives',
      'Dedicated strategist',
    ],
  },
];

export const webDesignTiers: Tier[] = [
  {
    name: 'Essentials',
    price: 3500,
    priceSuffix: ' one-time',
    desc: 'A clean, fast site for businesses that need to launch quickly.',
    meta: 'Up to 5 pages',
    featured: false,
    features: [
      'Custom design (no templates)',
      'Mobile-first responsive build',
      'Contact form + analytics',
      'SEO-friendly foundation',
      'Launch in ~3 weeks',
    ],
  },
  {
    name: 'Professional',
    price: 7500,
    priceSuffix: ' one-time',
    desc: 'Most popular — a full marketing site with content tooling.',
    meta: 'Up to 12 pages + blog',
    featured: true,
    features: [
      'Everything in Essentials',
      'Custom-designed page templates',
      'Blog / content system',
      'Conversion-focused CTAs',
      'Page speed optimization',
      'Launch in ~6 weeks',
    ],
  },
  {
    name: 'Custom',
    price: 'From $15k',
    priceSuffix: '',
    desc: 'For businesses that need bespoke functionality or integrations.',
    meta: 'Scoped to project',
    featured: false,
    features: [
      'Everything in Professional',
      'Custom integrations',
      'E-commerce / membership / portals',
      'Multi-location architecture',
      'Ongoing maintenance available',
    ],
  },
];

export const services = [
  { id: 'paid-search', label: 'Paid Search', sub: 'Google Ads management', tiers: paidSearchTiers },
  { id: 'seo', label: 'SEO', sub: 'Monthly retainer', tiers: seoTiers },
  { id: 'web-design', label: 'Web Design', sub: 'Project-based', tiers: webDesignTiers },
];
