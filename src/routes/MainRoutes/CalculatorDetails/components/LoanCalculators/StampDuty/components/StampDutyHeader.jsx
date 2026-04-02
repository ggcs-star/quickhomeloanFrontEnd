import React from "react";

const StampDutyHeader = () => {
  return (
    <header className="text-center mb-10 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
        Stamp Duty &amp; Registration Calculator
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Estimate stamp duty, registration charges and total upfront property cost.
        Enter property value, state, buyer type and get an instant breakdown.
      </p>
    </header>
  );
};

export default StampDutyHeader;
