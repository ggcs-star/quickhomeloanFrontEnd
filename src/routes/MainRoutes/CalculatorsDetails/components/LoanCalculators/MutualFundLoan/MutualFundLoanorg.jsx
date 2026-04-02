// components/MFLoanVsSWPCalculator.js
import React, { useState, useEffect } from "react";
import CalculatorSection from "./CalculatorSection";
import ResultsSection from "./ResultsSection";
import StepsSection from "./StepsSection";
import CalculatorHeader from "../../../../../../components/CalculatorHeader";
import UnderstandingStrategy from "./UnderstandingStrategy.jsx";
import ImportantConsiderations from "./ImportantConsiderations.jsx";

const MutualFundLoanorg = () => {
  /* ---------------- INPUT STATE ---------------- */
  const [inputs, setInputs] = useState({
    principal: 1000000,
    loanRate: 9.5,
    years: 10,
  });

  /* ---------------- RESULT STATE ---------------- */
  const [results, setResults] = useState(null);

  /* ---------------- UI STATE (IMPORTANT) ---------------- */
  const [hasCalculated, setHasCalculated] = useState(false);

  /* ---------------- AUTO CALCULATION ---------------- */
  useEffect(() => {
    calculateResults();
  }, [inputs]);

  /* ---------------- HANDLERS ---------------- */
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculateClick = () => {
    setHasCalculated(true);
  };

  const handleReset = () => {
    setInputs({
      principal: 1000000,
      loanRate: 9.5,
      years: 10,
    });
    setHasCalculated(false);
  };

  /* ---------------- HELPERS ---------------- */
  const formatCurrency = (amount) =>
    "₹" +
    amount
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const calculateEMI = (principal, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    if (!r) return principal / n;

    return (
      (principal * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1)
    );
  };

  const calculateRequiredMFRate = (principal, emi, years) => {
    const months = years * 12;
    let low = 0;
    let high = 0.5;
    let mid;
    const tolerance = 0.00001;

    const balanceAfterSWP = (rate) => {
      let balance = principal;
      const monthlyRate = rate / 12;

      for (let i = 0; i < months; i++) {
        balance *= 1 + monthlyRate;
        balance -= emi;
      }

      return balance;
    };

    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      const balance = balanceAfterSWP(mid);

      if (Math.abs(balance) < tolerance) break;
      if (balance > 0) low = mid;
      else high = mid;
    }

    return mid * 100;
  };

  const calculateResults = () => {
    const { principal, loanRate, years } = inputs;

    const emi = calculateEMI(principal, loanRate, years);
    const requiredMFRate = calculateRequiredMFRate(
      principal,
      emi,
      years
    );

    setResults({
      emi,
      requiredMFRate,
    });
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <CalculatorHeader
          title="Mutual Fund Loan vs SWP Calculator"
          subtitle="Calculate the required mutual fund return rate needed to service loan EMIs through a Systematic Withdrawal Plan."
          description="Compare loan interest costs with SWP-based mutual fund returns to decide whether retaining investments makes financial sense."
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Calculator + Results */}
          <div className="space-y-6">
            <CalculatorSection
              inputs={inputs}
              onInputChange={handleInputChange}
              formatCurrency={formatCurrency}
              results={results}
              hasCalculated={hasCalculated}
              onCalculate={handleCalculateClick}
              onReset={handleReset}
            />

<ResultsSection
  results={results}
  formatCurrency={formatCurrency}
/>
          </div>

          {/* Informational Sections */}
          <div className="space-y-6">
            <StepsSection />
            <UnderstandingStrategy />
            <ImportantConsiderations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundLoanorg;
