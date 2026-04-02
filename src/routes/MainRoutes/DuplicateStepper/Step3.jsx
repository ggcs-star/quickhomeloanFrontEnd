import { useState } from "react";

export default function Step3({ formData, setStep }) {
  const [propertyStage, setPropertyStage] = useState("Not Identified");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!propertyStage) {
      setError("Please select property stage");
      return;
    }

    const finalData = {
      ...formData,
      propertyStage,
    };

    console.log("✅ FINAL FORM DATA:", finalData);

    alert("🎉 Profile completed! Offers will be shown next.");
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

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white">
          ✓
        </div>
        <div className="flex-1 h-1 mx-2 bg-gray-600 rounded" />

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white ring-4 ring-brand-100 font-bold">
          3
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-6">

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              🏠
            </div>
            <h2 className="text-lg font-semibold">
              Property Details
            </h2>
          </div>

          {/* Property Stage */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">
              Property Stage
            </label>
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

          {/* Summary */}
          <div className="p-4 bg-brand-50 rounded-lg border border-brand-100">
            <h3 className="font-semibold text-brand-900 mb-2">
              Summary
            </h3>
            <ul className="text-sm space-y-1 text-slate-700">
              <li className="flex justify-between">
                <span>Total Income:</span>
                <span className="font-medium">
                  ₹{formData.income.toLocaleString()}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Loan Req:</span>
                <span className="font-medium">
                  ₹{formData.loan.toLocaleString()}
                </span>
              </li>
              <li className="flex justify-between">
                <span>City:</span>
                <span className="font-medium">
                  {formData.city}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Identity:</span>
                <span className="font-medium text-green-600">
                  PAN Provided
                </span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold shadow-lg"
            >
              Get Offers
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
