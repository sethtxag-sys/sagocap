import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Track Record | Sago Capital",
  description:
    "Sago Capital has deployed over $80M across industrial and office acquisitions since 2019, generating a 30.9% realized net IRR and 1.57x average equity multiple.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface ExitDeal {
  name: string;
  address?: string;
  irr: string;
  moic: string;
  hold: string;
  type: string;
  size: string;
  location?: string;
  strategy: string;
  vintage: string; // TODO: confirm all vintage years with team
}

const realizedExits: ExitDeal[] = [
  {
    name: "Raleigh",
    address: "5609 Departure Dr",
    irr: "22.0%",
    moic: "1.24x",
    hold: "22 Months",
    type: "Industrial",
    size: "22,535 SF",
    location: "Raleigh, NC",
    strategy: "Value-Add Industrial | Sale-Leaseback",
    vintage: "2022", // TODO: confirm vintage
  },
  {
    name: "H6S",
    address: "4270 State Hwy 6 S",
    irr: "36.3%",
    moic: "1.80x",
    hold: "22 Months",
    type: "Commercial Land",
    size: "3.76 ac",
    location: "College Station, TX",
    strategy: "Land Banking | Entitlement",
    vintage: "2021", // TODO: confirm vintage
  },
  {
    name: "Gray Fox",
    address: "2740 Gray Fox Rd",
    irr: "40.3%",
    moic: "1.53x",
    hold: "15 Months",
    type: "Flex Industrial",
    size: "20,000 SF",
    location: "Monroe, NC",
    strategy: "Opportunistic Flip | Market Timing",
    vintage: "2022", // TODO: confirm vintage
  },
  {
    name: "Columbia",
    address: "2301 Maguire Blvd",
    irr: "24.8%",
    moic: "1.72x",
    hold: "32 Months",
    type: "Office",
    size: "36,833 SF",
    location: "Columbia, MO",
    strategy: "Value-Add Office | Lease-Up",
    vintage: "2021", // TODO: confirm vintage
  },
  {
    name: "Peachtree",
    irr: "41.1%",
    moic: "1.89x",
    hold: "59 Months+",
    type: "Mixed-Use",
    size: "",
    location: "Atlanta, GA",
    strategy: "Deep Value-Add | Recapitalization",
    vintage: "2019", // TODO: confirm vintage
  },
];

interface CurrentHolding {
  name: string;
  address: string;
  acquired: string;
  details: string[];
}

const currentHoldings: CurrentHolding[] = [
  {
    name: "Shiloh Avenue",
    address: "1800 Shiloh Avenue, Bryan, TX",
    acquired: "December 2024",
    details: ["7-year sale-leaseback", "Long-term tenant"],
  },
  {
    name: "US Hwy 6",
    address: "32944 US Hwy 6, Spring Valley, IL",
    acquired: "September 2020",
    details: [
      "Recapitalization completed",
      "Full return of investor capital May 2025",
    ],
  },
  {
    name: "Sterling Court",
    address: "8150 Sterling Court, Mentor, OH",
    acquired: "July 2025",
    details: [
      "8.5 years remaining lease term",
      "High-growth commercial corridor",
    ],
  },
  {
    name: "Gateway Drive",
    address: "1015/1055/1138 Gateway Drive, Mooresville, NC",
    acquired: "April 2024",
    details: ["Corporate HQ and manufacturing facility"],
  },
  {
    name: "Greengate Drive",
    address: "2600 Greengate Drive, Greensboro, NC",
    acquired: "March 2024",
    details: ["Publicly traded tenant (TO: RCH)"],
  },
  {
    name: "North Industrial Road",
    address: "901-914 North Industrial Road, Augusta, KS",
    acquired: "October 2024",
    details: ["Publicly traded tenant (NASDAQ: VSEC)"],
  },
];

/* ------------------------------------------------------------------ */
/*  ICONS (inline SVG helpers)                                         */
/* ------------------------------------------------------------------ */

