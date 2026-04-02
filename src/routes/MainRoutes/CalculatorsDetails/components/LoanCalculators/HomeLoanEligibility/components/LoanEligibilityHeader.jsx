import React from "react";

const LoanEligibilityHeader = () => {
  return (
    <header className="text-center mb-10 mt-40">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
        Loan Eligibility Calculator
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find the Maximum Loan You Qualify For
      </p>

      <p className="mt-2 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
        Instantly estimate your home, car, or personal loan eligibility based on
        your income, existing EMIs, and financial commitments.
      </p>
    </header>
  );
};

export default LoanEligibilityHeader;
