import React, { useState } from "react";

/* ---------------------------------------------
   EMI HELPER
--------------------------------------------- */
function calculateEMI(P, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (!r) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

const formatINR = (v) =>
  `₹${Math.round(v).toLocaleString("en-IN")}`;

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function CalculatoSection() {
  /* ---------------- INPUT STATE ---------------- */
  const [inputs, setInputs] = useState({
    loanAmount: 500000,
    loanInterestRate: 8.5,
    investmentReturnRate: 6.5,
    inflationRate: 4,
    loanTerm: 10,
    loanType: "asset",
    assetGrowthRate: 6,
  });

  /* ---------------- RESULT STATE ---------------- */
  const [results, setResults] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  /* ---------------- HANDLERS ---------------- */
  const onInputChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalculate = () => {
    const {
      loanAmount,
      loanInterestRate,
      investmentReturnRate,
      inflationRate,
      loanTerm,
      assetGrowthRate,
    } = inputs;

    const emi = calculateEMI(
      loanAmount,
      loanInterestRate,
      loanTerm
    );

    const months = loanTerm * 12;
    const totalPaid = emi * months;
    const totalInterest = totalPaid - loanAmount;

    const fdMaturity =
      loanAmount *
      Math.pow(1 + investmentReturnRate / 100, loanTerm);

    const realFdValue =
      fdMaturity /
      Math.pow(1 + inflationRate / 100, loanTerm);

    const assetFutureValue =
      loanAmount *
      Math.pow(1 + assetGrowthRate / 100, loanTerm);

    const netAdvantage = assetFutureValue - realFdValue;

    setResults({
      emi,
      totalInterest,
      fdMaturity,
      realFdValue,
      assetFutureValue,
      netAdvantage,
      recommendation:
        netAdvantage > 0
          ? "Taking a loan and keeping FD invested is financially better"
          : "Using FD (avoiding loan) is financially safer",
    });

    setHasCalculated(true);
  };

  const handleReset = () => {
    setResults(null);
    setHasCalculated(false);
  };

  /* ---------------- DONUT ---------------- */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const progress =
    hasCalculated && results
      ? Math.min(
          Math.abs(results.netAdvantage) /
            Math.max(
              results.assetFutureValue,
              results.realFdValue
            ),
          1
        )
      : 0;

  const dash = progress * circumference;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT: INPUTS ================= */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Loan vs FD Calculator
          </h2>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <InputField
              label="Loan Amount (₹)"
              value={inputs.loanAmount}
              onChange={(v) =>
                onInputChange("loanAmount", v)
              }
            />
            <InputField
              label="Loan Interest Rate (% p.a.)"
              value={inputs.loanInterestRate}
              onChange={(v) =>
                onInputChange("loanInterestRate", v)
              }
            />
            <InputField
              label="FD / Investment Return (% p.a.)"
              value={inputs.investmentReturnRate}
              onChange={(v) =>
                onInputChange("investmentReturnRate", v)
              }
            />
            <InputField
              label="Inflation Rate (% p.a.)"
              value={inputs.inflationRate}
              onChange={(v) =>
                onInputChange("inflationRate", v)
              }
            />
            <InputField
              label="Loan Term (Years)"
              value={inputs.loanTerm}
              onChange={(v) =>
                onInputChange("loanTerm", v)
              }
            />

            {inputs.loanType === "asset" && (
              <InputField
                label="Asset Growth Rate (% p.a.)"
                value={inputs.assetGrowthRate}
                onChange={(v) =>
                  onInputChange("assetGrowthRate", v)
                }
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleCalculate}
              className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition shadow-lg"
            >
              Calculate & Compare
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ================= RIGHT: RESULTS ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Financial Outcome
          </h3>

          <div className="relative w-[180px] h-[180px] mb-6">
            <svg viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="20"
                fill="none"
              />
              {hasCalculated && results && (
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke={
                    results.netAdvantage >= 0
                      ? "#16a34a"
                      : "#374151"
                  }
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray={`${dash} ${circumference}`}
                  transform="rotate(-90 90 90)"
                  strokeLinecap="round"
                />
              )}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {!hasCalculated ? (
                <span className="text-gray-500 font-medium">
                  Calculate to see results
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">
                    Monthly EMI
                  </span>
                  <span className="text-2xl font-bold text-gray-800">
                    {formatINR(results.emi)}
                  </span>
                </>
              )}
            </div>
          </div>

          {!hasCalculated ? (
            <p className="text-gray-500 font-medium text-center">
              Results appear only after calculation
            </p>
          ) : (
            <>
              <div className="w-full space-y-3">
                <Stat
                  label="Total Loan Interest"
                  value={formatINR(results.totalInterest)}
                />
                <Stat
                  label="FD Maturity Value"
                  value={formatINR(results.fdMaturity)}
                />
                <Stat
                  label="FD Value (After Inflation)"
                  value={formatINR(results.realFdValue)}
                />
                <Stat
                  label="Asset Future Value"
                  value={formatINR(results.assetFutureValue)}
                />
                <Stat
                  label="Net Advantage"
                  value={
                    results.netAdvantage >= 0
                      ? `+${formatINR(results.netAdvantage)}`
                      : `-${formatINR(
                          Math.abs(results.netAdvantage)
                        )}`
                  }
                />
              </div>

              <div
                className={`mt-4 text-center font-semibold ${
                  results.netAdvantage >= 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {results.recommendation}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   UI PARTS
--------------------------------------------- */
function InputField({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value) || 0)
        }
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-bold text-gray-800">{value}</span>
    </div>
  );
}
