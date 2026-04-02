import React from "react";
import * as LucideIcons from "lucide-react";
import { Container } from "../../../../components/Layout";

const SixBHKLoanTipsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="">
      <Container className="max-w-6xl mx-auto">

        {/* Outer Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300 text-start">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-neutral-600 text-sm mt-1">{data.subtitle}</p>
            )}
          </div>

          {/* Tips Grid */}
          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.tips.map((tip, index) => {
              const Icon = LucideIcons[tip.icon] || LucideIcons.Lightbulb;

              return (
                <div
                  key={index}
                  className="border border-neutral-300 rounded-md p-6 bg-white text-center"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-4 bg-white">
                    <Icon className="w-7 h-7 text-neutral-800" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
                    {tip.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default SixBHKLoanTipsSection;
