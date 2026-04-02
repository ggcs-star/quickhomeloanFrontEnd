// Step1.js
import { useState } from "react";
import axios from "axios";

export default function Step1({ formData, setFormData, setStep, token }) {
  const [errors, setErrors] = useState({});
  const BASE_URL = "https://backend.quickhomeloan.in/public/api/loan/submit-form";

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  const validate = () => {
    let newErrors = {};

    if (!formData.pan.trim()) newErrors.pan = "PAN number is required.";
    else if (!panRegex.test(formData.pan.toUpperCase()))
      newErrors.pan = "Enter a valid PAN (ABCDE1234F).";

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.employment) newErrors.employment = "Employment type is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = async () => {
    if (!validate()) return;

    const payload = {
      step: 1,
      pan: formData.pan,
      full_name: formData.name,
      dob: formData.dob,
      city: formData.city,
      employment_type: formData.employment,
    };

    console.log("▶ STEP 1 Payload:", payload);
    console.log("🔑 TOKEN:", token);

    try {
      const res = await axios.post(BASE_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("✅ STEP 1 RESPONSE:", res.data);

      // ⭐ Save Application ID returned from backend
      if (res.data.application_id) {
        localStorage.setItem("application_id", res.data.application_id);
      }

      // Move to next step
      setStep(2);

    } catch (err) {
      console.error("❌ STEP 1 API ERROR:", err.response?.data || err);
      alert(err.response?.data?.message || "Failed to submit Step 1");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20">
      {/* <h1 className="text-3xl font-bold text-black">Smart Profile Setup</h1>
      <p className="text-gray-600 mt-1">We auto-fetch details to save your time.</p> */}

      {/* Step Indicators */}
      <div className="flex items-center justify-center mt-8 mb-10 space-x-6">
        <div className="h-10 w-10 flex items-center justify-center bg-neutral-800 text-white rounded-full">1</div>
        <div className="h-1 w-28 bg-gray-300"></div>
        <div className="h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">2</div>
        <div className="h-1 w-28 bg-gray-300"></div>
        <div className="h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">3</div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-neutral-300">

        <label>PAN Number</label>
        <input
          type="text"
          placeholder="ABCDE1234F"
          value={formData.pan}
          onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
          className="w-full border border-neutral-300 p-3 rounded-md"
        />
        {errors.pan && <p className="text-red-500">{errors.pan}</p>}

        <label className="mt-4 block">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-neutral-300 p-3 rounded-md"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <label className="mt-4 block">Date of Birth</label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          className="w-full border border-neutral-300 p-3 rounded-md"
        />
        {errors.dob && <p className="text-red-500">{errors.dob}</p>}

        <label className="mt-4 block">City</label>
        <select
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full border border-neutral-300 p-3 rounded-md"
        >
          <option value="">Select</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Pune</option>
        </select>
        {errors.city && <p className="text-red-500">{errors.city}</p>}

        <label className="mt-4 block">Employment Type</label>
        <select
          value={formData.employment}
          onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
          className="w-full border border-neutral-300 p-3 rounded-md"
        >
          <option value="">Select</option>
          <option>Salaried</option>
          <option>Self Employed</option>
          <option>Business Owner</option>
        </select>
        {errors.employment && <p className="text-red-500">{errors.employment}</p>}

        <button onClick={nextStep} className="w-full mt-6 bg-neutral-800 text-white p-3 rounded-md">
          Next Step →
        </button>
      </div>
    </div>
  );
}
