import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-radial border-b border-slate-200">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description="Template policy — review with counsel before use in production."
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14">
          <div className="max-w-3xl space-y-6 text-sm leading-6 text-slate-700">
            <p>
              This Privacy Policy describes how <span className="font-semibold">{siteConfig.name}</span> ("we", "us") collects and uses information when you visit our website.
            </p>

            <div>
              <h2 className="text-base font-semibold text-slate-900">Information we collect</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold">Contact information</span>: name, email, phone, business name, website (when submitted via forms).
                </li>
                <li>
                  <span className="font-semibold">Usage data</span>: basic analytics such as page views and referrers (if enabled).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">How we use information</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Respond to your inquiries and provide requested information.</li>
                <li>Improve our website and services.</li>
                <li>Operate, maintain, and secure our systems.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">AI and sensitive information</h2>
              <p className="mt-2">
                Do not submit sensitive personal information (medical details, SSNs, payment card numbers) through our contact forms unless explicitly requested and covered by a written agreement.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">Sharing</h2>
              <p className="mt-2">
                We may share information with service providers that help us operate the website (e.g., hosting, email delivery). We do not sell personal information.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">Data retention</h2>
              <p className="mt-2">
                We retain submitted information as needed to respond to your request, maintain business records, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect information, but no method of transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">Contact</h2>
              <p className="mt-2">
                Questions? Email us at <span className="font-semibold">{siteConfig.email}</span>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
