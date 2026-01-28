import { cn } from "@/lib/utils";

export function FAQ({
  items,
  className
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
            {item.q}
            <span className="float-right text-slate-400 group-open:rotate-180">▾</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
