import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";

function BasicLoan() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [calcMode, setCalcMode] = useState("emi"); // Calculation mode
  const [form, setForm] = useState({
    loan_amount: 200000,
    loan_term_years: 10,
    annual_interest_rate: 10,
    emi: "",
  });
  const [result, setResult] = useState(null);

  const ADMIN_RATE = 10.0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const format2 = (v) => Number(v).toFixed(2);

  const calculateLoan = () => {
    let P = parseFloat(form.loan_amount) || 200000;
    let years = parseFloat(form.loan_term_years) || 10;
    let annualRate = parseFloat(form.annual_interest_rate) || ADMIN_RATE;
    let emi = parseFloat(form.emi) || 0;
    const r = annualRate / 12 / 100;
    const n = years * 12;
    let resultData = {};

    switch (calcMode) {
      case "emi": {
        let monthlyEmi =
          r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = monthlyEmi * n;
        const totalInterest = totalPayment - P;
        resultData = {
          emi: format2(monthlyEmi),
          loan_amount: format2(P),
          annual_interest_rate: format2(annualRate) + " %",
          loan_term_years: years,
          total_payment: format2(totalPayment),
          total_interest: format2(totalInterest),
          principal_paid: format2(P),
        };
        break;
      }

      case "loan_amount": {
        if (emi <= 0) return;
        P = r === 0 ? emi * n : (emi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
        const totalPayment = emi * n;
        const totalInterest = totalPayment - P;
        resultData = {
          loan_amount: format2(P),
          annual_interest_rate: format2(annualRate) + " %",
          loan_term_years: years,
          emi: format2(emi),
          total_payment: format2(totalPayment),
          total_interest: format2(totalInterest),
          principal_paid: format2(P),
        };
        break;
      }

      case "annual_interest_rate": {
        if (emi <= 0) return;
        let low = 0,
          high = 1,
          mid = 0,
          iterations = 0;
        while (iterations < 100) {
          mid = (low + high) / 2;
          const guess = (P * mid * Math.pow(1 + mid, n)) / (Math.pow(1 + mid, n) - 1);
          if (Math.abs(guess - emi) < 1e-6) break;
          if (guess > emi) high = mid;
          else low = mid;
          iterations++;
        }
        const foundRate = mid * 12 * 100;
        const totalPayment = emi * n;
        const totalInterest = totalPayment - P;
        resultData = {
          annual_interest_rate: format2(foundRate) + " %",
          loan_amount: format2(P),
          loan_term_years: years,
          emi: format2(emi),
          total_payment: format2(totalPayment),
          total_interest: format2(totalInterest),
          principal_paid: format2(P),
        };
        break;
      }

      case "loan_term": {
        if (emi <= 0) return;
        let balance = P,
          months = 0;
        const epsilon = 1e-6,
          maxMonths = 1000 * 12;
        while (balance > epsilon && months < maxMonths) {
          const interestThisMonth = balance * r;
          const principalThisMonth = emi - interestThisMonth;
          if (principalThisMonth <= 0) return;
          if (principalThisMonth >= balance - epsilon) {
            months++;
            balance = 0;
            break;
          } else {
            balance -= principalThisMonth;
            months++;
          }
        }
        const totalPayment = emi * months;
        const totalInterest = totalPayment - P;
        resultData = {
          loan_term_years: format2(months / 12),
          loan_term_months: months,
          loan_amount: format2(P),
          annual_interest_rate: format2(annualRate) + " %",
          emi: format2(emi),
          total_payment: format2(totalPayment),
          total_interest: format2(totalInterest),
          principal_paid: format2(P),
        };
        break;
      }

      default:
        return;
    }

    setResult(resultData);
  };

  useEffect(() => {
    calculateLoan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, calcMode]);

  const chartData = result
    ? [
        { title: "Total Payment", value: parseFloat(result.total_payment), color: "#ffb3b3" },
        { title: "Principal", value: parseFloat(result.principal_paid), color: "#80d4ff" },
      ]
    : [];

  const renderPieChartWithLegend = () => {
    if (!result) return null;
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
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm">
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

      {/* Sub-tabs for calculation modes */}
      {activeTab === "calculator" && (
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {[
            { label: "Monthly Repayment (EMI)", value: "emi" },
            { label: "Loan Amount", value: "loan_amount" },
            { label: "Annual Interest Rate", value: "annual_interest_rate" },
            { label: "Loan Term", value: "loan_term" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setCalcMode(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                calcMode === tab.value
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {activeTab === "calculator" && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Inputs Section */}
          <div className="flex flex-col gap-6 lg:w-[70%]">
            {(calcMode === "emi" || calcMode === "loan_term" || calcMode === "annual_interest_rate") && (
              <div>
                <label className="block font-medium mb-1">Loan Amount (₹)</label>
                <input
                  type="number"
                  name="loan_amount"
                  value={form.loan_amount}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            )}

            {(calcMode === "emi" || calcMode === "loan_amount" || calcMode === "annual_interest_rate") && (
              <div>
                <label className="block font-medium mb-1">Loan Term (Years)</label>
                <input
                  type="number"
                  name="loan_term_years"
                  value={form.loan_term_years}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            )}

            {(calcMode === "emi" || calcMode === "loan_amount" || calcMode === "loan_term") && (
              <div>
                <label className="block font-medium mb-1">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  name="annual_interest_rate"
                  value={form.annual_interest_rate}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            )}

            {calcMode !== "emi" && (
              <div>
                <label className="block font-medium mb-1">EMI (₹)</label>
                <input
                  type="number"
                  name="emi"
                  value={form.emi}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            )}

            {/* Result Section */}
            {result && (
              <div className="mt-8 bg-gray-100 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">Loan Summary</h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  {Object.entries(result).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <div>{key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}</div>
                      <div className="text-right text-green-700 font-bold">{value}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Chart Section */}
          <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Breakdown</h2>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#ffb3b3]"></span> Total Payment
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-4 rounded-full bg-[#80d4ff]"></span> Principal
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

export default BasicLoan;
