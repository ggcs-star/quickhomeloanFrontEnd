import React from "react";

const ApplicationSteps = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-md border border-neutral-300 p-8 mb-8 text-neutral-900">
      {/* Title */}
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">{data.title}</h2>

      {/* Steps */}
      <div className="space-y-6">
        {data.steps.map((step) => (
          <div
            key={step.step}
            className="flex gap-6 p-6 bg-white rounded-md border border-neutral-300 border-l-4 border-l-neutral-900"
          >
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
            </div>

            {/* Step Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{step.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSteps;
