"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Company", href: "#about" },
  { label: "NexBD", href: "#products" },
  { label: "Showcase", href: "#showcase" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex items-baseline gap-2">
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Kignature
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice-300">
        LLC
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.08] bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Wordmark />

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#products"
            className="hidden rounded-md bg-white px-4 py-2 text-[13px] font-medium text-ink-950 transition-colors hover:bg-ice-200 sm:inline-flex"
          >
            NexBD — In Development
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md text-slate-300 hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/[0.08] bg-ink-950/95 px-5 pb-8 pt-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/[0.06] py-3.5 text-[15px] text-slate-200 last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-white px-5 py-3 text-center text-sm font-medium text-ink-950"
              >
                NexBD — In Development
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
