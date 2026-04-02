import React from "react";

export default function RentVsBuyRightPanel() {
  return (
    <div className="">
      <div className="h-full">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 h-full max-h-[calc(100vh-12rem)] lg:max-h-full overflow-y-auto">
          <article className="prose prose-slate max-w-none">

            {/* ================= HOW TO USE ================= */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                How to Use This Calculator
              </h2>

              <p className="text-slate-600 mb-4 leading-relaxed">
                Compare the long-term financial outcome of renting a home versus buying one with EMIs.
              </p>

              <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">
                Step 1: Enter Your Basic Numbers
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong className="text-slate-800">Buying Details:</strong> Input the price of the property and your expected loan details (down payment, interest rate, tenure). The calculator will show your projected EMI.
              </p>

              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong className="text-slate-800">Renting Details:</strong> Enter the monthly rent for a comparable property.
              </p>

              <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">
                Step 2: Set Economic Factors
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                Provide your assumptions for how property values, rent, and your own investments will grow over time.
              </p>

              <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">
                Step 3: Choose Time Frame
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                Select the long-term horizon for the comparison.
              </p>

              <div className="my-4 p-4 bg-slate-100 border-l-4 border-blue-500 rounded-r-lg">
                <p className="flex items-start">
                  <span className="mr-3 text-xl">💡</span>
                  <span className="text-slate-700">
                    <strong>Pro Tip:</strong> Try different values for{" "}
                    <code className="bg-slate-200 text-sm px-1 rounded mx-1">Annual Rent Increase</code>
                    and{" "}
                    <code className="bg-slate-200 text-sm px-1 rounded mx-1">Property Appreciation</code>.
                  </span>
                </p>
              </div>
            </div>

            {/* ================= WHY IT MATTERS ================= */}
            <h1 className="text-3xl font-extrabold text-slate-800 mb-4">
              Why Rent vs. Buy is The Most Important Financial Decision
            </h1>

            <p className="text-slate-600 mb-4">
              Buying a home isn’t just a financial decision — it impacts:
            </p>

            <ul className="space-y-2 mb-4 list-inside">
              {[
                "Lifestyle",
                "Long-term wealth creation",
                "Monthly cash flow",
                "Flexibility vs stability",
                "Tax benefits",
                "Family security",
                "Investment opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-slate-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 mb-4">
              Experts compare more than just EMI vs Rent:
            </p>

            <ul className="space-y-2 mb-4 list-inside">
              {[
                "Rent Cost vs EMI",
                "Property Appreciation vs Investment Returns",
                "Down Payment Opportunity Cost",
                "Hidden Ownership Costs",
                "Inflation Effect",
                "Flexibility vs Commitment",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3">⭐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ================= TABLE ================= */}
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 flex items-start">
              <span className="mr-3 text-3xl">📊</span>
              Comparison Snapshot
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="p-3 bg-slate-100 border font-semibold">Factor</th>
                    <th className="p-3 bg-slate-100 border text-center font-semibold">Buying</th>
                    <th className="p-3 bg-slate-100 border text-center font-semibold">Renting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Flexibility", "❌", "✔"],
                    ["Long-term Wealth", "✔", "❌"],
                    ["Monthly Cashflow", "❌", "✔"],
                    ["Ownership Pride", "✔", "❌"],
                    ["Responsibility", "❌", "✔"],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 border">{row[0]}</td>
                      <td className="p-3 border text-center">{row[1]}</td>
                      <td className="p-3 border text-center">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= FINAL TIPS ================= */}
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 flex items-start">
              <span className="mr-3 text-3xl">💡</span>
              Final Advice
            </h2>

            <ul className="space-y-2 mb-4 list-inside">
              {[
                "Compare wealth, not just monthly cost",
                "Don’t exceed 30% of income on EMI",
                "Rent increase % changes everything",
                "Include opportunity cost of down payment",
                "Avoid buying with unstable income",
              ].map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-slate-500">{i + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

          </article>
        </div>
      </div>
    </div>
  );
}
