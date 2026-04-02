import React, { useState } from "react";

/* ---------------------------------------------
   CONSTANTS
--------------------------------------------- */
const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands",
  "Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi",
  "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

/* ---------------------------------------------
   SHARED STYLES
--------------------------------------------- */
const inputBase =
  "w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-800";

const selectBase = inputBase + " appearance-none";

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function StampDutyCalculator() {

  /* ===== DEFAULT: Percentage ACTIVE ===== */
  const [method, setMethod] = useState("percentage");

  const [propertyValue, setPropertyValue] = useState(5000000);
  const [state, setState] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [buyerCategory, setBuyerCategory] = useState("");
  const [stampDutyRate, setStampDutyRate] = useState(6);
  const [registrationFee, setRegistrationFee] = useState("30000");
  const [otherCharges, setOtherCharges] = useState(0);

  const [result, setResult] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  /* ---------------------------------------------
     CALCULATION
  --------------------------------------------- */
  const calculateCharges = () => {
    const stampDuty =
      method === "percentage"
        ? (propertyValue * stampDutyRate) / 100
        : propertyValue * 0.05; // demo slab logic

    const regFee =
      registrationFee.toString().includes("%")
        ? (propertyValue * parseFloat(registrationFee)) / 100
        : Number(registrationFee);

    const total = stampDuty + regFee + Number(otherCharges);

    setResult({ stampDuty, regFee, otherCharges, total });
    setHasCalculated(true);
  };

  const format = (v) => `₹${Math.round(v).toLocaleString("en-IN")}`;

  /* ---------------------------------------------
     DONUT MATH
  --------------------------------------------- */
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const dash =
    hasCalculated && result
      ? (result.stampDuty / result.total) * circumference
      : 0;

  return (
    <section className="bg-white p-6 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* ================= LEFT FORM ================= */}
        <div className="lg:col-span-3 space-y-6">

          <Field label="Property Value (₹)">
            <input
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className={inputBase}
            />
          </Field>

          <Field label="State / UT">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={selectBase}
            >
              <option value="">Select state</option>
              {STATES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Property Type">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={selectBase}
              >
                <option value="">Select</option>
                <option>Resale</option>
                <option>New (Under Construction)</option>
                <option>Land</option>
              </select>
            </Field>

            <Field label="Buyer Category">
              <select
                value={buyerCategory}
                onChange={(e) => setBuyerCategory(e.target.value)}
                className={selectBase}
              >
                <option value="">Select</option>
                <option>Individual</option>
                <option>Female Buyer</option>
                <option>First-time Homebuyer</option>
                <option>Joint Buyers</option>
              </select>
            </Field>
          </div>

          {/* TOGGLE — RESET RESULT ON CHANGE */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Stamp Duty Method
            </label>

            <div className="grid grid-cols-2 rounded-lg border border-gray-300 overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  setMethod("percentage");
                  setResult(null);
                  setHasCalculated(false);
                }}
                className={`h-12 font-semibold ${
                  method === "percentage"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Percentage
              </button>

              <button
                type="button"
                onClick={() => {
                  setMethod("slab");
                  setResult(null);
                  setHasCalculated(false);
                }}
                className={`h-12 font-semibold ${
                  method === "slab"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Slab Based
              </button>
            </div>
          </div>

          <Field label="Stamp Duty Rate (%)">
            <input
              type="number"
              disabled={method === "slab"}
              value={stampDutyRate}
              onChange={(e) => setStampDutyRate(Number(e.target.value))}
              className={`${inputBase} disabled:bg-gray-100`}
            />
          </Field>

          <Field label="Registration Fee (₹ or %)">
            <input
              value={registrationFee}
              onChange={(e) => setRegistrationFee(e.target.value)}
              className={inputBase}
            />
          </Field>

          <Field label="Other Charges (₹)">
            <input
              type="number"
              value={otherCharges}
              onChange={(e) => setOtherCharges(Number(e.target.value))}
              className={inputBase}
            />
          </Field>

          <button
            onClick={calculateCharges}
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition"
          >
            Calculate Charges
          </button>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Cost Breakdown
          </h3>

          {!hasCalculated ? (
            <div className="w-44 h-44 rounded-full bg-gray-200 border-4 border-gray-300 flex items-center justify-center text-gray-500 text-center">
              Calculate Stamp<br />Duty
            </div>
          ) : (
            <>
              {/* DONUT */}
              <div className="relative w-[180px] h-[180px] mb-6">
                <svg viewBox="0 0 180 180">
                  <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="18"
                    fill="none"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    stroke="#374151"
                    strokeWidth="18"
                    fill="none"
                    strokeDasharray={`${dash} ${circumference}`}
                    transform="rotate(-90 90 90)"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-gray-500">Total Cost</span>
                  <span className="text-xl font-bold text-gray-800">
                    {format(result.total)}
                  </span>
                </div>
              </div>

              {/* STATS */}
              <div className="w-full space-y-3">
                <Stat label="Stamp Duty" value={format(result.stampDuty)} />
                <Stat label="Registration Fee" value={format(result.regFee)} />
                <Stat label="Other Charges" value={format(result.otherCharges)} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   HELPERS
--------------------------------------------- */
const Field = ({ label, children }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    {children}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="font-bold text-gray-800">{value}</span>
  </div>
);
