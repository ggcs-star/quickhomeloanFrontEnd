import React, { useState, useEffect } from "react";
import { Container } from "../../../../components/Layout";

const SixBHKEMICalculator = ({ data }) => {
  const [loanAmount, setLoanAmount] = useState(20000000);
  const [interestRate, setInterestRate] = useState(8.75);
  const [tenure, setTenure] = useState(20);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  // ==========================
  // EMI Formula
  // ==========================
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    if (principal <= 0 || monthlyRate <= 0 || totalMonths <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayable(0);
      return;
    }

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalAmt = emiValue * totalMonths;
    const totalInt = totalAmt - principal;

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInt));
    setTotalPayable(Math.round(totalAmt));
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (num) => "₹" + num.toLocaleString("en-IN");

  // Same slider background as eligibility comp
  const getSliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #000 ${percent}%, #E5E7EB ${percent}%)`;
  };

  return (
    <section id="emi-calculator" className="">
      <Container>
        <div className="bg-white text-black rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-2xl font-bold">{data.title}</h2>
          </div>

          {/* Body */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Sliders - SAME UI AS ELIGIBILITY VERSION */}
            <div className="space-y-8">

              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Loan Amount:{" "}
                  <span className="font-bold text-black">
                    {formatCurrency(loanAmount)}
                  </span>
                </label>

                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(loanAmount, 1000000, 100000000),
                  }}
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Interest Rate:{" "}
                  <span className="font-bold text-black">
                    {interestRate.toFixed(2)}%
                  </span>
                </label>

                <input
                  type="range"
                  min="6"
                  max="18"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: getSliderBg(interestRate, 6, 18),
                  }}
                />
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
              </div>

            </div>

            {/* Results */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="text-xl text-neutral-600 mb-2">{data.resultLabel}</p>

              <h3 className="text-5xl lg:text-6xl font-extrabold text-black mb-6">
                {formatCurrency(emi)}
              </h3>

              <p className="text-neutral-500">{data.disclaimer}</p>
            </div>
          </div>

          {/* Custom Slider Thumb - EXACT SAME as eligibility UI */}
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

export default SixBHKEMICalculator;
