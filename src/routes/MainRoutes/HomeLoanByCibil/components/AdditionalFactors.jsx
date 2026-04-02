import React from "react";

const AdditionalFactors = ({ data }) => {
  return (
    <div className="bg-white rounded-md border border-neutral-300 p-8 mb-8 text-neutral-900">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">{data.title}</h2>

      {/* Factor Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.factors.map((factor, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-md border border-neutral-300"
          >
            {/* Number Icon */}
            <div className="w-10 h-10 bg-neutral-900 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
              {index + 1}
            </div>

            {/* Factor Info */}
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              {factor.factor}
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {factor.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalFactors;
