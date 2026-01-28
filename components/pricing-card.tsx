import { Button } from "@/components/button";
import type { PricingTier } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-white p-6 shadow-sm",
        tier.featured
          ? "border-brand-200 ring-1 ring-brand-200"
          : "border-slate-200"
      )}
    >
      {tier.featured ? (
        <span className="absolute right-6 top-6 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Most popular
        </span>
      ) : null}

      <h3 className="text-base font-semibold text-slate-900">{tier.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{tier.tagline}</p>

      <div className="mt-6">
        <p className="text-sm text-slate-500">Setup</p>
        <p className="text-2xl font-bold text-slate-900">{tier.setupPrice}</p>
        <p className="mt-3 text-sm text-slate-500">Ongoing</p>
        <p className="text-xl font-semibold text-slate-900">{tier.monthlyPrice}</p>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-slate-700">
        {tier.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button href={tier.cta.href} className="w-full" variant={tier.featured ? "primary" : "secondary"}>
          {tier.cta.label}
        </Button>
        <p className="mt-3 text-xs text-slate-500">Ideal for: {tier.idealFor}</p>
      </div>
    </div>
  );
}
