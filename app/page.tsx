import Link from "next/link";
import StrategyCard from "@/components/StrategyCard";
import { strategies } from "./data";

export default function Home() {
  const liveStrategies = strategies.filter((s) => s.status === "live");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-hdfc-navy via-hdfc-blue-dark to-hdfc-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-hdfc-red blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-hdfc-gold blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm text-white/80 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now accepting investments
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Invest Beyond{" "}
              <span className="text-hdfc-red">Conventional</span> Limits
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              HDFC Specialized Investment Funds combine the tax efficiency of
              mutual funds with advanced long-short strategies — designed for
              investors who seek absolute returns across market cycles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/strategies"
                className="px-8 py-3.5 bg-hdfc-red text-white font-semibold rounded-lg hover:bg-hdfc-red-dark transition-colors text-base"
              >
                Explore Strategies
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-base border border-white/20"
              >
                What is SIF?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-hdfc-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Long-Short Strategies",
                desc: "Profit potential in both rising and falling markets with up to 25% short exposure",
              },
              {
                icon: "🛡️",
                title: "MF Tax Benefits",
                desc: "Enjoy mutual fund taxation — 12.5% LTCG on equity strategies beyond ₹1.25L",
              },
              {
                icon: "📊",
                title: "Daily NAV Transparency",
                desc: "Full transparency with daily NAV disclosure, unlike PMS or AIFs",
              },
              {
                icon: "🏛️",
                title: "SEBI Regulated",
                desc: "Governed under SEBI Mutual Fund regulations with institutional-grade compliance",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-hdfc-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-hdfc-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-hdfc-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Strategies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-hdfc-navy">
                Our Strategies
              </h2>
              <p className="text-hdfc-gray-500 mt-1">
                SEBI-approved investment strategies for sophisticated investors
              </p>
            </div>
            <Link
              href="/strategies"
              className="hidden sm:inline-flex text-sm font-semibold text-hdfc-red hover:underline"
            >
              View all strategies →
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
      <section className="py-16 bg-hdfc-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hdfc-navy text-center mb-12">
            How SIF Works
          </h2>
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
                desc: "Browse equity, debt, or hybrid long-short strategies. Review the Investment Strategy Information Document (ISID).",
              },
              {
                step: "03",
                title: "Invest & Track",
                desc: "Invest online or through your distributor. Track daily NAV, portfolio holdings, and performance updates.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-hdfc-red text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-hdfc-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-hdfc-gray-500 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-hdfc-navy to-hdfc-blue rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to go beyond traditional mutual funds?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Explore HDFC SIF strategies designed for absolute returns across
              market cycles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/strategies"
                className="px-8 py-3 bg-hdfc-red text-white font-semibold rounded-lg hover:bg-hdfc-red-dark transition-colors"
              >
                Explore Strategies
              </Link>
              <Link
                href="/compare"
                className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Compare SIF vs MF vs PMS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
