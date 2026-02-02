import Link from "next/link";
import { Strategy } from "@/app/data";

const riskColors: Record<string, string> = {
  Moderate: "bg-yellow-100 text-yellow-800",
  "Moderately High": "bg-orange-100 text-orange-800",
  High: "bg-red-100 text-red-700",
  "Very High": "bg-red-200 text-red-800",
};

const categoryColors: Record<string, string> = {
  equity: "bg-hdfc-blue text-white",
  debt: "bg-hdfc-gold text-hdfc-navy",
  hybrid: "bg-emerald-600 text-white",
};

export default function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="bg-white rounded-xl border border-hdfc-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="p-6">
        {/* Top badges */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize ${categoryColors[strategy.category]}`}
          >
            {strategy.category}
          </span>
          {strategy.status === "live" ? (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Live
            </span>
          ) : (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-hdfc-gray-100 text-hdfc-gray-500">
              Coming Soon
            </span>
          )}
        </div>

        {/* Name & tagline */}
        <h3 className="text-lg font-bold text-hdfc-navy leading-tight mb-1">
          {strategy.name}
        </h3>
        <p className="text-sm text-hdfc-gray-500 mb-4">{strategy.tagline}</p>

        {/* Key stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-hdfc-gray-50 rounded-lg p-3">
            <p className="text-xs text-hdfc-gray-400 mb-0.5">Min. Investment</p>
            <p className="text-sm font-semibold text-hdfc-navy">
              {strategy.minInvestment}
            </p>
          </div>
          <div className="bg-hdfc-gray-50 rounded-lg p-3">
            <p className="text-xs text-hdfc-gray-400 mb-0.5">Max Short</p>
            <p className="text-sm font-semibold text-hdfc-navy">
              {strategy.maxShortExposure}
            </p>
          </div>
        </div>

        {/* Risk */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs text-hdfc-gray-400">Risk Level</span>
          <span
            className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${riskColors[strategy.riskLevel]}`}
          >
            {strategy.riskLevel}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/strategies/${strategy.slug}`}
          className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors bg-hdfc-red text-white hover:bg-hdfc-red-dark group-hover:shadow-md"
        >
          {strategy.status === "live" ? "View Strategy" : "Notify Me"}
        </Link>
      </div>
    </div>
  );
}
