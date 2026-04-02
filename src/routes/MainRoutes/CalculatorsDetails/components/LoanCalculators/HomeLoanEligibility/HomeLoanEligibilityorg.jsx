import React, { useState, useEffect } from 'react';

const HomeLoanEligibilityorg = () => {
  // State for all inputs
  const [emi, setEmi] = useState(30000);
  const [rent, setRent] = useState(15000);
  const [inflation, setInflation] = useState(6);
  const [rentIncrease, setRentIncrease] = useState(7);
  const [years, setYears] = useState(20);

  // State for results
  const [results, setResults] = useState({
    totalEMI: 0,
    totalRent: 0,
    presentValueEMI: 0,
    presentValueRent: 0,
    yearlyBreakdown: []
  });

  // Present value calculation
  const calculatePresentValue = (amount, years, rate) => {
    return amount / Math.pow(1 + rate / 100, years);
  };

  // Main calculation
  const calculateResults = () => {
    let totalEMI = 0;
    let totalRent = 0;
    let presentValueEMI = 0;
    let presentValueRent = 0;
    const yearlyBreakdown = [];

    let currentRent = rent;

    for (let year = 1; year <= years; year++) {
      const yearlyEMI = emi * 12;
      const yearlyRent = currentRent * 12;

      totalEMI += yearlyEMI;
      totalRent += yearlyRent;

      const pvEMI = calculatePresentValue(yearlyEMI, year, inflation);
      const pvRent = calculatePresentValue(yearlyRent, year, inflation);

      presentValueEMI += pvEMI;
      presentValueRent += pvRent;

      yearlyBreakdown.push({
        year,
        yearlyEMI,
        yearlyRent,
        pvEMI,
        pvRent,
        currentRent
      });

      currentRent = currentRent * (1 + rentIncrease / 100);
    }

    setResults({
      totalEMI,
      totalRent,
      presentValueEMI,
      presentValueRent,
      yearlyBreakdown
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
  };

  const getRecommendation = () => {
    if (results.presentValueEMI < results.presentValueRent) {
      return {
        type: "buy",
        message: "Buying appears to be financially better",
        color: "text-black"
      };
    } else {
      return {
        type: "rent",
        message: "Renting appears to be financially better",
        color: "text-black"
      };
    }
  };

  useEffect(() => {
    calculateResults();
  }, [emi, rent, inflation, rentIncrease, years]);

  const recommendation = getRecommendation();

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            EMI vs. Rent Calculator
          </h1>
          <p className="text-gray-600 mt-2">
            Should you buy a home or continue renting? Explore the numbers.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* INPUT SECTION */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow">

              {/* Guide */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  How to Use This Calculator
                </h2>

                <div className="flex items-center mb-6 space-x-6 overflow-x-auto pb-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`step-indicator ${
                          step === 1 ? "bg-black text-white" : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {step}
                      </div>
                      <span className="text-sm font-medium text-gray-700 whitespace-nowrap ml-2">
                        {step === 1 && "Enter Basic Numbers"}
                        {step === 2 && "Set Economic Factors"}
                        {step === 3 && "Choose Time Frame"}
                        {step === 4 && "View Results"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                  <h3 className="font-medium text-black mb-2">💡 Pro Tip</h3>
                  <p className="text-sm text-gray-700">
                    Even a small change in rent increase rate can impact long-term decisions.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">

                {/* Step 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Step 1: Basic Numbers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly EMI (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-600">₹</span>
                        <input
                          type="number"
                          value={emi}
                          onChange={(e) => setEmi(+e.target.value)}
                          className="pl-8 w-full border border-gray-400 rounded-lg py-2 px-3 focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Rent (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-600">₹</span>
                        <input
                          type="number"
                          value={rent}
                          onChange={(e) => setRent(+e.target.value)}
                          className="pl-8 w-full border border-gray-400 rounded-lg py-2 px-3 focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Step 2: Economic Factors
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inflation Rate (%)
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="3"
                          max="10"
                          step="0.5"
                          value={inflation}
                          onChange={(e) => setInflation(+e.target.value)}
                          className="flex-1 slider"
                        />
                        <span className="text-sm text-gray-700 w-16">
                          {inflation}%
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rent Increase (%)
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="3"
                          max="15"
                          step="0.5"
                          value={rentIncrease}
                          onChange={(e) => setRentIncrease(+e.target.value)}
                          className="flex-1 slider"
                        />
                        <span className="text-sm text-gray-700 w-16">
                          {rentIncrease}%
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Step 3: Time Frame
                  </h3>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Analysis Period (Years)
                  </label>

                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="5"
                      value={years}
                      onChange={(e) => setYears(+e.target.value)}
                      className="flex-1 slider"
                    />
                    <span className="text-sm text-gray-700 w-16">{years} yrs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Info Boxes */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-black mb-4">Understanding the Results</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                  <h4 className="font-medium text-black mb-2">When Buying is Better</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lower present value of EMI</li>
                    <li>• Equity building</li>
                    <li>• Long-term value</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                  <h4 className="font-medium text-black mb-2">When Renting is Better</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lower present value of rent</li>
                    <li>• Higher flexibility</li>
                    <li>• No ownership overheads</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow sticky top-6">

              <h2 className="text-xl font-semibold text-black mb-6">Your Results</h2>

              <div className="mb-6 p-4 rounded-lg border border-gray-300 bg-gray-50">
                <div className="text-lg font-semibold text-black">
                  {recommendation.type === "buy" ? "🏠 BUY" : "🏘️ RENT"}
                </div>
                <p className="text-sm text-gray-700 mt-1">{recommendation.message}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Total EMI Paid</span>
                  <span className="font-semibold text-black">
                    ₹{formatCurrency(results.totalEMI)}
                  </span>
                </div>

                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Total Rent Paid</span>
                  <span className="font-semibold text-black">
                    ₹{formatCurrency(results.totalRent)}
                  </span>
                </div>

                <div className="flex justify-between p-3 bg-gray-100 rounded-lg">
                  <span className="text-gray-700">Present Value (EMI)</span>
                  <span className="font-semibold text-black">
                    ₹{formatCurrency(results.presentValueEMI)}
                  </span>
                </div>

                <div className="flex justify-between p-3 bg-gray-100 rounded-lg">
                  <span className="text-gray-700">Present Value (Rent)</span>
                  <span className="font-semibold text-black">
                    ₹{formatCurrency(results.presentValueRent)}
                  </span>
                </div>
              </div>

              {/* Difference */}
              <div className="mb-6 p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Difference</span>
                  <span className="font-bold text-black">
                    ₹{formatCurrency(Math.abs(results.presentValueEMI - results.presentValueRent))}
                  </span>
                </div>
              </div>

              {/* Yearly Summary */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Yearly Summary (5 yrs)</h3>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {results.yearlyBreakdown.slice(0, 5).map((y) => (
                    <div key={y.year} className="flex justify-between p-2 border-b border-gray-300">
                      <span className="text-xs text-gray-600">Year {y.year}</span>
                      <div className="text-right text-xs">
                        <div className="text-gray-700">EMI: ₹{formatCurrency(y.yearlyEMI)}</div>
                        <div className="text-gray-700">Rent: ₹{formatCurrency(y.yearlyRent)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg transition">
                {recommendation.type === "buy" ? "Start Home Loan" : "Check Rentals"}
              </button>
            </div>
          </div>
        </div>

        {/* EXPLANATION */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-black mb-4">
            Understanding the Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <h3 className="font-medium text-black mb-2">What is Present Value?</h3>
              <p className="text-sm text-gray-700">
                Present value shows the value of future payments today by
                adjusting for inflation.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-black mb-2">Key Considerations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• EMI builds ownership</li>
                <li>• Rent gives flexibility</li>
                <li>• Property has maintenance cost</li>
                <li>• Recalculate yearly</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* PURE BLACK/WHITE SLIDER + STEPS */}
      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          height: 6px;
          border-radius: 5px;
          background: #c4c4c4;
        }
        .slider::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          background: black;
          border-radius: 50%;
        }
        .step-indicator {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default HomeLoanEligibilityorg;
