import { useState } from "react";
import axios from "axios";

export default function Step2({ formData, setFormData, setStep, token }) {
  const [income, setIncome] = useState(formData.income);
  const [emis, setEmis] = useState(formData.emis);
  const [loan, setLoan] = useState(formData.loan);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const BASE_URL = "https://backend.quickhomeloan.in/public/api/loan/submit-form";

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

  const handleNext = async () => {
    if (!validate()) return;
    
    setIsSubmitting(true);
    setApiResponse(null);
    
    const payload = {
      step: 2,
      income: income,
      existing_emi: emis,
      loan_amount: loan,
    };

    console.log("▶ STEP 2 Payload:", payload);
    console.log("🔑 TOKEN exists:", !!token);

    try {
      const res = await axios.post(BASE_URL, payload, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log("✅ STEP 2 RESPONSE:", res.data);
      setApiResponse({ success: true, data: res.data });

      setFormData({
        ...formData,
        income,
        emis,
        loan,
      });

      // Auto move to next step after 1 second
      setTimeout(() => {
        setStep(3);
      }, 1000);
    } catch (err) {
      console.error("❌ STEP 2 API ERROR:", err.response?.data || err);
      const errorMessage = err.response?.data?.message || "Failed to submit Step 2";
      setApiResponse({ success: false, error: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Smart Profile Setup
        </h1>
        <p className="text-slate-500">
          We auto-fetch details to save your time. Your progress is automatically saved.
        </p>
      </div>

      {apiResponse && (
        <div className={`mb-4 p-3 rounded-lg ${apiResponse.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`text-sm ${apiResponse.success ? 'text-green-700' : 'text-red-700'}`}>
            {apiResponse.success ? '✓ Step 2 completed successfully! Moving to next step...' : `✗ Error: ${apiResponse.error}`}
          </p>
          {apiResponse.success && apiResponse.data.eligible_amount && (
            <p className="text-xs text-green-600 mt-1">
              Eligible Amount: ₹{apiResponse.data.eligible_amount.toLocaleString()}
              {apiResponse.data.interest_rate && ` at ${apiResponse.data.interest_rate}% interest`}
            </p>
          )}
        </div>
      )}

      <div className="flex items-center w-full mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white">✓</div>
        <div className="flex-1 h-1 mx-2 bg-gray-600 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold ring-4 ring-brand-100">2</div>
        <div className="flex-1 h-1 mx-2 bg-slate-200 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-500 font-bold">3</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-8">
          {/* Income */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">Net Monthly Income</label>
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
            {errors.income && <p className="text-xs text-red-500">{errors.income}</p>}
          </div>

          {/* EMI */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">Existing Total EMIs</label>
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
            {errors.emis && <p className="text-xs text-red-500">{errors.emis}</p>}
          </div>

          {/* Loan */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-700">Loan Amount Required</label>
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
            {errors.loan && <p className="text-xs text-red-500">{errors.loan}</p>}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-700">
              💾 Your progress is automatically saved. You can continue from any device using your account.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => setStep(1)}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-lg border text-slate-600 hover:border-brand-500 disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-600 hover:bg-brand-700 text-white font-semibold shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}