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
            1. Enter Current Loan Details
          </h3>
          <p className="text-sm mt-1">
            Enter your existing home loan information including outstanding loan
            amount, current EMI, interest rate, and remaining tenure.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Enter Prepayment Amount
          </h3>
          <p className="text-sm mt-1">
            Specify the lump sum amount you plan to prepay towards your loan
            principal (for example: ₹2,00,000).
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Choose Prepayment Type
          </h3>
          <p className="text-sm mt-1">
            Select whether you want to reduce your EMI or reduce your loan
            tenure. Reducing tenure is generally recommended for higher savings.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Calculate Prepayment Impact
          </h3>
          <p className="text-sm mt-1">
            Click the <strong>“Calculate Prepayment Impact”</strong> button to
            instantly see how your loan changes after prepayment.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. Review Updated Loan Details
          </h3>
          <p className="text-sm mt-1">
            View your new EMI or revised loan tenure along with total interest
            saved and updated repayment figures.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            6. Understand the Recommendation
          </h3>
          <p className="text-sm mt-1">
            Analyze the recommendation, loan closure timeline, and amortization
            impact to decide whether prepayment makes financial sense for you.
          </p>
        </div>

      </div>
    </section>
  );
}
