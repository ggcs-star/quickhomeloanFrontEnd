import React, { useState } from "react";
import { UserCheck } from "lucide-react";

const EligibilityCalculator = ({ data }) => {
  const [employmentType, setEmploymentType] = useState(data.defaultEmploymentType);
  const [age, setAge] = useState(data.defaultAge);
  const [income, setIncome] = useState(data.defaultIncome);
  const [existingEmi, setExistingEmi] = useState(data.defaultExistingEmi);
  const [eligibility, setEligibility] = useState(null);

  // Eligibility calculation
  const handleCalculate = () => {
    const netIncome = income - existingEmi;
    const eligibleAmount = Math.max(0, netIncome * 60);
    setEligibility(eligibleAmount);
  };

  const formatCurrency = (num) => "₹" + num.toLocaleString("en-IN");

  // Helper to generate black progress background for sliders
  const getSliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #000 ${percent}%, #E5E7EB ${percent}%)`;
  };

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <div className="flex items-center">
          <UserCheck className="w-6 h-6 mr-3 text-black" />
          <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
            {data.title}
          </h2>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Employment Type */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              I am
            </label>
            <div className="grid grid-cols-3 gap-2">
              {data.employmentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setEmploymentType(type)}
                  className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                    employmentType === type
                      ? "bg-gray-300  text-black border-gray-200"
                      : "bg-white hover:bg-neutral-100 border-neutral-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Age Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Age: <span className="font-bold text-black">{age} Years</span>
            </label>
            <input
              type="range"
              min={data.ageRange.min}
              max={data.ageRange.max}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
              style={{
                background: getSliderBg(age, data.ageRange.min, data.ageRange.max),
              }}
            />
          </div>

          {/* Monthly Salary Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Monthly Salary:{" "}
              <span className="font-bold text-black">{formatCurrency(income)}</span>
            </label>
            <input
              type="range"
              min={data.incomeRange.min}
              max={data.incomeRange.max}
              step={data.incomeRange.step}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
              style={{
                background: getSliderBg(
                  income,
                  data.incomeRange.min,
                  data.incomeRange.max
                ),
              }}
            />
          </div>

          {/* Existing EMI Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Existing EMIs (Monthly):{" "}
              <span className="font-bold text-black">
                {formatCurrency(existingEmi)}
              </span>
            </label>
            <input
              type="range"
              min={data.existingEmiRange.min}
              max={data.existingEmiRange.max}
              step={data.existingEmiRange.step}
              value={existingEmi}
              onChange={(e) => setExistingEmi(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
              style={{
                background: getSliderBg(
                  existingEmi,
                  data.existingEmiRange.min,
                  data.existingEmiRange.max
                ),
              }}
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="mt-8">
          <button
            onClick={handleCalculate}
            className="font-semibold rounded-lg bg-black text-white px-6 py-3 text-lg w-full hover:bg-gray-900 transition"
          >
            Calculate Eligibility
          </button>
        </div>

        {/* Eligibility Result */}
        {eligibility !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg text-neutral-600">Eligible Loan Amount</p>
            <p className="text-3xl font-bold text-black">
              {formatCurrency(eligibility)}
            </p>
          </div>
        )}
      </div>

      {/* Custom Slider Thumb CSS */}
      <style>
        {`
          .custom-range-slider::-webkit-slider-thumb {
            background-color: #000;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            -webkit-appearance: none;
            cursor: pointer;
          }

          .custom-range-slider::-moz-range-thumb {
            background-color: #000;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default EligibilityCalculator;
