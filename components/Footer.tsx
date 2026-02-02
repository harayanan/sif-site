import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-hdfc-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-hdfc-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <span className="font-bold text-lg">
                HDFC <span className="text-hdfc-red">SIF</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialized Investment Funds by HDFC Mutual Fund. Bridging the gap
              between mutual funds and PMS/AIFs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["/strategies", "SIF Strategies"],
                ["/compare", "SIF vs Others"],
                ["/about", "About SIF"],
                ["/faqs", "FAQs"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                "NAVs",
                "Factsheets",
                "Strategy Documents",
                "Tax Reckoner",
                "Forms & Downloads",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>1800 3010 6767 (Toll Free)</p>
              <p>sif@hdfcfund.com</p>
              <p className="leading-relaxed">
                HDFC AMC Ltd, HDFC House,
                <br />
                2nd Floor, H.T. Parekh Marg,
                <br />
                Mumbai — 400 020
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed">
            Mutual Fund investments are subject to market risks, read all scheme
            related documents carefully. HDFC SIF strategies involve use of
            derivatives which carry additional risks. Past performance is not
            indicative of future results. Minimum investment of ₹10 lakh
            applicable per PAN per AMC.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            &copy; {new Date().getFullYear()} HDFC Asset Management Company Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
