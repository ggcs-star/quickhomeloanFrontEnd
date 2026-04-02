import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import EMIVsRentGuide from "./EMIVsRentGuide";

function EmiVsRent() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    monthlyEmi: 10000,
    monthlyRent: 1000,
    inflationRate: 5, // annual %
    expectedRentIncrement: 5, // annual %
    analysisPeriod: 5, // years
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  // Auto calculation whenever form changes
  useEffect(() => {
    const { monthlyEmi, monthlyRent, inflationRate, expectedRentIncrement, analysisPeriod } = form;

    let totalEmiPaid = 0;
    let totalRentPaid = 0;
    let totalPvEmi = 0;
    let totalPvRent = 0;
    const projection = [];

    const inflation = inflationRate / 100;
    const rentIncrement = expectedRentIncrement / 100;

    for (let year = 1; year <= analysisPeriod; year++) {
      const monthlyRentYear = monthlyRent * Math.pow(1 + rentIncrement, year - 1);

      totalEmiPaid += monthlyEmi * 12;
      totalRentPaid += monthlyRentYear * 12;

      const pvMonthlyEmi = monthlyEmi / Math.pow(1 + inflation, year);
      const pvMonthlyRent = monthlyRentYear / Math.pow(1 + inflation, year);

      totalPvEmi += pvMonthlyEmi * 12;
      totalPvRent += pvMonthlyRent * 12;

      projection.push({
        year,
        monthlyEmi: Math.round(monthlyEmi),
        pvOfEmi: Math.round(pvMonthlyEmi),
        monthlyRent: Math.round(monthlyRentYear),
        pvOfRent: Math.round(pvMonthlyRent),
      });
    }

    setResult({
      input: { ...form },
      projection,
      totalEmiPaid: Math.round(totalEmiPaid),
      totalRentPaid: Math.round(totalRentPaid),
      pvOfAllEmi: Math.round(totalPvEmi),
      pvOfAllRent: Math.round(totalPvRent),
    });
  }, [form]);

  const renderPieChart = () => {
    if (!result) return null;

    const chartData = [
      { title: "EMI", value: result.totalEmiPaid, color: "#99d5ff" },
      { title: "Rent", value: result.totalRentPaid, color: "#0067B3" },
    ];

    return (
      <div className="flex justify-center mt-6">
        <PieChart
          data={chartData}
          animate
          lineWidth={40}
          label={({ dataEntry }) =>
            dataEntry.value > 0 ? `${Math.round(dataEntry.percentage)}%` : ""
          }
          labelStyle={{ fontSize: "6px", fill: "#333", fontWeight: "bold" }}
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
        <>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {[
              { label: "Monthly EMI (₹)", name: "monthlyEmi", min: 1000, max: 500000, step: 1000, suffix: "₹" },
              { label: "Monthly Rent (₹)", name: "monthlyRent", min: 500, max: 100000, step: 500, suffix: "₹" },
              { label: "Inflation Rate (%)", name: "inflationRate", min: 0, max: 20, step: 0.1, suffix: "%" },
              { label: "Expected Rent Increment (%)", name: "expectedRentIncrement", min: 0, max: 20, step: 0.1, suffix: "%" },
              { label: "Analysis Period (Years)", name: "analysisPeriod", min: 1, max: 30, step: 1, suffix: "Years" },
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
                      value={form[item.name]}
                      onChange={handleChange}
                      className="w-24 bg-transparent text-blue-800 p-2 outline-none"
                    />
                    <span className="text-blue-800 font-medium">{item.suffix}</span>
                  </div>
                </div>
                <input
                  type="range"
                  name={item.name}
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  value={form[item.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}

            {result && (
              <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">📊 Results</h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div>Total EMI Paid</div>
                  <div className="text-right font-bold">₹ {result.totalEmiPaid}</div>
                  <div>Total Rent Paid</div>
                  <div className="text-right font-bold">₹ {result.totalRentPaid}</div>
                  <div>PV of All EMI</div>
                  <div className="text-right font-bold">₹ {result.pvOfAllEmi}</div>
                  <div>PV of All Rent</div>
                  <div className="text-right font-bold">₹ {result.pvOfAllRent}</div>
                </div>

                <details className="mt-4">
                  <summary className="font-semibold cursor-pointer">📅 Yearly Projection</summary>
                  <div className="overflow-auto max-h-60 mt-2">
                    <table className="w-full text-sm border-collapse border">
                      <thead>
                        <tr>
                          <th className="border px-1">Year</th>
                          <th className="border px-1">Monthly EMI</th>
                          <th className="border px-1">PV of EMI</th>
                          <th className="border px-1">Monthly Rent</th>
                          <th className="border px-1">PV of Rent</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.projection.map((p) => (
                          <tr key={p.year}>
                            <td className="border px-1">{p.year}</td>
                            <td className="border px-1">₹{p.monthlyEmi}</td>
                            <td className="border px-1">₹{p.pvOfEmi}</td>
                            <td className="border px-1">₹{p.monthlyRent}</td>
                            <td className="border px-1">₹{p.pvOfRent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">📈 Payment Breakdown</h2>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#99d5ff]"></span> EMI
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#0067B3]"></span> Rent
              </div>
            </div>
            {renderPieChart()}
          </div>
        </div>
        <EMIVsRentGuide/>
        </>
      )}

      {activeTab === "compare" && (
        <div className="text-center text-gray-600 py-10">
          <CompareBanks />
        </div>
      )}
    </div>
  );
}

export default EmiVsRent;
