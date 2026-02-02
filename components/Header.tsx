"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/strategies", label: "SIF Strategies" },
  { href: "/compare", label: "SIF vs Others" },
  { href: "/about", label: "About SIF" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-hdfc-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-hdfc-red rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div className="leading-tight">
              <span className="text-hdfc-blue font-bold text-lg tracking-tight">
                HDFC
              </span>
              <span className="text-hdfc-red font-bold text-lg ml-1">SIF</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-hdfc-gray-600 hover:text-hdfc-red transition-colors rounded-lg hover:bg-hdfc-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/strategies"
              className="hidden sm:inline-flex px-5 py-2 bg-hdfc-red text-white text-sm font-semibold rounded-lg hover:bg-hdfc-red-dark transition-colors"
            >
              Invest Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-hdfc-gray-600"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-hdfc-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-hdfc-gray-600 hover:text-hdfc-red hover:bg-hdfc-gray-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/strategies"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 mx-4 px-5 py-2.5 bg-hdfc-red text-white text-sm font-semibold rounded-lg text-center hover:bg-hdfc-red-dark"
            >
              Invest Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
