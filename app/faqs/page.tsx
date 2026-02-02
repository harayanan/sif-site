"use client";

import { useState } from "react";
import { faqs } from "@/app/data";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-14 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">
            Frequently Asked <em className="italic text-brand-gold">Questions</em>
          </h1>
          <p className="text-gray-400 font-light">
            Everything you need to know about XYZ Specialized Investment Funds.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-5" />
        </div>
      </section>

      {/* FAQ body — cream */}
      <section className="bg-cream-pattern py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl border overflow-hidden transition-colors ${
                    isOpen ? "border-brand-gold/30" : "border-brand-gold/10 hover:border-brand-gold/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-serif text-brand-navy text-[15px] pr-4">
                      {faq.q}
                    </span>
                    <div className={`w-6 h-6 rounded-full border border-brand-gold/30 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-brand-red border-brand-red' : ''}`}>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-white" : "text-brand-gold"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <>
                      <div className="mx-6 h-[1px] bg-brand-gold/10" />
                      <div className="px-6 py-5">
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                          {faq.a}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
