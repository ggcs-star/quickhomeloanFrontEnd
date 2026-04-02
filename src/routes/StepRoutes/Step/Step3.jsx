// Step3.js
import { useState } from "react";
import axios from "axios";

export default function Step3({ formData, setStep, token }) {
  const [propertyStage, setPropertyStage] = useState("");
  const [errors, setErrors] = useState({});
  const BASE_URL = "https://backend.quickhomeloan.in/public/api/loan/submit-form";

  const handleSubmit = async () => {
    let err = {};
    if (!propertyStage) err.propertyStage = "Please select property stage.";
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    const payload = {
      step: 3,
      property_stage: propertyStage,
    };

    console.log("▶ STEP 3 Payload:", payload);
    console.log("🔑 TOKEN:", token);

    try {
      const res = await axios.post(BASE_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("✅ STEP 3 RESPONSE:", res.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("❌ STEP 3 API ERROR:", err.response?.data || err);
      alert("Failed Step 3 submission.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">

      {/* Step Indicators */}
      <div className="flex items-center justify-center mt-24 mb-10 space-x-6">
        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">
          <i className="fas fa-check"></i>
        </div>
        <div className="h-1 w-28 bg-black"></div>

        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">
          <i className="fas fa-check"></i>
        </div>
        <div className="h-1 w-28 bg-black"></div>

        <div className="h-10 w-10 bg-neutral-800 text-white rounded-full flex items-center justify-center">3</div>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 rounded-2xl border shadow">

        <label>Property Stage</label>
        <select
          value={propertyStage}
          onChange={(e) => setPropertyStage(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select</option>
          <option>Not Identified</option>
          <option>Identified</option>
          <option>Under Construction</option>
          <option>Ready to Move</option>
        </select>
        {errors.propertyStage && <p className="text-red-500">{errors.propertyStage}</p>}

        <button 
          className="w-full mt-8 bg-neutral-800 text-white py-3 rounded-lg"
          onClick={handleSubmit}
        >
          Get Offers →
        </button>
      </div>
    </div>
  );
}
