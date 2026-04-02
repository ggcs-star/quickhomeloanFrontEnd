import React from "react";

export default function HowToUseCalculator() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How to Use This Calculator – Step by Step
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">1. Enter Property Value</h3>
          <p className="text-sm mt-1">
            Input the agreement or market value of the property.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            2. Select State / Enter Rates
          </h3>
          <p className="text-sm mt-1">
            Choose your State or UT to auto-apply stamp duty and registration
            rates, or enter them manually.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            3. Choose Property & Buyer Type
          </h3>
          <p className="text-sm mt-1">
            Select property type (residential, commercial, plot) and buyer
            category (individual, joint, female buyer, etc.).
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">
            4. Select Slab-Based Calculation
          </h3>
          <p className="text-sm mt-1">
            Enable slab-based calculation if your state follows slab-wise stamp
            duty rules.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">5. Enter Other Charges</h3>
          <p className="text-sm mt-1">
            Add any additional costs such as transfer fees, cess, or local
            charges.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold text-gray-800">6. Calculate Charges</h3>
          <p className="text-sm mt-1">
            Click <strong>Calculate</strong> to instantly view the full
            stamp duty and registration cost breakdown.
          </p>
        </div>
      </div>
    </section>
  );
}
