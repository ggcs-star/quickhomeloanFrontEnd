import React from "react";

const HowToUseStepByStep = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Enter Annual Interest Rate
          </h3>
          <p className="text-sm mt-1">
            Provide the annual loan interest rate (for example, 8.50%) offered
            by your bank or lender.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Enter Monthly EMI
          </h3>
          <p className="text-sm mt-1">
            Enter your monthly EMI amount (for example, ₹30,000) that you plan
            to pay towards the loan.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Enter Loan Amount
          </h3>
          <p className="text-sm mt-1">
            Input the total loan amount (for example, ₹35,00,000) that you have
            borrowed.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. View Results Instantly
          </h3>
          <p className="text-sm mt-1">
            The calculator updates in real-time as you type, instantly showing
            the loan tenure in months and years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseStepByStep;
