import React from "react";
import { Container } from "../../../../components/Layout";

const ActionPlan = ({ data }) => {
  return (
    <Container>
      <div className="py-12 bg-[#f9f9f9] text-neutral-900">
        {/* Main Section */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{data.title}</h2>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="bg-white text-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-700"
              >
                <div className="text-2xl font-bold mb-2">{index + 1}</div>
                <div className="font-semibold">{step}</div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-white rounded-lg p-6 text-neutral-900 border border-neutral-200 shadow-sm">
            <p className="text-lg font-semibold">{data.conclusion}</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer bg-white text-neutral-900 px-8 py-3 rounded-lg font-semibold border border-neutral-800 hover:bg-neutral-100 transition-colors">
              Check Eligibility & Get Instant Approval
            </button>
            <button className="cursor-pointer bg-neutral-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-700 transition-colors">
              Download Document Checklist
            </button>
            <button className="cursor-pointer bg-neutral-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-600 transition-colors">
              Compare Bank Offers
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ActionPlan;
