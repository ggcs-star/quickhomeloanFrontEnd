import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SECTIONS = [
  {
    id: 1,
    title: "1. Introduction (Very Detailed)",
    defaultOpen: true,
    content: (
      <>
        <p>
          Financial planning involves a delicate balance between growing your
          wealth and saving on taxes. This{" "}
          <strong>Tax Savings vs. Investment Returns Calculator</strong> helps
          you compare both approaches in a data-driven way.
        </p>

        <h3>What are Tax-Saving Investments?</h3>
        <ul>
          <li><strong>ELSS:</strong> Equity mutual funds with 3-year lock-in</li>
          <li><strong>PPF:</strong> Government-backed, tax-free returns</li>
          <li><strong>NPS:</strong> Retirement focused with extra deductions</li>
          <li><strong>Tax-Saving FDs:</strong> Fixed returns, 5-year lock-in</li>
        </ul>

        <h3>What are Regular Investments?</h3>
        <ul>
          <li>Regular mutual funds</li>
          <li>Direct equity stocks</li>
          <li>Regular fixed deposits</li>
        </ul>

        <h3>Why Compare Both?</h3>
        <p>
          Tax savings give an immediate guaranteed return. This calculator shows
          whether that benefit truly beats higher market returns after tax.
        </p>
      </>
    ),
  },

  {
    id: 2,
    title: "2. What This Calculator Does (Extremely Detailed)",
    content: (
      <>
        <p>This calculator goes beyond simple future value math.</p>

        <ul>
          <li>Calculates future value for both investments</li>
          <li>Accounts for upfront tax savings</li>
          <li>Applies capital gains tax</li>
          <li>Shows net post-tax advantage</li>
        </ul>

        <p>
          You get a side-by-side comparison, summary insights, and a clear
          winner.
        </p>
      </>
    ),
  },

  {
    id: 3,
    title: "3. When to Use This Calculator (10+ Use Cases)",
    defaultOpen: true,
    content: (
      <ol>
        <li>ELSS vs regular mutual fund</li>
        <li>Year-end tax planning</li>
        <li>PPF vs equity funds</li>
        <li>High income tax slab analysis</li>
        <li>Retirement planning</li>
        <li>80C optimization</li>
        <li>FD vs tax-saving FD</li>
        <li>Low tax slab investing</li>
        <li>First-time investors</li>
        <li>Long-term portfolio strategy</li>
      </ol>
    ),
  },

  {
    id: 4,
    title: "4. How to Use – Step-by-Step Instructions",
    content: (
      <ol>
        <li>Enter investment amount</li>
        <li>Select duration</li>
        <li>Enter expected returns</li>
        <li>Select tax slab</li>
        <li>Enter capital gains tax</li>
        <li>Click calculate</li>
        <li>Analyze results</li>
      </ol>
    ),
  },

  {
    id: 5,
    title: "5. Formulas Used",
    content: (
      <>
        <pre>Tax Saved = Investment × Tax Slab</pre>
        <pre>FV = P × (1 + R) ^ N</pre>
        <pre>Capital Gains = FV − P</pre>
        <pre>Post-Tax Amount = FV − Tax</pre>
      </>
    ),
  },

  {
    id: 11,
    title: "6. Frequently Asked Questions (FAQs)",
    content: (
      <>
        <p><strong>Which tax-saving option gives highest return?</strong> ELSS.</p>
        <p><strong>Is ELSS better than MF?</strong> Depends on tax slab.</p>
        <p><strong>Does calculator include inflation?</strong> No.</p>
        <p><strong>How accurate is this?</strong> Depends on return assumptions.</p>
      </>
    ),
  },

  {
    id: 12,
    title: "7. Pro Tips for Smart Planning",
    content: (
      <ul>
        <li>Don’t chase tax savings alone</li>
        <li>Use ELSS for growth</li>
        <li>Use PPF for stability</li>
        <li>Diversify 80C investments</li>
        <li>Understand lock-in periods</li>
      </ul>
    ),
  },

  {
    id: 13,
    title: "8. Final Summary & Call-to-Action",
    content: (
      <>
        <p className="text-lg font-semibold text-center">
          Make smarter, data-driven investment decisions.
        </p>
        <p className="text-center font-bold text-xl mt-4">
          Use the calculator now and optimize your wealth journey.
        </p>
      </>
    ),
  },
];

export default function TaxCalculatorGuide() {
  const [openIds, setOpenIds] = useState(
    SECTIONS.filter(s => s.defaultOpen).map(s => s.id)
  );

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="mt-12 md:mt-16 my-8 bg-white rounded-xl shadow-lg overflow-hidden border">
      {SECTIONS.map((section) => {
        const isOpen = openIds.includes(section.id);

        return (
          <div key={section.id} className="border-b last:border-b-0">
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex justify-between items-center text-left p-4 md:p-6 hover:bg-gray-50 transition"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {section.title}
              </h2>

              <ChevronDown
                className={`h-6 w-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 md:p-6 prose prose-lg max-w-none text-gray-700">
                {section.content}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
