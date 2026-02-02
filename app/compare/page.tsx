import { comparisonData } from "@/app/data";

export default function ComparePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-14 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">
            SIF vs <em className="italic text-brand-gold">Others</em>
          </h1>
          <p className="text-gray-400 font-light max-w-lg mx-auto">
            How Specialized Investment Funds compare with Mutual Funds,
            PMS, and Alternative Investment Funds.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-5" />
        </div>
      </section>

      {/* Table — cream */}
      <section className="bg-cream-pattern py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-brand-gold/10">
              <thead>
                <tr>
                  {comparisonData.headers.map((h, i) => (
                    <th
                      key={h}
                      className={`px-5 py-4 text-left text-xs uppercase tracking-wider font-medium ${
                        i === 1
                          ? "bg-brand-navy text-brand-gold"
                          : "bg-brand-cream-dark text-gray-500"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-brand-gold/5 last:border-0">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 ${
                          ci === 0
                            ? "font-medium text-brand-navy"
                            : ci === 1
                            ? "font-semibold text-brand-navy bg-brand-navy/[0.03]"
                            : "text-gray-500 font-light"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key takeaway */}
          <div className="bg-brand-navy rounded-xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 w-2 h-2 bg-brand-gold/15 rotate-45" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-brand-gold/15 rotate-45" />
            <h3 className="font-serif text-2xl text-white mb-8">
              Why Choose <em className="italic text-brand-gold">SIF?</em>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "₹10L", desc: "Accessible entry vs ₹50L for PMS" },
                { value: "MF Tax", desc: "Same tax-efficient structure" },
                { value: "Daily NAV", desc: "Full transparency unlike PMS/AIF" },
              ].map((item) => (
                <div key={item.value}>
                  <p className="font-serif text-3xl text-brand-gold mb-2">{item.value}</p>
                  <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
