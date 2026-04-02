import React from "react";

export default function UnderstandingTheResults() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Results
      </h2>

      {/* CONTENT */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Loan Option</strong> shows your monthly EMI, total interest
              paid, and overall cost if you take a loan while keeping your FD
              intact.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>FD Option</strong> displays the maturity value of your FD if
              untouched, and the opportunity cost of breaking it for the
              purchase.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Comparison Result</strong> provides a clear recommendation
              based on which option leaves you financially better off after the
              specified period.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
