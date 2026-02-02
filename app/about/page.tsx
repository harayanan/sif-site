import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy py-14 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">
            What is a <em className="italic text-brand-gold">Specialized</em> Investment Fund?
          </h1>
          <p className="text-gray-400 font-light max-w-xl">
            A new class of SEBI-regulated investment products bridging the gap
            between mutual funds and PMS/AIFs.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mt-6" />
        </div>
      </section>

      {/* Body — cream */}
      <section className="bg-cream-pattern py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-white rounded-xl border border-brand-gold/10 p-7 mb-12">
            <p className="text-gray-600 leading-relaxed font-light text-base">
              Specialized Investment Funds (SIFs) were introduced by SEBI in 2025
              to offer sophisticated investment strategies — like long-short equity
              and derivatives — within the tax-efficient and transparent mutual fund
              framework. They are designed for informed investors seeking absolute
              returns across market cycles.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-2xl text-brand-navy">The SIF Advantage</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Long-Short Capability", desc: "SIFs can take unhedged short positions up to 25% of NAV — profiting from overvalued stocks while maintaining long positions in strong ones." },
                { title: "Tax Efficiency", desc: "Same tax treatment as mutual funds — 12.5% LTCG on equity strategies beyond ₹1.25L, significantly better than PMS." },
                { title: "SEBI Oversight", desc: "Daily NAV disclosure, regulated expense ratios, and institutional compliance — more transparent than PMS or AIFs." },
                { title: "Absolute Return Focus", desc: "Consistent returns regardless of market direction — previously only available through PMS/AIFs at much higher minimums." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl overflow-hidden border border-brand-gold/10">
                  <div className="bg-brand-navy px-5 py-3">
                    <h3 className="font-serif text-white text-sm">{item.title}</h3>
                  </div>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
                  <div className="bg-white px-5 py-4">
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Invest */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-2xl text-brand-navy">Who Should Invest?</h2>
            </div>
            <div className="bg-white rounded-xl border border-brand-gold/10 p-6">
              <ul className="space-y-4">
                {[
                  "Investors with ₹10 lakh+ to deploy in a single AMC's SIF strategies",
                  "Those seeking advanced long-short strategies without the ₹50L PMS threshold",
                  "HNIs looking for tax-efficient alternatives to PMS and AIFs",
                  "Experienced investors comfortable with derivative-based strategies",
                  "Investors seeking absolute returns with lower market correlation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About XYZ SIF */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-2xl text-brand-navy">About XYZ SIF</h2>
            </div>
            <div className="bg-white rounded-xl border border-brand-gold/10 p-6">
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-3">
                XYZ Asset Management Company — India's largest mutual fund by AUM — brings
                decades of fund management expertise to the SIF space. XYZ SIF strategies are
                managed by the same experienced teams behind XYZ Mutual Fund's flagship schemes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                With a distinct brand identity as mandated by SEBI, XYZ SIF operates as a
                dedicated vertical led by a CIO with 10+ years of experience and ₹5,000+ crore
                AUM track record.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/strategies" className="px-8 py-3.5 bg-brand-red text-white font-medium rounded border border-brand-gold/30 hover:bg-brand-red-light transition-colors tracking-wide">
              View Strategies
            </Link>
            <Link href="/compare" className="px-8 py-3.5 text-brand-navy font-medium rounded border border-brand-navy/20 hover:bg-brand-navy/5 transition-all tracking-wide">
              Compare SIF vs Others
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
