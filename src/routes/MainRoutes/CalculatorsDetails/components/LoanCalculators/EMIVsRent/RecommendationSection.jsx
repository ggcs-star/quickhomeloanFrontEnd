// components/RecommendationSection.js
import React from 'react';

const RecommendationSection = ({ results }) => {
  const emiBenefits = [
    "Asset Creation: EMI payments build equity in a tangible asset",
    "Forced Savings: Regular payments act as a disciplined savings mechanism",
    "Appreciation Potential: Property values typically increase over time",
    "Fixed Payments: EMI remains constant while rent increases over time",
    "Tax Benefits: Home loan interest and principal repayments offer tax deductions",
    "Financial Security: Ownership provides stability and collateral for future loans"
  ];

  const rentBenefits = [
    "Lower Initial Cost: No down payment or registration fees required",
    "Flexibility: Easier to relocate for job opportunities or lifestyle changes",
    "No Maintenance Costs: Repairs and upkeep are the landlord's responsibility",
    "Liquidity: Savings can be invested in higher-return instruments",
    "No Price Risk: Protected from property market fluctuations",
    "Predictable Budgeting: Fixed costs for the lease duration"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-6">
      <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
        <i className="fas fa-lightbulb text-black"></i>
        Financial Analysis
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* EMI Benefits */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
          <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
            <i className="fas fa-home text-black"></i>
            Buying (EMI) Benefits
          </h3>

          <ul className="space-y-3">
            {emiBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rent Benefits */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
          <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
            <i className="fas fa-building text-black"></i>
            Renting Benefits
          </h3>

          <ul className="space-y-3">
            {rentBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Conclusion Section */}
      <div className="bg-gray-50 rounded-xl border border-gray-300 p-6 text-center">
        {results ? (
          <p className="text-lg font-semibold text-black leading-relaxed">
            {results.isEMIBetter ? (
              <>
                Buying is financially better — You would save{" "}
                <span className="underline">{results.formatCurrency(results.difference)}</span>{" "}
                in present value terms. EMI payments build equity, while rent payments do not create an asset.
              </>
            ) : (
              <>
                Renting is financially better — You would save{" "}
                <span className="underline">{results.formatCurrency(results.difference)}</span>{" "}
                in present value terms. Keep in mind that rent payments offer flexibility but do not build asset value.
              </>
            )}
          </p>
        ) : (
          <p className="text-lg text-gray-600">
            Enter values and click Calculate to see financial recommendation.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommendationSection;
