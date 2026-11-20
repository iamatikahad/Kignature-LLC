"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const subjects = [
  "Business Partnership",
  "Investor Relations",
  "Technology Collaboration",
  "General Inquiries",
];

const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-ice-400/50 focus:bg-white/[0.05]";

const labelCls =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="panel flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl p-10 text-center">
        <CheckCircle2 className="size-10 text-ice-300" />
        <h3 className="text-xl font-medium text-white">Message received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-400">
          Thank you for reaching out to Kignature LLC. We&apos;ll get back to
          you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-md border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="panel rounded-xl p-6 sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name *
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Your full name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address *
          </label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="you@company.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company
          </label>
          <input id="company" name="company" className={inputCls} placeholder="Company or organization" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="subject" className={labelCls}>
            Subject *
          </label>
          <select id="subject" name="subject" required defaultValue="" className={`${inputCls} appearance-none`}>
            <option value="" disabled className="bg-ink-900">
              Select a topic
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-ink-900">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about your inquiry..."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-rose-300">
          <AlertCircle className="size-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-ice-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
