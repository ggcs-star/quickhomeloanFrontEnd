import React, { useState } from "react";

const faqs = [
  {
    q: "What does this Interest Rate Calculator do?",
    a: "It calculates the effective annual interest rate of your loan using your EMI, loan amount, and tenure. This helps you uncover the real rate you are paying."
  },
  {
    q: "How accurate is it?",
    a: "The calculator is highly accurate and uses an iterative bisection method similar to banking systems. Minor rounding differences may occur."
  },
  {
    q: "Why can't the interest rate be calculated directly?",
    a: "Because the EMI formula cannot be algebraically reversed for the interest rate. The calculator uses numerical approximation to solve it."
  },
  {
    q: "Can I use this for home, car, and personal loans?",
    a: "Yes. It works for all EMI-based loans including home, car, personal, and education loans."
  },
  {
    q: "What if my EMI includes insurance or other fees?",
    a: "If EMI includes insurance or add-ons, the calculated interest rate may appear higher since those costs are not part of the principal."
  },
  {
    q: "Does the processing fee change the interest rate?",
    a: "Processing fees do not change the EMI rate mathematically, but they increase the effective cost of borrowing."
  },
  {
    q: "Why is my calculated interest rate very high?",
    a: "High rates are common for unsecured loans or short tenures. It may also indicate bundled fees or dealer markups."
  },
  {
    q: "What about floating interest rate loans?",
    a: "For floating-rate loans, the calculator shows the effective rate based on your current EMI and outstanding tenure."
  },
  {
    q: "Can I calculate the interest rate on an old loan?",
    a: "Yes. As long as you know the EMI, original loan amount, and tenure, this calculator will work."
  },
  {
    q: "Will this calculator save my personal data?",
    a: "No. All calculations happen locally in your browser. No data is stored or transmitted."
  },
  {
    q: "Can I calculate the rate if my EMI changes?",
    a: "Yes. Enter the revised EMI to instantly see the updated effective interest rate."
  }
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <div className="divide-y divide-gray-200">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.q}
                  </h3>

                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-gray-600">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
