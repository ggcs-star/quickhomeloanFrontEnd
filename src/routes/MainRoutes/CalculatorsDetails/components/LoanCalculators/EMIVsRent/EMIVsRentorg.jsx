// components/EMIVsRentCalculator.js
import React, { useState, useEffect } from 'react';
import CalculatorSection from './CalculatorSection';
import ResultsSection from './ResultsSection';
import RecommendationSection from './RecommendationSection';
import CalculatorHeader from '../../../../../../components/CalculatorHeader';

const EMIVsRentorg = () => {
  const [inputs, setInputs] = useState({
    emi: 30000,
    inflation: 6,
    rent: 15000,
    rentIncrement: 5,
    period: 20
  });

  const [results, setResults] = useState(null);
  const [breakdownVisible, setBreakdownVisible] = useState(false);

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  };

  const formatCurrencyShort = (amount) => {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(1) + 'Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(1) + 'L';
    } else if (amount >= 1000) {
      return '₹' + (amount / 1000).toFixed(0) + 'K';
    }
    return '₹' + Math.round(amount);
  };

  const calculateResults = () => {
    const { emi, inflation, rent, rentIncrement, period } = inputs;

    // Validate inputs
    if (!emi || !inflation || !rent || !rentIncrement || !period) {
      return;
    }

    // Convert rates to decimal
    const inflationRate = inflation / 100;
    const rentIncrementRate = rentIncrement / 100;

    // Calculate results
    let totalEMI = 0;
    let totalRent = 0;
    let pvEMI = 0;
    let pvRent = 0;

    let currentRent = rent;
    const monthlyInflation = Math.pow(1 + inflationRate, 1/12) - 1;

    // Generate breakdown data
    const breakdownData = [];

    for (let year = 1; year <= period; year++) {
      // Calculate yearly totals
      const yearlyEMI = emi * 12;
      const yearlyRent = currentRent * 12;
      
      totalEMI += yearlyEMI;
      totalRent += yearlyRent;
      
      // Calculate present values
      const discountFactor = Math.pow(1 + inflationRate, year - 1);
      const pvYearlyEMI = yearlyEMI / discountFactor;
      const pvYearlyRent = yearlyRent / discountFactor;
      
      pvEMI += pvYearlyEMI;
      pvRent += pvYearlyRent;
      
      // Calculate monthly present values for breakdown
      const monthlyDiscountFactor = Math.pow(1 + monthlyInflation, 12 * (year - 1));
      const pvMonthlyEMI = emi / monthlyDiscountFactor;
      const pvMonthlyRent = currentRent / monthlyDiscountFactor;
      
      // Add to breakdown data
      breakdownData.push({
        year,
        monthlyEMI: emi,
        pvMonthlyEMI,
        monthlyRent: currentRent,
        pvMonthlyRent
      });
      
      // Increment rent for next year
      currentRent *= (1 + rentIncrementRate);
    }

    // Determine recommendation
    const difference = Math.abs(pvEMI - pvRent);
    const isEMIBetter = pvEMI < pvRent;

    setResults({
      totalEMI,
      totalRent,
      pvEMI,
      pvRent,
      breakdownData,
      isEMIBetter,
      difference,
      formatCurrency,
      formatCurrencyShort
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <CalculatorHeader
  title="EMI vs Rent Calculator"
  subtitle="Compare the financial implications of buying a property on EMI versus continuing to rent."
  description="Analyze long-term cash outflow, opportunity cost, and wealth creation to determine whether buying or renting makes more financial sense."
/>


        {/* Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Section */}
          <CalculatorSection
            inputs={inputs}
            onInputChange={handleInputChange}
          />

          {/* Results Section */}
          <ResultsSection
            results={results}
            breakdownVisible={breakdownVisible}
            onToggleBreakdown={() => setBreakdownVisible(!breakdownVisible)}
          />
        </div>

        {/* Recommendation Section */}
        <RecommendationSection results={results} />
      </div>
    </div>
  );
};

export default EMIVsRentorg;