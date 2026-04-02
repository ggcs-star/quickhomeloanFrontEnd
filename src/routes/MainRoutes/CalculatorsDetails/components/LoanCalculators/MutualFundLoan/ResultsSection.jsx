// components/ResultsSection.js
import React from "react";

const ResultsSection = ({ results, formatCurrency }) => {
  if (!results) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">Enter values to see calculation results</p>
        </div>
      </div>
    );
  }

  const { emi, requiredMFRate } = results;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 text-black text-sm uppercase tracking-wider">
            <th className="p-5 font-bold">Option</th>
            <th className="p-5 font-bold">FD Break</th>
            <th className="p-5 font-bold">Loan + SWP</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="p-5 font-bold text-black text-lg">
              Initial Investment
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              {formatCurrency(1000000)}
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              {formatCurrency(1000000)}
            </td>
          </tr>

          <tr>
            <td className="p-5 font-bold text-black text-lg">
              Investment Return Rate
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              N/A (Redeemed)
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              {requiredMFRate.toFixed(4)}%
            </td>
          </tr>

          <tr>
            <td className="p-5 font-bold text-black text-lg">
              Loan Interest Rate
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              N/A
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              9.5%
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-5 font-bold text-black text-lg">
              Net Outcome
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              Investment is redeemed
            </td>
            <td className="p-5 text-lg font-semibold text-black">
              Investment used for SWP
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsSection;
