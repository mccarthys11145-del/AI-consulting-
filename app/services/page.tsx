import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Services"
};

const serviceBlocks = [
  {
    title: "High-converting website build",
    points: [
      "Mobile-first design and performance optimization",
      "Clear CTAs (calls, forms, bookings) on every key page",
      "Copy structure that matches how local customers search",
      "Fast launch using repeatable, industry-aware templates"
    ]
  },
  {
    title: "AI assistant + lead capture",
    points: [
      "Answers FAQs from your approved knowledge base",
      "Captures lead info and routes it to the right next step",
      "Escalates to a human for edge cases or complex situations",
      "Monthly tuning based on real conversations"
    ]
  },
  {
    title: "Local SEO + Google Business Profile",
    points: [
      "On-page local SEO foundations (titles, headings, schema)",
      "Google Business Profile fixes (categories, services, photos)",
      "Review generation workflows (request → reminder → follow-up)",
      "Location/Service pages designed to win 'near me' traffic"
    ]
  },
  {
    title: "Automation that saves time",
    points: [
      "Booking and calendar sync (where applicable)",
      "Follow-ups for missed calls and form submissions",
      "Nurture sequences and reactivation campaigns",
      "Operational automations (routing, tagging, notifications)"
    ]
  },
  {
    title: "Tracking + reporting",
    points: [
      "Lead tracking (calls/forms) and basic attribution",
      "Monthly reporting: leads generated, conversion rate, top channels",
      "Actionable recommendations — not just charts",
      "Ongoing conversion/SEO improvements"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Services"
            title="A practical AI + web system that drives leads"
            description="We combine modern web design, local SEO, and automation into one measurable system — built fast and improved monthly."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a free audit
            </Button>
            <Button href="/pricing" variant="ghost">
              View packages
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceBlocks.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">
              What we’re not
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We’re not a generic "chatbot reseller" or a one-off web designer. We’re a
              long-term partner focused on business outcomes (calls, bookings, revenue-driving
              actions).
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
