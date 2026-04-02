import { useState } from "react";

export default function Step2({ formData, setFormData, setStep }) {
  const [income, setIncome] = useState(formData.income);
  const [emis, setEmis] = useState(formData.emis);
  const [loan, setLoan] = useState(formData.loan);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (income < 10000)
      newErrors.income = "Minimum income is ₹10,000";
    if (emis < 0)
      newErrors.emis = "EMI cannot be negative";
    if (loan < 500000)
      newErrors.loan = "Minimum loan amount is ₹5,00,000";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    setFormData({
      ...formData,
      income,
      emis,
      loan,
    });

    setStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Smart Profile Setup
        </h1>
        <p className="text-slate-500">
          We auto-fetch details to save your time.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center w-full mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white">
          ✓
        </div>
        <div className="flex-1 h-1 mx-2 bg-gray-600 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold ring-4 ring-brand-100">
          2
        </div>
        <div className="flex-1 h-1 mx-2 bg-slate-200 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-500 font-bold">
          3
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-8">

          {/* Income */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">
                Net Monthly Income
              </label>
              <div className="flex items-center border rounded-lg px-3 py-1.5 w-32">
                ₹
                <input
                  type="number"
                  className="w-full text-right font-semibold outline-none text-sm"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                />
              </div>
            </div>

            <input
              type="range"
              min={10000}
              max={500000}
              step={1000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-brand-600"
            />

            <div className="flex justify-between text-xs text-slate-400">
              <span>₹10,000</span>
              <span>₹5,00,000+</span>
            </div>

            {errors.income && (
              <p className="text-xs text-red-500">{errors.income}</p>
            )}
          </div>

          {/* EMI */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">
                Existing Total EMIs
              </label>
              <div className="flex items-center border rounded-lg px-3 py-1.5 w-32">
                ₹
                <input
                  type="number"
                  className="w-full text-right font-semibold outline-none text-sm"
                  value={emis}
                  onChange={(e) => setEmis(Number(e.target.value))}
                />
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={200000}
              step={500}
              value={emis}
              onChange={(e) => setEmis(Number(e.target.value))}
              className="w-full accent-brand-600"
            />

            <div className="flex justify-between text-xs text-slate-400">
              <span>₹0</span>
              <span>₹2,00,000+</span>
            </div>

            {errors.emis && (
              <p className="text-xs text-red-500">{errors.emis}</p>
            )}
          </div>

          {/* Loan */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">
                Loan Amount Required
              </label>
              <div className="flex items-center border rounded-lg px-3 py-1.5 w-32">
                ₹
                <input
                  type="number"
                  className="w-full text-right font-semibold outline-none text-sm"
                  value={loan}
                  onChange={(e) => setLoan(Number(e.target.value))}
                />
              </div>
            </div>

            <input
              type="range"
              min={500000}
              max={10000000}
              step={50000}
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
              className="w-full accent-brand-600"
            />

            <div className="flex justify-between text-xs text-slate-400">
              <span>₹5,00,000</span>
              <span>₹1,00,00,000+</span>
            </div>

            {errors.loan && (
              <p className="text-xs text-red-500">{errors.loan}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => setStep(1)}
              className="flex-1 px-4 py-3 rounded-lg border text-slate-600 hover:border-brand-500"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-600 hover:bg-brand-700 text-white font-semibold shadow-lg"
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
