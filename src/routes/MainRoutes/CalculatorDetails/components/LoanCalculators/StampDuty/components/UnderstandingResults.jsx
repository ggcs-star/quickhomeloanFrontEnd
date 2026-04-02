import React from "react";

export default function UnderstandingResults() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Understanding the Results
      </h2>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        {/* Key Breakdown */}
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Stamp Duty:</strong> A legal tax payable to the state
              government, usually calculated as a percentage of the property
              value. In some states, it may follow slab-based rules or have a
              maximum cap.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Registration Fee:</strong> A fee paid to the registrar to
              legally record the property transfer. This may be a fixed amount
              or a percentage of the property value.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Other Charges:</strong> Optional or situational charges
              such as transfer fees, cess, stamp surcharge, or legal and
              documentation fees.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Total Upfront Cost:</strong> The sum of stamp duty,
              registration fee, and other charges. This is the amount you must
              arrange immediately at the time of sale or registration (separate
              from your down payment).
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              <strong>Per-Buyer Split:</strong> In case of joint ownership, the
              calculator can show how much each buyer needs to contribute toward
              the total upfront cost.
            </span>
          </li>
        </ul>

        {/* How to Use */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          How to Use This Breakdown
        </h3>

        <div>
          <p className="mt-1">
            Use this breakdown to plan your property purchase more accurately.
            The <strong>Total Upfront Cost</strong> should be factored into your
            cash flow planning, alongside the down payment and loan-related
            expenses.
          </p>

          <p className="mt-3">
            If you are purchasing jointly, reviewing the
            <strong> per-buyer split</strong> helps avoid confusion and ensures
            transparent cost-sharing between co-buyers.
          </p>

          <p className="mt-3 font-semibold text-gray-800">
            Tip: Legal charges vary significantly by state. Always confirm the
            final figures with your registrar or legal advisor before
            proceeding.
          </p>
        </div>
      </div>
    </section>
  );
}
