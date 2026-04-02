import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";

const defaultExtra = { type: "one-time", amount: 0, start_month: 1 };

export default function AdvanceLoan() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [form, setForm] = useState({
    principal: 10000,
    tenure: 20,
    tenureType: "years",
    rate: 5,
    extra_repayments: [{ ...defaultExtra }],
  });

  const [result, setResult] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const ADMIN_RATE = 10.0;

  const format2 = (v) =>
    Number(v).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // --- Form Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "principal" || name === "rate" || name === "tenure"
          ? Number(value)
          : value,
    }));
  };

  const handleExtraChange = (idx, field, value) => {
    setForm((prev) => {
      const extras = prev.extra_repayments.map((ex, i) =>
        i === idx
          ? {
            ...ex,
            [field]:
              field === "amount" || field === "start_month"
                ? Number(value)
                : value,
          }
          : ex
      );
      return { ...prev, extra_repayments: extras };
    });
  };

  const addExtra = () => {
    setForm((prev) => ({
      ...prev,
      extra_repayments: [...prev.extra_repayments, { ...defaultExtra }],
    }));
  };

  const removeExtra = (idx) => {
    setForm((prev) => ({
      ...prev,
      extra_repayments: prev.extra_repayments.filter((_, i) => i !== idx),
    }));
  };

  // --- Loan Calculation ---
