import React from "react";

const FDBreakVsLoanProTips = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Never break your FD if loan rate &lt; FD return.</strong>{" "}
              You earn more from the FD than what you pay as loan interest.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Always keep an emergency fund.</strong> If this FD is your
              only safety buffer, do NOT break it even if the numbers favor it.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>For short-term loans (1–3 years).</strong> Taking a loan
              often makes more sense because FD interest compounds better over
              time.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>FD break penalties matter.</strong> Some banks reduce the
              FD rate by 0.5%–1% if withdrawn early.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Consider tax on FD interest.</strong> If you’re in a high
              tax slab, your post-tax FD return may be lower.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Try multiple scenarios.</strong> This calculator is highly
              sensitive — slight changes in rate or tenure can flip the
              recommendation.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1">✓</span>
            <span>
              <strong>Use this before buying ANYTHING expensive.</strong> Cars,
              furniture, electronics, home renovation, medical expenses, or
              business equipment.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FDBreakVsLoanProTips;
