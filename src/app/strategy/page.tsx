import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Strategy | Sago Capital",
  description:
    "Sago Capital's disciplined investment strategy focuses on low cost per square foot, immediate cash flow, and below market rents across the Southeast and Midwest.",
};

const PILLARS = [
  {
    number: 1,
    title: "Low Cost Per Square Foot",
    description:
      "We focus on undervalued properties priced well below replacement cost. These assets feature significant potential for capital appreciation, heightened by strategic improvements and efficient management. By exploiting the gap between acquisition cost and actual market value, we generate above-average returns.",
  },
  {
    number: 2,
    title: "Immediate Cash Flow",
    description:
      "We pursue high cap rate, cash-flowing assets that deliver competitive, immediate returns regardless of credit market conditions. Our investments historically provide distributions within a month of closing. This conservative underwriting allows us to maintain competitive rents and yield for investors.",
  },
  {
    number: 3,
    title: "Below Market Rents",
    description:
      "We identify assets with below-market rents at acquisition. This approach allows us to create value by increasing rents cautiously while maintaining occupancy. Opportunities to increase rents, combined with a low cost-per-square-foot basis, act as a lever to boost both income and capital value.",
  },
];

const APPROACH_CARDS = [
  {
    title: "Strategic Value Creation",
    description:
      "We target undervalued properties and unlock their potential with efficient improvements.",
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
    title: "Immediate, Strong Cash Flow",
    description:
      "We focus on cash-flowing assets that generate solid returns from day one.",
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
    title: "Sustainable Long-Term Growth",
    description:
      "We build lasting value by acquiring assets with below-market rents and making strategic adjustments.",
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
  "North Carolina",
  "Missouri",
  "Illinois",
  "Ohio",
  "Kansas",
  "Texas",
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
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(42,64,96,0.5) 0%, transparent 70%), linear-gradient(180deg, rgba(15,29,48,0.0) 0%, rgba(15,29,48,0.6) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
            How We Invest
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl font-[family-name:var(--font-playfair)]">
            Investment Strategy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Since 2020, we&apos;ve used clear, disciplined investment criteria to
            guide every decision.
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
              Investment Thesis
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
              Three Pillars of Our Strategy
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
              Our strategy focuses on three key components that work together to
              protect capital and generate strong returns.
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
                      <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
                      <div className="absolute inset-3 rounded-full border border-gold/10" />
                      <span className="text-7xl font-bold text-gold/20 sm:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)]">
                        {pillar.number}
                      </span>
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-3">
                      <span className="hidden h-px w-8 bg-gold lg:block" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold font-[family-name:var(--font-inter)]">
                        Pillar {pillar.number}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)]">
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
              How We Create Value
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
                  className="absolute inset-x-0 top-0 h-1 bg-gold"
                  aria-hidden="true"
                />

                <div className="text-navy/70 transition-colors duration-300 group-hover:text-gold">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy font-[family-name:var(--font-playfair)]">
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
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
                Target Markets
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-[2.75rem] lg:leading-snug font-[family-name:var(--font-playfair)]">
                Where We Invest
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg font-[family-name:var(--font-inter)]">
                Sago focuses on sourcing undervalued industrial and office assets
                across the Southeast and lower Midwest. We are also actively
                pursuing opportunistic development projects in Texas.
              </p>

              {/* Geography tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {TARGET_GEOGRAPHIES.map((geo) => (
                  <span
                    key={geo}
                    className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-white/80 font-[family-name:var(--font-inter)]"
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
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-[family-name:var(--font-inter)]">
            Partner With Us
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
            Ready to explore partnership opportunities?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
            We&apos;d love to discuss how Sago&apos;s disciplined approach can
            work for your investment goals.
          </p>
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
