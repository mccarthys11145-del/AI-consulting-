import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Contact"
            title="Get a free AI + Web Presence Audit"
            description="Send your details and we’ll respond with quick wins, priority fixes, and a recommended package."
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">Request your audit</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We’ll review your website, Google Business Profile, local competitors, and your follow-up flow.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">What you’ll get</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    "Top website conversion fixes (calls/forms/bookings)",
                    "Local SEO/GMB improvements",
                    "Automation opportunities to reduce missed leads",
                    "A package recommendation with next steps"
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="schedule" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Prefer to talk live?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Schedule a quick 15-minute call. We’ll diagnose the fastest ROI path.
                </p>
                {calendly ? (
                  <div className="mt-4">
                    <Button href={calendly} target="_blank" rel="noreferrer" variant="secondary">
                      Schedule a demo
                    </Button>
                    <p className="mt-2 text-xs text-slate-500">Opens in a new tab.</p>
                  </div>
                ) : (
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-700">
                      Add <code className="rounded bg-white px-1">NEXT_PUBLIC_CALENDLY_URL</code> in Vercel to enable scheduling.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Direct contact</h3>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Email:</span> {siteConfig.email}
                  <br />
                  <span className="font-semibold">Phone:</span> {siteConfig.phone}
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Response time: typically within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
