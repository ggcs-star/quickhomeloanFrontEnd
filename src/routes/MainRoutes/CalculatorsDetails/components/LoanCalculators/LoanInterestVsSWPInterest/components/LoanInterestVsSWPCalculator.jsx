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

/* ---------------------------------------------
   REQUIRED FD RATE (SWP LOGIC)
--------------------------------------------- */
function calculateRequiredFDRate(principal, emi, years) {
  const months = years * 12;
  let low = 0;
  let high = 0.5; // 50%
  let mid = 0;

  const balanceAfterSWP = (rate) => {
    let balance = principal;
    const r = rate / 12;
    for (let i = 0; i < months; i++) {
      balance *= 1 + r;
      balance -= emi;
    }
    return balance;
  };

  for (let i = 0; i < 100; i++) {
    mid = (low + high) / 2;
    const bal = balanceAfterSWP(mid);
    if (Math.abs(bal) < 0.00001) break;
    bal > 0 ? (low = mid) : (high = mid);
  }

  return mid * 100;
}

const formatCurrency = (v) =>
  `₹${Math.round(v).toLocaleString("en-IN")}`;

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function LoanInterestVsSWPCalculator() {
  /* ---------------- INPUT STATE ---------------- */
  const [principal, setPrincipal] = useState(100000);
  const [loanRate, setLoanRate] = useState(10);
  const [term, setTerm] = useState(10);

  /* ---------------- RESULT STATE ---------------- */
  const [results, setResults] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  /* ---------------- CALCULATE ---------------- */
  const handleCalculate = () => {
    const emi = calculateEMI(principal, loanRate, term);
    const fdRate = calculateRequiredFDRate(principal, emi, term);

    setResults({ emi, fdRate });
    setHasCalculated(true);
  };

  /* ---------------- RESET ---------------- */
  const handleReset = () => {
    setPrincipal(100000);
    setLoanRate(10);
    setTerm(10);
    setResults(null);
    setHasCalculated(false);
  };

  /* ---------------- DONUT LOGIC ---------------- */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const progress =
    hasCalculated && results
      ? Math.min(loanRate / results.fdRate, 1)
      : 0;

  const dash = progress * circumference;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Loan Interest vs SWP Interest Calculator
          </h2>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <InputField
              label="Principal Amount (₹)"
              value={principal}
              onChange={setPrincipal}
            />
            <InputField
              label="Loan Interest Rate (% p.a.)"
              value={loanRate}
              onChange={setLoanRate}
            />
            <InputField
              label="Loan Tenure (Years)"
              value={term}
              onChange={setTerm}
            />
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

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            SWP Feasibility
          </h3>

          {/* DONUT */}
          <div className="relative w-[180px] h-[180px] mb-6">
            <svg viewBox="0 0 180 180">
              {/* Base Ring */}
              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="20"
                fill="none"
              />

              {/* Progress Ring */}
              {hasCalculated && (
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke={
                    results.fdRate <= loanRate
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

            {/* CENTER TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {!hasCalculated ? (
                <span className="text-gray-500 font-medium">
                  Calculate Loan <br /> V/S SWP
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">
                    Monthly EMI / SWP
                  </span>
                  <span className="text-2xl font-bold text-gray-800">
                    {formatCurrency(results.emi)}
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
                  label="Monthly EMI / SWP"
                  value={formatCurrency(results.emi)}
                />
                <Stat
                  label="Required FD Interest Rate"
                  value={`${results.fdRate.toFixed(4)} %`}
                />
              </div>

              <div
                className={`mt-4 text-center font-semibold ${
                  results.fdRate <= loanRate
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {results.fdRate <= loanRate
                  ? "SWP strategy is feasible"
                  : "Breaking FD may be safer"}
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
function InputField({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}

/* ---------------------------------------------
   STAT
--------------------------------------------- */
function Stat({ label, value }) {
  return (
    <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-bold text-gray-800">{value}</span>
    </div>
  );
}
