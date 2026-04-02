// components/EMIInterestRateCalculator.js
import React, { useState, useEffect } from 'react';
import CalculatorSection from './CalculatorSection';
import InstructionsSection from './InstructionsSection';
import InfoSection from './InfoSection';

const EMILoanFinderorg = () => {
  const [inputs, setInputs] = useState({
    loanAmount: 100000,
    emiAmount: 2000,
    loanTerm: 60
  });

  const [interestRate, setInterestRate] = useState(0);

  useEffect(() => {
    calculateInterestRate();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateFunction = (loanAmount, emi, months, monthlyRate) => {
    if (monthlyRate === 0) {
      return emi * months - loanAmount;
    }
    
    const factor = Math.pow(1 + monthlyRate, months);
    return emi * (factor - 1) / (monthlyRate * factor) - loanAmount;
  };

  const calculateDerivative = (loanAmount, emi, months, monthlyRate) => {
    if (monthlyRate === 0) {
      return -emi * months * (months + 1) / 2;
    }
    
    const factor = Math.pow(1 + monthlyRate, months);
    const term1 = (emi * (factor - 1)) / (monthlyRate * monthlyRate * factor);
    const term2 = (emi * months) / (monthlyRate * (1 + monthlyRate));
    
    return term1 - term2;
  };

  const findInterestRate = (loanAmount, emi, months) => {
    // Use iterative method to find the interest rate
    let rate = 0.1; // Starting guess of 10%
    let precision = 0.000001; // Desired precision
    let maxIterations = 100; // Maximum iterations to prevent infinite loop
    
    for (let i = 0; i < maxIterations; i++) {
      // Calculate function value and its derivative
      const f = calculateFunction(loanAmount, emi, months, rate);
      const fPrime = calculateDerivative(loanAmount, emi, months, rate);
      
      // Avoid division by zero
      if (Math.abs(fPrime) < 1e-10) {
        break;
      }
      
      // Update rate using Newton-Raphson method
      const newRate = rate - f / fPrime;
      
      // Check for convergence
      if (Math.abs(newRate - rate) < precision) {
        return newRate * 12 * 100; // Convert to annual percentage
      }
      
      rate = newRate;
      
      // Prevent negative or extremely high rates
      if (rate < 0) rate = 0.001;
      if (rate > 5) rate = 5; // 500% max
    }
    
    // If we reach here, return the best estimate
    return rate * 12 * 100;
  };

  const calculateInterestRate = () => {
    const { loanAmount, emiAmount, loanTerm } = inputs;

    // Validate inputs
    if (!loanAmount || !emiAmount || !loanTerm || 
        loanAmount <= 0 || emiAmount <= 0 || loanTerm <= 0) {
      setInterestRate(0);
      return;
    }
    
    // Check if EMI is too small
    if (emiAmount * loanTerm < loanAmount) {
      setInterestRate(NaN);
      return;
    }
    
    // Calculate interest rate using iterative method
    const rate = findInterestRate(loanAmount, emiAmount, loanTerm);
    
    // Set result
    if (isNaN(rate) || !isFinite(rate)) {
      setInterestRate(NaN);
    } else {
      setInterestRate(rate);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8 text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            EMI Calculator - Interest Rate Finder
          </h1>
          <p className="text-xl opacity-90">
            Calculate your loan's annual interest rate in seconds
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CalculatorSection
            inputs={inputs}
            interestRate={interestRate}
            onInputChange={handleInputChange}
          />
          <InstructionsSection />
        </div>

        {/* Info Section */}
        <InfoSection />
      </div>
    </div>
  );
};

export default EMILoanFinderorg;