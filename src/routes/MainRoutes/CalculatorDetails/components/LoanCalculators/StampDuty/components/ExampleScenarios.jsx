import React from "react";

export default function ExampleScenarios() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Example Scenarios
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        The following examples use assumed rates for demonstration purposes only.
      </p>

      <div className="space-y-4">
        {/* Scenario A */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario A: Apartment Resale
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Property Value: <strong>₹50,00,000</strong> | Stamp Duty:{" "}
            <strong>₹3,00,000</strong> | Registration Fee:{" "}
            <strong>₹15,000</strong> <br />
            <strong>Total Upfront Charges:</strong> ₹3,17,000
          </p>
        </div>

        {/* Scenario B */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario B: Female Buyer
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Property Value: <strong>₹35,00,000</strong> | Stamp Duty (Concessional):{" "}
            <strong>₹1,57,500</strong> | Registration Fee:{" "}
            <strong>₹35,000</strong> <br />
            <strong>Total Upfront Charges:</strong> ₹1,92,500
          </p>
        </div>

        {/* Scenario C */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Scenario C: Land Purchase (Slab-Based)
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Property Value: <strong>₹10,00,000</strong> <br />
            <strong>Total Applicable Charges:</strong> ₹30,000 (slab-based
            calculation)
          </p>
        </div>
      </div>
    </section>
  );
}
