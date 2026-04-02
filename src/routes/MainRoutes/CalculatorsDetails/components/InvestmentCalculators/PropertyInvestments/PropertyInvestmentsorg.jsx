import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PropertyInvestmentsorg = () => {
  const [inputs, setInputs] = useState({
    propertyValue: 5000000,
    appreciationRate: 7,
    holdingPeriod: 20,
    loanAmount: 4000000,
    interestRate: 8.5,
    loanTenure: 20,
    emiFrequency: 12,
    maintenanceCost: 10000,
    propertyTax: 5000,
    insurance: 3000,
  });

  const [results, setResults] = useState({
    futureValue: 0,
    emiAmount: 0,
    totalEmi: 0,
    netGain: 0,
    yearlyBreakdown: [],
    chartData: null,
  });

  const [chartInstance, setChartInstance] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // FIXED EMI formula with frequency-adjusted compounding
  const calculateEMI = (P, annualRate, freq, years) => {
    const r = annualRate / 100 / freq;
    const n = years * freq;

    if (r === 0) return P / n;

    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const formatCurrency = (amount) =>
    "₹ " + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const calculateResults = () => {
    const {
      propertyValue,
      appreciationRate,
      holdingPeriod,
      loanAmount,
      interestRate,
      loanTenure,
      emiFrequency,
      maintenanceCost,
      propertyTax,
      insurance,
    } = inputs;

    const emi = calculateEMI(
      loanAmount,
      interestRate,
      emiFrequency,
      loanTenure
    );

    const futurePropertyValue =
      propertyValue * Math.pow(1 + appreciationRate / 100, holdingPeriod);

    const totalEmiOutflow = emi * (loanTenure * emiFrequency);

    const annualOtherCosts = maintenanceCost + propertyTax + insurance;
    const totalOtherCosts = annualOtherCosts * holdingPeriod;

    const netGainLoss =
      futurePropertyValue - totalEmiOutflow - totalOtherCosts;

    // yearly breakdown
    const yearlyBreakdown = [];
    let cumulativeEmi = 0;

    for (let year = 1; year <= holdingPeriod; year++) {
      const currentValue =
        propertyValue * Math.pow(1 + appreciationRate / 100, year);

      const emiThisYear = year <= loanTenure ? emi * emiFrequency : 0;
      cumulativeEmi += emiThisYear;

      const otherCostTillNow = annualOtherCosts * year;

      yearlyBreakdown.push({
        year,
        propertyValue: currentValue,
        cumulativeEmi,
        otherCosts: otherCostTillNow,
        netGainLoss: currentValue - cumulativeEmi - otherCostTillNow,
      });
    }

    // chart data
    const years = [];
    const propertyValues = [];
    const cumEMIs = [];
    const netValues = [];

    let cEmi = 0;
    for (let year = 0; year <= holdingPeriod; year++) {
      years.push(year);
      const val =
        propertyValue * Math.pow(1 + appreciationRate / 100, year);
      propertyValues.push(val);

      if (year > 0 && year <= loanTenure)
        cEmi += emi * emiFrequency;

      cumEMIs.push(cEmi);

      const other = annualOtherCosts * year;
      netValues.push(val - cEmi - other);
    }

    setResults({
      futureValue: futurePropertyValue,
      emiAmount: emi,
      totalEmi: totalEmiOutflow,
      netGain: netGainLoss,
      yearlyBreakdown,
      chartData: {
        years,
        propertyValues,
        cumEMIs,
        netValues,
      },
    });
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  useEffect(() => {
    if (results.chartData && document.getElementById("comparisonChart")) {
      updateChart(results.chartData);
    }
  }, [results.chartData]);

  const updateChart = (chartData) => {
    const ctx = document
      .getElementById("comparisonChart")
      .getContext("2d");

    if (chartInstance) chartInstance.destroy();

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: chartData.years,
        datasets: [
          {
            label: "Property Value",
            data: chartData.propertyValues,
            borderColor: "#444",
            backgroundColor: "rgba(150,150,150,0.1)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Cumulative EMI",
            data: chartData.cumEMIs,
            borderColor: "#888",
            backgroundColor: "rgba(200,200,200,0.1)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Net Value",
            data: chartData.netValues,
            borderColor: "#000",
            backgroundColor: "rgba(0,0,0,0.1)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: "#e5e5e5" },
            title: { display: true, text: "Years" },
          },
          y: {
            grid: { color: "#e5e5e5" },
            title: { display: true, text: "Amount (₹)" },
            ticks: {
              callback: (v) => "₹" + (v / 1000000).toFixed(1) + "M",
            },
          },
        },
        plugins: {
          legend: { labels: { color: "#000" } },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${formatCurrency(
                  context.raw
                )}`,
            },
          },
        },
      },
    });

    setChartInstance(newChart);
  };

  useEffect(() => {
    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [chartInstance]);

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-8 p-6 bg-white border border-gray-200 rounded-xl">
          <h1 className="text-3xl font-bold text-black mb-2">
            Property Investment vs EMI Outflow Calculator
          </h1>
          <p className="text-gray-600">
            Compare future property value vs loan payments
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* INPUT SECTION */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl">

            <h2 className="text-xl font-bold mb-4 text-black">
              Input Parameters
            </h2>

            {/* PROPERTY DETAILS */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-3">
                Property Details
              </h3>

              <InputField
                label="Current Property Value (₹)"
                name="propertyValue"
                value={inputs.propertyValue}
                onChange={handleInputChange}
              />

              <InputField
                label="Expected Annual Appreciation Rate (%)"
                name="appreciationRate"
                value={inputs.appreciationRate}
                step="0.1"
                onChange={handleInputChange}
              />

              <InputField
                label="Holding Period (Years)"
                name="holdingPeriod"
                value={inputs.holdingPeriod}
                onChange={handleInputChange}
              />
            </div>

            {/* LOAN DETAILS */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-3">Loan Details</h3>

              <InputField
                label="Loan Amount (₹)"
                name="loanAmount"
                value={inputs.loanAmount}
                onChange={handleInputChange}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Interest Rate (%)"
                  name="interestRate"
                  value={inputs.interestRate}
                  step="0.1"
                  onChange={handleInputChange}
                />

                <InputField
                  label="Loan Tenure (Years)"
                  name="loanTenure"
                  value={inputs.loanTenure}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-black mb-1">
                  EMI Frequency
                </label>
                <select
                  name="emiFrequency"
                  value={inputs.emiFrequency}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="2">Half-Yearly</option>
                  <option value="1">Yearly</option>
                </select>
              </div>
            </div>

            {/* EXTRA COSTS */}
            <div>
              <h3 className="font-semibold text-black mb-3">
                Annual Extra Costs
              </h3>

              <InputField
                label="Maintenance (₹)"
                name="maintenanceCost"
                value={inputs.maintenanceCost}
                onChange={handleInputChange}
              />

              <InputField
                label="Property Tax (₹)"
                name="propertyTax"
                value={inputs.propertyTax}
                onChange={handleInputChange}
              />

              <InputField
                label="Insurance (₹)"
                name="insurance"
                value={inputs.insurance}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl">

            <h2 className="text-xl font-bold text-black mb-6">Results</h2>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <SummaryCard label="Future Property Value" value={results.futureValue} />
              <SummaryCard label="EMI Amount" value={results.emiAmount} />
              <SummaryCard label="Total EMI Outflow" value={results.totalEmi} />
              <SummaryCard label="Net Gain / Loss" value={results.netGain} />
            </div>

            {/* BREAKDOWN TABLE */}
            <h3 className="font-semibold text-black mb-3">
              Yearly Breakdown
            </h3>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-100 text-black">
                  <tr>
                    <th className="px-4 py-2 text-left">Year</th>
                    <th className="px-4 py-2 text-right">Property Value</th>
                    <th className="px-4 py-2 text-right">Cumulative EMI</th>
                    <th className="px-4 py-2 text-right">Other Costs</th>
                    <th className="px-4 py-2 text-right">Net Value</th>
                  </tr>
                </thead>
                <tbody>
                  {results.yearlyBreakdown.map((row, i) => (
                    <tr
                      key={row.year}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2">{row.year}</td>
                      <td className="px-4 py-2 text-right">
                        {formatCurrency(row.propertyValue)}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {formatCurrency(row.cumulativeEmi)}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {formatCurrency(row.otherCosts)}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {formatCurrency(row.netGainLoss)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CHART */}
            <div className="mt-8">
              <div className="h-80 border border-gray-200 p-2 rounded-lg">
                <canvas id="comparisonChart"></canvas>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// COMPONENT: Summary Card
const SummaryCard = ({ label, value }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg text-center">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold text-black">
        {value.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}
      </p>
    </div>
  );
};

// COMPONENT: Input Field
const InputField = ({ label, name, value, onChange, step = "1" }) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-black mb-1">
      {label}
    </label>
    <input
      type="number"
      name={name}
      step={step}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-3 py-2"
    />
  </div>
);

export default PropertyInvestmentsorg;
