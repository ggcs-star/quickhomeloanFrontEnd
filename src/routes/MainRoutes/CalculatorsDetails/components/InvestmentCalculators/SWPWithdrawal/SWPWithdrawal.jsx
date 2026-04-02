import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";

export default function SWPWithdrawal() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [inputs, setInputs] = useState({
    lump_sum_deposit: 100000,
    regular_withdrawal: 2000,
    withdrawal_frequency: "monthly",
    annual_withdrawal_adjustment: 0,
    adjustment_type: "percent",
    expected_annual_return: "",
    withdrawal_term: 10,
    term_unit: "years",
    include_year_wise: true,
  });

  const [results, setResults] = useState(null);

  const frequencyMap = {
    monthly: 12,
    quarterly: 4,
    "half-yearly": 2,
    yearly: 1,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Auto calculation whenever inputs change
  useEffect(() => {
    calculateSWP();
  }, [inputs]);

  const calculateSWP = () => {
    const principal = parseFloat(inputs.lump_sum_deposit) || 0;
    let withdrawal = parseFloat(inputs.regular_withdrawal) || 0;
    const freq = inputs.withdrawal_frequency;
    const annualAdj = parseFloat(inputs.annual_withdrawal_adjustment) || 0;
    const adjType = inputs.adjustment_type;
    const termValue = parseFloat(inputs.withdrawal_term) || 0;
    const termUnit = inputs.term_unit;
    const includeYearWise = inputs.include_year_wise;

    let annualReturn, rateSource;
    if (inputs.expected_annual_return) {
      annualReturn = parseFloat(inputs.expected_annual_return);
      rateSource = "user_input";
    } else {
      const adminLoanRate = 10;
      annualReturn = adminLoanRate || 10.0;
      rateSource = adminLoanRate ? "db_admin" : "system_default";
    }

    const periodsPerYear = frequencyMap[freq] || 12;

    const totalPeriods =
      termUnit === "years"
        ? Math.round(termValue * periodsPerYear)
        : Math.round((termValue / 12) * periodsPerYear);

    if (totalPeriods <= 0) return;

    const r = annualReturn / 100;
    const periodicRate = Math.pow(1 + r, 1 / periodsPerYear) - 1;

    let balance = principal;
    let periodicWithdrawal = withdrawal;
    let totalWithdrawn = 0;
    let totalReturns = 0;
    let corpusExhausted = false;

    let yearWise = [];
    let currentYear = 1;
    let periodsInCurrentYear = 0;
    let yearWithdrawn = 0;
    let yearReturns = 0;
    let yearStartingBalance = balance;

    for (let p = 1; p <= totalPeriods; p++) {
      const interest = balance * periodicRate;
      balance += interest;
      totalReturns += interest;
      yearReturns += interest;

      const actualWithdrawal = Math.min(periodicWithdrawal, balance);
      balance -= actualWithdrawal;
      totalWithdrawn += actualWithdrawal;
      yearWithdrawn += actualWithdrawal;
      periodsInCurrentYear++;

      if (balance <= 0.000001) {
        balance = 0;
        corpusExhausted = true;
        if (includeYearWise) {
          yearWise.push({
            year: currentYear,
            starting_balance: yearStartingBalance.toFixed(2),
            total_withdrawn: yearWithdrawn.toFixed(2),
            total_returns: yearReturns.toFixed(2),
            ending_balance: balance.toFixed(2),
          });
        }
        break;
      }

      if (periodsInCurrentYear >= periodsPerYear) {
        if (adjType === "percent") {
          periodicWithdrawal *= 1 + annualAdj / 100;
        } else {
          periodicWithdrawal = Math.max(0, periodicWithdrawal + annualAdj);
        }

        if (includeYearWise) {
          yearWise.push({
            year: currentYear,
            starting_balance: yearStartingBalance.toFixed(2),
            total_withdrawn: yearWithdrawn.toFixed(2),
            total_returns: yearReturns.toFixed(2),
            ending_balance: balance.toFixed(2),
          });
        }

        currentYear++;
        periodsInCurrentYear = 0;
        yearWithdrawn = 0;
        yearReturns = 0;
        yearStartingBalance = balance;
      }
    }

    const msg = corpusExhausted
      ? `💣 Corpus exhausted after ${(totalWithdrawn / withdrawal / periodsPerYear).toFixed(
          2
        )} years.`
      : `✅ Corpus lasted full term of ${termValue} ${termUnit}.`;

    setResults({
      message: msg,
      final_balance: balance.toFixed(2),
      total_withdrawals: totalWithdrawn.toFixed(2),
      total_returns: totalReturns.toFixed(2),
      corpus_exhausted: corpusExhausted,
      rate_used: {
        annual_return_percent: annualReturn,
        rate_source: rateSource,
      },
      year_wise: includeYearWise ? yearWise : null,
    });
  };

  // const chartData =
  //   results && !results.corpus_exhausted
  //     ? [
  //         {
  //           title: "Total Withdrawn",
  //           value: parseFloat(results.total_withdrawals),
  //           color: "#80d4ff",
  //         },
  //         {
  //           title: "Total Returns",
  //           value: parseFloat(results.total_returns),
  //           color: "#ffb3b3",
  //         },
  //       ]
  //     : [];

const chartData = results
  ? parseFloat(results.total_withdrawals) === 0 && parseFloat(results.total_returns) === 0
    ? [{ title: "No Data", value: 1, color: "#e0e0e0" }]
    : [
        {
          title: "Total Withdrawn",
          value: Math.max(parseFloat(results.total_withdrawals), 0.01),
          color: "#80d4ff",
        },
        {
          title: "Total Returns",
          value: Math.max(parseFloat(results.total_returns), 0.01),
          color: "#ffb3b3",
        },
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
        labelStyle={{ fontSize: "10px", fill: "#333", fontWeight: "bold" }}
        radius={42}
        startAngle={-90}
      />
      <div className="flex flex-col gap-2 mt-2 text-sm">
        {chartData.map((d) => (
          <div key={d.title} className="flex items-center gap-2">
            <span
              className="block w-4 h-4 rounded-full"
              style={{ backgroundColor: d.color }}
            ></span>
            {d.title}
          </div>
        ))}
      </div>
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
          {/* Inputs */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {[
              { label: "Lumpsum (₹)", name: "lump_sum_deposit", min: 0, max: 1000000, step: 1000 },
              { label: "Regular Withdrawal (₹)", name: "regular_withdrawal", min: 100, max: 50000, step: 100 },
              { label: "Annual Withdrawal Adjustment (%)", name: "annual_withdrawal_adjustment", min: 0, max: 50, step: 0.1 },
              { label: "Expected Annual Return (%)", name: "expected_annual_return", min: 0, max: 20, step: 0.1 },
              { label: "Withdrawal Term", name: "withdrawal_term", min: 1, max: 30, step: 1 },
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

            {/* Frequency / Adjustment / Term Unit */}
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <select
                name="withdrawal_frequency"
                value={inputs.withdrawal_frequency}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              >
                {Object.keys(frequencyMap).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>

              <select
                name="adjustment_type"
                value={inputs.adjustment_type}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="percent">Percent</option>
                <option value="rupee">Rupee</option>
              </select>

              <select
                name="term_unit"
                value={inputs.term_unit}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                name="include_year_wise"
                checked={inputs.include_year_wise}
                onChange={handleChange}
              />
              <label>Include Year-wise Report</label>
            </div>
          </div>

          {/* Right Chart / Results */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">SWP Summary</h2>
            {results && (
              <>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Total Withdrawn</div>
                  <div className="text-right font-bold text-blue-700">₹{results.total_withdrawals}</div>
                  <div>Total Returns</div>
                  <div className="text-right font-bold text-green-700">₹{results.total_returns}</div>
                  <div>Final Balance</div>
                  <div className="text-right font-bold text-red-600">₹{results.final_balance}</div>
                  <div>Annual Return</div>
                  <div className="text-right font-bold text-purple-700">{results.rate_used.annual_return_percent}%</div>
                </div>

                {renderPieChartWithLegend()}
              </>
            )}
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
