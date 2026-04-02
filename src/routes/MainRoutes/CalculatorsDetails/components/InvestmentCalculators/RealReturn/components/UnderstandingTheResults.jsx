import React from "react";

export default function UnderstandingTheResults() {
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
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          Understanding the Results
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <ul className="space-y-4">
          <li>
            <strong className="text-gray-800">
              Future Value (After Tax):
            </strong>{" "}
            This is your investment amount compounded at your after-tax return
            rate. It's the absolute amount of money you will have.
          </li>

          <li>
            <strong className="text-gray-800">
              Real Future Value:
            </strong>{" "}
            This is the most crucial number. It shows what your future investment
            is worth in today’s rupees by adjusting for inflation. This reflects
            your true gain in purchasing power.
          </li>

          <li>
            <strong className="text-gray-800">
              Real Rate of Return:
            </strong>{" "}
            This is your true profit rate after removing the effects of both tax
            and inflation. It's the most accurate measure of your investment's
            performance.
          </li>

          <li>
            <strong className="text-gray-800">
              After-tax Nominal Rate:
            </strong>{" "}
            This is your annual earning rate after paying taxes, but before
            considering inflation's impact.
          </li>
        </ul>
      </div>
    </section>
  );
}
