"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/strategies", label: "Strategies" },
  { href: "/compare", label: "SIF vs Others" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-navy border-b border-brand-gold/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-red rounded flex items-center justify-center border border-brand-gold/30">
                <span className="text-white font-bold text-sm">XYZ</span>
              </div>
              <div className="w-[1px] h-7 bg-brand-gold/30" />
              <span className="font-serif text-brand-gold text-xl tracking-wide">
                SIF
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] text-brand-gold-light/70 hover:text-brand-gold transition-colors tracking-[0.05em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/strategies"
              className="hidden sm:inline-flex px-6 py-2.5 bg-brand-red text-white text-sm font-medium rounded border border-brand-gold/30 hover:bg-brand-red-light transition-colors tracking-wide"
            >
              Explore Our Funds
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-brand-gold/60"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-brand-gold/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-brand-gold-light/70 hover:text-brand-gold tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/strategies"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 mx-4 px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded text-center border border-brand-gold/30"
            >
              Explore Our Funds
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
