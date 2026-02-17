import type { Metadata } from "next";
import Link from "next/link";

/*
 * ──────────────────────────────────────────────────────────────
 *  STORYBRAND MAPPING — ABOUT PAGE
 *  Role: Guide (empathy + authority)
 *
 *  Hero     → "We understand what it's like to deploy capital without alignment"
 *  Story    → Guide credentials (founded on conviction, built through discipline)
 *  Values   → Empathy proof (integrity, discipline, partnership)
 *  Community→ Authority proof (civic leadership, institutional affiliations)
 *  CTA      → "Schedule a Call" (direct) + "Review Our Track Record" (transitional)
 * ──────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "About | Sago Capital",
  description:
    "Sago Capital is a vertically integrated CRE platform built on discipline, execution, and true alignment with investors. Every principal invests personal capital alongside yours.",
};

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Integrity",
    description:
      "Your trust is the foundation of everything we do. We invest our own capital alongside yours because alignment isn\u2019t a talking point — it\u2019s how we operate.",
  },
  {
    icon: TargetIcon,
    title: "Discipline",
    description:
      "Every acquisition must pass all three pillars of our strategy. No exceptions, no committee overrides, no style drift. Your capital deserves that rigor.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership",
    description:
      "We don\u2019t have clients — we have partners. When you invest with Sago, you get direct access to the principals managing your capital, not a fund administrator.",
  },
];

const MEMBERSHIPS = ["CCIM", "SIOR", "NAIOP"];

export default function AboutPage() {
  return (
    <div>
      {/* ===== PAGE HERO (GUIDE INTRODUCTION) ===== */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/60 via-transparent to-navy-light/20" />

        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Who We Are
            </p>

            {/* Heading */}
            <h1 className="mt-6 font-[family-name:var(--font-nunito)] text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Built Sago Because We Were Investors First
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/70 sm:text-xl">
              Before we managed a single dollar of outside capital, we
              experienced the same frustrations you have — misaligned sponsors,
              opaque reporting, and strategies that prioritize AUM over returns.
              Sago was built to be the firm we wished existed.
            </p>

            {/* Decorative divider */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-accent/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-px w-12 bg-accent/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY (GUIDE CREDENTIALS) ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text Column */}
            <div>
              <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Our Story
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
                Independent. Texas-Based.
                <br />
                Built for Investors Like You.
              </h2>

              <div className="mt-8 space-y-5 font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate sm:text-lg sm:leading-relaxed">
                <p>
                  Sago Capital is an independent, Texas-based commercial real
                  estate platform headquartered in College Station, Texas —
                  the heart of Aggieland. Founded in 2020, the firm was built on
                  the conviction that disciplined underwriting and hands-on
                  management create superior outcomes for investors.
                </p>

                <p>
                  We didn&apos;t start Sago to raise a fund. We started Sago
                  because we saw a gap: investors who want off-market deal flow,
                  operator-level execution, and true alignment don&apos;t have
                  many options. We built those options.
                </p>

                <p>
                  In 2025, Sago consolidated all of its real estate-related
                  companies — brokerage, development, and management — under one
                  banner, creating a vertically integrated platform. Today, the
                  firm operates four distinct business lines:{" "}
                  <span className="font-medium text-navy">acquisitions</span>,{" "}
                  <span className="font-medium text-navy">development</span>,{" "}
                  <span className="font-medium text-navy">brokerage</span>, and{" "}
                  <span className="font-medium text-navy">management</span>.
                </p>

                <p>
                  This integrated structure allows us to control the full
                  lifecycle of every investment — delivering transparency,
                  efficiency, and alignment at every stage.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded bg-navy px-7 py-3.5 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
                >
                  Review Our Track Record
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Placeholder Column */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-warm-gray">
                {/* Placeholder content */}
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                    <svg
                      className="h-8 w-8 text-navy/20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-navy/30">
                    Photo Placeholder
                  </p>
                </div>
              </div>

              {/* Decorative border accent */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-lg border-2 border-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY VALUES (EMPATHY) ===== */}
      <section className="bg-warm-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              What We Believe
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Values That Protect Your Capital
            </h2>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate sm:text-lg">
              These aren&apos;t aspirational statements. They&apos;re the
              operating principles that govern every decision we make with your
              money.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent/40" />
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="h-px w-8 bg-accent/40" />
            </div>
          </div>

          {/* Value Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="group relative rounded-lg border border-navy/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-md sm:p-10"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 transition-colors duration-300 group-hover:bg-accent/10">
                  <value.icon className="h-6 w-6 text-navy transition-colors duration-300 group-hover:text-accent" />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-[family-name:var(--font-nunito)] text-xl font-semibold text-navy">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
                  {value.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ENGAGEMENT (AUTHORITY) ===== */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Community &amp; Leadership
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Invested in More Than Real Estate
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent/40" />
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="h-px w-8 bg-accent/40" />
            </div>

            <div className="mt-10 space-y-5 font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
              <p>
                Our principals are deeply engaged in civic leadership, local and
                state government, and non-profit organizations across Texas.
                This community involvement gives us ground-level intelligence on
                zoning, infrastructure, and economic development — insights that
                directly benefit our investors.
              </p>
              <p>
                We are proud supporters of the Greater Brazos Partnership and
                actively contribute to initiatives that strengthen the
                communities where we invest and operate.
              </p>
            </div>
          </div>

          {/* Leadership Involvement Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <span className="font-[family-name:var(--font-nunito)] text-lg font-semibold text-accent">
                  BM
                </span>
              </div>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                Barry served as Governor Abbott&apos;s appointee as chair of the{" "}
                <span className="text-white">
                  Brazos County Regional Mobility Authority
                </span>
                .
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <span className="font-[family-name:var(--font-nunito)] text-lg font-semibold text-accent">
                  SM
                </span>
              </div>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                Seth serves on the{" "}
                <span className="text-white">Aggie Real Estate Board</span>,
                connecting Aggie real estate professionals across the state.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <span className="font-[family-name:var(--font-nunito)] text-lg font-semibold text-accent">
                  BM
                </span>
              </div>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
                Barry is President of the{" "}
                <span className="text-white">Aggie Real Estate Network</span>,
                fostering collaboration among Texas A&amp;M alumni in the real
                estate industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIPS (AUTHORITY PROOF) ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Affiliations
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Proud Members
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent/40" />
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="h-px w-8 bg-accent/40" />
            </div>
          </div>

          {/* Membership Badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {MEMBERSHIPS.map((org) => (
              <div
                key={org}
                className="group flex h-28 w-40 flex-col items-center justify-center rounded-lg border border-navy/5 bg-warm-white transition-all duration-300 hover:border-accent/20 hover:shadow-md sm:h-32 sm:w-48"
              >
                <span className="font-[family-name:var(--font-inter)] text-2xl font-bold tracking-[0.15em] text-navy/70 transition-colors duration-300 group-hover:text-navy sm:text-3xl">
                  {org}
                </span>
                <span className="mt-1 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-slate/50">
                  Member
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA (DIRECT + TRANSITIONAL) ===== */}
      <section className="border-t border-navy/5 bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Next Step
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-2xl font-semibold text-navy sm:text-3xl">
            Your Capital Deserves a Partner, Not a Manager
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
            We partner with family offices, HNW individuals, and institutional
            allocators seeking differentiated exposure to Texas Triangle
            commercial real estate — with true alignment at every level.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-accent px-8 py-4 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Schedule a Call
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded border border-navy/20 px-8 py-4 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:border-navy/40 hover:bg-navy/5"
            >
              Review Our Track Record
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
