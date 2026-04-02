import React from 'react';

const InfoSections = ({ activeTab }) => {
  const content = {
    'why-needed': (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Why You Need an SWP Calculator</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Planning for Regular Income</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A Systematic Withdrawal Plan (SWP) calculator is essential for anyone who wants to generate 
              a regular income stream from their investments while preserving the principal amount as much as possible.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
              <p className="text-gray-800 leading-relaxed">
                Whether you're a retiree needing monthly income, an investor looking to supplement your earnings, 
                or someone planning for financial independence, an SWP calculator helps you understand how long 
                your corpus will last under different withdrawal scenarios.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Reasons to Use an SWP Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Avoid Running Out of Money</h4>
                  <p className="text-gray-700 text-sm">
                    One of the biggest fears for retirees is outliving their savings. An SWP calculator shows 
                    exactly how many years your corpus will last based on your withdrawal rate and expected returns.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Optimize Withdrawal Strategy</h4>
                  <p className="text-gray-700 text-sm">
                    Find the perfect balance between your current income needs and long-term corpus preservation. 
                    Test different withdrawal amounts to see their impact on your financial future.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Plan for Inflation</h4>
                  <p className="text-gray-700 text-sm">
                    With the annual adjustment feature, you can simulate increasing withdrawals to counter inflation, 
                    ensuring your purchasing power remains constant over time.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Compare Investment Options</h4>
                  <p className="text-gray-700 text-sm">
                    Test how different expected returns affect your withdrawal sustainability and make 
                    informed investment decisions.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Visualize Your Financial Future</h4>
                  <p className="text-gray-700 text-sm">
                    See year-by-year projections of your corpus, helping you understand the trajectory 
                    of your finances and make necessary adjustments early.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Peace of Mind</h4>
                  <p className="text-gray-700 text-sm">
                    Knowing exactly how your withdrawals will impact your corpus over time provides 
                    confidence in your financial planning and reduces anxiety about the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'how-to-use': (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">How to Use the SWP Calculator</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step-by-Step Guide</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Enter Your Lump-sum Investment", desc: "Input the total amount you plan to invest initially. This is your starting corpus from which you'll make regular withdrawals." },
                { step: 2, title: "Set Your Regular Withdrawal Amount", desc: "Enter how much money you want to withdraw at each interval (monthly, quarterly, etc.). This should align with your income needs." },
                { step: 3, title: "Choose Withdrawal Frequency", desc: "Select how often you want to make withdrawals - monthly, quarterly, half-yearly, or yearly. Monthly is most common for regular income needs." },
                { step: 4, title: "Configure Annual Adjustment (Optional)", desc: "If you want your withdrawals to increase over time (to counter inflation), choose between a fixed rupee amount or percentage increase annually." },
                { step: 5, title: "Set Expected Annual Return", desc: "Enter the average annual return you expect from your investments. Be realistic based on your investment strategy (equity, debt, or balanced)." },
                { step: 6, title: "Define Withdrawal Term", desc: "Specify how many years you plan to continue these withdrawals. For retirement planning, this might be your life expectancy after retirement." },
                { step: 7, title: "Analyze the Results", desc: "Review the summary, chart, and year-by-year table to understand how your corpus will change over time and whether your plan is sustainable." }
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pro Tips for Best Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Be Conservative with Returns - Use slightly lower return assumptions than historical averages to build a safety buffer.",
                  "Consider Inflation - Use the annual adjustment feature to increase withdrawals by 5-7% annually to maintain purchasing power.",
                  "Test Multiple Scenarios - Run calculations with different withdrawal amounts and return expectations."
                ].map((tip, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Monitor Regularly - Revisit your SWP calculations annually or when your financial situation changes.",
                  "Include a Safety Margin - Ensure your corpus doesn't deplete completely - preserve some principal for emergencies.",
                  "Consult a Financial Advisor - For significant amounts, complement calculator results with professional advice."
                ].map((tip, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'importance': (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Importance of SWP Calculator in Financial Planning</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Financial Decision Making</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              An SWP calculator transforms abstract financial concepts into concrete, actionable plans. 
              It bridges the gap between your current financial resources and future income needs.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
              <p className="text-gray-800 leading-relaxed">
                Without an SWP calculator, you're essentially guessing about one of the most critical aspects 
                of retirement planning: how much you can safely withdraw without running out of money. This tool 
                provides the clarity needed for confident financial decisions.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits in Financial Planning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Prevents Over-Withdrawal - Shows the long-term impact of withdrawal rates to prevent premature corpus depletion.",
                  "Supports Retirement Planning - Provides structured approach to converting savings into regular retirement income.",
                  "Enables Goal-Based Planning - Align withdrawal patterns with specific financial objectives and timelines."
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Facilitates Investment Decisions - Test different return scenarios for informed asset allocation decisions.",
                  "Provides Early Warning System - Identify if corpus is depleting too soon and adjust strategy accordingly.",
                  "Enhances Financial Literacy - Understand compounding, inflation adjustment, and sustainable withdrawal rates."
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real-World Applications</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Retirement Planning:</strong> Determine how much you need to save and what withdrawal rate will sustain you through retirement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Financial Independence:</strong> Calculate the corpus needed and sustainable withdrawal rate for FIRE movement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Education Funding:</strong> Plan systematic withdrawals to fund children's education while preserving corpus.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Wealth Management:</strong> Structure withdrawals from investments to fund lifestyle while growing wealth.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Estate Planning:</strong> Understand how withdrawal strategies impact the legacy for heirs.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <p className="text-gray-800 leading-relaxed">
              <strong>Remember:</strong> While an SWP calculator provides valuable projections, actual market returns will vary. 
              It's important to review and adjust your plan regularly based on actual performance and changing life circumstances.
            </p>
          </div>
        </div>
      </div>
    )
  };

  return content[activeTab] || null;
};

export default InfoSections;