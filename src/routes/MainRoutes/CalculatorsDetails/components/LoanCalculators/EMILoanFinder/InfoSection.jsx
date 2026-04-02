// components/InfoSection.js
import React from 'react';

const InfoSection = () => {
  const infoBoxes = [
    {
      icon: "💡",
      title: "What is EMI?",
      content:
        "EMI stands for Equated Monthly Installment. It is the fixed monthly payment consisting of both principal and interest."
    },
    {
      icon: "📊",
      title: "How is Interest Calculated?",
      content:
        "The calculator uses an iterative Newton-Raphson method to find the interest rate where the present value of all EMIs equals the loan amount."
    },
    {
      icon: "⚠️",
      title: "Important Notes",
      content:
        "This calculation assumes a fixed interest rate throughout the loan tenure. Additional fees or processing charges are not included."
    }
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">

      {/* Header – Black section */}
      <div className="bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-semibold tracking-wide">
          Understanding Your Results
        </h2>
      </div>

      <div className="p-6">
        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">{box.icon}</span>
                {box.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {box.content}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Note Box */}
        <div className="mt-8 p-5 bg-gray-100 border border-gray-300 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">
            Calculation Method
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed">
            This calculator uses the Newton-Raphson iterative method to solve
            the EMI equation:
            <br />
            <span className="font-medium">
              EMI = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> − 1]
            </span>
            ,
            <br />
            where P = principal, r = monthly interest rate, n = loan tenure in months.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
