import React, { useState } from "react";

const FAQS = [
  {
    q: "How much loan can I get on my salary?",
    a: "Typically, banks offer a loan amount where the total EMIs (including the new one) do not exceed 40–60% of your net monthly salary. Use our calculator to get a close estimate.",
  },
  {
    q: "What is the minimum salary for a home loan?",
    a: "While there is no fixed number, most banks require a minimum net monthly income of ₹25,000–₹30,000 for a home loan, especially in metro cities.",
  },
  {
    q: "How much does credit score affect loan eligibility?",
    a: "A credit score above 750 is crucial. It increases approval chances and helps secure a lower interest rate, increasing eligibility.",
  },
  {
    q: "How can I improve my loan eligibility?",
    a: "Repay existing loans, add an earning co-applicant, choose a longer tenure, or show proof of additional stable income.",
  },
  {
    q: "What is FOIR in a loan?",
    a: "FOIR (Fixed Obligation to Income Ratio) is the percentage of income used for EMIs. Banks use it to assess repayment capacity.",
  },
  {
    q: "What are the benefits of adding a co-applicant?",
    a: "Both incomes are considered, significantly increasing the maximum loan eligibility.",
  },
  {
    q: "Does a floating vs. fixed rate affect eligibility?",
    a: "Not directly, but lower floating rates may slightly increase eligibility due to reduced EMI burden.",
  },
  {
    q: "How does a longer tenure increase loan eligibility?",
    a: "Longer tenure lowers EMI, making it fit within FOIR limits and increasing eligible loan amount.",
  },
  {
    q: "Do all banks have the same eligibility criteria?",
    a: "No. FOIR limits, interest rates, and credit policies vary by bank.",
  },
  {
    q: "Is the data I enter in this calculator private?",
    a: "Yes. All calculations happen in your browser. No data is stored or transmitted.",
  },
  {
    q: "Can I get a loan if I have no credit history?",
    a: "Possible but harder. Some lenders offer smaller loans at higher rates or require a guarantor.",
  },
  {
    q: "Does the loan type change eligibility?",
    a: "Yes. Home loans generally offer higher eligibility than car or personal loans due to lower rates and longer tenure.",
  },
];

export default function LoanEligibilityFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first open like reference

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <div className="divide-y divide-gray-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center text-left"
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
      </div>
    </section>
  );
}
