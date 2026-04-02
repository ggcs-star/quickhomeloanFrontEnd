import React from "react";

export default function HowToUseCalculator() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      {/* STEPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Enter Purchase Details
          </h3>
          <p className="text-sm mt-1">
            Start by entering the principal amount — this is the total cost of the asset you want to purchase (car, property, equipment, etc.).
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Provide Loan Information
          </h3>
          <p className="text-sm mt-1">
            Enter the loan interest rate offered by your bank or lender. This is the annual percentage rate (APR) applicable to your loan.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Enter FD Details
          </h3>
          <p className="text-sm mt-1">
            Input your current Fixed Deposit interest rate — the annual return earned on your savings that may be used for the purchase.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Set Economic Parameters
          </h3>
          <p className="text-sm mt-1">
            Provide the current inflation rate and expected asset growth rate to calculate the real value of money over time.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. Choose Timeframe
          </h3>
          <p className="text-sm mt-1">
            Select the loan tenure or investment period in years. This impacts EMI amounts and FD maturity value.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            6. Analyze Results
          </h3>
          <p className="text-sm mt-1">
            Review the detailed comparison showing EMI, total repayment, FD returns, and which option is financially better for your situation.
          </p>
        </div>

      </div>
    </section>
  );
}
