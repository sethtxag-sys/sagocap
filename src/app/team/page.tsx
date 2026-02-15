import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Sago Capital",
  description:
    "Meet the Sago Capital team — experienced professionals with deep expertise in commercial real estate investment, development, brokerage, and management.",
};

const PRINCIPALS = [
  { name: "Barry Moore", title: "Principal", email: "bmoore@sagocap.com" },
  { name: "Jasen Coots", title: "Principal", email: "jcoots@sagocap.com" },
  { name: "Joe White", title: "Principal", email: "jwhite@sagocap.com" },
  { name: "Matt Johnson", title: "Principal" },
  { name: "Seth McKinney", title: "Principal" },
  { name: "Jack Parker", title: "Partner" },
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
  member: { name: string; title: string; email?: string };
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
      <h3 className="mt-5 text-lg font-bold text-navy font-[family-name:var(--font-playfair)]">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate font-[family-name:var(--font-inter)]">
        {member.title}
      </p>
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-2 text-sm text-gold transition-colors duration-200 hover:text-gold-light font-[family-name:var(--font-inter)]"
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
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(42,64,96,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(15,29,48,0.0) 0%, rgba(15,29,48,0.4) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)]">
            Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Experienced professionals with deep expertise in commercial real
            estate investment, development, brokerage, and management.
          </p>
        </div>
      </section>

      {/* ──────────────── PRINCIPALS & PARTNERS ──────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
              Principals &amp; Partners
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
              Operations
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
              Brokerage
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
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
            The Sago team continues to grow, strengthening our capacity to serve
            clients with greater efficiency and expertise.
          </p>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
            Want to join our team or explore partnership opportunities?
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 font-[family-name:var(--font-inter)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
