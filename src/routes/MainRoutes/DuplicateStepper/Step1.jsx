import { useState } from "react";
import axios from "axios";

export default function Step1({ formData, setFormData, setStep, token }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const BASE_URL = "https://backend.quickhomeloan.in/public/api/loan/submit-form";

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.pan)
      newErrors.pan = "PAN number is required";
    else if (!panRegex.test(formData.pan))
      newErrors.pan = "Invalid PAN format (ABCDE1234F)";

    if (!formData.name)
      newErrors.name = "Full name is required";

    if (!formData.dob)
      newErrors.dob = "Date of birth is required";

    if (!formData.city)
      newErrors.city = "City is required";

    if (!formData.employment)
      newErrors.employment = "Employment type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = async () => {
    if (!validate()) return;
    
    setIsSubmitting(true);
    setApiResponse(null);

    const payload = {
      step: 1,
      pan: formData.pan,
      full_name: formData.name,
      dob: formData.dob,
      city: formData.city,
      employment_type: formData.employment,
    };

    console.log("▶ STEP 1 Payload:", payload);

    try {
      const res = await axios.post(BASE_URL, payload, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log("✅ STEP 1 RESPONSE:", res.data);
      setApiResponse({ success: true, data: res.data });
      
      // Auto move to next step after 1 second
      setTimeout(() => {
        setStep(2);
      }, 1000);
    } catch (err) {
      console.error("❌ STEP 1 API ERROR:", err.response?.data || err);
      const errorMessage = err.response?.data?.message || "Failed to submit Step 1";
      setApiResponse({ success: false, error: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Smart Profile Setup
        </h1>
        <p className="text-slate-500">
          Your progress is saved automatically. Continue from any device.
        </p>
      </div>

      {/* API Response Display */}
      {apiResponse && (
        <div className={`mb-4 p-3 rounded-lg ${apiResponse.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`text-sm ${apiResponse.success ? 'text-green-700' : 'text-red-700'}`}>
            {apiResponse.success ? '✓ Step 1 completed successfully! Moving to next step...' : `✗ Error: ${apiResponse.error}`}
          </p>
        </div>
      )}

      {/* Stepper */}
      <div className="flex items-center w-full mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold ring-4 ring-brand-100">
          1
        </div>
        <div className="flex-1 h-1 mx-2 bg-slate-200 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-500 font-bold">
          2
        </div>
        <div className="flex-1 h-1 mx-2 bg-slate-200 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-500 font-bold">
          3
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-6">
          {/* PAN */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              PAN Number
            </label>
            <input
              type="text"
              placeholder="ABCDE1234F"
              maxLength={10}
              className="w-full px-4 py-3 rounded-lg border uppercase font-mono tracking-wide focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.pan}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pan: e.target.value.toUpperCase(),
                })
              }
            />
            {errors.pan && (
              <p className="text-xs text-red-500 mt-1">
                {errors.pan}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* DOB + City */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 outline-none"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dob: e.target.value,
                  })
                }
              />
              {errors.dob && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.dob}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                City
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
              {errors.city && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.city}
                </p>
              )}
            </div>
          </div>

          {/* Employment */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Employment Type
            </label>
            <select
              className="w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.employment}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  employment: e.target.value,
                })
              }
            >
              <option value="">Select Employment Type</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Business">Business</option>
            </select>
            {errors.employment && (
              <p className="text-xs text-red-500 mt-1">
                {errors.employment}
              </p>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={nextStep}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Next Step →"}
          </button>
        </div>
      </div>
    </div>
  );
}