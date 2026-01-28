import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="About"
            title={`Local businesses deserve enterprise-grade tools — without enterprise overhead.`}
            description={`${siteConfig.name} helps local companies compete by combining modern web design with practical AI automation and relentless optimization.`}
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a free audit
            </Button>
            <Button href="/process" variant="ghost">
              Our process
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Our mission</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Help local businesses win online by turning their website into a measurable growth engine: clear messaging, fast follow-up, and automation that saves time.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We believe the best marketing system is the one that is simple enough to run consistently — and instrumented enough to improve every month.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-slate-900">How we work</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {["Local-first: we optimize for calls and ‘near me’ search.", "Practical AI: guardrails, knowledge bases, and human handoff.", "Transparent reporting: leads and conversion, not vanity metrics.", "Long-term partnership: improve monthly, not one-and-done."].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">Want to collaborate?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              If you’re a photographer, copywriter, ad manager, or local business consultant, we’re open to referral and partnership discussions.
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
