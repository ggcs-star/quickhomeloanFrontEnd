import React from "react";

// Helper function to parse **bold** markdown
const parseMarkdownBold = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const EMIPrepayGuide = () => {
  const guide = {
    title: "EMI Prepayment vs Invest (FD/MF) - Complete Guide",
    content: [
      {
        heading: "How to Use This Calculator",
        text: `Understanding the Decision
When you have extra money, you face a choice: should you prepay your loan to save on interest, or invest that money to potentially earn returns? This calculator helps you compare both options to make an informed financial decision.`,
      },
      {
        heading: "Step-by-Step Guide",
        steps: [
          {
            title: "Step 1: Enter Your Loan Details",
            bullets: [
              "Start by filling in your current loan information:",
              "Outstanding Loan Amount: The remaining principal balance on your loan",
              "Annual Interest Rate: The yearly interest rate you're paying on the loan",
              "Remaining Tenure: How many years or months are left in your loan term",
            ],
          },
          {
            title: "Step 2: Enter Prepayment & Investment Details",
            bullets: [
              "Next, provide information about the extra money and investment option:",
              "Proposed Prepayment Amount: The lump sum you're considering using for prepayment",
              "Expected Annual Return on Investment: The yearly return you expect from investing that money instead",
            ],
          },
          {
            title: "Step 3: Click Calculate",
            bullets: [
              'Press the "Calculate" button to see the comparison between prepaying your loan versus investing the money.',
            ],
          },
          {
            title: "Step 4: Analyze the Results",
            bullets: [
              "Review the comparison to understand which option is financially better:",
              "Prepayment Savings: How much interest you'll save by prepaying",
              "Investment Returns: How much you could earn by investing",
              "Decision: Which option gives you better financial outcomes",
            ],
          },
        ],
      },
      {
        heading: "Understanding the Results",
        subSections: [
          {
            title: "When Prepayment is Better",
            bullets: [
              "Prepayment typically makes more sense when:",
              "Your loan interest rate is higher than your expected investment returns",
              "You have a low-risk tolerance and want guaranteed savings",
              "You're nearing the end of your loan tenure (more of your EMI goes toward principal)",
            ],
          },
          {
            title: "When Investing is Better",
            bullets: [
              "Investing typically makes more sense when:",
              "Your expected investment returns are higher than your loan interest rate",
              "You have a higher risk tolerance and can handle market fluctuations",
              "Your loan has a low interest rate (like education or home loans with subsidies)",
            ],
          },
        ],
      },
      {
        heading: "Important Considerations",
        bullets: [
          "Risk Factor: Prepayment gives guaranteed savings, while investments carry market risk",
          "Liquidity: Once you prepay a loan, you can't get that money back. Investments may offer more liquidity",
          "Tax Implications: Consider tax benefits on both loan interest (if applicable) and investment returns",
          "Prepayment Charges: Some loans have prepayment penalties - factor these into your calculations",
          "Investment Timeframe: The calculator assumes you'll invest for the remaining loan tenure",
        ],
      },
      {
        heading: "Example Scenario",
        bullets: [
          "Situation: You have a home loan with ₹10,00,000 outstanding at 9% interest, with 10 years remaining. You have ₹2,00,000 extra that you could either prepay or invest.",
          "Comparison: If you expect 12% returns from investments, the calculator will show that investing yields better financial outcomes than prepaying the loan.",
          "Decision: In this case, investing the money would be the better financial choice.",
        ],
      },
    ],
  };

  return (
    <div className="mx-auto py-10 lg:px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {guide.title}
      </h1>

      <div className="space-y-10">
        {guide.content.map((section, idx) => (
          <div key={idx} className="rounded-2xl ">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              {section.heading}
            </h2>

            {section.text && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseMarkdownBold(section.text) }}
              />
            )}

            {section.steps && (
              <div className="space-y-6">
                {section.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {step.bullets.map((point, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{ __html: parseMarkdownBold(point) }}
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
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{sub.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {sub.bullets.map((b, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{ __html: parseMarkdownBold(b) }}
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
                    dangerouslySetInnerHTML={{ __html: parseMarkdownBold(b) }}
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

export default EMIPrepayGuide;
