import React from "react";

const HowToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        {/* Step 1 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            1. Enter Monthly Income
          </h3>
          <p className="text-sm mt-1">
            Enter your net take-home salary in the <strong>Monthly Income</strong> field.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Add Existing EMIs
          </h3>
          <p className="text-sm mt-1">
            Input the total of all your current monthly EMIs such as existing loans
            or credit card payments.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Adjust Interest Rate & Tenure
          </h3>
          <p className="text-sm mt-1">
            Modify the <strong>Interest Rate</strong> and <strong>Loan Tenure</strong>
            values to match the loan offer you are considering.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Select Loan Type
          </h3>
          <p className="text-sm mt-1">
            Choose the type of loan you are interested in, such as Home, Car,
            or Personal loan.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            5. Calculate Eligibility
          </h3>
          <p className="text-sm mt-1">
            Click the <strong>Check Loan Eligibility</strong> button to calculate
            your results instantly.
          </p>
        </div>

        {/* Step 6 */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            6. Review Loan Amount
          </h3>
          <p className="text-sm mt-1">
            Review the maximum loan amount you are likely to be approved for
            based on your inputs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseCalculator;
