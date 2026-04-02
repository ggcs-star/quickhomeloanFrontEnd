import React from "react";

const ProTipsAndRecommendations = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Always verify the builder’s track record for on-time delivery and
              quality through online forums, reviews, and by visiting their
              previous projects.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              When calculating costs for a UC property, factor in a worst-case
              delay of at least <strong>12–24 months</strong> to create a
              financial buffer.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Compare all hidden charges, such as preferential location charges
              (PLC), floor rise, parking, and club membership fees, as these can
              add <strong>10–15%</strong> to the base price.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Use conservative appreciation estimates. While markets can boom,
              it's safer to plan your finances based on a modest{" "}
              <strong>3–5% annual appreciation</strong>.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Check the project's <strong>RERA</strong> (Real Estate Regulatory
              Authority) registration number and details on the state's RERA
              website. This provides a layer of legal protection.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Prefer <strong>RTM</strong> for immediate housing needs or if you
              have low-risk tolerance. The peace of mind and certainty can be
              worth the higher upfront cost.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Prefer <strong>UC</strong> for long-term investment goals if you
              have a stable income, an existing place to live, and can absorb
              the risks of delays.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Make your decision based on your personal cash flow stability, not
              just the potential for future gains. Ensure you can comfortably
              manage <strong>rent + Pre-EMI</strong>.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Thoroughly investigate the resale potential of the location,
              considering factors like connectivity, social infrastructure
              (schools, hospitals), and future development plans.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 text-green-600 font-bold">✓</span>
            <span>
              Negotiate hard on the final price. For <strong>RTM</strong>, you
              might get discounts on the listed price. For <strong>UC</strong>,
              you can often negotiate on extra charges like PLC or club fees.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProTipsAndRecommendations;
