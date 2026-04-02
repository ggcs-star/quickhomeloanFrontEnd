import React, { useState, useEffect } from "react";

const EmiCalculatorSection = ({ data }) => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.75);
  const [loanTenure, setLoanTenure] = useState(15);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEmi = () => {
    const principal = loanAmount;
    const rate = interestRate / (12 * 100);
    const months = loanTenure * 12;

    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const totalPayable = emiValue * months;

    setEmi(emiValue);
    setTotalInterest(totalPayable - principal);
    setTotalAmount(totalPayable);
  };

  const formatINR = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  if (!data) return null;

  return (
    <>
      {/* Black Slider Thumb */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>

      <section id="emi-calculator">
        <div className="max-w-6xl mx-auto bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
          </div>

          {/* Body Layout */}
          <div className="p-6 grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE — SLIDERS */}
            <div className="space-y-10">

              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-neutral-700">
                    Loan Amount
                  </label>
                  <span className="text-2xl font-bold text-neutral-900">
                    ₹ {formatINR(loanAmount)}
                  </span>
                </div>

                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: `linear-gradient(to right, #000 ${
                      ((loanAmount - 100000) / (10000000 - 100000)) * 100
                    }%, #E5E7EB ${
                      ((loanAmount - 100000) / (10000000 - 100000)) * 100
                    }%)`,
                  }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>₹1L</span>
                  <span>₹1Cr</span>
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
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: `linear-gradient(to right, #000 ${
                      ((interestRate - 6) / (15 - 6)) * 100
                    }%, #E5E7EB ${
                      ((interestRate - 6) / (15 - 6)) * 100
                    }%)`,
                  }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>6%</span>
                  <span>15%</span>
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
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                  style={{
                    background: `linear-gradient(to right, #000 ${
                      ((loanTenure - 1) / (30 - 1)) * 100
                    }%, #E5E7EB ${
                      ((loanTenure - 1) / (30 - 1)) * 100
                    }%)`,
                  }}
                />

                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>1 Yr</span>
                  <span>30 Yr</span>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE — LIGHT THEME RESULTS */}
            <div className="bg-gray-100 text-neutral-900 p-8 rounded-md border border-neutral-300">

              <div className="text-center pb-6 border-b border-neutral-300">
                <p className="text-neutral-600 uppercase tracking-wide text-xs font-semibold">
                  Monthly EMI
                </p>
                <h3 className="text-4xl md:text-5xl font-bold mt-2">
                  ₹ {formatINR(emi)}
                </h3>
              </div>

              <div className="pt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Principal Amount</span>
                  <span className="font-semibold">₹ {formatINR(loanAmount)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-600">Total Interest Payable</span>
                  <span className="font-semibold">₹ {formatINR(totalInterest)}</span>
                </div>

                <div className="flex justify-between pt-4 mt-2 border-t border-neutral-300 text-lg font-bold">
                  <span>Total Amount Payable</span>
                  <span>₹ {formatINR(totalAmount)}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default EmiCalculatorSection;
