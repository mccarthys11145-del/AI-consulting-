"use client";

import { useState } from "react";
import { Button } from "@/components/button";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "sending") return;

    setStatus({ state: "sending" });

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = (await res.json()) as { ok: boolean; message: string };

      if (!res.ok || !json.ok) {
        setStatus({ state: "error", message: json.message || "Something went wrong." });
        return;
      }

      form.reset();
      setStatus({ state: "success", message: json.message || "Thanks! We’ll be in touch." });
    } catch (err: any) {
      setStatus({ state: "error", message: err?.message ?? "Network error." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <div className="hidden">
        <label>
          Company
          <input name="company" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-900">Full name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-900">Phone (optional)</label>
          <input
            name="phone"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Business name</label>
          <input
            name="business"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Acme Plumbing"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-900">Website (optional)</label>
          <input
            name="website"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Industry</label>
          <select
            name="industry"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
            defaultValue="Home Services"
          >
            {[
              "Home Services",
              "Professional Services",
              "Clinics & Wellness",
              "Restaurants & Food",
              "Retail & E-commerce",
              "Other"
            ].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-900">What do you want to improve?</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Example: more calls from Google, faster follow-up, online booking, better reviews..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" className="sm:w-auto">
          {status.state === "sending" ? "Sending..." : "Send request"}
        </Button>
        <p className="text-xs text-slate-500">
          Please avoid submitting sensitive personal information (medical details, SSNs, etc.).
        </p>
      </div>

      {status.state === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          {status.message}
        </div>
      ) : null}

      {status.state === "error" ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
