// components/ResultsSection.js
import React from 'react';
import ComparisonChart from './ComparisonChart';

const ResultsSection = ({ results, breakdownVisible, onToggleBreakdown }) => {
  if (!results) {
    return (
      <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-6">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <i className="fas fa-chart-bar text-black"></i>
          Results
        </h2>
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">Enter values to see calculation results</p>
        </div>
      </div>
    );
  }

  const {
    totalEMI,
    totalRent,
    pvEMI,
    pvRent,
    breakdownData,
    formatCurrency,
    formatCurrencyShort
  } = results;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-6">
      <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
        <i className="fas fa-chart-bar text-black"></i>
        Results
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        {/* EMI Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-300">
          <div className="text-sm text-gray-600">Total EMI Paid</div>
          <div className="text-2xl font-bold text-black">{formatCurrencyShort(totalEMI)}</div>
          <div className="text-sm text-gray-600 mt-2">Present Value</div>
          <div className="text-xl font-bold text-black">{formatCurrencyShort(pvEMI)}</div>
        </div>

        {/* Rent Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-300">
          <div className="text-sm text-gray-600">Total Rent Paid</div>
          <div className="text-2xl font-bold text-black">{formatCurrencyShort(totalRent)}</div>
          <div className="text-sm text-gray-600 mt-2">Present Value</div>
          <div className="text-xl font-bold text-black">{formatCurrencyShort(pvRent)}</div>
        </div>

      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-300">
        <h3 className="text-xl font-semibold text-black mb-4">Financial Comparison</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th className="px-4 py-3 text-left font-semibold text-black"></th>
                <th className="px-4 py-3 text-left font-semibold text-black">EMI (Buying)</th>
                <th className="px-4 py-3 text-left font-semibold text-black">Rent (Renting)</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3 text-gray-700">Total Amount Paid (₹)</td>
                <td className="px-4 py-3 font-semibold text-black">{formatCurrency(totalEMI)}</td>
                <td className="px-4 py-3 font-semibold text-black">{formatCurrency(totalRent)}</td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-4 py-3 text-gray-700">Inflation Adjusted PV (₹)</td>
                <td className="px-4 py-3 font-semibold text-black">{formatCurrency(pvEMI)}</td>
                <td className="px-4 py-3 font-semibold text-black">{formatCurrency(pvRent)}</td>
              </tr>

              <tr>
                <td className="px-4 py-3 text-gray-700">Net Financial Position</td>
                <td className="px-4 py-3 font-semibold text-black">Asset Created</td>
                <td className="px-4 py-3 font-semibold text-black">No Asset</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      {/* Breakdown Toggle */}
      <button
        onClick={onToggleBreakdown}
        className="w-full bg-gray-100 hover:bg-gray-200 text-black py-3 px-4 rounded-lg font-medium border border-gray-300 transition flex items-center justify-center gap-2 mb-4"
      >
        <i className={`fas fa-${breakdownVisible ? 'eye-slash' : 'table'}`}></i>
        {breakdownVisible ? 'Hide' : 'Show'} Year-wise Breakdown
      </button>

      {/* Breakdown Table */}
      {breakdownVisible && (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-300 mb-6">
          <h3 className="text-xl font-semibold text-black mb-4">Year-wise Breakdown</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-300">
                  <th className="px-3 py-2 text-left font-semibold text-black">Year</th>
                  <th className="px-3 py-2 text-left font-semibold text-black">Monthly EMI</th>
                  <th className="px-3 py-2 text-left font-semibold text-black">PV of EMI</th>
                  <th className="px-3 py-2 text-left font-semibold text-black">Monthly Rent</th>
                  <th className="px-3 py-2 text-left font-semibold text-black">PV of Rent</th>
                </tr>
              </thead>

              <tbody>
                {breakdownData.map((item) => (
                  <tr key={item.year} className="border-b border-gray-300 even:bg-gray-100">
                    <td className="px-3 py-2">{item.year}</td>
                    <td className="px-3 py-2">{formatCurrency(item.monthlyEMI)}</td>
                    <td className="px-3 py-2">{formatCurrency(item.pvMonthlyEMI)}</td>
                    <td className="px-3 py-2">{formatCurrency(item.monthlyRent)}</td>
                    <td className="px-3 py-2">{formatCurrency(item.pvMonthlyRent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="h-80">
        <ComparisonChart results={results} />
      </div>

    </div>
  );
};

export default ResultsSection;
