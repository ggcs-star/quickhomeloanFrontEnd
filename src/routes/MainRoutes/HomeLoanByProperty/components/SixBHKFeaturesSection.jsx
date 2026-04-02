import React from "react";
import * as Icons from "lucide-react";
import { Container } from "../../../../components/Layout";

const SixBHKFeaturesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="features" className="">
      <Container className="max-w-6xl mx-auto">

        {/* Outer Card Wrapper */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-neutral-600 text-sm mt-1">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Features Grid */}
          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, index) => {
              const IconComponent = Icons[feature.icon] || Icons.Star;

              return (
                <div
                  key={index}
                  className="border border-neutral-300 rounded-md p-6 bg-white"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center mb-4 bg-white">
                    <IconComponent className="w-6 h-6 text-neutral-800" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-700 leading-relaxed">
                    {feature.description}
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

export default SixBHKFeaturesSection;
