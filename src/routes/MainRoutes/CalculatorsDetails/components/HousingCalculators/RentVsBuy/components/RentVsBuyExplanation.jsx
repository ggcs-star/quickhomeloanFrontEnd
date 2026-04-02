import React from "react";

export default function RentVsBuyExplanation() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 space-y-8">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2 border-b-2 border-gray-200">
        How This Rent vs Buy Calculator Works
      </h2>

      {/* STEP 1 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Step 1 — Enter Basic Numbers
        </h3>

        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-semibold text-gray-700">
              Monthly EMI (₹)
            </p>
            <p className="text-sm mt-1">
              Your monthly home loan installment calculated using loan amount,
              interest rate, tenure, bank rates, and your credit score.
            </p>

            <div className="mt-2 p-3 bg-gray-200 border-l-4 border-gray-400 text-sm">
              <strong>What EMI Really Means:</strong> A 10–30 year commitment that
              builds long-term equity. The EMI is fixed, and becomes easier to
              manage every year due to inflation.
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Monthly Rent (₹)
            </p>
            <p className="text-sm mt-1">
              Your current or expected rent for a comparable property, including
              base rent, maintenance (if paid by tenant), amenities, and parking.
            </p>

            <div className="mt-2 p-3 bg-gray-200 border-l-4 border-gray-400 text-sm">
              <strong>Reality Check:</strong> Rent feels cheaper today, but it
              increases every year due to market demand.
            </div>
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Step 2 — Set Economic Factors
        </h3>

        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-semibold text-gray-700">
              Inflation Rate (%)
            </p>
            <p className="text-sm mt-1">
              Default assumed inflation is 6%. Inflation affects the real value
              of EMI, rent, purchasing power, and property appreciation.
            </p>

            <div className="mt-2 p-3 bg-gray-20 border-l-4 border-gray-400 text-sm">
              <strong>Why Inflation Favors Buyers:</strong> EMI stays constant
              while rent and property prices rise with inflation.
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Annual Rent Increase (%)
            </p>
            <p className="text-sm mt-1">
              Default is 7%. Typical Indian ranges: Metros (7–10%), Tier-2 cities
              (5–7%), Suburbs (3–5%).
            </p>

            <div className="mt-2 p-3 bg-gray-200 border-l-4 border-gray-400 text-sm">
              <strong>Most Important Input:</strong> Even a 1–2% change in rent
              growth can completely alter long-term results.
            </div>
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Step 3 — Select Analysis Period
        </h3>

        <p className="text-gray-600 text-sm">
          Choose a time horizon of 5, 10, 15, 20, or 25 years based on how long
          you plan to stay in the property.
        </p>

        <ul className="mt-3 space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 font-bold">✔</span>
            <span>
              <strong>Short stay (less than 5 years):</strong> Renting usually
              wins.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold">✔</span>
            <span>
              <strong>Long stay (10+ years):</strong> Buying often wins by
              building long-term equity.
            </span>
          </li>
        </ul>
      </div>

      {/* MODELS */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          What This Calculator Models Internally
        </h3>

        <div className="space-y-5 text-gray-600 text-sm">
          <div>
            <p className="font-semibold text-gray-700">
               Rent Projection Model
            </p>
            <p>
              Calculates year-by-year rent, total rent paid, inflation-adjusted
              rent, lost wealth due to rent, and opportunity cost if savings
              were invested instead.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Buying Projection Model
            </p>
            <p>
              Simulates EMI amortization, principal vs interest, property
              appreciation, maintenance (1–2% yearly), taxes, insurance,
              registration costs, and future resale value.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Opportunity Cost Model (Advanced)
            </p>
            <p>
              Models alternative investments (FDs, mutual funds, equity) if
              you choose not to buy — often a decisive factor in the final
              verdict.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
