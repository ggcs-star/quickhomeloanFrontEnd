import React from "react";

const ExampleScenariosWithCalculations = () => {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 my-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Example Scenarios with Full Calculations
      </h3>

      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          The calculator transforms the EMI formula to find{" "}
          <code className="bg-gray-100 border border-gray-200 rounded px-1 text-sm font-mono">
            n
          </code>{" "}
          (number of months):
        </p>

        <pre className="bg-gray-50 p-3 rounded-md text-center text-sm my-2 font-mono border border-gray-200">
          n = [ log( EMI / (EMI – P×r) ) ] / log(1+r)
        </pre>

        {/* ================= EXAMPLE A ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE A — EMI = ₹30,000, Loan = ₹35,00,000, Rate = 8.5%
          </h4>

          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 1:</span>
              <div className="flex-1 text-gray-600">
                Convert rate:{" "}
                <code className="text-xs font-mono">
                  r = 0.085 / 12 = 0.007083
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 2:</span>
              <div className="flex-1 text-gray-600">
                Calculate{" "}
                <code className="text-xs font-mono">EMI – P×r</code>:{" "}
                <code className="text-xs font-mono">
                  30,000 – (35,00,000 × 0.007083) = 5,209
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 3:</span>
              <div className="flex-1 text-gray-600">
                Apply logarithms:{" "}
                <code className="text-xs font-mono">
                  n = log(5.756) / log(1.007083) = 248.56 months
                </code>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 font-bold text-gray-800">
            <p className="text-center text-lg">→ 20 years &amp; 8 months</p>
            <p className="text-xs text-center font-normal text-gray-600 mt-1">
              Your loan will take 20 years and 8 months to repay with EMI ₹30,000.
            </p>
          </div>
        </div>

        {/* ================= EXAMPLE B ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE B — EMI = ₹15,000, Loan = ₹10,00,000, Rate = 13%
          </h4>

          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 1:</span>
              <div className="flex-1 text-gray-600">
                Convert rate:{" "}
                <code className="text-xs font-mono">
                  r = 0.13 / 12 = 0.010833
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 2:</span>
              <div className="flex-1 text-gray-600">
                Calculate{" "}
                <code className="text-xs font-mono">EMI – P×r</code>:{" "}
                <code className="text-xs font-mono">
                  15,000 – (10,00,000 × 0.010833) = 4,167
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 3:</span>
              <div className="flex-1 text-gray-600">
                Apply logarithms:{" "}
                <code className="text-xs font-mono">
                  n = log(3.60) / log(1.010833) = 119.06 months
                </code>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 font-bold text-gray-800">
            <p className="text-center text-lg">→ 9 years &amp; 11 months</p>
          </div>
        </div>

        {/* ================= EXAMPLE C ================= */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="font-semibold text-gray-800">
            EXAMPLE C — EMI = ₹20,000, Loan = ₹6,50,000, Rate = 9%
          </h4>

          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 1:</span>
              <div className="flex-1 text-gray-600">
                Convert rate:{" "}
                <code className="text-xs font-mono">
                  r = 0.09 / 12 = 0.0075
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 2:</span>
              <div className="flex-1 text-gray-600">
                Calculate{" "}
                <code className="text-xs font-mono">EMI – P×r</code>:{" "}
                <code className="text-xs font-mono">
                  20,000 – (6,50,000 × 0.0075) = 15,125
                </code>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-gray-600 font-bold mr-2">Step 3:</span>
              <div className="flex-1 text-gray-600">
                Apply logarithms:{" "}
                <code className="text-xs font-mono">
                  n = log(1.322) / log(1.0075) = 37.34 months
                </code>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 font-bold text-gray-800">
            <p className="text-center text-lg">→ 3 years &amp; 1 month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleScenariosWithCalculations;
