import React from "react";

const FEATURES = [
  {
    title: "Total Cost of Ownership",
    description:
      "Calculates the complete cost of owning each property over the full loan tenure, including the principal, all interest paid, and rent.",
  },
  {
    title: "Accurate Pre-EMI Calculation",
    description:
      "Models the exact pre-EMI (interest-only) payments for a UC property based on a detailed, multi-phase loan disbursement schedule you provide.",
  },
  {
    title: "Realistic Rent Modeling",
    description:
      "Factors in an annual rent increase rate, providing a true picture of your total rental outflow while waiting for your UC home.",
  },
  {
    title: "Full Loan Interest Comparison",
    description:
      "Computes the total interest paid for both scenarios over the entire loan period, revealing the long-term financial impact of your choice.",
  },
  {
    title: "Clear Verdict & Savings",
    description:
      "Provides a straightforward conclusion about which option is more cost-effective and quantifies the exact savings in both absolute and percentage terms.",
  },
  {
    title: "Side-by-Side Breakdown",
    description:
      "Presents all financial components—property price, down payment, loan amount, rent, and interest—in an easy-to-compare format.",
  },
];

const CalculatorCapabilities = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg border"
          >
            <h3 className="font-bold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalculatorCapabilities;
