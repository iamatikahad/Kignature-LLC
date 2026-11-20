import {
  Boxes,
  Smartphone,
  BrainCircuit,
  ShieldCheck,
  Blocks,
  Waypoints,
} from "lucide-react";
import { Reveal } from "../Reveal";

const capabilities = [
  {
    icon: Boxes,
    title: "Scalable architecture",
    desc: "Designed to grow without a rewrite.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    desc: "Built for the phones people actually use, including budget Android devices.",
  },
  {
    icon: BrainCircuit,
    title: "AI features",
    desc: "Planned where they genuinely save time — not added for the sake of it.",
  },
  {
    icon: ShieldCheck,
    title: "Security and privacy",
    desc: "Built into the design from the start.",
  },
  {
    icon: Blocks,
    title: "Developer tools",
    desc: "Open tools for developers who want to build on NexBD.",
  },
  {
    icon: Waypoints,
    title: "One account",
    desc: "A single sign-in across all NexBD services.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "NexBD Core Platform",
    desc: "Accounts, core navigation, and the first modules.",
    status: "In Progress",
  },
  {
    phase: "Phase 2",
    title: "Business & Marketplace",
    desc: "Business profiles, listings, and NexBD Market.",
    status: "Planned",
  },
  {
    phase: "Phase 3",
    title: "Payments & Services",
    desc: "NexBD Pay and everyday services for users.",
    status: "Planned",
  },
  {
    phase: "Phase 4",
    title: "Mini Apps & Developers",
    desc: "Third-party mini apps and tools for builders.",
    status: "Planned",
  },
  {
    phase: "Phase 5",
    title: "Regional Expansion",
    desc: "Taking NexBD beyond Bangladesh.",
    status: "Planned",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Technology &amp; Engineering</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
            How we{" "}
            <span className="font-display italic font-normal text-gradient">
              build.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
            We use modern, widely supported tools and keep the architecture
            simple enough for a small team to maintain.
          </p>
        </Reveal>

        {/* capability index — rows, not cards */}
        <div className="mt-14 grid gap-x-12 md:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 80}>
              <div className="group flex gap-5 border-b border-white/[0.08] py-6">
                <c.icon className="mt-0.5 size-4 shrink-0 text-ice-300/70 transition-colors group-hover:text-ice-300" />
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Roadmap</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
            The plan for{" "}
            <span className="font-display italic font-normal text-gradient">
              NexBD.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Five planned phases. &quot;In progress&quot; means work has started —
            everything else is a plan, not a promise.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-brand-500/50 via-ice-400/25 to-transparent" />
          <ol className="space-y-8">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={i * 80}>
                <li className="relative flex gap-6">
                  <span
                    className={`relative z-10 mt-1 grid size-8 shrink-0 place-items-center rounded-full border font-mono text-[10px] ${
                      p.status === "In Progress"
                        ? "border-ice-400/50 bg-ice-400/10 text-ice-300"
                        : "border-white/15 bg-ink-900 text-slate-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="panel flex-1 rounded-xl px-6 py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-300">
                        {p.phase}
                      </p>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                          p.status === "In Progress"
                            ? "bg-ice-400/10 text-ice-300"
                            : "bg-white/[0.05] text-slate-400"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-medium text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {p.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
