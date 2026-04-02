import React from "react";

const WhatThisCalculatorDoes = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Compare Interest Saved vs Wealth Created
          </h3>
          <p className="text-sm mt-1">
            Compares guaranteed loan interest savings with potential wealth
            creation from long-term investments.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Recalculate Loan Impact Instantly
          </h3>
          <p className="text-sm mt-1">
            Instantly see revised EMI amounts or reduced loan tenure after
            making a prepayment.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Visualize Financial Impact
          </h3>
          <p className="text-sm mt-1">
            Visual comparison of interest before and after prepayment
            for clearer decision-making.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Illustrate Compounding Effect
          </h3>
          <p className="text-sm mt-1">
            Demonstrates how investments grow over time through compounding
            versus one-time loan reduction.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Data-Driven Recommendation
          </h3>
          <p className="text-sm mt-1">
            Clearly identifies the financially better option based on
            actual numerical outcomes.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Break-Even & Tax Analysis
          </h3>
          <p className="text-sm mt-1">
            Calculates the break-even investment return and factors in
            tax benefits under Section 24.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatThisCalculatorDoes;
