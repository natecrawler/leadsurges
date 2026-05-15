export type LocationFaq = { q: string; a: string };

export type LocationServices = {
  seo: string;
  paidSearch: string;
  webDesign: string;
};

export type Location = {
  slug: string;
  label: string;
  population: string;
  intro: string;
  marketContext: string;
  industries: string[];
  neighborhoods: string[];
  services: LocationServices;
  faqs: LocationFaq[];
};

export const locations: Location[] = [
  {
    slug: 'apple-valley',
    label: 'Apple Valley',
    population: '~75,000',
    intro:
      'Apple Valley is our home base. We help local businesses — from contractors to medical practices — show up online and grow with SEO, Google Ads, and websites that convert.',
    marketContext:
      "Apple Valley sits at the heart of the High Desert with a competitive small-business landscape across healthcare, trades, and retail. Most Apple Valley searches happen on mobile, often within a few miles of the searcher — which is why a coordinated local SEO, paid search, and conversion-optimized website strategy moves the needle faster here than any one channel alone.",
    industries: ['Contractors & Trades', 'Healthcare & Dental', 'Auto Services', 'Real Estate', 'Restaurants', 'Wellness'],
    neighborhoods: [
      'Spring Valley Lake',
      'Jess Ranch',
      'Bear Valley Rd corridor',
      'Apple Valley Road',
      'Town Center',
      'Sycamore Rocks',
    ],
    services: {
      seo:
        "Local SEO is foundational for most Apple Valley businesses. We optimize your Google Business Profile, build local citations, earn quality backlinks, and create location-specific content that helps you outrank chain stores and regional competitors for searches like 'plumber Apple Valley' or 'dentist near Spring Valley Lake.'",
      paidSearch:
        "Google Ads work especially well in Apple Valley for time-sensitive verticals (HVAC, emergency services, healthcare appointments). We build campaigns that target Apple Valley searchers specifically, measure every dollar against actual leads, and refine weekly.",
      webDesign:
        "Many Apple Valley businesses have websites that look fine but convert poorly. We build marketing-focused sites that load fast, work on mobile, and turn organic and paid traffic into actual phone calls and form submissions.",
    },
    faqs: [
      {
        q: 'How much do digital marketing services cost in Apple Valley?',
        a: 'Most Apple Valley clients invest between $1,500–$3,000/month for SEO, $750–$1,500/month for Paid Search management, and one-time project fees for Web Design starting around $3,500. See our pricing page for full tier details.',
      },
      {
        q: 'Should I do SEO or Google Ads first?',
        a: "Most Apple Valley businesses benefit from running both, but if you have to pick: Google Ads gives you leads in days, SEO compounds over months. We usually recommend starting paid for immediate cash flow while building SEO underneath for long-term cost reduction.",
      },
      {
        q: 'How long until my Apple Valley business ranks in Google?',
        a: 'Most clients see early SEO movement in 3 months and meaningful traffic gains between months 4–6. Older domains and less-competitive niches rank faster. Paid Search delivers leads immediately, usually within the first week of launch.',
      },
      {
        q: 'Do I need to be located in Apple Valley to rank there?',
        a: 'You need a verified address in or very near Apple Valley to rank in the local pack and Google Maps. If your business is in a neighboring city, we can target Apple Valley searchers organically and via paid search, but local-pack visibility favors physical presence.',
      },
      {
        q: 'Why hire a local Apple Valley digital marketing agency over a national one?',
        a: "Local agencies understand the High Desert market, what your customers actually search for, and how to position you against specific local competitors. National agencies typically run templated playbooks that ignore market nuance.",
      },
    ],
  },
  {
    slug: 'victorville',
    label: 'Victorville',
    population: '~135,000',
    intro:
      "Victorville is the largest city in the High Desert and the most competitive search market. We help businesses across the I-15 corridor outrank chains and capture more of the local market — through SEO, paid search, and conversion-focused web design.",
    marketContext:
      "Victorville's size means more search volume but also more competition. Auto dealers, healthcare, and legal services especially face strong pressure from regional and national brands. Winning here requires deeper content, stronger backlinks, smarter paid campaigns, and a website that turns traffic into customers — not just visitors.",
    industries: ['Auto Dealers', 'Healthcare', 'Legal Services', 'Home Services', 'Retail', 'Logistics'],
    neighborhoods: [
      'Old Town Victorville',
      'Spring Valley Lake area',
      'Mall of Victor Valley',
      'Eagle Ranch',
      'Bear Valley Pkwy',
      'Hesperia Rd corridor',
    ],
    services: {
      seo:
        "Competitive Victorville niches demand more aggressive SEO. We layer technical optimization, in-depth content, and authoritative link building to displace established competitors. Auto, legal, and medical verticals especially benefit from our deeper-than-average content strategy.",
      paidSearch:
        "Victorville's larger market supports bigger paid budgets and more sophisticated campaign architecture. We've managed Google Ads across multiple auto dealer brands (Hyundai, Mazda, Genesis) and understand both manufacturer co-op rules and how to convert dealership traffic.",
      webDesign:
        "Victorville businesses often outgrow their first website around the time they start seriously investing in marketing. We build multi-location-ready, fast-loading sites that scale with the business and integrate cleanly with paid and organic acquisition.",
    },
    faqs: [
      {
        q: 'How competitive is digital marketing in Victorville?',
        a: "More competitive than the rest of the High Desert. Local auto, healthcare, and legal markets in particular have established players with strong domain authority. Beating them takes a real strategy, not a discount package.",
      },
      {
        q: 'How much do digital marketing services cost in Victorville?',
        a: "Victorville campaigns typically start at $2,000/month for SEO given the competition level. Less-saturated niches can start lower; auto or legal verticals may need more. Paid Search management starts at $750/month plus your ad spend.",
      },
      {
        q: 'How long until I see results in Victorville?',
        a: "Plan on 4–6 months for meaningful SEO movement in a competitive Victorville niche. Long-tail and service-area keywords often rank faster than head terms. Paid Search delivers leads from week one.",
      },
      {
        q: 'Do you work with auto dealers in Victorville?',
        a: "Yes — auto is one of our specialties. We've worked across the Hyundai, Mazda, and Genesis brands and understand both manufacturer co-op rules and how to rank a dealership.",
      },
      {
        q: 'Can you help if my office is in Victorville but I serve nearby cities?',
        a: "Yes. Service-area businesses can rank across multiple High Desert cities with the right SEO content strategy and Google Business Profile setup. Paid Search can layer broader geographic targeting on top.",
      },
    ],
  },
  {
    slug: 'hesperia',
    label: 'Hesperia',
    population: '~100,000',
    intro:
      'Hesperia businesses face stiff regional competition. We help home service companies, trades, and local retailers grow online with SEO, paid search, and websites built to convert.',
    marketContext:
      "Hesperia is a growing residential market with a strong base of home services, trades, and wellness businesses. Local searches here skew heavily mobile, and the local pack drives a disproportionate share of phone calls. A coordinated local SEO + Google Ads strategy with a strong landing page wins this market fast.",
    industries: ['Home Services', 'Trades & Construction', 'Restaurants', 'Wellness', 'Auto Repair', 'Real Estate'],
    neighborhoods: [
      'Main Street',
      'Mariana Ranchos',
      'Hesperia Lakes',
      'Mojave area',
      'I-15 corridor',
      'Sultana',
    ],
    services: {
      seo:
        "Local SEO in Hesperia rewards Google Business Profile excellence above almost everything else. We optimize your profile, generate consistent citations, build reviews systematically, and produce service-area content that helps your business surface for 'near me' searches across the I-15 corridor.",
      paidSearch:
        "Google Ads is one of the fastest ways to grow a Hesperia home services business. We run lead-focused campaigns that prioritize cost-per-acquisition over impressions, with conversion tracking baked in from day one.",
      webDesign:
        "A Hesperia home services website should have one job: turn a visitor into a phone call within 30 seconds. We design and build sites that do exactly that — fast load, clear CTAs, mobile-first.",
    },
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
        a: "No legitimate SEO agency can guarantee rankings — and anyone who does is either lying or buying ads. What we can guarantee is the work: technical fixes, content, links, ad management, and reporting that have produced rankings consistently across our roster.",
      },
    ],
  },
  {
    slug: 'barstow',
    label: 'Barstow',
    population: '~25,000',
    intro:
      "Barstow's mix of locals, travelers, and Route 66 tourism creates unique digital marketing opportunities. We help businesses capture both nearby and drive-through customers with smart SEO, paid search, and conversion-built websites.",
    marketContext:
      "Barstow is smaller than other High Desert cities but has unique upside: a steady tourism flow from Route 66 and I-15 travelers in addition to local residents. Hospitality, restaurants, and auto services benefit most. Less competition means a well-built Barstow digital marketing campaign can dominate the local pack and the SERP fast.",
    industries: ['Hospitality & Lodging', 'Restaurants', 'Auto Services', 'Tourism', 'Retail', 'Trades'],
    neighborhoods: [
      'Historic Downtown Barstow',
      'Lenwood',
      'Old Route 66',
      'Daggett',
      'Yermo',
      'Outlets at Barstow',
    ],
    services: {
      seo:
        "Barstow's smaller, less competitive market is one of the easiest in the High Desert to dominate with smart SEO. We optimize for both local searches (residents) and travel-related queries ('hotels near Barstow,' 'Route 66 stops') to capture both audiences.",
      paidSearch:
        "Google Ads for Barstow businesses often perform exceptionally well at low budgets — fewer competitors bidding means lower CPCs. We run focused campaigns that target both local and travel intent, often with strong ROAS within the first 60 days.",
      webDesign:
        "Tourism and hospitality businesses in Barstow need websites that work for travelers in a hurry. We build fast, mobile-first sites with clear room/menu/hours information and prominent calls to action.",
    },
    faqs: [
      {
        q: 'Is digital marketing worth it for a small Barstow business?',
        a: "Yes — and Barstow is one of the easier High Desert markets to dominate because of lower competition. A well-built local SEO + paid search campaign can put a Barstow business in the top three local-pack results within 3–4 months.",
      },
      {
        q: 'How do you handle marketing for tourism-driven businesses in Barstow?',
        a: "We combine local SEO (for residents) with content and ads optimized for travel and 'near me' searches (for I-15 and Route 66 travelers). Most tourism businesses benefit from both, and the long-tail content keeps producing leads year after year.",
      },
      {
        q: 'How much does Barstow digital marketing cost?',
        a: "Barstow campaigns typically start lower than Victorville or Apple Valley given the smaller market. Most Barstow clients are on our Bronze or Silver SEO tier ($1,500–$2,000/month) with Launch-tier Paid Search ($750/month) on top.",
      },
      {
        q: 'Can you help my Barstow business rank in nearby cities too?',
        a: "Yes — many Barstow service businesses serve customers in Daggett, Yermo, Lenwood, and out toward Hinkley. We optimize for service-area visibility, not just the city you're physically located in.",
      },
      {
        q: 'Do you only work with Barstow businesses?',
        a: "No, we work with clients across the High Desert and Inland Empire. We just take Barstow seriously — it's an underserved market that rewards focused work.",
      },
    ],
  },
  {
    slug: 'lucerne-valley',
    label: 'Lucerne Valley',
    population: '~6,000',
    intro:
      'Smaller market, bigger opportunity. In Lucerne Valley, a well-optimized digital presence can dominate local search. We combine SEO, paid search, and conversion-focused web design to make sure yours does.',
    marketContext:
      "Lucerne Valley is the smallest market we serve, which is exactly why digital marketing pays off here. With far less competition than Victorville or Hesperia, a Lucerne Valley business with the right SEO foundation, a tightly-targeted Google Ads campaign, and a fast, conversion-focused website can capture nearly all the local share of voice.",
    industries: ['Trades & Construction', 'Agriculture', 'Auto & Equipment', 'Wellness', 'Retail', 'Mining & Quarry Services'],
    neighborhoods: [
      'Lucerne Valley Junction',
      'Box S Springs area',
      'Old Woman Springs Rd',
      'Camp Rock area',
      'Rabbit Springs',
    ],
    services: {
      seo:
        "Lucerne Valley SEO is one of the highest-ROI investments a local business can make. Lower competition means faster rankings and more durable positions once you get there. We optimize your Google Business Profile, build citations, and produce service-area content that signals authority.",
      paidSearch:
        "Paid search budgets stretch a long way in Lucerne Valley. Low CPCs and focused service-area targeting often produce strong ROAS at $500–$1,000/month in ad spend, which is unusual in larger markets.",
      webDesign:
        "Most Lucerne Valley businesses don't need a 20-page website. We build clean, fast, mobile-first sites focused on what matters: showing up well in search, answering the question, and making it easy to get in touch.",
    },
    faqs: [
      {
        q: 'Is digital marketing even necessary in a market as small as Lucerne Valley?',
        a: "Yes — and arguably more so. Small markets mean small searcher volumes, so missing out on even a handful of local-pack rankings can mean missing a meaningful share of your potential customers. Lucerne Valley businesses with strong local SEO have outsized visibility.",
      },
      {
        q: 'How quickly can I rank in Lucerne Valley?',
        a: "Faster than larger High Desert markets. Most Lucerne Valley campaigns see meaningful local-pack improvements within 2–3 months because of lower competition.",
      },
      {
        q: 'How much does Lucerne Valley digital marketing cost?',
        a: "Lucerne Valley clients typically fit our Bronze SEO tier ($1,500/month) and Launch Paid Search tier ($750/month) since competition is lower. Some businesses succeed with even less if their needs are tightly scoped.",
      },
      {
        q: 'Can you serve Lucerne Valley plus nearby areas?',
        a: "Yes — many Lucerne Valley businesses serve customers across Apple Valley, Big Bear, and out toward Twentynine Palms. We optimize for service-area coverage where it makes sense.",
      },
      {
        q: "Do you have experience with rural or service-area businesses?",
        a: "Yes. The local SEO and ad targeting strategy for a service-area business in Lucerne Valley is meaningfully different from a storefront business, and we adjust accordingly.",
      },
    ],
  },
  {
    slug: 'adelanto',
    label: 'Adelanto',
    population: '~38,000',
    intro:
      "Adelanto is one of the High Desert's fastest-growing markets. We help local businesses stake their claim with SEO, paid search, and websites built to convert — before competitors catch up.",
    marketContext:
      "Adelanto's rapid growth — driven by logistics, warehousing, and new residential development — is reshaping the local economy. Most categories are still under-served in search, which means now is the cheapest time to invest in SEO and paid search before competitors realize what they're missing.",
    industries: ['Logistics & Warehousing', 'Auto Services', 'Home Services', 'Healthcare', 'Restaurants', 'Cannabis'],
    neighborhoods: [
      'George Air Force Base area',
      'Bryman',
      'Mojave Heights',
      'Adelanto Stadium area',
      'El Mirage Rd',
      'US Highway 395 corridor',
    ],
    services: {
      seo:
        "Adelanto SEO is currently the best deal in the High Desert. Low competition + rapid market growth means small SEO investments today create durable ranking positions that will be expensive for competitors to displace in 12–18 months.",
      paidSearch:
        "Google Ads is the fastest way to capture Adelanto's growing demand. We build campaigns that focus on the specific verticals driving Adelanto's growth — logistics, home services, healthcare — with conversion-first measurement.",
      webDesign:
        "Adelanto businesses serving a growing population need websites that scale. We build sites with the technical foundation to handle traffic growth, the structure to support multi-location expansion, and the conversion design to turn the new customers into leads.",
    },
    faqs: [
      {
        q: 'Is now a good time to invest in Adelanto digital marketing?',
        a: "Yes — Adelanto's growth is outpacing the search competition in most categories. Businesses that establish authority now will be hard to displace later as competition increases.",
      },
      {
        q: 'How long until my Adelanto business ranks?',
        a: "Most Adelanto businesses see early SEO movement in 2–3 months thanks to relatively low competition. Substantial gains usually arrive between months 3–5. Paid Search delivers leads from week one.",
      },
      {
        q: 'How much does Adelanto digital marketing cost?',
        a: "Most Adelanto clients fit our Bronze or Silver SEO tier ($1,500–$2,000/month) and Launch or Growth Paid Search tier ($750–$1,500/month). Larger logistics and warehousing operations sometimes need more.",
      },
      {
        q: 'Do you work with cannabis businesses in Adelanto?',
        a: "Yes — Adelanto has a notable cannabis cluster and we have experience navigating the marketing restrictions that apply to that vertical (Google Ads restrictions, organic-only strategies, compliant landing pages).",
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
