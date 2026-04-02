import React from "react";
import { Award, Handshake, Zap, Globe } from "lucide-react";

const iconMap = {
  award: Award,
  handshake: Handshake,
  zap: Zap,
  globe: Globe,
};

const DoctorWhyChooseSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {data.title || "Why Choose QuickHomeLoan?"}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.reasons?.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-neutral-300"
              >
                <Icon className="w-10 h-10 mx-auto text-gray-900 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorWhyChooseSection;
