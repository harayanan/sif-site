import { comparisonData } from "@/app/data";

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
        Comparison
      </p>
      <h1 className="text-3xl font-display font-bold text-white mb-2">
        SIF vs Others
      </h1>
      <p className="text-gray-500 mb-12 max-w-2xl font-light">
        Compare Specialized Investment Funds with Mutual Funds, Portfolio
        Management Services, and Alternative Investment Funds.
      </p>

      {/* Table */}
      <div className="overflow-x-auto mb-14">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {comparisonData.headers.map((h, i) => (
                <th
                  key={h}
                  className={`px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold ${
                    i === 1
                      ? "bg-brand-gold/10 text-brand-gold border-b-2 border-brand-gold/30"
                      : "bg-brand-navy-light text-gray-400 border-b border-gold-subtle"
                  } ${i === 0 ? "rounded-tl-xl" : ""} ${
                    i === comparisonData.headers.length - 1 ? "rounded-tr-xl" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-gold-subtle hover:bg-brand-navy-light/50 transition-colors">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-6 py-4 font-light ${
                      ci === 0
                        ? "font-medium text-gray-300"
                        : ci === 1
                        ? "font-semibold text-white bg-brand-gold/[0.03]"
                        : "text-gray-500"
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
      <div className="bg-brand-navy-light border border-gold-subtle rounded-2xl p-10 sm:p-12">
        <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-6">
          Why Choose SIF?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-3xl font-display font-bold text-gold-gradient mb-2">
              ₹10L
            </p>
            <p className="text-sm text-gray-500 font-light">
              Accessible entry vs ₹50L for PMS and ₹1Cr for AIFs
            </p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-gold-gradient mb-2">
              MF Tax
            </p>
            <p className="text-sm text-gray-500 font-light">
              Same tax-efficient structure as mutual funds
            </p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-gold-gradient mb-2">
              Daily NAV
            </p>
            <p className="text-sm text-gray-500 font-light">
              Full transparency with daily valuation unlike PMS/AIF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
