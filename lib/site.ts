export const siteConfig = {
  name: "LocalAI Presence",
  shortName: "LocalAI",
  description:
    "AI-powered websites, local SEO, and automation for local businesses — built fast, measured weekly, improved continuously.",
  email: "hello@localaipresence.com",
  phone: "(555) 123-4567",
  location: "Serving your local market",
  // Set NEXT_PUBLIC_SITE_URL in Vercel for a correct canonical URL.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: {
    linkedin: "",
    facebook: "",
    instagram: ""
  }
} as const;

export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  setupPrice: string;
  monthlyPrice: string;
  idealFor: string;
  highlights: string[];
  includes: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "essential",
    name: "Essential Digital Presence",
    tagline: "Get online professionally — and start capturing leads 24/7.",
    setupPrice: "$1,497",
    monthlyPrice: "$97/mo",
    idealFor: "Sole proprietors, startups, and very small local businesses.",
    highlights: [
      "5-page modern website",
      "Local SEO foundation",
      "AI FAQ chatbot + lead capture",
      "Maintenance + reporting"
    ],
    includes: [
      "Responsive 5-page website",
      "Basic SEO + analytics",
      "Contact forms + automated replies",
      "Basic chatbot (FAQs + lead capture)",
      "Google Business Profile setup/optimization",
      "Hosting guidance + SSL",
      "Monthly updates + security monitoring"
    ],
    cta: { label: "Get a free audit", href: "/contact" }
  },
  {
    id: "growth",
    name: "Smart Business Growth",
    tagline: "Automate lead qualification, booking, and follow-up.",
    setupPrice: "$2,997",
    monthlyPrice: "$197/mo",
    idealFor: "Established service businesses that need more leads and less admin.",
    highlights: [
      "10-page custom site",
      "Lead-qualifying AI assistant",
      "Scheduling + follow-up automation",
      "Monthly strategy time"
    ],
    includes: [
      "Custom 10-page website + branding",
      "Local SEO + speed optimization",
      "Blog setup + starter content",
      "AI assistant (qualification + routing)",
      "Automated scheduling (calendar sync)",
      "Email marketing setup + welcome flow",
      "Monthly reporting + 2 hrs consulting"
    ],
    featured: true,
    cta: { label: "Schedule a demo", href: "/contact#schedule" }
  },
  {
    id: "transformation",
    name: "Complete Digital Transformation",
    tagline: "Enterprise-level automation and marketing — without enterprise complexity.",
    setupPrice: "$4,997",
    monthlyPrice: "$397/mo",
    idealFor: "Growing businesses with aggressive growth goals.",
    highlights: [
      "15+ pages + advanced integrations",
      "Multi-channel AI assistant",
      "Reputation + content engine",
      "Dedicated account support"
    ],
    includes: [
      "15+ page premium site",
      "Advanced integrations (CRM/booking)",
      "Multi-channel chatbot (web + social)",
      "Reputation management workflows",
      "Content marketing system",
      "Advanced analytics dashboard",
      "4 hrs consulting + priority support"
    ],
    cta: { label: "Talk to sales", href: "/contact" }
  },
  {
    id: "enterprise",
    name: "Enterprise / Multi-Location",
    tagline: "Custom scope, custom AI — for complex or multi-site operations.",
    setupPrice: "From $9,997",
    monthlyPrice: "From $797/mo",
    idealFor: "Multi-location businesses, franchises, and higher-compliance environments.",
    highlights: [
      "Multi-site management",
      "Custom integrations",
      "Security + governance",
      "Quarterly business reviews"
    ],
    includes: [
      "Multi-site governance + rollouts",
      "Custom AI workflows",
      "SLA + uptime monitoring",
      "Advanced security/compliance support",
      "Custom reporting + dashboards"
    ],
    cta: { label: "Request a proposal", href: "/contact" }
  }
];

