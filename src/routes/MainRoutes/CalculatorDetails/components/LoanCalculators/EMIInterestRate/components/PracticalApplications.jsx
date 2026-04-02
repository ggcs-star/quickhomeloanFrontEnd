import React from "react";

const PracticalApplications = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Practical Applications
      </h2>

      {/* CONTENT */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3 list-disc list-inside">
          <li>
            <strong>Verify Loan Offers:</strong> Check if a balance transfer or
            new loan truly saves you money.
          </li>

          <li>
            <strong>Negotiate Better Terms:</strong> Arm yourself with data to
            negotiate a lower rate with lenders.
          </li>

          <li>
            <strong>Detect Overcharging:</strong> Ensure agents or lenders are
            providing the rate they promised.
          </li>

          <li>
            <strong>Understand “Zero-Cost” EMI:</strong> Uncover the hidden
            interest in schemes that claim 0% interest but have higher product
            prices.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PracticalApplications;
