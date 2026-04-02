import React from "react";

const WhenToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      {/* Content */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>Identify your effective interest rate.</li>
          <li>Verify if your bank is charging the correct interest.</li>
          <li>Check if refinancing makes financial sense.</li>
          <li>Compare bank offers with your current loan.</li>
          <li>Validate processing by DSA/agents.</li>
          <li>Check interest rate for old loans (where you forgot).</li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToUseCalculator;
