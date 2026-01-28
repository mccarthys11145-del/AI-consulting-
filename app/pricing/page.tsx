import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { pricingTiers } from "@/lib/site";

export const metadata = {
  title: "Pricing"
};

export default function PricingPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Pricing"
            title="Predictable packages. Clear deliverables."
            description="Choose the tier that matches your goals. Every tier includes tracking, core SEO fundamentals, and ongoing support."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get a free audit
            </Button>
            <Button href="/services" variant="ghost">
              View services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="grid gap-6 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pricingTiers.map((tier) => (
              <div key={`${tier.id}-details`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{tier.name} — what’s included</h3>
                <p className="mt-2 text-sm text-slate-600">{tier.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tier.includes.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">Notes</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Setup fees cover strategy, build, initial content structure, and initial automation configuration.</li>
              <li>Monthly fees cover hosting guidance, maintenance, performance monitoring, AI assistant tuning, and optimization.</li>
              <li>For regulated industries or complex integrations, we’ll scope a custom plan.</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
