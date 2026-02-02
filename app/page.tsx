import Link from "next/link";
import StrategyCard from "@/components/StrategyCard";
import { strategies } from "./data";

export default function Home() {
  return (
    <>
      {/* Hero — dark navy with gold accents */}
      <section className="relative bg-brand-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-3 h-3 bg-brand-gold/20 rotate-45" />
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-brand-gold/15 rotate-45" />
          <div className="absolute top-1/3 right-[15%] w-[300px] h-[300px] rounded-full border border-brand-gold/[0.06]" />
          <div className="absolute top-1/3 right-[15%] w-[200px] h-[200px] rounded-full border border-brand-gold/[0.04] translate-x-12 translate-y-12" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.15] mb-6">
              SIF: Elevating Wealth
              <br />
              Through Specialized{" "}
              <em className="text-brand-gold italic">Strategies</em>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light max-w-lg">
              Exclusive access to curated investment opportunities for the
              discerning investor.
            </p>
            <Link
              href="/strategies"
              className="inline-flex px-8 py-3.5 bg-brand-red text-white font-medium rounded border border-brand-gold/30 hover:bg-brand-red-light transition-colors tracking-wide"
            >
              Explore Our Funds
            </Link>
          </div>
        </div>
      </section>

      {/* Fund Categories — cream with pattern */}
      <section className="bg-cream-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy mb-3">
              Our <em className="italic text-brand-red">Specialized</em> Fund Categories
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.filter(s => s.status === "live").map((s) => (
              <StrategyCard key={s.slug} strategy={s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/strategies"
              className="inline-flex items-center gap-2 text-brand-red font-medium text-sm hover:text-brand-red-light transition-colors"
            >
              View all strategies
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance / Stats — dark navy */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-2 h-2 bg-brand-gold/15 rotate-45" />
          <div className="absolute bottom-8 right-8 w-3 h-3 bg-brand-gold/10 rotate-45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-white mb-3">
              Designed for <em className="italic text-brand-gold">Absolute Returns</em>
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "₹10L", label: "Minimum Investment", sub: "Accessible vs ₹50L PMS" },
              { value: "25%", label: "Max Short Exposure", sub: "Long-short capability" },
              { value: "Daily", label: "NAV Transparency", sub: "Unlike PMS or AIFs" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl sm:text-5xl text-brand-gold mb-2">{stat.value}</p>
                <p className="text-white font-medium text-sm tracking-wide mb-1">{stat.label}</p>
                <p className="text-gray-500 text-xs font-light">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SIF — cream, split layout inspired by reference */}
      <section className="bg-cream-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — visual placeholder */}
            <div className="bg-brand-navy rounded-xl p-10 text-center relative overflow-hidden min-h-[360px] flex items-center justify-center">
              <div className="absolute top-4 right-4 w-2 h-2 bg-brand-gold/20 rotate-45" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-brand-gold/20 rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-brand-gold/10" />
                <div className="absolute w-28 h-28 rounded-full border border-brand-gold/15" />
                <div className="absolute w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center">
                  <span className="font-serif text-brand-gold text-2xl">SIF</span>
                </div>
              </div>
            </div>

            {/* Right — features with gold icons */}
            <div>
              <h2 className="font-serif text-3xl text-brand-navy mb-10">
                Why Choose <em className="italic text-brand-red">SIF?</em>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: "🤝",
                    title: "Expert Management",
                    desc: "Managed by seasoned fund managers with 10+ years of experience and ₹5,000+ crore AUM track records.",
                  },
                  {
                    icon: "📊",
                    title: "Rigorous Research",
                    desc: "Institutional-grade research combining fundamental analysis with quantitative screening for alpha generation.",
                  },
                  {
                    icon: "🛡️",
                    title: "Risk Mitigation",
                    desc: "Long-short strategies with up to 25% short exposure help manage downside risk across market cycles.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-navy/5 border border-brand-gold/20 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — navy */}
      <section className="bg-brand-navy py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-white mb-3">
              How It <em className="italic text-brand-gold">Works</em>
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Check Eligibility", desc: "Meet the ₹10 lakh minimum and complete your KYC verification." },
              { step: "02", title: "Choose a Strategy", desc: "Browse equity, debt, or hybrid strategies. Review the ISID document." },
              { step: "03", title: "Invest & Track", desc: "Invest online or via your RM. Track daily NAV and performance." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-brand-gold/40 text-brand-gold font-serif text-xl flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      </section>

      {/* CTA — cream */}
      <section className="bg-cream-pattern py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-brand-navy mb-4">
            Ready to Elevate Your <em className="italic text-brand-red">Portfolio?</em>
          </h2>
          <p className="text-gray-500 mb-8 font-light">
            Explore XYZ SIF strategies crafted for investors seeking sophisticated,
            risk-adjusted returns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/strategies"
              className="px-8 py-3.5 bg-brand-red text-white font-medium rounded border border-brand-gold/30 hover:bg-brand-red-light transition-colors tracking-wide"
            >
              Explore Strategies
            </Link>
            <Link
              href="/compare"
              className="px-8 py-3.5 text-brand-navy font-medium rounded border border-brand-navy/20 hover:bg-brand-navy/5 transition-all tracking-wide"
            >
              Compare SIF vs Others
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
