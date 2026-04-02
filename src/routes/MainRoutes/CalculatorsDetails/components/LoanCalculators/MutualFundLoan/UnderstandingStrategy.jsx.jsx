import React from "react";

export default function UnderstandingStrategy() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Strategy
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>What is SWP?</strong> A Systematic Withdrawal Plan (SWP)
              allows you to withdraw a fixed amount from your mutual fund
              investment at regular intervals instead of redeeming it fully.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>How This Strategy Works</strong> – You take a loan for a
              major expense and use SWP withdrawals to pay the EMIs, while the
              remaining investment continues to compound.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>When This Makes Sense</strong> – This approach is effective
              when your mutual fund’s expected post-tax return is higher than
              the loan interest rate, resulting in a positive return spread.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
