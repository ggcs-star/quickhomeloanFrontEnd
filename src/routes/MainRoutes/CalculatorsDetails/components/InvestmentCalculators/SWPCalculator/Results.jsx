import React from 'react';

const Results = ({ results, formatNumber }) => {
  if (!results) {
    return (
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">SWP Projection Summary</h3>
        <div className="text-center py-8 text-gray-500">
          Enter values to see calculation results
        </div>
      </div>
    );
  }

  const resultItems = [
    { label: 'Initial Investment', value: `₹ ${formatNumber(results.initialInvestment)}` },
    { label: 'Total Withdrawals', value: `₹ ${formatNumber(results.totalWithdrawals.toFixed(0))}` },
    { label: 'Final Corpus', value: `₹ ${formatNumber(results.finalCorpus.toFixed(0))}` },
    { label: 'Total Return Earned', value: `₹ ${formatNumber(results.totalReturn.toFixed(0))}` },
    { label: 'Corpus Depletion Year', value: results.depletionYear }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 h-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">SWP Projection Summary</h3>
      
      <div className="space-y-4 mb-6">
        {resultItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
            <span className="text-gray-700 font-medium">{item.label}</span>
            <span className="text-lg font-bold text-primary-500">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Year-wise Withdrawal Projection</h4>
        <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-center">
            Chart visualization would be implemented here
            <br />
            <span className="text-sm">(Using libraries like Chart.js or Recharts)</span>
          </p>
        </div>
        <div className="flex gap-4 mt-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-primary-500 rounded"></div>
            <span>Remaining Corpus</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-red-400 rounded"></div>
            <span>Annual Withdrawal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;