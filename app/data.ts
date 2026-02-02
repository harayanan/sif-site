export interface Strategy {
  slug: string;
  name: string;
  category: "equity" | "debt" | "hybrid";
  status: "live" | "coming-soon";
  tagline: string;
  description: string;
  benchmark: string;
  minInvestment: string;
  maxShortExposure: string;
  riskLevel: "High" | "Very High" | "Moderate" | "Moderately High";
  keyFeatures: string[];
  assetAllocation: { label: string; range: string }[];
}

export const strategies: Strategy[] = [
  {
    slug: "equity-ex-top-100-long-short",
    name: "HDFC SIF Equity Ex-Top 100 Long Short Fund",
    category: "equity",
    status: "live",
    tagline: "Mid & small-cap alpha with downside protection",
    description:
      "An open-ended equity strategy investing in companies beyond India's top 100 by market cap. Takes long positions in fundamentally strong mid and small-cap companies while selectively shorting overvalued stocks through derivatives.",
    benchmark: "Nifty 500 TRI",
    minInvestment: "₹10,00,000",
    maxShortExposure: "25% of NAV",
    riskLevel: "Very High",
    keyFeatures: [
      "Long-short strategy across mid & small-cap universe",
      "Derivative-based income via covered calls",
      "Participation in IPOs, QIPs, block deals & buybacks",
      "Active stock & sector selection for alpha generation",
    ],
    assetAllocation: [
      { label: "Mid & Small Cap Equity", range: "65%–100%" },
      { label: "Large Cap Equity", range: "0%–35%" },
      { label: "Unhedged Short Derivatives", range: "0%–25%" },
    ],
  },
  {
    slug: "hybrid-long-short",
    name: "HDFC SIF Hybrid Long Short Fund",
    category: "hybrid",
    status: "live",
    tagline: "Balanced returns with lower volatility",
    description:
      "A hybrid strategy combining equity long-short positions with debt and derivative strategies. Designed for investors seeking balanced, risk-adjusted returns across market cycles with lower volatility than pure equity strategies.",
    benchmark: "CRISIL Hybrid 50+50 Moderate Index",
    minInvestment: "₹10,00,000",
    maxShortExposure: "25% of NAV",
    riskLevel: "Moderately High",
    keyFeatures: [
      "Equity long-short combined with carry-based debt strategies",
      "Corporate bonds, CPs and CDs for steady income",
      "Derivative strategies for additional alpha",
      "Multi-asset diversification in a single strategy",
    ],
    assetAllocation: [
      { label: "Equity & Equity Derivatives", range: "65%–75%" },
      { label: "Debt Securities", range: "25%–35%" },
      { label: "Unhedged Short Derivatives", range: "0%–25%" },
    ],
  },
  {
    slug: "sector-rotation-long-short",
    name: "HDFC SIF Sector Rotation Long Short Fund",
    category: "equity",
    status: "coming-soon",
    tagline: "Tactical sector bets with hedged downside",
    description:
      "A sector rotation strategy that goes long on promising sectors while shorting underperforming ones. Uses a combination of fundamental analysis and macro indicators to time sector rotations.",
    benchmark: "Nifty 500 TRI",
    minInvestment: "₹10,00,000",
    maxShortExposure: "25% of NAV",
    riskLevel: "Very High",
    keyFeatures: [
      "Dynamic sector allocation based on macro cycles",
      "Long-short across sectors for market-neutral alpha",
      "Quantitative screening combined with fundamental research",
      "Systematic rebalancing framework",
    ],
    assetAllocation: [
      { label: "Equity (Long)", range: "65%–100%" },
      { label: "Equity Derivatives (Short)", range: "0%–25%" },
      { label: "Cash & Equivalents", range: "0%–35%" },
    ],
  },
  {
    slug: "debt-long-short",
    name: "HDFC SIF Debt Long Short Fund",
    category: "debt",
    status: "coming-soon",
    tagline: "Fixed income alpha through duration management",
    description:
      "A debt-oriented strategy that takes long and short positions across the yield curve. Aims to generate returns from interest rate movements, credit spreads, and carry strategies.",
    benchmark: "CRISIL Composite Bond Index",
    minInvestment: "₹10,00,000",
    maxShortExposure: "25% of NAV",
    riskLevel: "Moderate",
    keyFeatures: [
      "Duration management through interest rate derivatives",
      "Credit spread strategies for additional yield",
      "Carry-based investments in corporate bonds & money market instruments",
      "Active management of yield curve positioning",
    ],
    assetAllocation: [
      { label: "Debt Securities", range: "75%–100%" },
      { label: "Interest Rate Derivatives", range: "0%–25%" },
      { label: "Cash & Equivalents", range: "0%–25%" },
    ],
  },
];

