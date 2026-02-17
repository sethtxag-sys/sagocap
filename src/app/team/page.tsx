import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Sago Capital",
  description:
    "Five principals with skin in the game. Sago Capital's leadership team brings functional specialization across acquisitions, capital markets, asset management, operations, and development.",
};

const PRINCIPALS = [
  {
    name: "Seth McKinney",
    title: "Principal — Acquisitions & Capital Markets",
    email: undefined,
    credentials: "", // TODO: add credentials (CCIM, etc.)
  },
  {
    name: "Barry Moore",
    title: "Principal — Capital Markets",
    email: "bmoore@sagocap.com",
    credentials: "", // TODO: add credentials
  },
  {
    name: "Matt Johnson",
    title: "Principal — Asset Management",
    email: undefined,
    credentials: "", // TODO: add credentials
  },
  {
    name: "Jasen Coots",
    title: "Principal — Operations",
    email: "jcoots@sagocap.com",
    credentials: "", // TODO: add credentials
  },
  {
    name: "Joe White",
    title: "Principal — Development",
    email: "jwhite@sagocap.com",
    credentials: "", // TODO: add credentials
  },
];

const MANAGEMENT = [
  { name: "Frank Wallace", title: "Chief Operating Officer" },
  { name: "Evan Perroni", title: "Chief Financial Officer" },
  { name: "Kailee Priem", title: "Director, Operations" },
];

const ASSOCIATES = [
  { name: "John Hawkinson", title: "Property Manager" },
  { name: "Abby Oliver", title: "Accounting Manager" },
  { name: "Luke Patin", title: "Associate, Retail + Office Brokerage" },
  { name: "Jake Lee", title: "Associate, Land + Industrial Brokerage" },
];

function TeamCard({
  member,
}: {
  member: { name: string; title: string; email?: string; credentials?: string };
}) {
  return (
    <article className="group flex flex-col rounded-lg bg-white p-6 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10">
      {/* Headshot placeholder */}
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-navy/[0.04]">
        <div className="flex h-full w-full items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-navy/15"
          >
            <circle
              cx="24"
              cy="17"
              r="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 43c0-8.837 7.163-16 16-16s16 7.163 16 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Info */}
      <h3 className="mt-5 text-lg font-bold text-navy font-[family-name:var(--font-nunito)]">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate font-[family-name:var(--font-inter)]">
        {member.title}
      </p>
      {member.credentials && (
        <p className="mt-1 text-xs text-accent font-[family-name:var(--font-inter)]">
          {member.credentials}
        </p>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-2 text-sm text-accent transition-colors duration-200 hover:text-accent-light font-[family-name:var(--font-inter)]"
        >
          {member.email}
        </a>
      )}
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* ───────────────────────── PAGE HERO ───────────────────────── */}
      <section className="relative bg-navy py-32 sm:py-40">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,61,120,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(15,38,84,0.0) 0%, rgba(15,38,84,0.4) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-nunito)]">
            Your Capital Deserves Operators,
            <br />
            Not Managers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Five principals with functional specialization across acquisitions,
            capital markets, asset management, operations, and development —
            each with skin in the game on every deal.
          </p>
        </div>
      </section>

      {/* ──────────────── PRINCIPALS & PARTNERS ──────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Principals
            </h2>
          </div>

          {/* Team grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPALS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── MANAGEMENT TEAM ──────────────── */}
      <section className="bg-warm-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Operations
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Management Team
            </h2>
          </div>

          {/* Team grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MANAGEMENT.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── ASSOCIATES & STAFF ──────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Brokerage
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Associates &amp; Staff
            </h2>
          </div>

          {/* Team grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ASSOCIATES.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── TEAM PHOTO ──────────────── */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Photo placeholder */}
          <div className="aspect-[21/9] w-full overflow-hidden rounded-lg bg-white/[0.06]">
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-white/15"
              >
                <rect
                  x="4"
                  y="12"
                  width="56"
                  height="40"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="28" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4 44l14-10 10 8 12-14 20 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Caption */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-white/60 font-[family-name:var(--font-inter)]">
            Every principal invests personal capital alongside yours. That&apos;s
            alignment you can measure.
          </p>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
            Next Step
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
            Meet the Team Behind Your Next Investment
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
            Schedule a call to discuss how our team&apos;s operational
            expertise translates into outsized returns for our limited partners.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded bg-accent px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
            >
              Schedule a Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-block rounded border border-navy/20 px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:border-navy/40 hover:bg-navy/5 font-[family-name:var(--font-inter)]"
            >
              Review Our Track Record
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
