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
    <header className="bg-brand-navy/95 backdrop-blur-md border-b border-blue-subtle sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <div className="leading-tight">
              <span className="text-brand-gold font-display font-bold text-lg tracking-wide">
                XYZ
              </span>
              <span className="text-gray-400 font-light text-lg ml-1.5 tracking-wider">
                SIF
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-light text-gray-400 hover:text-brand-gold transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/strategies"
              className="hidden sm:inline-flex px-6 py-2 bg-brand-red text-white text-sm font-semibold rounded tracking-wide hover:bg-brand-red-dark transition-colors"
            >
              Invest Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-400"
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

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-subtle">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-light text-gray-400 hover:text-brand-gold tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/strategies"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 mx-4 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded text-center hover:bg-brand-red-dark"
            >
              Invest Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
