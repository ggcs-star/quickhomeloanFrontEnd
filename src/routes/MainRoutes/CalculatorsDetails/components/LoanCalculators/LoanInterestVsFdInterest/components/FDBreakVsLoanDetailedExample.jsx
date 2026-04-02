import React from "react";

const FDBreakVsLoanDetailedExample = () => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Detailed Example (Full Calculation Explained)
      </h2>

      <div className="space-y-4 text-gray-600 prose prose-slate max-w-none">

        {/* ================= EXAMPLE SCENARIO ================= */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-lg text-gray-800">
            Example Scenario
          </h3>

          <ul className="list-none space-y-1 mt-2 not-prose">
            <li>
              <strong>Purchase Amount:</strong> ₹5,00,000
            </li>
            <li>
              <strong>Loan Interest Rate:</strong> 8.5% per annum
            </li>
            <li>
              <strong>FD Interest Rate:</strong> 6.5% per annum
            </li>
            <li>
              <strong>Tenure:</strong> 5 years
            </li>
            <li>
              <strong>FD Break Penalty:</strong> 0%
            </li>
            <li>
              <strong>Inflation Rate:</strong> 5%
            </li>
          </ul>
        </div>

        {/* ================= LOAN OPTION ================= */}
        <div className="mt-4">
          <h4 className="font-semibold text-md text-gray-700">
            1. Loan Option Calculation
          </h4>

          <p>
            <strong>EMI Formula:</strong> EMI ≈ ₹10,258.27 per month
          </p>
          <p>
            <strong>Total Amount Paid:</strong> ₹10,258.27 × 60 months =
            ₹6,15,495.94
          </p>
          <p>
            <strong>Total Interest on Loan:</strong> ₹6,15,495.94 − ₹5,00,000 =
            ₹1,15,495.94
          </p>
        </div>

        {/* ================= FD OPTION ================= */}
        <div className="mt-4">
          <h4 className="font-semibold text-md text-gray-700">
            2. FD Option (If You Do NOT Break FD)
          </h4>

          <p>
            <strong>FD Maturity Formula:</strong> FD Maturity = Principal ×
            (1 + Rate)<sup>Time</sup>
          </p>
          <p>
            FD Maturity = 5,00,000 × (1.065)<sup>5</sup> = ₹6,85,043.33
          </p>
          <p>
            <strong>Total FD Interest Earned:</strong> ₹6,85,043.33 − ₹5,00,000 =
            ₹1,85,043.33
          </p>
        </div>

        {/* ================= COMPARISON ================= */}
        <div className="mt-4">
          <h4 className="font-semibold text-md text-gray-700">
            3. Compare Both Options
          </h4>

          <p>
            <strong>Loan Interest:</strong> ₹1,15,495.94
          </p>
          <p>
            <strong>FD Opportunity Cost:</strong> ₹1,85,043.33
          </p>

          <p className="mt-2">
            Clearly, breaking the FD causes a ₹1,85,043.33 loss of future
            interest, which is higher than the loan interest.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FDBreakVsLoanDetailedExample;
