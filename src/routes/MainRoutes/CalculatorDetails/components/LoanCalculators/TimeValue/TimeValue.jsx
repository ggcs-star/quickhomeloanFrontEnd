import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import TimeValueGuide from "./TimeValueGuide";

function TimeValue() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    monthly_emi: 10000,
    years: 10,
    inflation: 6,
    mode: "yearly", // yearly or monthly
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    const { monthly_emi, years, inflation, mode } = form;
    const emi = parseFloat(monthly_emi);
    const totalYears = parseFloat(years);
    const infl = parseFloat(inflation);

    if (emi <= 0 || totalYears <= 0) {
      setResult({
        status: "error",
        message: "Monthly EMI and Years must be greater than 0",
      });
      return;
    }

    const totalMonths = totalYears * 12;
    const totalPaid = emi * totalMonths;
    let pvTotal = 0;
    let yearlyBreakdown = [];

    if (mode === "monthly") {
      const monthlyInflation = infl / 12 / 100.0;
      for (let y = 1; y <= totalYears; y++) {
        let pvYear = 0.0;
        for (let m = 1; m <= 12; m++) {
          const t = (y - 1) * 12 + m;
          const pvMonth = emi / Math.pow(1 + monthlyInflation, t);
          pvYear += pvMonth;
          pvTotal += pvMonth;
        }
        yearlyBreakdown.push({
          year: y,
          monthly_emi: emi.toFixed(2),
          pv_of_year_total: pvYear.toFixed(2),
          pv_of_emi_avg_month: (pvYear / 12).toFixed(2),
        });
      }
    } else {
      const annualFactor = 1 + infl / 100.0;
      for (let y = 1; y <= totalYears; y++) {
        const pvPerMonthInYear = emi / Math.pow(annualFactor, y);
        const pvYearTotal = pvPerMonthInYear * 12;
        pvTotal += pvYearTotal;
        yearlyBreakdown.push({
          year: y,
          monthly_emi: emi.toFixed(2),
          pv_of_emi: pvPerMonthInYear.toFixed(2),
          pv_of_year_total: pvYearTotal.toFixed(2),
        });
      }
    }

    const output = {
      status: "success",
      data: {
        total_paid: totalPaid.toFixed(2),
        pv_total: pvTotal.toFixed(2),
        yearly_breakdown: yearlyBreakdown,
      },
    };
    setResult(output);
  };

  useEffect(() => {
    calculate();
  }, [form]);

  const chartData = result
    ? [
      { title: "Total Paid", value: parseFloat(result.data.total_paid), color: "#ffb3b3" },
      { title: "Present Value (After Inflation)", value: parseFloat(result.data.pv_total), color: "#80d4ff" },
    ]
    : [];

  const renderPieChartWithLegend = () => {
    if (!result || result.status === "error") return null;
    return (
      <div className="flex flex-col items-center gap-4 mt-4">
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
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm">
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "compare" ? "bg-white text-black shadow" : "bg-transparent text-gray-600"
              }`}
          >
            🏦 Compare Banks
          </button>
        </div>
      </div>

      {activeTab === "calculator" && (
        <>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Inputs Section */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {[
              { label: "Monthly EMI (₹)", name: "monthly_emi", min: 1000, max: 200000, step: 500 },
              { label: "Years", name: "years", min: 1, max: 30, step: 1 },
              { label: "Inflation Rate (%)", name: "inflation", min: 0, max: 15, step: 0.1 },
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
                      className="w-20 bg-transparent text-blue-800 p-2 outline-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  name={item.name}
                  value={form[item.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}

            {/* Mode Selection */}
            {/* <div>
              <label className="block text-sm mb-1">Mode</label>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="yearly">Yearly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div> */}

            {/* Result Section */}
            {result && (
              <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">Inflation Adjustment Summary</h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div>Total Amount Paid</div>
                  <div className="text-right text-green-700 font-bold">
                    ₹ {result.data.total_paid}
                  </div>
                  <div>Present Value (After Inflation)</div>
                  <div className="text-right text-blue-700 font-bold">
                    ₹ {result.data.pv_total}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Chart Section */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Comparison Breakdown</h2>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#ffb3b3]"></span>
                Total Paid
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#80d4ff]"></span>
                Present Value (After Inflation)
              </div>

            </div>
            {renderPieChartWithLegend()}
          </div>
        </div>
        <TimeValueGuide/>
        </>
      )}

      {activeTab === "compare" && (
        <div className="text-center text-gray-600 py-10">
          <CompareBanks />
        </div>
      )}

      {/* Chart Tab */}
      {activeTab === "chart" && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {result ? (
            <>
              <h3 className="font-semibold mb-2">📅 Yearly Breakdown</h3>
              <table className="w-full border text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-1">Year</th>
                    <th className="border p-1">Monthly EMI (₹)</th>
                    <th className="border p-1">PV of Year Total (₹)</th>
                    <th className="border p-1">
                      {form.mode === "monthly"
                        ? "Avg PV of EMI (₹)"
                        : "PV of EMI (₹)"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {result.data.yearly_breakdown.map((row, i) => (
                    <tr key={i} className="text-center">
                      <td className="border p-1">{row.year}</td>
                      <td className="border p-1">{row.monthly_emi}</td>
                      <td className="border p-1">{row.pv_of_year_total}</td>
                      <td className="border p-1">
                        {form.mode === "monthly"
                          ? row.pv_of_emi_avg_month
                          : row.pv_of_emi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-gray-500 text-center">
              Calculate first to see yearly breakdown.
            </p>
          )}
        </div>
      )}


    </div>
  );
}

export default TimeValue;
