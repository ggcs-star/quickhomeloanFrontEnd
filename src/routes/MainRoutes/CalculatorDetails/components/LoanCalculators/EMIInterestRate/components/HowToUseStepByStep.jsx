import React from "react";

const HowToUseStepByStep = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Enter Your EMI
          </h3>
          <p className="text-sm mt-1">
            The fixed monthly amount you pay. (Example: 30,000)
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Enter Loan Amount
          </h3>
          <p className="text-sm mt-1">
            The total principal amount you borrowed. (Example: 3,500,000)
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Enter Tenure
          </h3>
          <p className="text-sm mt-1">
            The total repayment period. (Example: 20 years or 240 months)
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Click Calculate
          </h3>
          <p className="text-sm mt-1">
            Let the iterative solver do its magic.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. View Your Result
          </h3>
          <p className="text-sm mt-1">
            See your precise monthly and annual interest rates, plus total
            interest payable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseStepByStep;
