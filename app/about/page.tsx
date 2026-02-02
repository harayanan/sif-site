import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
        Understanding SIF
      </p>
      <h1 className="text-3xl font-display font-bold text-white mb-8">
        What is a Specialized Investment Fund?
      </h1>

      {/* Intro */}
      <div className="bg-brand-navy-light border border-gold-subtle rounded-xl p-7 mb-10">
        <p className="text-gray-400 leading-relaxed font-light text-base">
          Specialized Investment Funds (SIFs) are a new category of
          SEBI-regulated investment vehicles introduced in 2025. They bridge
          the gap between traditional mutual funds and more complex products
          like Portfolio Management Services (PMS) and Alternative Investment
          Funds (AIFs) — offering sophisticated strategies with mutual fund
          tax benefits.
        </p>
      </div>

      {/* Advantages */}
      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-5">
            The SIF Advantage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Long-Short Capability",
                desc: "Unlike mutual funds, SIFs can take unhedged short positions (up to 25% of NAV). This allows fund managers to profit from overvalued stocks while maintaining long positions in fundamentally strong ones.",
              },
              {
                title: "Tax Efficiency",
                desc: "SIFs enjoy the same tax treatment as mutual funds — 12.5% LTCG on equity-oriented strategies (beyond ₹1.25L exemption) and 20% STCG. This is significantly more favorable than PMS taxation.",
              },
              {
                title: "SEBI Oversight",
                desc: "Governed under SEBI Mutual Fund regulations with daily NAV disclosure, regulated expense ratios, and institutional-grade compliance — offering more transparency than PMS or AIFs.",
              },
              {
                title: "Absolute Return Focus",
                desc: "Long-short strategies aim for consistent absolute returns regardless of market direction — a capability previously only available through PMS and AIFs at much higher minimum investments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-brand-navy-light border border-gold-subtle rounded-xl p-6 hover:border-brand-gold/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-5">
            Who Should Invest?
          </h2>
          <div className="bg-brand-navy-light border border-gold-subtle rounded-xl p-6">
            <ul className="space-y-4">
              {[
                "Investors with ₹10 lakh+ to deploy in a single AMC's SIF strategies",
                "Those seeking advanced strategies like long-short equity without the ₹50L PMS threshold",
                "HNIs looking for tax-efficient alternatives to PMS and AIFs",
                "Experienced investors comfortable with derivative-based strategies and their associated risks",
                "Investors seeking absolute returns with lower correlation to broad market indices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-gradient text-brand-navy text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-sm text-gray-400 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-5">
            About XYZ SIF
          </h2>
          <div className="bg-brand-navy-light border border-gold-subtle rounded-xl p-6">
            <p className="text-sm text-gray-400 leading-relaxed font-light mb-3">
              XYZ Asset Management Company — India's largest mutual fund by
              AUM — brings its decades of fund management expertise to the SIF
              space. XYZ SIF strategies are managed by the same experienced
              teams that run XYZ Mutual Fund's flagship schemes.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              With a distinct brand identity as mandated by SEBI, XYZ SIF
              operates as a dedicated vertical within XYZ AMC, led by a Chief
              Investment Officer with 10+ years of fund management experience
              and ₹5,000+ crore AUM track record.
            </p>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/strategies"
          className="px-8 py-3.5 bg-gold-gradient text-brand-navy font-semibold rounded-lg hover:opacity-90 transition-opacity tracking-wide"
        >
          View Strategies
        </Link>
        <Link
          href="/compare"
          className="px-8 py-3.5 border border-brand-gold/20 text-brand-gold-light font-medium rounded-lg hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all tracking-wide"
        >
          Compare SIF vs MF vs PMS
        </Link>
      </div>
    </div>
  );
}
