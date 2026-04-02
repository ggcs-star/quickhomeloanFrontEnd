import React, { useState, useEffect } from "react";
import FDBreakVsLoanCalculatorInputs from "./FDBreakVsLoanCalculatorInputs";
import FDBreakVsLoanCalculatorResults from "./FDBreakVsLoanCalculatorResults";

/* ---------------- EMI HELPER ---------------- */
const calculateEMI = (P, rate, years) => {
  const r = rate / 12 / 100;
  const n = years * 12;
  if (!r) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

export default function FDBreakVsLoanCalculator() {
  const [form, setForm] = useState({
    principal: 499998,
    loanInterestRate: 8.5,
    fdInterestRate: 6.5,
    term: 5,
    fdBreakPenalty: 0,
    taxOnFdInterest: 0,
  });

  const [results, setResults] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  /* -------- CORE CALCULATION -------- */
  const calculateResults = () => {
    const P = Number(form.principal);
    const years = Number(form.term);

    const emi = calculateEMI(P, form.loanInterestRate, years);
    const totalPaid = emi * years * 12;
    const totalLoanInterest = totalPaid - P;

    const fdMaturity =
      P * Math.pow(1 + form.fdInterestRate / 100, years);

    const fdInterest = fdMaturity - P;

    const penalty =
      (fdInterest * Number(form.fdBreakPenalty)) / 100;

    const tax =
      ((fdInterest - penalty) * Number(form.taxOnFdInterest)) / 100;

    const opportunityCost = fdInterest - penalty - tax;

    const recommendation =
      totalLoanInterest < opportunityCost
        ? "Take Loan"
        : "Break FD";

    const netAdvantage = Math.abs(
      opportunityCost - totalLoanInterest
    );

    setResults({
      emi,
      totalPaid,
      totalLoanInterest,
      fdMaturity,
      fdInterest,
      opportunityCost,
      recommendation,
      netAdvantage,
    });
  };

  /* -------- AUTO-UPDATE AFTER FIRST CALC -------- */
  useEffect(() => {
    if (hasCalculated) calculateResults();
  }, [form]);

  return (
    <>
      <FDBreakVsLoanCalculatorInputs
        form={form}
        setForm={setForm}
        onCalculate={() => {
          calculateResults();
          setHasCalculated(true);
        }}
      />

      {hasCalculated && results && (
        <FDBreakVsLoanCalculatorResults results={results} />
      )}
    </>
  );
}
