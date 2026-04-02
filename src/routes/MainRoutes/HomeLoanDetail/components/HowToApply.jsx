import React from "react";
import { ClipboardList, UserCheck, Banknote } from "lucide-react";

const HowToApply = ({ data }) => {
  if (!data) return null;

  // ✅ Icon mapping
  const iconMap = {
    ClipboardList: <ClipboardList className="w-8 h-8 text-black" />,
    UserCheck: <UserCheck className="w-8 h-8 text-black" />,
    Banknote: <Banknote className="w-8 h-8 text-black" />,
  };

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
          {data.title}
        </h2>
      </div>

      {/* Steps */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {data.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100 text-black p-4 rounded-full mb-4">
                {iconMap[step.icon]}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
