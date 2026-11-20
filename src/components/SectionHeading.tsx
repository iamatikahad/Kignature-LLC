import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
