import React from "react";

export default function ImportantConsiderations() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Important Considerations
      </h2>

      {/* Cards */}
      <div className="space-y-4">
        {/* Risk Factors */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Risk Factors
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Mutual fund returns are market-linked and may fluctuate. If actual
            returns fall below expectations, your investment corpus may not
            sustain withdrawals throughout the loan tenure.
          </p>
        </div>

        {/* Tax Implications */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Tax Implications
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            SWP withdrawals can attract capital gains tax based on the fund
            type and holding period. Always evaluate post-tax returns before
            committing to this strategy.
          </p>
        </div>

        {/* Loan Eligibility */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Loan Eligibility
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            This comparison assumes loan approval at the stated interest rate.
            Final eligibility depends on income stability, credit score, and
            lender-specific policies.
          </p>
        </div>
      </div>
    </section>
  );
}
