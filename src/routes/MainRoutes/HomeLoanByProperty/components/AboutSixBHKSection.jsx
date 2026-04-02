import React from "react";
import { Container } from "../../../../components/Layout";

const AboutSixBHKSection = ({ data }) => {
  if (!data) return null;

  return (
    <Container className="">
      <div className="container mx-auto">
        {/* 🏡 Section Header */}
        <div className="mt-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* 📘 Content Box */}
        <div className="bg-white border border-neutral-300 p-3 lg:p-8 rounded-md">
          {data.paragraphs.map((para, index) => (
            <p
              key={index}
              className={`text-base md:text-lg leading-relaxed mb-4 ${
                para.highlight
                  ? "text-black font-medium"
                  : "text-black font-medium"
              }`}
            >
              {para.text}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutSixBHKSection;
