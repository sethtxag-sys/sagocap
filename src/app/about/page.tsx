import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Sago Capital",
  description:
    "Learn about Sago Capital, a fully integrated commercial real estate and investment firm built on trust, discipline, and long-term vision. Headquartered in College Station, Texas.",
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
      "We value the trust of our investors and strive to create meaningful, lasting value through every project.",
  },
  {
    icon: TargetIcon,
    title: "Discipline",
    description:
      "Guided by clear investment principles, we consistently deliver strong, risk-adjusted returns.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership",
    description:
      "We seek to be our partners\u2019 first and best resource for compelling opportunities in real property assets.",
  },
];

const MEMBERSHIPS = ["CCIM", "SIOR", "NAIOP"];

export default function AboutPage() {
  return (
    <div>
      {/* ===== PAGE HERO ===== */}
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
              About Sago
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/70 sm:text-xl">
              A fully integrated commercial real estate and investment firm
              built on trust, discipline, and long-term vision.
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

      {/* ===== OUR STORY ===== */}
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
                Built for the Long Term.
              </h2>

              <div className="mt-8 space-y-5 font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate sm:text-lg sm:leading-relaxed">
                <p>
                  Sago Capital is an independent, Texas-based commercial real
                  estate and investment firm headquartered in College Station,
                  Texas &mdash; the heart of Aggieland. Founded in 2020, the
                  firm was built on the conviction that disciplined underwriting
                  and hands-on management create superior outcomes for investors.
                </p>

                <p>
                  Since the firm&apos;s inception in 2020, we have worked
                  diligently to find excellent opportunities to grow wealth
                  through real estate investment.
                </p>

                <p>
                  In 2025, Sago consolidated all of its real estate-related
                  companies &mdash; brokerage, development, and management
                  &mdash; under one banner, creating a fully integrated platform.
                  Today, the firm operates four distinct business lines:{" "}
                  <span className="font-medium text-navy">acquisitions</span>,{" "}
                  <span className="font-medium text-navy">development</span>,{" "}
                  <span className="font-medium text-navy">brokerage</span>, and{" "}
                  <span className="font-medium text-navy">management</span>.
                </p>

                <p>
                  This integrated structure allows Sago to control the full
                  lifecycle of every investment, delivering transparency,
                  efficiency, and alignment with our partners at every stage.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded bg-navy px-7 py-3.5 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
                >
                  Get in Touch
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

      {/* ===== COMPANY VALUES ===== */}
      <section className="bg-warm-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              What Drives Us
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Our Values
            </h2>
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

      {/* ===== COMMUNITY ENGAGEMENT ===== */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Community
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Giving Back
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent/40" />
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="h-px w-8 bg-accent/40" />
            </div>

            <div className="mt-10 space-y-5 font-[family-name:var(--font-inter)] text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
              <p>
                At Sago, we believe that meaningful investment extends beyond
                commercial real estate. Our executives are deeply engaged in
                civic leadership, local and state government, and non-profit
                organizations across Texas.
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

      {/* ===== MEMBERSHIPS ===== */}
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

      {/* ===== BOTTOM CTA ===== */}
      <section className="border-t border-navy/5 bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-semibold text-navy sm:text-3xl">
            Ready to explore what Sago can do for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
            Whether you are an investor, a tenant, or a landowner, we would love
            to start a conversation.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded bg-accent px-8 py-4 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Contact Us
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
      </section>
    </div>
  );
}
