import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { Mail } from "lucide-react";

const EMICalculator = ({ data }) => {
  const [loanAmount, setLoanAmount] = useState(data.defaultLoanAmount);
  const [tenure, setTenure] = useState(data.defaultTenure);
  const [interestRate, setInterestRate] = useState(data.defaultInterestRate);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalAmt = emiCalc * totalMonths;
    const totalInt = totalAmt - principal;

    setEmi(Math.round(emiCalc));
    setTotalInterest(Math.round(totalInt));
    setTotalPayable(Math.round(totalAmt));
  }, [loanAmount, tenure, interestRate]);

  const pieData = [
    { name: "Principal Amount", value: loanAmount },
    { name: "Total Interest", value: totalInterest },
  ];

  const COLORS = ["#000000", "#9ca3af"]; // black + gray

  const formatCurrency = (num) => "₹" + num.toLocaleString("en-IN");

  // 🔹 Added: Matching black gradient slider background
  const getSliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #000 ${percent}%, #E5E7EB ${percent}%)`;
  };

  return (
    <div className="bg-white text-black rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-2xl font-bold">{data.title}</h2>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sliders */}
          <div className="space-y-6">
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
                min={data.loanRange.min}
                max={data.loanRange.max}
                step={data.loanRange.step}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                style={{
                  background: getSliderBg(
                    loanAmount,
                    data.loanRange.min,
                    data.loanRange.max
                  ),
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
                min={data.tenureRange.min}
                max={data.tenureRange.max}
                step={data.tenureRange.step}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                style={{
                  background: getSliderBg(
                    tenure,
                    data.tenureRange.min,
                    data.tenureRange.max
                  ),
                }}
              />
            </div>

            {/* Interest */}
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Interest Rate (% p.a.):{" "}
                <span className="font-bold text-black">
                  {interestRate.toFixed(2)}%
                </span>
              </label>
              <input
                type="range"
                min={data.interestRange.min}
                max={data.interestRange.max}
                step={data.interestRange.step}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                style={{
                  background: getSliderBg(
                    interestRate,
                    data.interestRange.min,
                    data.interestRange.max
                  ),
                }}
              />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-48 md:h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={50} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* EMI Result */}
        <div className="text-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    {/* EMI, Interest, Payable - Uniform styling */}
    {[ 
      { label: "Monthly EMI", value: formatCurrency(emi) },
      { label: "Total Interest", value: formatCurrency(totalInterest) },
      { label: "Total Payable", value: formatCurrency(totalPayable) }
    ].map((item, index) => (
      <React.Fragment key={index}>
        <div className="text-center">
          <p className="text-sm md:text-base text-neutral-500">{item.label}</p>
          <p className="text-2xl md:text-3xl font-bold text-black">{item.value}</p>
        </div>

        {/* Divider between columns (only for desktop) */}
        {index < 2 && (
          <div className="hidden md:block w-px h-10 bg-neutral-300"></div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>


      </div>

      {/* Footer */}
      <div className="border-t border-neutral-300 p-6">
        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-2.5 font-semibold rounded-lg border border-neutral-300 text-black bg-white hover:bg-neutral-100 transition">
            Show Schedule
          </button>

          <button className="px-5 py-2.5 font-semibold rounded-lg border border-neutral-300 text-black bg-white flex items-center hover:bg-neutral-100 transition">
            <Mail className="w-4 h-4 mr-2" /> Email this calculation
          </button>
        </div>
      </div>

      {/* 🔹 Added custom black slider thumb (same as EligibilityCalculator) */}
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

export default EMICalculator;
