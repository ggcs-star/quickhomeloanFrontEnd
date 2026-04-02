import React from "react";

const ProTip = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      {/* CONTENT */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>
                Higher EMI at same loan amount = higher interest rate.
              </strong>{" "}
              Small increases in EMI can mean a big difference in the interest
              rate over the long term.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              If the calculator shows a high rate,{" "}
              <strong>consider switching to another lender.</strong>{" "}
              Use a balance transfer if your rate is above the current market
              average.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Check personal loan interest every 6–12 months</strong> —
              rates can drop, and refinancing could save you a significant
              amount of money.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProTip;
