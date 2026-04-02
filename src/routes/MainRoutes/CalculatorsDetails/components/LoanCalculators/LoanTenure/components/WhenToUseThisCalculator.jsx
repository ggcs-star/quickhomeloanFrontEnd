import React from "react";

const WhenToUseThisCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-200">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      {/* List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-gray-600 leading-relaxed">
        <li>Check how long your chosen EMI will take to finish a loan</li>
        <li>Decide whether to increase or decrease EMI</li>
        <li>Compare multiple EMI options for the same loan</li>
        <li>Understand total repayment time before applying for a loan</li>
        <li>Plan early repayments or prepayments</li>
        <li>Recalculate tenure when interest rates change</li>
        <li>Check remaining tenure of a partially repaid loan</li>
        <li>Decide whether to refinance or balance transfer</li>
      </ul>
    </section>
  );
};

export default WhenToUseThisCalculator;
