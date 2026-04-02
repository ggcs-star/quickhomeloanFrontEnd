import React from "react";

export default function HowThisCalculatorWorksMath() {
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
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          How This Calculator Works — The Math
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <p>Let:</p>

        {/* Variable Definitions */}
        <ul className="list-none bg-gray-50 p-4 rounded-md border border-gray-200 text-sm font-mono space-y-1">
          <li>
            <strong>PV</strong> = Investment Amount
          </li>
          <li>
            <strong>r</strong> = Annual return rate (decimal)
          </li>
          <li>
            <strong>t</strong> = Tax rate (decimal)
          </li>
          <li>
            <strong>i</strong> = Inflation (decimal)
          </li>
          <li>
            <strong>n</strong> = Years invested
          </li>
        </ul>

        {/* Formula Steps */}
        <div className="mt-4 space-y-4">
          <p>
            <strong>1. Effective after-tax annual return:</strong>
            <br />
            <code className="text-sm">
              r_after = r × (1 – t)
            </code>
          </p>

          <p>
            <strong>2. Future value after tax:</strong>
            <br />
            <code className="text-sm">
              FV = PV × (1 + r_after)ⁿ
            </code>
          </p>

          <p>
            <strong>3. Real future value:</strong>
            <br />
            <code className="text-sm">
              FV_real = FV ÷ (1 + i)ⁿ
            </code>
          </p>

          <p>
            <strong>4. Real rate of return:</strong>
            <br />
            <code className="text-sm">
              real = ((1 + r_after) / (1 + i)) – 1
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
