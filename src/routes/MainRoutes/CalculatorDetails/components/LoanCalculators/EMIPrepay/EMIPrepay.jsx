import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import EMIPrepayGuide from "./EMIPrepayGuide";

function EMIPrepay() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    loan_amount: 1000000,
    tenure: 240, // months
    tenure_type: "months",
    loan_rate: 10,
    prepayment: 200000,
    invest_rate: 12,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    const defaults = {
      loan_amount: 1000000,
      tenure: 240,
      tenure_type: "months",
      loan_rate: 10,
      prepayment: 200000,
      invest_rate: 12,
    };

    const loan_amount = parseFloat(form.loan_amount || defaults.loan_amount);
    const tenure = parseFloat(form.tenure || defaults.tenure);
    const tenure_type = form.tenure_type?.toLowerCase() || defaults.tenure_type;
    const prepayment = parseFloat(form.prepayment || defaults.prepayment);
    const loan_rate = parseFloat(form.loan_rate || defaults.loan_rate);
    const invest_rate = parseFloat(form.invest_rate || defaults.invest_rate);

    if (loan_amount <= 0 || tenure <= 0 || loan_rate <= 0) {
      setResult({
        status: "error",
        message: "Loan Amount, Tenure, and Loan Rate must be greater than 0",
      });
      return;
    }

    const tenure_months = tenure_type === "years" ? tenure * 12 : tenure;
    const tenure_years = tenure_months / 12;
    const monthly_rate = loan_rate / 12 / 100;

    const emi =
      (loan_amount * monthly_rate * Math.pow(1 + monthly_rate, tenure_months)) /
      (Math.pow(1 + monthly_rate, tenure_months) - 1);

    const total_payment_original = emi * tenure_months;
    const total_interest_original = total_payment_original - loan_amount;

    const remaining_loan = loan_amount - prepayment;
    const months_after_prepay =
      Math.log(emi / (emi - remaining_loan * monthly_rate)) / Math.log(1 + monthly_rate);

    const total_payment_prepay = emi * months_after_prepay + prepayment;
    const total_interest_prepay = total_payment_prepay - loan_amount;
    const interest_saved = total_interest_original - total_interest_prepay;

    const future_value_invest = prepayment * Math.pow(1 + invest_rate / 100, tenure_years);
    const investment_interest = future_value_invest - prepayment;

    const decision =
      investment_interest > interest_saved
        ? `📈 Investing yields more (₹${investment_interest.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}) than interest saved from prepayment (₹${interest_saved.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}).`
        : `💸 Prepayment saves more interest (₹${interest_saved.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}) than investing (₹${investment_interest.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}).`;

    setResult({
      status: "success",
      data: {
        emi: emi.toFixed(2),
        total_interest_original: total_interest_original.toFixed(2),
        total_interest_after_prepayment: total_interest_prepay.toFixed(2),
        interest_saved: interest_saved.toFixed(2),
        future_value_investment: future_value_invest.toFixed(2),
        investment_returns: investment_interest.toFixed(2),
        months_after_prepay: months_after_prepay.toFixed(1),
        decision,
      },
    });
  };

  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const chartData = result
    ? [
      { title: "Original Interest", value: parseFloat(result.data.total_interest_original), color: "#ff9999" },
      { title: "Interest Saved", value: parseFloat(result.data.interest_saved), color: "#99ff99" },
      { title: "Investment Returns", value: parseFloat(result.data.investment_returns), color: "#6699ff" },
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
          label={({ dataEntry }) => (dataEntry.value > 0 ? `${Math.round(dataEntry.percentage)}%` : "")}
          labelStyle={{ fontSize: "6px", fill: "#333", fontWeight: "bold" }}
          radius={40}
          startAngle={-90}
        />
        {/* Legend */}

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
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "calculator" ? "bg-white text-black shadow" : "bg-transparent text-gray-600"
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

      {/* Calculator Tab */}
      {activeTab === "calculator" && (
        <>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Inputs Column */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {/* Inputs */}
            {[
              {
                label: "Loan Amount (₹)",
                name: "loan_amount",
                min: 1000,
                max: 10000000,
                step: 1000,
                suffix: "₹",
              },
              {
                label: "Tenure",
                name: "tenure",
                min: 1,
                max: 30,
                step: 1,
                suffix: "Months",
              },
              {
                label: "Loan Interest Rate (%)",
                name: "loan_rate",
                min: 1,
                max: 20,
                step: 0.1,
                suffix: "%",
              },
              {
                label: "Prepayment Amount (₹)",
                name: "prepayment",
                min: 1000,
                max: 10000000,
                step: 1000,
                suffix: "₹",
              },
              {
                label: "Investment Return Rate (%)",
                name: "invest_rate",
                min: 1,
                max: 20,
                step: 0.1,
                suffix: "%",
              },
            ].map((field) => (
              <div key={field.name}>
                <div className="flex justify-between items-center">
                  <label className="block text-sm mb-1">{field.label}</label>
                  <div className="flex items-center space-x-1 bg-blue-500/40 mt-2 px-2 rounded">
                    <input
                      type="number"
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      className="w-20 bg-transparent text-blue-800 p-2 outline-none"
                    />
                    <span className="text-blue-800 font-medium">{field.suffix}</span>
                  </div>
                </div>
                <input
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  className="w-full"
                  type="range"
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Tenure Type */}
            <div>
              <label className="block text-sm mb-1">Tenure Type</label>
              <select
                name="tenure_type"
                value={form.tenure_type}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                {/* Loan Details */}
                <h2 className="text-xl font-semibold">Loan Details</h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div>Monthly EMI</div>
                  <div className="text-right font-bold text-green-700">
                    ₹ {result.data.emi}
                  </div>
                  <div>Interest Saved</div>
                  <div className="text-right text-green-700">
                    ₹ {result.data.interest_saved}
                  </div>
                  <div>Months Left</div>
                  <div className="text-right text-green-700">
                    {result.data.months_after_prepay}
                  </div>
                  <div>Investment Returns</div>
                  <div className="text-right text-green-700">
                    ₹ {result.data.investment_returns}
                  </div>
                </div>

                {/* Prepayment Comparison */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold">Prepayment vs Investment</h2>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>Prepayment Amount</div>
                    <div className="text-right text-red-600">
                      ₹ {form.prepayment}
                    </div>
                    <div>Investment Return Rate</div>
                    <div className="text-right text-red-600">
                      {form.invest_rate}%
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Right Column */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Comparison Breakdown</h2>

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#ff9999]"></span>
                Original Interest
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#99ff99]"></span>
                Interest Saved
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#6699ff]"></span>
                Investment Returns
              </div>
            </div>
            {renderPieChartWithLegend()}

          </div>
        </div>
        <EMIPrepayGuide/>
        </>
      )}

      {activeTab === "compare" && <CompareBanks />}
    </div>
  );
}

export default EMIPrepay;
