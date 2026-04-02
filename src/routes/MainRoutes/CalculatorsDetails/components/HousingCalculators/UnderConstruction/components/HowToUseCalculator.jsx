import React from "react";

const HowToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Fill in Common Inputs
          </h3>
          <p className="text-sm mt-1">
            Enter your desired Loan Tenure, Annual Interest Rate, and Down
            Payment percentage.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Enter Property Specifics
          </h3>
          <p className="text-sm mt-1">
            Input the prices for both RTM and UC properties, the UC construction
            timeline, your starting monthly rent, and the expected annual rent
            increase rate.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Define Disbursement Plan
          </h3>
          <p className="text-sm mt-1">
            For the UC property, detail the construction-linked payment plan.
            Specify the month and the percentage of the total loan disbursed at
            each stage. Ensure the total disbursement adds up to 100%.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Add or Remove Phases
          </h3>
          <p className="text-sm mt-1">
            Use the <strong>Add Phase</strong> button for complex plans or the
            <strong> × </strong> button to remove phases.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. Calculate & Compare
          </h3>
          <p className="text-sm mt-1">
            Click <strong>Calculate & Compare</strong>. The calculator will
            process all inputs to generate a detailed financial breakdown and a
            final verdict.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseCalculator;
