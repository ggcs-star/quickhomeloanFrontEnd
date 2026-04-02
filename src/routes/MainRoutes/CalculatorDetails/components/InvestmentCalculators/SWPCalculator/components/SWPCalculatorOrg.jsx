// components/SWPCalculator.js
import React, { useState, useEffect } from 'react';
import CalculatorTab from './CalculatorTab';
import WhyNeededTab from './WhyNeededTab';
import HowToUseTab from './HowToUseTab';
import ImportanceTab from './ImportanceTab';

const SWPCalculatorOrg = () => {
  const [activeTab, setActiveTab] = useState('calculator');

  const tabs = [
    { id: 'calculator', label: 'SWP Calculator' },
    { id: 'why-needed', label: 'Why This Calculator?' },
    { id: 'how-to-use', label: 'How To Use' },
    { id: 'importance', label: 'Importance' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'calculator':
        return <CalculatorTab />;
      case 'why-needed':
        return <WhyNeededTab />;
      case 'how-to-use':
        return <HowToUseTab />;
      case 'importance':
        return <ImportanceTab />;
      default:
        return <CalculatorTab />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-8 text-black">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg ">SWP Calculator</h1>
        <p className="text-xl opacity-90">Plan your systematic withdrawals from your investments</p>
      </header>

      {/* Tabs */}
      <div className="bg-white rounded-t-xl overflow-hidden shadow-lg">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-blue-50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-b-xl shadow-lg">
        {renderTabContent()}
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 text-white opacity-80">
        <p>SWP Calculator • Plan your financial future with confidence</p>
      </footer>
    </div>
  );
};

export default SWPCalculatorOrg;