import React from "react";

const WhatThisCalculatorDoes = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Estimates the maximum loan amount you can qualify for based on your
            financial profile.
          </li>
          <li>
            Uses the standard FOIR (Fixed Obligation to Income Ratio) method that
            banks and NBFCs use.
          </li>
          <li>
            Helps you understand your safe borrowing limit to plan your finances
            better.
          </li>
          <li>
            Provides an instant eligibility check for home loans, car loans, and
            personal loans.
          </li>
          <li>
            Allows you to test different scenarios by changing tenure and
            interest rates.
          </li>
          <li>
            Empowers you to check loan eligibility before you formally apply
            with a lender.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatThisCalculatorDoes;
