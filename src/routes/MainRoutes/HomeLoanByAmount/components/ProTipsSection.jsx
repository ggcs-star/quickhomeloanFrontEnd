import React from "react";
import { Container } from "../../../../components/Layout";

const ProTipsSection = ({ data }) => {
  return (
    <Container>
      <div className="py-12 text-neutral-900">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          {data.title}
        </h2>

        {/* Reduce EMI Tips */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-neutral-900">
            How to Reduce Your EMI
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.reduceEmiTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-800"
              >
                <h4 className="text-lg font-semibold mb-3 text-neutral-900">
                  {tip.tip}
                </h4>
                <p className="text-neutral-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Analysis */}
        <div className="bg-neutral-100 p-6 rounded-md border border-neutral-300 border-l-4 border-l-neutral-800">
          <h3 className="text-xl font-semibold mb-4 text-neutral-900">
            Understanding the Full Cost
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                {data.costAnalysis.example}
              </div>
              <div className="text-sm text-neutral-600">Example Scenario</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                {data.costAnalysis.interestPaid}
              </div>
              <div className="text-sm text-neutral-600">Interest Paid</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">
                {data.costAnalysis.totalRepayment}
              </div>
              <div className="text-sm text-neutral-600">Total Repayment</div>
            </div>
          </div>

          <p className="mt-4 text-neutral-800 font-semibold">
            {data.costAnalysis.note}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProTipsSection;