export const industries = [
  {
    title: "Home Services",
    examples: "Plumbing, HVAC, electrical, roofing, landscaping, contractors",
    pain: "Missed calls, inconsistent scheduling, poor ‘near me’ visibility.",
    outcome: "Capture more high-intent leads, route emergencies, book jobs automatically."
  },
  {
    title: "Professional Services",
    examples: "Law, accounting, consulting, real estate",
    pain: "Low-quality leads and time-consuming intake calls.",
    outcome: "Build authority, qualify leads, and schedule consults with less friction."
  },
  {
    title: "Clinics & Wellness",
    examples: "Dental, therapy, chiropractic, med spas, veterinary",
    pain: "High call volume for repetitive questions; compliance concerns.",
    outcome:
      "Answer FAQs 24/7 and streamline scheduling — while keeping data handling disciplined."
  },
  {
    title: "Restaurants & Food",
    examples: "Independent restaurants, cafes, catering",
    pain: "Lost reservations, outdated menus, fragmented ordering platforms.",
    outcome:
      "Make it easy to order or reserve, and keep menus/photos accurate everywhere."
  },
  {
    title: "Retail & Local E‑commerce",
    examples: "Specialty shops, boutiques, local brands",
    pain: "Competition with big online retailers; inconsistent product info.",
    outcome:
      "Sell online with clean product pages and automated customer service + retention."
  }
] as const;

export const steps = [
  {
    title: "Audit",
    description:
      "We review your current website, Google presence, competitors, and lead flow — then identify the fastest ROI opportunities."
  },
  {
    title: "Blueprint",
    description:
      "We map your ideal customer journey: traffic → conversion → follow-up. Then we define the pages, automations, and tracking."
  },
  {
    title: "Build",
    description:
      "We build your site, wire up forms, chat, and booking, and implement analytics so every lead source is measurable."
  },
  {
    title: "Launch",
    description:
      "We QA, launch, and verify tracking. Then we run a 2–4 week stabilization window and iterate quickly."
  },
  {
    title: "Optimize",
    description:
      "Monthly improvements: content, SEO, speed, AI assistant tuning, conversion experiments, and reporting."
  }
] as const;

export const faqs = [
  {
    q: "Do you work with any local business?",
    a: "Yes. We specialize in service-based local businesses, but we can support most small-to-mid sized companies. If you have unique compliance or integration needs, we’ll scope that into a custom plan."
  },
  {
    q: "Is the AI chatbot safe and accurate?",
    a: "We deploy the assistant with guardrails: a curated knowledge base, lead-capture first design, and clear escalation paths to a human. For regulated industries, we use stricter policies and avoid collecting sensitive data unless explicitly required and properly contracted."
  },
  {
    q: "How do you prove ROI?",
    a: "We implement call/form tracking, attribution-friendly analytics, and a simple monthly report: leads generated, conversion rate, and top-performing channels. We optimize from there."
  },
  {
    q: "How fast can you launch?",
    a: "Typical launches: Essential (7–14 days), Growth (14–21 days), Transformation (3–6 weeks). Timelines depend on content readiness and integrations."
  },
  {
    q: "Can I keep my website if I cancel?",
    a: "Yes. Your website content belongs to you. If you discontinue monthly services, we’ll hand over the site and provide a transition plan."
  }
] as const;

export const testimonials = [
  {
    name: "Jordan M.",
    role: "Owner, Home Services",
    quote:
      "We finally stopped missing leads after hours. The site + AI assistant books jobs while we’re on the road."
  },
  {
    name: "Priya S.",
    role: "Managing Partner, Professional Services",
    quote:
      "Intake is dramatically smoother — fewer tire-kickers, more scheduled consults, and better follow-up."
  },
  {
    name: "Sam R.",
    role: "Operator, Local Retail",
    quote:
      "Our online presence looks credible now. Traffic is up and customers actually find what they need quickly."
  }
] as const;
