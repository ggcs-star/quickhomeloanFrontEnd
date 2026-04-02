import React, { useState } from "react";

const LoanVsFdGuide = () => {
  const [showJSON, setShowJSON] = useState(false);

  const staticDB = [
    {
      id: 1,
      title: "Loan vs. FD Calculator - Complete Guide",
      content: [
        {
          heading: "What This Calculator Is",
          text: `Imagine standing at a financial crossroads — one path says <b>"Take a Loan"</b> and the other says <b>"Break Your FD."</b> This calculator is your personal financial guide that shows you exactly which path leads to more money in your pocket. It does all the complex number-crunching so you can make confident decisions about big purchases without second-guessing yourself.`,
        },
        {
          heading: "How to Use It - Simple Step-by-Step",
          steps: [
            {
              title: "Step 1: Enter Your Purchase Details",
              bullets: [
                "Type the total amount you need for your car, home, or any big purchase.",
                "<b>Example:</b> '500000' for a ₹5 lakh car.",
              ],
            },
            {
              title: "Step 2: Provide Loan Information",
              bullets: [
                "Enter the interest rate your bank offers for the loan.",
                "<b>Example:</b> '8.5' for 8.5% annual interest.",
              ],
            },
            {
              title: "Step 3: Share Your FD Details",
              bullets: [
                "Input your current Fixed Deposit interest rate.",
                "<b>Example:</b> '6.5' for 6.5% annual returns.",
              ],
            },
            {
              title: "Step 4: Set Economic Factors",
              bullets: [
                "Add current inflation rate (check recent news for this number).",
                "Include expected growth rate of your purchase (if applicable).",
              ],
            },
            {
              title: "Step 5: Choose Your Timeframe",
              bullets: [
                "Select how many years you want for repayment or investment.",
                "<b>Example:</b> '5' for a 5-year plan.",
              ],
            },
            {
              title: "Step 6: Click “Calculate & Compare”",
              bullets: ["That's it! Instantly get a clear comparison of both options."],
            },
          ],
        },
        {
          heading: "Understanding Your Results - What Those Numbers Really Mean",
          subSections: [
            {
              title: "For Loan Option:",
              bullets: [
                "<b>Monthly EMI:</b> Your fixed monthly payment amount — can you comfortably afford this?",
                "<b>Total Interest Paid:</b> The extra money you'll pay the bank over the years.",
                "<b>Total Amount Paid:</b> Principal + Interest — the real cost of your purchase.",
              ],
            },
            {
              title: "For FD Option:",
              bullets: [
                "<b>FD Maturity Value:</b> How much your FD would grow if left untouched.",
                "<b>Total Interest Earned:</b> Free money you'd earn by keeping your FD.",
                "<b>Opportunity Cost:</b> What you lose by breaking your FD early.",
              ],
            },
            {
              title: "The Final Verdict:",
              bullets: [
                "<span class='text-green-700 font-semibold'>FD Recommended:</span> Breaking your FD saves you more money.",
                "<span class='text-blue-700 font-semibold'>Loan Recommended:</span> Taking a loan is the smarter financial move.",
                "<b>Net Difference:</b> The exact amount you save by choosing the recommended option.",
              ],
            },
          ],
        },
        {
          heading: "Why This Calculator Changes Everything for Your Finances",
          subSections: [
            {
              title: "Stop Guessing, Start Knowing",
              bullets: [
                "No more wondering 'Did I make the right choice?'",
                "Clear numbers replace financial confusion.",
                "Gain confidence in your money decisions.",
              ],
            },
            {
              title: "See the Hidden Costs",
              bullets: [
                "Understand the true price of loan interest.",
                "Discover the real value of your FD.",
                "Compare options like a financial expert.",
              ],
            },
            {
              title: "Plan Your Future Better",
              bullets: [
                "Avoid draining your savings unnecessarily.",
                "Keep your money working for you.",
                "Balance today’s needs with tomorrow’s security.",
              ],
            },
            {
              title: "Make Smarter Choices",
              bullets: [
                "Purchase assets without financial stress.",
                "Grow your wealth while spending.",
                "Become the boss of your money.",
              ],
            },
          ],
        },
        {
          heading: "Your Action Plan",
          bullets: [
            "<b>Try This Today:</b> Test different scenarios — see what happens if loan rates drop or FD rates increase. Notice how small changes create big differences in your final savings!",
            "<b>Remember:</b> The best financial decision is an informed one. Use this calculator every time you face the loan-versus-FD question — your future self will thank you for it!",
          ],
        },
      ],
    },
  ];

  const guide = staticDB[0];

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

            {/* Plain Text */}
            {section.text && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            )}

            {/* Steps */}
            {section.steps && (
              <div className="space-y-6">
                {section.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {step.bullets.map((b, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Sub Sections */}
            {section.subSections && (
              <div className="space-y-6">
                {section.subSections.map((sub, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-lg mb-2">{sub.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {sub.bullets.map((b, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
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
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanVsFdGuide;
