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
    <div className="bg-cream-pattern min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-navy mb-3">
            Our <em className="italic text-brand-red">Specialized</em> Fund Categories
          </h1>
          <p className="text-gray-500 font-light max-w-lg mx-auto">
            Choose from equity, debt, and hybrid long-short strategies governed
            by detailed Investment Strategy Information Documents.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-5" />
        </div>

        {sections.map((section) => (
          <div key={section.label} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-red rotate-45" />
              <h2 className="font-serif text-xl text-brand-navy">
                {section.label}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((s) => (
                <StrategyCard key={s.slug} strategy={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
