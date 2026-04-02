import React from "react";
import { Container } from "../../../../components/Layout";

const CibilAssessment = ({ data }) => {
  return (
    <Container className="lg:pt-40 pt-20">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 text-left">
        {data.title}
      </h2>

      {/* Verdict Card */}
      <div className="bg-white border border-neutral-300 border-l-4 border-l-neutral-900 p-4 md:p-6 mb-6 rounded-md">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mr-4">
            ✓
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
            {data.verdict}
          </h3>
        </div>

        {/* Reasons List */}
        <div className="space-y-3 mb-4">
          {data.reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <span className="text-neutral-800 mr-3 mt-1">•</span>
              <p className="text-neutral-700 text-base md:text-lg">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="bg-neutral-100 p-4 rounded-lg border border-neutral-300 border-l-4 border-l-neutral-900 mb-6">
          <p className="text-neutral-800 font-semibold text-base md:text-lg">
            <span className="font-bold">Key Insight:</span> {data.keyInsight}
          </p>
        </div>

        {/* BUTTONS */}
        {data.buttons && (
          <div className="flex flex-wrap gap-4 mt-4">
            {data.buttons.map((btn, index) => (
              <a key={index} href={btn.href}>
                <button
                  className={`
                    px-6 py-3 rounded-md font-semibold transition
                    ${btn.variant === "primary"
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "bg-white text-black border border-neutral-300 hover:bg-black hover:text-white"
                    }
                  `}
                >
                  {btn.label}
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CibilAssessment;
