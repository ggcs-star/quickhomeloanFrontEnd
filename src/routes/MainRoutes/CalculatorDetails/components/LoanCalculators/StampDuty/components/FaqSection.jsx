import React, { useState } from "react";

const faqs = [
  {
    q: "What is stamp duty?",
    a: "A state government tax on property transfer.",
  },
  {
    q: "Who pays stamp duty?",
    a: "Typically the buyer.",
  },
  {
    q: "Are rates same across India?",
    a: "No, stamp duty rates vary by state.",
  },
  {
    q: "Do women get concessions?",
    a: "Many states offer reduced stamp duty rates for women buyers.",
  },
  {
    q: "Is registration mandatory?",
    a: "Yes, under the Registration Act, 1908.",
  },
  {
    q: "Does this calculator save data?",
    a: "No. All calculations are performed client-side in your browser.",
  },
];

export default function FaqSection() {
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
