import React from "react";

const WhatThisCalculatorDoes = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Loan Tenure Calculation
          </h3>
          <p className="text-sm mt-1">
            Determines the exact loan repayment duration in months and years
            based on your EMI.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            EMI-Based Repayment Analysis
          </h3>
          <p className="text-sm mt-1">
            Calculates tenure using EMI (Equated Monthly Installment), loan
            amount, and interest rate.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Loan Payoff Timeline
          </h3>
          <p className="text-sm mt-1">
            Shows how long your loan will take to be fully paid off with your
            current EMI.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            EMI Adequacy Check
          </h3>
          <p className="text-sm mt-1">
            Helps identify whether your EMI is too low, ideal, or needs
            adjustment.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Interest &amp; EMI Insights
          </h3>
          <p className="text-sm mt-1">
            Explains how interest impacts repayment time, total EMIs, and total
            interest paid.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            Repayment Planning Support
          </h3>
          <p className="text-sm mt-1">
            Helps compare EMI options, plan faster repayment, shorten tenure,
            and assess EMI practicality.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatThisCalculatorDoes;
