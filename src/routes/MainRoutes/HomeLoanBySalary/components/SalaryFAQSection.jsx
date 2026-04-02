import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../../db/homeLoanBySalary";
import { Container } from "../../../../components/Layout";
import { ChevronDown } from "lucide-react";

const SalaryFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { slug } = useParams();
  const pageData =
    homeLoanBySalary.find((item) => item.slug === slug) || homeLoanBySalary[0];

  const { faqSection } = pageData;
  if (!faqSection) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="">
      <Container className="max-w-4xl mx-auto">

        {/* Entire Card (Matches Provided Component) */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800 text-center md:text-left">
              {faqSection.title}
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="p-0">
            {faqSection.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-neutral-200 transition-all duration-300"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full py-5 px-4 text-left font-medium text-neutral-700 hover:bg-neutral-100"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-black" : "text-black"
                        }`}
                      />
                    </button>
                  </h3>

                  {/* Animated dropdown */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 pb-5 px-5 text-neutral-600 space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default SalaryFAQSection;
