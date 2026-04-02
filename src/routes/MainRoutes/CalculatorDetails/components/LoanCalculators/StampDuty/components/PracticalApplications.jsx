import React from "react";

export default function PracticalApplications() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Practical Applications
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3 list-disc list-inside">
          <li>
            <strong>Homebuyers:</strong> Estimate total closing and statutory
            costs while planning the down payment and overall purchase budget.
          </li>

          <li>
            <strong>Real Estate Agents:</strong> Display complete upfront costs
            in property listings to improve transparency and buyer confidence.
          </li>

          <li>
            <strong>Lenders:</strong> Assess disbursal requirements and borrower
            margin by factoring in stamp duty and registration charges.
          </li>

          <li>
            <strong>Brokers:</strong> Advise clients on purchase timing (for
            example, completing registration before a rate revision or policy
            change).
          </li>

          <li>
            <strong>Developers:</strong> Present the net cost to buyers,
            including mandatory statutory charges, for accurate pricing
            communication.
          </li>

          <li>
            <strong>Accountants & Tax Consultants:</strong> Verify property
            acquisition expenses for documentation, audit, and compliance
            purposes.
          </li>
        </ul>
      </div>
    </section>
  );
}
