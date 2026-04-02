import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../../../../components/Layout";

const FaqsSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <Container className="max-w-4xl mx-auto">

        {/* Entire Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>

            {/* Subtitle (optional) */}
            {data.subtitle && (
              <p className="text-neutral-600 text-sm mt-1">{data.subtitle}</p>
            )}
          </div>

          {/* FAQs */}
          <div className="p-0">
            {data.faqs.map((faq, index) => {
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

export default FaqsSection;
