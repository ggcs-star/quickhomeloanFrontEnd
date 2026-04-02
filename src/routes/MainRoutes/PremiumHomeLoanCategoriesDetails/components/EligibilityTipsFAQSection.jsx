import React from "react";

const EligibilityTipsFAQSection = ({ tips, faqs }) => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm mb-8">
      {/* ===== Tips Section ===== */}
      <h3 className="text-lg font-semibold text-gray-900">
        {tips.title || "Tips to Improve Eligibility"}
      </h3>

      <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
        {tips.items.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      {/* ===== FAQ Section ===== */}
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900">
          {faqs.title || "Frequently Asked Questions"}
        </h4>

        {faqs.items.map((faq, index) => (
          <details
            key={index}
            className="mt-3 p-3 bg-gray-50 rounded transition-all duration-300"
            open={index === 0} // first FAQ open by default
          >
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-indigo-600">
              {faq.question}
            </summary>
            <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default EligibilityTipsFAQSection;
