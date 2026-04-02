import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import LoanInterestVsFdInterestGuide from "./LoanInterestVsFdInterestGuide";

function LoanInterestVsFdInterest() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    years: 15,
    type: "loan interest",
    rate: 10,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEquivalentRate = (values = form) => {
    const years = parseInt(values.years || 15);
    const type = values.type?.toLowerCase();
    const inputRate = parseFloat(values.rate || 10);
    const principal = 1; // dummy principal

    let equivalentRate = 0;

    if (type === "loan interest") {
      const monthlyRate = inputRate / 100 / 12;
      const n = years * 12;
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
      const totalPaid = emi * n;
      const fdRate = Math.pow(totalPaid / principal, 1 / years) - 1;
      equivalentRate = +(fdRate * 100).toFixed(2);
    } else if (type === "fd/mf interest") {
      const fv = principal * Math.pow(1 + inputRate / 100, years);
      const n = years * 12;
      let monthlyRate = 0.01;
      const tolerance = 0.0000001;

      for (let i = 0; i < 10000; i++) {
        const emi =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
        const total = emi * n;
        const diff = total - fv;
        if (Math.abs(diff) < tolerance) break;
        monthlyRate = monthlyRate - diff / (n * principal);
      }

      equivalentRate = +(monthlyRate * 12 * 100).toFixed(2);
    }

    setResult({
      given_type: type,
      input_rate_percent: inputRate,
      years: years,
      equivalent_rate_percent: equivalentRate,
    });
  };

  useEffect(() => {
    calculateEquivalentRate(form);
  }, [form]);

  const renderPieChart = () => {
    if (!result) return null;

    const chartData = [
      {
        title: "",
        value: result.input_rate_percent,
        color: "#99d5ff",
      },
      {
        title: "",
        value: result.equivalent_rate_percent,
        color: "#5cc4b8",
      },
    ];

    return (
      <div className="flex justify-center mt-6">
        <PieChart
          data={chartData}
          animate
          lineWidth={40}
          label={({ dataEntry }) =>
            dataEntry.value > 0 ? ` ${dataEntry.value}%` : ""
          }
          labelStyle={{
            fontSize: "6px",
            fill: "#333",
            fontWeight: "bold",
          }}
          radius={40}
          startAngle={-90}
        />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-8 relative">
        <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm backdrop-blur-md">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "calculator"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
              }`}
          >
            🧮 Calculator
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "compare"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
              }`}
          >
            🏦 Compare Banks
          </button>
        </div>
      </div>

      {/* Calculator */}
      {activeTab === "calculator" && (
        <>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Inputs */}
            <div className="flex flex-col gap-6 lg:w-[70%]">

              {/* Type */}
              <div>
                <label className="block font-medium mb-2">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 bg-blue-50 text-blue-800"
                >
                  <option value="loan interest">Loan Interest</option>
                  <option value="fd/mf interest">FD/MF Return</option>
                </select>
              </div>


              {/* Years */}
              <div>
                <div className="flex justify-between items-center">
                  <label className="block font-medium mb-1">Years</label>
                  <div className="flex items-center space-x-1 bg-blue-500/40 mt-2 px-2 rounded">
                    <input
                      type="number"
                      name="years"
                      value={form.years}
                      onChange={handleChange}
                      className="w-20 bg-transparent text-blue-800 p-2 outline-none"
                    />
                    <span className="text-blue-800 font-medium">yrs</span>
                  </div>
                </div>
                <input
                  min="1"
                  max="30"
                  type="range"
                  name="years"
                  value={form.years}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between items-center">
                  <label className="block font-medium mb-1">Rate (%)</label>
                  <div className="flex items-center space-x-1 bg-blue-500/40 mt-2 px-2 rounded">
                    <input
                      type="number"
                      name="rate"
                      value={form.rate}
                      onChange={handleChange}
                      className="w-20 bg-transparent text-blue-800 p-2 outline-none"
                    />
                    <span className="text-blue-800 font-medium">%</span>
                  </div>
                </div>
                <input
                  min="1"
                  max="20"
                  step="0.1"
                  type="range"
                  name="rate"
                  value={form.rate}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>



              {/* Result Display */}
              {result && (
                <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                  <h2 className="text-xl font-semibold">📊 Result Summary</h2>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>Given Type</div>
                    <div className="text-right capitalize">{result.given_type}</div>
                    <div>Input Rate</div>
                    <div className="text-right">{result.input_rate_percent}%</div>
                    <div>Years</div>
                    <div className="text-right">{result.years}</div>
                    <div className="font-semibold">Equivalent Rate</div>
                    <div className="text-right font-bold text-green-700">
                      {result.equivalent_rate_percent}%
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Chart */}
            <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Visual Comparison</h2>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#99d5ff]"></span>
                  Input Rate
                </div>
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#5cc4b8]"></span>
                  Equivalent Rate
                </div>
              </div>
              {renderPieChart()}
            </div>
          </div>
          <LoanInterestVsFdInterestGuide />
        </>
      )}

      {/* Compare Tab */}
      {activeTab === "compare" && (
        <div className="text-center text-gray-600 py-10">
          <CompareBanks />
        </div>
      )}
    </div>
  );
}

export default LoanInterestVsFdInterest;
