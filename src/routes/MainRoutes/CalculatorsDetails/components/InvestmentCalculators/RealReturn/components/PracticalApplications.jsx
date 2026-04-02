import React from "react";

export default function PracticalApplications() {
  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.455-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.455-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.455 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.455 2.456z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          Practical Applications
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <p>You can use this calculator to analyze:</p>

        <ul className="list-disc list-inside space-y-2">
          <li>FD vs. inflation comparison</li>
          <li>Debt mutual fund post-tax performance</li>
          <li>Equity SIP long-term inflation-beating capacity</li>
          <li>Retirement and education fund planning</li>
          <li>NPS or PPF real returns</li>
          <li>Real yield of bonds</li>
        </ul>

        <p>
          It is essential for all investors who want to measure wealth in real
          terms, not just nominal numbers.
        </p>
      </div>
    </section>
  );
}
