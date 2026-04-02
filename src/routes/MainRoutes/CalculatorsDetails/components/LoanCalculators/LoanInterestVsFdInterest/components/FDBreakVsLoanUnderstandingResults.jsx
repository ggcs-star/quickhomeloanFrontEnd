import React from "react";

const FDBreakVsLoanUnderstandingResults = () => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Understanding the Results
      </h2>

      <div className="space-y-4 text-gray-600 prose prose-slate max-w-none">
        <h4 className="font-semibold text-md text-gray-700">
          Loan Option Provides:
        </h4>
        <ul>
          <li>Your monthly EMI</li>
          <li>Total interest paid to the bank</li>
          <li>Total amount repaid during the tenure</li>
          <li>Real cost after adjusting for inflation (optional)</li>
        </ul>

        <h4 className="font-semibold text-md text-gray-700 mt-4">
          FD Option Provides:
        </h4>
        <ul>
          <li>FD maturity value if you don’t break it</li>
          <li>Total interest you earn by keeping the FD</li>
          <li>Opportunity cost = FD interest you lose by breaking it</li>
          <li>Adjustments for penalty &amp; tax (if any)</li>
        </ul>

        <h4 className="font-semibold text-md text-gray-700 mt-4">
          Comparison Result Shows:
        </h4>
        <ul>
          <li>
            Which option leaves you with more money after the specified period
          </li>
          <li>The net rupee benefit or loss</li>
          <li>Liquidity and emergency fund considerations</li>
        </ul>
      </div>
    </section>
  );
};

export default FDBreakVsLoanUnderstandingResults;
