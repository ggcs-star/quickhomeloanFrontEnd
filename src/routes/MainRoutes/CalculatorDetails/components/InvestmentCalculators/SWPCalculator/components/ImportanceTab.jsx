// components/ImportanceTab.js
import React from 'react';

const ImportanceTab = () => {
  const benefits = [
    {
      title: "Prevents Over-Withdrawal",
      description: "By showing the long-term impact of withdrawal rates, it helps prevent the common mistake of withdrawing too much too soon, which can prematurely deplete your corpus."
    },
    {
      title: "Supports Retirement Planning",
      description: "For retirees, it provides a structured approach to converting life savings into regular income, reducing financial stress during retirement years."
    },
    {
      title: "Enables Goal-Based Planning",
      description: "Whether saving for education, travel, or other goals, you can align withdrawal patterns with specific financial objectives and timelines."
    },
    {
      title: "Facilitates Investment Decisions",
      description: "By testing different return scenarios, you can make informed decisions about asset allocation and investment products that match your risk tolerance and income needs."
    },
    {
      title: "Provides Early Warning System",
      description: "If calculations show your corpus depleting too soon, you have time to adjust your strategy - either by reducing withdrawals, working longer, or seeking higher returns."
    },
    {
      title: "Enhances Financial Literacy",
      description: "Using the calculator helps you understand important financial concepts like compounding, inflation adjustment, and sustainable withdrawal rates."
    }
  ];

  const applications = [
    "Retirement Planning: Determine how much you need to save for retirement and what withdrawal rate will sustain you through your retirement years.",
    "Financial Independence: For those pursuing FIRE (Financial Independence, Retire Early), calculate the corpus needed and sustainable withdrawal rate.",
    "Education Funding: Plan systematic withdrawals to fund children's education while preserving some corpus for other needs.",
    "Wealth Management: For high-net-worth individuals, structure withdrawals from investments to fund lifestyle while growing wealth.",
    "Estate Planning: Understand how different withdrawal strategies impact the legacy you can leave for heirs."
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Importance of SWP Calculator in Financial Planning</h2>
      
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Financial Decision Making</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          An SWP calculator transforms abstract financial concepts into concrete, actionable plans. 
          It bridges the gap between your current financial resources and future income needs.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
          <p className="text-gray-700">
            Without an SWP calculator, you're essentially guessing about one of the most critical aspects 
            of retirement planning: how much you can safely withdraw without running out of money. This tool 
            provides the clarity needed for confident financial decisions.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Benefits in Financial Planning</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real-World Applications</h3>
        
        <ul className="space-y-3">
          {applications.map((application, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>{application}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <p className="text-gray-700 font-medium">
          <strong>Remember:</strong> While an SWP calculator provides valuable projections, actual market returns will vary. 
          It's important to review and adjust your plan regularly based on actual performance and changing life circumstances.
        </p>
      </div>
    </div>
  );
};

export default ImportanceTab;