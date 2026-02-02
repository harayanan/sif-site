import { comparisonData } from "@/app/data";

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-hdfc-navy mb-2">
        SIF vs Others
      </h1>
      <p className="text-hdfc-gray-500 mb-10 max-w-2xl">
        Compare Specialized Investment Funds with Mutual Funds, Portfolio
        Management Services, and Alternative Investment Funds.
      </p>

      {/* Desktop table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {comparisonData.headers.map((h, i) => (
                <th
                  key={h}
                  className={`px-6 py-4 text-left font-bold ${
                    i === 0
                      ? "bg-hdfc-gray-50 text-hdfc-gray-600"
                      : i === 1
                      ? "bg-hdfc-red text-white"
                      : "bg-hdfc-gray-50 text-hdfc-gray-600"
                  } ${i === 0 ? "rounded-tl-xl" : ""} ${
                    i === comparisonData.headers.length - 1
                      ? "rounded-tr-xl"
                      : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-hdfc-gray-100 hover:bg-hdfc-gray-50 transition-colors"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-6 py-4 ${
                      ci === 0
                        ? "font-semibold text-hdfc-gray-700"
                        : ci === 1
                        ? "font-semibold text-hdfc-navy bg-red-50/50"
                        : "text-hdfc-gray-600"
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
      <div className="mt-10 bg-gradient-to-r from-hdfc-navy to-hdfc-blue rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-3">Why Choose SIF?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-2xl font-bold text-hdfc-red mb-1">₹10L</p>
            <p className="text-sm text-gray-300">
              Accessible entry vs ₹50L for PMS and ₹1Cr for AIFs
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-hdfc-red mb-1">MF Tax</p>
            <p className="text-sm text-gray-300">
              Same tax-efficient structure as mutual funds
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-hdfc-red mb-1">Daily NAV</p>
            <p className="text-sm text-gray-300">
              Full transparency with daily valuation unlike PMS/AIF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
