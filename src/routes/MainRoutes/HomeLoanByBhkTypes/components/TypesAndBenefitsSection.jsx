import React from "react";
import { Building2, CheckCircle } from "lucide-react";

const TypesAndBenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">

        {/* LEFT — TYPES CARD */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300 flex items-center">
            <Building2 className="w-6 h-6 text-neutral-700 mr-3" />
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.types.title}
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {data.types.items.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-black flex items-center mb-1">
                  <span className="w-2 h-2 rounded-full bg-black mr-3"></span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — BENEFITS CARD */}
      <div className="bg-white rounded-md border border-neutral-300 text-black overflow-hidden">

  {/* Header */}
  <div className="p-6 border-b border-gray-300 flex items-center">
    <CheckCircle className="w-6 h-6 text-gray-700 mr-3" />
    <h2 className="text-xl md:text-2xl font-bold text-black">
      {data.benefits.title}
    </h2>
  </div>

  {/* Body */}
  <div className="p-6 space-y-8">
    {data.benefits.items.map((item, index) => (
      <div key={index} className="flex items-start">
        <CheckCircle className="w-5 h-5 text-black mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-black text-lg mb-1">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    ))}

    {/* CTA */}
    <div className="pt-6 border-t border-gray-300">
      <a
        href={data.benefits.cta.link}
        className="block w-full text-center bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-neutral-800 transition"
      >
        {data.benefits.cta.label} →
      </a>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default TypesAndBenefitsSection;
