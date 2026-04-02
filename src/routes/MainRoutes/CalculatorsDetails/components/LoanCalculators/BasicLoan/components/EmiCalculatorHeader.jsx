import React from "react";

const EmiCalculatorHeader = () => {
  return (
    <header className="text-center my-8 mt-40">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        EMI Calculator
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        Calculate your Equated Monthly Installment (EMI) for home, car, or
        personal loans in seconds. Our easy-to-use calculator helps you plan
        your loan repayments with precision.
      </p>

      <p class="text-center my-8 text-gray-600">Enter the loan amount, interest rate, and tenure to instantly find out your monthly EMI, total interest payable, and the total repayment amount.</p>
    </header>
  );
};

export default EmiCalculatorHeader;
