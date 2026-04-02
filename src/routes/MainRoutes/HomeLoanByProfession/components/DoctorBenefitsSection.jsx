import React from "react";

const DoctorBenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Subheading */}
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">
            {data.subtitle}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-500">
            {data.subtext}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-md border border-neutral-300"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-black">
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      {benefit.icon.paths?.map((d, i) => (
                        <path key={i} d={d}></path>
                      ))}
                      {benefit.icon.lines?.map((line, i) => (
                        <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}></line>
                      ))}
                      {benefit.icon.circles?.map((c, i) => (
                        <circle key={i} cx={c.cx} cy={c.cy} r={c.r}></circle>
                      ))}
                      {benefit.icon.polylines?.map((p, i) => (
                        <polyline key={i} points={p.points}></polyline>
                      ))}
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                    {benefit.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default DoctorBenefitsSection;
