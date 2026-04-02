import React, { useState } from "react";

const faqs = [
  {
    q: "What is a home loan prepayment?",
    a: "A home loan prepayment is a lump-sum amount paid towards your outstanding loan principal, in addition to your regular monthly EMIs.",
  },
  {
    q: "Which option saves more money – EMI reduction or tenure reduction?",
    a: "Tenure reduction always saves significantly more interest compared to EMI reduction, because the principal is paid off faster.",
  },
  {
    q: "Why does tenure reduction save more interest?",
    a: "When tenure is reduced, your EMI remains the same but a larger portion goes towards principal repayment. A lower principal for a shorter period results in much lower interest accrual.",
  },
  {
    q: "Can I prepay my home loan anytime?",
    a: "Yes. As per RBI guidelines, floating-rate home loans can be prepaid anytime without penalty. Banks cannot charge prepayment fees on such loans.",
  },
  {
    q: "Are there charges for home loan prepayment?",
    a: "For floating-rate home loans, there are no prepayment charges. For fixed-rate loans, banks may charge a penalty of 1–4%. Always confirm with your lender.",
  },
  {
    q: "How often can I make prepayments?",
    a: "Most banks do not restrict the number of prepayments. However, some lenders may specify a minimum prepayment amount per transaction.",
  },
  {
    q: "Should I prepay my loan or invest the money?",
    a: "If your home loan interest rate is higher than the post-tax returns expected from investments, prepayment is a guaranteed and risk-free way to save money.",
  },
  {
    q: "How much should I prepay?",
    a: "There is no single right amount. Use this calculator to test different prepayment values (such as ₹1 lakh, ₹2 lakh, or ₹5 lakh) and compare savings.",
  },
  {
    q: "Does my EMI automatically reduce after prepayment?",
    a: "No. Most banks reduce the loan tenure by default. If you want your EMI to reduce instead, you must submit a specific request to your bank.",
  },
  {
    q: "Is my personal or financial data saved?",
    a: "No. All calculations are performed locally in your browser. No personal or financial information is stored or transmitted.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
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
                <div className="overflow-hidden text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
