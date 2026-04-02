import React from "react";

// Helper function: Convert markdown-style bold (**) to <strong>
const parseMarkdownBold = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const EMIVsRentGuide = () => {
  const guide = {
    title: "EMI vs Rent Calculator - Complete Guide",
    content: [
      {
        heading: "What This Calculator Is All About",
        text: `Your Personal Financial Advisor for Housing Choices
This isn't just another calculator - it's your crystal ball for one of life's biggest financial decisions. We help you see beyond "monthly rent vs EMI" to understand the true long-term picture of renting versus buying a home.
Think of it as your financial time machine that shows where you'll be 5, 10, or 15 years from now based on today's housing choice.`,
      },
      {
        heading: "📝 How to Use It - Your Step-by-Step Guide",
        steps: [
          {
            title: "Step 1: Tell Us About Your Renting Life",
            bullets: [
              "Current Monthly Rent: What you're paying right now",
              "Annual Rent Increase: How much your rent typically jumps each year (usually 3-8%)",
              "Investment Potential: What return you could earn if you invested your down-payment instead",
            ],
          },
          {
            title: "Step 2: Paint Your Buying Picture",
            bullets: [
              "Dream Home Price: The property cost you're considering",
              "Your Upfront Investment: How much down-payment you can make",
              "Loan Details: Interest rate and loan duration that works for you",
              "Hidden Costs: Maintenance, insurance, and property taxes",
              "Future Growth: How much you expect the property value to increase yearly",
            ],
          },
          {
            title: "Step 3: Set Your Time Horizon",
            bullets: [
              "Analysis Period: How long you plan to stay (this dramatically changes results!)",
              "Inflation Rate: General price increases that affect future costs",
              'Click "Calculate" and let the magic happen!',
            ],
          },
        ],
      },
      {
        heading: "📊 Understanding Your Results - What Those Numbers Really Mean",
        subSections: [
          {
            title: "The Bottom Line: Net Costs",
            bullets: [
              "Renting Net Cost: Total rent paid MINUS what your down-payment would have earned if invested",
              "Buying Net Cost: Total amount spent MINUS your property's increased value",
              "The Winner: Lower net cost means better financial choice",
            ],
          },
          {
            title: "Breaking Down the Numbers",
            bullets: [
              "**For Renting:**",
              "Total Rent Paid: Sum of all rent over years (with increases!)",
              "Investment Gains: What your saved down-payment earned in the market",
              "Final Cost: Rent minus investment gains = your true cost",
              "**For Buying:**",
              "Initial Investment: Your down-payment amount",
              "EMI Payments: All your monthly installments added up",
              "Hidden Expenses: Maintenance, taxes, insurance over years",
              "Remaining Loan: What you still owe after your chosen period",
              "Property Value: What your home is worth in the future",
              "Final Cost: Total spent minus future property value",
            ],
          },
          {
            title: "The Decision Matrix",
            bullets: [
              "Green Light for Buying: When your property's growth outpaces all costs",
              "Stick with Renting: When investment returns beat property appreciation",
              "Close Call: When small changes in assumptions flip the result",
            ],
          },
        ],
      },
      {
        heading: "💡 Why This Calculator Changes Everything",
        subSections: [
          {
            title: "See the Invisible Costs",
            bullets: [
              "Most people compare 'rent vs EMI' but miss:",
              "What your down-payment could earn elsewhere",
              "Annual rent increases that add up dramatically",
              "Maintenance costs that grow with inflation",
              "Property value changes over time",
            ],
          },
          {
            title: "Avoid Emotional Decisions",
            bullets: [
              "First-time buyers: Know if you're truly ready financially",
              "Job relocators: Decide whether to buy in a new city or rent",
              "Empty nesters: Choose between downsizing or staying put",
              "Investors: Calculate true returns beyond 'rental yield'",
            ],
          },
          {
            title: "Plan Your Financial Future",
            bullets: [
              "Wealth Building: Understand how housing fits into your net worth",
              "Retirement Planning: See how today's choice affects tomorrow's security",
              "Life Stage Alignment: Match housing decisions with career and family goals",
            ],
          },
          {
            title: "Scenario Power",
            bullets: [
              '"What if" interest rates change?',
              '"What if" I get transferred in 5 years?',
              '"What if" the market crashes or booms?',
              '"What if" I put down more/less payment?',
            ],
          },
        ],
      },
      {
        heading: "🎯 Your Action Plan Based on Results",
        subSections: [
          {
            title: "If Buying Wins",
            bullets: [
              "Start mortgage shopping with confidence",
              "Budget for additional ownership costs",
              "Plan your move timeline",
              "Research neighborhoods strategically",
            ],
          },
          {
            title: "If Renting Wins",
            bullets: [
              "Invest your would-be down-payment wisely",
              "Negotiate longer lease terms",
              "Save the difference for future opportunities",
              "Re-evaluate annually as circumstances change",
            ],
          },
          {
            title: "If It's a Close Call",
            bullets: [
              "Consider non-financial factors (stability, customization, pride of ownership)",
              "Run scenarios with different time horizons",
              "Factor in personal preferences and lifestyle needs",
            ],
          },
        ],
      },
      {
        heading: "🌟 Your Final Takeaway",
        text: `"Run multiple scenarios with different timeframes and growth assumptions - the right choice often depends on how long you'll stay and how markets behave."
Remember: This calculator gives you the financial facts, but the best decision also considers your personal goals, job stability, and lifestyle preferences. Use the numbers as your guide, not your dictator!`,
      },
    ],
  };

  return (
    <div className="mx-auto py-10 lg:px-4 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {guide.title}
      </h1>

      <div className="space-y-10">
        {guide.content.map((section, idx) => (
          <div key={idx} className="rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              {section.heading}
            </h2>

            {section.text && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownBold(section.text),
                }}
              />
            )}

            {section.steps && (
              <div className="space-y-6">
                {section.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {step.bullets.map((point, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{
                            __html: parseMarkdownBold(point),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.subSections && (
              <div className="space-y-6">
                {section.subSections.map((sub, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {sub.title}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {sub.bullets.map((b, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{
                            __html: parseMarkdownBold(b),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.bullets.map((b, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: parseMarkdownBold(b),
                    }}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EMIVsRentGuide;
