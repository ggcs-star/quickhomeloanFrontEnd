import React from "react";

const HowThisCalculatorWorks = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How This Calculator Works
      </h2>

      {/* CONTENT */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          This calculator reverses the standard EMI formula by using an iterative
          approximation method (specifically, the{" "}
          <strong>bisection method</strong>) to solve for the interest rate.
        </p>

        <p className="font-mono bg-gray-100 p-4 rounded-md text-center text-lg">
          EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1)
        </p>

        <p>
          Since this formula cannot be algebraically solved for{" "}
          <strong>r</strong> (the monthly interest rate), the calculator
          intelligently guesses the rate and refines its guess over dozens of
          iterations until it finds the rate that produces your exact EMI.
        </p>

        <p>
          <strong>What it considers:</strong> EMI, Loan Amount, Tenure, and
          Monthly Compounding.
        </p>

        <p>
          <strong>What it excludes:</strong> Processing fees, insurance charges,
          and other bank-specific fees which are not part of the principal loan
          amount.
        </p>
      </div>
    </section>
  );
};

export default HowThisCalculatorWorks;
