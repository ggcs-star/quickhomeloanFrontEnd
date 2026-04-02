import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is a home loan top-up?",
      answer:
        "A home loan top-up is an additional loan amount you can avail over and above your existing home loan."
    },
    {
      question: "Who is eligible for a top-up?",
      answer:
        "Existing home loan customers with a good repayment history are typically eligible for a top-up."
    },
    {
      question: "Can I use the top-up for personal needs?",
      answer:
        "Yes, you can use the top-up for personal requirements like renovation, education, or medical expenses."
    },
    {
      question: "Can I switch lenders and take a top-up?",
      answer:
        "Yes — you can do a balance transfer to a new lender and take a top-up from them. Evaluate transfer costs and processing fees first."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-8">
      <h3 className="text-xl font-semibold">Frequently asked questions</h3>

      <div className="mt-4 space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-neutral-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-4 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold">{faq.question}</div>
                {/* <div className="text-sm text-slate-500 mt-1">
                  {activeIndex === index ? "Click to hide answer" : "Click to read answer"}
                </div> */}
              </div>

              <div className="text-2xl text-slate-400">
                {activeIndex === index ? "−" : "+"}
              </div>
            </button>

            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-slate-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
