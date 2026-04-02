import React, { useState } from "react";
import CalculatorSection from "./CalculatorSection";
import ResultsSection from "./ResultsSection";
import CalculatorHeader from "../../../../../../components/CalculatorHeader";
import WhatThisCalculatorDoes from "./WhatThisCalculatorDoes";
import ProTips from "./ProTips";

const LoanVsFdVsSiporg = () => {
  /* ---------------- INPUT STATE ---------------- */
  const [inputs, setInputs] = useState({
    loanAmount: 100000,
    loanInterestRate: 9,
    investmentReturnRate: 8,
    inflationRate: 6,
    loanTerm: 20,
    loanType: "asset",
    assetGrowthRate: 5,
  });

  /* ---------------- RESULT STATE (SINGLE SOURCE OF TRUTH) ---------------- */
  const [results, setResults] = useState(null);

  /* ---------------- INPUT HANDLER ---------------- */
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ---------------- FORMATTER ---------------- */
  const formatCurrency = (value) =>
    `₹${Number(value).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;

  /* ---------------- CALCULATION ---------------- */
  const handleCalculate = () => {
    const {
      loanAmount,
      loanInterestRate,
      investmentReturnRate,
      inflationRate,
      loanTerm,
      loanType,
      assetGrowthRate,
    } = inputs;

    const loanRate = loanInterestRate / 100;
    const investmentRate = investmentReturnRate / 100;
    const inflation = inflationRate / 100;
    const assetGrowth = assetGrowthRate / 100;

    const months = loanTerm * 12;
    const monthlyLoanRate = loanRate / 12;

    /* ---------- EMI ---------- */
    const emi =
      (loanAmount *
        monthlyLoanRate *
        Math.pow(1 + monthlyLoanRate, months)) /
      (Math.pow(1 + monthlyLoanRate, months) - 1);

    const totalLoanAmount = emi * months;
    const totalInterest = totalLoanAmount - loanAmount;

    /* ---------- FD / MF (Lumpsum) ---------- */
    const maturityValue =
      loanAmount * Math.pow(1 + investmentRate, loanTerm);

    const interestEarned = maturityValue - loanAmount;

    const realInvestmentValue =
      maturityValue / Math.pow(1 + inflation, loanTerm);

    /* ---------- SIP ---------- */
    const monthlyInvestmentRate = investmentRate / 12;
    const sipValue =
      emi *
      ((Math.pow(1 + monthlyInvestmentRate, months) - 1) /
        monthlyInvestmentRate) *
      (1 + monthlyInvestmentRate);

    const gainFromSip = sipValue - totalLoanAmount;

    /* ---------- ASSET VALUE ---------- */
    const futureAssetValue =
      loanAmount * Math.pow(1 + assetGrowth, loanTerm);

    /* ---------- RECOMMENDATION ---------- */
    const recommendation =
      loanType === "asset"
        ? futureAssetValue > realInvestmentValue
          ? "Taking a loan and investing simultaneously may be financially beneficial."
          : "Avoiding the loan and using your investments is financially safer."
        : sipValue > totalLoanAmount
        ? "Investing instead of taking this loan may be more beneficial."
        : "Taking the loan may not be financially optimal.";

    /* ---------- SET RESULTS (USED BY ResultsSection) ---------- */
    setResults({
      emi,
      totalInterest,
      totalLoanAmount,
      maturityValue,
      interestEarned,
      sipValue,
      gainFromSip,
      futureAssetValue,
      assetGrowthRate,
      recommendation,
    });
  };

  /* ---------------- RESET ---------------- */
  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <CalculatorHeader
          title="Loan vs FD / MF vs SIP Calculator"
          subtitle="Compare loan cost with investment growth"
          description="Understand whether borrowing or investing delivers better long-term financial outcomes."
        />

        <div className="grid grid-cols-1 gap-8 mb-10">
          <CalculatorSection
            inputs={inputs}
            onInputChange={handleInputChange}
            onCalculate={handleCalculate}
            onReset={handleReset}
          />
{/* 
          <ResultsSection
            results={results}
            inputs={inputs}
            formatCurrency={formatCurrency}
          /> */}
        </div>
        <WhatThisCalculatorDoes/>

       <ProTips/>
      </div>
    </div>
  );
};

export default LoanVsFdVsSiporg;
