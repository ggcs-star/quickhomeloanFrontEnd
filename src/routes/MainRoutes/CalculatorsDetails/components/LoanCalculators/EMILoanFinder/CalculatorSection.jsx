// components/CalculatorSection.js
import React from 'react';

const CalculatorSection = ({ inputs, interestRate, onInputChange }) => {
  const inputFields = [
    {
      id: 'loanAmount',
      label: 'Loan Amount',
      value: inputs.loanAmount,
      placeholder: 'Enter loan amount',
      icon: '₹',
      min: 1
    },
    {
      id: 'emiAmount',
      label: 'Monthly EMI Amount',
      value: inputs.emiAmount,
      placeholder: 'Enter EMI amount',
      icon: '₹',
      min: 1
    },
    {
      id: 'loanTerm',
      label: 'Loan Term (in months)',
      value: inputs.loanTerm,
      placeholder: 'Enter loan term in months',
      icon: '📅',
      min: 1
    }
  ];

  const formatCurrency = (amount) => '₹' + amount.toLocaleString('en-IN');

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">

      {/* HEADER - Black & White */}
      <div className="bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-wide">
          Calculate Interest Rate
        </h2>
      </div>

      {/* FORM */}
      <div className="p-6">
        {inputFields.map((field) => (
          <div key={field.id} className="mb-6">
            <label
              htmlFor={field.id}
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              {field.label}
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-lg">
                {field.icon}
              </span>

              <input
                type="number"
                id={field.id}
                value={field.value}
                onChange={(e) =>
                  onInputChange(field.id, parseFloat(e.target.value) || 0)
                }
                placeholder={field.placeholder}
                min={field.min}
                className="
                  w-full pl-10 pr-4 py-3
                  border border-gray-400 rounded-lg
                  focus:ring-2 focus:ring-gray-800 focus:border-gray-800
                  text-gray-800 text-lg
                "
              />
            </div>
          </div>
        ))}

        {/* RESULT BOX */}
        <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 mt-8 text-center shadow-sm">
          <div className="text-lg font-medium text-gray-700 mb-3 flex items-center justify-center">
            <span className="mr-2">📈</span>
            Annual Interest Rate
          </div>

          <div className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            {isNaN(interestRate) ? '—' : `${interestRate.toFixed(2)}%`}
          </div>

          <div className="text-gray-500 text-sm">
            Based on EMI, loan tenure & principal
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <div className="text-sm text-gray-800">
            <p className="font-semibold mb-2">Current Calculation:</p>
            <p>Loan: {formatCurrency(inputs.loanAmount)}</p>
            <p>EMI: {formatCurrency(inputs.emiAmount)} / month</p>
            <p>
              Tenure: {inputs.loanTerm} months (
              {(inputs.loanTerm / 12).toFixed(1)} years)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
