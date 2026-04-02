import React from "react";

const CalculatorCaseStudySection = ({ calculators, caseStudy }) => {
  return (
    <section id="calculators" className="grid lg:grid-cols-3 gap-6 mb-8">
      {/* ===== Left: Calculators Info ===== */}
      <div className="col-span-2 bg-gradient-to-r from-white to-indigo-50 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          {calculators.title || "Plan Smart with QuickHomeLoan Calculators"}
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {calculators.description ||
            "Estimate EMI, check eligibility and compare balance transfer savings before applying."}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {calculators.buttons.map((btn, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded transition ${
                btn.variant === "primary"
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : btn.variant === "outline"
                  ? "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  : "bg-white shadow hover:shadow-md text-gray-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Right: Case Study ===== */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="font-semibold text-gray-900">
          {caseStudy.title || "Example Case Study"}
        </h4>

        <div className="mt-3 text-sm text-gray-700">
          <p>
            <strong>{caseStudy.name}</strong>, {caseStudy.age}, {caseStudy.profession} | Salary: ₹
            {caseStudy.salary.toLocaleString("en-IN")}
          </p>
          <p className="mt-2">
            Loan ₹{caseStudy.loanAmount.toLocaleString("en-IN")} · Tenure{" "}
            {caseStudy.tenure} years · Interest {caseStudy.interestRate}% · EMI ₹
            {caseStudy.emi.toLocaleString("en-IN")}
          </p>
          <p className="mt-2 text-green-700 font-medium">
            Saved ₹{caseStudy.savings.toLocaleString("en-IN")} through comparison & negotiation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCaseStudySection;
