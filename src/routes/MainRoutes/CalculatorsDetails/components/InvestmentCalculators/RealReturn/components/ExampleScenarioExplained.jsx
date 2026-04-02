import React from "react";

export default function ExampleScenarioExplained() {
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
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5v4.875c0 .621-.504 1.125-1.125 1.125H6.125A1.125 1.125 0 015 19.375V14.5m14 0h-14"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          Example Scenario (Fully Explained)
        </h2>
      </div>

      {/* Content */}
      <div className="ml-14 text-gray-700 leading-relaxed space-y-4">
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <p className="mb-4">
            Let’s say you invest <strong>₹50,000</strong> today at{" "}
            <strong>12%</strong> annual return, with <strong>6%</strong>{" "}
            inflation, paying <strong>15%</strong> tax on gains over{" "}
            <strong>5</strong> years.
          </p>

          <div className="space-y-3 text-sm">
            <p>
              <strong>Step 1: After-tax annual nominal rate</strong>
              <br />
              <code className="text-xs">
                r_after = 12% × (1 – 15%) = 10.20%
              </code>
            </p>

            <p>
              <strong>Step 2: Calculate Future Value (after tax)</strong>
              <br />
              <code className="text-xs">
                FV = 50,000 × (1 + 10.20%)⁵ = ₹81,260.22
              </code>
            </p>

            <p>
              <strong>Step 3: Real Rate of Return</strong>
              <br />
              <code className="text-xs">
                real_rate = (1 + 10.20%) / (1 + 6%) – 1 = 3.96%
              </code>
            </p>

            <p>
              <strong>Step 4: Real Future Value (in today’s rupees)</strong>
              <br />
              <code className="text-xs">
                FV_real = 81,260.22 ÷ (1 + 6%)⁵ = ₹60,722.36
              </code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
