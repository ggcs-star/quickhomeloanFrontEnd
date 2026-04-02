// components/CalculatorSection.js
import React from "react";

export default function CalculatorSection({
  inputs,
  onInputChange,
  formatCurrency,
  results,
  hasCalculated,        // 👈 UI STATE
  onCalculate,          // 👈 Calculate click handler
  onReset,              // 👈 Reset handler
}) {
  const { principal, loanRate, years } = inputs;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT PANEL ================= */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mutual Fund Loan vs SWP Calculator
          </h2>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <InputField
              label="Investment Amount (₹)"
              value={principal}
              note="Current value of your mutual fund investment"
              onChange={(v) => onInputChange("principal", v)}
            />

            <InputField
              label="Loan Interest Rate (% p.a.)"
              value={loanRate}
              note="Annual interest rate on your loan"
              step="0.1"
              onChange={(v) => onInputChange("loanRate", v)}
            />

            <InputField
              label="Loan Term (Years)"
              value={years}
              note="Duration of your loan in years"
              onChange={(v) => onInputChange("years", v)}
            />
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              type="button"
              onClick={onCalculate}
              className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              Calculate
            </button>

            <button
              type="button"
              onClick={onReset}
              className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Real Wealth Comparison
          </h3>

          {/* ================= DONUT ================= */}
          <div className="relative w-40 h-40 mb-4">
            <svg viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="14"
                fill="none"
              />

              {hasCalculated && (
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#374151"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray={`${circumference} ${circumference}`}
                  transform="rotate(-90 80 80)"
                  strokeLinecap="round"
                />
              )}
            </svg>

            {/* ================= CENTER TEXT ================= */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {!hasCalculated ? (
                <span className="text-gray-500 text-sm font-medium leading-snug">
                  Calculate<br />MF V/S<br />SWP
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">
                    Monthly EMI / SWP
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    {formatCurrency(results.emi)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* ================= BELOW TEXT ================= */}
          {!hasCalculated ? (
            <p className="text-sm text-gray-500">
              Results appear only after clicking Calculate
            </p>
          ) : (
            <>
              <div className="text-sm text-gray-600 mb-1">
                Required Mutual Fund Return Rate
              </div>
              <div className="text-xl font-bold text-gray-900">
                {results.requiredMFRate.toFixed(4)}% p.a.
              </div>
              <div className="text-xs text-gray-500 mt-1">
                (with monthly withdrawals)
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   INPUT FIELD
--------------------------------------------- */
function InputField({ label, value, onChange, note, step = 1 }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>

      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      {note && <p className="text-xs text-gray-500">{note}</p>}
    </div>
  );
}
