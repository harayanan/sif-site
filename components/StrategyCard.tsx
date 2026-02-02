import Link from "next/link";
import { Strategy } from "@/app/data";

const riskColors: Record<string, string> = {
  Moderate: "text-brand-gold",
  "Moderately High": "text-amber-400",
  High: "text-orange-400",
  "Very High": "text-brand-red",
};

const categoryLabels: Record<string, string> = {
  equity: "Equity",
  debt: "Debt",
  hybrid: "Hybrid",
};

export default function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="group relative bg-brand-navy-light border border-blue-subtle rounded-xl overflow-hidden hover:border-brand-blue-light/40 transition-all duration-300">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-brand-blue via-brand-red to-brand-gold" />

      <div className="p-6">
        {/* Top badges */}
        <div className="flex items-center gap-2 mb-5">
          <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full border border-brand-gold/30 text-brand-gold">
            {categoryLabels[strategy.category]}
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

        {/* Name & tagline */}
        <h3 className="text-lg font-semibold text-white leading-snug mb-1.5 group-hover:text-brand-gold-light transition-colors">
          {strategy.name}
        </h3>
        <p className="text-sm text-gray-500 font-light mb-6">
          {strategy.tagline}
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-brand-navy/60 rounded-lg p-3 border border-blue-subtle">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              Min. Investment
            </p>
            <p className="text-sm font-semibold text-white">
              {strategy.minInvestment}
            </p>
          </div>
          <div className="bg-brand-navy/60 rounded-lg p-3 border border-blue-subtle">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              Max Short
            </p>
            <p className="text-sm font-semibold text-white">
              {strategy.maxShortExposure}
            </p>
          </div>
        </div>

        {/* Risk */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">
            Risk Level
          </span>
          <span className={`text-xs font-semibold ${riskColors[strategy.riskLevel]}`}>
            {strategy.riskLevel}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/strategies/${strategy.slug}`}
          className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 bg-brand-red text-white hover:bg-brand-red-dark"
        >
          {strategy.status === "live" ? "View Strategy" : "Notify Me"}
        </Link>
      </div>
    </div>
  );
}
