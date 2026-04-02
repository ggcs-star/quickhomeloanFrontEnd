import React from "react";
import { Container } from "../../../../components/Layout";

const FAQSection = ({ data }) => {
  if (!data) return null;

  return (
    <Container>
      <section className="scroll-mt-20 py-12">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
          {data.title}
        </h2>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {data.faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white p-5 rounded-md border border-neutral-300 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-bold text-neutral-900 list-none">
                <span>{faq.question}</span>

                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>

              <p className="text-neutral-600 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FAQSection;
