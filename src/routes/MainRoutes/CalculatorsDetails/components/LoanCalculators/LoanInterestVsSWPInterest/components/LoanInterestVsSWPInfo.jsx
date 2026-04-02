import React from "react";

const LoanInterestVsSWPInfo = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How This Strategy Works
      </h2>

      <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
        <p>
          Instead of breaking your FD to fund an expense, you take a loan and
          service the EMIs using a Systematic Withdrawal Plan (SWP).
        </p>
        <p>
          This calculator finds the FD interest rate required so that your FD
          balance reaches zero exactly at the end of the loan tenure.
        </p>
        <p>
          If the required FD rate is lower than what your FD earns, the SWP
          strategy may be financially viable.
        </p>
      </div>
    </section>
  );
};

export default LoanInterestVsSWPInfo;
