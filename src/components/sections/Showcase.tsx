"use client";

import { useState } from "react";
import {
  Home,
  MessageCircle,
  Users,
  Briefcase,
  Store,
  LayoutGrid,
} from "lucide-react";
import { PhoneMockup } from "../phone/PhoneMockup";
import type { ScreenId } from "../phone/PhoneScreens";
import { Reveal } from "../Reveal";

const tabs: { id: ScreenId; label: string; sub: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", sub: "Dashboard", icon: Home },
  { id: "chat", label: "Chat", sub: "Messaging", icon: MessageCircle },
  { id: "social", label: "Social", sub: "Feed", icon: Users },
  { id: "business", label: "Business", sub: "Profile", icon: Briefcase },
  { id: "market", label: "Market", sub: "Commerce", icon: Store },
  { id: "services", label: "Services", sub: "Essentials", icon: LayoutGrid },
];

export function Showcase() {
  const [active, setActive] = useState<ScreenId>("home");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="showcase" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Product Showcase</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
            NexBD,{" "}
            <span className="font-display italic font-normal text-gradient">
              as it&apos;s taking shape.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
            These are early interface concepts for NexBD. They show how chat,
            social, business, shopping, and services fit into one app.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* screen index */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Screens — {String(tabs.indexOf(current) + 1).padStart(2, "0")} /{" "}
              {String(tabs.length).padStart(2, "0")}
            </p>
            <div className="flex flex-col">
              {tabs.map((tab, i) => {
                const selected = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    aria-pressed={selected}
                    className={`group flex items-center gap-4 border-b border-white/[0.08] py-4 text-left transition-colors last:border-0 ${
                      selected ? "" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] transition-colors ${
                        selected ? "text-ice-300" : "text-slate-600 group-hover:text-slate-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <tab.icon
                      className={`size-4 transition-colors ${
                        selected ? "text-ice-300" : "text-slate-500"
                      }`}
                    />
                    <span>
                      <span
                        className={`block text-sm font-medium ${
                          selected ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {tab.label}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {tab.sub}
                      </span>
                    </span>
                    <span
                      className={`h-px flex-1 transition-all duration-500 ${
                        selected ? "bg-ice-400/60" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Concept screens for illustration — designs will change as we
              build.
            </p>
          </div>

          {/* device preview */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-brand-600/15 via-transparent to-ice-400/10 blur-2xl" />
              <PhoneMockup key={active} screen={active} className="relative" />
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {current.label} — {current.sub.toLowerCase()} · concept
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
