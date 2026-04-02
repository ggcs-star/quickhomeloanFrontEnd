import React from "react";
import {
  ShieldCheck,
  Percent,
  Users,
} from "lucide-react"; // using lucide-react icons (same as in HTML)

const DoctorTaxBenefitsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="tax-benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          {data.title || "Tax Benefits for Doctors"}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards?.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-neutral-300"
            >
              <div className="flex justify-center mb-4 text-gray-900">
                {card.icon === "shield" && (
                  <ShieldCheck className="h-10 w-10 text-gray-900" />
                )}
                {card.icon === "percent" && (
                  <Percent className="h-10 w-10 text-gray-900" />
                )}
                {card.icon === "users" && (
                  <Users className="h-10 w-10 text-gray-900" />
                )}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorTaxBenefitsSection;
