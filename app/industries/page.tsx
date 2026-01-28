import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/site";

export const metadata = {
  title: "Industries"
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Industries"
            title="Playbooks optimized for local customer acquisition"
            description={
              <>
                We’re built for local businesses. Our best results come from industries with high-intent searches and repeatable conversion flows.
              </>
            }
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
            {industries.map((i) => (
              <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{i.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{i.examples}</p>

                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">Common pain:</span> {i.pain}
                  </p>
                  <p>
                    <span className="font-semibold">Expected outcome:</span> {i.outcome}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-900">Typical deliverables</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Local landing pages, conversion-first CTAs, an AI FAQ/lead assistant, and tracking for calls/forms.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">Don’t see your industry?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We can still help. The core system (site + AI + tracking) works across most local businesses. We’ll tailor the copy, conversion flow, and automation to your business model.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-800">
                Contact us
              </Link>{" "}
              with your website and goals and we’ll propose the right package.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
