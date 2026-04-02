import React from "react";

const ApplyNowSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="apply-now" className="">
      <div className="max-w-4xl mx-auto">

        {/* Outer Card */}
        <div className="bg-white border border-neutral-300 rounded-md p-8 md:p-12">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-6">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-neutral-600 text-lg text-center max-w-2xl mx-auto mb-10">
            {data.description}
          </p>

          {/* Steps */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-neutral-50 border border-neutral-300 rounded-md"
              >
                <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <span className="text-neutral-800 text-sm font-medium leading-relaxed">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={data.ctaLink || "#"}
              className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-800 transition cursor-pointer"
            >
              {data.buttonLabel} →
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-neutral-500 text-sm text-center mt-6">
            {data.footerNote}
          </p>

        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
