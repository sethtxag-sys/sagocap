"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Strategy", href: "#strategy" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
];

const CTA_LINK: NavLink = { label: "Contact", href: "#contact" };

function SagoLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central stem */}
      <line
        x1="16"
        y1="30"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Left fronds */}
      <path
        d="M16 10 C12 8, 6 6, 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 14 C11 12, 5 11, 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 18 C11 17, 5 17, 2 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right fronds */}
      <path
        d="M16 10 C20 8, 26 6, 29 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 14 C21 12, 27 11, 30 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 18 C21 17, 27 17, 30 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMobileMenu();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMobileMenu]
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy shadow-lg shadow-navy-dark/20"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Sago Capital - Home"
            >
              <span className="text-white transition-colors duration-300 group-hover:text-gold-light">
                <SagoLogo />
              </span>
              <span className="text-lg font-bold tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-gold-light">
                SAGO
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CTA_LINK.href}
                onClick={(e) => handleNavClick(e, CTA_LINK.href)}
                className="ml-4 inline-block rounded bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-md hover:shadow-gold/20"
              >
                {CTA_LINK.label}
              </a>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex w-6 flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "w-6 translate-y-2 rotate-45"
                      : "w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "w-6 -translate-y-2 -rotate-45"
                      : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-navy-dark transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={`flex h-full flex-col items-center justify-center gap-8 transition-transform duration-300 ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-12"
          }`}
        >
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-light tracking-widest text-white/80 transition-colors duration-300 hover:text-white"
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${100 + index * 50}ms`
                  : "0ms",
              }}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CTA_LINK.href}
            onClick={(e) => handleNavClick(e, CTA_LINK.href)}
            className="mt-4 rounded bg-gold px-10 py-3.5 text-lg font-semibold tracking-widest text-navy transition-all duration-300 hover:bg-gold-light"
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${100 + NAV_LINKS.length * 50}ms`
                : "0ms",
            }}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            {CTA_LINK.label}
          </a>
        </div>
      </div>
    </>
  );
}
