import React, { useState } from "react";

const faqs = [
  {
    q: "What is a Loan Tenure Calculator?",
    a: "It calculates the time required to repay a loan using your monthly installment (EMI), interest rate, and the principal loan amount.",
  },
  {
    q: "How accurate is this?",
    a: "Highly accurate because it uses the mathematical reverse of the standard EMI formula to solve for the loan's duration.",
  },
  {
    q: "Can tenure be fractional?",
    a: "Yes—your loan may end in a period that isn't a full month. In practice, banks usually adjust the final EMI to close the loan.",
  },
  {
    q: "Why does my tenure seem long?",
    a: "This is usually because the EMI amount is too low relative to the loan amount and interest rate. If the payment barely covers the monthly interest, the principal reduces very slowly.",
  },
  {
    q: "Does increasing EMI reduce tenure?",
    a: "Yes, a higher EMI means you pay off the principal faster, which shortens the repayment time and reduces the total interest paid.",
  },
  {
    q: "Does reducing EMI increase tenure?",
    a: "Yes, reducing your EMI will increase the loan tenure, often drastically, and will also increase the total amount of interest you pay over the life of the loan.",
  },
  {
    q: "Can a floating interest rate affect tenure?",
    a: "Yes. If a floating rate increases, your loan tenure will increase unless you also increase your EMI amount to compensate.",
  },
  {
    q: "Does prepayment reduce tenure?",
    a: "Yes, making a bulk prepayment directly reduces the principal amount, which immediately shortens the remaining tenure.",
  },
  {
    q: "Does the loan amount include processing fees?",
    a: "No, this calculation uses the principal loan amount only. Fees and other charges are not included.",
  },
  {
    q: "Is my personal data saved?",
    a: "No. All calculations are performed in your browser. No data is sent to or stored on any server.",
  },
  {
    q: "Can I calculate the tenure for an already running loan?",
    a: "Yes. Use your outstanding loan balance as the loan amount along with your current EMI and interest rate to find the remaining tenure.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      {/* Heading */}
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
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center text-left"
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
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
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

export default FaqSection;
