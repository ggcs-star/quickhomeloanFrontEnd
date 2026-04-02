import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";

export default function SIPInvestment() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [inputs, setInputs] = useState({
    lumpsum: 100000,
    deposit: 5000,
    frequency: "monthly",
    annual_rate: "",
    years: 10,
  });

  const [results, setResults] = useState(null);

  const frequencyMap = {
    weekly: 52,
    monthly: 12,
    quarterly: 4,
    "half-yearly": 2,
    yearly: 1,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateSIP = () => {
    const lumpsum = parseFloat(inputs.lumpsum) || 0;
    const P = parseFloat(inputs.deposit) || 0;
    const t = parseFloat(inputs.years) || 0;

    let annualRate, rateSource;
    if (inputs.annual_rate) {
      annualRate = parseFloat(inputs.annual_rate);
      rateSource = "user_input";
    } else {
      const adminLoanRate = 10;
      annualRate = adminLoanRate || 12.0;
      rateSource = adminLoanRate ? "db_admin" : "system_default";
    }

    const r = annualRate / 100;
    const n = frequencyMap[inputs.frequency.toLowerCase()] || 12;

    // SIP Future Value
    const fv_sip =
      P *
      ((Math.pow(1 + r / n, n * t) - 1) / (r / n)) *
      (1 + r / n);

    // Lumpsum Future Value
    const fv_lumpsum = lumpsum * Math.pow(1 + r / n, n * t);

    const future_value = fv_sip + fv_lumpsum;
    const invested_amount = P * n * t + lumpsum;
    const total_interest = future_value - invested_amount;

    setResults({
      invested_amount: invested_amount.toFixed(2),
      maturity_value: future_value.toFixed(2),
      total_interest_earned: total_interest.toFixed(2),
      annual_rate_percent: annualRate,
      deposit_frequency: inputs.frequency,
      years: t,
      rate_source: rateSource,
    });
  };

  const chartData = results
    ? [
        { title: "Invested Amount", value: parseFloat(results.invested_amount), color: "#80d4ff" },
        { title: "Total Interest", value: parseFloat(results.total_interest_earned), color: "#ffb3b3" },
      ]
    : [];

  const renderPieChartWithLegend = () => {
    if (!results) return null;
    return (
      <div className="flex flex-col items-center gap-4 mt-4">
        <PieChart
          data={chartData}
          animate
          lineWidth={40}
          label={({ dataEntry }) =>
            dataEntry.value > 0 ? `${Math.round(dataEntry.percentage)}%` : ""
          }
          labelStyle={{
            fontSize: "10px",
            fill: "#333",
            fontWeight: "bold",
          }}
          radius={42}
          startAngle={-90}
        />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "calculator"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
            }`}
          >
            🧮 Calculator
          </button>

          <button
            onClick={() => setActiveTab("compare")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "compare"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
            }`}
          >
            🏦 Compare Banks
          </button>
        </div>
      </div>

      {activeTab === "calculator" && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Inputs Section */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {[
              { label: "Lumpsum (₹)", name: "lumpsum", min: 0, max: 1000000, step: 1000 },
              { label: "Monthly Deposit (₹)", name: "deposit", min: 100, max: 50000, step: 100 },
              { label: "Annual Interest Rate (%)", name: "annual_rate", min: 0, max: 20, step: 0.1 },
              { label: "Investment Duration (Years)", name: "years", min: 1, max: 30, step: 1 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-center">
                  <label className="block font-medium mb-1">{item.label}</label>
                  <div className="flex items-center space-x-1 bg-blue-500/40 mt-2 px-2 rounded">
                    <input
                      type="number"
                      name={item.name}
                      min={item.min}
                      max={item.max}
                      step={item.step}
                      value={inputs[item.name]}
                      onChange={handleChange}
                      className="w-24 bg-transparent text-blue-800 p-2 outline-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  name={item.name}
                  value={inputs[item.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}

            {/* ✅ Add Calculate Button */}
            <button
              onClick={calculateSIP}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Calculate SIP
            </button>

            {/* Result Section */}
            {results && (
              <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">SIP Summary</h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div>Invested Amount</div>
                  <div className="text-right text-blue-700 font-bold">
                    ₹ {results.invested_amount}
                  </div>
                  <div>Maturity Value</div>
                  <div className="text-right text-green-700 font-bold">
                    ₹ {results.maturity_value}
                  </div>
                  <div>Total Interest Earned</div>
                  <div className="text-right text-orange-700 font-bold">
                    ₹ {results.total_interest_earned}
                  </div>
                  <div>Annual Interest Rate</div>
                  <div className="text-right text-red-600 font-bold">
                    {results.annual_rate_percent}%
                  </div>
                  <div>Frequency</div>
                  <div className="text-right text-purple-700 font-bold">
                    {results.deposit_frequency}
                  </div>
                  <div>Years</div>
                  <div className="text-right text-indigo-700 font-bold">
                    {results.years} years
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Chart Section */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Investment Breakdown</h2>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#80d4ff]"></span>
                Invested Amount
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#ffb3b3]"></span>
                Total Interest
              </div>
            </div>
            {renderPieChartWithLegend()}
          </div>
        </div>
      )}

      {activeTab === "compare" && (
        <div className="text-center text-gray-600 py-10">
          <CompareBanks />
        </div>
      )}
    </div>
  );
}
