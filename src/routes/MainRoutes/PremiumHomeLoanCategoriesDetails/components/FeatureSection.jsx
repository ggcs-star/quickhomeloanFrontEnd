import React from "react";

const FeatureSection = ({ features }) => {
  return (
    <section className="grid md:grid-cols-3 gap-6 mb-8">
      {features.map((feature, index) => (
        <article
          key={index}
          className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
        </article>
      ))}
    </section>
  );
};

export default FeatureSection;