const calculateLoan = () => {
  const principal = Number(form.principal) || 0;
  const tenureRaw = Number(form.tenure) || 0;
  const tenureType = form.tenureType.toLowerCase();
  const extras = Array.isArray(form.extra_repayments)
    ? form.extra_repayments
    : [];

  let rate;
  const userRate = Number(form.rate);
  rate = !isNaN(userRate) && userRate > 0 ? userRate : ADMIN_RATE;

  if (principal <= 0 || tenureRaw <= 0) return;

  let tenureMonths =
    tenureType === "years" ? Math.round(tenureRaw * 12) : Math.round(tenureRaw);

  const monthlyRate = rate / (12 * 100);
  const pow = Math.pow(1 + monthlyRate, tenureMonths);
  const baseEMI =
    monthlyRate === 0
      ? principal / tenureMonths
      : (principal * monthlyRate * pow) / (pow - 1);

  let balance = principal;
  let totalInterest = 0;
  let totalExtraPaid = 0;
  let totalPrincipalPaidRegular = 0;
  let month = 0;
  const scheduleArr = [];

  while (balance > 0 && month < tenureMonths) {
    month++;
    const interest = balance * monthlyRate;
    let principalComponent = baseEMI - interest;

    let extraThisMonth = 0;
    for (const extra of extras) {
      const type = (extra.type || "one-time").toLowerCase();
      const amount = Number(extra.amount || 0);
      const start = Number(extra.start_month || 1);

      if (month >= start) {
        switch (type) {
          case "one-time":
            if (month === start) extraThisMonth += amount;
            break;
          case "monthly":
            extraThisMonth += amount;
            break;
          case "quarterly":
            if ((month - start) % 3 === 0) extraThisMonth += amount;
            break;
          case "half-yearly":
          case "half_yearly":
            if ((month - start) % 6 === 0) extraThisMonth += amount;
            break;
          case "yearly":
            if ((month - start) % 12 === 0) extraThisMonth += amount;
            break;
          default:
            break;
        }
      }
    }

    // Cap principal + extra to remaining balance
    if (principalComponent + extraThisMonth > balance) {
      principalComponent = balance - extraThisMonth;
    }

    totalPrincipalPaidRegular += principalComponent;
    totalExtraPaid += extraThisMonth;
    totalInterest += interest;

    balance -= principalComponent + extraThisMonth;

    scheduleArr.push({
      month,
      emi: format2(baseEMI),
      interest: format2(interest),
      principal_paid: format2(principalComponent),
      extra_repayment: format2(extraThisMonth),
      balance: format2(Math.max(balance, 0)),
    });

    if (balance <= 0) break;
  }

  const totalPayment = totalPrincipalPaidRegular + totalInterest + totalExtraPaid;

  const yearsTaken = Math.floor(month / 12);
  const remainingMonths = month % 12;

  setResult({
    inputs: { ...form, rate, tenureMonths },
    results: {
      emi: Number(baseEMI.toFixed(2)),
      principal_paid_regular: Number(totalPrincipalPaidRegular.toFixed(2)),
      extra_repayments: Number(totalExtraPaid.toFixed(2)),
      total_interest: Number(totalInterest.toFixed(2)),
      total_payment: Number(totalPayment.toFixed(2)), // ✅ now includes extra repayments
      months_taken: month,
      term_reduced: `${yearsTaken} years ${remainingMonths} months`,
    },
  });

  setSchedule(scheduleArr);
};


  useEffect(() => {
    calculateLoan();
  }, [form]);

  // --- Pie Chart ---
  const renderPieChart = () => {
    if (!result) return null;

    const principal = Number(form.principal) || 0;
    const interest = Number(result.results.total_interest) || 0;

    if (principal + interest <= 0) return null;

    const chartData = [
      { title: "Principal", value: Math.max(principal, 0.01), color: "#99d5ff" },
      { title: "Interest", value: Math.max(interest, 0.01), color: "#0067B3" },
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
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full shadow-sm">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "calculator"
                ? "bg-white text-black shadow"
                : "text-gray-600"
              }`}
          >
            🧮 Calculator
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "compare"
                ? "bg-white text-black shadow"
                : "text-gray-600"
              }`}
          >
            🏦 Compare Banks
          </button>
        </div>
      </div>

      {activeTab === "calculator" && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm mb-1">Loan Amount (₹)</label>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="number"
                    name="principal"
                    value={form.principal}
                    onChange={handleChange}
                    className="w-32 border rounded-md px-3 py-2"
                  />
                  <span>₹</span>
                </div>
                <input
                  type="range"
                  name="principal"
                  min={1000}
                  max={10000000}
                  step={1000}
                  value={form.principal}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm mb-1">Interest Rate (%)</label>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="number"
                    name="rate"
                    value={form.rate}
                    onChange={handleChange}
                    className="w-32 border rounded-md px-3 py-2"
                  />
                  <span>%</span>
                </div>
                <input
                  type="range"
                  name="rate"
                  min={0.1}
                  max={20}
                  step={0.1}
                  value={form.rate}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-sm mb-1">Tenure</label>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="number"
                    name="tenure"
                    value={form.tenure}
                    onChange={handleChange}
                    className="w-32 border rounded-md px-3 py-2"
                  />
                  <select
                    name="tenureType"
                    value={form.tenureType}
                    onChange={handleChange}
                    className="border rounded-md px-2 py-2"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                <input
                  type="range"
                  name="tenure"
                  min={1}
                  max={360}
                  step={1}
                  value={form.tenure}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Extra Repayments */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold">Extra Repayments</h3>
                <button
                  onClick={addExtra}
                  className="text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                  type="button"
                >
                  + Add
                </button>
              </div>

              {form.extra_repayments.map((ex, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2 items-end"
                >
                  <div>
                    <label className="block text-sm mb-1">Type</label>
                    <select
                      value={ex.type || "one-time"}
                      onChange={(e) =>
                        handleExtraChange(idx, "type", e.target.value)
                      }
                      className="w-full border rounded-md px-2 py-2"
                    >
                      <option value="one-time">One-time</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="half-yearly">Half-yearly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Amount (₹)</label>
                    <input
                      type="number"
                      value={ex.amount || 0}
                      onChange={(e) =>
                        handleExtraChange(idx, "amount", e.target.value)
                      }
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Start Month</label>
                    <input
                      type="number"
                      min={1}
                      value={ex.start_month || 1}
                      onChange={(e) =>
                        handleExtraChange(idx, "start_month", e.target.value)
                      }
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => removeExtra(idx)}
                      className="text-sm text-red-600 hover:underline"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Loan Summary */}
            {result && (
              <div className="border rounded-lg p-4 mt-6 bg-gray-50">
                <h3 className="font-semibold mb-3">Loan Summary</h3>
                <p>EMI: ₹{format2(result.results.emi)}</p>
                <p>
                  Principal (regular): ₹
                  {format2(result.results.principal_paid_regular)}
                </p>
                <p>
                  Extra Repayments Paid: ₹
                  {format2(result.results.extra_repayments)}
                </p>
                <p>Interest Paid: ₹{format2(result.results.total_interest)}</p>
                <p>Total Payment: ₹{format2(result.results.total_payment)}</p>
                <p>Loan Term: {result.results.term_reduced}</p>
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


          {/* Right Column: Compare */}
          {activeTab === "compare" && (
            <div className="lg:w-[30%]">
              <CompareBanks />
            </div>
          )}
        </div>
      )}

      {activeTab === "compare" && <CompareBanks />}
    </div>
  );
}
