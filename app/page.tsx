import Link from "next/link";
import StrategyCard from "@/components/StrategyCard";
import { strategies } from "./data";

export default function Home() {
  const liveStrategies = strategies.filter((s) => s.status === "live");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-gold/[0.02] blur-3xl" />
        </div>
        {/* Fine grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 border border-brand-gold/20 rounded-full text-sm text-brand-gold-light font-light tracking-wide mb-8">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Now accepting investments
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Invest Beyond
              <br />
              <span className="text-gold-gradient">Conventional Limits</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl font-light">
              XYZ Specialized Investment Funds combine the tax efficiency of
              mutual funds with advanced long-short strategies — crafted for
              investors who seek absolute returns across market cycles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/strategies"
                className="px-8 py-3.5 bg-gold-gradient text-brand-navy font-semibold rounded-lg hover:opacity-90 transition-opacity text-base tracking-wide"
              >
                Explore Strategies
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 text-brand-gold-light font-medium rounded-lg transition-colors text-base border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/5 tracking-wide"
              >
                What is SIF?
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      </section>

      {/* Value Props */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Long-Short Strategies",
                desc: "Profit potential in both rising and falling markets with up to 25% short exposure",
              },
              {
                title: "MF Tax Benefits",
                desc: "Enjoy mutual fund taxation — 12.5% LTCG on equity strategies beyond ₹1.25L",
              },
              {
                title: "Daily NAV Transparency",
                desc: "Full transparency with daily NAV disclosure, unlike PMS or AIFs",
              },
              {
                title: "SEBI Regulated",
                desc: "Governed under SEBI Mutual Fund regulations with institutional-grade compliance",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="relative bg-brand-navy border border-gold-subtle rounded-xl p-6 hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="text-brand-gold text-2xl font-display font-bold mb-3 opacity-30">
                  0{i + 1}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Strategies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Investment Strategies
              </p>
              <h2 className="text-3xl font-display font-bold text-white">
                Our Strategies
              </h2>
            </div>
            <Link
              href="/strategies"
              className="hidden sm:inline-flex text-sm font-medium text-brand-gold hover:text-brand-gold-light transition-colors tracking-wide"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStrategies.map((s) => (
              <StrategyCard key={s.slug} strategy={s} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-brand-navy-light border-t border-b border-gold-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Getting Started
            </p>
            <h2 className="text-3xl font-display font-bold text-white">
              How SIF Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Check Eligibility",
                desc: "Ensure you meet the ₹10 lakh minimum investment threshold and have completed KYC verification.",
              },
              {
                step: "02",
                title: "Choose a Strategy",
                desc: "Browse equity, debt, or hybrid long-short strategies. Review the Investment Strategy Information Document.",
              },
              {
                step: "03",
                title: "Invest & Track",
                desc: "Invest online or through your relationship manager. Track daily NAV, holdings, and performance.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-gradient text-brand-navy text-xl font-bold flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-brand-navy-light border border-gold-subtle rounded-2xl p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Ready to go beyond traditional investments?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light">
                Explore XYZ SIF strategies designed for absolute returns across
                market cycles.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/strategies"
                  className="px-8 py-3.5 bg-gold-gradient text-brand-navy font-semibold rounded-lg hover:opacity-90 transition-opacity tracking-wide"
                >
                  Explore Strategies
                </Link>
                <Link
                  href="/compare"
                  className="px-8 py-3.5 text-brand-gold-light font-medium rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all tracking-wide"
                >
                  Compare SIF vs MF vs PMS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
