import React, { useState, useEffect } from "react";

/* ---------------------------------------------
   EMI HELPER
--------------------------------------------- */
function calculateEMI(P, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

const formatCurrency = (v) =>
  `₹${Math.round(v).toLocaleString("en-IN")}`;

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function FDBreakVsLoanCalculator() {
  /* ---------------- INPUT STATE ---------------- */
  const [principal, setPrincipal] = useState(500000);
  const [loanInterest, setLoanInterest] = useState(8.5);
  const [fdInterest, setFdInterest] = useState(6.5);
  const [term, setTerm] = useState(5);
  const [fdPenalty, setFdPenalty] = useState(0);
  const [fdTax, setFdTax] = useState(0);

  /* ---------------- RESULT STATE ---------------- */
  const [results, setResults] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  /* ---------------- CORE CALC ---------------- */
  const recalculate = () => {
    const emi = calculateEMI(principal, loanInterest, term);
    const months = term * 12;
    const totalPaid = emi * months;
    const totalLoanInterest = totalPaid - principal;

    const fdMaturity =
      principal * Math.pow(1 + fdInterest / 100, term);

    const fdInterestEarned = fdMaturity - principal;
    const penalty = (fdInterestEarned * fdPenalty) / 100;
    const tax = ((fdInterestEarned - penalty) * fdTax) / 100;

    const opportunityCost =
      fdInterestEarned - penalty - tax;

    const netAdvantage =
      opportunityCost - totalLoanInterest;

    setResults({
      emi,
      totalLoanInterest,
      fdMaturity,
      opportunityCost,
      netAdvantage,
      recommendation:
        netAdvantage > 0
          ? "Breaking FD is financially better"
          : "Taking a loan is financially better",
    });
  };

  /* ---------------- CALCULATE BUTTON ---------------- */
  const handleCalculate = () => {
    recalculate();
    setHasCalculated(true);
  };

  /* ---------------- AUTO UPDATE AFTER CALCULATE ---------------- */
  useEffect(() => {
    if (hasCalculated) {
      recalculate();
    }
  }, [
    principal,
    loanInterest,
    fdInterest,
    term,
    fdPenalty,
    fdTax,
    hasCalculated,
  ]);

  /* ---------------- RESET ---------------- */
  const handleReset = () => {
    setPrincipal(500000);
    setLoanInterest(8.5);
    setFdInterest(6.5);
    setTerm(5);
    setFdPenalty(0);
    setFdTax(0);
    setResults(null);
    setHasCalculated(false);
  };

  /* ---------------- DONUT ---------------- */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress =
    hasCalculated && results
      ? principal / (principal + Math.abs(results.netAdvantage))
      : 0;
  const dash = progress * circumference;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FD Break vs Loan Calculator
          </h2>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <InputField label="Principal Amount (₹)" value={principal} onChange={setPrincipal} />
            <InputField label="Loan Interest Rate (% p.a.)" value={loanInterest} onChange={setLoanInterest} />
            <InputField label="FD Interest Rate (% p.a.)" value={fdInterest} onChange={setFdInterest} />
            <InputField label="Loan / FD Term (Years)" value={term} onChange={setTerm} />
            <InputField label="FD Break Penalty (%)" value={fdPenalty} onChange={setFdPenalty} />
            <InputField label="Tax on FD Interest (%)" value={fdTax} onChange={setFdTax} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleCalculate}
              className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition shadow-lg"
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
            Cost Comparison
          </h3>

          <div className="relative w-[180px] h-[180px] mb-6">
            <svg viewBox="0 0 180 180">
              <circle cx="90" cy="90" r={radius} stroke="#e5e7eb" strokeWidth="20" fill="none" />
              {hasCalculated && (
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#374151"
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
                  Calculate FD Break <br /> V/S Loan
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">Monthly EMI</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {formatCurrency(results.emi)}
                  </span>
                </>
              )}
            </div>
          </div>

          {!hasCalculated ? (
            <p className="text-gray-500 font-medium">
              Results appear only after calculation
            </p>
          ) : (
            <>
              <div className="w-full space-y-3">
                <Stat label="Total Loan Interest" value={formatCurrency(results.totalLoanInterest)} />
                <Stat label="FD Maturity Value" value={formatCurrency(results.fdMaturity)} />
                <Stat label="FD Opportunity Cost" value={formatCurrency(results.opportunityCost)} />
                <Stat
                  label="Net Advantage"
                  value={
                    results.netAdvantage >= 0
                      ? `+${formatCurrency(results.netAdvantage)}`
                      : `-${formatCurrency(Math.abs(results.netAdvantage))}`
                  }
                />
              </div>

              <div
                className={`mt-4 text-center font-semibold ${
                  results.netAdvantage >= 0 ? "text-green-700" : "text-red-700"
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
   INPUT FIELD
--------------------------------------------- */
function InputField({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
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
