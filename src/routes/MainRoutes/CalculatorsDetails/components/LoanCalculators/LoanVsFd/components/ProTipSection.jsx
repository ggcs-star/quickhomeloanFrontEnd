import React from "react";

export default function ProTipSection() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Pro Tip
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Try different scenarios by adjusting the interest rates and tenure to see
        how sensitive the results are to these changes.
      </p>
    </section>
  );
}
