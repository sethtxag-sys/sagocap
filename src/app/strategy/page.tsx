import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Strategy | Sago Capital",
  description:
    "Sago Capital deploys a disciplined, three-pillar strategy targeting off-market industrial and office assets below replacement cost across the Texas Triangle and beyond.",
};

const PILLARS = [
  {
    number: 1,
    title: "Off-Market Sourcing Advantage",
    description:
      "We run direct-to-owner campaigns across 200+ opportunities per quarter, bypassing marketed deal flow entirely. Our proprietary sourcing targets distressed sellers, estate situations, and corporate divestitures—acquiring assets at 40–60% of replacement cost. This basis advantage is the foundation of every investment we make.",
  },
  {
    number: 2,
    title: "Basis Reset Through Execution",
    description:
      "We deploy aggressive lease-up strategies, targeted capex, and NNN conversions to reset the income profile of every acquisition within the first 12 months. Our vertically integrated platform—property management, leasing, and construction—allows us to execute without third-party drag. Investors historically receive distributions within 90 days of closing.",
  },
  {
    number: 3,
    title: "Forced Appreciation Engine",
    description:
      "We engineer value through mark-to-market rent rollovers, zoning arbitrage, entitlement work, and highest-and-best-use repositioning. Combined with our low cost-per-square-foot basis, these levers compress cap rates and drive outsized equity returns at disposition. This is not passive appreciation—it is manufactured alpha.",
  },
];

const APPROACH_CARDS = [
  {
    title: "Direct-to-Owner Campaigns",
    description:
      "Proprietary sourcing through direct mail, cold outreach, and broker networks that surface off-market deals before they reach the institutional market.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 32L20 8l12 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="24"
          x2="28"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Speed & Certainty of Close",
    description:
      "Pre-arranged capital structures and streamlined diligence allow us to close in 30–45 days, giving sellers the certainty they need and giving us a competitive edge over slower institutional buyers.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="28"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line
          x1="20"
          y1="17"
          x2="20"
          y2="23"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="19"
          x2="22"
          y2="19"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Vertically Integrated Execution",
    description:
      "In-house property management, leasing, construction oversight, and accounting eliminate third-party friction and give us full lifecycle control of every asset from acquisition to disposition.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline
          points="6,32 14,22 22,26 34,10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="28,10 34,10 34,16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="36"
          x2="34"
          y2="36"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const TARGET_GEOGRAPHIES = [
  "Texas Triangle",
  "North Carolina",
  "Missouri",
  "Illinois",
  "Ohio",
  "Kansas",
];

export default function StrategyPage() {
  return (
    <>
      {/* ───────────────────────── PAGE HERO ───────────────────────── */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-navy-dark">
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,61,120,0.5) 0%, transparent 70%), linear-gradient(180deg, rgba(15,38,84,0.0) 0%, rgba(15,38,84,0.6) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
            How We Invest
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl font-[family-name:var(--font-nunito)]">
            Investment Strategy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Three non-negotiable criteria govern every deployment of capital.
          </p>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          aria-hidden="true"
          style={{
            background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
          }}
        />
      </section>

      {/* ───────────────── INVESTMENT THESIS - THREE PILLARS ───────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Investment Thesis
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Three Pillars of Our Strategy
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
              Every acquisition must satisfy all three criteria. No exceptions,
              no committee overrides, no style drift.
            </p>
          </div>

          {/* Pillars - alternating layout */}
          <div className="mt-20 space-y-20 lg:space-y-28">
            {PILLARS.map((pillar, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={pillar.number}
                  className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number block */}
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-full border-2 border-accent/20" />
                      <div className="absolute inset-3 rounded-full border border-accent/10" />
                      <span className="text-7xl font-bold text-accent/20 sm:text-8xl lg:text-9xl font-[family-name:var(--font-nunito)]">
                        {pillar.number}
                      </span>
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-3">
                      <span className="hidden h-px w-8 bg-accent lg:block" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
                        Pillar {pillar.number}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl font-[family-name:var(--font-nunito)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────── OUR APPROACH ──────────────────── */}
      <section className="bg-warm-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              How We Execute
            </h2>
          </div>

          {/* Approach cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH_CARDS.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10"
              >
                {/* Gold accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-accent"
                  aria-hidden="true"
                />

                <div className="text-navy/70 transition-colors duration-300 group-hover:text-accent">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy font-[family-name:var(--font-nunito)]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── TARGET MARKETS ──────────────────── */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
                Target Markets
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-[2.75rem] lg:leading-snug font-[family-name:var(--font-nunito)]">
                Where We Invest
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg font-[family-name:var(--font-inter)]">
                The Texas Triangle—Dallas–Fort Worth, Houston, San Antonio, and
                Austin—is our primary hunting ground. We also pursue
                opportunistic industrial and office acquisitions across the
                Southeast and lower Midwest where we identify the same basis
                advantage.
              </p>

              {/* Geography tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {TARGET_GEOGRAPHIES.map((geo) => (
                  <span
                    key={geo}
                    className={`inline-block rounded-full border px-4 py-2 text-sm font-medium tracking-wide font-[family-name:var(--font-inter)] ${
                      geo === "Texas Triangle"
                        ? "border-accent/40 bg-accent/10 text-accent"
                        : "border-white/15 bg-white/5 text-white/80"
                    }`}
                  >
                    {geo}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column - Map placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-72 w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm sm:h-80 lg:h-96">
                <div className="text-center px-6">
                  {/* Map pin icon */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="mx-auto text-white/20"
                  >
                    <path
                      d="M24 4C16.268 4 10 10.268 10 18c0 10.5 14 26 14 26s14-15.5 14-26c0-7.732-6.268-14-14-14z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="24"
                      cy="18"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="mt-4 text-sm font-medium tracking-wide text-white/30 font-[family-name:var(--font-inter)]">
                    Markets Visited for Investment Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── CTA SECTION ──────────────── */}
      <section className="relative bg-warm-white py-24 sm:py-28">
        {/* Gold accent top border */}
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
            Co-Investment
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
            Seeking Co-Investment Partners
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
            We co-invest meaningful GP capital alongside every limited partner.
            If you&apos;re seeking differentiated exposure to Texas Triangle
            commercial real estate, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded bg-accent px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
