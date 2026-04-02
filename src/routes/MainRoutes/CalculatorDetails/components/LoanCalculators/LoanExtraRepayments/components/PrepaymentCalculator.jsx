import React, { useState, useMemo } from "react"

export default function PrepaymentCalculator() {
  const [showResult, setShowResult] = useState(false)

  const [form, setForm] = useState({
    outstandingLoan: 3500000,
    currentEmi: 30000,
    interestRate: 8.5,
    remainingTenure: 240,
    prepaymentAmount: 200000,
    prepaymentType: "reduceTenure",
  })

  const handleChange = (key) => (e) =>
    setForm({ ...form, [key]: Number(e.target.value) })

  const formatINR = (n) =>
    `₹${Math.round(n).toLocaleString("en-IN")}`

  /* ---------------- CALCULATIONS ---------------- */

  const result = useMemo(() => {
    const P0 = form.outstandingLoan
    const prepay = Math.min(form.prepaymentAmount, P0 - 1)
    const P = P0 - prepay

    const r = form.interestRate / 12 / 100
    const n = form.remainingTenure
    const emi = form.currentEmi

    if (P <= 0 || r <= 0 || n <= 0 || emi <= 0) return null

    // Original interest
    const originalInterest = emi * n - P0

    // EMI formula
    const calcEmi = (p, months) =>
      (p * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1)

    /* ---------- REDUCE TENURE ---------- */
    let tenureMonths = n
    let tenureInterest = originalInterest

    // tenure formula valid ONLY if EMI > P × r
    if (emi > P * r) {
      const rawMonths =
        Math.log(emi / (emi - P * r)) / Math.log(1 + r)

      tenureMonths = Math.max(Math.ceil(rawMonths), 1)
      tenureInterest = emi * tenureMonths - P
    }

    /* ---------- REDUCE EMI ---------- */
    const newEmi = calcEmi(P, n)
    const emiInterest = newEmi * n - P

    return {
      originalInterest,

      tenure: {
        interestSaved: Math.max(originalInterest - tenureInterest, 0),
        newTenure: tenureMonths,
        interestPayable: tenureInterest,
      },

      emi: {
        interestSaved: Math.max(originalInterest - emiInterest, 0),
        newEmi,
        interestPayable: emiInterest,
      },
    }
  }, [form])

  const recommended =
    result &&
    result.tenure.interestSaved >= result.emi.interestSaved

  const yearsMonths = (m) => ({
    years: Math.floor(m / 12),
    months: m % 12,
  })

  /* ---------------- UI ---------------- */

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">

      {/* LEFT FORM */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              setShowResult(true)
            }}
          >
            <h2 className="text-xl font-semibold border-b pb-2">
              Enter Loan Details
            </h2>

            {[
              ["Outstanding Loan Amount", "outstandingLoan", "₹"],
              ["Current EMI", "currentEmi", "₹"],
              ["Annual Interest Rate (%)", "interestRate"],
              ["Remaining Tenure (months)", "remainingTenure"],
              ["Prepayment Amount", "prepaymentAmount", "₹"],
            ].map(([label, key, prefix]) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <div className="relative">
                  {prefix && (
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      {prefix}
                    </span>
                  )}
                  <input
                    type="number"
                    value={form[key]}
                    onChange={handleChange(key)}
                    className={`w-full px-4 py-2 border rounded-md ${
                      prefix ? "pl-7" : ""
                    }`}
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-2">
                Choose Prepayment Type
              </label>
              <div className="flex gap-4">
                {["reduceTenure", "reduceEmi"].map((v) => (
                  <label
                    key={v}
                    className="flex-1 p-3 border rounded-md cursor-pointer has-[:checked]:bg-gray-100"
                  >
                    <input
                      type="radio"
                      name="prepaymentType"
                      checked={form.prepaymentType === v}
                      onChange={() =>
                        setForm({ ...form, prepaymentType: v })
                      }
                      className="mr-2"
                    />
                    {v === "reduceTenure"
                      ? "Reduce Tenure"
                      : "Reduce EMI"}
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-gray-800 text-white py-3 rounded-lg">
              Calculate Prepayment Impact
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT RESULT */}
      <div className="lg:col-span-3">
        {!showResult || !result ? (
          <div className="bg-white rounded-xl border p-6 min-h-[400px] flex items-center justify-center text-gray-500">
            Your results will appear here
          </div>
        ) : (
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Prepayment Impact Analysis
            </h2>

            <div className="bg-gray-100 border-l-4 border-gray-800 p-4 mb-6">
              <strong>
                Recommendation:{" "}
                {recommended ? "Reduce Tenure" : "Reduce EMI"}
              </strong>
              <p className="text-sm mt-1">
                Additional interest saved:{" "}
                <span className="text-green-600 font-semibold">
                  {formatINR(
                    Math.abs(
                      result.tenure.interestSaved -
                        result.emi.interestSaved
                    )
                  )}
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Reduce Tenure */}
              <OptionCard
                title="Option 1: Reduce Tenure"
                recommended={recommended}
                interestSaved={result.tenure.interestSaved}
                rows={[
                  [
                    "New Tenure",
                    (() => {
                      const t = yearsMonths(result.tenure.newTenure)
                      return `${t.years}y ${t.months}m`
                    })(),
                  ],
                  ["New EMI", formatINR(form.currentEmi)],
                  [
                    "Total Interest",
                    formatINR(result.tenure.interestPayable),
                  ],
                ]}
              />

              {/* Reduce EMI */}
              <OptionCard
                title="Option 2: Reduce EMI"
                recommended={!recommended}
                interestSaved={result.emi.interestSaved}
                rows={[
                  ["New EMI", formatINR(result.emi.newEmi)],
                  ["Tenure", `${form.remainingTenure / 12} years`],
                  [
                    "Total Interest",
                    formatINR(result.emi.interestPayable),
                  ],
                ]}
              />
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
              <strong>Before Prepayment</strong>
              <div className="flex justify-between mt-2">
                <span>Total Interest</span>
                <span>{formatINR(result.originalInterest)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Original Tenure</span>
                <span>{form.remainingTenure / 12} years</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------------- OPTION CARD ---------------- */

const OptionCard = ({ title, interestSaved, rows, recommended }) => (
  <div
    className={`p-4 border rounded-lg ${
      recommended ? "ring-2 ring-gray-300 border-gray-800" : ""
    }`}
  >
    <h3 className="font-bold flex justify-between">
      {title}
      {recommended && (
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Recommended
        </span>
      )}
    </h3>

    <div className="mt-4 space-y-2 text-sm">
      <div className="flex justify-between">
        <span>Interest Saved</span>
        <span className="font-semibold text-green-600">
          ₹{Math.round(interestSaved).toLocaleString("en-IN")}
        </span>
      </div>

      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between">
          <span>{k}</span>
          <span className="font-semibold">{v}</span>
        </div>
      ))}
    </div>
  </div>
)
