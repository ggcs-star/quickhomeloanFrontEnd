import React from "react";

// Helper to parse **bold** markdown
const parseMarkdownBold = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const TimeValueGuide = () => {
  const guide = {
    title: "EMI Calculator: Your Guide to Understanding Loan Interest Rates",
    content: [
      {
        heading: "📌 What This Calculator Does",
        text: `This calculator helps you discover the true annual interest rate on your loan when you know your monthly payment amount. It's perfect for understanding the real cost of loans or verifying the interest rate you're being charged.`,
      },
      {
        heading: "🚀 How to Use It",
        steps: [
          {
            title: "Step 1: Enter Loan Amount",
            bullets: ["The total money you borrowed."],
          },
          {
            title: "Step 2: Input Your Monthly EMI",
            bullets: ["Your fixed monthly payment."],
          },
          {
            title: "Step 3: Provide Your Loan Term",
            bullets: ["In months - e.g., 24 months for 2 years."],
          },
          {
            title: "Step 4: Calculate",
            bullets: ['Click "Calculate" to see your annual interest rate.'],
          },
        ],
      },
      {
        heading: "📊 Understanding Your Results",
        bullets: [
          "Annual Interest Rate: The percentage you pay yearly for borrowing money",
          "This is the effective interest rate - the true cost of your loan",
          "Lower rates mean you pay less overall for your loan",
          "Higher rates mean the loan is more expensive in the long run",
        ],
      },
      {
        heading: "💡 Why This Matters for Your Finances",
        bullets: [
          "Compare loan offers from different lenders accurately",
          "Understand the true cost of your existing loans",
          "Plan your budget by knowing your actual interest expenses",
          "Make informed decisions when taking new loans",
          "Spot potentially expensive loans before you commit",
          "Try adjusting your EMI amount to see how it affects your interest rate - even small changes can make a big difference!",
        ],
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

export default TimeValueGuide;
