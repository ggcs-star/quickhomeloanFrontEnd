import React from "react";
import {
  MousePointerClick,
  Search,
  Upload,
  Zap,
  Banknote,
  Key,
} from "lucide-react";

const iconMap = {
  click: MousePointerClick,
  search: Search,
  upload: Upload,
  zap: Zap,
  banknote: Banknote,
  key: Key,
};

const DoctorApplicationProcessSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {data.title || "Step-by-Step Application Process"}
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            {data.subtitle || "A seamless 100% digital journey."}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {data.steps?.map((step, index) => {
            const Icon = iconMap[step.icon] || MousePointerClick;
            return (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-md border border-neutral-300 text-center"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorApplicationProcessSection;
