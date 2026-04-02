// components/InstructionsSection.js
import React from 'react';

const InstructionsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Your Loan Details",
      content: "Fill in the required fields with your loan information:",
      example: {
        loanAmount: "₹100,000",
        emiAmount: "₹2,000 per month",
        loanTerm: "60 months (5 years)"
      }
    },
    {
      number: 2,
      title: "Click Calculate",
      content:
        "The calculator automatically computes the interest rate whenever you change any value. It uses a standard reverse-EMI formula to derive the annual interest rate."
    },
    {
      number: 3,
      title: "Review Your Results",
      content:
        "Your effective annual interest rate appears in the result box. This reflects the real cost of your loan based on EMI, principal, and loan tenure."
    },
    {
      number: 4,
      title: "Try Different Scenarios",
      content:
        "Adjust loan amount, EMI, or tenure to see how your interest rate changes. A higher EMI reduces the rate, while a longer tenure increases the rate."
    }
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">

      {/* HEADER — BLACK & WHITE */}
      <div className="bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-semibold tracking-wide">
          How to Use This Calculator
        </h2>
      </div>

      <div className="p-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`mb-8 pb-6 ${
              index < steps.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Step Heading */}
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>

            {/* Step Content */}
            <div className="ml-12">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {step.content}
              </p>

              {/* Example Box */}
              {step.example && (
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                  <div className="font-semibold text-gray-800 mb-2">
                    Example:
                  </div>

                  <div className="text-sm text-gray-700 space-y-1">
                    <p>
                      <strong>Loan Amount:</strong> {step.example.loanAmount}
                    </p>
                    <p>
                      <strong>EMI Amount:</strong> {step.example.emiAmount}
                    </p>
                    <p>
                      <strong>Loan Term:</strong> {step.example.loanTerm}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default InstructionsSection;
