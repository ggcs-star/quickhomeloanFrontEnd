import React from 'react';

const CalculatorSection = ({ inputs, onInputChange }) => {
  const inputFields = [
    {
      id: 'emi',
      label: 'Monthly EMI (₹)',
      value: inputs.emi,
      hint: 'Your monthly home loan installment'
    },
    {
      id: 'inflation',
      label: 'Inflation Rate (%)',
      value: inputs.inflation,
      hint: 'Annual inflation rate for present value calculation'
    },
    {
      id: 'rent',
      label: 'Monthly Rent (₹)',
      value: inputs.rent,
      hint: 'Current monthly rental payment'
    },
    {
      id: 'rentIncrement',
      label: 'Expected Rent Increment (% per year)',
      value: inputs.rentIncrement,
      hint: 'Expected annual increase in rent'
    },
    {
      id: 'period',
      label: 'Analysis Period (Years)',
      value: inputs.period,
      hint: 'Time period for comparison',
      min: 1,
      max: 50
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-6">
      <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
        <i className="fas fa-calculator text-black"></i>
        Input Parameters
      </h2>

      <div className="space-y-6">
        {inputFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label htmlFor={field.id} className="block text-lg font-semibold text-black">
              {field.label}
            </label>

            <input
              type="number"
              id={field.id}
              value={field.value}
              onChange={(e) => onInputChange(field.id, parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition"
              min={field.min || 0}
              max={field.max}
              step={field.step || 1}
            />

            <p className="text-sm text-gray-600">{field.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorSection;
