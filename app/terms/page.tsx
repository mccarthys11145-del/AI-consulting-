import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Terms"
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Service"
            description="Template terms — review with counsel before production use."
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="max-w-3xl space-y-6 text-sm leading-6 text-slate-700">
            <p>
              These Terms of Service ("Terms") govern your use of this website and any services you purchase from <span className="font-semibold">{siteConfig.name}</span>.
            </p>

            <div>
              <h2 className="text-base font-semibold text-slate-900">1. Services</h2>
              <p className="mt-2">
                We provide website design, local SEO, automation, and AI-related implementation services. The specific deliverables, timelines, and pricing will be defined in a written proposal, statement of work, or service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">2. Client responsibilities</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>You represent that any content you provide (logos, images, copy) is owned by you or properly licensed.</li>
                <li>You are responsible for the accuracy of information about your business (services, policies, pricing, hours).</li>
                <li>You agree not to provide sensitive personal information through general contact channels unless explicitly requested and covered by a written agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">3. Payments</h2>
              <p className="mt-2">
                Setup fees and monthly fees (if applicable) are due as specified in your agreement. Late payments may pause work and/or incur late fees as allowed by law.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">4. AI features and disclaimers</h2>
              <p className="mt-2">
                AI assistants are configured to provide general information and route inquiries, but they may occasionally produce incorrect or incomplete responses. You are responsible for reviewing and approving any high-stakes workflows. AI features are not a substitute for professional, legal, medical, or financial advice.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">5. Limitation of liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, {siteConfig.name} will not be liable for indirect, incidental, special, or consequential damages arising out of your use of the site or services.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">6. Termination</h2>
              <p className="mt-2">
                Either party may terminate an ongoing service relationship per the written agreement. Ownership and handoff terms for website assets will be defined in that agreement.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">7. Contact</h2>
              <p className="mt-2">
                Questions about these Terms? Contact <span className="font-semibold">{siteConfig.email}</span>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
