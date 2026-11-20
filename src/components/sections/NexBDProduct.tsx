import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const modules = [
  {
    code: "NX-01",
    name: "NexBD Chat",
    desc: "Private and group messaging.",
  },
  {
    code: "NX-02",
    name: "NexBD Social",
    desc: "Feed, posts, and communities.",
  },
  {
    code: "NX-03",
    name: "NexBD Business",
    desc: "Business profiles and customer tools.",
  },
  {
    code: "NX-04",
    name: "NexBD Market",
    desc: "Online marketplace for local sellers.",
  },
  {
    code: "NX-05",
    name: "NexBD Pay",
    desc: "Digital payments in one place.",
  },
  {
    code: "NX-06",
    name: "NexBD Services",
    desc: "Recharges, bill pay, and everyday services.",
  },
  {
    code: "NX-07",
    name: "NexBD Mini Apps",
    desc: "Third-party tools inside NexBD.",
  },
];

export function NexBDProduct() {
  return (
    <section id="products" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Flagship Product"
            title={
              <>
                NexBD —{" "}
                <span className="font-display italic font-normal text-gradient">
                  one app for everything.
                </span>
              </>
            }
            description="NexBD is our flagship product, currently in development. It combines chat, social, business tools, marketplace, payments, and everyday services in one app."
          />
          <Reveal delay={150} className="shrink-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/90">
              <span className="size-1.5 rounded-full bg-amber-300" />
              In development
            </p>
          </Reveal>
        </div>

        {/* module index — spec-sheet style instead of cards */}
        <Reveal delay={100} className="mt-14">
          <div className="overflow-hidden rounded-xl border border-white/[0.08]">
            <div className="hidden grid-cols-[5rem_1fr_1.2fr_auto] gap-6 border-b border-white/[0.08] bg-white/[0.02] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 md:grid">
              <span>Ref</span>
              <span>Module</span>
              <span>Description</span>
              <span>Status</span>
            </div>
            <ul className="divide-y divide-white/[0.08]">
              {modules.map((m) => (
                <li
                  key={m.code}
                  className="group grid grid-cols-1 gap-1 px-6 py-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-center md:gap-6"
                >
                  <span className="font-mono text-xs text-slate-500 transition-colors group-hover:text-ice-300">
                    {m.code}
                  </span>
                  <h3 className="text-[15px] font-medium text-white">{m.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{m.desc}</p>
                  <span className="w-fit rounded-full border border-white/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Planned
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            This list shows the current roadmap. The screens shown elsewhere
            on this page are design concepts — the final product may look
            different.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
