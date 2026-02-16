import Link from "next/link";

const STATS = [
  { value: "$80M+", label: "Transaction Volume" },
  { value: "30.9%", label: "Realized Net IRR" },
  { value: "1.5M+", label: "Square Feet" },
  { value: "1.57x", label: "Avg Equity Multiple" },
  { value: "XXX.XXX", label: "DPI" }, // TODO: Replace with actual DPI — confirm with Seth
];

const SERVICES = [
  {
    title: "Acquisitions",
    description:
      "Off-market sourcing via direct-to-owner campaigns targeting industrial and office assets below replacement cost. We specialize in complex capital structures, distressed seller situations, and sale-leasebacks where speed and certainty of close create a competitive edge.",
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
          x="4"
          y="16"
          width="14"
          height="20"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="22"
          y="8"
          width="14"
          height="28"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="26"
          x2="22"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="8"
          y1="22"
          x2="14"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="26"
          x2="14"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="30"
          x2="14"
          y2="30"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="14"
          x2="32"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="18"
          x2="32"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="22"
          x2="32"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="26"
          x2="32"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="30"
          x2="32"
          y2="30"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Development",
    description:
      "Opportunistic ground-up construction in high-growth Texas Triangle corridors. We target projects where entitlement complexity or zoning constraints create barriers to entry and outsized risk-adjusted returns.",
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
          d="M6 36h28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 36V18l10-10 10 10v18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="16"
          y="24"
          width="8"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="16"
          width="5"
          height="5"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="22"
          y="16"
          width="5"
          height="5"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M20 8V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Asset Management",
    description:
      "Vertically integrated property management, leasing, and capital improvement execution. We control the full lifecycle of every investment — from lease-up to disposition — ensuring alignment between operations and investor returns.",
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
          x="8"
          y="12"
          width="24"
          height="24"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 12V6h12v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="22"
          x2="32"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const PRINCIPLES = [
  {
    number: 1,
    title: "Off-Market Sourcing Advantage",
    description:
      "Direct-to-owner campaigns and broker relationships surface deals before they hit the market. We underwrite 200+ opportunities per quarter to execute on fewer than 5 — targeting industrial and office assets priced at 40–60% of replacement cost.",
  },
  {
    number: 2,
    title: "Basis Reset Through Execution",
    description:
      "Aggressive lease-up of vacancy, strategic capex deployment, and NNN conversions generate immediate cash flow from close. Every acquisition must distribute within 90 days.",
  },
  {
    number: 3,
    title: "Forced Appreciation Engine",
    description:
      "Below-market rents at acquisition create embedded upside. We capture it through mark-to-market lease rollovers, zoning and entitlement arbitrage, and highest-and-best-use repositioning.",
  },
];

const DEALS = [
  {
    name: "Peachtree",
    strategy: "Deep Value-Add | Recapitalization",
    vintage: "2019", // TODO: Confirm vintage year
    irr: "41.1%",
    moic: "1.89x",
    holdPeriod: "59 Months+",
  },
  {
    name: "Gray Fox",
    strategy: "Opportunistic Flip | Market Timing",
    vintage: "2022", // TODO: Confirm vintage year
    irr: "40.3%",
    moic: "1.53x",
    holdPeriod: "15 Months",
  },
  {
    name: "H6S",
    strategy: "Land Banking | Entitlement",
    vintage: "2021", // TODO: Confirm vintage year
    irr: "36.3%",
    moic: "1.80x",
    holdPeriod: "22 Months",
  },
  {
    name: "Columbia",
    strategy: "Value-Add Office | Lease-Up",
    vintage: "2021", // TODO: Confirm vintage year
    irr: "24.8%",
    moic: "1.72x",
    holdPeriod: "32 Months",
  },
];

const TEAM = [
  { name: "Seth McKinney", title: "Principal — Acquisitions & Capital Markets" },
  { name: "Barry Moore", title: "Principal — Capital Markets" },
  { name: "Matt Johnson", title: "Principal — Asset Management" },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center bg-navy-dark"
      >
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,61,120,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(15,38,84,0.0) 0%, rgba(15,38,84,0.6) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-nunito)]">
            High-Velocity Value Creation
            <br />
            in the Texas Triangle
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Aggressive acquisition of industrial and office assets below
            replacement cost.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
            >
              Explore Our Track Record
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded border border-white/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/5 font-[family-name:var(--font-inter)]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 w-full px-6 pb-16 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="stat-number text-3xl font-bold tracking-tight text-accent sm:text-4xl font-[family-name:var(--font-inter)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/50 sm:text-sm font-[family-name:var(--font-inter)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WHAT WE DO / SERVICES ───────────────── */}
      <section id="about" className="bg-warm-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Three Core Capabilities
            </h2>
          </div>

          {/* Service cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10"
              >
                {/* Gold accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-accent"
                  aria-hidden="true"
                />

                <div className="text-navy/70 transition-colors duration-300 group-hover:text-accent">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy font-[family-name:var(--font-nunito)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── INVESTMENT THESIS PREVIEW ──────────────── */}
      <section id="strategy" className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
                Investment Thesis
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-[2.75rem] lg:leading-snug font-[family-name:var(--font-nunito)]">
                Since 2020, three non-negotiable criteria have governed every
                deployment of capital.
              </h2>
              <Link
                href="/strategy"
                className="mt-10 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
              >
                Learn Our Full Strategy
              </Link>
            </div>

            {/* Right column - principles */}
            <div className="flex flex-col gap-10">
              {PRINCIPLES.map((principle) => (
                <div key={principle.number} className="flex gap-5">
                  {/* Numbered circle */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent text-sm font-bold text-accent font-[family-name:var(--font-inter)]">
                    {principle.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-nunito)]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60 font-[family-name:var(--font-inter)]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TRACK RECORD HIGHLIGHTS ──────────────── */}
      <section id="portfolio" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Track Record
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Proven Results for Our Partners
            </h2>
          </div>

          {/* Deal cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEALS.map((deal) => (
              <article
                key={deal.name}
                className="overflow-hidden rounded-lg border border-navy/5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Card header */}
                <div className="bg-navy px-6 py-5">
                  <h3 className="text-lg font-bold tracking-wide text-white font-[family-name:var(--font-nunito)]">
                    {deal.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-accent/80 font-[family-name:var(--font-inter)]">
                    {deal.strategy}
                  </p>
                </div>

                {/* Card body */}
                <div className="bg-white px-6 py-6">
                  <p className="stat-number text-3xl font-bold text-accent sm:text-4xl font-[family-name:var(--font-inter)]">
                    {deal.irr}
                  </p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-slate font-[family-name:var(--font-inter)]">
                    Net IRR
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-navy/5 pt-4">
                    <div>
                      <p className="text-base font-bold text-navy font-[family-name:var(--font-inter)]">
                        {deal.moic}
                      </p>
                      <p className="text-[0.65rem] font-medium uppercase tracking-widest text-slate font-[family-name:var(--font-inter)]">
                        MOIC
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-navy font-[family-name:var(--font-inter)]">
                        {deal.holdPeriod}
                      </p>
                      <p className="text-[0.65rem] font-medium uppercase tracking-widest text-slate font-[family-name:var(--font-inter)]">
                        Hold (V{deal.vintage})
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg font-[family-name:var(--font-inter)]"
            >
              View Full Track Record
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── TEAM PREVIEW ────────────────────── */}
      <section id="team" className="bg-warm-gray py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Our Team
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Experienced. Disciplined. Invested.
            </h2>
          </div>

          {/* Team grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="group flex flex-col items-center rounded-lg bg-white p-8 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10"
              >
                {/* Photo placeholder */}
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-navy/5 transition-colors duration-300 group-hover:bg-navy/10">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="text-navy/20"
                  >
                    <circle
                      cx="18"
                      cy="13"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 32c0-6.627 5.373-12 12-12s12 5.373 12 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-bold text-navy font-[family-name:var(--font-nunito)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate font-[family-name:var(--font-inter)]">
                  {member.title}
                </p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/team"
              className="inline-block rounded bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg font-[family-name:var(--font-inter)]"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────── CTA / CONTACT SECTION ──────────────── */}
      <section id="contact" className="relative bg-navy-dark py-24 sm:py-28">
        {/* Subtle gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(25,61,120,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
            Start the Conversation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 font-[family-name:var(--font-inter)]">
            We partner with family offices, HNW individuals, and institutional
            allocators seeking differentiated exposure to Texas Triangle
            commercial real estate.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded bg-accent px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </>
  );
}
