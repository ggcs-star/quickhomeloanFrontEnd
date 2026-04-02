import React, { useState } from "react";

/* ---------------------------------------------
   FAQ DATA
--------------------------------------------- */
const faqs = [
  {
    q: "What is an EMI?",
    a: "EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.",
  },
  {
    q: "How accurate is this EMI calculator?",
    a: "Our calculator provides a very accurate estimate suitable for planning. The final EMI amount from a bank might differ slightly due to rounding or other fees.",
  },
  {
    q: "How does loan tenure affect my EMI?",
    a: "A longer tenure reduces your monthly EMI but increases total interest paid. A shorter tenure increases EMI but saves on interest.",
  },
  {
    q: "What is the difference between fixed and floating interest rates?",
    a: "Fixed rates remain constant throughout the tenure. Floating rates vary with market conditions, causing EMIs to change.",
  },
  {
    q: "Does this calculator include processing fees?",
    a: "No. This calculator only computes EMI and does not include processing fees or other charges.",
  },
  {
    q: "How can I reduce my EMI?",
    a: "You can reduce EMI by increasing tenure, making prepayments, or negotiating a lower interest rate.",
  },
  {
    q: "What is an amortization schedule?",
    a: "It is a detailed repayment table breaking down each EMI into principal and interest components.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. All calculations are performed locally in your browser. No data is stored or transmitted.",
  },
  {
    q: "Can I use this for any type of loan?",
    a: "Yes. It works for any loan with a fixed interest rate such as home, car, or personal loans.",
  },
  {
    q: "What is the principal amount?",
    a: "The principal is the original loan amount borrowed from the lender.",
  },
  {
    q: "How does prepayment help?",
    a: "Prepayment reduces outstanding principal, lowering total interest and shortening loan tenure.",
  },
  {
    q: "What happens if I miss an EMI payment?",
    a: "Missing an EMI can attract penalties and negatively impact your credit score.",
  },
];

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function EmiCalculatorContent() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-12">

      {/* WHAT THIS CALCULATOR DOES */}
      <Section title="What This Calculator Does">
        <p>This EMI Calculator is a simple financial tool that helps you:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Calculate the fixed monthly EMI.</li>
          <li>Understand total interest payable.</li>
          <li>Break down repayment into principal and interest.</li>
          <li>Analyze the impact of tenure and rate changes.</li>
          <li>Compare loan offers across banks.</li>
          <li>Plan monthly budgeting accurately.</li>
          <li>Assess loan affordability before applying.</li>
        </ul>
      </Section>

      {/* WHEN TO USE */}
      <Section title="When to Use This Calculator">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>Before applying for a home loan</li>
          <li>While planning a car purchase</li>
          <li>To compare personal loan rates</li>
          <li>To choose the right tenure</li>
          <li>Before taking a top-up loan</li>
          <li>For financial planning</li>
          <li>To avoid over-borrowing</li>
          <li>To assess EMI affordability</li>
        </ul>
      </Section>

      {/* HOW TO USE */}
      <Section title="How to Use – Step by Step">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Enter Loan Amount (₹)", "Input the total amount you want to borrow."],
            ["Enter Interest Rate (%)", "Provide the annual interest rate."],
            ["Select Loan Tenure", "Choose repayment duration in years."],
            ["Click Calculate EMI", "Instantly see repayment details."],
            ["Review EMI Details", "Check EMI, interest, and total payment."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-bold text-gray-800">{i + 1}. {title}</h3>
              <p className="text-sm mt-1 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How This Calculator Works">
        <p className="text-center font-mono bg-gray-100 p-4 rounded-md text-lg">
          EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1)
        </p>
        <ul className="mt-4 space-y-1">
          <li><strong>P</strong> = Principal amount</li>
          <li><strong>r</strong> = Monthly interest rate</li>
          <li><strong>n</strong> = Number of months</li>
        </ul>
      </Section>

      {/* PRACTICAL APPLICATIONS */}
      <Section title="Practical Applications">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>Home & car budgeting</li>
          <li>Loan comparison</li>
          <li>Tenure optimization</li>
          <li>Prepayment planning</li>
          <li>Eligibility assessment</li>
          <li>Financial forecasting</li>
          <li>Interest impact analysis</li>
          <li>Loan restructuring</li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section title="Frequently Asked Questions">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
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
      </Section>

      {/* PRO TIP */}
      <Section title="Pro Tip">
        <ul className="space-y-2">
          {[
            "Choose the shortest affordable tenure to save interest.",
            "Make partial prepayments whenever possible.",
            "Maintain a good credit score.",
            "Compare at least 2–3 lenders.",
            "Read loan agreements carefully.",
          ].map((tip, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

/* ---------------------------------------------
   SECTION WRAPPER
--------------------------------------------- */
function Section({ title, children }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
