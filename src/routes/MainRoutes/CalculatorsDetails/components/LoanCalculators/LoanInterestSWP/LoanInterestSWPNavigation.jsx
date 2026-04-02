import React, { useState } from "react";
import CompareBanks from "../../CompareBanks";
import LoanInterestSWP from "./LoanInterestSWP";

function LoanInterestSWPNavigation() {
  const [selectedTab, setSelectedTab] = useState("calculator");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("calculator")}
          className={`p-2 ${selectedTab === "calculator" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Calculator
        </button>
        <button
          onClick={() => handleTabChange("compare-banks")}
          className={`p-2 ${selectedTab === "compare-banks" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Compare Banks
        </button>
      </div>

      {/* Conditional Rendering Based on Selected Tab */}
      <div className="flex">
        {selectedTab === "calculator" ? (
          <LoanInterestSWP />
        ) : (
          <CompareBanks /> // You can replace this with any other component you want to show
        )}
      </div>
    </div>
  );
}

export default LoanInterestSWPNavigation;