function BuildingIcon({ className }: { className?: string }) {
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
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  1. PAGE HERO                                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-36 sm:pb-28 sm:pt-44">
        {/* Subtle background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Track Record
            </p>
            <h1 className="font-[family-name:var(--font-nunito)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Track Record
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Since 2019, Sago has deployed over $80&nbsp;million across
              industrial and office acquisitions in the Texas Triangle and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. KEY METRICS BAR                                           */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-accent/10 via-warm-white to-accent/5">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
            {[
              { value: "$80M+", label: "Transaction Volume" },
              { value: "1.5M+", label: "Square Feet" },
              { value: "30.9%", label: "Realized Net IRR" },
              { value: "1.57x", label: "Avg Equity Multiple" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl stat-number">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide text-slate sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. REALIZED EXITS                                            */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 sm:mb-16">
            <div className="flex items-center gap-3">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-navy sm:text-4xl">
                Realized Investments
              </h2>
              <span className="inline-flex items-center rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                Exits
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
              Sago has exited six investments totaling over $30&nbsp;million,
              held for an average of approximately three&nbsp;years.
            </p>
          </div>

          {/* Exit deal cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realizedExits.map((deal) => (
              <article
                key={deal.name}
                className="group overflow-hidden rounded-xl border border-warm-gray bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-navy/5"
              >
                {/* Card header */}
                <div className="bg-navy px-6 py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-[family-name:var(--font-nunito)] text-lg font-semibold text-white">
                      {deal.name}
                    </h3>
                    <span className="text-xs font-medium text-white/40">
                      V{deal.vintage}
                    </span>
                  </div>
                  {deal.address && (
                    <p className="mt-1 text-sm text-white/60">{deal.address}</p>
                  )}
                  <p className="mt-2 text-xs font-medium tracking-wide text-accent">
                    {deal.strategy}
                  </p>
                </div>

                {/* Card body */}
                <div className="px-6 py-6">
                  {/* IRR hero number */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate/70">
                      Net IRR
                    </p>
                    <p className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-accent">
                      {deal.irr}
                    </p>
                  </div>

                  {/* Metrics table */}
                  <div className="space-y-3 border-t border-warm-gray pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate">MOIC</span>
                      <span className="text-sm font-semibold text-navy">
                        {deal.moic}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate">Hold Period</span>
                      <span className="text-sm font-semibold text-navy">
                        {deal.hold}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate">Property Type</span>
                      <span className="text-sm font-semibold text-navy">
                        {deal.type}
                      </span>
                    </div>
                    {deal.size && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate">Size</span>
                        <span className="text-sm font-semibold text-navy">
                          {deal.size}
                        </span>
                      </div>
                    )}
                    {deal.location && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate">Location</span>
                        <span className="text-sm font-semibold text-navy">
                          {deal.location}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. CURRENT HOLDINGS                                          */}
      {/* ============================================================ */}
      <section className="bg-warm-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 sm:mb-16">
            <div className="flex items-center gap-3">
              <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-navy sm:text-4xl">
                Current Holdings
              </h2>
              <span className="inline-flex items-center rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                Active
              </span>
            </div>
          </div>

          {/* Holdings grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentHoldings.map((holding) => (
              <article
                key={holding.name}
                className="group overflow-hidden rounded-xl border border-warm-gray bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-navy/5"
              >
                {/* Placeholder image area */}
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-warm-gray to-warm-white">
                  <BuildingIcon className="h-12 w-12 text-slate/30" />
                  <div className="absolute bottom-3 left-4">
                    <span className="inline-flex items-center rounded bg-navy/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      Active
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 py-5">
                  <h3 className="font-[family-name:var(--font-nunito)] text-lg font-semibold text-navy">
                    {holding.name}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 text-sm text-slate">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{holding.address}</span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate">
                    <CalendarIcon className="h-4 w-4 shrink-0 text-accent" />
                    <span>Acquired {holding.acquired}</span>
                  </div>

                  {/* Key details */}
                  <ul className="mt-4 space-y-2 border-t border-warm-gray pt-4">
                    {holding.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-navy/80"
                      >
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. CTA                                                       */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-accent via-accent-light to-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row lg:px-8 lg:py-14">
          <p className="max-w-lg text-center font-[family-name:var(--font-nunito)] text-xl font-semibold text-navy sm:text-left sm:text-2xl">
            Seeking co-investment partners for our next acquisition.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-dark hover:shadow-lg hover:shadow-navy/30"
          >
            Start the Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
