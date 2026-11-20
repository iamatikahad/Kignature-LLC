import {
  Handshake,
  TrendingUp,
  Cpu,
  MailQuestion,
  MapPin,
  Info,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { ContactForm } from "./ContactForm";

const topics = [
  {
    icon: Handshake,
    title: "Partnership",
    desc: "Working together on products or services.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    desc: "Questions about NexBD and where we're headed.",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "Engineering and platform collaboration.",
  },
  {
    icon: MailQuestion,
    title: "General",
    desc: "Anything else — we're happy to hear from you.",
  },
];

export function Contact() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
            Get in{" "}
            <span className="font-display italic font-normal text-gradient">
              touch.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Partner, investor, or just curious — send us a message and
            we&apos;ll reply.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col">
            <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {topics.map((t, i) => (
                <Reveal key={t.title} delay={i * 70}>
                  <li className="group flex items-start gap-4 py-5">
                    <t.icon className="mt-0.5 size-4 shrink-0 text-ice-300/70" />
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={300}>
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-ice-300" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Headquarters
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Kignature LLC — Bangladesh
                  <br />
                  {contactEmail ? (
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-ice-300 underline-offset-4 hover:underline"
                    >
                      {contactEmail}
                    </a>
                  ) : (
                    <span className="text-slate-500">
                      We don&apos;t publish an email address yet — use the form
                      and we&apos;ll be in touch.
                    </span>
                  )}
                </p>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                  <Info className="mt-0.5 size-3.5 shrink-0" />
                  Email and phone details will be added here once confirmed.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
