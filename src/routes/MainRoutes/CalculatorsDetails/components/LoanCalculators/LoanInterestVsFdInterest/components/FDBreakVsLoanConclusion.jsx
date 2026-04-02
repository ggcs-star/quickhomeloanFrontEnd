import React from "react";

const FDBreakVsLoanConclusion = () => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Conclusion (Example Result)
      </h2>

      <div className="space-y-4 text-gray-600 prose prose-slate max-w-none">
        <p className="text-lg">
          <strong>Better Option → Take the Loan (Keep FD Intact)</strong>
        </p>

        <p>
          You save: ₹1,85,043.33 − ₹1,15,495.94 ={" "}
          <strong>₹69,547.39</strong>
        </p>
      </div>
    </section>
  );
};

export default FDBreakVsLoanConclusion;
