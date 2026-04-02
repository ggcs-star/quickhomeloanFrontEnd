import React from "react";

/* ---------------- HELPERS ---------------- */
const formatINR = (v) =>
  `${v < 0 ? "-" : ""}₹${Math.abs(Math.round(v)).toLocaleString("en-IN")}`;

/* ---------------- MAIN ---------------- */
export default function RightSideResults({
  summary,
  upfrontCosts,
  yearlyData,
}) {
  if (!summary) {
    return (
      <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 text-center text-slate-400">
        Run the calculation to see results
      </div>
    );
  }

  return (
    <div className="space-y-6 text-slate-200">
      {/* ================= SUMMARY ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryCard
          title="Wealth if Buying"
          value={formatINR(summary.buyWealth)}
          accent="emerald"
        />
        <SummaryCard
          title="Wealth if Renting"
          value={formatINR(summary.rentWealth)}
          accent="sky"
        />
        <SummaryCard
          title="Break-Even Point"
          value={`Year ${summary.breakEven}`}
          accent="violet"
        />
        <SummaryCard
          title="Final Property Value"
          value={formatINR(summary.finalPropertyValue)}
          accent="amber"
        />
      </div>

      {/* ================= UPFRONT COSTS ================= */}
      <Section title="Upfront Buying Costs">
        <p className="text-sm text-slate-400 mb-3">
          This is the initial capital required for buying. Our model assumes a renter invests this entire amount.
        </p>

        <div className="divide-y divide-slate-700 text-sm">
          {upfrontCosts.items.map((item, i) => (
            <div key={i} className="flex justify-between py-2">
              <span className="text-slate-400">{item.label}</span>
              <span className="font-semibold">{formatINR(item.amount)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-indigo-500">
          <span className="font-bold text-indigo-400">
            Total Upfront Investment
          </span>
          <span className="font-extrabold text-indigo-400 text-lg">
            {formatINR(upfrontCosts.total)}
          </span>
        </div>
      </Section>

      {/* ================= CHART ================= */}
      <Section title="Wealth Progression Over Time">
        <div className="h-72 flex items-center justify-center text-slate-500">
          (Chart Component Here)
        </div>
      </Section>

      {/* ================= RECOMMENDATION ================= */}
      <Section title="Analysis Summary & Recommendation">
        <p className="text-slate-300 text-sm leading-relaxed">
          Based on the simulation,{" "}
          <strong className="text-emerald-400">
            {summary.better}
          </strong>{" "}
          emerges as the more financially advantageous choice over{" "}
          <strong>{summary.years} years</strong>. The net worth difference is{" "}
          <strong>{formatINR(summary.difference)}</strong>, with break-even in{" "}
          <strong>Year {summary.breakEven}</strong>.
        </p>
      </Section>

      {/* ================= YEARLY TABLE ================= */}
      <Section title="Year-by-Year Breakdown">
        <div className="overflow-x-auto max-h-96">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-slate-800 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Buying Net Worth</th>
                <th className="px-4 py-3 text-left">Renting Net Worth</th>
                <th className="px-4 py-3 text-left">Property Value</th>
                <th className="px-4 py-3 text-left">Remaining Loan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {yearlyData.map((row) => (
                <tr key={row.year}>
                  <td className="px-4 py-3 font-bold">{row.year}</td>
                  <td className="px-4 py-3 text-emerald-400">
                    {formatINR(row.buy)}
                  </td>
                  <td className="px-4 py-3 text-sky-400">
                    {formatINR(row.rent)}
                  </td>
                  <td className="px-4 py-3">
                    {formatINR(row.property)}
                  </td>
                  <td className="px-4 py-3">
                    {formatINR(row.loan)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

/* ================= UI BUILDING BLOCKS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
}

function SummaryCard({ title, value, accent }) {
  const accentMap = {
    emerald: "text-emerald-400",
    sky: "text-sky-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
      <div
        className={`h-10 w-10 rounded-full flex items-center justify-center bg-slate-900 ${accentMap[accent]}`}
      >
        ●
      </div>
      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
