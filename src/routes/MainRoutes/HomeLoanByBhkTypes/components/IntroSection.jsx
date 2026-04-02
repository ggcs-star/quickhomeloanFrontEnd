import React from "react";
import { Container } from "../../../../components/Layout";

const IntroSection = ({ data }) => {
  if (!data) return null;

  return (
    <Container className="">
      <div className="container mx-auto">
        
        {/* 🏡 Section Header */}
        <div className="mt-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* 📘 Content Box */}
        <div className="bg-white border border-neutral-300 p-3 lg:p-8 rounded-md">
          
          {/* Paragraph 1 */}
          <p className="text-base md:text-lg text-black font-medium leading-relaxed mb-4">
            A <strong className="text-neutral-900">{data.highlightedTerm}</strong> (or{" "}
            {data.altTerm}) is a specific financial product offered by banks and NBFCs 
            designed to help you purchase a piece of residential land for future construction.
            Unlike a standard home loan used for ready-to-move properties, a plot loan is 
            exclusively for acquiring the land itself.
          </p>

          {/* Paragraph 2 */}
          <p className="text-base md:text-lg text-black font-medium leading-relaxed mb-4">
            {data.details}
          </p>

          {/* Highlighted Note */}
          <div className="mt-6 p-4 border border-neutral-300 bg-neutral-50 rounded-md">
            <p className="text-black font-medium">{data.note}</p>
          </div>

        </div>

      </div>
    </Container>
  );
};

export default IntroSection;
