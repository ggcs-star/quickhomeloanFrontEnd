import React from "react";

export default function ProTips() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Tenure reduction saves 2x more interest than EMI reduction on
              average.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Prepay early in the loan for maximum benefit as more of your EMI
              goes to interest in the beginning.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Even a ₹50,000 prepayment early can save lakhs over the loan&apos;s
              lifetime.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Avoid prepaying at the end of the loan as the benefit becomes very
              small.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Combine prepayment with an annual part-payment for the fastest
              loan closure.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Always check your bank&apos;s prepayment terms and conditions.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
