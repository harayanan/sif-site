import { strategies } from "@/app/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return strategies.map((s) => ({ slug: s.slug }));
}

export default function StrategyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const strategy = strategies.find((s) => s.slug === params.slug);
  if (!strategy) notFound();

  const riskColors: Record<string, string> = {
    Moderate: "bg-yellow-100 text-yellow-800",
    "Moderately High": "bg-orange-100 text-orange-800",
    High: "bg-red-100 text-red-700",
    "Very High": "bg-red-200 text-red-800",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-hdfc-gray-400 mb-8">
        <Link href="/" className="hover:text-hdfc-red">Home</Link>
        <span>/</span>
        <Link href="/strategies" className="hover:text-hdfc-red">Strategies</Link>
        <span>/</span>
        <span className="text-hdfc-gray-600">{strategy.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-hdfc-blue text-white capitalize">
            {strategy.category}
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${riskColors[strategy.riskLevel]}`}
          >
            {strategy.riskLevel} Risk
          </span>
          {strategy.status === "live" ? (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Live
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-hdfc-gray-100 text-hdfc-gray-500">
              Coming Soon
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-hdfc-navy mb-2">
          {strategy.name}
        </h1>
        <p className="text-lg text-hdfc-gray-500">{strategy.tagline}</p>
      </div>

      {/* Description */}
      <div className="bg-hdfc-gray-50 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-hdfc-navy mb-2">Strategy Overview</h2>
        <p className="text-hdfc-gray-600 leading-relaxed">
          {strategy.description}
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Min. Investment", value: strategy.minInvestment },
          { label: "Max Short Exposure", value: strategy.maxShortExposure },
          { label: "Benchmark", value: strategy.benchmark },
          { label: "Risk Level", value: strategy.riskLevel },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-hdfc-gray-200 rounded-xl p-4"
          >
            <p className="text-xs text-hdfc-gray-400 mb-1">{stat.label}</p>
            <p className="font-bold text-hdfc-navy text-sm">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Asset Allocation */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-hdfc-navy mb-4">
          Asset Allocation
        </h2>
        <div className="bg-white border border-hdfc-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-hdfc-gray-50 border-b border-hdfc-gray-200">
                <th className="text-left px-6 py-3 font-semibold text-hdfc-gray-600">
                  Asset Class
                </th>
                <th className="text-right px-6 py-3 font-semibold text-hdfc-gray-600">
                  Allocation Range
                </th>
              </tr>
            </thead>
            <tbody>
              {strategy.assetAllocation.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-hdfc-gray-100 last:border-0"
                >
                  <td className="px-6 py-3 text-hdfc-gray-700">{row.label}</td>
                  <td className="px-6 py-3 text-right font-semibold text-hdfc-navy">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-hdfc-navy mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strategy.keyFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-hdfc-gray-50 rounded-lg p-4"
            >
              <span className="w-5 h-5 rounded-full bg-hdfc-red text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-sm text-hdfc-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        {strategy.status === "live" ? (
          <button className="px-8 py-3 bg-hdfc-red text-white font-semibold rounded-lg hover:bg-hdfc-red-dark transition-colors">
            Invest Now
          </button>
        ) : (
          <button className="px-8 py-3 bg-hdfc-blue text-white font-semibold rounded-lg hover:bg-hdfc-blue-dark transition-colors">
            Notify Me When Live
          </button>
        )}
        <button className="px-8 py-3 border border-hdfc-gray-300 text-hdfc-gray-600 font-semibold rounded-lg hover:bg-hdfc-gray-50 transition-colors">
          Download ISID
        </button>
      </div>
    </div>
  );
}
