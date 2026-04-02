import React, { useState } from "react";

const DoctorEligibilitytwoSection = ({ data }) => {
  if (!data) return null;

  const [activeTab, setActiveTab] = useState("criteria");

  const renderTabContent = () => {
    if (activeTab === "criteria") {
      return (
        <dl className="divide-y divide-neutral-300">
          {data.criteria?.map((item, index) => (
            <div key={index} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
              <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      );
    }

    if (activeTab === "documents") {
      return (
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {data.documents?.map((doc, index) => (
            <li key={index} className="font-medium">
              {doc}
            </li>
          ))}
        </ul>
      );
    }

    if (activeTab === "tips") {
      return (
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {data.tips?.map((tip, index) => (
            <li key={index} className="italic text-gray-600">
              {tip}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <section id="eligibility" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {data.title || "Eligibility & Documentation"}
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-neutral-300 bg-gray-200">
            {["criteria", "documents", "tips"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "text-gray-900 bg-white border-t-4 border-black"
                    : "text-black "
                }`}
              >
                {tab === "criteria"
                  ? "Criteria"
                  : tab === "documents"
                  ? "Documents"
                  : "Smart Tips"}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 min-h-[350px] transition-all duration-300">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorEligibilitytwoSection;
