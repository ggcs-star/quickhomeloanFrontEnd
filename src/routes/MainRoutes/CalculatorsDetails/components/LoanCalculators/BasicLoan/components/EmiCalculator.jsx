import React, { useState } from "react";

/* ---------------------------------------------
   EMI CALCULATION HELPER
--------------------------------------------- */
function calculateEMI(P, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/* ---------------------------------------------
   LOAN PRESETS
--------------------------------------------- */
const LOAN_PRESETS = {
  "Home Buyer": { amount: 5000000, rate: 8.5, tenure: 20 },
  "Car Loan": { amount: 800000, rate: 9.5, tenure: 5 },
  "Personal Loan": { amount: 150000, rate: 13.5, tenure: 3 },
};

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function EmiCalculator() {
  const [loanType, setLoanType] = useState("Home Buyer");
  const [amount, setAmount] = useState(LOAN_PRESETS["Home Buyer"].amount);
  const [rate, setRate] = useState(LOAN_PRESETS["Home Buyer"].rate);
  const [tenure, setTenure] = useState(LOAN_PRESETS["Home Buyer"].tenure);

  const [emi, setEmi] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const months = tenure * 12;

  /* ---------------- LOAN TYPE CHANGE ---------------- */
  const handleLoanTypeChange = (type) => {
    const preset = LOAN_PRESETS[type];
    setLoanType(type);
    setAmount(preset.amount);
    setRate(preset.rate);
    setTenure(preset.tenure);
    setEmi(null);
    setHasCalculated(false);
  };

  /* ---------------- ACTIONS ---------------- */
  const handleCalculate = () => {
    setEmi(calculateEMI(Number(amount), Number(rate), Number(tenure)));
    setHasCalculated(true);
  };

  const handleReset = () => {
    handleLoanTypeChange("Home Buyer");
  };

  /* ---------------- DERIVED VALUES ---------------- */
  const totalPayment = hasCalculated ? emi * months : 0;
  const totalInterest = hasCalculated ? totalPayment - amount : 0;

  /* Donut math */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = totalPayment ? amount / totalPayment : 0;
  const dash = progress * circumference;

  const format = (v) => `₹${Math.round(v).toLocaleString("en-IN")}`;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3">

          {/* LOAN TYPE */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {Object.keys(LOAN_PRESETS).map((type) => (
                <button
                  key={type}
                  onClick={() => handleLoanTypeChange(type)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all
                    ${
                      loanType === type
                        ? "bg-gray-800 text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* INPUTS */}
          <div className="space-y-6 pt-6 border-t border-gray-200">
            <InputField
              label="Loan Amount (₹)"
              value={amount}
              onChange={setAmount}
            />

            <InputField
              label="Annual Interest Rate (%)"
              value={rate}
              onChange={setRate}
            />

            <InputField
              label="Loan Tenure (Years)"
              value={tenure}
              onChange={setTenure}
            />
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleCalculate}
              className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition shadow-lg"
            >
              Calculate EMI
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
            Loan Repayment Details
          </h3>

          {!hasCalculated ? (
            <div className="text-center text-gray-500">
              <div className="w-44 h-44 rounded-full bg-gray-200 border-4 border-gray-300 flex items-center justify-center">
                Calculate EMI
              </div>
              <p className="mt-4 font-medium">Repayment Breakdown</p>
            </div>
          ) : (
            <>
              {/* DONUT */}
              <div className="relative w-[180px] h-[180px] mb-6">
                <svg viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r={radius} stroke="#e5e7eb" strokeWidth="20" fill="none" />
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
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-gray-500">Monthly EMI</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {format(emi)}
                  </span>
                </div>
              </div>

              {/* STATS */}
              <div className="w-full space-y-3">
                <Stat label="Principal" value={format(amount)} />
                <Stat label="Total Interest" value={format(totalInterest)} />
                <Stat label="Total Payment" value={format(totalPayment)} />
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
   STATS
--------------------------------------------- */
function Stat({ label, value }) {
  return (
    <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-bold text-gray-800">{value}</span>
    </div>
  );
}
