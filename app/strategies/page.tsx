import StrategyCard from "@/components/StrategyCard";
import { strategies } from "@/app/data";

export default function StrategiesPage() {
  const equity = strategies.filter((s) => s.category === "equity");
  const hybrid = strategies.filter((s) => s.category === "hybrid");
  const debt = strategies.filter((s) => s.category === "debt");

  const sections = [
    { label: "Equity Strategies", items: equity },
    { label: "Hybrid Strategies", items: hybrid },
    { label: "Debt Strategies", items: debt },
  ].filter((s) => s.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-hdfc-navy mb-2">
        SIF Strategies
      </h1>
      <p className="text-hdfc-gray-500 mb-10 max-w-2xl">
        Choose from equity, debt, and hybrid long-short strategies. Each
        strategy is governed by a detailed Investment Strategy Information
        Document (ISID).
      </p>

      {sections.map((section) => (
        <div key={section.label} className="mb-12">
          <h2 className="text-xl font-bold text-hdfc-navy mb-5 border-l-4 border-hdfc-red pl-4">
            {section.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((s) => (
              <StrategyCard key={s.slug} strategy={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
