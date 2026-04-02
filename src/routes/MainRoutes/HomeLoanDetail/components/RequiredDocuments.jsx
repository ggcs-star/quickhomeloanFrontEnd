import React, { useState } from "react";
import { Briefcase, User, Globe, FileCheck2 } from "lucide-react";

const RequiredDocuments = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data?.tabs[0]?.key || "salaried");

  if (!data) return null;

  const iconMap = {
    Briefcase: <Briefcase className="w-4 h-4 mr-2" />,
    User: <User className="w-4 h-4 mr-2" />,
    Globe: <Globe className="w-4 h-4 mr-2" />,
  };

  const activeDocs = data.tabs.find((tab) => tab.key === activeTab)?.documents || [];

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
          {data.title}
        </h2>
      </div>

      {/* Tabs */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex border-b border-neutral-200">
            {data.tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-4 py-3 text-sm font-medium -mb-px border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-black text-black"
                    : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                }`}
              >
                {iconMap[tab.icon]}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Documents List */}
        <ul className="space-y-3">
          {activeDocs.map((doc, index) => (
            <li key={index} className="flex items-center text-sm">
              <FileCheck2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
              <span className="text-neutral-700">{doc}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs text-neutral-500">
          {data.note}
        </p>
      </div>
    </div>
  );
};

export default RequiredDocuments;
