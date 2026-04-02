import React from "react";

const PracticalApplications = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Practical Applications
      </h2>

      {/* Content */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>Know your exact loan repayment duration.</li>
          <li>Decide whether to increase EMI to reduce tenure.</li>
          <li>Compare two EMI options for the same loan.</li>
          <li>Understand long-term debt impact.</li>
          <li>Check whether interest rate changes made tenure longer.</li>
          <li>Test a new EMI after a salary increment.</li>
          <li>Evaluate prepayment benefits.</li>
          <li>Plan savings around the final loan closure.</li>
        </ul>
      </div>
    </section>
  );
};

export default PracticalApplications;
