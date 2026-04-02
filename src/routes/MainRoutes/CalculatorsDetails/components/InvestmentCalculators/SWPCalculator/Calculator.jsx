import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import Results from './Results';
import InfoSections from './InfoSections';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';

const SWPCalculatororg = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [inputs, setInputs] = useState({
    lumpSum: 5000000,
    withdrawal: 25000,
    frequency: 12,
    adjustmentType: 'none',
    adjustmentValue: 5,
    expectedReturn: 12,
    term: 20
  });
  
  const [results, setResults] = useState(null);

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
    
    const yearlyData = [];
    const chartData = [];

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

      yearlyData.push({
        year,
        beginningBalance,
        annualWithdrawal,
        annualReturn,
        endingBalance: Math.max(0, balance)
      });

      chartData.push({
        year,
        balance: Math.max(0, balance),
        withdrawal: annualWithdrawal
      });

      // Apply annual adjustment
      if (adjustmentType === 'fixed') {
        currentWithdrawal += adjustmentValue;
      } else if (adjustmentType === 'percent') {
        currentWithdrawal *= (1 + adjustmentValue / 100);
      }
    }

    setResults({
      initialInvestment: lumpSum,
      totalWithdrawals,
      finalCorpus: Math.max(0, balance),
      totalReturn,
      depletionYear,
      yearlyData,
      chartData
    });
  };

  useEffect(() => {
    calculateSWP();
  }, [inputs]);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatNumber = (num) => {
    return parseInt(num).toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <CalculatorHeader
  title="SWP Calculator"
  subtitle="Plan systematic withdrawals from your investments while maintaining long-term financial stability."
  description="Estimate withdrawal sustainability, remaining corpus value, and investment longevity based on return assumptions."
/>


        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
          {activeTab === 'calculator' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">SWP Calculator Inputs</h3>
                    
                    <div className="space-y-4">
                      {/* Lump Sum */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lump-sum Deposit (₹)
                        </label>
                        <input
                          type="number"
                          value={inputs.lumpSum}
                          onChange={(e) => handleInputChange('lumpSum', parseFloat(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          min="10000"
                          step="10000"
                        />
                      </div>

                      {/* Regular Withdrawal */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Regular Withdrawal (₹)
                        </label>
                        <input
                          type="number"
                          value={inputs.withdrawal}
                          onChange={(e) => handleInputChange('withdrawal', parseFloat(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          min="1000"
                          step="1000"
                        />
                      </div>

                      {/* Frequency */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Withdrawal Frequency
                        </label>
                        <select
                          value={inputs.frequency}
                          onChange={(e) => handleInputChange('frequency', parseInt(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          <option value={12}>Monthly</option>
                          <option value={4}>Quarterly</option>
                          <option value={2}>Half-Yearly</option>
                          <option value={1}>Yearly</option>
                        </select>
                      </div>

                      {/* Adjustment */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Annual Withdrawal Adjustment
                        </label>
                        <div className="flex gap-4 mb-3">
                          {['none', 'fixed', 'percent'].map((type) => (
                            <label key={type} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="adjustment"
                                checked={inputs.adjustmentType === type}
                                onChange={() => handleInputChange('adjustmentType', type)}
                                className="text-primary-500 focus:ring-primary-500"
                              />
                              <span className="text-sm font-medium text-gray-700">
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            min="0"
                            step="1"
                          />
                        )}
                      </div>

                      {/* Expected Return */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expected Annual Return (%)
                        </label>
                        <input
                          type="number"
                          value={inputs.expectedReturn}
                          onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          min="1"
                          max="30"
                          step="0.5"
                        />
                      </div>

                      {/* Term */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Withdrawal Term (Years)
                        </label>
                        <input
                          type="number"
                          value={inputs.term}
                          onChange={(e) => handleInputChange('term', parseInt(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          min="1"
                          max="50"
                          step="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <Results results={results} formatNumber={formatNumber} />
                </div>
              </div>

              {/* Yearly Table */}
              {results && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Year-wise SWP Details</h3>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-primary-600 uppercase tracking-wider">
                              Year
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-primary-600 uppercase tracking-wider">
                              Beginning Balance
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-primary-600 uppercase tracking-wider">
                              Withdrawals
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-primary-600 uppercase tracking-wider">
                              Returns Earned
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-primary-600 uppercase tracking-wider">
                              Ending Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {results.yearlyData.map((data) => (
                            <tr key={data.year} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {data.year}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                ₹ {formatNumber(data.beginningBalance.toFixed(0))}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                ₹ {formatNumber(data.annualWithdrawal.toFixed(0))}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                ₹ {formatNumber(data.annualReturn.toFixed(0))}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">
                                ₹ {formatNumber(data.endingBalance.toFixed(0))}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab !== 'calculator' && (
            <InfoSections activeTab={activeTab} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-white/80">
            SWP Calculator • Plan your financial future with confidence
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SWPCalculatororg;