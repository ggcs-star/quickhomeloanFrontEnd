import React from "react";

const WhenToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside">
          <li>
            When you receive a lump sum like a bonus, inheritance, or sale
            proceeds.
          </li>
          <li>
            When your loan interest rate feels high and you want to quantify the
            burden reduction.
          </li>
          <li>
            When you’re confused between guaranteed savings and volatile
            investment returns.
          </li>
          <li>
            When EMI payments are stressing your monthly cash flow.
          </li>
          <li>
            When you make annual or periodic prepayments to close the loan
            faster.
          </li>
          <li>
            When deciding between becoming debt-free or growing your investment
            portfolio.
          </li>
          <li>
            When you want to calculate the real financial impact including
            inflation.
          </li>
          <li>
            When evaluating the opportunity cost of using money for loan
            prepayment.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToUseCalculator;
