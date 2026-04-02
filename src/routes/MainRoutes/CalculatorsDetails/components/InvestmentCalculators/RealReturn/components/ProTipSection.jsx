import React from "react";

export default function ProTipSection() {
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
          Pro Tip
        </h2>
      </div>

      {/* Tip Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg">
          <p className="font-semibold text-gray-800">
            If your real rate of return is below 0%, your investment may look
            profitable on paper, but your purchasing power is actually
            shrinking.
          </p>
          <p className="mt-2 text-gray-700">
            Always plan your long-term investments based on real returns to
            ensure you are truly growing your wealth.
          </p>
        </div>
      </div>
    </section>
  );
}
