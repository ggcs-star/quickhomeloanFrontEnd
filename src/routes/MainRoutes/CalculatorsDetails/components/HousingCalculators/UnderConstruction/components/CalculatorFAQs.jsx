import React, { useState } from "react";

const FAQS = [
  {
    q: "Which is cheaper: under construction or ready to move?",
    a: "Typically, an under-construction (UC) property has a lower base price, sometimes by 10–30%, compared to a similar ready-to-move (RTM) property. However, the final cost can be much closer. This calculator determines the effective cost by adding rent paid during the waiting period, GST (applicable only to UC), and pre-EMI interest.",
  },
  {
    q: "Why do under-construction properties cost less?",
    a: "Developers offer lower prices to fund construction through early buyers and compensate them for risks such as delays, specification changes, and opportunity cost of locked-in capital. The discount is essentially a premium for time and risk.",
  },
  {
    q: "What are the major risks of UC homes?",
    a: "The biggest risk is construction delay, which increases rent and pre-EMI costs. Other risks include builder default, quality mismatch, legal or regulatory issues, and layout changes. Always verify the builder’s track record and RERA registration.",
  },
  {
    q: "Do I get tax benefits before possession?",
    a: "No. Tax benefits on principal (Section 80C) and interest (Section 24b) can only be claimed after possession. However, pre-EMI interest paid during construction can be claimed in five equal installments starting from the year of possession.",
  },
  {
    q: "What if the completion takes longer than expected?",
    a: "Each month of delay adds an extra month of rent and pre-EMI interest. A one-year delay on a three-year project can add lakhs of rupees in additional cost. This calculator quantifies the impact of such delays clearly.",
  },
  {
    q: "Is GST applicable on under-construction homes?",
    a: "Yes. GST is 1% for affordable housing and 5% for non-affordable housing. This applies only to UC properties. RTM properties do not attract GST, which often narrows the real price gap.",
  },
  {
    q: "Is ready-to-move always more expensive?",
    a: "Not necessarily. While RTM properties have a higher ticket price, savings on rent, absence of GST, and immediate tax benefits can make the effective cost competitive. RTM also offers zero construction risk.",
  },
  {
    q: "Which option gives better rental income?",
    a: "RTM properties generate rental income immediately. UC properties produce no income until possession but may command higher rent later due to newer amenities and infrastructure.",
  },
  {
    q: "How does appreciation impact UC value?",
    a: "UC properties benefit from buying at today’s price and realizing appreciation by possession. This unrealized gain can offset rent and pre-EMI costs if the market performs well.",
  },
  {
    q: "Is RTM better for end-use?",
    a: "Yes, especially for buyers needing immediate housing. RTM offers certainty, immediate possession, and avoids the burden of paying both rent and pre-EMI.",
  },
  {
    q: "Is UC better for investment?",
    a: "UC properties often offer higher ROI due to lower entry price and appreciation, but they carry higher risk. Investors should have sufficient financial buffer to handle delays and market volatility.",
  },
  {
    q: "What is Pre-EMI and when does it apply?",
    a: "Pre-EMI is the interest paid on the portion of the loan disbursed to the builder for a UC property. You pay interest only on the disbursed amount until possession, after which full EMI begins.",
  },
  {
    q: "Can I sell an under-construction property before possession?",
    a: "Yes, through a transfer process. It requires builder NOC, may involve transfer fees, and capital gains tax applies on profits.",
  },
  {
    q: "How do I calculate maintenance charges difference?",
    a: "RTM properties incur maintenance immediately, while UC properties start maintenance only after possession. This calculator accounts for RTM maintenance paid during the UC construction period for fair comparison.",
  },
];

export default function CalculatorFAQs() {
  const [openIndex, setOpenIndex] = useState(9); // "Is my personal data saved?"

  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
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
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
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
