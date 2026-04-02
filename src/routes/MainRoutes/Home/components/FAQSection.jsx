import React, { useState } from "react";
import { Container } from "../../../../components/Layout";
import { ChevronDown } from "lucide-react";
import faqicon from "../../../../assets/faq/faqicon.png";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is the minimum and maximum loan amount?",
      answer:
        "The minimum loan amount is ₹10,000, and the maximum loan amount depends on your credit profile and the property value.",
    },
    {
      question: "What documents are required for a home loan?",
      answer:
        "You’ll need proof of income, identification documents, bank statements, and property details depending on your loan type.",
    },
    {
      question: "How is the interest rate determined?",
      answer:
        "Interest rates are determined by factors like your credit score, loan amount, term length, and lender-specific criteria.",
    },
    {
      question: "Can I prepay my home loan?",
      answer:
        "Yes, you can make early repayments without penalties in most cases. However, please confirm with your lender for specific terms.",
    },
  ];

  const toggleFAQ = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <section className="bg-white pt-10">
      <Container>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-600">
                Find answers to the most common questions about our home loan
                services, eligibility, interest rates, and documentation.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 pb-8">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${
                    activeIndex === index
                      ? "border-black shadow-lg"
                      : "border-neutral-300 hover:border-gray-400"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between text-left px-5 py-4 font-medium text-gray-900 focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Section */}
                  <div
                    className={`px-5 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-40 pb-4" : "max-h-0"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

     
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
