import Link from "next/link";
import { Strategy } from "@/app/data";

const categoryIcons: Record<string, string> = {
  equity: "📈",
  debt: "🏦",
  hybrid: "⚖️",
};

export default function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-sm hover:shadow-lg">
      {/* Navy top section */}
      <div className="bg-brand-navy p-6 text-center relative overflow-hidden">
        <div className="absolute top-3 right-3 w-2 h-2 bg-brand-gold/20 rotate-45" />
        <div className="absolute bottom-3 left-3 w-2 h-2 bg-brand-gold/20 rotate-45" />
        <div className="text-3xl mb-3">{categoryIcons[strategy.category]}</div>
        <h3 className="font-serif text-white text-lg leading-snug mb-1">
          {strategy.name.replace("XYZ SIF ", "")}
        </h3>
        <p className="text-brand-gold/60 text-xs uppercase tracking-[0.15em]">
          {strategy.category} Strategy
        </p>
      </div>

      {/* Gold divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* Cream bottom section */}
      <div className="bg-brand-cream p-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-5 font-light">
          {strategy.tagline}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Min. Investment</p>
            <p className="text-sm font-semibold text-brand-navy">{strategy.minInvestment}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Risk Level</p>
            <p className="text-sm font-semibold text-brand-navy">{strategy.riskLevel}</p>
          </div>
        </div>

        <Link
          href={`/strategies/${strategy.slug}`}
          className="group/btn flex items-center gap-1.5 text-brand-red font-medium text-sm hover:text-brand-red-light transition-colors"
        >
          {strategy.status === "live" ? "Learn More" : "Notify Me"}
          <span className="group-hover/btn:translate-x-0.5 transition-transform">›</span>
        </Link>
      </div>
    </div>
  );
}
