import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal">
      <div className="gold-line-accent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center border border-brand-gold/30">
                <span className="text-white font-bold text-xs">XYZ</span>
              </div>
              <div className="w-[1px] h-6 bg-brand-gold/30" />
              <span className="font-serif text-brand-gold text-lg">SIF</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Elevating wealth through specialized strategies. Exclusive access
              to curated investment opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-sm mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                ["/strategies", "SIF Strategies"],
                ["/compare", "SIF vs Others"],
                ["/about", "About SIF"],
                ["/faqs", "FAQs"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-brand-gold transition-colors font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-sm mb-5">Resources</h4>
            <ul className="space-y-3">
              {["NAVs", "Factsheets", "Strategy Documents", "Tax Reckoner", "Forms & Downloads"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-500 hover:text-brand-gold transition-colors cursor-pointer font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-sm mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-gray-500 font-light">
              <p>1800 3010 6767 (Toll Free)</p>
              <p>sif@xyzfund.com</p>
              <p className="leading-relaxed">XYZ AMC Ltd,<br />Mumbai — 400 020</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-gold/10">
          <p className="text-xs text-gray-600 leading-relaxed font-light">
            Mutual Fund investments are subject to market risks, read all scheme
            related documents carefully. SIF strategies involve use of
            derivatives which carry additional risks. Past performance is not
            indicative of future results. Minimum investment of ₹10 lakh
            applicable per PAN per AMC.
          </p>
          <p className="text-xs text-gray-700 mt-4 font-light">
            &copy; {new Date().getFullYear()} XYZ Asset Management Company Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
