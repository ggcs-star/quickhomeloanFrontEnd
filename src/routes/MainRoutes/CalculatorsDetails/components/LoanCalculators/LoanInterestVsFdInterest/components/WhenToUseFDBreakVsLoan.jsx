import React from "react";

const WhenToUseFDBreakVsLoan = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside">
          <li>Should you break your FD to make a purchase?</li>
          <li>Or is it smarter to take a loan and keep your FD growing?</li>
          <li>
            When planning big purchases — car, home repairs, electronics,
            wedding expenses, medical emergencies.
          </li>
          <li>When your FD is your main emergency fund.</li>
          <li>When comparing loan offers from different banks.</li>
          <li>
            When your FD is close to maturity and you want to see if waiting is
            better.
          </li>
          <li>
            When you’re calculating the total financial impact including
            inflation.
          </li>
          <li>
            When evaluating the opportunity cost of breaking your FD early.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToUseFDBreakVsLoan;
