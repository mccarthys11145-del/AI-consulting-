import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/site";

export const metadata = {
  title: "Process"
};

export default function ProcessPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Process"
            title="Launch quickly. Measure everything. Improve monthly."
            description="We run a repeatable delivery process so you get a professional launch without endless revisions — and you get continuous optimization after launch."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a free audit
            </Button>
            <Button href="/pricing" variant="ghost">
              Compare packages
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((s, idx) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-brand-700">Step {idx + 1}</p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-slate-900">What we need from you</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Business basics: services, service area, hours, contact info</li>
                <li>Brand assets (logo/colors) if you have them</li>
                <li>Photos (we can help source professional options)</li>
                <li>Any existing marketing copy or FAQs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">How we keep it measurable</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Call + form tracking (so you see leads, not just traffic)</li>
                <li>Simple monthly report: leads, conversion rate, top channels</li>
                <li>Monthly improvements: SEO, copy, speed, assistant tuning</li>
                <li>Clear next-step recommendations every month</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
