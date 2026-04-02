import React from "react";

export default function PrepaymentVsInvestmentHeader() {
  return (
    <header className="text-center mb-10">
      <div className="flex justify-center items-center gap-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <line x1="3" y1="6" x2="3" y2="19" />
          <line x1="12" y1="6" x2="12" y2="19" />
          <line x1="21" y1="6" x2="21" y2="19" />
        </svg>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Home Loan Prepayment vs Investment Calculator
        </h1>
      </div>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        A powerful tool to help you decide whether to prepay your home loan or
        invest for long-term growth.
      </p>
    </header>
  );
}
