import React from "react";

const WhenToUseCalculator = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>
            Relocating to a new city for a job and need to decide between renting
            first (UC) or buying immediately (RTM).
          </li>
          <li>
            Comparing the lower price of a UC property against the certainty and
            immediate availability of an RTM home.
          </li>
          <li>
            Working with a limited initial budget and exploring if a UC
            property&apos;s staggered payment plan is more affordable.
          </li>
          <li>
            Evaluating a builder&apos;s attractive construction-linked payment
            plan to see its true financial impact.
          </li>
          <li>
            When an RTM property in your desired location seems too expensive and
            you want to quantify the savings from a nearby UC project.
          </li>
          <li>
            Checking your overall affordability, factoring in your current rent
            payments while waiting for a UC property.
          </li>
          <li>
            Comparing real estate as an investment option and weighing the
            potential appreciation of UC vs. the immediate rental income of RTM.
          </li>
          <li>
            Planning for future resale and wanting to estimate which property
            type will yield a higher return in 5–10 years.
          </li>
          <li>
            Feeling uncertain about a builder&apos;s promised possession timeline
            and wanting to see the financial risk of potential delays.
          </li>
          <li>
            When rental prices in your new city are high, making the cost of
            waiting for a UC property a significant financial burden.
          </li>
          <li>
            Planning your finances and needing to understand the difference in
            tax benefits before and after property possession.
          </li>
          <li>
            Evaluating your personal risk tolerance for construction delays and
            wanting to attach a clear financial number to that risk.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToUseCalculator;
