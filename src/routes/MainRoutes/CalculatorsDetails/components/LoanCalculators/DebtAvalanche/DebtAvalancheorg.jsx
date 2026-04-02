// DebtAvalancheorg.jsx
import React, { useState, useEffect } from 'react';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';

const DebtAvalancheorg = () => {
  const [debts, setDebts] = useState([
    { id: 1, balance: 10000, rate: 12, minPayment: 100 },
    { id: 2, balance: 15000, rate: 15, minPayment: 2000 }
  ]);
  const [extraPayment, setExtraPayment] = useState(250);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Add new debt
  const addDebt = () => {
    const newId = debts.length > 0 ? Math.max(...debts.map(d => d.id)) + 1 : 1;
    setDebts([...debts, { id: newId, balance: 0, rate: 0, minPayment: 0 }]);
  };

  // Remove debt
  const removeDebt = (id) => {
    setDebts(debts.filter(debt => debt.id !== id));
  };

  // Update debt field
  const updateDebt = (id, field, value) => {
    setDebts(debts.map(debt =>
      debt.id === id ? { ...debt, [field]: parseFloat(value) || 0 } : debt
    ));
  };

  // Calculate strategies
  const calculateStrategies = () => {
    const validDebts = debts.filter(debt =>
      debt.balance > 0 && debt.rate > 0 && debt.minPayment > 0
    );

    if (validDebts.length === 0) {
      alert('Please add at least one valid debt (positive balance, rate, and min payment).');
      return;
    }

    const avalancheResult = calculateAvalanche(JSON.parse(JSON.stringify(validDebts)), parseFloat(extraPayment) || 0);
    const snowballResult = calculateSnowball(JSON.parse(JSON.stringify(validDebts)), parseFloat(extraPayment) || 0);

    setResults({
      avalanche: avalancheResult,
      snowball: snowballResult,
      recommendation: getRecommendation(avalancheResult, snowballResult)
    });
    setShowResults(true);
  };

  // Debt Avalanche calculation
  const calculateAvalanche = (debtsArr, extra) => {
    let months = 0;
    let totalInterest = 0;
    let currentDebts = debtsArr.map(debt => ({
      ...debt,
      monthlyRate: (debt.rate / 12) / 100
    }));

    // Sort by interest rate (highest first)
    currentDebts.sort((a, b) => b.rate - a.rate);

    // Loop until all debts paid
    while (currentDebts.length > 0) {
      months++;
      let remainingExtra = extra;

      for (let i = 0; i < currentDebts.length; i++) {
        const debt = currentDebts[i];
        const monthlyInterest = debt.balance * debt.monthlyRate;
        totalInterest += monthlyInterest;

        let payment = debt.minPayment;
        if (i === 0 && remainingExtra > 0) {
          payment += remainingExtra;
          remainingExtra = 0;
        }

        const principalPayment = Math.max(0, payment - monthlyInterest);
        const principalApplied = Math.min(debt.balance, principalPayment);
        debt.balance = +(debt.balance - principalApplied).toFixed(2);
      }

      // Remove paid off debts and re-sort
      currentDebts = currentDebts.filter(debt => debt.balance > 0.005);
      currentDebts.sort((a, b) => b.rate - a.rate);

      // safety to prevent infinite loops
      if (months > 1000) break;
    }

    return { months, totalInterest: +totalInterest.toFixed(2) };
  };

  // Debt Snowball calculation
  const calculateSnowball = (debtsArr, extra) => {
    let months = 0;
    let totalInterest = 0;
    let currentDebts = debtsArr.map(debt => ({
      ...debt,
      monthlyRate: (debt.rate / 12) / 100
    }));

    // Sort by balance (smallest first)
    currentDebts.sort((a, b) => a.balance - b.balance);

    while (currentDebts.length > 0) {
      months++;
      let remainingExtra = extra;

      for (let i = 0; i < currentDebts.length; i++) {
        const debt = currentDebts[i];
        const monthlyInterest = debt.balance * debt.monthlyRate;
        totalInterest += monthlyInterest;

        let payment = debt.minPayment;
        if (i === 0 && remainingExtra > 0) {
          payment += remainingExtra;
          remainingExtra = 0;
        }

        const principalPayment = Math.max(0, payment - monthlyInterest);
        const principalApplied = Math.min(debt.balance, principalPayment);
        debt.balance = +(debt.balance - principalApplied).toFixed(2);
      }

      currentDebts = currentDebts.filter(debt => debt.balance > 0.005);
      currentDebts.sort((a, b) => a.balance - b.balance);

      if (months > 1000) break;
    }

    return { months, totalInterest: +totalInterest.toFixed(2) };
  };

  // Get recommendation
  const getRecommendation = (avalanche, snowball) => {
    if (avalanche.totalInterest < snowball.totalInterest) {
      return {
        title: 'Recommended Strategy: Debt Avalanche',
        description: 'Pay off the highest-interest debts first to minimize total interest paid.'
      };
    } else if (snowball.totalInterest < avalanche.totalInterest) {
      return {
        title: 'Recommended Strategy: Debt Snowball',
        description: 'Pay off the smallest balances first for quicker psychological wins.'
      };
    } else {
      return {
        title: 'Both Strategies Are Similar',
        description: 'Both strategies produce similar interest. Choose the one that fits your discipline.'
      };
    }
  };

  // small helper to format numbers
  const formatCurrency = (n) => {
    if (n == null || isNaN(n)) return '₹0';
    return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  // Optional: useEffect to keep results hidden when debts change
  useEffect(() => {
    setShowResults(false);
    setResults(null);
  }, [debts.length]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
      <CalculatorHeader
  title="Debt Avalanche vs Debt Snowball Calculator"
  subtitle="Compare two popular debt repayment strategies to eliminate loans efficiently."
  description="Analyze interest savings, repayment timelines, and behavioral impact to decide whether the avalanche or snowball method suits you better."
/>


        {/* Debts Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-black mb-4 border-b pb-2">Your Debts</h2>

          <div className="space-y-4 mb-4">
            {debts.map((debt, index) => (
              <div key={debt.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <InputBox
                  label="Balance (₹)"
                  value={debt.balance}
                  onChange={(v) => updateDebt(debt.id, 'balance', v)}
                />
                <InputBox
                  label="Interest Rate (%)"
                  value={debt.rate}
                  onChange={(v) => updateDebt(debt.id, 'rate', v)}
                />
                <InputBox
                  label="Minimum Payment (₹)"
                  value={debt.minPayment}
                  onChange={(v) => updateDebt(debt.id, 'minPayment', v)}
                />
                <div className="flex items-center">
                  <button
                    onClick={() => removeDebt(debt.id)}
                    className="text-sm px-3 py-2 border border-gray-300 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={addDebt} className="px-4 py-2 bg-black text-white rounded">+ Add Another Debt</button>
            <button onClick={() => {
              // quick preset: reset to initial example
              setDebts([
                { id: 1, balance: 10000, rate: 12, minPayment: 100 },
                { id: 2, balance: 15000, rate: 15, minPayment: 2000 }
              ]);
            }} className="px-4 py-2 border border-gray-300 rounded">Reset Example</button>
          </div>
        </div>

        {/* Extra Payment Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-black mb-4 border-b pb-2">Extra Monthly Payment</h2>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <InputBox
              label="Extra Payment (₹)"
              value={extraPayment}
              onChange={(v) => setExtraPayment(parseFloat(v) || 0)}
            />
            <button onClick={calculateStrategies} className="px-6 py-2 bg-black text-white rounded">Compare Strategies</button>
          </div>
        </div>

        {/* Results */}
        {showResults && results && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-black mb-4 border-b pb-2">Comparison Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title="Debt Avalanche" subtitle="Pay highest-interest debts first" data={results.avalanche} formatCurrency={formatCurrency} />
              <ResultCard title="Debt Snowball" subtitle="Pay smallest balances first" data={results.snowball} formatCurrency={formatCurrency} />
            </div>

            <div className="bg-gray-50 p-4 rounded border-l-4 border-black">
              <div className="font-semibold text-black mb-1">{results.recommendation.title}</div>
              <div className="text-gray-700">{results.recommendation.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* Utility subcomponents */
const InputBox = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black"
    />
  </div>
);

const ResultCard = ({ title, subtitle, data, formatCurrency }) => (
  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-center">
    <div className="text-lg font-bold text-black mb-1">{title}</div>
    <div className="text-sm text-gray-600 mb-4">{subtitle}</div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white rounded p-3 border">
        <div className="text-sm text-gray-600">Total Months</div>
        <div className="text-xl font-semibold text-black">{data.months}</div>
      </div>
      <div className="bg-white rounded p-3 border">
        <div className="text-sm text-gray-600">Total Interest</div>
        <div className="text-xl font-semibold text-black">{formatCurrency ? formatCurrency(data.totalInterest) : data.totalInterest}</div>
      </div>
    </div>
  </div>
);

export default DebtAvalancheorg;
