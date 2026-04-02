// components/WhyNeededTab.js
import React from 'react';

const WhyNeededTab = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Why You Need an SWP Calculator</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Planning for Regular Income</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A Systematic Withdrawal Plan (SWP) calculator is essential for anyone who wants to generate 
            a regular income stream from their investments while preserving the principal amount as much as possible.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <p className="text-gray-700">
              Whether you're a retiree needing monthly income, an investor looking to supplement your earnings, 
              or someone planning for financial independence, an SWP calculator helps you understand how long 
              your corpus will last under different withdrawal scenarios.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Reasons to Use an SWP Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Avoid Running Out of Money</h4>
                <p className="text-gray-600">
                  One of the biggest fears for retirees is outliving their savings. An SWP calculator shows 
                  exactly how many years your corpus will last based on your withdrawal rate and expected returns.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Optimize Withdrawal Strategy</h4>
                <p className="text-gray-600">
                  Find the perfect balance between your current income needs and long-term corpus preservation. 
                  Test different withdrawal amounts to see their impact on your financial future.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Plan for Inflation</h4>
                <p className="text-gray-600">
                  With the annual adjustment feature, you can simulate increasing withdrawals to counter inflation, 
                  ensuring your purchasing power remains constant over time.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Compare Investment Options</h4>
                <p className="text-gray-600">
                  Test how different expected returns (from various investment vehicles) affect your withdrawal 
                  sustainability and make informed investment decisions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Visualize Your Financial Future</h4>
                <p className="text-gray-600">
                  See year-by-year projections of your corpus, helping you understand the trajectory of your 
                  finances and make necessary adjustments early.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Peace of Mind</h4>
                <p className="text-gray-600">
                  Knowing exactly how your withdrawals will impact your corpus over time provides confidence 
                  in your financial planning and reduces anxiety about the future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyNeededTab;