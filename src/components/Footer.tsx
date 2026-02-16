import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Strategy", href: "/strategy" },
  { label: "Track Record", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-white.svg"
                alt="Sago"
                width={160}
                height={48}
                className="h-12 w-auto opacity-70 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Industrial &amp; Office&ensp;|&ensp;Texas Triangle &amp; Beyond
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <div className="mt-6 space-y-4">
              <address className="text-sm leading-relaxed text-white/70 not-italic">
                4501 Mills Park Circle, Suite 200
                <br />
                College Station, Texas 77845
              </address>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    Acquisitions
                  </span>
                  <a
                    href="mailto:acquisitions@sagocap.com"
                    className="block text-sm text-white/70 transition-colors duration-200 hover:text-accent"
                  >
                    acquisitions@sagocap.com
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    Investor Relations
                  </span>
                  <a
                    href="mailto:ir@sagocap.com"
                    className="block text-sm text-white/70 transition-colors duration-200 hover:text-accent"
                  >
                    ir@sagocap.com
                  </a>
                </div>
                <a
                  href="tel:+18888503708"
                  className="block text-sm text-white/70 transition-colors duration-200 hover:text-accent"
                >
                  (888) 850-3708
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {[
                  { label: "Instagram", icon: <InstagramIcon />, href: "#" },
                  { label: "Facebook", icon: <FacebookIcon />, href: "#" },
                  { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
                  { label: "X", icon: <XIcon />, href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-colors duration-200 hover:text-accent"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Member Logos */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
            Proud Members
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["CCIM", "SIOR", "NAIOP"].map((org) => (
              <span
                key={org}
                className="text-sm font-medium tracking-widest text-white/25"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>&copy; 2026 Sago Capital, LLC</p>
          <Link
            href="/terms"
            className="transition-colors duration-200 hover:text-accent"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
