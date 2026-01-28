import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                AI
              </span>
              <span className="text-sm font-bold tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{siteConfig.description}</p>
            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">Email:</span> {siteConfig.email}
              <br />
              <span className="font-semibold">Phone:</span> {siteConfig.phone}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/process">
                  Process
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/services">
                  Websites + AI
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/pricing">
                  Packages
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/industries">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-brand-700" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              AI features are configured with guardrails and escalation to a human. Do not submit sensitive personal information unless explicitly requested.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
