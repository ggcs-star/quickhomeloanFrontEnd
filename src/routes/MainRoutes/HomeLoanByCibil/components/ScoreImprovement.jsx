import React from "react";

const ScoreImprovement = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-md border border-neutral-300 p-8 mb-8 text-neutral-900">
      {/* Title */}
      <h2 className="text-3xl font-bold text-neutral-900 mb-6">{data.title}</h2>

      {/* Description */}
      <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
        {data.description}
      </p>

      {/* Actionable Tips Section */}
      <div className="bg-white p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-900">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
          Actionable Tips:
        </h3>

        <div className="space-y-3">
          {data.tips.map((tip, index) => (
            <div key={index} className="flex items-start">
              <span className="text-neutral-900 mr-3 mt-1">✓</span>
              <p className="text-neutral-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-6 bg-white p-4 rounded-lg border border-neutral-300">
        <p className="text-neutral-800 text-sm leading-relaxed">
          <strong>Note:</strong> Improving your score from 700 to 750+ can
          reduce your interest rate by 0.25–0.50% and save you lakhs over the
          loan tenure.
        </p>
      </div>
    </div>
  );
};

export default ScoreImprovement;
