import React, { useState, useEffect } from "react";

const formatINR = (value) =>
  value?.toLocaleString("en-IN", { maximumFractionDigits: 0 }) || 0;

const calculateEMI = (principal, rate, tenureYears) => {
  const r = rate / 100 / 12;
  const n = tenureYears * 12;

  if (r === 0) {
    const emi = principal / n;
    return { emi, totalInterest: 0, totalPayable: principal };
  }

  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - principal;

  return { emi, totalPayable, totalInterest };
};

const getSliderBg = (value, min, max) => {
  const percent = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, black ${percent}%, rgb(209,213,219) ${percent}%)`;
};

const DoctorEmiCalculatorSection = ({ data }) => {
  if (!data) return null;

  const defaults = data.defaults || {};
  const ranges = data.ranges || {};
  const labels = data.labels || {};

  const [loanAmount, setLoanAmount] = useState(defaults.loanAmount || 2500000);
  const [interestRate, setInterestRate] = useState(defaults.interestRate || 8.75);
  const [loanTenure, setLoanTenure] = useState(defaults.loanTenure || 15);

  const [emiData, setEmiData] = useState({
    emi: 0,
    totalInterest: 0,
    totalPayable: 0,
  });

  useEffect(() => {
    setEmiData(calculateEMI(loanAmount, interestRate, loanTenure));
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <section
      id="emi-calculator"
      className="max-w-7xl mx-auto scroll-mt-20 my-10 bg-white p-6 sm:p-10 rounded-md border border-neutral-300"
    >
      <h2 className="text-3xl font-bold text-black mb-8">
        {data.title || "Plot Loan EMI Calculator"}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left: Sliders */}
        <div className="space-y-8">
          
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between mb-2 items-end">
              <label className="font-semibold text-gray-700">
                {labels.loanAmount || "Loan Amount"}
              </label>
              <span className="text-2xl font-bold">₹ {formatINR(loanAmount)}</span>
            </div>

            <input
              type="range"
              min={ranges.loanAmount?.min || 100000}
              max={ranges.loanAmount?.max || 10000000}
              step={ranges.loanAmount?.step || 50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
              style={{
                background: getSliderBg(
                  loanAmount,
                  ranges.loanAmount?.min || 100000,
                  ranges.loanAmount?.max || 10000000
                ),
              }}
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between mb-2 items-end">
              <label className="font-semibold">
                {labels.interestRate || "Interest Rate (p.a.)"}
              </label>
              <span className="text-2xl font-bold">
                {interestRate.toFixed(2)}%
              </span>
            </div>

            <input
              type="range"
              min={ranges.interestRate?.min || 6}
              max={ranges.interestRate?.max || 15}
              step={ranges.interestRate?.step || 0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
              style={{
                background: getSliderBg(
                  interestRate,
                  ranges.interestRate?.min || 6,
                  ranges.interestRate?.max || 15
                ),
              }}
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
              <span>6%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between mb-2 items-end">
              <label className="font-semibold">
                {labels.loanTenure || "Loan Tenure"}
              </label>
              <span className="text-2xl font-bold">{loanTenure} Years</span>
            </div>

            <input
              type="range"
              min={ranges.loanTenure?.min || 1}
              max={ranges.loanTenure?.max || 30}
              step={ranges.loanTenure?.step || 1}
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
              style={{
                background: getSliderBg(
                  loanTenure,
                  ranges.loanTenure?.min || 1,
                  ranges.loanTenure?.max || 30
                ),
              }}
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Right: EMI Result Panel */}
        <div className="bg-black text-white p-8 rounded-2xl shadow-2xl flex flex-col justify-center h-full">
          <div className="text-center pb-6 border-b border-gray-800">
            <p className="text-gray-400 uppercase tracking-wider text-sm font-semibold mb-2">
              {labels.emi || "Your Monthly EMI"}
            </p>
            <div className="text-4xl lg:text-5xl font-bold">
              ₹ {formatINR(Math.round(emiData.emi))}
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">
                {labels.principal || "Principal Amount"}
              </span>
              <span className="font-semibold">₹ {formatINR(loanAmount)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">
                {labels.totalInterest || "Total Interest Payable"}
              </span>
              <span className="font-semibold">
                ₹ {formatINR(Math.round(emiData.totalInterest))}
              </span>
            </div>

            <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-800 mt-4">
              <span>{labels.totalAmount || "Total Amount Payable"}</span>
              <span>₹ {formatINR(Math.round(emiData.totalPayable))}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider styling */}
      <style>
        {`
          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            background: black;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            cursor: pointer;
          }

          .custom-slider::-moz-range-thumb {
            background: black;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            cursor: pointer;
          }

          .custom-slider::-moz-range-track {
            background: #D1D5DB;
            height: 8px;
            border-radius: 5px;
          }

          .custom-slider::-moz-range-progress {
            background: black !important;
            height: 8px;
            border-radius: 5px;
          }
        `}
      </style>
    </section>
  );
};

export default DoctorEmiCalculatorSection;
