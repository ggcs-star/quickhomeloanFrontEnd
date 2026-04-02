import React, { useState } from "react";

const faqs = [
  {
    q: "Should I buy if my EMI is much higher than rent?",
    a: "Only if you plan to stay in the property long-term and expect property prices to increase meaningfully over time. Otherwise, renting may be financially smarter.",
  },
  {
    q: "What if I’m worried that home prices will increase rapidly?",
    a: "Never rush a purchase out of fear. Use this calculator to evaluate whether waiting, renting, or investing elsewhere produces better long-term outcomes.",
  },
  {
    q: "Are tax benefits included in the calculation?",
    a: "Yes. Tax benefits under Section 80C, Section 24, and PMAY (if applicable) are factored into the analysis for a realistic comparison.",
  },
  {
    q: "Does renting mean I am wasting money?",
    a: "No. Renting provides flexibility and liquidity. It allows you to invest your capital elsewhere instead of locking it into a single illiquid asset.",
  },
  {
    q: "Is buying a home better from a retirement perspective?",
    a: "Yes. Owning a home significantly reduces major living expenses during retirement and provides long-term housing security.",
  },
];

export default function RentVsBuyFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={isOpen}
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {faq.q}
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
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
