import { useState } from "react"

const FAQS = [
  {
    question: "What is a home loan interest rate?",
    answer:
      "It's the percentage charged by a lender on the principal loan amount. It determines the cost of your borrowing and the size of your Equated Monthly Instalment (EMI).",
  },
  {
    question: "Which bank has the lowest home loan interest rate in India?",
    answer:
      "Interest rates change frequently. As of our latest update, banks like Bank of Baroda and State Bank of India are offering some of the most competitive rates. It's crucial to compare the latest rates from multiple lenders.",
  },
  {
    question: "How can I reduce my home loan interest burden?",
    answer:
      "You can reduce your interest burden by making regular prepayments, opting for a shorter loan tenure, improving your credit score to refinance at a lower rate, or choosing a floating rate loan when rates are expected to fall.",
  },
  {
    question: "Can I negotiate the home loan interest rate?",
    answer:
      "Yes, absolutely. A high credit score, stable income, and a good relationship with the bank can give you leverage to negotiate for a lower interest rate and a waiver on processing fees.",
  },
  {
    question: "What is the difference between fixed and floating interest rates?",
    answer:
      "A fixed rate remains constant throughout the loan tenure, offering predictable EMIs. A floating rate is linked to a benchmark (like the repo rate) and changes over time, making EMIs variable but potentially lower if rates fall.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="bg-light-card rounded-lg">
        <div className="space-y-2">

          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <h3 className="m-0 font-normal">
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-header-${index}`}
                    className="w-full flex justify-between items-center text-left py-4 px-2 gap-4"
                  >
                    <span className="font-semibold text-lg text-gray-900">
                      {faq.question}
                    </span>

                    <span
                      className={`text-gray-800 text-2xl flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 pb-4 px-2 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
