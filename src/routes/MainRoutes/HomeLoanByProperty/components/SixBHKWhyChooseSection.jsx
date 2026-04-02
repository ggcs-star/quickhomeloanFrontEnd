import React from "react";
import { CheckCircle } from "lucide-react";
import { Container } from "../../../../components/Layout";

const SixBHKWhyChooseSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="">
      <Container className="max-w-6xl mx-auto grid lg:grid-cols-1 gap-10">

        {/* ======================== */}
        {/* 💼 WHY CHOOSE US (Card) */}
        {/* ======================== */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.whyChoose.title}
            </h2>
            <p className="text-neutral-600 text-sm mt-1">
              {data.whyChoose.subtitle}
            </p>
          </div>

          {/* Points */}
          <div className="p-6 space-y-4">
            {data.whyChoose.points.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-start border-b border-neutral-200 pb-4 last:pb-0 last:border-none"
              >
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <p className="text-neutral-700 leading-relaxed text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* 🏠 5-STEP PATH (Card) */}
        {/* ===================== */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.steps.title}
            </h2>
            <p className="text-neutral-600 text-sm mt-1">
              {data.steps.subtitle}
            </p>
          </div>

          {/* Step List */}
          <div className="p-6">
            <ol className="space-y-8 relative">

              {data.steps.list.map((step, index) => (
                <li key={index} className="relative pl-14">

                  {/* Numbered Circle */}
                  <span className="absolute top-0 left-0 w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center font-bold text-neutral-800">
                    {index + 1}
                  </span>

                  {/* Step Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting Line */}
                  {index !== data.steps.list.length - 1 && (
                    <span className="absolute left-5 top-10 w-px h-full bg-neutral-300"></span>
                  )}
                </li>
              ))}

            </ol>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default SixBHKWhyChooseSection;
