import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CompareBanks from "../../CompareBanks";
import DebtAvalancheGuide from "./DebtAvalancheGuide";

export default function DebtAvalanche() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [debts, setDebts] = useState([
    { name: "Debt 1", balance: 50000, rate: 18, min_payment: 2000 },
    { name: "Debt 2", balance: 15000, rate: 12, min_payment: 4000 },
  ]);
  const [extraPayment, setExtraPayment] = useState(2000);
  const [results, setResults] = useState(null);

  // Handle Debt Changes
  const handleDebtChange = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = field === "name" ? value : parseFloat(value) || 0;
    setDebts(newDebts);
  };

    useEffect(() => {
    window.scrollTo();
  }, []);

  // Add New Debt
  const addDebt = () => {
    setDebts([
      ...debts,
      { name: `Debt ${debts.length + 1}`, balance: 0, rate: 0, min_payment: 0 },
    ]);
  };

  // Delete Debt
  const deleteDebt = (index) => {
    const newDebts = debts.filter((_, i) => i !== index);
    setDebts(newDebts);
  };

  // Simulation Logic (Avalanche/Snowball)
  const simulateDebts = (debtsInput, extraPayment, strategy) => {
    let clonedDebts = debtsInput.map((d) => ({
      name: d.name,
      balance: parseFloat(d.balance),
      rate: parseFloat(d.rate),
      min_payment: parseFloat(d.min_payment),
      total_interest: 0,
      total_paid: 0,
    }));

    let months = 0;
    const maxMonths = 600;
    const epsilon = 0.01;

    const allPaid = () => clonedDebts.every((d) => d.balance <= epsilon);

    while (!allPaid() && months < maxMonths) {
      months++;

      // Sort debts based on strategy
      if (strategy === "avalanche") {
        clonedDebts.sort((a, b) => b.rate - a.rate);
      } else {
        clonedDebts.sort((a, b) => a.balance - b.balance);
      }

      // Apply monthly interest
      clonedDebts.forEach((d) => {
        if (d.balance > epsilon) {
          const interest = d.balance * (d.rate / 12 / 100);
          d.balance += interest;
          d.total_interest += interest;
        }
      });

      // Build payment pool
      let paymentPool = extraPayment;
      clonedDebts.forEach((d) => {
        if (d.balance > epsilon) paymentPool += d.min_payment;
      });

      // Apply min payments
      clonedDebts.forEach((d) => {
        if (d.balance <= epsilon) return;
        const actual = Math.min(d.min_payment, d.balance);
        d.balance -= actual;
        d.total_paid += actual;
        paymentPool -= actual;
      });

      // Apply remaining pool
      for (let i = 0; i < clonedDebts.length && paymentPool > 0; i++) {
        if (clonedDebts[i].balance <= epsilon) continue;
        const pay = Math.min(paymentPool, clonedDebts[i].balance);
        clonedDebts[i].balance -= pay;
        clonedDebts[i].total_paid += pay;
        paymentPool -= pay;
      }

      // Cleanup
      clonedDebts.forEach((d) => {
        if (d.balance < epsilon) d.balance = 0;
      });
    }

    const totalInterest = parseFloat(
      clonedDebts.reduce((sum, d) => sum + d.total_interest, 0).toFixed(2)
    );
    const totalPaid = parseFloat(
      clonedDebts.reduce((sum, d) => sum + d.total_paid, 0).toFixed(2)
    );

    return {
      total_months: months,
      total_interest_paid: totalInterest,
      total_amount_paid: totalPaid,
      debts: clonedDebts.map((d) => ({
        ...d,
        balance: parseFloat(d.balance.toFixed(2)),
        total_interest: parseFloat(d.total_interest.toFixed(2)),
        total_paid: parseFloat(d.total_paid.toFixed(2)),
      })),
    };
  };

  const calculateDebts = () => {
    const avalanche = simulateDebts(debts, extraPayment, "avalanche");
    const snowball = simulateDebts(debts, extraPayment, "snowball");
    setResults({ avalanche, snowball });
  };

  useEffect(() => {
    calculateDebts();
  }, [debts, extraPayment]);

  // Pie Chart Data
  const chartData =
    results && results.avalanche
      ? [
          {
            title: "Interest Paid",
            value: results.avalanche.total_interest_paid,
            color: "#ffb3b3",
          },
          {
            title: "Principal Paid",
            value:
              results.avalanche.total_amount_paid -
              results.avalanche.total_interest_paid,
            color: "#80d4ff",
          },
        ]
      : [];

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
        <>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Inputs */}
            <div className="lg:w-[70%] space-y-6">
              <h2 className="text-xl font-semibold">Debt Inputs</h2>

              {debts.map((debt, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 gap-4 bg-gray-50 p-4 rounded-lg shadow-sm items-center"
                >
                  <input
                    type="text"
                    value={debt.name}
                    onChange={(e) => handleDebtChange(i, "name", e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Debt Name"
                  />
                  <input
                    type="number"
                    value={debt.balance}
                    onChange={(e) =>
                      handleDebtChange(i, "balance", e.target.value)
                    }
                    className="border p-2 rounded"
                    placeholder="Balance (₹)"
                  />
                  <input
                    type="number"
                    value={debt.rate}
                    onChange={(e) => handleDebtChange(i, "rate", e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Rate % per year"
                  />
                  <input
                    type="number"
                    value={debt.min_payment}
                    onChange={(e) =>
                      handleDebtChange(i, "min_payment", e.target.value)
                    }
                    className="border p-2 rounded"
                    placeholder="Min Payment (₹)"
                  />
                  <button
                    onClick={() => deleteDebt(i)}
                    className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                  >
                    🗑 Delete
                  </button>
                </div>
              ))}

              <button
                onClick={addDebt}
                className="bg-gray-200 px-3 py-2 rounded mb-4 hover:bg-gray-300 transition"
              >
                ➕ Add Another Debt
              </button>

              <div className="mb-4">
                <label className="block text-sm mb-1 font-medium">
                  Extra Monthly Payment (₹)
                </label>
                <input
                  type="number"
                  value={extraPayment}
                  onChange={(e) => setExtraPayment(parseFloat(e.target.value))}
                  className="w-full border rounded p-2"
                />
              </div>

              {/* Results Section */}
              {results && (
                <div className="bg-gray-100 rounded-lg p-6 space-y-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Payoff Summary (Avalanche vs Snowball)
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>Method</div>
                    <div className="text-right">Interest Paid</div>
                    {["avalanche", "snowball"].map((method) => (
                      <React.Fragment key={method}>
                        <div className="font-medium capitalize">{method} Method</div>
                        <div className="text-right text-blue-700 font-bold">
                          ₹ {results[method].total_interest_paid.toLocaleString()}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Chart */}
            <div className="lg:w-[30%] bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Payment Breakdown</h2>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#ffb3b3]"></span>
                  Interest Paid
                </div>
                <div className="flex items-center gap-2">
                  <span className="block w-4 h-4 rounded-full bg-[#80d4ff]"></span>
                  Principal Paid
                </div>
              </div>

              {results && results.avalanche && (
                <PieChart
                  data={chartData}
                  animate
                  lineWidth={40}
                  label={({ dataEntry }) =>
                    dataEntry.value > 0
                      ? `${Math.round(dataEntry.percentage)}%`
                      : ""
                  }
                  labelStyle={{ fontSize: "6px", fill: "#333", fontWeight: "bold" }}
                  radius={40}
                  startAngle={-90}
                />
              )}
            </div>
          </div>

          {/* Guide Below */}
          <DebtAvalancheGuide />
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
