import React from "react";

const APPLICATIONS = [
  "First-Time Homebuyers can navigate their biggest financial decision with data, not just emotion.",
  "NRI Property Investors can remotely assess the financial viability of projects without being physically present.",
  "People shifting due to job relocation can make a quick, informed decision about their housing strategy in a new city.",
  "Buyers unsure about a builder's credibility can quantify the financial risk of potential delays.",
  "Real estate agents can generate professional, data-backed comparison reports for their clients.",
  "Banks and loan officers can help customers evaluate property choices holistically, beyond simple EMI calculations.",
  "Investors can use the tool to balance their real estate portfolio between high-growth UC assets and stable RTM assets.",
  "Buyers can objectively decide between two projects (one UC, one RTM) in the same micro-market.",
];

const PracticalApplications = () => {
  return (
    <section className="">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Practical Applications
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-600">
          {APPLICATIONS.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PracticalApplications;
