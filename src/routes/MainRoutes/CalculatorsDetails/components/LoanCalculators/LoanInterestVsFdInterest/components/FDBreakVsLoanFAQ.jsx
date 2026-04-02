import React, { useState } from "react";

const faqs = [
  {
    q: "1. What is opportunity cost in this calculator?",
    a: "It is the FD interest you lose if you break your FD today.",
  },
  {
    q: "2. What if my FD has a break penalty?",
    a: "Enter the penalty in the calculator. It will reduce the FD maturity value and impact the final recommendation.",
  },
  {
    q: "3. How accurate is this comparison?",
    a: "It uses standard amortization and compound interest formulas. Actual bank penalties and taxes may vary.",
  },
  {
    q: "4. What if FD interest is taxable?",
    a: "Enter your tax rate; the calculator will compute the post-tax FD interest.",
  },
  {
    q: "5. Should I always take a loan instead of breaking my FD?",
    a: "No. If loan rates are much higher than FD rates, breaking the FD may save you interest.",
  },
  {
    q: "6. Does inflation really matter here?",
    a: "Yes. Inflation reduces the real cost of borrowing, especially for long-term loans.",
  },
  {
    q: "7. Does asset growth matter?",
    a: "Yes — especially when buying real estate, gold, or equipment. If the asset's value increases faster than inflation, a loan may be better.",
  },
  {
    q: "8. Should I break multiple small FDs or take a loan?",
    a: "Use this calculator for each FD separately to see the best combination.",
  },
  {
    q: "9. Is this calculator valid for recurring deposits (RD)?",
    a: "Yes — if you treat the RD maturity value like an FD maturity value.",
  },
  {
    q: "10. What if I need liquidity?",
    a: "Always prioritize liquidity. Even if breaking the FD mathematically wins, you might need the cash later.",
  },
  {
    q: "11. What if I have a 0% loan offer?",
    a: "Then taking the loan is almost always better than breaking the FD.",
  },
  {
    q: "12. Can I use this for business purchase decisions?",
    a: "Absolutely — especially for capital purchases like equipment, tools, or machinery.",
  },
  {
    q: "13. Is premature FD withdrawal taxable?",
    a: "Taxation applies only to the interest earned, not the principal amount.",
  },
  {
    q: "14. Does this consider monthly compounding?",
    a: "FDs usually compound quarterly; this calculator uses annual compounding for simplicity. This can be enabled if desired.",
  },
  {
    q: "15. What if the FD tenure is longer than the loan tenure?",
    a: "Set the calculator’s duration to the loan tenure for an accurate comparison.",
  },
];

const FDBreakVsLoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
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
};

export default FDBreakVsLoanFAQ;
