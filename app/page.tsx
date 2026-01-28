import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { faqs, industries, pricingTiers, steps, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
                AI-enhanced websites + local SEO + automation
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Turn your website into a 24/7 sales assistant.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We build modern websites and deploy practical AI automation (chat, booking, lead qualification, follow-up) so local businesses get more calls, more forms, and less administrative drag.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary">
                  Get a free audit
                </Button>
                <Button href="/pricing" variant="ghost">
                  View pricing
                </Button>
                <Link href="/process" className="text-sm font-semibold text-slate-700 hover:text-brand-700">
                  See how it works →
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "7–21 days", v: "Typical launch window" },
                  { k: "Local-first", v: "SEO & reputation focus" },
                  { k: "Monthly", v: "Optimization & reporting" }
                ].map((item) => (
                  <div key={item.k} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{item.k}</p>
                    <p className="mt-1 text-xs text-slate-600">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What you get</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Conversion-first pages designed for calls, forms, and bookings",
                  "AI assistant trained on your services, FAQs, and policies",
                  "Local SEO foundation + Google Business Profile improvements",
                  "Tracking: calls, forms, traffic, and lead sources",
                  "Ongoing tuning so performance improves month over month"
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-brand-50 p-4">
                <p className="text-xs font-semibold text-brand-700">Typical outcome</p>
                <p className="mt-1 text-sm text-slate-800">
                  More high-intent leads from local search — and fewer missed inquiries after hours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Built for local businesses"
            title="One system: website + AI + tracking"
            description="Instead of juggling disconnected tools, we ship an integrated setup that captures leads, answers questions, and routes next steps automatically."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Conversion-first design",
                desc: "Pages built to generate calls and bookings, not just look good."
              },
              {
                title: "AI assistant with guardrails",
                desc: "FAQ coverage + lead capture, with clear escalation to a human."
              },
              {
                title: "Local SEO foundation",
                desc: "On-page SEO + Google Business Profile improvements to win ‘near me’ searches."
              },
              {
                title: "Automation that saves time",
                desc: "Scheduling, follow-ups, review requests, and routing workflows."
              },
              {
                title: "Clear reporting",
                desc: "Monthly reporting on leads, conversion rate, and top channels."
              },
              {
                title: "Ongoing optimization",
                desc: "We refine copy, SEO, and assistant behavior continuously."
              }
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Industries"
            title="Templates and playbooks for high‑intent local search"
            description={
              <>
                We can help most local businesses, but we’ve designed our playbooks for industries where better conversion and faster follow-up create immediate ROI.
              </>
            }
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industries.slice(0, 4).map((i) => (
              <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{i.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{i.examples}</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    Popular
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-700">
                  <span className="font-semibold">Pain:</span> {i.pain}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Outcome:</span> {i.outcome}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/industries" variant="ghost">
              Explore all industries
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple packages, predictable support"
            description="Start small or go all-in. Every package includes a modern website foundation, AI-assisted lead capture, and ongoing optimization."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {pricingTiers.slice(0, 4).map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Need something custom (multi-location, strict compliance, unusual integrations)?
            <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-800">
              {" "}
              Talk to us.
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Process"
            title="Launch fast, then improve continuously"
            description="Most agencies deliver a site and disappear. We deliver a measurable system — then iterate with you every month."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {steps.map((s, idx) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-brand-700">Step {idx + 1}</p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Results"
            title="Designed for measurable outcomes"
            description="We focus on the metrics that matter: calls, forms, bookings, and revenue-driving actions — not vanity traffic."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-6 text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                  {t.name}
                  <span className="ml-2 text-xs font-normal text-slate-500">— {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions"
                description="If you’re unsure where to start, the free audit is the easiest next step."
              />
              <FAQ items={faqs} className="mt-8" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Want a free AI + Web Presence Audit?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We’ll identify your quickest wins: what to fix on your site, what to improve in Google, and what to automate for immediate time savings.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Request my audit
                </Button>
                <Button href="/pricing" variant="ghost">
                  Compare packages
                </Button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                No pressure. You’ll get a short written summary and recommended next steps.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
