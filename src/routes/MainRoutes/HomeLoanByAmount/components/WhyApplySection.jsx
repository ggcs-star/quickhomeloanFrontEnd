import React from "react";
import { Container } from "../../../../components/Layout";

const WhyApplySection = ({ whyApplyData }) => {
  if (!whyApplyData) return null;

  return (
    <Container>
      <section className="mx-auto rounded-2xl my-10">
        {/* Title */}
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center">
          {whyApplyData.title}
        </h2> */}

        {/* Why Choose List */}
        {whyApplyData.whyChoose && whyApplyData.whyChoose.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">✅ Why Choose SBI Home Loan?</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {whyApplyData.whyChoose.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How to Apply List */}
        {whyApplyData.howToApply && whyApplyData.howToApply.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">🛠️ How to Apply</h3>
            <ul className="list-decimal list-inside text-gray-600 text-sm">
              {whyApplyData.howToApply.map((step, index) => (
                <li key={index} className="mb-1">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </Container>
  );
};

export default WhyApplySection;
