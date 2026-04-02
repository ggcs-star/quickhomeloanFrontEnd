import React from "react";
import { Container } from "../../../../components/Layout";

const ConclusionSection = ({ conclusionData }) => {
  if (!conclusionData) return null;

  return (
    <Container>
      <section className="mx-auto rounded-2xl my-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center">
          📌 {conclusionData.title}
        </h2>

        {/* Content */}
        {conclusionData.content && (
          <p className="text-gray-600 text-sm md:text-base text-justify">
            {conclusionData.content}
          </p>
        )}
      </section>
    </Container>
  );
};

export default ConclusionSection;
