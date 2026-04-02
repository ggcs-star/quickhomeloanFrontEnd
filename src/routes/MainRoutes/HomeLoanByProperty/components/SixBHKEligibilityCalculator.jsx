import React, { useState } from "react";
import { Container } from "../../../../components/Layout";

const SixBHKEligibilityCalculator = ({ data }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(8.75);
  const [eligibility, setEligibility] = useState(0);

  const [errors, setErrors] = useState({});

  // ======================================================================================
  // VALIDATION
  // ======================================================================================
  const validateForm = () => {
    let newErrors = {};

    if (!monthlyIncome || monthlyIncome <= 0) {
      newErrors.monthlyIncome = "Please enter a valid monthly income.";
    } else if (monthlyIncome < 10000) {
      newErrors.monthlyIncome = "Income must be at least ₹10,000.";
    }

    if (existingEMI < 0) {
      newErrors.existingEMI = "Existing EMI cannot be negative.";
    } else if (existingEMI > monthlyIncome * 0.7) {
      newErrors.existingEMI = "Existing EMI is too high compared to income.";
    }

    if (!tenure || tenure <= 0) {
      newErrors.tenure = "Please enter a valid loan tenure.";
    } else if (tenure > 40) {
      newErrors.tenure = "Tenure cannot exceed 40 years.";
    }

    if (!rate || rate <= 0) {
      newErrors.rate = "Please enter a valid interest rate.";
    } else if (rate < 6 || rate > 18) {
      newErrors.rate = "Interest rate must be between 6% and 18%.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ======================================================================================
  // CALCULATION
  // ======================================================================================
  const calculateEligibility = () => {
    if (!validateForm()) return;

    const income = parseFloat(monthlyIncome);
    const emi = parseFloat(existingEMI);
    const interestRate = rate / 12 / 100;
    const months = tenure * 12;

    const maxAffordableEMI = income * 0.5 - emi;
    if (maxAffordableEMI <= 0) {
      setEligibility(0);
      setErrors({ maxFOIR: "Your existing EMI exceeds allowable limits." });
      return;
    }

    const eligibleAmount =
      maxAffordableEMI *
      ((Math.pow(1 + interestRate, months) - 1) /
        (interestRate * Math.pow(1 + interestRate, months)));

    setEligibility(Math.round(eligibleAmount));
  };

  const getSliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #000 ${percent}%, #E5E7EB ${percent}%)`;
  };

  return (
    <section id="eligibility-calculator" className="">
      <Container>
        <div className="bg-white text-black rounded-md border border-neutral-300 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-2xl font-bold">{data.title}</h2>
          </div>

          {/* Body */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Inputs – Converted into Sliders */}
            <div className="space-y-8">

              {/* Income */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Monthly Income:{" "}
                  <span className="font-bold text-black">
                    ₹{monthlyIncome.toLocaleString("en-IN")}
                  </span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="1000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(monthlyIncome, 10000, 500000),
                  }}
                />
                {errors.monthlyIncome && (
                  <p className="text-red-600 text-sm mt-1">{errors.monthlyIncome}</p>
                )}
              </div>

              {/* Existing EMI */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Existing EMI:{" "}
                  <span className="font-bold text-black">
                    ₹{existingEMI.toLocaleString("en-IN")}
                  </span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={monthlyIncome}
                  step="500"
                  value={existingEMI}
                  onChange={(e) => setExistingEMI(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(existingEMI, 0, monthlyIncome),
                  }}
                />
                {errors.existingEMI && (
                  <p className="text-red-600 text-sm mt-1">{errors.existingEMI}</p>
                )}
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Loan Tenure:{" "}
                  <span className="font-bold text-black">{tenure} Years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(tenure, 1, 40),
                  }}
                />
                {errors.tenure && (
                  <p className="text-red-600 text-sm mt-1">{errors.tenure}</p>
                )}
              </div>

              {/* Rate */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Interest Rate:{" "}
                  <span className="font-bold text-black">{rate}%</span>
                </label>
                <input
                  type="range"
                  min="6"
                  max="18"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(rate, 6, 18),
                  }}
                />
                {errors.rate && (
                  <p className="text-red-600 text-sm mt-1">{errors.rate}</p>
                )}
              </div>

              {errors.maxFOIR && (
                <p className="text-red-600 text-sm font-medium">{errors.maxFOIR}</p>
              )}

              <button
                onClick={calculateEligibility}
                className="w-full bg-black text-white font-semibold text-lg py-3 rounded-md hover:bg-neutral-800 transition shadow-md"
              >
                Calculate Eligibility
              </button>
            </div>

            {/* Right Side – Result */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="text-xl text-neutral-600 mb-2">{data.resultLabel}</p>
              <h3 className="text-5xl lg:text-6xl font-extrabold text-black mb-6">
                ₹{eligibility.toLocaleString("en-IN")}
              </h3>
              <p className="text-neutral-500">{data.disclaimer}</p>
            </div>
          </div>

          {/* Custom Black Slider Thumb */}
          <style>
            {`
              .custom-range-slider::-webkit-slider-thumb {
                background-color: #000;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                -webkit-appearance: none;
              }
              .custom-range-slider::-moz-range-thumb {
                background-color: #000;
                width: 20px;
                height: 20px;
                border-radius: 50%;
              }
            `}
          </style>
        </div>
      </Container>
    </section>
  );
};

export default SixBHKEligibilityCalculator;
