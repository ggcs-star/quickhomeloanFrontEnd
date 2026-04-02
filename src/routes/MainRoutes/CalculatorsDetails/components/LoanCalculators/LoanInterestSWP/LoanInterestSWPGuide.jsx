import React from "react";

// Helper function to parse **bold** markdown
const parseMarkdownBold = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const LoanInterestSWPGuide = () => {
  const guide = {
    title: "Loan Interest vs EMI-SWP Interest - Complete Guide",
    content: [
      {
        heading: "📌 What This Calculator Does",
        text: `This calculator helps you solve a common financial dilemma: "Should I redeem my mutual fund investment for a big expense, or take a loan and use SWP to pay the EMIs?"
Think of it as your personal financial strategist that calculates the exact return your mutual fund needs to generate to cover your loan payments through systematic withdrawals, while keeping your original investment working for you.`,
      },
      {
        heading: "🚀 How to Use It - Step by Step",
        steps: [
          {
            title: "Step 1: Enter Your Investment Details",
            bullets: [
              "Current Mutual Fund Value: Enter your total investment amount",
              "Example: ₹10,00,000 (your existing mutual fund portfolio)",
            ],
          },
          {
            title: "Step 2: Input Loan Parameters",
            bullets: [
              "Loan Interest Rate: Type the annual interest rate offered by your lender",
              "Example: 9.5% per year (typical personal loan rate)",
              "Loan Tenure: Select how many years you'll take to repay",
              "Example: 10 years (common loan period)",
            ],
          },
          {
            title: "Step 3: Get Your Strategy Analysis",
            bullets: [
              'Click the "Calculate" button',
              "Receive instant analysis of your Loan + SWP strategy",
            ],
          },
        ],
      },
      {
        heading: "📊 Understanding Your Results",
        subSections: [
          {
            title: "Monthly EMI/SWP Amount",
            bullets: [
              "What it shows: Your fixed monthly payment amount",
              "How to read it: This is both your loan EMI AND your mutual fund withdrawal amount",
              "Example: ₹12,947 means you'll pay this much monthly to the bank AND withdraw this much monthly from your MF",
            ],
          },
          {
            title: "Required Mutual Fund Return Rate",
            bullets: [
              "What it shows: The minimum annual return your mutual fund must earn",
              "How to interpret it:",
              "If your MF earns less than this rate → Your investment may deplete before loan ends",
              "If your MF earns more than this rate → You'll have money left after loan repayment",
              "If your MF earns exactly this rate → Perfect balance - zero balance when loan closes",
            ],
          },
          {
            title: "Strategy Comparison Table",
            bullets: [
              "Redeem MF Strategy: Shows the outcome if you simply cash out your investment",
              "Loan + SWP Strategy: Shows the outcome if you use the calculated approach",
              "Key difference: Highlights whether you preserve your investment or lose it",
            ],
          },
        ],
      },
      {
        heading: "💡 Why This Calculator is a Game-Changer",
        subSections: [
          {
            title: "Better Financial Decisions",
            bullets: [
              "Stop guessing: Get precise numbers instead of rough estimates",
              "Avoid emotional choices: Let data guide your investment decisions",
              "See the full picture: Understand long-term implications of your choice",
            ],
          },
          {
            title: "Wealth Preservation Power",
            bullets: [
              "Keep your investment alive: Your mutual fund continues working for you",
              "Potential growth opportunity: Your money stays invested in markets",
              "Discipline built-in: SWP creates automatic financial discipline",
            ],
          },
          {
            title: "Risk Management Tool",
            bullets: [
              "Know your break-even point: Understand exactly what return you need",
              "Compare costs clearly: See loan interest vs. required investment returns",
              "Assess feasibility: Check if the required return is realistic for your fund type",
            ],
          },
          {
            title: "Strategic Planning",
            bullets: [
              "Test different scenarios: What if loan rates change? What if tenure varies?",
              "Plan with confidence: Make informed decisions about large expenses",
              "Optimize timing: Find the right balance between loan cost and investment risk",
            ],
          },
        ],
      },
      {
        heading: "🎯 Real-Life Example",
        bullets: [
          "Situation: You need ₹10 lakhs for home renovation",
          "Option A: Redeem your ₹10 lakh mutual fund investment → Your investment is gone, no future growth",
          "Option B: Use this calculator → Finds: You need a loan at 9.5% for 10 years",
          "EMI: ₹12,947 per month",
          "Required MF return: 10.72% annually",
          "Result: Your ₹10 lakh investment stays intact while paying EMIs",
        ],
      },
      {
        heading: "💎 Pro Tip for Best Results",
        bullets: [
          `"Try adjusting the loan tenure by 1-2 years and watch how it affects your required return rate - sometimes a small extension can significantly reduce your investment risk!"`,
        ],
      },
      {
        heading: "🛡️ Important Considerations",
        bullets: [
          "Remember: This calculator provides estimates based on consistent returns. Real mutual fund performance may vary due to market conditions. Consider consulting with a financial advisor for personalized advice.",
          "Additional factors to think about:",
          "Tax implications on SWP withdrawals",
          "Loan processing fees and charges",
          "Your risk tolerance for market fluctuations",
          "Emergency fund requirements",
        ],
      },
      {
        heading: "Final Takeaway",
        bullets: [
          "Make smarter financial decisions with confidence - because your money should work as hard as you do",
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

export default LoanInterestSWPGuide;
