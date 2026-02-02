"use client";

import { useState } from "react";
import { faqs } from "@/app/data";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
        Support
      </p>
      <h1 className="text-3xl font-display font-bold text-white mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 mb-10 font-light">
        Everything you need to know about XYZ Specialized Investment Funds.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                isOpen
                  ? "border-brand-gold/30 bg-brand-navy-light"
                  : "border-gold-subtle hover:border-brand-gold/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white text-sm pr-4 tracking-wide">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
