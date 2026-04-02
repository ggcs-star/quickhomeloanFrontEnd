import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'calculator', label: 'SWP Calculator' },
    { id: 'why-needed', label: 'Why This Calculator?' },
    { id: 'how-to-use', label: 'How To Use' },
    { id: 'importance', label: 'Importance' }
  ];

  return (
    <div className="flex bg-white rounded-t-2xl shadow-lg overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-white text-primary-500 border-b-2 border-primary-500'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;