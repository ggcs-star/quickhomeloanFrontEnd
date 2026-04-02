import React, { useState, useMemo } from "react";

/* -------------------------------------------
   SCENARIO PRESETS
------------------------------------------- */
const SCENARIOS = {
  base: {
    label: "Base",
    inputs: {
      propertyValue: 5000000,
      appreciation: 4,
      years: 20,
      loanAmount: 4000000,
      interestRate: 9.5,
      tenure: 20,
      emiFrequency: 12,
    },
  },
  conservative: {
    label: "Conservative",
    inputs: {
      propertyValue: 5000000,
      appreciation: 10,
      years: 20,
      loanAmount: 4000000,
      interestRate: 8,
      tenure: 20,
      emiFrequency: 12,
    },
  },
  aggressive: {
    label: "Aggressive",
    inputs: {
      propertyValue: 5000000,
      appreciation: 7,
      years: 20,
      loanAmount: 4000000,
      interestRate: 8.5,
      tenure: 20,
      emiFrequency: 12,
    },
  },
};

/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function PropertyInvestmentCalculator() {
  const [activeScenario, setActiveScenario] = useState("base");
  const [inputs, setInputs] = useState(SCENARIOS.base.inputs);

  /* ACCORDION STATES */
  const [showAnnualCosts, setShowAnnualCosts] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleScenarioSelect = (key) => {
    setActiveScenario(key);
    setInputs(SCENARIOS[key].inputs);
  };

  const updateInput = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const results = useMemo(() => calculateResults(inputs), [inputs]);

  return (
    <div className="space-y-6">

      {/* QUICK SCENARIOS */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold text-sm text-gray-700">
            Quick Scenarios:
          </span>

          {Object.keys(SCENARIOS).map((key) => (
            <button
              key={key}
              onClick={() => handleScenarioSelect(key)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md
                ${
                  activeScenario === key
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {SCENARIOS[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT PANEL */}
        <div className="lg:col-span-4 space-y-6">

          {/* PROPERTY & LOAN */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold border-b pb-3 mb-4">
              Property & Loan
            </h2>

            <div className="space-y-4">
              <Input label="Current Property Value" prefix="₹"
                value={inputs.propertyValue}
                onChange={(v) => updateInput("propertyValue", v)}
              />
              <Input label="Expected Annual Appreciation" prefix="%"
                value={inputs.appreciation}
                onChange={(v) => updateInput("appreciation", v)}
              />
              <Input label="Number of Years to Hold" prefix="Yrs"
                value={inputs.years}
                onChange={(v) => updateInput("years", v)}
              />
              <Input label="Loan Amount" prefix="₹"
                value={inputs.loanAmount}
                onChange={(v) => updateInput("loanAmount", v)}
              />
              <Input label="Annual Interest Rate" prefix="%"
                value={inputs.interestRate}
                onChange={(v) => updateInput("interestRate", v)}
              />
              <Input label="Loan Tenure" prefix="Yrs"
                value={inputs.tenure}
                onChange={(v) => updateInput("tenure", v)}
              />
            </div>
          </div>

          {/* ANNUAL COSTS + ADVANCED OPTIONS */}
          <div className="bg-white rounded-lg shadow-md divide-y">

            {/* ANNUAL COSTS */}
            <div>
              <button
                onClick={() => setShowAnnualCosts(!showAnnualCosts)}
                className="w-full flex justify-between items-center p-4 font-semibold text-gray-800"
              >
                Annual Costs
                <span className={`transition-transform ${showAnnualCosts ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {showAnnualCosts && (
                <div className="p-4 border-t">
                  <table className="w-full text-sm border">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Maintenance</td>
                        <td className="p-2 text-right">₹50,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Property Tax</td>
                        <td className="p-2 text-right">₹30,000</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="p-2">Total / Year</td>
                        <td className="p-2 text-right">₹80,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* ADVANCED OPTIONS */}
            <div>
              <button
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="w-full flex justify-between items-center p-4 font-semibold text-gray-800"
              >
                Advanced Options
                <span className={`transition-transform ${showAdvancedOptions ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {showAdvancedOptions && (
                <div className="p-4 border-t space-y-3 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Include rental income
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Include tax benefits
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Early loan prepayment
                  </label>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-base font-semibold mb-4">Key Takeaways</h3>

          <ul className="list-disc list-inside text-sm text-gray-600 mb-6">
            <li>Property Value at Exit: <b>₹{results.exitValue.toLocaleString()}</b></li>
            <li>Net Profit: <b className="text-green-600">₹{results.netProfit.toLocaleString()}</b></li>
            <li>Break-even Year: <b>Year {results.breakEvenYear}</b></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Metric label="Net Profit" value={`₹${results.netProfit}`} />
            <Metric label="CAGR" value={`${results.cagr}%`} />
            <Metric label="ROI" value={`${results.roi}%`} />
            <Metric label="Exit Value" value={`₹${results.exitValue}`} />
            <Metric label="Total Invested" value={`₹${results.totalInvested}`} />
            <Metric label="Interest Paid" value={`₹${results.totalInterest}`} />
          </div>
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------
   SMALL COMPONENTS
------------------------------------------- */
function Input({ label, prefix, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-2 text-gray-500">{prefix}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border rounded-lg pl-8 p-2 text-sm"
        />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

/* -------------------------------------------
   CALCULATION LOGIC
------------------------------------------- */
function calculateResults(inputs) {
  const exitValue =
    inputs.propertyValue *
    Math.pow(1 + inputs.appreciation / 100, inputs.years);

  const totalEmiPaid = inputs.loanAmount * 1.25;
  const totalInterest = totalEmiPaid - inputs.loanAmount;
  const totalInvested = inputs.propertyValue - inputs.loanAmount + totalEmiPaid;
  const netProfit = exitValue - totalInvested;

  const cagr =
    Math.pow(exitValue / inputs.propertyValue, 1 / inputs.years) - 1;

  return {
    exitValue: Math.round(exitValue),
    netProfit: Math.round(netProfit),
    totalInterest: Math.round(totalInterest),
    totalInvested: Math.round(totalInvested),
    breakEvenYear: netProfit > 0 ? 1 : inputs.years,
    cagr: (cagr * 100).toFixed(2),
    roi: ((netProfit / totalInvested) * 100).toFixed(2),
  };
}
