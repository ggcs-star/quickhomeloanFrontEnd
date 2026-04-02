import React, { useState } from "react";

/* -------------------------------
   HELPERS (UNCHANGED)
-------------------------------- */
const formatCurrency = (num) =>
  num ? `₹${Math.round(num).toLocaleString("en-IN")}` : "₹0";

const getFoirLimit = (income) => {
  if (income <= 30000) return 0.4;
  if (income <= 60000) return 0.5;
  return 0.6;
};

const calculateLoanFromEmi = (emi, annualRate, years) => {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return emi * n;
  return (emi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
};

/* -------------------------------
   MAIN COMPONENT
-------------------------------- */
export default function LoanEligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [existingEmis, setExistingEmis] = useState(10000);
  const [loanType, setLoanType] = useState("home");
  const [method, setMethod] = useState("foir");
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [assetValue, setAssetValue] = useState(4500000);
  const [ltvRatio, setLtvRatio] = useState(80);
  const [result, setResult] = useState(null);

  /* CALCULATE */
  const handleCalculate = () => {
    let eligibleEmi = 0;

    if (method === "foir") {
      eligibleEmi =
        monthlyIncome * getFoirLimit(monthlyIncome) -
        Number(existingEmis);
    } else {
      const multiplier =
        loanType === "home" ? 60 : loanType === "car" ? 36 : 24;

      setResult({
        eligibleLoan: monthlyIncome * multiplier,
        maxEmi: null,
        cappedLoan: null,
      });
      return;
    }

    if (eligibleEmi <= 0) {
      setResult({ error: "Existing EMIs are too high for eligibility." });
      return;
    }

    const loanFromIncome = calculateLoanFromEmi(
      eligibleEmi,
      interestRate,
      tenure
    );

    const ltvCap = (assetValue * ltvRatio) / 100;

    setResult({
      maxEmi: eligibleEmi,
      eligibleLoan: Math.min(loanFromIncome, ltvCap),
      cappedLoan: ltvCap,
    });
  };

  /* RESET */
  const handleReset = () => {
    setMonthlyIncome(80000);
    setExistingEmis(10000);
    setLoanType("home");
    setMethod("foir");
    setInterestRate(8.5);
    setTenure(20);
    setAssetValue(4500000);
    setLtvRatio(80);
    setResult(null);
  };

  /* DONUT */
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress =
    result && result.eligibleLoan && assetValue
      ? Math.min(result.eligibleLoan / assetValue, 1)
      : 0;
  const dash = progress * circumference;

  return (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl mx-auto my-8">
     

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3">

           <h2 className="text-2xl font-bold text-gray-900 text-start mb-6">
        Loan Eligibility Calculator
      </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
            <Input label="Net Monthly Income" value={monthlyIncome} onChange={setMonthlyIncome} prefix="₹" />
            <Input label="Existing EMIs" value={existingEmis} onChange={setExistingEmis} prefix="₹" />

            <Select
              label="Loan Type"
              value={loanType}
              onChange={setLoanType}
              options={[
                { v: "home", t: "Home Loan" },
                { v: "car", t: "Car Loan" },
                { v: "personal", t: "Personal Loan" },
              ]}
            />

            <Select
              label="Calculation Method"
              value={method}
              onChange={setMethod}
              options={[
                { v: "foir", t: "FOIR (Standard)" },
                { v: "multiplier", t: "Income Multiplier" },
              ]}
            />

            <Input label="Interest Rate (% p.a.)" value={interestRate} onChange={setInterestRate} suffix="%" />
            <Input label="Tenure (Years)" value={tenure} onChange={setTenure} suffix="Yrs" />
            <Input label="Property / Asset Value" value={assetValue} onChange={setAssetValue} prefix="₹" />
            <Input label="LTV Ratio (%)" value={ltvRatio} onChange={setLtvRatio} suffix="%" />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCalculate}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Check Loan Eligibility
            </button>

            <button
              onClick={handleReset}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Eligibility Overview
          </h3>

          {/* DONUT */}
          <div className="relative w-[160px] h-[160px] mb-6">
            <svg viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="18"
                fill="none"
              />
              {result && !result.error && (
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#374151"
                  strokeWidth="18"
                  fill="none"
                  strokeDasharray={`${dash} ${circumference}`}
                  transform="rotate(-90 80 80)"
                  strokeLinecap="round"
                />
              )}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {!result ? (
                <span className="text-sm text-gray-500 font-medium">
                  Calculate to view
                </span>
              ) : result.error ? (
                <span className="text-sm text-red-600 font-semibold">
                  Not Eligible
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">
                    Calculate Loan <br/> Eligibility
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    {formatCurrency(result.eligibleLoan)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* RESULTS */}
          {result && !result.error && (
            <div className="w-full space-y-3">
              {result.maxEmi && (
                <Stat label="Eligible EMI" value={formatCurrency(result.maxEmi)} />
              )}
              <Stat label="Eligible Loan Amount" value={formatCurrency(result.eligibleLoan)} />
              {result.cappedLoan && (
                <Stat label="LTV Cap Applied" value={formatCurrency(result.cappedLoan)} />
              )}
            </div>
          )}

          {result?.error && (
            <p className="text-red-600 font-semibold text-center mt-4">
              {result.error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------
   REUSABLE COMPONENTS
-------------------------------- */
function Input({ label, value, onChange, prefix, suffix }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-2.5 text-gray-400">
            {prefix}
          </span>
        )}
        {suffix && (
          <span className="absolute right-3 top-2.5 text-gray-400">
            {suffix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full rounded-lg border border-gray-300 bg-slate-50 py-2.5 px-3 focus:ring-2 focus:ring-gray-300 ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-8" : ""}`}
        />
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-slate-50 py-2.5 px-3 focus:ring-2 focus:ring-gray-300"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.t}
          </option>
        ))}
      </select>
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
