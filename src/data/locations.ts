export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  label: string;
  population: string;
  intro: string;
  marketContext: string;
  industries: string[];
  neighborhoods: string[];
  faqs: LocationFaq[];
};

export const locations: Location[] = [
  {
    slug: 'apple-valley',
    label: 'Apple Valley',
    population: '~75,000',
    intro:
      'Apple Valley is our home base. We help local businesses — from contractors to medical practices — show up when residents search for what they offer.',
    marketContext:
      "Apple Valley sits at the heart of the High Desert with a competitive small-business landscape across healthcare, trades, and retail. Most Apple Valley searches happen on mobile, often within a few miles of the searcher — which is why local SEO and a well-optimized Google Business Profile move the needle faster here than broad national SEO ever would.",
    industries: ['Contractors & Trades', 'Healthcare & Dental', 'Auto Services', 'Real Estate', 'Restaurants', 'Wellness'],
    neighborhoods: [
      'Spring Valley Lake',
      'Jess Ranch',
      'Bear Valley Rd corridor',
      'Apple Valley Road',
      'Town Center',
      'Sycamore Rocks',
    ],
    faqs: [
      {
        q: 'How much does local SEO cost in Apple Valley?',
        a: 'Most Apple Valley clients invest between $1,500–$3,000/month depending on competition and the number of keywords being targeted. See our pricing page for full tier details.',
      },
      {
        q: 'How long until my Apple Valley business ranks in Google?',
        a: 'Most clients see early movement in 3 months and meaningful traffic gains between months 4–6. Older domains and less-competitive niches rank faster.',
      },
      {
        q: 'Do I need to be located in Apple Valley to rank there?',
        a: 'You need a verified address in or very near Apple Valley to rank in the local pack and Google Maps. If your business is in a neighboring city, we can target Apple Valley searchers organically, but local-pack visibility favors physical presence.',
      },
      {
        q: 'Why hire a local Apple Valley SEO agency over a national one?',
        a: "Local agencies understand the High Desert market, what your customers actually search for, and how to position you against specific local competitors. National agencies typically run templated playbooks that ignore market nuance.",
      },
      {
        q: 'Are there contracts?',
        a: "No long-term contracts. We work month-to-month — our results should keep you, not paperwork.",
      },
    ],
  },
  {
    slug: 'victorville',
    label: 'Victorville',
    population: '~135,000',
    intro:
      "Victorville is the largest city in the High Desert and the most competitive search market. We help businesses across the I-15 corridor outrank chains and capture more of the local market.",
    marketContext:
      "Victorville's size means more search volume but also more competition. Auto dealers, healthcare, and legal services especially face strong SEO pressure from regional and national brands. Winning in Victorville requires deeper content, stronger backlinks, and tighter on-page optimization than smaller High Desert markets.",
    industries: ['Auto Dealers', 'Healthcare', 'Legal Services', 'Home Services', 'Retail', 'Logistics'],
    neighborhoods: [
      'Old Town Victorville',
      'Spring Valley Lake area',
      'Mall of Victor Valley',
      'Eagle Ranch',
      'Bear Valley Pkwy',
      'Hesperia Rd corridor',
    ],
    faqs: [
      {
        q: 'How competitive is SEO in Victorville?',
        a: "More competitive than the rest of the High Desert. Local auto, healthcare, and legal markets in particular have established players with strong domain authority. Beating them takes a real strategy, not a discount package.",
      },
      {
        q: 'How much does local SEO cost in Victorville?',
        a: "Victorville campaigns typically start at $2,000/month given the competition level. Less-saturated niches can start lower; auto or legal verticals may need more.",
      },
      {
        q: 'How long until I see results in Victorville?',
        a: "Plan on 4–6 months for meaningful movement in a competitive Victorville niche. Long-tail and service-area keywords often rank faster than head terms.",
      },
      {
        q: 'Do you work with auto dealers in Victorville?',
        a: "Yes — auto is one of our specialties. We've worked across the Hyundai, Mazda, and Genesis brands and understand both manufacturer co-op rules and how to rank a dealership.",
      },
      {
        q: 'Can you help if my office is in Victorville but I serve nearby cities?',
        a: "Yes. Service-area businesses can rank across multiple High Desert cities with the right content strategy and Google Business Profile setup.",
      },
    ],
  },
  {
    slug: 'hesperia',
    label: 'Hesperia',
    population: '~100,000',
    intro:
      'Hesperia businesses face stiff regional competition. Our local SEO playbook gets you visible in Google Maps and the local pack where it matters.',
    marketContext:
      "Hesperia is a growing residential market with a strong base of home services, trades, and wellness businesses. Local searches here skew heavily mobile, and the local pack drives a disproportionate share of phone calls. Getting your Google Business Profile right is often half the win in Hesperia.",
    industries: ['Home Services', 'Trades & Construction', 'Restaurants', 'Wellness', 'Auto Repair', 'Real Estate'],
    neighborhoods: [
      'Main Street',
      'Mariana Ranchos',
      'Hesperia Lakes',
      'Mojave area',
      'I-15 corridor',
      'Sultana',
    ],
    faqs: [
      {
        q: 'How long does Hesperia local SEO take?',
        a: 'Most Hesperia businesses see early movement in 2–3 months, especially if their Google Business Profile is currently neglected. Substantial growth typically lands between months 4–6.',
      },
      {
        q: 'Do you focus on home service businesses in Hesperia?',
        a: "Yes — home services are one of our strongest verticals. HVAC, plumbing, roofing, landscaping, and general contractors are common Hesperia clients.",
      },
      {
        q: "What's the difference between SEO and Google Ads for Hesperia businesses?",
        a: "Google Ads put you at the top instantly but stop when you stop paying. SEO compounds — every month of investment makes the next month easier. Most successful Hesperia clients run both.",
      },
      {
        q: "Are there contracts?",
        a: "No long-term contracts. We work month-to-month.",
      },
      {
        q: "Can you guarantee a #1 ranking in Hesperia?",
        a: "No legitimate SEO agency can guarantee rankings — and anyone who does is either lying or buying ads. What we can guarantee is the work: technical fixes, content, links, and reporting that have produced rankings consistently across our roster.",
      },
    ],
  },
  {
    slug: 'barstow',
    label: 'Barstow',
    population: '~25,000',
    intro:
      "Barstow's mix of locals, travelers, and Route 66 tourism creates unique SEO opportunities. We help businesses capture both nearby and drive-through customers.",
    marketContext:
      "Barstow is smaller than other High Desert cities but has unique upside: a steady tourism flow from Route 66 and I-15 travelers in addition to local residents. Hospitality, restaurants, and auto services benefit most. Less competition means a well-built Barstow SEO campaign can dominate the local pack faster than in larger cities.",
    industries: ['Hospitality & Lodging', 'Restaurants', 'Auto Services', 'Tourism', 'Retail', 'Trades'],
    neighborhoods: [
      'Historic Downtown Barstow',
      'Lenwood',
      'Old Route 66',
      'Daggett',
      'Yermo',
      'Outlets at Barstow',
    ],
    faqs: [
      {
        q: 'Is SEO worth it for a small Barstow business?',
        a: "Yes — and Barstow is one of the easier High Desert markets to dominate because of lower competition. A well-built local SEO campaign can put a Barstow business in the top three local-pack results within 3–4 months.",
      },
      {
        q: 'How do you handle SEO for tourism-driven businesses in Barstow?',
        a: "We combine local SEO (for residents) with content optimized for travel and 'near me' searches (for I-15 and Route 66 travelers). Most tourism businesses benefit from both, and the long-tail content keeps producing leads year after year.",
      },
      {
        q: 'How much does Barstow SEO cost?',
        a: "Barstow campaigns typically start lower than Victorville or Apple Valley given the smaller market. Most Barstow clients are on our Bronze or Silver SEO tier ($1,500–$2,000/month).",
      },
      {
        q: 'Can you help my Barstow business rank in nearby cities too?',
        a: "Yes — many Barstow service businesses serve customers in Daggett, Yermo, Lenwood, and out toward Hinkley. We optimize for service-area visibility, not just the city you're physically located in.",
      },
      {
        q: 'Do you only work with Barstow businesses?',
        a: "No, we work with clients across the High Desert and Inland Empire. We just take Barstow seriously — it's an underserved market that rewards focused SEO work.",
      },
    ],
  },
  {
    slug: 'lucerne-valley',
    label: 'Lucerne Valley',
    population: '~6,000',
    intro:
      'Smaller market, bigger opportunity. In Lucerne Valley, a well-optimized site can dominate local search. We make sure yours does.',
    marketContext:
      "Lucerne Valley is the smallest market we serve, which is exactly why it pays off so well. With far less competition than Victorville or Hesperia, a Lucerne Valley business with the right SEO foundation can capture the lion's share of local search — often the only one of its category showing up in the local pack.",
    industries: ['Trades & Construction', 'Agriculture', 'Auto & Equipment', 'Wellness', 'Retail', 'Mining & Quarry Services'],
    neighborhoods: [
      'Lucerne Valley Junction',
      'Box S Springs area',
      'Old Woman Springs Rd',
      'Camp Rock area',
      'Rabbit Springs',
    ],
    faqs: [
      {
        q: 'Is SEO even necessary in a market as small as Lucerne Valley?',
        a: "Yes — and arguably more so. Small markets mean small searcher volumes, so missing out on even a handful of local-pack rankings can mean missing a meaningful share of your potential customers. Lucerne Valley businesses with strong local SEO have outsized visibility.",
      },
      {
        q: 'How quickly can I rank in Lucerne Valley?',
        a: "Faster than larger High Desert markets. Most Lucerne Valley campaigns see meaningful local-pack improvements within 2–3 months because of lower competition.",
      },
      {
        q: 'How much does Lucerne Valley SEO cost?',
        a: "Lucerne Valley clients typically fit our Bronze tier ($1,500/month) since competition is lower. Some businesses succeed with even less if their needs are tightly scoped.",
      },
      {
        q: 'Can you serve Lucerne Valley plus nearby areas?',
        a: "Yes — many Lucerne Valley businesses serve customers across Apple Valley, Big Bear, and out toward Twentynine Palms. We optimize for service-area coverage where it makes sense.",
      },
      {
        q: "Do you have experience with rural or service-area businesses?",
        a: "Yes. The local SEO strategy for a service-area business in Lucerne Valley is meaningfully different from a storefront business, and we adjust accordingly.",
      },
    ],
  },
  {
    slug: 'adelanto',
    label: 'Adelanto',
    population: '~38,000',
    intro:
      "Adelanto is one of the High Desert's fastest-growing markets. We help local businesses stake their claim in search before competitors catch up.",
    marketContext:
      "Adelanto's rapid growth — driven by logistics, warehousing, and new residential development — is reshaping the local economy. Most categories are still under-served in search, which means now is the cheapest time to invest in SEO before competitors realize what they're missing.",
    industries: ['Logistics & Warehousing', 'Auto Services', 'Home Services', 'Healthcare', 'Restaurants', 'Cannabis'],
    neighborhoods: [
      'George Air Force Base area',
      'Bryman',
      'Mojave Heights',
      'Adelanto Stadium area',
      'El Mirage Rd',
      'US Highway 395 corridor',
    ],
    faqs: [
      {
        q: 'Is now a good time to invest in Adelanto SEO?',
        a: "Yes — Adelanto's growth is outpacing the search competition in most categories. Businesses that establish local SEO authority now will be hard to displace later as competition increases.",
      },
      {
        q: 'How long until my Adelanto business ranks?',
        a: "Most Adelanto businesses see early movement in 2–3 months thanks to relatively low competition. Substantial gains usually arrive between months 3–5.",
      },
      {
        q: 'How much does Adelanto SEO cost?',
        a: "Most Adelanto clients fit our Bronze or Silver tier ($1,500–$2,000/month). Larger logistics and warehousing operations sometimes need more.",
      },
      {
        q: 'Do you work with cannabis businesses in Adelanto?',
        a: "Yes — Adelanto has a notable cannabis cluster and we have experience navigating the marketing restrictions that apply to that vertical.",
      },
      {
        q: 'Are there contracts?',
        a: "No long-term contracts. Month-to-month.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export const getNearbyLocations = (slug: string, count = 3) =>
  locations.filter((l) => l.slug !== slug).slice(0, count);
