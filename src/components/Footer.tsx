const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "NexBD", href: "#products" },
      { label: "Showcase", href: "#showcase" },
      { label: "Technology", href: "#technology" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy — coming soon", href: "#" },
      { label: "Terms of Service — coming soon", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-baseline gap-2">
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Kignature
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice-300">
                LLC
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A technology company in Dhaka, Bangladesh, building NexBD.
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              NexBD is a product of Kignature LLC.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <span className="text-sm text-slate-600">{link.label}</span>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-slate-500">
            © 2026 Kignature LLC. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-600">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
