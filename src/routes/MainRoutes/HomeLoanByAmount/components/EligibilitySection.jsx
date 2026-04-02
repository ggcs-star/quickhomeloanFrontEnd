import React from "react";
import { Container } from "../../../../components/Layout";

const EligibilitySection = ({ data }) => {
  return (
    <Container>
      <div className="py-12 text-neutral-900">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          {data.title}
        </h2>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {data.pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-neutral-800 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-neutral-700 mb-3">{pillar.description}</p>

              <span
                className={`inline-block px-2 py-1 text-xs rounded border ${pillar.importance === "High"
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-neutral-200 text-neutral-800 border-neutral-300"
                  }`}
              >
                {pillar.importance} Importance
              </span>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Salaried */}
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              For Salaried Individuals
            </h3>
            <ul className="space-y-2">
              {data.comparison.salaried.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <span className="text-neutral-800 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Self-Employed */}
          <div className="bg-white p-6 rounded-md border border-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              For Self-Employed
            </h3>
            <ul className="space-y-2">
              {data.comparison.selfEmployed.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <span className="text-neutral-800 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EligibilitySection;
