import { strategies } from "@/app/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return strategies.map((s) => ({ slug: s.slug }));
}

export default function StrategyDetail({ params }: { params: { slug: string } }) {
  const strategy = strategies.find((s) => s.slug === params.slug);
  if (!strategy) notFound();

  return (
    <div className="bg-brand-navy min-h-screen">
      {/* Header */}
      <section className="py-14 relative">
        <div className="gold-line absolute bottom-0 left-0 right-0" />
        <div className="absolute top-4 right-8 w-2 h-2 bg-brand-gold/15 rotate-45" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-light">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/strategies" className="hover:text-brand-gold transition-colors">Strategies</Link>
            <span>/</span>
            <span className="text-brand-gold-light">{strategy.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] rounded border border-brand-gold/25 text-brand-gold">
              {strategy.category}
            </span>
            {strategy.status === "live" ? (
              <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] rounded bg-brand-red/15 text-brand-red-light border border-brand-red/20">
                Live
              </span>
            ) : (
              <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] rounded bg-gray-500/10 text-gray-500 border border-gray-500/20">
                Coming Soon
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-2">{strategy.name}</h1>
          <p className="text-lg text-gray-400 font-light italic">{strategy.tagline}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Min. Investment", value: strategy.minInvestment },
              { label: "Max Short Exposure", value: strategy.maxShortExposure },
              { label: "Benchmark", value: strategy.benchmark },
              { label: "Risk Level", value: strategy.riskLevel },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="font-serif text-lg text-brand-gold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-brand-navy-light py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-xl text-white">Strategy Overview</h2>
            </div>
            <div className="bg-brand-navy rounded-xl border border-brand-gold/10 p-6">
              <p className="text-gray-400 leading-relaxed font-light">{strategy.description}</p>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-xl text-white">Asset Allocation</h2>
            </div>
            <div className="bg-brand-navy rounded-xl border border-brand-gold/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-gold/10">
                    <th className="text-left px-6 py-3.5 font-medium text-brand-gold/70 text-xs uppercase tracking-wider">Asset Class</th>
                    <th className="text-right px-6 py-3.5 font-medium text-brand-gold/70 text-xs uppercase tracking-wider">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {strategy.assetAllocation.map((row, i) => (
                    <tr key={i} className="border-b border-brand-gold/5 last:border-0">
                      <td className="px-6 py-3.5 text-gray-400 font-light">{row.label}</td>
                      <td className="px-6 py-3.5 text-right font-semibold text-white">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-xl text-white">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {strategy.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-brand-navy rounded-lg border border-brand-gold/10 p-4">
                  <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-brand-red text-white font-medium rounded border border-brand-gold/30 hover:bg-brand-red-light transition-colors tracking-wide">
              {strategy.status === "live" ? "Invest Now" : "Notify Me When Live"}
            </button>
            <button className="px-8 py-3.5 text-brand-gold-light font-medium rounded border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all tracking-wide">
              Download ISID
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
