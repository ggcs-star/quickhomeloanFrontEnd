import React from "react";
import LoanEligibilityInfoSections from "./LoanEligibilityInfoSections";
import LoanEligibilityCalculator from "./LoanEligibilityCalculator";
import WhatThisCalculatorDoes from "./WhatThisCalculatorDoes";
import WhenToUseCalculator from "./WhenToUseCalculator";
import HowToUseCalculator from "./HowToUseCalculator";
import KeyEligibilityFactors from "./KeyEligibilityFactors";
import ExampleEligibilityScenarios from "./ExampleEligibilityScenarios";
import UnderstandingResults from "./UnderstandingResults";
import HowThisCalculatorWorks from "./HowThisCalculatorWorks";
import PracticalApplications from "./PracticalApplications";

const LoanEligibilityLeft = () => {
  return (
    <div className="lg:col-span-2">
      <LoanEligibilityCalculator />
      <WhatThisCalculatorDoes />
      <WhenToUseCalculator />
      <HowToUseCalculator />
      <KeyEligibilityFactors/>
      <ExampleEligibilityScenarios/>
      <UnderstandingResults/>
      <HowThisCalculatorWorks/>
      <PracticalApplications/>
    </div>
  );
};

export default LoanEligibilityLeft;

/* ================= REUSABLE COMPONENTS ================= */

const Input = ({ id, label, prefix, placeholder, defaultValue }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1 relative">
      <span className="absolute left-3 top-2.5 text-gray-500 text-sm">
        {prefix}
      </span>
      <input
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="block w-full rounded-md border-gray-300 bg-slate-50 pl-7 pr-2 py-2 focus:ring-2 focus:ring-primary-300"
      />
    </div>
  </div>
);

const Select = ({ id, label, options }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={id}
      className="mt-1 w-full rounded-md border-gray-300 bg-slate-50 py-2 px-3 focus:ring-2 focus:ring-primary-300"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

const Radio = ({ id, name, label, defaultChecked }) => (
  <label className="flex items-center text-sm font-medium text-gray-700">
    <input
      type="radio"
      id={id}
      name={name}
      defaultChecked={defaultChecked}
      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
    />
    <span className="ml-2">{label}</span>
  </label>
);

const Divider = () => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-200" />
    </div>
  </div>
);

const InfoSection = ({ title, children }) => (
  <section className="bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold border-b-2 border-primary-500 pb-2 mb-4">
      {title}
    </h2>
    <div className="text-gray-700">{children}</div>
  </section>
);
