import React from "react";

const UnderstandingResults = () => {
  return (
    <section className="">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Understanding the Results
        </h2>

        {/* DECISION INTERPRETATION */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              How to Interpret the Decision
            </h3>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">
                When Under Construction is Better:
              </strong>{" "}
              Under Construction is the better financial choice if its Total Cost
              of Ownership is lower. This usually happens when the price discount
              is large enough to offset rent and pre-EMI interest.
            </p>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">
                When Ready-To-Move is Better:
              </strong>{" "}
              Ready-To-Move becomes preferable when its Total Cost of Ownership
              is lower—often due to long construction timelines or high rental
              costs. RTM also eliminates construction delay risk.
            </p>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">
                What High-Risk Results Mean:
              </strong>{" "}
              If both options have nearly identical costs, UC carries higher
              risk. Any construction delay would increase rent and interest,
              making RTM the safer choice.
            </p>
          </div>
        </div>

        {/* METRICS EXPLANATION */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Total Cost of Ownership
            </h4>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">Simple Terms:</strong> The total
              amount of money you will have spent by the end of your loan,
              including the property price, all interest, and any rent paid.
            </p>

            <p className="text-gray-500 mt-1 text-sm">
              <strong className="text-gray-700">Technical Terms:</strong> For
              RTM: Base Price + Total Interest Paid over loan tenure. For UC:
              Base Price + Total Rent Paid + Accrued Interest during Construction
              + Post-Construction EMI Interest.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Accrued Interest during Construction
            </h4>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">Simple Terms:</strong> This is the
              "pre-EMI" interest. It's the interest you pay on the parts of the
              loan the bank gives to the builder before you get the house.
            </p>

            <p className="text-gray-500 mt-1 text-sm">
              <strong className="text-gray-700">Technical Terms:</strong> The
              cumulative interest calculated monthly on the progressively
              disbursed loan amount throughout the construction period, based on
              the specified disbursement schedule.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Rent Paid during Construction
            </h4>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">Simple Terms:</strong> The total
              rent you pay while waiting for your under-construction home. The
              calculation includes yearly rent increases.
            </p>

            <p className="text-gray-500 mt-1 text-sm">
              <strong className="text-gray-700">Technical Terms:</strong> The sum
              of monthly rent payments over the construction timeline,
              compounded annually at the specified rent increase rate.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Total Interest Paid
            </h4>

            <p className="text-gray-600 mt-2">
              <strong className="text-gray-800">Simple Terms:</strong> The total
              profit the bank makes from your loan over its entire lifetime.
            </p>

            <p className="text-gray-500 mt-1 text-sm">
              <strong className="text-gray-700">Technical Terms:</strong> The sum
              of all interest components paid over the loan tenure. For UC, this
              includes both pre-construction and post-construction interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingResults;
