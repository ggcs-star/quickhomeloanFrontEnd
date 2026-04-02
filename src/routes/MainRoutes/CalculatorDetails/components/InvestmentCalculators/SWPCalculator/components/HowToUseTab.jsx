// components/HowToUseTab.js
import React from 'react';

const HowToUseTab = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Your Lump-sum Investment",
      description: "Input the total amount you plan to invest initially. This is your starting corpus from which you'll make regular withdrawals."
    },
    {
      number: 2,
      title: "Set Your Regular Withdrawal Amount",
      description: "Enter how much money you want to withdraw at each interval (monthly, quarterly, etc.). This should align with your income needs."
    },
    {
      number: 3,
      title: "Choose Withdrawal Frequency",
      description: "Select how often you want to make withdrawals - monthly, quarterly, half-yearly, or yearly. Monthly is most common for regular income needs."
    },
    {
      number: 4,
      title: "Configure Annual Adjustment (Optional)",
      description: "If you want your withdrawals to increase over time (to counter inflation), choose between a fixed rupee amount or percentage increase annually."
    },
    {
      number: 5,
      title: "Set Expected Annual Return",
      description: "Enter the average annual return you expect from your investments. Be realistic based on your investment strategy (equity, debt, or balanced)."
    },
    {
      number: 6,
      title: "Define Withdrawal Term",
      description: "Specify how many years you plan to continue these withdrawals. For retirement planning, this might be your life expectancy after retirement."
    },
    {
      number: 7,
      title: "Analyze the Results",
      description: "Review the summary, chart, and year-by-year table to understand how your corpus will change over time and whether your plan is sustainable."
    }
  ];

  const tips = [
    {
      title: "Be Conservative with Returns",
      description: "Use slightly lower return assumptions than historical averages to build a safety buffer for market downturns."
    },
    {
      title: "Consider Inflation",
      description: "If you're planning for the long term, use the annual adjustment feature to increase withdrawals by 5-7% annually to maintain purchasing power."
    },
    {
      title: "Test Multiple Scenarios",
      description: "Run calculations with different withdrawal amounts and return expectations to find the optimal balance for your needs."
    },
    {
      title: "Monitor Regularly",
      description: "Revisit your SWP calculations annually or when your financial situation changes significantly."
    },
    {
      title: "Include a Safety Margin",
      description: "Ensure your corpus doesn't deplete completely - aim to preserve some principal for emergencies or legacy purposes."
    },
    {
      title: "Consult a Financial Advisor",
      description: "For significant amounts or complex situations, complement calculator results with professional financial advice."
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">How to Use the SWP Calculator</h2>
      
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step-by-Step Guide</h3>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Pro Tips for Best Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{tip.title}</h4>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowToUseTab;