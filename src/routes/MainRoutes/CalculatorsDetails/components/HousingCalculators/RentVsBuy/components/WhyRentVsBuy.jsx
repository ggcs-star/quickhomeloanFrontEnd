import React from "react";

export default function WhyRentVsBuy() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Why Rent vs. Buy Is the Most Important Financial Decision
      </h2>

      <div className="space-y-5 text-gray-600 leading-relaxed">
        {/* Intro */}
        <p>
          Buying a home isn’t just a financial decision — it has a long-term
          impact on how you live, invest, and build wealth over your lifetime.
        </p>

        {/* Impacts */}
        <p className="font-semibold text-gray-700">✔ It impacts:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Lifestyle and quality of living</li>
          <li>Long-term wealth creation</li>
          <li>Monthly cash flow and savings ability</li>
          <li>Flexibility versus long-term stability</li>
          <li>Tax benefits and deductions</li>
          <li>Family security and future planning</li>
          <li>Other investment opportunities</li>
        </ul>

        {/* Expert Comparison */}
        <p className="font-semibold text-gray-700">
          ✔ What most people compare:
        </p>
        <p>
          Many people simply compare <strong>rent vs EMI</strong> and assume
          buying is always better.
        </p>

        <p className="font-semibold text-gray-700">
          ✔ What financial experts actually compare:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Rent cost versus EMI outflow</li>
          <li>Property appreciation versus investment returns</li>
          <li>Opportunity cost of the down payment</li>
          <li>Hidden ownership costs (maintenance, taxes, repairs)</li>
          <li>Impact of inflation over long time horizons</li>
          <li>Flexibility of renting versus commitment of owning</li>
        </ul>

        {/* Closing */}
        <p className="text-gray-700 font-medium">
          This calculator brings all these variables together into a
          data-backed, realistic, and future-proof model — helping you make a
          smarter decision based on numbers, not assumptions.
        </p>
      </div>
    </section>
  );
}
