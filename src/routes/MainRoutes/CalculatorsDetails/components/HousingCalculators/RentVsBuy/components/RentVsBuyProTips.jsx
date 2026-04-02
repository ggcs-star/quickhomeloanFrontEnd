import React from "react";

export default function RentVsBuyProTips() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Compare long-term wealth, not just monthly cost.</strong>{" "}
              EMI versus rent is a shallow comparison. Always evaluate net worth
              outcomes over time.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Follow the 30% EMI rule.</strong> Your total EMI should not
              exceed 30% of your monthly income to protect your lifestyle and
              savings.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Experiment with rent increase assumptions.</strong>{" "}
              Small changes in annual rent growth can completely change the
              rent-versus-buy outcome.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Include the opportunity cost of your down payment.</strong>{" "}
              That capital could be compounding elsewhere — ignoring it skews
              the comparison.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Do not buy if your income is uncertain.</strong> EMIs
              require stability; job insecurity increases financial risk
              significantly.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Buy only when you are financially and emotionally ready.</strong>{" "}
              Avoid purchasing due to social pressure or fear of missing out.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
