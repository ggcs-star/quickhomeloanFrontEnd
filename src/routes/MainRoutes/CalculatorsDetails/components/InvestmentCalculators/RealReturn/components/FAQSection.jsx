import React, { useState } from "react";

const faqs = [
  {
    q: "Does this assume tax is charged every year?",
    a: "Yes, the calculator uses an effective annual tax rate. This is accurate for instruments where gains are taxed yearly (like FD interest). For investments where tax applies only at maturity (like some bonds or growth MFs), using an effective annual rate provides a close and useful approximation for planning.",
  },
  {
    q: "Can I use fractional years?",
    a: "Yes. The calculator fully supports decimal values for the investment duration, such as 2.5 or 7.75 years, allowing for more precise calculations.",
  },
  {
    q: "What happens if inflation is higher than my after-tax return?",
    a: "Your real rate of return will become negative. This means that although your investment grows nominally, its purchasing power shrinks over time — a real loss of wealth.",
  },
  {
    q: "Does this support monthly compounding?",
    a: "No. This calculator uses annual compounding, which is standard for long-term projections. A compounding frequency option can be added if required.",
  },
  {
    q: "What tax rate should I use for accurate results?",
    a: "Use your effective tax rate. FD interest is taxed at slab rates, equity STCG at ~15%, LTCG at ~10% (after exemption), and debt fund LTCG depends on the applicable tax regime.",
  },
  {
    q: "Is the inflation rate assumed to be constant?",
    a: "Yes. The calculator uses a single average inflation rate for simplicity. For long-term planning, using a realistic long-term average is recommended.",
  },
  {
    q: "What does a negative real rate of return really mean?",
    a: "It means inflation is rising faster than your investment grows after tax. Your money will buy fewer goods in the future, even if the nominal amount increases.",
  },
  {
    q: "Why not just subtract inflation from the return rate?",
    a: "Simple subtraction ignores compounding. The correct formula (1 + return) / (1 + inflation) − 1 gives a more accurate real return.",
  },
  {
    q: "How should I account for future changes in tax laws?",
    a: "Run multiple scenarios using different tax rates. This stress-tests your plan and helps create a more resilient long-term strategy.",
  },
  {
    q: "Can you give a simple example of nominal vs. real value?",
    a: "If ₹100 grows to ₹110 (10% return) but prices also rise 10%, your purchasing power stays the same. Nominal value increased, real value did not.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="ml-14 text-gray-700">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex justify-between items-center w-full py-5 font-medium text-left text-gray-800"
              >
                <span className="text-lg">{item.q}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-5 pr-4 text-gray-600">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
