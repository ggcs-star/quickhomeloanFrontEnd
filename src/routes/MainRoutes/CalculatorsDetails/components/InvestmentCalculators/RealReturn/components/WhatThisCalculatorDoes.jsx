import React from "react";

export default function WhatThisCalculatorDoes() {
  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          What This Calculator Does
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <p>
          This calculator reveals the real worth of your investment after
          adjusting for two major wealth-killers: taxes and inflation. It
          converts your nominal return into a real, after-tax rate and shows
          you the true future value of your money in today’s rupees.
        </p>

        {/* Point 1 */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800">
            1. Taxes Reduce Your Effective Returns
          </h4>
          <p className="text-sm">
            Your advertised return rate isn't what you keep. Taxes take a
            slice of your gains, reducing your actual compounded growth.
          </p>
          <p className="text-sm mt-1 text-gray-500">
            <strong>Example:</strong> A 12% return with a 15% tax rate is
            actually a 10.20% return. This small difference compounds into a
            large gap over time.
          </p>
        </div>

        {/* Point 2 */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800">
            2. Inflation Reduces Your Purchasing Power
          </h4>
          <p className="text-sm">
            Inflation means the same rupee buys you less in the future. Your
            "profits" might not even keep up with the rising cost of living.
          </p>
          <p className="text-sm mt-1 text-gray-500">
            <strong>Example:</strong> Earning 7% while inflation is 6% means
            your purchasing power is only growing by about 1%, not the full
            7%.
          </p>
        </div>
      </div>
    </section>
  );
}
