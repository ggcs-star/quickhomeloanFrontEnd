// components/StepsSection.jsx
import React from "react";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Purchase Details",
      description:
        "Start by entering the principal amount — this is the total cost of the asset you want to purchase (car, property, equipment, etc.).",
    },
    {
      number: 2,
      title: "Provide Loan Information",
      description:
        "Enter the loan interest rate offered by your bank or lender. This is the annual percentage rate (APR) applicable to your loan.",
    },
    {
      number: 3,
      title: "Enter FD Details",
      description:
        "Input your current Fixed Deposit interest rate — the annual return earned on your savings that may be used for the purchase.",
    },
    {
      number: 4,
      title: "Set Economic Parameters",
      description:
        "Provide the current inflation rate and expected asset growth rate to calculate the real value of money over time.",
    },
    {
      number: 5,
      title: "Choose Timeframe",
      description:
        "Select the loan tenure or investment period in years. This impacts EMI amounts and FD maturity value.",
    },
    {
      number: 6,
      title: "Analyze Results",
      description:
        "Review the detailed comparison showing EMI, total repayment, FD returns, and which option is financially better for your situation.",
    },
  ];

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-50 p-4 rounded-lg border"
          >
            <h3 className="font-bold text-gray-800">
              {step.number}. {step.title}
            </h3>
            <p className="text-sm mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
