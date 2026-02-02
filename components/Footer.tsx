import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-blue-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-brand-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">X</span>
              </div>
              <span className="font-display font-bold text-lg tracking-wide">
                <span className="text-brand-gold">XYZ</span>{" "}
                <span className="text-gray-500 font-light">SIF</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Specialized Investment Funds by XYZ Mutual Fund. Sophisticated
              strategies for discerning investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs mb-5 text-brand-gold uppercase tracking-[0.2em]">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                ["/strategies", "SIF Strategies"],
                ["/compare", "SIF vs Others"],
                ["/about", "About SIF"],
                ["/faqs", "FAQs"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-brand-gold transition-colors font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-xs mb-5 text-brand-gold uppercase tracking-[0.2em]">
              Resources
            </h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs mb-5 text-brand-gold uppercase tracking-[0.2em]">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-500 font-light">
              <p>1800 3010 6767 (Toll Free)</p>
              <p>sif@xyzfund.com</p>
              <p className="leading-relaxed">
                XYZ AMC Ltd,
                <br />
                Mumbai — 400 020
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-subtle">
          <p className="text-xs text-gray-600 leading-relaxed font-light">
            Mutual Fund investments are subject to market risks, read all scheme
            related documents carefully. SIF strategies involve use of
            derivatives which carry additional risks. Past performance is not
            indicative of future results. Minimum investment of ₹10 lakh
            applicable per PAN per AMC.
          </p>
          <p className="text-xs text-gray-700 mt-4 font-light">
            &copy; {new Date().getFullYear()} XYZ Asset Management Company Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
