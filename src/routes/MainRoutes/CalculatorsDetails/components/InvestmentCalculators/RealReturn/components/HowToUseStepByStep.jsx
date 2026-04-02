import React from "react";

export default function HowToUseStepByStep() {
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          How to Use – Step by Step
        </h2>
      </div>

      {/* Steps */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter the initial investment amount (e.g., ₹50,000).</li>
          <li>Enter the expected annual return rate before tax (e.g., 12%).</li>
          <li>Enter the average annual inflation rate you expect (e.g., 6%).</li>
          <li>Enter the tax rate applicable to your investment gains (e.g., 15%).</li>
          <li>Enter your investment duration in years.</li>
          <li>The results are calculated instantly and displayed on the right.</li>
        </ol>
      </div>
    </section>
  );
}
