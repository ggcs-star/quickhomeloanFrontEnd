import { useState } from "react";
import axios from "axios";

export default function Step3({ formData, setStep, token }) {
  const [propertyStage, setPropertyStage] = useState("Not Identified");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const BASE_URL = "https://backend.quickhomeloan.in/public/api/loan/submit-form";

  const handleSubmit = async () => {
    if (!propertyStage) {
      setError("Please select property stage");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setApiResponse(null);
    
    const payload = {
      step: 3,
      property_stage: propertyStage,
      pan: formData.pan,
      full_name: formData.name,
      dob: formData.dob,
      city: formData.city,
      employment_type: formData.employment,
      income: formData.income,
      existing_emi: formData.emis,
      loan_amount: formData.loan,
    };

    console.log("▶ STEP 3 FINAL SUBMISSION Payload:", payload);
    console.log("🔑 TOKEN exists:", !!token);

    try {
      const response = await axios.post(BASE_URL, payload, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log("✅ FINAL SUBMISSION RESPONSE:", response.data);
      
      setApiResponse({ success: true, data: response.data });
      
    } catch (err) {
      console.error("❌ FINAL SUBMISSION ERROR:", err.response?.data || err);
      const errorMessage = err.response?.data?.message || "Failed to submit application";
      setApiResponse({ success: false, error: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartNew = () => {
    localStorage.removeItem("loan_step");
    localStorage.removeItem("loan_form");
    window.location.href = window.location.pathname;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Smart Profile Setup
        </h1>
        <p className="text-slate-500">
          Complete your application to get the best offers.
        </p>
      </div>

      {apiResponse && (
        <div className={`mb-4 p-4 rounded-lg ${apiResponse.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start gap-2">
            <div className="text-lg">{apiResponse.success ? '✅' : '❌'}</div>
            <div className="flex-1">
              <p className={`font-semibold ${apiResponse.success ? 'text-green-800' : 'text-red-800'}`}>
                {apiResponse.success ? 'Application Submitted Successfully!' : 'Submission Failed'}
              </p>
              <p className={`text-sm mt-1 ${apiResponse.success ? 'text-green-600' : 'text-red-600'}`}>
                {apiResponse.success 
                  ? `Application ID: ${apiResponse.data.application_id || 'Generated'}`
                  : apiResponse.error
                }
              </p>
              {apiResponse.success && apiResponse.data.eligible_amount && (
                <p className="text-sm text-green-600 mt-1">
                  Eligible Amount: ₹{apiResponse.data.eligible_amount.toLocaleString()}
                  {apiResponse.data.interest_rate && ` at ${apiResponse.data.interest_rate}% interest`}
                </p>
              )}
              {apiResponse.success && apiResponse.data.offers && apiResponse.data.offers.length > 0 && (
                <p className="text-sm text-green-600 mt-1">
                  📊 {apiResponse.data.offers.length} offer(s) received! Our team will contact you shortly.
                </p>
              )}
              {apiResponse.success && (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleStartNew}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700"
                  >
                    Start New Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center w-full mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white">✓</div>
        <div className="flex-1 h-1 mx-2 bg-gray-600 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white">✓</div>
        <div className="flex-1 h-1 mx-2 bg-gray-600 rounded" />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white ring-4 ring-brand-100 font-bold">3</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">🏠</div>
            <h2 className="text-lg font-semibold">Property Details</h2>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Property Stage</label>
            <select
              value={propertyStage}
              onChange={(e) => {
                setPropertyStage(e.target.value);
                setError("");
              }}
              className="px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none"
            >
              <option value="Not Identified">Not Identified</option>
              <option value="Identified">Identified / Finalized</option>
              <option value="Construction">Under Construction</option>
              <option value="Ready">Ready to Move</option>
            </select>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>

          <div className="p-4 bg-brand-50 rounded-lg border border-brand-100">
            <h3 className="font-semibold text-brand-900 mb-2">Application Summary</h3>
            <ul className="text-sm space-y-1 text-slate-700">
              <li className="flex justify-between"><span>PAN:</span><span className="font-medium font-mono">{formData.pan || "Not provided"}</span></li>
              <li className="flex justify-between"><span>Name:</span><span className="font-medium">{formData.name || "Not provided"}</span></li>
              <li className="flex justify-between"><span>Total Income:</span><span className="font-medium">₹{formData.income?.toLocaleString()}</span></li>
              <li className="flex justify-between"><span>Loan Required:</span><span className="font-medium">₹{formData.loan?.toLocaleString()}</span></li>
              <li className="flex justify-between"><span>City:</span><span className="font-medium">{formData.city}</span></li>
              <li className="flex justify-between"><span>Property Stage:</span><span className="font-medium">{propertyStage}</span></li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-green-700">🔒 Your application is secure and will be reviewed by our team. You'll receive offers shortly.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} disabled={isSubmitting} className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 text-slate-600 hover:border-brand-500 disabled:opacity-50">Back</button>
            <button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 px-4 py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold shadow-lg disabled:opacity-50">
              {isSubmitting ? "Submitting..." : "Get Offers"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}