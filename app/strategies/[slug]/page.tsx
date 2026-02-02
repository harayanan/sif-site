import { strategies } from "@/app/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return strategies.map((s) => ({ slug: s.slug }));
}

const riskColors: Record<string, string> = {
  Moderate: "text-brand-gold border-brand-gold/30",
  "Moderately High": "text-amber-400 border-amber-400/30",
  High: "text-orange-400 border-orange-400/30",
  "Very High": "text-brand-red border-brand-red/30",
};

export default function StrategyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const strategy = strategies.find((s) => s.slug === params.slug);
  if (!strategy) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10 font-light">
        <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
        <span className="text-gray-700">/</span>
        <Link href="/strategies" className="hover:text-brand-gold transition-colors">Strategies</Link>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400">{strategy.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full border border-brand-gold/30 text-brand-gold">
            {strategy.category}
          </span>
          <span className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full border ${riskColors[strategy.riskLevel]}`}>
            {strategy.riskLevel} Risk
          </span>
          {strategy.status === "live" ? (
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
              Live
            </span>
          ) : (
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full bg-gray-500/10 text-gray-500 border border-gray-500/20">
              Coming Soon
            </span>
          )}
        </div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">
          {strategy.name}
        </h1>
        <p className="text-lg text-gray-400 font-light">{strategy.tagline}</p>
      </div>

      {/* Description */}
      <div className="bg-brand-navy-light border border-blue-subtle rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-white mb-2 tracking-wide text-sm uppercase">
          Strategy Overview
        </h2>
        <p className="text-gray-400 leading-relaxed font-light">
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
          <div key={stat.label} className="bg-brand-navy-light border border-blue-subtle rounded-xl p-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">{stat.label}</p>
            <p className="font-semibold text-white text-sm">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Asset Allocation */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.15em] mb-4">
          Asset Allocation
        </h2>
        <div className="bg-brand-navy-light border border-blue-subtle rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blue-subtle">
                <th className="text-left px-6 py-3.5 font-semibold text-gray-400 text-xs uppercase tracking-wider">Asset Class</th>
                <th className="text-right px-6 py-3.5 font-semibold text-gray-400 text-xs uppercase tracking-wider">Range</th>
              </tr>
            </thead>
            <tbody>
              {strategy.assetAllocation.map((row, i) => (
                <tr key={i} className="border-b border-blue-subtle last:border-0">
                  <td className="px-6 py-3.5 text-gray-300 font-light">{row.label}</td>
                  <td className="px-6 py-3.5 text-right font-semibold text-white">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.15em] mb-4">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strategy.keyFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 bg-brand-navy-light border border-blue-subtle rounded-lg p-4">
              <span className="w-5 h-5 rounded-full bg-brand-red text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                ✓
              </span>
              <span className="text-sm text-gray-300 font-light">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        {strategy.status === "live" ? (
          <button className="px-8 py-3.5 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors tracking-wide">
            Invest Now
          </button>
        ) : (
          <button className="px-8 py-3.5 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors tracking-wide">
            Notify Me When Live
          </button>
        )}
        <button className="px-8 py-3.5 border border-brand-gold/20 text-brand-gold-light font-medium rounded-lg hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all tracking-wide">
          Download ISID
        </button>
      </div>
    </div>
  );
}
