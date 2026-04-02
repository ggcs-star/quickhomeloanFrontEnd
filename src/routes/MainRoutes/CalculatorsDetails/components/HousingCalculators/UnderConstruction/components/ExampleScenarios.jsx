import React from "react";

const ExampleScenarios = () => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-xl shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Common Scenarios
      </h2>

      <div className="space-y-4">
        {/* Example 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Example 1: Job Relocation – Immediate Need
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Scenario:</strong> A software engineer is relocating to a new
            city and needs a place to live immediately. An RTM apartment is
            available for ₹1 Crore, while a similar UC apartment is available
            for ₹85 Lakhs with a 3-year possession timeline. Rent for a
            comparable apartment is ₹30,000/month.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            <strong>Analysis:</strong> The calculator will show that while the UC
            property is cheaper by ₹15 Lakhs, the buyer will spend ₹10.8 Lakhs
            in rent (₹30,000 × 36) plus significant pre-EMI interest over three
            years. The RTM option, despite its higher price, eliminates rent and
            enables immediate tax benefits and stability. The total cost gap
            narrows significantly, making RTM preferable for immediate needs.
          </p>
        </div>

        {/* Example 2 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Example 2: Investor Eyeing High Appreciation
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Scenario:</strong> An investor identifies a developing area
            where a UC project is launched for ₹70 Lakhs. RTM properties nearby
            are selling for ₹90 Lakhs. Expected appreciation is high (e.g., 8%
            annually) due to upcoming infrastructure.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            <strong>Analysis:</strong> The tool estimates appreciation over the
            construction period. Over three years, the UC property could be
            worth over ₹88 Lakhs at possession. This appreciation can outweigh
            rent and pre-EMI costs, positioning the UC option as a superior
            long-term investment versus the already expensive RTM alternative.
          </p>
        </div>

        {/* Example 3 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Example 3: Buyer with Limited Budget
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Scenario:</strong> A young couple can afford a 20% down
            payment on a ₹60 Lakhs UC property but not on a ₹75 Lakhs RTM home.
            The UC property’s construction-linked plan reduces upfront cash
            pressure.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            <strong>Analysis:</strong> The calculator highlights the cash-flow
            advantage. Payments are staggered during construction, and the
            combined rent plus pre-EMI may remain lower than a full RTM EMI—
            making UC the only viable path to ownership.
          </p>
        </div>

        {/* Example 4 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Example 4: Delay-Risk Sensitive Buyer
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Scenario:</strong> A buyer considers a UC property from a
            builder with a mixed delivery record. Promised possession is 2
            years; the buyer wants to evaluate a potential 1-year delay.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            <strong>Analysis:</strong> Running scenarios at 24 and 36 months
            quantifies the delay risk—an extra year of rent and pre-EMI
            interest. This makes the cost of delay explicit and helps assess
            whether the UC discount compensates for the risk.
          </p>
        </div>

        {/* Example 5 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-800">
          <h4 className="font-semibold text-black mb-2">
            Example 5: Family Seeking Immediate Stability
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Scenario:</strong> A family with school-going children must
            choose between a UC property (4-year possession) and an RTM home to
            avoid rental uncertainty.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            <strong>Analysis:</strong> The comparison surfaces non-financial
            benefits of RTM—immediate stability, no interim moves, and community
            settling—against the quantified financial premium, enabling a
            values-based decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExampleScenarios;
