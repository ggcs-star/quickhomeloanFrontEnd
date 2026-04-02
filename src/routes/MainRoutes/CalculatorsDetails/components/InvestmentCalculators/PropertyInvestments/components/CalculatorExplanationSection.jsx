import React, { useState } from "react";

const FAQS = [
  {
    q: "What is the 'Break-Even Year'?",
    a: "It is the first year in which selling the property results in a positive net profit after accounting for all costs, loan repayment, and taxes.",
  },
  {
    q: "How are prepayments handled?",
    a: "Prepayments reduce the outstanding loan principal, lowering future interest and potentially shortening the loan tenure.",
  },
  {
    q: "What if I rent the property out?",
    a: "Rental income can be included to offset EMIs and annual costs, adjusted for vacancy assumptions.",
  },
  {
    q: "How should I use this for relocation decisions?",
    a: "You can model selling now versus holding and renting while accounting for relocation and opportunity costs.",
  },
  {
    q: "Can I compare multiple properties?",
    a: "Yes. Save multiple scenarios and compare their ROI, CAGR, and break-even timelines side-by-side.",
  },
  {
    q: "How accurate are the projections?",
    a: "They are estimates based on your inputs. Use sensitivity analysis to understand a realistic range of outcomes.",
  },
  {
    q: "How This Calculator Works",
    a: "It aggregates all cash flows, loan dynamics, appreciation, and exit assumptions into year-by-year projections.",
  },
];

export default function CalculatorExplanationSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 mb-8 bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="mx-auto">
        <div className="divide-y divide-gray-200">

          {/* WHAT THIS CALCULATOR DOES */}
          <Section
            title="What This Calculator Does"
            icon={CalculatorIcon}
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Projects property market value using compound annual appreciation.</li>
              <li>Computes a full loan amortization schedule.</li>
              <li>Aggregates all cash flows: down payment, EMIs, costs, and prepayments.</li>
              <li>Factors in optional rental income with vacancy adjustments.</li>
              <li>Estimates net proceeds after loan repayment, costs, and taxes.</li>
              <li>Produces ROI, CAGR, break-even year, and optimal selling year.</li>
              <li>Visualizes data through charts.</li>
            </ul>

            <ExampleBox>
              A ₹50 lakh property appreciating at 7% annually could exceed ₹1.9 crore
              in 20 years, yielding a potential ₹72 lakh net profit.
            </ExampleBox>
          </Section>

          {/* WHEN TO USE */}
          <Section
            title="When to Use This Calculator"
            icon={IdeaIcon}
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Buy vs rent decisions</li>
              <li>Job relocation financial analysis</li>
              <li>Comparing loan or prepayment strategies</li>
              <li>Determining ideal holding period</li>
              <li>Estimating required down payment</li>
            </ul>

            <ExampleBox>
              Use it before relocating to decide whether to sell now or rent out
              your existing home.
            </ExampleBox>
          </Section>

          {/* HOW TO USE */}
          <Section
            title="How to Use — Step by Step"
            icon={ChecklistIcon}
          >
            <ol className="list-decimal list-inside space-y-2">
              <li>Enter property value and appreciation.</li>
              <li>Provide loan details.</li>
              <li>Add annual costs.</li>
              <li>Include advanced options if needed.</li>
              <li>Click Calculate.</li>
              <li>Test scenarios using Quick Scenarios.</li>
            </ol>

            <ExampleBox>
              Save scenarios with ±1–2% rate changes to understand risk exposure.
            </ExampleBox>
          </Section>

          {/* UNDERSTANDING RESULTS */}
          <Section
            title="Understanding the Results"
            icon={ChartIcon}
          >
            <dl className="space-y-4">
              <Definition term="Net Cash Invested">
                Down payment + EMIs + costs − rental income
              </Definition>
              <Definition term="Net Proceeds">
                Sale value − loan balance − costs − taxes
              </Definition>
              <Definition term="ROI & CAGR">
                ROI shows total return; CAGR annualizes it
              </Definition>
              <Definition term="Break-Even vs Equity Break-Even">
                Equity break-even may occur earlier than true profit break-even.
              </Definition>
            </dl>
          </Section>
        </div>

        {/* FAQ */}
        <div className="mt-10 border-t pt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-medium">{faq.q}</span>
                  <span
                    className={`transform transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === i && (
                  <div className="pb-4 text-gray-600 text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PRO TIP */}
        <div className="mt-8 p-6 bg-gray-50 border rounded-lg">
          <h3 className="text-2xl font-semibold">Pro Tip</h3>
          <p className="mt-2 text-gray-700">
            Small changes in interest and appreciation rates compound massively.
            Run sensitivity scenarios using ±1–2% changes before making decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------
   HELPER COMPONENTS
------------------------------------------- */
function Section({ title, icon: Icon, children }) {
  return (
    <div className="py-8">
      <div className="flex items-center gap-4 mb-4">
        <Icon />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="pl-11 text-gray-600 space-y-4">{children}</div>
    </div>
  );
}

function ExampleBox({ children }) {
  return (
    <p className="italic bg-gray-50 p-3 rounded-md text-gray-500">
      <strong className="text-gray-700">Example:</strong> {children}
    </p>
  );
}

function Definition({ term, children }) {
  return (
    <div>
      <dt className="font-semibold text-gray-800">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/* -------------------------------------------
   ICONS (INLINE SVG)
------------------------------------------- */
const IconWrapper = ({ children }) => (
  <span className="flex-shrink-0 text-gray-600">{children}</span>
);

const CalculatorIcon = () => (
  <IconWrapper>
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  </IconWrapper>
);

const IdeaIcon = () => (
  <IconWrapper>
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 3a6 6 0 016 6c0 2.22-1.21 4.16-3 5.19V17a3 3 0 11-6 0v-2.81C7.21 13.16 6 11.22 6 9a6 6 0 016-6z" />
    </svg>
  </IconWrapper>
);

const ChecklistIcon = () => (
  <IconWrapper>
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 12h6M9 16h6M9 8h6M5 6h.01M5 10h.01M5 14h.01" />
    </svg>
  </IconWrapper>
);

const ChartIcon = () => (
  <IconWrapper>
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M11 3v18M21 12H3" />
    </svg>
  </IconWrapper>
);
