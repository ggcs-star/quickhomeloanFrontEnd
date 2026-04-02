import React from "react";
import { Container } from "../../../../components/Layout";

const SixBHKEligibilitySection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="eligibility" className="">
      <Container className="max-w-5xl mx-auto space-y-8">

        {/* ========================= */}
        {/* ✅ Eligibility Criteria */}
        {/* ========================= */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.eligibility.title}
            </h2>
          </div>

          {/* Content */}
          <div className="p-0">
            {data.eligibility.categories.map((category, index) => (
              <div
                key={index}
                className="border-b border-neutral-200 p-6 last:border-b-0"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                  {category.title}
                </h3>

                <ul className="space-y-2 text-neutral-700 pl-5 list-disc">
                  {category.points.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            ))}

            {/* Pro Tip */}
            {data.eligibility.proTip && (
              <div className="p-6 bg-neutral-100 border-t border-neutral-300">
                <p className="text-neutral-800">
                  <span className="font-bold">Pro Tip:</span>{" "}
                  {data.eligibility.proTip}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ========================= */}
        {/* 📄 Documents Required */}
        {/* ========================= */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.documents.title}
            </h2>
          </div>

          {/* Documents List */}
          <div className="p-0">
            {data.documents.sections.map((section, index) => (
              <div
                key={index}
                className="border-b border-neutral-200 p-6 last:border-b-0"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                  {section.title}
                </h3>

                <ul className="space-y-1 text-neutral-700 pl-5 list-disc">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default SixBHKEligibilitySection;
