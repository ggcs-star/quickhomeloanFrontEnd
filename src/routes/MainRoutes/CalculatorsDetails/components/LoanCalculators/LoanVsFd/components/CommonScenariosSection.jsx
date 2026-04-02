import React from "react";

export default function CommonScenariosSection() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Common Scenarios
      </h2>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            When Breaking FD Usually Makes Sense
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            When loan interest rates are significantly higher than FD returns,
            and you have sufficient FD savings to cover the purchase without
            completely depleting your emergency fund.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            When Taking a Loan Is Better
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            When FD returns are competitive with loan rates, or when preserving
            liquidity is important for your financial situation.
          </p>
        </div>
      </div>
    </section>
  );
}
