import React from "react";

const LoanTenureCalculatorHeader = () => {
  return (
    <header className="text-center mb-10 mt-40">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
        Loan Tenure{" "}
        <span className="text-brand-blue-600">Calculator</span>
      </h1>

      <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto tracking-wide">
        Calculate the exact loan duration based on your EMI, interest rate, and
        loan amount using bank-accurate formulas.
      </p>
    </header>
  );
};

export default LoanTenureCalculatorHeader;
