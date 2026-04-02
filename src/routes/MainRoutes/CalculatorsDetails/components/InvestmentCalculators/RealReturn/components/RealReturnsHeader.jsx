import React from "react";

export default function RealReturnsHeader() {
  return (
    <header className="bg-white text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Real Returns After Tax Calculator
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Calculate the true value of your investment after accounting for taxes
          and inflation. See its real purchasing power in today’s rupees, not
          inflated future numbers.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <FeaturePill text="After-tax annual return" />
          <FeaturePill text="Future value after taxes" />
          <FeaturePill text="Inflation-adjusted future value" />
          <FeaturePill text="Real rate of return" />
        </div>
      </div>
    </header>
  );
}

/* ---------------- SMALL UI PART ---------------- */

function FeaturePill({ text }) {
  return (
    <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-2">
      ✔️ {text}
    </span>
  );
}