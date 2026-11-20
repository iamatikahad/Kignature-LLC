import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const values = [
  {
    n: "01",
    title: "Engineering first",
    text: "We build products to be maintained, not demoed.",
  },
  {
    n: "02",
    title: "One platform",
    text: "Our products share one account and one system, so they work better together.",
  },
  {
    n: "03",
    title: "Honest claims",
    text: "We only say what we've built and tested.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="The Company"
              title={
                <>
                  Software, built
                  <br />
                  <span className="font-display italic font-normal text-gradient">
                    to last.
                  </span>
                </>
              }
              description="Kignature LLC is a technology company in Dhaka, Bangladesh. We are building NexBD, a super app that combines messaging, social networking, business tools, shopping, payments, and everyday services."
            />
            <Reveal delay={200} className="mt-8">
              <div className="border-l-2 border-ice-400/50 pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice-300">
                  Mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Make digital services simple, affordable, and trustworthy
                  for everyday users.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <p className="text-[15px] leading-[1.9] text-slate-400">
                Most apps treat chat, shopping, and payments as separate
                products. We think they work better together. NexBD is our
                attempt to build them as one system — designed around how
                people in Bangladesh actually live and work.
              </p>
              <p className="mt-6 text-[15px] leading-[1.9] text-slate-400">
                We&apos;re a small team of engineers and designers. Anything on
                this site that isn&apos;t built yet is labeled as such —
                we&apos;d rather be honest than impressive.
              </p>
            </Reveal>

            <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {values.map((v, i) => (
                <Reveal key={v.n} delay={i * 100}>
                  <div className="group flex gap-6 py-6">
                    <span className="font-mono text-xs text-ice-300/70 pt-1">
                      {v.n}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-white transition-colors group-hover:text-ice-200">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-400">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-ink-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-600">
              Vision
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              One platform for{" "}
              <span className="font-display italic font-normal text-brand-600">
                daily life.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-[15px] leading-[1.85] text-slate-600 sm:text-base">
              Our goal is a Bangladesh-first platform where people message,
              buy, pay, learn, and get things done in one trusted place —
              built on open standards and honest engineering.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Long-term direction — not a launch commitment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
