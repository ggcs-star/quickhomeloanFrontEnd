// components/SIPCalculator.js
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculatororg = () => {
  const [inputs, setInputs] = useState({
    initialLumpSum: 0,
    regularDeposit: 5000,
    depositFrequency: 12,
    expectedReturn: 12,
    sipTerm: 10
  });

  const [results, setResults] = useState({
    totalInvested: 0,
    estimatedReturns: 0,
    totalValue: 0
  });

  const [chartData, setChartData] = useState({
    labels: ['Total Invested', 'Estimated Returns'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#3498db', '#2ecc71'],
        borderWidth: 0
      }
    ]
  });

  useEffect(() => {
    calculateSIP();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatNumber = (num) => {
    return parseInt(num).toLocaleString('en-IN');
  };

  const calculateSIP = () => {
    const {
      initialLumpSum,
      regularDeposit,
      depositFrequency,
      expectedReturn,
      sipTerm
    } = inputs;

    // Calculate total deposits
    const totalDeposits = regularDeposit * depositFrequency * sipTerm;
    const totalInvested = parseFloat(initialLumpSum) + totalDeposits;

    // Calculate future value
    const r = expectedReturn / 100;
    const n = depositFrequency;
    const t = sipTerm;

    // Future value of initial lump sum
    const fvLumpSum = initialLumpSum * Math.pow(1 + r, t);

    // Future value of regular deposits
    let fvRegularDeposits = 0;
    if (r > 0) {
      fvRegularDeposits = regularDeposit * n * (Math.pow(1 + r, t) - 1) / r;
    } else {
      fvRegularDeposits = regularDeposit * n * t;
    }

    const totalValue = fvLumpSum + fvRegularDeposits;
    const estimatedReturns = totalValue - totalInvested;

    // Update results
    setResults({
      totalInvested,
      estimatedReturns,
      totalValue
    });

    // Update chart data
    setChartData({
      labels: ['Total Invested', 'Estimated Returns'],
      datasets: [
        {
          data: [totalInvested, estimatedReturns],
          backgroundColor: ['#3498db', '#2ecc71'],
          borderWidth: 0
        }
      ]
    });
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ₹${formatNumber(value.toFixed(0))}`;
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SIP Calculator</h1>
            <p className="text-xl opacity-90">Project the future value of your Systematic Investment Plan</p>
          </div>
        </header>

        {/* Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Investment Details</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="initial-lump-sum" className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Lump-sum (₹)
                </label>
                <input
                  type="number"
                  id="initial-lump-sum"
                  value={inputs.initialLumpSum}
                  onChange={(e) => handleInputChange('initialLumpSum', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  min="0"
                  placeholder="Enter initial investment"
                />
              </div>

              <div>
                <label htmlFor="regular-deposit" className="block text-sm font-medium text-gray-700 mb-2">
                  Regular Deposit (₹)
                </label>
                <input
                  type="number"
                  id="regular-deposit"
                  value={inputs.regularDeposit}
                  onChange={(e) => handleInputChange('regularDeposit', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  min="0"
                  placeholder="Enter regular deposit amount"
                />
              </div>

              <div>
                <label htmlFor="deposit-frequency" className="block text-sm font-medium text-gray-700 mb-2">
                  Deposit Frequency
                </label>
                <select
                  id="deposit-frequency"
                  value={inputs.depositFrequency}
                  onChange={(e) => handleInputChange('depositFrequency', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value={52}>Weekly</option>
                  <option value={12}>Monthly</option>
                  <option value={4}>Quarterly</option>
                  <option value={2}>Half-Yearly</option>
                  <option value={1}>Yearly</option>
                </select>
              </div>

              <div>
                <label htmlFor="expected-return" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Annual Return (%)
                </label>
                <input
                  type="number"
                  id="expected-return"
                  value={inputs.expectedReturn}
                  onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  min="0"
                  max="50"
                  step="0.1"
                  placeholder="Enter expected annual return"
                />
              </div>

              <div>
                <label htmlFor="sip-term" className="block text-sm font-medium text-gray-700 mb-2">
                  SIP Term (Years)
                </label>
                <input
                  type="number"
                  id="sip-term"
                  value={inputs.sipTerm}
                  onChange={(e) => handleInputChange('sipTerm', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  min="1"
                  max="50"
                  placeholder="Enter investment term in years"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Investment Projection</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <span className="text-lg font-semibold text-gray-700">Total Amount Invested</span>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{formatNumber(results.totalInvested.toFixed(0))}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-lg font-semibold text-gray-700">Estimated Returns</span>
                <span className="text-2xl font-bold text-green-600">
                  ₹{formatNumber(results.estimatedReturns.toFixed(0))}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <span className="text-lg font-semibold text-gray-700">Total Value</span>
                <span className="text-2xl font-bold text-purple-600">
                  ₹{formatNumber(results.totalValue.toFixed(0))}
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Investment Breakdown</h3>
              <div className="h-64">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">About SIP Calculator</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What this calculator does</h3>
                <p className="text-gray-600 leading-relaxed">
                  It projects the future value of a Systematic Investment Plan (SIP): an initial lump-sum (optional) 
                  plus regular deposits made weekly, monthly, quarterly, half-yearly or yearly, compounded at the 
                  annual return you specify.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Plan your financial goals with precision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Understand the power of compounding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Make informed investment decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visualize long-term wealth creation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Explanation of each input</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">Initial Lump-sum</h4>
                  <p className="text-gray-600 text-sm">Money you invest on day 0 (one-time investment)</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">Regular Deposit</h4>
                  <p className="text-gray-600 text-sm">Amount added every period (week/month/quarter, etc.)</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">Deposit Frequency</h4>
                  <p className="text-gray-600 text-sm">How often you make that deposit</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">Expected Annual Return</h4>
                  <p className="text-gray-600 text-sm">Compound growth rate of the investment (before tax & fees)</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">SIP Term</h4>
                  <p className="text-gray-600 text-sm">Total investment horizon in years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 p-6 text-gray-600">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="font-medium">
              Disclaimer: This calculator provides estimates only. Actual returns may vary based on market conditions.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SIPCalculatororg;