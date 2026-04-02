import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import LoanVsFdGuide from "./LoanVsFdGuide";

function LoanVsFd() {
  const [activeTab, setActiveTab] = useState("calculator");

  const [form, setForm] = useState({
    principal: 1000000,
    term: 10,
    term_type: "years",
    loan_rate: 10,
    fd_rate: 8,
    inflation_rate: 5,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "term_type" ? value : parseFloat(value) || 0,
    }));
  };

  const calculate = () => {
    const {
      principal,
      term,
      term_type,
      loan_rate,
      fd_rate,
      inflation_rate,
    } = form;

    if (principal <= 0 || loan_rate <= 0 || term <= 0) return;

    const termYears = term_type === "months" ? term / 12 : term;
    const termMonths = term_type === "months" ? term : term * 12;

    // Loan EMI Calculation
    const monthlyRate = loan_rate / 12 / 100;
    const pow = Math.pow(1 + monthlyRate, termMonths);
    const emi =
      monthlyRate === 0
        ? principal / termMonths
        : (principal * monthlyRate * pow) / (pow - 1);
    const totalPaid = emi * termMonths;
    const totalInterest = totalPaid - principal;

    // FD Calculation (compound annually)
    const fdMaturity = principal * Math.pow(1 + fd_rate / 100, termYears);
    const fdInterest = fdMaturity - principal;

    // Inflation Adjustment
    const inflationFactor = Math.pow(1 + inflation_rate / 100, termYears);
    const fdRealValue = fdMaturity / inflationFactor;

    setResult({
      inputs: { ...form, termYears, termMonths },
      loan_details: {
        monthly_emi: +emi.toFixed(2),
        total_interest_paid: +totalInterest.toFixed(2),
        total_amount_paid: +totalPaid.toFixed(2),
      },
      fd_details: {
        total_interest_earned: +fdInterest.toFixed(2),
        fd_maturity: +fdMaturity.toFixed(2),
        real_value_after_inflation: +fdRealValue.toFixed(2),
      },
    });
  };

  useEffect(() => {
    calculate();
  }, [form]);

  const renderPieChart = () => {
    if (!result) return null;

    return (
      <div className="flex justify-center mt-6">
        <PieChart
          data={[
            { title: "Principal", value: form.principal, color: "#99d5ff" },
            { title: "Interest", value: result.loan_details.total_interest_paid, color: "#0067B3" },
          ]}
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
              activeTab === "calculator" ? "bg-white text-black shadow" : "bg-transparent text-gray-600"
            }`}
          >
            🧮 Calculator
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "compare" ? "bg-white text-black shadow" : "bg-transparent text-gray-600"
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
              <div className="space-y-6">
                {[
                  {
                    label: "Principal Amount (₹)",
                    name: "principal",
                    min: 1000,
                    max: 10000000,
                    step: 1000,
                    suffix: "₹",
                  },
                  {
                    label: "Loan Interest Rate (%)",
                    name: "loan_rate",
                    min: 0.1,
                    max: 20,
                    step: 0.1,
                    suffix: "%",
                  },
                  {
                    label: "FD Interest Rate (%)",
                    name: "fd_rate",
                    min: 0,
                    max: 20,
                    step: 0.1,
                    suffix: "%",
                  },
                  {
                    label: "Inflation Rate (%)",
                    name: "inflation_rate",
                    min: 0,
                    max: 20,
                    step: 0.1,
                    suffix: "%",
                  },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium mb-1">{item.label}</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          name={item.name}
                          min={item.min}
                          max={item.max}
                          step={item.step}
                          value={form[item.name]}
                          onChange={handleChange}
                          className="w-32 border rounded-lg p-2"
                        />
                        <span className="text-sm text-gray-600">{item.suffix}</span>
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

                {/* Term Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Term</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="term"
                      value={form.term}
                      min={1}
                      max={360}
                      step={1}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-2"
                    />
                    <select
                      name="term_type"
                      value={form.term_type}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-2"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                  <input
                    type="range"
                    name="term"
                    min={1}
                    max={360}
                    step={1}
                    value={form.term}
                    onChange={handleChange}
                    className="w-full mt-2"
                  />
                </div>

                {/* Calculate Button */}
                {/* <button
                  onClick={calculate}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
                >
                  Calculate
                </button> */}
              </div>

              {/* Result Section */}
              {result && (
                <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                  <h2 className="text-xl font-semibold">📋 Loan vs FD Summary</h2>

                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>Monthly EMI</div>
                    <div className="text-right text-green-700 font-bold">
                      ₹ {result.loan_details.monthly_emi.toLocaleString()}
                    </div>

                    <div>Total Interest Paid</div>
                    <div className="text-right">
                      ₹ {result.loan_details.total_interest_paid.toLocaleString()}
                    </div>

                    <div>Total Payment</div>
                    <div className="text-right text-purple-700 font-bold">
                      ₹ {result.loan_details.total_amount_paid.toLocaleString()}
                    </div>

                    <div>Term Duration</div>
                    <div className="text-right font-bold">
                      {result.inputs.termMonths} months
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex justify-between">
                      <span>💰 FD Maturity Amount</span>
                      <span className="font-semibold text-blue-700">
                        ₹ {result.fd_details.fd_maturity.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>💸 Total Interest Earned (FD)</span>
                      <span className="font-semibold text-green-700">
                        ₹ {result.fd_details.total_interest_earned.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>📉 Real Value After Inflation</span>
                      <span className="font-semibold text-red-600">
                        ₹ {result.fd_details.real_value_after_inflation.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Payment Breakdown</h2>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#99d5ff]"></span> Principal
                </div>
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#0067B3]"></span> Interest
                </div>
              </div>
              {renderPieChart()}
            </div>
          </div>

          <LoanVsFdGuide />
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

export default LoanVsFd;
