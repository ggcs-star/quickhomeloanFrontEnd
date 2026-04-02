import React from "react";

// Helper function: Convert markdown-style bold (**) to <strong>
const parseMarkdownBold = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const LoanInterestVsFdInterestGuide = () => {
  const guide = {
    title: "Loan Interest vs FD Interest Calculator - Complete Guide",
    content: [
      {
        heading: "What This Is",
        text: `This calculator helps you compare apples to oranges! It shows you how loan interest rates and investment returns relate to each other. Ever wondered if paying off a loan is better than investing? This tool gives you the answer by finding equivalent rates between borrowing and investing.`,
      },
      {
        heading: "How to Use It - 3 Simple Steps",
        steps: [
          {
            title: "Step 1: Choose Your Starting Point",
            bullets: [
              'Select "FD/Mutual Fund Interest" if you know your investment return rate',
              'Select "Loan Interest" if you know your borrowing cost',
            ],
          },
          {
            title: "Step 2: Enter Your Numbers",
            bullets: [
              "Interest Rate: Type the annual percentage (like 5.0 or 7.5)",
              "Duration: Enter the number of years (1 to 500)",
            ],
          },
          {
            title: "Step 3: Get Your Answer",
            bullets: [
              'Click "Calculate Equivalent Rate"',
              "See instant results with clear explanation",
            ],
          },
        ],
      },
      {
        heading: "Understanding Your Results",
        subSections: [
          {
            title: "If You Entered FD/MF Rate",
            bullets: [
              '"You\'ll see the equivalent loan interest rate. For example:"',
              '"5% FD for 10 years = 9.10% Loan Rate"',
              "This means: Earning 5% on investments has similar financial impact as borrowing at 9.10%",
            ],
          },
          {
            title: "If You Entered Loan Rate",
            bullets: [
              '"You\'ll see the equivalent investment return. For example:"',
              '"7% Loan for 20 years = 4.12% FD Rate"',
              "This means: Paying off a 7% loan is as valuable as earning 4.12% on investments",
            ],
          },
        ],
      },
      {
        heading: "Why This Matters for Your Decisions",
        bullets: [
          "**Make Smarter Choices:**",
          "Debt vs Investment: Should you prepay loans or invest? Now you know!",
          "Loan Shopping: Is that 11% personal loan actually good compared to your 6% FD returns?",
          "Financial Planning: Understand the true cost of borrowing vs potential returns",
          "**Real-Life Examples:**",
          "Choosing between prepaying home loan or keeping money in FDs",
          "Evaluating if a car loan offer is reasonable",
          "Deciding between education loan and using savings",
        ],
      },
      {
        heading: "Your Financial Insight",
        text: "Try comparing different time periods - you'll see how longer durations change the equivalence, helping you plan for both short-term and long-term goals!",
        bullets: [
          "*Final Tip: Use this calculator before every major borrowing or investment decision - it takes 30 seconds but could save you thousands!*",
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
          <div key={idx} className="rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              {section.heading}
            </h2>

            {/* Plain text */}
            {section.text && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownBold(section.text),
                }}
              />
            )}

            {/* Steps */}
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

            {/* Subsections */}
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

            {/* Bullets */}
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

export default LoanInterestVsFdInterestGuide;
