import React from "react";

const ExampleScenarios = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Common Scenarios
      </h2>

      {/* CONTENT */}
      <div className="space-y-4">
        {/* SCENARIO A */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario A: Home Loan
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            EMI: 30,000, Loan: 3,500,000, Tenure: 20 Years.{" "}
            <strong>Result:</strong> ~8.31% Annually.{" "}
            <strong>Interpretation:</strong> You are paying approx 8.31% interest,
            slightly lower than market average home loan rates.
          </p>
        </div>

        {/* SCENARIO B */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario B: Personal Loan
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            EMI: 18,000, Loan: 1,000,000, Tenure: 7 Years.{" "}
            <strong>Result:</strong> ~18.60% Annually.{" "}
            <strong>Interpretation:</strong> This is typical for a personal loan
            (high interest).
          </p>
        </div>

        {/* SCENARIO C */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario C: Car Loan
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            EMI: 12,500, Loan: 650,000, Tenure: 5 Years.{" "}
            <strong>Result:</strong> ~13.70% Annually.{" "}
            <strong>Interpretation:</strong> Standard interest rate for personal
            and consumer durable loans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExampleScenarios;
