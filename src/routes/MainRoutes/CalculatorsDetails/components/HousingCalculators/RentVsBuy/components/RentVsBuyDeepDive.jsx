import React from "react";

export default function RentVsBuyDeepDive() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 space-y-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2 border-b-2 border-gray-200">
        How This Calculator Thinks (Behind the Scenes)
      </h2>

      {/* STEP 1 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
         STEP 1 — ENTER BASIC NUMBERS
        </h3>

        <div className="space-y-5 text-gray-600">
          {/* EMI */}
          <div>
            <p className="font-semibold text-gray-700">Monthly EMI (₹)</p>
            <p className="text-sm mt-1">
              Your monthly home loan installment, calculated using loan amount,
              interest rate, tenure, bank rates, and credit score.
            </p>

            <div className="mt-3 bg-yellow-50 border-l-4 border-gray-200 p-3 text-sm">
              <strong>What EMI Really Means:</strong> A 10–30 year commitment that
              builds long-term equity. EMI stays fixed and becomes easier every
              year due to inflation.
            </div>
          </div>

          {/* RENT */}
          <div>
            <p className="font-semibold text-gray-700">Monthly Rent (₹)</p>
            <p className="text-sm mt-1">
              Your current or expected rent for a similar property, including
              base rent, maintenance (if tenant-paid), amenities, and parking.
            </p>

            <div className="mt-3 bg-red-50 border-l-4 border-gray-200 p-3 text-sm">
              <strong>Reality Check:</strong> Rent feels cheaper today, but grows
              every year due to demand and inflation.
            </div>
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          STEP 2 — SET ECONOMIC FACTORS
        </h3>

        <div className="space-y-5 text-gray-600">
          {/* Inflation */}
          <div>
            <p className="font-semibold text-gray-700">Inflation Rate (%)</p>
            <p className="text-sm mt-1">
              Default assumption is 6%. Inflation affects the real value of EMI,
              rent, purchasing power, and property appreciation.
            </p>

            <div className="mt-3 bg-green-50 border-l-4 border-gray-200 p-3 text-sm">
              <strong>Why Inflation Favors Buyers:</strong> EMI remains constant,
              rent keeps increasing, and property value rises.
            </div>
          </div>

          {/* Rent Increase */}
          <div>
            <p className="font-semibold text-gray-700">
              Annual Rent Increase (%)
            </p>
            <p className="text-sm mt-1">
              Default is 7%. Typical ranges: Metros (7–10%), Tier-2 cities
              (5–7%), Suburbs (3–5%).
            </p>

            <div className="mt-3 bg-yellow-50 border-l-4 border-gray-200 p-3 text-sm">
              <strong>Critical Input:</strong> Even a 1–2% change can completely
              flip long-term rent vs buy results.
            </div>
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          STEP 3 — SELECT ANALYSIS PERIOD
        </h3>

        <p className="text-gray-600 text-sm">
          Choose a time horizon of 5, 10, 15, 20, or 25 years based on how long you
          expect to stay in the home.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 font-bold">✔</span>
            <span>
              <strong>Short stay (&lt; 5 years):</strong> Renting almost always
              wins.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold">✔</span>
            <span>
              <strong>Long stay (10+ years):</strong> Buying tends to win by
              building equity.
            </span>
          </li>
        </ul>
      </div>

      {/* MODELS */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Financial Models Used by This Calculator
        </h3>

        <div className="space-y-5 text-gray-600 text-sm">
          <div>
            <p className="font-semibold text-gray-700">
              Rent Projection Model
            </p>
            <p>
              Calculates year-by-year rent growth, total rent paid,
              inflation-adjusted rent, lost wealth, and opportunity cost if
              savings were invested.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Buying Projection Model
            </p>
            <p>
              Simulates EMI amortization, principal vs interest, property
              appreciation, maintenance (1–2% yearly), property tax, insurance,
              stamp duty, registration, and resale value.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Opportunity Cost Model (Advanced)
            </p>
            <p>
              Models returns from alternative investments (FDs, mutual funds,
              equity) if you choose not to buy.
            </p>
          </div>
        </div>
      </div>

      {/* IGNORED COSTS */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          🔍 Costs Most First-Time Buyers Ignore
        </h3>

        <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
          <li>Down payment (20–30%) — biggest hidden cost</li>
          <li>Stamp duty (5–7%) — varies by state</li>
          <li>Registration charges (≈1%)</li>
          <li>Home loan processing fees</li>
          <li>Society maintenance (₹2,000–₹10,000/month)</li>
          <li>Painting & repairs (every 3–5 years)</li>
          <li>Home insurance (often mandatory)</li>
          <li>Property tax (yearly)</li>
          <li>Brokerage (future buy/sell/rent)</li>
          <li>Furniture & interiors (10–20% of home value)</li>
        </ol>
      </div>
    </section>
  );
}
