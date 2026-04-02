import React from "react";

const ProTips = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tips
      </h2>

      {/* Tips */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Choose an EMI that reduces tenure without hurting your budget.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Increasing EMI by even a small amount can reduce tenure by months
              or years.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Prepay small amounts yearly to cut years from your loan.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              Keep monitoring your floating rate — a higher rate means a longer
              tenure.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2 mt-1 font-bold text-gray-700">✓</span>
            <span>
              A balance transfer to a lower interest rate can drop tenure
              drastically.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProTips;
