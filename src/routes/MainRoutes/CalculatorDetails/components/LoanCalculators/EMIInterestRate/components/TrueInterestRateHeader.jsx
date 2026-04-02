import React from "react";

const TrueInterestRateHeader = () => {
  return (
    <header className="text-center mb-10 mt-40">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
        True Interest Rate{" "}
        <span className="text-brand-blue-600">Calculator</span>
      </h1>

      <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto tracking-wide">
        Uncover the exact interest rate on any loan using our reverse EMI
        calculator with bank-accurate results.
      </p>
    </header>
  );
};

export default TrueInterestRateHeader;
