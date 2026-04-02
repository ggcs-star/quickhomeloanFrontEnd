import React from "react";

const MECHANICS = [
  {
    title: "Phased Disbursement (Pre-EMI)",
    description:
      "The calculator iterates month-by-month through the construction timeline. When a disbursement month is reached, the outstanding loan balance is increased, and the monthly interest is calculated on this new, higher balance. This accurately models pre-EMI payments.",
  },
  {
    title: "Rent Escalation",
    description:
      "The calculation tracks the years elapsed during construction. At the start of each new year (every 12 months), the monthly rent is increased by the Annual Rent Increase Rate for a more realistic projection of total rent paid.",
  },
  {
    title: "Full EMI Calculation",
    description:
      "Uses the standard EMI formula: P × r × (1 + r)^n / ((1 + r)^n − 1), where P is principal, r is the monthly interest rate, and n is the loan tenure in months.",
  },
];

const CalculatorTechnicalBreakdown = () => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-xl shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        How This Calculator Works
      </h2>

      {/* CORE MECHANICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {MECHANICS.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      {/* RTM LOGIC */}
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
        <h4 className="font-semibold text-gray-900">
          Ready-to-Move (RTM) Total Cost Logic
        </h4>

        <p className="mt-2 font-mono bg-gray-200 p-3 rounded text-sm text-gray-800">
          Total Cost = Property Price + Total Interest
        </p>

        <p className="text-gray-600 mt-2 text-sm">
          The total interest is calculated using the standard EMI formula across
          the full loan tenure.
        </p>

        <p className="mt-2 font-mono bg-gray-100 p-3 rounded text-sm text-gray-800">
          Total Interest = (EMI × Loan Tenure in Months) − Loan Amount
        </p>
      </div>

      {/* UC LOGIC */}
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900">
          Under Construction (UC) Total Cost Logic
        </h4>

        <p className="mt-2 font-mono bg-gray-200 p-3 rounded text-sm text-gray-800">
          Total Cost = Property Price + Rent Paid + Pre-EMI Interest +
          Post-Construction Interest
        </p>

        <p className="text-gray-600 mt-2 text-sm">
          This is a multi-step calculation. The calculator first computes total
          rent (with escalation) and precise pre-EMI interest from the
          disbursement schedule. It then adds the interest from the standard EMI
          paid after possession.
        </p>
      </div>
    </section>
  );
};

export default CalculatorTechnicalBreakdown;
