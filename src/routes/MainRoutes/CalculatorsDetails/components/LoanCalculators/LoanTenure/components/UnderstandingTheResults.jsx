import React from "react";

const UnderstandingTheResults = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Results
      </h2>

      <div className="text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-green-600">✓</span>
            <span>
              <strong>Total Number of Months:</strong> The exact repayment
              duration.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-green-600">✓</span>
            <span>
              <strong>Total Number of Years:</strong> Months converted into years
              and remaining months.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-green-600">✓</span>
            <span>
              <strong>Total EMIs:</strong> The total number of installments you
              must pay.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-green-600">✓</span>
            <span>
              <strong>Total Interest Payable:</strong> The total cost of
              borrowing for the chosen EMI.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-green-600">✓</span>
            <span>
              <strong>Completion Date:</strong> The expected loan payoff date
              based on the current month.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UnderstandingTheResults;
