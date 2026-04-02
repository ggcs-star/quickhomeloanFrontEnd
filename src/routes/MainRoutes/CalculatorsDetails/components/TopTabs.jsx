import React, { useState } from "react";

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("compare");

  const tabs = [
    { id: "calculator", label: "🧮 Calculator" },
    { id: "compare", label: "🏦 Compare Banks" },
  ];

  return (
    <div className="flex justify-center mb-8 relative">
      <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
            }`}
          >
            {tab.label}
            {tab.badge !== undefined && (
              <span className="text-xs bg-white text-gray-800 font-semibold px-2 py-0.5 rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopTabs;
