import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DoctorFaqSection = ({ data }) => {
  const [openItems, setOpenItems] = useState(new Set());

  if (!data) return null;

  const toggleItem = (index) => {
    const updated = new Set(openItems);
    updated.has(index) ? updated.delete(index) : updated.add(index);
    setOpenItems(updated);
  };

  return (
    <section id="faqs" className="scroll-mt-20 py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        {data.title || "Frequently Asked Questions"}
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {data.items?.map((faq, index) => {
          const isOpen = openItems.has(index);

          return (
            <div
              key={index}
              className="group bg-white p-5 rounded-md border border-neutral-300 transition-all"
            >
              {/* Question Row */}
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full font-bold text-gray-900 cursor-pointer text-left"
              >
                <span>{faq.question}</span>

                {/* Chevron Icon */}
                <ChevronDown
                  className={`h-6 w-6 text-gray-700 transform transition-transform duration-300 
                  ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DoctorFaqSection;
