import { PhoneScreen, type ScreenId } from "./PhoneScreens";

export function PhoneMockup({
  screen,
  className = "",
}: {
  screen: ScreenId;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[290px] sm:w-[320px] ${className}`}
      role="img"
      aria-label="NexBD app preview"
    >
      {/* side buttons */}
      <span className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l-md bg-slate-600/70" />
      <span className="absolute -left-[3px] top-40 h-14 w-[3px] rounded-l-md bg-slate-600/70" />
      <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-md bg-slate-600/70" />

      <div className="rounded-[2.9rem] border border-white/15 bg-gradient-to-b from-slate-700/60 to-slate-900/80 p-[10px] shadow-[0_40px_120px_-30px_rgba(2,6,23,0.9),0_0_0_1px_rgba(96,165,250,0.12)]">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-[#0a1128]">
          {/* status bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-[9px] font-medium text-slate-300">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ice-300" />
              <span className="inline-block h-1.5 w-3 rounded-sm bg-slate-400" />
            </span>
          </div>
          {/* dynamic island */}
          <span className="absolute left-1/2 top-2.5 z-20 h-[22px] w-24 -translate-x-1/2 rounded-full bg-black" />
          {/* home indicator */}
          <span className="absolute bottom-1.5 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/25" />

          <div className="relative h-[560px] overflow-hidden sm:h-[610px]">
            <PhoneScreen screen={screen} />
          </div>
        </div>
      </div>
    </div>
  );
}
