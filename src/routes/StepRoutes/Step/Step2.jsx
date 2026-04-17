// Step2.js
import { useState } from "react";
import axios from "axios";

export default function Step2({ formData, setFormData, setStep, token }) {
  const BASE_URL = "http://backend.quickhomeloan.in/public/api/loan/submit-form";

  const [income, setIncome] = useState(formData.income);
  const [emis, setEmis] = useState(formData.emis);
  const [loan, setLoan] = useState(formData.loan);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (income < 10000) newErrors.income = "Income must be at least ₹10,000.";
    if (emis < 0) newErrors.emis = "EMIs cannot be negative.";
    if (loan < 500000) newErrors.loan = "Minimum loan amount is ₹500,000.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validate()) return;

    const applicationId = localStorage.getItem("application_id");
    
    const payload = {
      step: 2,
      application_id: applicationId, // ⭐ Include application_id
      income,
      existing_emi: emis,
      loan_amount: loan,
    };

    console.log("▶ STEP 2 Payload:", payload);
    console.log("🔑 TOKEN:", token);

    try {
      const res = await axios.post(BASE_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("✅ STEP 2 RESPONSE:", res.data);

      // ⭐ Update formData with new values
      const updatedFormData = { ...formData, income, emis, loan };
      setFormData(updatedFormData);
      setStep(3);
    } catch (err) {
      console.error("❌ STEP 2 API ERROR:", err.response?.data || err);
      alert(err.response?.data?.message || "Failed to submit Step 2");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-black">Smart Setup</h1>
      <p className="text-gray-600 mt-1">We auto-fetch details to save your time.</p>

      <div className="flex items-center justify-center mt-8 mb-10 space-x-6">
        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">✓</div>
        <div className="h-1 w-28 bg-black"></div>
        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">2</div>
        <div className="h-1 w-28 bg-gray-300"></div>
        <div className="h-10 w-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">3</div>
      </div>

      <div className="bg-white p-8 rounded-2xl border shadow">
        <label>Net Monthly Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full border p-3 rounded-lg"
        />
        {errors.income && <p className="text-red-500">{errors.income}</p>}

        <label className="mt-4 block">Existing Total EMIs</label>
        <input
          type="number"
          value={emis}
          onChange={(e) => setEmis(Number(e.target.value))}
          className="w-full border p-3 rounded-lg"
        />
        {errors.emis && <p className="text-red-500">{errors.emis}</p>}

        <label className="mt-4 block">Loan Amount Required</label>
        <input
          type="number"
          value={loan}
          onChange={(e) => setLoan(Number(e.target.value))}
          className="w-full border p-3 rounded-lg"
        />
        {errors.loan && <p className="text-red-500">{errors.loan}</p>}

        <div className="flex justify-between mt-8">
          <button className="px-6 py-3 bg-gray-200 rounded-lg" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="px-8 py-3 bg-neutral-800 text-white rounded-lg" onClick={handleNext}>
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
}