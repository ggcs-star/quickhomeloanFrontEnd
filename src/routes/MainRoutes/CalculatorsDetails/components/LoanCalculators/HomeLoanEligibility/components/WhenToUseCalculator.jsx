import React from "react";

const WhenToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>Before you start searching for a home, to know your property budget.</li>
          <li>When planning to buy a new or used car to determine affordability.</li>
          <li>Before applying for a personal loan for marriage, travel, or medical emergencies.</li>
          <li>To compare loan eligibility across different banks with varying interest rates.</li>
          <li>When you are unsure how much loan you can get on your current salary.</li>
          <li>If you already have existing EMIs and want to check your eligibility for a new loan.</li>
          <li>To decide on the ideal loan tenure that matches your repayment capacity.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToUseCalculator;
