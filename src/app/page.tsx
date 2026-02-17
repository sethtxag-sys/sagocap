import Link from "next/link";

/* ────────────────────────────────────────────────────────────────────────────
   StoryBrand Framework applied to PERE:
   ─ Hero/Character  = The LP / Investor (you)
   ─ Problem         = Can't access off-market deal flow; fear of style drift
   ─ Guide           = Sago Capital (empathy + authority)
   ─ Plan            = 3-step co-investment process
   ─ CTA             = Direct: "Schedule a Call" | Transitional: "Review Track Record"
   ─ Failure         = Settling for market-rate returns
   ─ Success         = Outsized distributions, true alignment
   ──────────────────────────────────────────────────────────────────────────── */

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
      "We source deals you won't find on the market. Direct-to-owner campaigns, distressed seller situations, and sale-leasebacks — acquired at 40–60% of replacement cost so your capital starts with a built-in margin of safety.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="16" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="22" x2="14" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="26" x2="14" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="30" x2="14" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="26" x2="32" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Development",
    description:
      "Ground-up construction in high-growth Texas Triangle corridors where entitlement complexity keeps institutional capital on the sidelines — and keeps returns elevated for our partners.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M6 36h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 36V18l10-10 10 10v18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="16" y="24" width="8" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="16" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        <rect x="22" y="16" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Asset Management",
    description:
      "We don't outsource your returns. In-house property management, leasing, and capex execution give us full lifecycle control — so every dollar of NOI goes toward building your equity, not paying third-party fees.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="12" width="24" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12V6h12v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.5" />
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
      "We underwrite 200+ opportunities per quarter to execute on fewer than 5. Direct-to-owner campaigns surface industrial and office assets at 40–60% of replacement cost — before they ever hit the market.",
  },
  {
    number: 2,
    title: "Basis Reset Through Execution",
    description:
      "Aggressive lease-up, targeted capex, and NNN conversions generate immediate cash flow. Your capital starts working from day one — investors historically receive distributions within 90 days of closing.",
  },
  {
    number: 3,
    title: "Forced Appreciation Engine",
    description:
      "Below-market rents at acquisition create embedded upside. We capture it through mark-to-market rollovers, zoning arbitrage, and highest-and-best-use repositioning — manufacturing alpha, not waiting for it.",
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

const PLAN_STEPS = [
  {
    step: 1,
    title: "Review Our Track Record",
    description:
      "Examine our realized exits, current holdings, and the discipline behind every deployment of capital.",
  },
  {
    step: 2,
    title: "Schedule a Call",
    description:
      "Speak directly with a principal about our current pipeline, fund structure, and co-investment terms.",
  },
  {
    step: 3,
    title: "Invest with Confidence",
    description:
      "Deploy capital alongside ours into off-market assets with distributions that typically begin within 90 days.",
  },
];

const TEAM = [
  { name: "Seth McKinney", title: "Acquisitions & Capital Markets" },
  { name: "Barry Moore", title: "Capital Markets" },
  { name: "Matt Johnson", title: "Asset Management" },
  { name: "Jasen Coots", title: "Operations" },
  { name: "Joe White", title: "Development" },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO (Character: The LP) ═══════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center bg-navy-dark"
      >
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
            Your Capital Should Generate Alpha
            <br />
            <span className="text-accent">&mdash; Not Sit on the Sidelines</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-[family-name:var(--font-inter)]">
            Most investors never see the Texas Triangle&apos;s best deals.
            We acquire industrial and office assets at 40&ndash;60% of replacement
            cost &mdash; and put your capital to work from day one.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
            >
              Schedule a Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-block rounded border border-white/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/5 font-[family-name:var(--font-inter)]"
            >
              Review Our Track Record
            </Link>
          </div>
        </div>

        {/* Stats bar (Guide: Authority) */}
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

      {/* ═══════════════ THE PROBLEM (what investors face) ═══════════════ */}
      <section className="bg-warm-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              The Best Deals Never Hit the Market
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
              Marketed deal flow is picked over by the time you see it. Passive
              LP structures give you zero visibility into operations. And most
              sponsors prioritize AUM growth over investor returns. You deserve
              better &mdash; and you know it.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-navy/5 bg-white p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-red-500/80 font-[family-name:var(--font-inter)]">
                External Problem
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                &ldquo;I can&apos;t access the off-market deal flow where the
                real alpha lives.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-navy/5 bg-white p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-red-500/80 font-[family-name:var(--font-inter)]">
                Internal Problem
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                &ldquo;I&apos;m tired of sponsors who don&apos;t invest their
                own capital alongside mine.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-navy/5 bg-white p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-red-500/80 font-[family-name:var(--font-inter)]">
                Philosophical Problem
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                &ldquo;Capital should be deployed with discipline &mdash; not
                chasing AUM.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE GUIDE (empathy + authority) ═══════════ */}
      <section id="about" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              We Understand
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              We Built Sago for Investors Like You
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
              We know what it&apos;s like to deploy capital with a sponsor
              and wonder if they care as much about your returns as their
              management fees. That&apos;s why every principal invests personal
              capital alongside yours &mdash; and why we built a platform
              designed for execution, not asset gathering.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-lg bg-warm-white p-8 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10"
              >
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

      {/* ═══════════ THE PLAN (3 steps) ═══════════ */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Your Path Forward
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Three Steps to Partnering with Sago
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {PLAN_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-lg font-bold text-accent font-[family-name:var(--font-inter)]">
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white font-[family-name:var(--font-nunito)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 font-[family-name:var(--font-inter)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-block rounded bg-accent px-10 py-4 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
            >
              Start with Step One
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ INVESTMENT THESIS (Guide's strategy) ═══════════ */}
      <section id="strategy" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
                Investment Thesis
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-snug font-[family-name:var(--font-nunito)]">
                Three non-negotiable criteria protect your capital &mdash; and
                amplify your returns.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
                Every acquisition must satisfy all three. No exceptions, no
                committee overrides, no style drift. This is how we&apos;ve
                delivered a 30.9% realized net IRR since inception.
              </p>
              <Link
                href="/strategy"
                className="mt-10 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-inter)]"
              >
                See Our Full Strategy
              </Link>
            </div>

            <div className="flex flex-col gap-10">
              {PRINCIPLES.map((principle) => (
                <div key={principle.number} className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent text-sm font-bold text-accent font-[family-name:var(--font-inter)]">
                    {principle.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-nunito)]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate font-[family-name:var(--font-inter)]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SUCCESS (what investors achieve) ═══════════ */}
      <section id="portfolio" className="bg-warm-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Track Record
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              What Success Looks Like for Our Partners
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg font-[family-name:var(--font-inter)]">
              These aren&apos;t projections. These are realized exits &mdash;
              capital returned, gains banked, and reinvested into the next
              opportunity.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEALS.map((deal) => (
              <article
                key={deal.name}
                className="overflow-hidden rounded-lg border border-navy/5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="bg-navy px-6 py-5">
                  <h3 className="text-lg font-bold tracking-wide text-white font-[family-name:var(--font-nunito)]">
                    {deal.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-accent/80 font-[family-name:var(--font-inter)]">
                    {deal.strategy}
                  </p>
                </div>
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

      {/* ═══════════ FAILURE (what's at stake) ═══════════ */}
      <section className="bg-navy-dark py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/70 font-[family-name:var(--font-inter)]">
            The Alternative
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl font-[family-name:var(--font-nunito)]">
            What Happens When You Wait
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg font-[family-name:var(--font-inter)]">
            Every quarter you deploy capital into market-rate deals is a quarter
            you&apos;re not capturing the basis advantage that off-market
            sourcing provides. The Texas Triangle&apos;s growth window
            won&apos;t stay open forever &mdash; and the operators who source
            today will be the ones who return capital tomorrow.
          </p>
        </div>
      </section>

      {/* ═══════════ TEAM PREVIEW (Guide's team) ═══════════ */}
      <section id="team" className="bg-warm-gray py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
              Your Operating Partners
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
              Five Principals. Skin in Every Deal.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm shadow-navy/5 transition-shadow duration-300 hover:shadow-md hover:shadow-navy/10"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy/5 transition-colors duration-300 group-hover:bg-navy/10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="text-navy/20"
                  >
                    <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-navy font-[family-name:var(--font-nunito)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate text-center font-[family-name:var(--font-inter)]">
                  {member.title}
                </p>
              </article>
            ))}
          </div>

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

      {/* ═══════════ DIRECT CTA (call to action) ═══════════ */}
      <section id="contact" className="relative bg-navy-dark py-24 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(25,61,120,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
            Take the Next Step
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-nunito)]">
            Your Capital Deserves a Seat at the Table
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 font-[family-name:var(--font-inter)]">
            We partner with family offices, HNW individuals, and institutional
            allocators who are done settling for market-rate returns. If you
            want direct access to off-market Texas Triangle CRE &mdash;
            let&apos;s talk.
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
              className="inline-block rounded border border-white/30 px-10 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/5 font-[family-name:var(--font-inter)]"
            >
              Review Our Track Record
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
