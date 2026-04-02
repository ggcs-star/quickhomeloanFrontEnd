import React from "react";

const TaxBenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="tax-benefits" className="">
      <div className="max-w-4xl mx-auto">

        {/* Outer Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              {data.title}
            </h2>
          </div>

          {/* Description */}
          <div className="p-6 space-y-4 text-neutral-700 leading-relaxed">
            <p>
              {data.description.before}{" "}
              <strong className="text-neutral-900">{data.description.highlight}</strong>{" "}
              {data.description.after}
            </p>

            {/* Inner Card */}
            <div className="bg-neutral-50 border border-neutral-300 rounded-md p-5">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {data.card.title}
              </h3>
              <p className="text-neutral-600">{data.card.text}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TaxBenefitsSection;
