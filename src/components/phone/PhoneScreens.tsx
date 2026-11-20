import type { ReactNode, ReactElement } from "react";
import {
  Search,
  MessageCircle,
  Users,
  Store,
  Wallet,
  LayoutGrid,
  Send,
  Heart,
  MessageSquare,
  Share2,
  BadgeCheck,
  ChevronRight,
  Phone,
  Video,
  Zap,
  ShieldCheck,
  Smartphone,
  FileText,
  GraduationCap,
  Briefcase,
  CircleDot,
} from "lucide-react";

export type ScreenId =
  | "home"
  | "chat"
  | "social"
  | "business"
  | "market"
  | "services";

function Avatar({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-ice-400 font-semibold text-white ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------------- Home ---------------- */

function HomeScreen() {
  const actions = [
    { icon: MessageCircle, label: "Chat" },
    { icon: Users, label: "Social" },
    { icon: Store, label: "Market" },
    { icon: Wallet, label: "Pay" },
    { icon: Briefcase, label: "Business" },
    { icon: LayoutGrid, label: "Mini Apps" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400">Good morning</p>
          <p className="text-sm font-semibold text-white">Dhaka, Bangladesh</p>
        </div>
        <Avatar className="size-8 text-xs">A</Avatar>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2">
        <Search className="size-3.5 text-slate-400" />
        <span className="text-[10px] text-slate-500">Search NexBD</span>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {actions.map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-1">
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-ice-300">
              <a.icon className="size-4" />
            </span>
            <span className="text-[8px] text-slate-400">{a.label}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-600/80 to-ice-500/60 p-3">
        <p className="text-[10px] font-semibold text-white">NexBD Pay</p>
        <p className="mt-0.5 text-[9px] text-white/70">
          Payments &amp; digital wallet — in development
        </p>
      </div>

      <p className="text-[10px] font-semibold text-slate-300">For you</p>
      <div className="flex-1 space-y-2 overflow-hidden">
        {["Weekend Market is live nearby", "3 new community posts", "Recharges & bill pay"].map(
          (t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
            >
              <CircleDot className="size-3 text-ice-300" />
              <span className="text-[9px] text-slate-300">{t}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ---------------- Chat ---------------- */

function ChatScreen() {
  const msgs = [
    { from: "them", text: "Salaam! Are we still on for tonight?" },
    { from: "me", text: "Wa alaikumussalam — yes, 8pm at the usual spot." },
    { from: "them", text: "Perfect, I'll send the location." },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3">
        <Avatar className="size-8 text-xs">N</Avatar>
        <div className="flex-1">
          <p className="text-[11px] font-semibold text-white">Nadia</p>
          <p className="text-[8px] text-ice-300">online</p>
        </div>
        <Video className="size-4 text-slate-400" />
        <Phone className="size-4 text-slate-400" />
      </div>
      <div className="flex-1 space-y-2 overflow-hidden p-3">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[78%] rounded-2xl px-3 py-1.5 text-[10px] leading-relaxed ${
              m.from === "me"
                ? "ml-auto bg-gradient-to-br from-brand-600 to-brand-500 text-white"
                : "bg-white/[0.08] text-slate-200"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 p-3">
        <div className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] text-slate-500">
          Message
        </div>
        <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-ice-400">
          <Send className="size-3 text-white" />
        </span>
      </div>
    </div>
  );
}

/* ---------------- Social ---------------- */

function SocialScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Feed</p>
        <Avatar className="size-7 text-[10px]">A</Avatar>
      </div>
      <div className="flex gap-2 overflow-hidden">
        {["You", "Nadia", "Rahim", "Store", "Tech BD"].map((n, i) => (
          <div key={n} className="flex w-11 shrink-0 flex-col items-center gap-1">
            <span
              className={`grid size-9 place-items-center rounded-full bg-gradient-to-br p-[2px] ${
                i % 2 ? "from-ice-400 to-brand-500" : "from-brand-500 to-purple-500"
              }`}
            >
              <span className="grid size-full place-items-center rounded-full bg-ink-800 text-[10px] font-semibold text-white">
                {n[0]}
              </span>
            </span>
            <span className="w-full truncate text-center text-[7px] text-slate-400">
              {n}
            </span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center gap-2">
          <Avatar className="size-7 text-[10px]">S</Avatar>
          <div>
            <p className="text-[10px] font-semibold text-white">Spice Route</p>
            <p className="text-[8px] text-slate-500">2h · Dhaka</p>
          </div>
        </div>
        <div className="mt-2 h-16 rounded-xl bg-gradient-to-br from-amber-500/30 to-rose-500/20" />
        <p className="mt-2 text-[9px] leading-relaxed text-slate-300">
          New menu drop — hilsa preparations are back for the season. Reserve
          your table on NexBD Market.
        </p>
        <div className="mt-2 flex gap-4 text-[9px] text-slate-400">
          <span className="flex items-center gap-1">
            <Heart className="size-3" /> 248
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="size-3" /> 31
          </span>
          <span className="flex items-center gap-1">
            <Share2 className="size-3" /> 12
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Business ---------------- */

function BusinessScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Business</p>
        <BadgeCheck className="size-4 text-ice-300" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-ice-400">
            <Store className="size-5 text-white" />
          </span>
          <div>
            <p className="flex items-center gap-1 text-[11px] font-semibold text-white">
              Aarong Crafts <BadgeCheck className="size-3 text-ice-300" />
            </p>
            <p className="text-[9px] text-slate-400">Handmade goods · Dhaka</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            ["12.4k", "Followers"],
            ["4.8", "Rating"],
            ["320", "Orders"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-white/[0.05] py-1.5">
              <p className="text-[11px] font-semibold text-white">{v}</p>
              <p className="text-[7px] text-slate-400">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <span className="flex-1 rounded-lg bg-gradient-to-r from-brand-600 to-ice-500 py-1.5 text-center text-[10px] font-semibold text-white">
            Follow
          </span>
          <span className="flex-1 rounded-lg border border-white/15 py-1.5 text-center text-[10px] font-semibold text-slate-200">
            Message
          </span>
        </div>
      </div>
      <p className="text-[10px] font-semibold text-slate-300">Customers</p>
      <div className="flex-1 space-y-2 overflow-hidden">
        {["Rahim Uddin", "Farhana Akter", "Tanvir Hasan"].map((n, i) => (
          <div
            key={n}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
          >
            <Avatar className="size-7 text-[9px]">{n[0]}</Avatar>
            <div className="flex-1">
              <p className="text-[10px] font-medium text-white">{n}</p>
              <p className="text-[8px] text-slate-500">
                Last order · {i === 0 ? "৳2,450" : i === 1 ? "৳890" : "৳5,120"}
              </p>
            </div>
            <ChevronRight className="size-3.5 text-slate-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Market ---------------- */

function MarketScreen() {
  const items = [
    { name: "Hilsa Fish (1kg)", price: "৳850", g: "from-amber-500/40 to-orange-600/30" },
    { name: "Handloom Saree", price: "৳3,200", g: "from-rose-500/40 to-purple-600/30" },
    { name: "Basmati Rice 5kg", price: "৳620", g: "from-emerald-500/40 to-teal-600/30" },
    { name: "Leather Wallet", price: "৳1,450", g: "from-brand-500/40 to-ice-500/30" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">NexBD Market</p>
        <Store className="size-4 text-ice-300" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((it) => (
          <div
            key={it.name}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          >
            <div className={`h-14 bg-gradient-to-br ${it.g}`} />
            <div className="p-2">
              <p className="truncate text-[9px] font-medium text-white">{it.name}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-ice-300">{it.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-dashed border-ice-400/30 bg-ice-400/[0.06] p-2.5 text-center">
        <p className="text-[9px] text-ice-200">Marketplace in development</p>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */

function ServicesScreen() {
  const services = [
    { icon: Smartphone, label: "Mobile Recharge", soon: false },
    { icon: FileText, label: "Bill Pay", soon: false },
    { icon: GraduationCap, label: "Education", soon: true },
    { icon: Briefcase, label: "Gov. Services", soon: true },
    { icon: ShieldCheck, label: "Insurance", soon: true },
    { icon: Zap, label: "Quick Actions", soon: false },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <p className="text-sm font-semibold text-white">Services</p>
      <div className="grid grid-cols-3 gap-2">
        {services.map((s) => (
          <div
            key={s.label}
            className="relative flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-1 py-3"
          >
            {s.soon && (
              <span className="absolute right-1 top-1 rounded-full bg-ice-400/15 px-1 text-[6px] font-semibold uppercase text-ice-300">
                Soon
              </span>
            )}
            <s.icon className="size-5 text-brand-300" />
            <span className="text-center text-[8px] leading-tight text-slate-300">
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-white">Wallet</p>
          <Wallet className="size-3.5 text-ice-300" />
        </div>
        <p className="mt-1 text-lg font-bold text-white">৳ 12,450</p>
        <p className="text-[8px] text-slate-500">Available balance · preview</p>
      </div>
      <div className="flex-1 rounded-xl border border-dashed border-white/15 p-2 text-center text-[9px] text-slate-500">
        Everyday services — roadmap
      </div>
    </div>
  );
}

/* ---------------- Root ---------------- */

const screens: Record<ScreenId, () => ReactElement> = {
  home: HomeScreen,
  chat: ChatScreen,
  social: SocialScreen,
  business: BusinessScreen,
  market: MarketScreen,
  services: ServicesScreen,
};

export function PhoneScreen({ screen }: { screen: ScreenId }) {
  const Screen = screens[screen];
  return <Screen />;
}
