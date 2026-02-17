import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Sago Capital",
  description:
    "Contact Sago Capital for acquisition inquiries, investor relations, or brokerage services. Headquartered in College Station, Texas.",
};

const SUBJECT_OPTIONS = [
  "Investment / Co-Investment Inquiry",
  "Acquisition Opportunity",
  "Investor Relations",
  "Brokerage Services",
  "Development",
  "General Inquiry",
];

export default function ContactPage() {
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
              Contact
            </p>

            {/* Heading */}
            <h1 className="mt-6 font-[family-name:var(--font-nunito)] text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start the Conversation
            </h1>

            {/* Subtitle */}
            <p className="mt-6 font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/70 sm:text-xl">
              Whether you&apos;re exploring co-investment opportunities,
              submitting an acquisition lead, or need brokerage services —
              you&apos;ll speak directly with a principal.
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

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            {/* LEFT COLUMN - Contact Details */}
            <div>
              <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Reach Out
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
                Talk to a Principal
              </h2>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/40" />
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="h-px w-8 bg-accent/40" />
              </div>

              {/* Address */}
              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-navy/60"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                      Office Address
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
                      4501 Mills Park Circle, Suite 200
                      <br />
                      College Station, Texas 77845
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-navy/60"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                      Business Hours
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-inter)] text-base text-slate">
                      Monday &ndash; Friday, 8am &ndash; 5pm
                    </p>
                  </div>
                </div>

                {/* Email - Acquisitions */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-navy/60"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                      Acquisitions
                    </p>
                    <a
                      href="mailto:acquisitions@sagocap.com"
                      className="mt-1 inline-block font-[family-name:var(--font-inter)] text-base text-slate transition-colors duration-200 hover:text-accent"
                    >
                      acquisitions@sagocap.com
                    </a>
                  </div>
                </div>

                {/* Email - Investor Relations */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-navy/60"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                      Investor Relations
                    </p>
                    <a
                      href="mailto:ir@sagocap.com"
                      className="mt-1 inline-block font-[family-name:var(--font-inter)] text-base text-slate transition-colors duration-200 hover:text-accent"
                    >
                      ir@sagocap.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-navy/60"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                      Phone
                    </p>
                    <a
                      href="tel:8888503708"
                      className="mt-1 inline-block font-[family-name:var(--font-inter)] text-base text-slate transition-colors duration-200 hover:text-accent"
                    >
                      888-850-3708
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-navy">
                  Follow Us
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/sagocapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/50 transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    aria-label="Follow Sago Capital on Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4.5 w-4.5"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/sagocapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/50 transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    aria-label="Follow Sago Capital on LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4.5 w-4.5"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/sagocapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/50 transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    aria-label="Follow Sago Capital on Facebook"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4.5 w-4.5"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/sagocapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/50 transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    aria-label="Follow Sago Capital on X"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div>
              <div className="rounded-xl border border-navy/5 bg-warm-white p-8 shadow-sm sm:p-10">
                <h3 className="font-[family-name:var(--font-nunito)] text-2xl font-semibold text-navy">
                  Schedule a Call
                </h3>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-sm text-slate">
                  Tell us about your investment goals and a principal will
                  respond within one business day.
                </p>

                <form action="#" method="POST" className="mt-8 space-y-6">
                  {/* First Name + Last Name */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        required
                        className="mt-2 block w-full rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy placeholder-slate/40 shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        required
                        className="mt-2 block w-full rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy placeholder-slate/40 shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy placeholder-slate/40 shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="mt-2 block w-full rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy placeholder-slate/40 shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="mt-2 block w-full appearance-none rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="" disabled selected>
                        Select a subject
                      </option>
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-[family-name:var(--font-inter)] text-sm font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 block w-full resize-y rounded-lg border border-slate/30 bg-white px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-navy placeholder-slate/40 shadow-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-accent px-8 py-3.5 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP PLACEHOLDER ===== */}
      <section className="bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          {/* Map Placeholder */}
          <div className="flex h-80 w-full items-center justify-center rounded-xl border border-navy/5 bg-slate/10">
            <div className="text-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-10 w-10 text-navy/20"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-lg font-medium text-navy/40">
                Map &ndash; College Station, Texas
              </p>
            </div>
          </div>

          {/* Location Description */}
          <p className="mt-8 text-center font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
            Located in the heart of the Brazos Valley, home to Texas A&amp;M
            University
          </p>
        </div>
      </section>

      {/* ===== PARTNER PORTAL CTA ===== */}
      <section className="border-t border-navy/5 bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Investors
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-nunito)] text-2xl font-semibold text-navy sm:text-3xl">
            Existing Investors
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-slate">
            Access quarterly reports, K-1s, distribution history, and asset
            performance updates through our secure investor portal.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded bg-navy px-8 py-4 font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
            >
              Investor Portal
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
