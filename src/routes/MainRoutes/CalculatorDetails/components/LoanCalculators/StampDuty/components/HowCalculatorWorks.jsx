import React from "react";

export default function HowCalculatorWorks() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        How This Calculator Works (Formulas & Logic)
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        This section explains the formulas and calculation logic used, so users,
        auditors, and legal professionals can independently verify the results.
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* Simple Percentage */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Stamp Duty – Simple Percentage
          </h3>
          <p className="text-sm">
            If a flat percentage rate applies:
          </p>
          <div className="mt-2 bg-gray-50 border rounded-lg p-3 font-mono text-sm text-gray-800">
            Stamp Duty = Property Value × (Stamp Duty % ÷ 100)
          </div>
        </div>

        {/* Slab Logic */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Stamp Duty – Slab-Based Logic
          </h3>
          <p className="text-sm">
            When slab-wise rates are applicable:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>
              The property value is split across predefined slabs.
            </li>
            <li>
              Each slab rate is applied only to the portion of value falling
              within that slab.
            </li>
            <li>
              Stamp duty is the sum of duty calculated for all applicable slabs.
            </li>
          </ul>
        </div>

        {/* Registration Fee */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Registration Fee Calculation
          </h3>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>
              <strong>Percentage-based:</strong>{" "}
              Registration Fee = Property Value × (Registration % ÷ 100)
            </li>
            <li>
              <strong>Flat fee:</strong>{" "}
              Registration Fee = Fixed amount defined by the state.
            </li>
          </ul>
        </div>

        {/* Total Cost */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Total Upfront Cost
          </h3>
          <div className="mt-2 bg-gray-50 border rounded-lg p-3 font-mono text-sm text-gray-800">
            Total Upfront Cost = Stamp Duty + Registration Fee + Other Charges
          </div>
        </div>

        {/* Buyer Concessions */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Buyer Concessions
          </h3>
          <p className="text-sm">
            Some states offer concessions (for example, female buyer benefits or
            first-time buyer discounts). The calculator:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>
              Applies the concession as a percentage or flat reduction, as per
              state policy.
            </li>
            <li>
              Deducts the concession before finalizing the stamp duty amount.
            </li>
            <li>
              Clearly displays the concession applied in the results breakdown.
            </li>
          </ul>
        </div>

        {/* Rounding */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Rounding Rules
          </h3>
          <p className="text-sm">
            All calculated amounts are rounded to the nearest rupee, or as
            required by applicable state registration rules.
          </p>
        </div>

        {/* Limitations */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="font-semibold text-gray-800 mb-1">
            Important Limitations
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Stamp duty and registration rates vary by state and may change
              without notice.
            </li>
            <li>
              Special exemptions, caps, or temporary concessions may apply.
            </li>
            <li>
              The calculator provides an estimate only and should not be treated
              as legal advice.
            </li>
            <li>
              Always verify final figures with the local sub-registrar or a
              qualified conveyancing lawyer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
