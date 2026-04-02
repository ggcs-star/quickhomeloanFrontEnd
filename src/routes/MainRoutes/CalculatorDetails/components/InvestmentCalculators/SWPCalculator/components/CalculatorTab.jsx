// components/CalculatorTab.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CalculatorTab = () => {
  const [inputs, setInputs] = useState({
    lumpSum: 5000000,
    withdrawal: 25000,
    frequency: 12,
    adjustmentType: 'none',
    adjustmentValue: 5,
    expectedReturn: 12,
    term: 20
  });

  const [results, setResults] = useState({
    initialInvestment: 0,
    totalWithdrawals: 0,
    finalCorpus: 0,
    totalReturn: 0,
    depletionYear: '-'
  });

  const [yearlyData, setYearlyData] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    calculateSWP();
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

  const calculateSWP = () => {
    const {
      lumpSum,
      withdrawal,
      frequency,
      adjustmentType,
      adjustmentValue,
      expectedReturn,
      term
    } = inputs;

    const periodicReturn = Math.pow(1 + expectedReturn / 100, 1 / frequency) - 1;
    let balance = lumpSum;
    let totalWithdrawals = 0;
    let totalReturn = 0;
    let currentWithdrawal = withdrawal * frequency;
    let depletionYear = '-';

    const yearlyResults = [];
    const chartDataPoints = [];

    for (let year = 1; year <= term; year++) {
      const beginningBalance = balance;
      let annualWithdrawal = currentWithdrawal;
      let annualReturn = 0;

      for (let period = 1; period <= frequency; period++) {
        if (balance > 0) {
          const periodWithdrawal = Math.min(currentWithdrawal / frequency, balance);
          balance -= periodWithdrawal;

          if (balance > 0) {
            const periodReturn = balance * periodicReturn;
            balance += periodReturn;
            annualReturn += periodReturn;
          }
        }
      }

      totalWithdrawals += annualWithdrawal;
      totalReturn += annualReturn;

      if (balance <= 0 && depletionYear === '-') {
        depletionYear = year;
      }

      yearlyResults.push({
        year,
        beginningBalance,
        withdrawal: annualWithdrawal,
        returnEarned: annualReturn,
        endingBalance: Math.max(0, balance)
      });

      chartDataPoints.push({
        year,
        balance: Math.max(0, balance),
        withdrawal: annualWithdrawal
      });

      if (adjustmentType === 'fixed') {
        currentWithdrawal += parseFloat(adjustmentValue);
      } else if (adjustmentType === 'percent') {
        currentWithdrawal *= (1 + parseFloat(adjustmentValue) / 100);
      }
    }

    setResults({
      initialInvestment: lumpSum,
      totalWithdrawals,
      finalCorpus: Math.max(0, balance),
      totalReturn,
      depletionYear
    });

    setYearlyData(yearlyResults);
    prepareChartData(chartDataPoints);
  };

  const prepareChartData = (data) => {
    setChartData({
      labels: data.map(d => `Year ${d.year}`),
      datasets: [
        {
          label: 'Remaining Corpus',
          data: data.map(d => d.balance),
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#4f46e5',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4
        },
        {
          label: 'Annual Withdrawal',
          data: data.map(d => d.withdrawal),
          borderColor: '#ef4444',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.4,
          pointBackgroundColor: '#ef4444',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4
        }
      ]
    });
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += '₹' + context.parsed.y.toLocaleString('en-IN');
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + (value / 100000).toFixed(0) + 'L';
          }
        }
      }
    }
  };

  return (
    <div className="p-6">
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-600 text-white p-6 text-center">
          <h2 className="text-2xl font-bold">Systematic Withdrawal Plan Calculator</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lump-sum Deposit (₹)
              </label>
              <input
                type="number"
                value={inputs.lumpSum}
                onChange={(e) => handleInputChange('lumpSum', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="10000"
                step="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regular Withdrawal (₹)
              </label>
              <input
                type="number"
                value={inputs.withdrawal}
                onChange={(e) => handleInputChange('withdrawal', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1000"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdrawal Frequency
              </label>
              <select
                value={inputs.frequency}
                onChange={(e) => handleInputChange('frequency', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={12}>Monthly</option>
                <option value={4}>Quarterly</option>
                <option value={2}>Half-Yearly</option>
                <option value={1}>Yearly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Withdrawal Adjustment
              </label>
              <div className="flex gap-4 mb-2">
                {['none', 'fixed', 'percent'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="adjustmentType"
                      checked={inputs.adjustmentType === type}
                      onChange={() => handleInputChange('adjustmentType', type)}
                      className="mr-2"
                    />
                    <span className="capitalize">
                      {type === 'none' ? 'None' : type === 'fixed' ? '₹ Fixed' : '% Increase'}
                    </span>
                  </label>
                ))}
              </div>
              {inputs.adjustmentType !== 'none' && (
                <input
                  type="number"
                  value={inputs.adjustmentValue}
                  onChange={(e) => handleInputChange('adjustmentValue', parseFloat(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="1"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                value={inputs.expectedReturn}
                onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="30"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdrawal Term (Years)
              </label>
              <input
                type="number"
                value={inputs.term}
                onChange={(e) => handleInputChange('term', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="50"
                step="1"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">SWP Projection Summary</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Initial Investment', value: results.initialInvestment },
                { label: 'Total Withdrawals', value: results.totalWithdrawals },
                { label: 'Final Corpus', value: results.finalCorpus },
                { label: 'Total Return Earned', value: results.totalReturn },
                { label: 'Corpus Depletion Year', value: results.depletionYear }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-blue-600">
                    {typeof item.value === 'number' ? `₹ ${formatNumber(item.value)}` : item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-6">
              <h4 className="font-semibold text-blue-600 mb-3">Year-wise Withdrawal Projection</h4>
              <div className="h-64">
                {chartData ? (
                  <Line data={chartData} options={chartOptions} />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Chart will appear after calculation
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Year-wise SWP Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Year</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Beginning Balance</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Withdrawals</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Returns Earned</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Ending Balance</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.length > 0 ? (
                yearlyData.map((data, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">{data.year}</td>
                    <td className="px-4 py-3">₹ {formatNumber(data.beginningBalance)}</td>
                    <td className="px-4 py-3">₹ {formatNumber(data.withdrawal)}</td>
                    <td className="px-4 py-3">₹ {formatNumber(data.returnEarned)}</td>
                    <td className="px-4 py-3">₹ {formatNumber(data.endingBalance)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                    Enter values to see the projection
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalculatorTab;