import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPInvestmentorg = () => {
  const [formData, setFormData] = useState({
    initialLumpSum: 0,
    regularDeposit: 5000,
    depositFrequency: 12,
    expectedReturn: 12,
    sipTerm: 10,
  });

  const [results, setResults] = useState({
    totalInvested: 0,
    estimatedReturns: 0,
    totalValue: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ['Total Invested', 'Estimated Returns'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#B0BEC5', '#37474F'], // grey theme
        borderWidth: 0,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#444', font: { size: 14 } },
      },
    },
  };

  const calculateSIP = () => {
    const {
      initialLumpSum,
      regularDeposit,
      depositFrequency,
      expectedReturn,
      sipTerm,
    } = formData;

    const totalDeposits = regularDeposit * depositFrequency * sipTerm;
    const totalInvested = parseFloat(initialLumpSum) + totalDeposits;

    const r = expectedReturn / 100;
    const n = depositFrequency;
    const t = sipTerm;

    // Future Value of Lump Sum
    const fvLumpSum = initialLumpSum * Math.pow(1 + r, t);

    // Future Value of SIP
    let fvRegular = 0;
    if (r > 0) {
      fvRegular = regularDeposit * n * ((Math.pow(1 + r, t) - 1) / r);
    } else {
      fvRegular = regularDeposit * n * t;
    }

    const totalValue = fvLumpSum + fvRegular;
    const estimatedReturns = totalValue - totalInvested;

    setResults({
      totalInvested,
      estimatedReturns,
      totalValue,
    });

    setChartData({
      labels: ['Total Invested', 'Estimated Returns'],
      datasets: [
        {
          data: [totalInvested, estimatedReturns],
          backgroundColor: ['#CFD8DC', '#263238'], // Grey palette
          borderWidth: 0,
        },
      ],
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: parseFloat(value) || 0,
    }));
  };

  const formatNumber = (num) => {
    return Number(num).toLocaleString('en-IN');
  };

  useEffect(() => {
    calculateSIP();
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
      <CalculatorHeader
  title="SIP Calculator"
  subtitle="Estimate the future value of your investments using systematic investment plans and lump-sum contributions."
  description="Project long-term wealth creation by analyzing returns from SIP and one-time investments based on expected growth rates."
/>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Input Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-6">Investment Details</h2>

            <div className="space-y-6">
              {[
                { id: 'initialLumpSum', label: 'Initial Lump-sum (₹)', placeholder: 'Enter initial investment' },
                { id: 'regularDeposit', label: 'Regular Deposit (₹)', placeholder: 'Enter monthly SIP amount' },
                { id: 'expectedReturn', label: 'Expected Annual Return (%)', placeholder: 'Expected annual return', step: '0.1' },
                { id: 'sipTerm', label: 'SIP Term (Years)', placeholder: 'Investment duration in years' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    step={field.step || 1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Deposit Frequency
                </label>
                <select
                  id="depositFrequency"
                  value={formData.depositFrequency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                >
                  <option value={12}>Monthly</option>
                  <option value={52}>Weekly</option>
                  <option value={4}>Quarterly</option>
                  <option value={2}>Half-Yearly</option>
                  <option value={1}>Yearly</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-6">Projection Summary</h2>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Total Invested', value: results.totalInvested },
                { label: 'Estimated Returns', value: results.estimatedReturns },
                { label: 'Total Value', value: results.totalValue },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="font-bold text-black text-lg">
                    ₹{formatNumber(item.value.toFixed(0))}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-80">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-6">About SIP Calculator</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">What this calculator does</h3>
              <p className="text-gray-700 leading-relaxed mt-2">
                This calculator combines lump-sum investing with SIP returns and shows you 
                how wealth grows with compounding.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Input Explanation</h3>
              <ul className="text-gray-700 space-y-2 mt-2">
                <li>• <strong>Initial Lump-sum:</strong> One-time upfront investment.</li>
                <li>• <strong>Regular Deposit:</strong> Your SIP contribution.</li>
                <li>• <strong>Deposit Frequency:</strong> Weekly / Monthly / Quarterly etc.</li>
                <li>• <strong>Expected Return:</strong> CAGR return assumption.</li>
                <li>• <strong>Term:</strong> Total years invested.</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-600 mt-8 text-sm">
          * This tool provides estimates only. Actual returns may vary.
        </footer>

      </div>
    </div>
  );
};

export default SIPInvestmentorg;
