import Link from "next/link";
import { Strategy } from "@/app/data";

const categoryIcons: Record<string, string> = {
  equity: "📈",
  debt: "🏦",
  hybrid: "⚖️",
};

export default function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-brand-gold/10 hover:border-brand-gold/25 transition-all duration-300 bg-brand-navy-light">
      {/* Top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="p-6 text-center border-b border-brand-gold/10">
        <div className="text-3xl mb-3">{categoryIcons[strategy.category]}</div>
        <h3 className="font-serif text-white text-lg leading-snug mb-1 group-hover:text-brand-gold-light transition-colors">
          {strategy.name.replace("XYZ SIF ", "")}
        </h3>
        <p className="text-brand-gold/50 text-xs uppercase tracking-[0.15em]">
          {strategy.category} Strategy
        </p>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-400 leading-relaxed mb-5 font-light">
          {strategy.tagline}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-brand-navy/50 rounded-lg p-3 border border-brand-gold/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Min. Investment</p>
            <p className="text-sm font-semibold text-white">{strategy.minInvestment}</p>
          </div>
          <div className="bg-brand-navy/50 rounded-lg p-3 border border-brand-gold/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Risk Level</p>
            <p className="text-sm font-semibold text-white">{strategy.riskLevel}</p>
          </div>
        </div>

        <Link
          href={`/strategies/${strategy.slug}`}
          className="group/btn flex items-center justify-center gap-1.5 text-brand-red-light font-medium text-sm hover:text-brand-gold transition-colors"
        >
          {strategy.status === "live" ? "Learn More" : "Notify Me"}
          <span className="group-hover/btn:translate-x-0.5 transition-transform">›</span>
        </Link>
      </div>
    </div>
  );
}
