import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "../phone/PhoneMockup";
import { Reveal } from "../Reveal";

const facts = [
  { value: "NexBD", label: "Our first product — in development" },
  { value: "07", label: "Planned modules" },
  { value: "05", label: "Planned phases" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint structural grid, masked to the top */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_-10%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 h-72 w-[720px] -translate-x-1/2 bg-brand-600/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:pb-28">
        <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Kignature LLC · Dhaka, Bangladesh</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4rem]">
                We build software for
                <br />
                <span className="font-display italic font-normal text-gradient">
                  everyday life in Bangladesh.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Kignature LLC is a technology company in Dhaka. Our first
                product, NexBD, is a super app that brings messaging, social,
                shopping, payments, and daily services into one place.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-ice-200"
              >
                Explore NexBD
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                className="text-sm text-slate-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-ice-300"
              >
                About the company
              </a>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-tr from-brand-600/15 via-transparent to-ice-400/10 blur-2xl" />
              <PhoneMockup
                screen="home"
                className="relative"
              />
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                NexBD · concept preview
              </p>
            </div>
          </Reveal>
        </div>

        {/* spec strip */}
        <Reveal delay={320} className="mt-20 border-t border-white/[0.08]">
          <dl className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 py-5 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dt className="order-2 text-xs text-slate-500">{f.label}</dt>
                <dd className="order-1 font-mono text-lg text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
