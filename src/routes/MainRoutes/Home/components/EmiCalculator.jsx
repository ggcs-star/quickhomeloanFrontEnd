import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, Percent, Calendar } from "lucide-react";
import { Container } from "../../../../components/Layout";
import emicalculator from "../../../../assets/home/HeroSection/EMICalculator.jpg";
import { Link } from "react-router-dom";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000); // ₹50,00,000
  const [tenure, setTenure] = useState(20); // 20 years
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // 🧮 EMI calculation formula
  useEffect(() => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const months = tenure * 12;

    const calculatedEmi =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const totalAmt = calculatedEmi * months;
    const interest = totalAmt - principal;

    setEmi(calculatedEmi);
    setTotalAmount(totalAmt);
    setTotalInterest(interest);
  }, [loanAmount, tenure, interestRate]);

  const formatCurrency = (num) =>
    "₹" + num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <Container>
      {/* Slider Thumb Style Override */}
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            background: #000;
            border-radius: 50%;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            height: 18px;
            width: 18px;
            background: #000;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>

      <section className="py-20 bg-white text-black">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-3">
            Calculate Your Home Loan EMI
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Use our smart calculator to estimate your monthly EMI and plan your
            home loan with confidence.
          </p>
          <div className="" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left Side - Calculator Panel */}
          <div className="bg-white border border-neutral-300 rounded-2xl p-4 lg:p-8 md:w-[45%] w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Calculator className="text-black h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-black">
                EMI Calculator
              </h3>
            </div>

            {/* Loan Amount */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Loan Amount</span>
                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={50000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #000 ${
                    ((loanAmount - 500000) /
                      (50000000 - 500000)) *
                    100
                  }%, #E5E7EB ${
                    ((loanAmount - 500000) /
                      (50000000 - 500000)) *
                    100
                  }%)`,
                }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer border-none outline-none"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>₹5L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Loan Tenure</span>
                <span className="font-semibold">{tenure} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #000 ${
                    (tenure / 30) * 100
                  }%, #E5E7EB ${(tenure / 30) * 100}%)`,
                }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer border-none outline-none"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Interest Rate</span>
                <span className="font-semibold">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min={6.5}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #000 ${
                    ((interestRate - 6.5) / (15 - 6.5)) * 100
                  }%, #E5E7EB ${
                    ((interestRate - 6.5) / (15 - 6.5)) * 100
                  }%)`,
                }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer border-none outline-none"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>6.5%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Results */}
            <div className="pt-6 space-y-5 border-t border-neutral-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="border border-neutral-300 p-4 rounded-lg text-center transition-all">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>Monthly EMI</span>
                  </div>
                  <div className="text-xl font-semibold text-black">
                    {formatCurrency(emi)}
                  </div>
                </div>

                <div className="border border-neutral-300 p-4 rounded-lg text-center transition-all">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
                    <Percent className="h-4 w-4" />
                    <span>Total Interest</span>
                  </div>
                  <div className="text-xl font-semibold text-black">
                    {formatCurrency(totalInterest)}
                  </div>
                </div>

                <div className="border border-neutral-300 p-4 rounded-lg text-center transition-all">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Total Amount</span>
                  </div>
                  <div className="text-xl font-semibold text-black">
                    {formatCurrency(totalAmount)}
                  </div>
                </div>
              </div>

              <Link
                to="/apply-loan"
                className="block mt-4 w-full text-center font-semibold bg-black text-white rounded-lg py-3 hover:bg-gray-800 transition-all"
              >
                Apply for This Loan
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-[55%] w-full">
            <img
              src={emicalculator}
              alt="Loan Calculator"
              className="rounded-2xl w-full h-auto object-cover shadow-md hover:shadow-xl transition-all"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default EMICalculator;
