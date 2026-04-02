import React from "react";

export default function WhenToUseCalculator() {
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
              d="M12 21a9 9 0 110-18 9 9 0 010 18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 8.09l-3.82 3.82-3.82-3.82 3.82-3.82 3.82 3.82z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          When to Use This Calculator
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <p>
          Use this calculator whenever you want to get a true picture of your
          investment's potential. It's essential for:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Comparing FD returns against inflation.</li>
          <li>Checking if your SIP or lump-sum investment truly beats inflation.</li>
          <li>Knowing whether post-tax returns are positive in real terms.</li>
          <li>Analysing if long-term investments maintain purchasing power.</li>
          <li>Understanding the real yield of bonds, FDs, RDs, and various funds.</li>
          <li>Evaluating whether an investment is worth the risk after its tax impact.</li>
        </ul>
      </div>
    </section>
  );
}
