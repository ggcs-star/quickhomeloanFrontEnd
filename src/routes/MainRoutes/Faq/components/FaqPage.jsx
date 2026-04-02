import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

const FaqPage = () => {
  const faqItems = [
    {
      question: "What is a home loan?",
      answer:
        "A home loan is a secured loan provided by banks or financial institutions to help individuals purchase, construct, or renovate residential property. The property itself serves as collateral for the loan.",
    },
    {
      question: "How is home loan eligibility determined?",
      answer:
        "Eligibility is calculated based on your income, age, employment stability, credit score, loan amount, and property value. Lenders may also consider your existing EMIs and debt-to-income ratio.",
    },
    {
      question: "What is the difference between a fixed and floating interest rate?",
      answer:
        "A fixed-rate loan keeps your interest constant throughout the tenure, while a floating-rate loan varies with market conditions (typically linked to repo rates or MCLR). Floating rates can change EMI amounts over time.",
    },
    {
      question: "Can I prepay or foreclose my home loan?",
      answer:
        "Yes, you can. Most lenders allow partial prepayment or full foreclosure. Some may levy minimal charges, especially for fixed-rate loans. Prepaying reduces your outstanding principal and interest burden.",
    },
    {
      question: "What documents are required for a home loan?",
      answer:
        "Common documents include proof of identity, address, income (salary slips, bank statements, ITRs), property documents, and passport-size photographs. Specific requirements may vary by lender.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "Typically, it takes 3–7 working days once all documents are submitted. The timeline can vary depending on the lender, your profile, and property verification procedures.",
    },
    {
      question: "Can I transfer my home loan to another bank?",
      answer:
        "Yes — through a balance transfer, you can shift your existing home loan to another lender offering better interest rates or terms. Evaluate processing fees and total savings before switching.",
    },
    {
      question: "Do I get tax benefits on home loans?",
      answer:
        "Yes, under Section 80C (principal repayment) and Section 24(b) (interest paid), you can claim tax deductions on your home loan, subject to limits and applicable conditions.",
    },
  ];

  // 🔥 Multi-open FAQ logic
  const [openItems, setOpenItems] = useState(new Set());

  const toggleFAQ = (index) => {
    const updated = new Set(openItems);
    updated.has(index) ? updated.delete(index) : updated.add(index);
    setOpenItems(updated);
  };

  return (
    <div className="mt-14 bg-[#f9f9f9]">
      <Container>
        <main className="mx-auto lg:px-6 py-14 lg:py-28 text-neutral-900">

          {/* Page Header */}
          <section className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-neutral-500 font-semibold uppercase text-sm">
              Frequently Asked Questions
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-neutral-900">
              Answers to All Your Home Loan Queries
            </h1>

            <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
              Get clarity on every step of your home loan journey — from
              application to repayment. If you can’t find your question here,
              feel free to reach out to our experts.
            </p>
          </section>

          {/* FAQ List */}
          <section className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openItems.has(index);

              return (
                <div
                  key={index}
                  className={`bg-white border border-neutral-300 rounded-md ${
                    isOpen ? "" : ""
                  }`}
                >
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-neutral-900">
                      {faq.question}
                    </span>
                    <span
                      className={`text-neutral-800 font-bold text-xl transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-neutral-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          {/* Still Have Questions */}
          <section className="mt-20 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white text-center p-10 rounded-2xl">
            <h2 className="text-2xl font-bold">Still Have Questions?</h2>
            <p className="mt-2 text-neutral-200">
              Our advisors are here to help you make confident home loan
              decisions.
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-neutral-900 rounded-md font-semibold hover:bg-neutral-100 transition-colors"
              >
                Contact Support
              </Link>

              <Link
                to="/apply-loan"
                className="px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
              >
                Apply for a Loan
              </Link>
            </div>
          </section>

        </main>
      </Container>
    </div>
  );
};

export default FaqPage;
