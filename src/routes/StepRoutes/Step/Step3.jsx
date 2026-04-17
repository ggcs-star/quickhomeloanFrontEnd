// Step3.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function Step3({ formData, setStep, token }) {
  const [propertyStage, setPropertyStage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const BASE_URL = "http://backend.quickhomeloan.in/public/api/loan/submit-form";

  // Debug mount
  useEffect(() => {
    console.log("✅ Step3 component mounted");
    console.log("🔑 Token exists:", !!token);
    console.log("📦 FormData:", formData);
  }, []);

  const handleSubmit = async () => {
    console.log("🚀 HANDLE SUBMIT CALLED - API will be called now");
    
    // Validation
    if (!propertyStage) {
      console.log("❌ No property stage selected");
      setErrors({ propertyStage: "Please select property stage." });
      return;
    }
    
    console.log("✅ Validation passed");
    setErrors({});
    setIsSubmitting(true);

    const applicationId = localStorage.getItem("application_id");
    
    const payload = {
      step: 3,
      application_id: applicationId,
      property_stage: propertyStage,
      // Include all data
      pan: formData.pan,
      full_name: formData.name,
      dob: formData.dob,
      city: formData.city,
      employment_type: formData.employment,
      income: formData.income,
      existing_emi: formData.emis,
      loan_amount: formData.loan,
    };

    console.log("📤 PAYLOAD:", JSON.stringify(payload, null, 2));

    // Method 1: Using fetch (most reliable)
    try {
      console.log("🌐 Calling API with FETCH...");
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      console.log("📡 Response status:", response.status);
      const data = await response.json();
      console.log("✅ Response data:", data);

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        // Optional: Clear storage or redirect
        // localStorage.clear();
        // window.location.href = "/success";
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct DOM button click as fallback
  const handleButtonClick = (e) => {
    console.log("🖱️ Button clicked (direct event)");
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* DEBUG PANEL - Shows if component is working */}
      <div className="mb-4 p-2 bg-blue-100 border border-blue-300 rounded text-xs">
        <p>✅ Step3 is loaded and working</p>
        <p>🔑 Token: {token ? "Present (" + token.substring(0, 20) + "...)" : "MISSING!"}</p>
        <p>📦 FormData: {formData ? "Present" : "Missing"}</p>
        <button 
          onClick={() => console.log("Debug click works")}
          className="mt-1 bg-blue-500 text-white px-2 py-1 rounded text-xs"
        >
          Test Console Log
        </button>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-center mt-24 mb-10 space-x-6">
        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">✓</div>
        <div className="h-1 w-28 bg-black"></div>
        <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">✓</div>
        <div className="h-1 w-28 bg-black"></div>
        <div className="h-10 w-10 bg-neutral-800 text-white rounded-full flex items-center justify-center">3</div>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 rounded-2xl border shadow">
        <h2 className="text-2xl font-bold mb-6">Final Step - Property Details</h2>
        
        <label className="block font-medium mb-2">Property Stage *</label>
        <select
          value={propertyStage}
          onChange={(e) => {
            console.log("Selected:", e.target.value);
            setPropertyStage(e.target.value);
            if (errors.propertyStage) setErrors({});
          }}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">-- Select Property Stage --</option>
          <option value="Not Identified">Not Identified</option>
          <option value="Identified">Identified</option>
          <option value="Under Construction">Under Construction</option>
          <option value="Ready to Move">Ready to Move</option>
        </select>
        {errors.propertyStage && (
          <p className="text-red-500 mt-2 text-sm">{errors.propertyStage}</p>
        )}

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Application Summary:</h3>
          <div className="text-sm space-y-1">
            <p><strong>PAN:</strong> {formData.pan || "Not provided"}</p>
            <p><strong>Name:</strong> {formData.name || "Not provided"}</p>
            <p><strong>Income:</strong> ₹{formData.income?.toLocaleString()}</p>
            <p><strong>Loan Required:</strong> ₹{formData.loan?.toLocaleString()}</p>
            <p><strong>Property Stage:</strong> {propertyStage || "Not selected"}</p>
          </div>
        </div>

        {/* MAIN BUTTON - Using multiple event handlers */}
        <button 
          onClick={handleButtonClick}
          onTouchStart={handleButtonClick}
          onMouseDown={handleButtonClick}
          disabled={isSubmitting}
          type="button"
          id="get-offers-button"
          style={{ 
            width: '100%', 
            marginTop: '2rem',
            padding: '0.75rem',
            backgroundColor: isSubmitting ? '#9CA3AF' : '#262626',
            color: 'white',
            borderRadius: '0.5rem',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            border: 'none',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#404040';
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#262626';
          }}
        >
          {isSubmitting ? "SUBMITTING..." : "GET OFFERS →"}
        </button>
        
        {/* Emergency test button */}
        <button
          onClick={() => {
            console.log("🚨 EMERGENCY TEST BUTTON CLICKED");
            alert("Emergency button works! Now check why main button doesn't work.");
          }}
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '0.5rem',
            backgroundColor: '#EF4444',
            color: 'white',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          🚨 EMERGENCY TEST BUTTON
        </button>
      </div>
    </div>
  );
}