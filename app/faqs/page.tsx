"use client";

import { useState } from "react";
import { faqs } from "@/app/data";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-hdfc-navy mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-hdfc-gray-500 mb-10">
        Everything you need to know about HDFC Specialized Investment Funds.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border border-hdfc-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-hdfc-gray-50 transition-colors"
              >
                <span className="font-semibold text-hdfc-navy text-sm pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-hdfc-gray-400 flex-shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-hdfc-gray-600 leading-relaxed">
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
