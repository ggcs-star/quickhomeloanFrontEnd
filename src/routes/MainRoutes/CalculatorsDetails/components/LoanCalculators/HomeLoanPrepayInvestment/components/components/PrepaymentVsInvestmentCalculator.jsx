import React, { useState } from "react";

/* ---------------------------------------------
   HELPERS
--------------------------------------------- */
const formatINR = (v) =>
  `₹${Math.round(v).toLocaleString("en-IN")}`;

function calculateEMI(P, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (!r) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function PrepaymentVsInvestmentCalculator() {
  /* ---------------- INPUT STATE ---------------- */
  const [form, setForm] = useState({
    principal: 5000000,
    interestRate: 8.5,
    remainingTenureYears: 20,
    prepaymentAmount: 500000,
    investmentReturnRate: 12,
  });

  /* ---------------- RESULT STATE ---------------- */
  const [result, setResult] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: Number(e.target.value) });

  /* ---------------- CALCULATE ---------------- */
  const handleCalculate = () => {
    const P = form.principal;
    const n = form.remainingTenureYears * 12;

    const emi = calculateEMI(
      P,
      form.interestRate,
      form.remainingTenureYears
    );

    const originalInterest = emi * n - P;

    const newP = P - form.prepaymentAmount;
    const newEmi = calculateEMI(
      newP,
      form.interestRate,
      form.remainingTenureYears
    );
    const newInterest = newEmi * n - newP;

    const interestSaved = originalInterest - newInterest;

    const investmentFV =
      form.prepaymentAmount *
      Math.pow(
        1 + form.investmentReturnRate / 100,
        form.remainingTenureYears
      );

    const netAdvantage = investmentFV - interestSaved;

    setResult({
      interestSaved,
      investmentFV,
      netAdvantage,
      winner: netAdvantage >= 0 ? "INVESTMENT" : "PREPAYMENT",
    });

    setHasCalculated(true);
  };

  /* ---------------- RESET ---------------- */
  const handleReset = () => {
    setForm({
      principal: 5000000,
      interestRate: 8.5,
      remainingTenureYears: 20,
      prepaymentAmount: 500000,
      investmentReturnRate: 12,
    });
    setResult(null);
    setHasCalculated(false);
  };

  /* ---------------- DONUT LOGIC (MATCHING UI) ---------------- */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const progress =
    hasCalculated && result
      ? Math.min(
          Math.abs(result.netAdvantage) /
            Math.max(result.investmentFV, result.interestSaved),
          1
        )
      : 0;

  const dash = progress * circumference;

  return (
    <section className="bg-white p-6 rounded-2xl shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">
            Prepayment vs Investment Calculator
          </h2>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <InputField label="Outstanding Loan Amount (₹)" name="principal" value={form.principal} onChange={handleChange} />
            <InputField label="Loan Interest Rate (% p.a.)" name="interestRate" value={form.interestRate} onChange={handleChange} />
            <InputField label="Remaining Tenure (Years)" name="remainingTenureYears" value={form.remainingTenureYears} onChange={handleChange} />
            <InputField label="Prepayment Amount (₹)" name="prepaymentAmount" value={form.prepaymentAmount} onChange={handleChange} />
            <InputField label="Expected Investment Return (% p.a.)" name="investmentReturnRate" value={form.investmentReturnRate} onChange={handleChange} />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-gray-800 text-white font-bold py-3 rounded-lg"
            >
              Calculate & Compare
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-200 px-6 rounded-lg font-bold"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold mb-4">
            Financial Outcome
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
                    result.netAdvantage >= 0
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
                  Calculate <br /> Prepayment V/S Investment
                </span>
              ) : (
                <>
                  <span className="text-xs text-gray-500">
                    Net Advantage
                  </span>
                  <span className="text-2xl font-bold text-gray-800">
                    {formatINR(result.netAdvantage)}
                  </span>
                </>
              )}
            </div>
          </div>

          {!hasCalculated ? (
            <p className="text-gray-500 text-center">
              Results appear only after calculation
            </p>
          ) : (
            <>
              <div className="w-full space-y-3">
                <Stat label="Interest Saved (Prepayment)" value={formatINR(result.interestSaved)} />
                <Stat label="Investment Future Value" value={formatINR(result.investmentFV)} />
              </div>

              <div
                className={`mt-4 text-center font-semibold ${
                  result.netAdvantage >= 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {result.netAdvantage >= 0
                  ? "Investment strategy is better"
                  : "Prepayment is safer"}
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
function InputField({ label, name, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
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