export const faqs = [
  {
    q: "What is a Specialized Investment Fund (SIF)?",
    a: "SIF is a SEBI-regulated investment vehicle that bridges the gap between traditional mutual funds and PMS/AIFs. It combines the tax efficiency and regulatory framework of mutual funds with the flexibility to use advanced strategies like long-short equity, derivatives, and multi-asset approaches.",
  },
  {
    q: "What is the minimum investment amount?",
    a: "SEBI mandates a minimum aggregate investment of ₹10 lakh across all SIF strategies per PAN per AMC. This threshold must be maintained at all times. Accredited investors are exempt from this requirement.",
  },
  {
    q: "How is SIF different from a mutual fund?",
    a: "While SIFs are offered by mutual fund houses under the same SEBI registration, they can use unhedged derivatives (up to 25% short exposure), employ long-short strategies, and offer more sophisticated investment approaches. Mutual funds can only use derivatives for hedging purposes.",
  },
  {
    q: "Can I switch between mutual fund schemes and SIF strategies?",
    a: "No, SEBI regulations do not permit switching between mutual fund schemes and SIF strategies. They operate as distinct product categories even though they are managed by the same AMC.",
  },
  {
    q: "What are long-short strategies?",
    a: "Long-short strategies involve taking 'long' positions (buying) in securities expected to appreciate and 'short' positions (selling) in securities expected to decline. This allows the fund to potentially profit in both rising and falling markets, aiming for more consistent absolute returns.",
  },
  {
    q: "How are SIF returns taxed?",
    a: "SIFs enjoy the same tax treatment as mutual funds. Equity-oriented SIF strategies (with 65%+ equity allocation) are taxed as equity funds — 12.5% LTCG beyond ₹1.25 lakh and 20% STCG. Debt-oriented strategies follow debt fund taxation rules.",
  },
  {
    q: "Who manages HDFC SIF strategies?",
    a: "HDFC SIF strategies are managed by the same experienced fund management teams at HDFC AMC that oversee its mutual fund offerings. A dedicated Chief Investment Officer with 10+ years of fund management experience and ₹5,000+ crore AUM track record heads the SIF vertical.",
  },
  {
    q: "What is the risk in SIF investments?",
    a: "SIFs carry market risk, derivative risk, liquidity risk, and concentration risk depending on the strategy. The use of derivatives for short positions can amplify both gains and losses. Each strategy has a riskometer indicating its risk level. SIFs are suited for informed investors with a higher risk appetite.",
  },
];

export const comparisonData = {
  headers: ["Feature", "SIF", "Mutual Fund", "PMS", "AIF"],
  rows: [
    ["Min. Investment", "₹10 Lakh", "₹500", "₹50 Lakh", "₹1 Crore"],
    ["Regulation", "SEBI MF", "SEBI MF", "SEBI PMS", "SEBI AIF"],
    ["Derivatives", "Long & Short", "Hedging only", "Long & Short", "Long & Short"],
    ["Short Selling", "Up to 25%", "Not allowed", "Allowed", "Allowed"],
    ["Tax Treatment", "MF taxation", "MF taxation", "Individual", "Trust taxation"],
    ["Transparency", "Daily NAV", "Daily NAV", "Monthly", "Quarterly"],
    ["Expense Ratio", "Regulated", "Regulated", "Higher", "Higher"],
    ["Liquidity", "Daily / Interval", "Daily", "Custom", "Lock-in"],
    ["Pooled Structure", "Yes", "Yes", "No (Segregated)", "Yes"],
  ],
};
