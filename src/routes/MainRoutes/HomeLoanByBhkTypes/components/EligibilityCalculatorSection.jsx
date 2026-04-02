import React, { useState, useEffect } from "react";

const EligibilityCalculatorSection = ({ data }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [existingEmis, setExistingEmis] = useState(0);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.75);
  const [eligibleAmount, setEligibleAmount] = useState(0);
  const [maxAffordableEmi, setMaxAffordableEmi] = useState(0);

  useEffect(() => {
    calculateEligibility();
  }, [monthlyIncome, existingEmis, loanTenure, interestRate]);

  const calculateEligibility = () => {
    const foir = 0.6;
    const availableIncome = monthlyIncome * foir - existingEmis;

    if (availableIncome <= 0) {
      setMaxAffordableEmi(0);
      setEligibleAmount(0);
      return;
    }

    const rate = interestRate / (12 * 100);
    const months = loanTenure * 12;

    const eligibleLoan =
      (availableIncome * (Math.pow(1 + rate, months) - 1)) /
      (rate * Math.pow(1 + rate, months));

    setMaxAffordableEmi(availableIncome);
    setEligibleAmount(eligibleLoan);
  };

  const formatINR = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const sliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, black ${percent}%, #E5E7EB ${percent}%)`;
  };

  if (!data) return null;

  return (
    <>
      {/* GLOBAL BLACK THUMB */}
      <style>{`
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: black;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-thumb {
          background: black;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-track {
          background: #E5E7EB;
          height: 8px;
          border-radius: 6px;
        }

        .custom-slider::-moz-range-progress {
          background: black !important;
          height: 8px;
          border-radius: 6px;
        }
      `}</style>

      <section className="">
        <div className="max-w-6xl mx-auto bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 grid md:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* LEFT: Sliders */}
            <div className="space-y-10">

              {/* Monthly Income */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-neutral-700">
                    Gross Monthly Income
                  </label>
                  <span className="text-2xl font-bold text-neutral-900">
                    ₹ {formatINR(monthlyIncome)}
                  </span>
                </div>

                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="5000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
                  style={{ background: sliderBg(monthlyIncome, 20000, 1000000) }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>₹20K</span>
                  <span>₹10L+</span>
                </div>
              </div>

              {/* Existing EMIs */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-neutral-700">
                    Existing Monthly EMIs
                  </label>
                  <span className="text-2xl font-bold text-neutral-900">
                    ₹ {formatINR(existingEmis)}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="1000"
                  value={existingEmis}
                  onChange={(e) => setExistingEmis(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
                  style={{ background: sliderBg(existingEmis, 0, 500000) }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>₹0</span>
                  <span>₹5L</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-neutral-700">
                    Loan Tenure
                  </label>
                  <span className="text-2xl font-bold text-neutral-900">
                    {loanTenure} Years
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
                  style={{ background: sliderBg(loanTenure, 1, 30) }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-neutral-700">
                    Interest Rate (p.a.)
                  </label>
                  <span className="text-2xl font-bold text-neutral-900">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>

                <input
                  type="range"
                  min="6"
                  max="15"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
                  style={{ background: sliderBg(interestRate, 6, 15) }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>6%</span>
                  <span>15%</span>
                </div>
              </div>

            </div>

            {/* RIGHT: Result */}
       <div className="bg-gray-100 text-neutral-900 p-8 rounded-md shadow-sm border border-neutral-300 flex flex-col justify-center">

  <div className="text-center pb-6 border-b border-neutral-300">
    <p className="text-neutral-600 uppercase tracking-wide text-xs font-semibold">
      Maximum Loan Eligibility
    </p>
    <h3 className="text-4xl md:text-5xl font-bold mt-2">
      ₹ {formatINR(eligibleAmount)}
    </h3>
  </div>

  <div className="pt-6 space-y-4 text-sm md:text-base">

    <div className="flex justify-between">
      <span className="text-neutral-600">Max Affordable EMI</span>
      <span className="font-semibold text-neutral-900">
        ₹ {formatINR(maxAffordableEmi)}
      </span>
    </div>

    <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
      {data.note}
    </p>

    <a
      href="#apply-now"
      className="mt-6 block w-full text-center border border-neutral-300 bg-white text-neutral-900 px-6 py-3 rounded-md font-semibold hover:bg-neutral-100 transition"
    >
      {data.ctaLabel} →
    </a>

  </div>

</div>


          </div>

        </div>
      </section>
    </>
  );
};

export default EligibilityCalculatorSection;
