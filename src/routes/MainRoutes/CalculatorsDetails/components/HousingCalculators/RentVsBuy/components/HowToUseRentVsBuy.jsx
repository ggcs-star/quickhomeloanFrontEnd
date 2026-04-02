import React from "react";

export default function HowToUseRentVsBuy() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        
        {/* Step 1 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Enter Buying Details
          </h3>
          <p className="text-sm mt-1">
            Input the property price, down payment, loan interest rate, and loan
            tenure. The calculator will automatically compute your monthly EMI.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Enter Renting Details
          </h3>
          <p className="text-sm mt-1">
            Provide the current monthly rent for a comparable property you would
            choose if you decided to rent instead of buying.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Set Economic Assumptions
          </h3>
          <p className="text-sm mt-1">
            Define expected growth rates for property value, rent increase, and
            investment returns. Also include maintenance costs and inflation.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Choose Comparison Period
          </h3>
          <p className="text-sm mt-1">
            Select the long-term duration for comparison based on how many years
            you plan to stay in the property.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. Analyze the Results
          </h3>
          <p className="text-sm mt-1">
            Review the net worth difference between renting and buying to see
            which option is financially better over the selected time horizon.
          </p>
        </div>

      </div>
    </section>
  );
}
