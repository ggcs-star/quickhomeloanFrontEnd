import React from "react";

export default function WhenToUseCalculator() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>
            Before signing a <strong>sale agreement</strong> to estimate the
            total upfront payment required.
          </li>

          <li>
            While <strong>budgeting for down-payment and closing costs</strong>.
          </li>

          <li>
            When <strong>comparing property costs</strong> across states or buyer
            categories (for example, female buyer concessions).
          </li>

          <li>
            To decide between a <strong>joint vs individual purchase</strong> and
            understand how costs are split.
          </li>

          <li>
            During <strong>home loan or mortgage pre-approval planning</strong>,
            ensuring these charges are included in total closing costs.
          </li>

          <li>
            For <strong>real estate listings or negotiations</strong> to present
            the true net cost payable by the buyer.
          </li>
        </ul>
      </div>
    </section>
  );
}
