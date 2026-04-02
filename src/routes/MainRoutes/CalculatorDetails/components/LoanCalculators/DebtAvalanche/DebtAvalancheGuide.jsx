import React, { useState } from "react";

const DebtAvalancheGuide = () => {
  const [showJSON, setShowJSON] = useState(false);

  // Helper function: Convert markdown-style bold (**) to <strong>
  const parseMarkdownBold = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  const staticDB = [
    {
      id: 1,
      title: "Your Complete Guide to the Debt Payoff Strategy Calculator",
      content: [
        {
          heading: "What This Calculator Is - Your Personal Debt Freedom Advisor",
          text: `Imagine having a financial advisor who works 24/7 just for you—that's exactly what this Debt Avalanche vs. Snowball Calculator offers. This powerful tool acts as your personal debt strategist, carefully analyzing your unique financial situation to create the fastest and most cost-effective path to becoming debt-free. Whether you're dealing with credit card balances, personal loans, or multiple debts dragging you down, this calculator becomes your trusted companion in the journey toward financial liberation.`,
        },
        {
          heading: "How to Use It - Your Step-by-Step Roadmap to Financial Clarity",
          steps: [
            {
              title: "Step 1: Paint Your Complete Debt Picture",
              bullets: [
                "Gather all your debt statements—credit cards, personal loans, auto loans, or any other outstanding balances.",
                "For each debt, carefully enter three crucial numbers: the current balance, the annual interest rate, and the minimum monthly payment.",
                "Click **Add Another Debt** to include all obligations for accuracy.",
                "**Example:** If you have a credit card with ₹50,000 balance at 18% interest and ₹2,000 minimum payment, enter these exact numbers.",
              ],
            },
            {
              title: "Step 2: Determine Your Debt-Fighting Power",
              bullets: [
                "Assess how much extra money you can dedicate monthly beyond your minimum payments.",
                "This could come from reducing expenses or additional income sources.",
                "Even if it's just ₹500 or ₹1,000 extra—every rupee accelerates your journey.",
                "**Pro tip:** Be realistic but ambitious. This represents your commitment to financial freedom.",
              ],
            },
            {
              title: "Step 3: Discover Your Optimal Strategy",
              bullets: [
                "Click **Compare Strategies** to see two complete payoff scenarios.",
                "The calculator instantly compares **Debt Avalanche** and **Debt Snowball** methods.",
                "Review both strategies carefully—it’s about choosing what fits your personality and goals.",
              ],
            },
          ],
        },
        {
          heading: "Understanding Your Results - Reading Your Financial Future",
          subSections: [
            {
              title: "The Debt Avalanche Strategy - The Mathematical Powerhouse",
              bullets: [
                "**Total Months to Freedom:** The countdown to being debt-free. Example: '24 months' means you could be debt-free in 2 years.",
                "**Total Interest Cost:** Displays how much interest you’ll pay and how much you’ll save using this strategy.",
                "**Why This Matters:** This is the fastest and most cost-efficient route—like taking a direct flight to your destination.",
              ],
            },
            {
              title: "The Debt Snowball Strategy - The Motivational Engine",
              bullets: [
                "**Your Debt-Free Timeline:** Watch how smaller debts disappear first, building motivation.",
                "**Total Interest Impact:** See the trade-off between motivation and total savings.",
                "**Why This Matters:** This approach helps maintain momentum through quick wins—like a road trip with frequent stops.",
              ],
            },
          ],
        },
        {
          heading: "Your Personalized Recommendation - The Smart Choice",
          bullets: [
            "The calculator compares both strategies and highlights your **optimal path**.",
            "If **Avalanche** is recommended, it saves you the most money.",
            "If **Snowball** is suggested, it prioritizes motivation and small wins.",
            "It’s not just math—it’s a smart suggestion designed for real people.",
          ],
        },
        {
          heading: "Why This Calculator Is a Game-Changer for Your Financial Health",
          subSections: [
            {
              title: "Transform Financial Stress into Clear Action",
              bullets: [
                "Replace anxiety with confidence and a clear plan.",
                "Turn 'when will this end?' into a specific date to circle on your calendar.",
              ],
            },
            {
              title: "Become the CEO of Your Debt Repayment",
              bullets: [
                "Make **data-driven decisions** instead of guessing.",
                "Understand how each payment impacts your timeline and savings.",
              ],
            },
            {
              title: "Build Wealth Instead of Paying Interest",
              bullets: [
                "Every rupee saved on interest is a rupee you can invest.",
                "Break the cycle of debt and start building real wealth sooner.",
              ],
            },
            {
              title: "Develop Lifelong Financial Wisdom",
              bullets: [
                "Learn how interest rates truly impact your finances.",
                "Gain skills to stay out of debt for life.",
              ],
            },
            {
              title: "Create Your Customized Success Path",
              bullets: [
                "Discover whether you're motivated by **saving money** or **quick wins**.",
                "Build a debt strategy that matches your personality and goals.",
              ],
            },
          ],
        },
        {
          heading: "Your Life-Changing Final Tip",
          bullets: [
            "**Experiment** with different extra payment amounts.",
            "Even increasing by 10% monthly can reduce your debt-free timeline by **months or years**.",
            "Small sacrifices today lead to tomorrow’s financial freedom.",
          ],
        },
      ],
    },
  ];

  const guide = staticDB[0];

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

export default DebtAvalancheGuide;
